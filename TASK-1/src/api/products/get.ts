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

export const getOneProduct = async (id: number): Promise<any> => {
  try {
    const response = await fetch(`${endpoints.products}/${id}`);
    if (!response.ok) {
      return false;
    }
    return await response.json();
  } catch (error) {
    console.log("one product fetching error.");
    return false;
  }
};