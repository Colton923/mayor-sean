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
      _ref: string;
      _type: string;
    };
  };
}

export default TRecipe;
