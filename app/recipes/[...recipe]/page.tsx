import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import TRecipe from "@/types/TRecipe";

const RECIPE_QUERY = (slug: string) => {
  return `*[_type == "recipe" && slug.current == "${slug}"][0]`;
};

const options = { next: { revalidate: 30 } };

type RecipePageProps = {
  params: { slug: string };
};

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await client.fetch<SanityDocument<TRecipe>>(
    RECIPE_QUERY(params.slug),
    {},
    options
  );

  if (!recipe) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1>recipe not found</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <RecipeCard recipe={recipe} />
    </main>
  );
}
