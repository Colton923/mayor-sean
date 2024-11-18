import { Card } from "@/components/ui/Card/Card";
import { Badge } from "@/components/ui/Badge/Badge";
import { CardContent } from "@/components/ui/CardContent/CardContent";
import { CardHeader } from "@/components/ui/CardHeader/CardHeader";
import { CardTitle } from "@/components/ui/CardTitle/CardTitle";
import TRecipe from "../../types/TRecipe";

export default function RecipeCard({ recipe }: { recipe?: TRecipe }) {
  console.log(recipe);

  if (!recipe || !recipe.title || !recipe.ingredients) {
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
                className="flex flex-col sm:flex-row sm:items-baseline"
              >
                <span className="font-medium min-w-[120px]">
                  {ingredient.quantity}
                </span>
                <span>{ingredient.name}</span>
                {ingredient.notes && (
                  <Badge variant="secondary" className="ml-2 mt-1 sm:mt-0">
                    {ingredient.notes}
                  </Badge>
                )}
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
        {recipe.additionalNotes.length > 0 && (
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
    </Card>
  );
}
