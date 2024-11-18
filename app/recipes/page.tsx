import Link from "next/link";
import { Card } from "@/components/ui/Card/Card";
import { CardContent } from "@/components/ui/CardContent/CardContent";
import { CardHeader } from "@/components/ui/CardHeader/CardHeader";
import { CardTitle } from "@/components/ui/CardTitle/CardTitle";
import TRecipe from "@/types/TRecipe";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

interface RecipesPageProps {
  recipes: TRecipe[];
}

// interface Ingredient {
//   name: string;
//   amount: string;
//   notes: string;
// }

// interface TRecipe {
//   title: string;
//   description: string;
//   ingredients: Ingredient[];
//   steps: string[];
//   additionalNotes: string[];
//   servings: string;
// }

const RECIPES_QUERY = `
*[_type == "recipe"] {
  title,
}
`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const recipes = await client.fetch<SanityDocument[]>(
    RECIPES_QUERY,
    {},
    options
  );

  console.log("recipes: ", recipes);

  if (!recipes || recipes.length === 0) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            No Recipes Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sorry, no recipes are available at the moment.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {recipes.map((recipe) => (
        <Card key={recipe.title} className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              {recipe.title}
            </CardTitle>
            <p className="text-muted-foreground">{recipe.description}</p>
          </CardHeader>
          <CardContent>
            <Link
              href={`/recipes/${recipe.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <span className="text-blue underline cursor-pointer hover:opacity-80">
                View Recipe
              </span>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
