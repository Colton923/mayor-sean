import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
// import RecipeCard from "@/components/RecipeCard/RecipeCard";

const RECIPE_QUERY = (slug: string) => {
  return `*[_type == "recipe" && slug.current == ${slug}][0]`;
};

const options = { next: { revalidate: 30 } };

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = await client.fetch<SanityDocument>(
    RECIPE_QUERY(params.slug),
    params,
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
      <RecipeCard recipe={recipe as any} />
    </main>
  );
}
