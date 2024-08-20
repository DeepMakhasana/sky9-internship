// utility fuction
export function setLocalStorage(key, payload) {
  const payloadJsonToString = JSON.stringify(payload);
  localStorage.setItem(key, payloadJsonToString);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
