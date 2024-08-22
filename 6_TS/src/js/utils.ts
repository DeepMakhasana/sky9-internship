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
