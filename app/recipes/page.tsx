import Link from "next/link";
import { Card } from "@/components/ui/Card/Card";
import { CardContent } from "@/components/ui/CardContent/CardContent";
import { CardHeader } from "@/components/ui/CardHeader/CardHeader";
import { CardTitle } from "@/components/ui/CardTitle/CardTitle";
import TRecipe from "@/types/TRecipe";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import urlFor from "@/sanity/urlFor";
import Image from "next/image";

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
  images,
}
`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const recipes = await client.fetch<SanityDocument[]>(
    RECIPES_QUERY,
    {},
    options
  );

  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
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
      </div>
    );
  }

  return (
    <div className="justify-self-center w-full max-w-3xl mx-auto mt-32">
      {recipes.map((recipe) => (
        <Card key={recipe.title} className="mb-4">
          {recipe.images[0] && (
            <Image
              src={urlFor(recipe.images[0]).width(200).url() || ""}
              className="w-full h-auto"
              fill
              alt={recipe.title}
            />
          )}
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
