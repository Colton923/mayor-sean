import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import TRecipe from "@/types/TRecipe";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import urlFor from "@/sanity/urlFor";
import { Label } from "@/components/ui/Label/Label";

const RECIPE_QUERY = (slug: string) => {
  return `*[_type == "recipe" && title == "${slug}"][0] {
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
  const recipe = await client.fetch<SanityDocument<TRecipe>>(
    RECIPE_QUERY(title),
    {},
    options
  );
  const recipePDFLink =
    recipe.pdf?.asset?._ref &&
    `https://cdn.sanity.io/files/${client.config().projectId}/${
      client.config().dataset
    }/${recipe.pdf.asset._ref.split("-")[1]}.${
      recipe.pdf.asset._ref.split("-")[2]
    }`;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <RecipeCard recipe={recipe} />
      <Button size="lg" variant="ghost">
        {recipePDFLink && <Link href={recipePDFLink}>Download PDF</Link>}
      </Button>
    </main>
  );
}
