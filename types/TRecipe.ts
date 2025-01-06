interface Ingredient {
  name: string;
  quantity: string;
  additionalInfo: string;
}

interface TRecipe {
  title: string;
  description: string;
  ingredients: Ingredient[];
  preparationSteps: string[];
  additionalNotes: string[];
  servings: string;
  images: string[];
  pdf: {
    asset: {
      url: string;
    };
  };
}

export default TRecipe;
