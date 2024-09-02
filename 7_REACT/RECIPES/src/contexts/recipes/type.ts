export type RecipeType = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export interface RecipesDataType {
  limit: number;
  skip: number;
  total: number;
  recipes: RecipeType[];
}

export interface RecipesContextType {
  initialize: () => void;
  recipesData: RecipesDataType | null;
  getByTag: (tag: string) => void;
  getByMealType: (meal: string) => void;
  sortRecipes: (parameter: string) => void;
  setCustomPage: (page: number) => void;
  searchByRecipeName: (query: string) => void;
  // searchQuery: string;
  // setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  isLoading: boolean;
  error: string | null;
}
