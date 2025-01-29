import { Card } from "@/components/ui/Card/Card";
import { Badge } from "@/components/ui/Badge/Badge";
import { CardContent } from "@/components/ui/CardContent/CardContent";
import { CardHeader } from "@/components/ui/CardHeader/CardHeader";
import { CardTitle } from "@/components/ui/CardTitle/CardTitle";
import TRecipe from "../../types/TRecipe";
import urlFor from "@/sanity/urlFor";

export default function RecipeCard({ recipe }: { recipe?: TRecipe }) {
  if (!recipe) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            Recipe Not Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sorry, the recipe you're looking for is not available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">{recipe.title}</CardTitle>
        <p className="text-muted-foreground">{recipe.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex justify-between w-full px-2 py-1 border-b border-muted-foreground items-center"
              >
                <span className="text-muted-foreground w-1/2">
                  {ingredient.quantity}
                </span>
                <span className="flex justify-flex-start w-1/2 flex-col space-x-2">
                  {ingredient.name}
                  {ingredient.additionalInfo && (
                    <div className="flex items-center">
                      <Badge variant="secondary" className="ml-2 mt-1 sm:mt-0">
                        {ingredient.additionalInfo}
                      </Badge>
                    </div>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.preparationSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        {recipe.additionalNotes?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Additional Notes</h3>
            <ul className="list-disc list-inside space-y-1">
              {recipe.additionalNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="text-sm text-muted-foreground">
          <strong>Servings:</strong> {recipe.servings}
        </div>
      </CardContent>
      {/* pictures */}
      <div className="flex flex-wrap justify-center items-center w-full">
        {recipe.images?.map((image, index) => (
          <img
            key={index}
            src={urlFor(image).width(200).url() || ""}
            className="w-1/2 md:w-1/3 lg:w-1/4 h-auto p-2"
          />
        ))}
      </div>
    </Card>
  );
}
