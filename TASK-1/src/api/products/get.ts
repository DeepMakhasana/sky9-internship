import { endpoints } from "../endpoints";

export const getProducts = async (): Promise<any> => {
  try {
    const response = await fetch(endpoints.products);
    if (!response.ok) {
      throw new Error("error in products fetching!");
    }
    return await response.json();
  } catch (error) {
    throw new Error("product fetching error.");
  }
};
