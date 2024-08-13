// utility fuction
export function setLocalstorage(key, payload) {
  const payloadJsonToString = JSON.stringify(payload);
  localStorage.setItem(key, payloadJsonToString);
}

export function getLocalstorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
