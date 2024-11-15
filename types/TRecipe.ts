interface Ingredient {
  name: string;
  amount: string;
  notes: string;
}

interface TRecipe {
  title: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  additionalNotes: string[];
  servings: string;
}

export default TRecipe;
