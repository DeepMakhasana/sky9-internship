import { useContext } from "react";
import { RecipesContext } from "./recipes-context.tsx";
import { RecipesContextType } from "./type.ts";

export const useRecipes = () => {
  const recipes: RecipesContextType = useContext(RecipesContext);

  return recipes;
};
