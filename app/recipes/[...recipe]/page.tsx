import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import TRecipe from "@/types/TRecipe";

const RECIPE_QUERY = (slug: string) => {
  return `*[_type == "recipe" && title == "${slug}"][0] {
    description,
    ingredients,
    preparationSteps,
    additionalNotes,
    servings,
    title,
    images
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
    // sean's-chili => Sean's Chili
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

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <RecipeCard recipe={recipe} />
    </main>
  );
}
