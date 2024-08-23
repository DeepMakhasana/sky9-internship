import { CartProductType } from "types/product.js";

export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Error: Fail to fetch data");
  }
}

export function convertIntoSmallLength(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
}

export function setLocalStorage(key: string, payload: object) {
  const payloadJsonToString = JSON.stringify(payload);
  localStorage.setItem(key, payloadJsonToString);
}

export function getLocalStorage(key: string): CartProductType[] {
  const localData: string | null = localStorage.getItem(key);
  if (typeof localData == "string") {
    return JSON.parse(localData);
  } else {
    return [];
  }
}
