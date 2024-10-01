import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RecipesContext } from "./recipes-context.tsx";
import { RecipesDataType } from "./type.ts";
import { Axios } from "../../utils/axios.ts";

export const RecipesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [recipesData, setRecipesData] = useState<RecipesDataType | null>(null);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initialize = useCallback(async () => {
    setIsLoading(true);
    const { data, status } = await Axios.get(`/recipes?limit=10&skip=0`);
    if (status === 200) {
      console.log("recipes: ", data);
      setRecipesData(data);
    }
    setError(data.message);
    setIsLoading(false);
  }, []);

  const getByTag = useCallback(async (tag: string) => {
    setIsLoading(true);
    const { data, status } = await Axios.get(`/recipes/tag/${tag}`);
    if (status === 200) {
      console.log("tag by recipes: ", data);
      setRecipesData(data);
    }
    setError(data.message);
    setIsLoading(false);
  }, []);

  const getByMealType = useCallback(async (meal: string) => {
    setIsLoading(true);
    const { data, status } = await Axios.get(`/recipes/meal-type/${meal}`);
    if (status === 200) {
      setRecipesData(data);
    }
    setError(data.message);
    setIsLoading(false);
  }, []);

  const sortRecipes = useCallback(async (parameter: string) => {
    setIsLoading(true);
    let url: string;
    if (parameter === "difficulty") {
      url = `/recipes?sortBy=${parameter}&order=asc`;
    } else {
      url = `/recipes?sortBy=${parameter}&order=desc`;
    }
    const { data, status } = await Axios.get(url);
    if (status === 200) {
      setRecipesData(data);
    }
    setError(data.message);
    setIsLoading(false);
  }, []);

  // pagination system
  const nextPage = useCallback(async () => {
    const { data, status } = await Axios.get(
      `/recipes?limit=10&skip=${(page + 1) * 10}`
    );
    setPage((pre) => pre + 1);
    if (status === 200) {
      setRecipesData(data);
    }
    setError(data.message);
  }, [page, setPage]);

  const previousPage = useCallback(async () => {
    const { data, status } = await Axios.get(
      `/recipes?limit=10&skip=${(page - 1) * 10}`
    );
    setPage((pre) => pre - 1);
    if (status === 200) {
      setRecipesData(data);
    }
    setError(data.message);
  }, [page, setPage]);

  const setCustomPage = useCallback(async (pageNumber: number) => {
    const { data, status } = await Axios.get(
      `/recipes?limit=10&skip=${(pageNumber - 1) * 10}`
    );
    setPage(pageNumber - 1);
    if (status === 200) {
      setRecipesData(data);
    }
    setError(data.message);
  }, []);

  // search recipes
  const searchByRecipeName = useCallback(async (query: string) => {
    setIsLoading(true);
    const { data, status } = await Axios.get(`/recipes/search?q=${query}`);
    if (status === 200) {
      setRecipesData(data);
    }
    setError(data.message);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [getByTag, getByMealType, searchByRecipeName, sortRecipes]);

  useEffect(() => {
    console.log("recipes data: ", recipesData);
  }, [recipesData]);

  const memorizeRecipes = useMemo(
    () => ({
      recipesData,
      isLoading,
      error,
      initialize,
      getByTag,
      getByMealType,
      sortRecipes,
      page,
      nextPage,
      previousPage,
      setCustomPage,
      searchByRecipeName,
    }),
    [
      recipesData,
      isLoading,
      error,
      initialize,
      getByTag,
      getByMealType,
      sortRecipes,
      page,
      nextPage,
      previousPage,
      setCustomPage,
      searchByRecipeName,
    ]
  );
  return (
    <RecipesContext.Provider value={memorizeRecipes}>
      {children}
    </RecipesContext.Provider>
  );
};
