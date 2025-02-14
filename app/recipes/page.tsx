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
import Intersection from "@/components/ui/Intersection/Intersection";

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
      <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-white max-w-full sm:max-w-[700px] lg:max-w-[1050px] shadow-lg mb-20 md:my-40 lg:my-48">
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
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-white max-w-full sm:max-w-[700px] lg:max-w-[1050px] shadow-lg mb-20 md:my-40 lg:my-48">
      <div className="flex flex-col items-center justify-center my-20 px-4">
        <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-center">
          Sean's Recipes
        </CardTitle>
        {recipes.map((recipe, index) => (
          <Intersection key={index} classNames="flex w-full justify-center">
            <Link
              href={`/recipes/${recipe.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="flex w-full justify-center"
            >
              <Card
                key={recipe.title}
                className="mb-4 flex flex-row h-[100px] overflow-hidden justify-between w-full hover:shadow-lg"
              >
                <div className="w-[200px] justify-start">
                  {recipe.images[0] && (
                    <Image
                      src={urlFor(recipe.images[0]).width(200).url() || ""}
                      height={200}
                      width={150}
                      className="object-cover h-full"
                      alt={recipe.title}
                    />
                  )}
                </div>
                <div className="w-full">
                  <CardHeader>
                    <CardTitle className="text-md md:text-lg lg:text-xl">
                      {recipe.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {recipe.description}
                    </p>
                  </CardHeader>
                </div>
              </Card>
            </Link>
          </Intersection>
        ))}
      </div>
    </div>
  );
}
