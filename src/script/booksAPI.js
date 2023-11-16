import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/';

export async function fetchBooksCategory(name) {
  const params = `volumes?q=intitle:${name}&printType=books&startIndex=${getRenderStartIndex(
    11
  )}&maxResults=6`;
  const response = await axios.get(params);
  const data = await response.data;
  const items = await data.items;

  return items;
}
export async function fetchBook(id) {
  const params = `volumes/${id}`;
  const response = await axios.get(params);
  const data = await response.data;

  return data;
}
export async function fetchGenre(subject) {
  const params = `volumes?q=${subject}&printType=books&startIndex=${getRenderStartIndex(
    500
  )}&maxResults=10`;
  const response = await axios.get(params);
  const data = await response.data;
  const items = await data.items;

  return items;
}
export async function fetchCatalog(name) {
  const params = `volumes?q=${name}&printType=books&startIndex=0&maxResults=33`;
  const response = await axios.get(params);
  const data = await response.data;
  const items = await data.items;

  return items;
}

function getRenderStartIndex(max) {
  return Math.floor(Math.random() * max);
}
