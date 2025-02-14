import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import TRecipe from "@/types/TRecipe";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import urlFor from "@/sanity/urlFor";
import { Label } from "@/components/ui/Label/Label";
import { Card } from "@/components/ui/Card/Card";
import { CardHeader } from "@/components/ui/CardHeader/CardHeader";
import { CardTitle } from "@/components/ui/CardTitle/CardTitle";
import { CardContent } from "@/components/ui/CardContent/CardContent";

const RECIPE_QUERY = (slug: string) => {
  return `*[_type == "recipe" && title match "${slug}"][0] {
    description,
    ingredients,
    preparationSteps,
    additionalNotes,
    servings,
    title,
    images,
    pdf
  }`;
};

const options = { next: { revalidate: 30 } };

type RecipePageProps = {
  params: Promise<{ recipe: string[] }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const res = await params;
  const slug = res.recipe[0];
  const titleFixer = (title: string) => {
    return title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const title = titleFixer(slug);
  const recipe = await client
    .fetch<SanityDocument<TRecipe>>(RECIPE_QUERY(title), {}, options)
    .then((res) => {
      return res;
    });
  const recipePDFLink =
    recipe?.pdf?.asset?._ref &&
    (() => {
      const refParts = recipe.pdf.asset._ref.split("-");
      const fileName = refParts[1]; // Extract the unique file identifier
      const extension = fileName.includes(".")
        ? fileName.split(".").slice(1).join(".") // Preserve compound extensions like docx.pdf
        : "pdf"; // Default fallback

      return `https://cdn.sanity.io/files/${client.config().projectId}/${
        client.config().dataset
      }/${fileName}.${extension}`;
    })();

  return (
    <div className="w-full max-w-3xl mx-auto my-20">
      <RecipeCard recipe={recipe} />
      <Button size="lg" variant="ghost">
        {recipePDFLink && <Link href={recipePDFLink}>Download PDF</Link>}
      </Button>
    </div>
  );
}
