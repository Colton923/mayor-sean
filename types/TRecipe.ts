interface Ingredient {
  name: string;
  quantity: string;
  notes: string;
}

interface TRecipe {
  title: string;
  description: string;
  ingredients: Ingredient[];
  preparationSteps: string[];
  additionalNotes: string[];
  servings: string;
}

export default TRecipe;
