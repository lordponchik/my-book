import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/';

export async function fetchBooksCategory(name) {
  const params = `volumes?q=intitle:${name}&printType=books&startIndex=${getRenderStartIndex()}&maxResults=6`;
  const response = await axios.get(params);
  const data = await response.data;
  const items = await data.items;

  return items;
}

function getRenderStartIndex() {
  return Math.floor(Math.random() * 11);
}
