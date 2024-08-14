// utility fuction
export function setLocalstorage(key, payload) {
  const payloadJsonToString = JSON.stringify(payload);
  localStorage.setItem(key, payloadJsonToString);
}

export function getLocalstorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export async function getProduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Error: Fail to fetch data");
  }
}

export function convertIntoSmallLength(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
}