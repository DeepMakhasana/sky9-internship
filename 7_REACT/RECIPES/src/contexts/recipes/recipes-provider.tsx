import React, { useState } from "react";
import { RecipesContext } from "./recipes-context.tsx";

export const RecipesProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipesData, setRecipesData] = useState([]);
  return <RecipesContext.Provider value={recipesData}>{children}</RecipesContext.Provider>;
};
