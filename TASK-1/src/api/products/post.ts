import { endpoints } from "../endpoints";

export const insertProduct = async ({
  title,
  price,
  description,
}: {
  title: string;
  price: number;
  description: string;
}): Promise<any> => {
  try {
    const response = await fetch(endpoints.products, {
      method: "POST",
      body: JSON.stringify({
        title,
        price,
        description,
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });
    if (!response.ok) {
      throw new Error("error in products fetching!");
    }
    return await response.json();
  } catch (error) {
    alert("Error: while adding product");
    throw new Error("product fetching error.");
  }
};
