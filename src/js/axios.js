import axios from 'axios';

const BASE_URL = 'https://deserts-store.b.goit.study/api/';
const loader = document.querySelector('.global-loader-overlay');

export default async function request({ method = "get", body = {}, route = "" }) {
  loader.classList.remove('hidden');
  const url = BASE_URL + route;
  let response = {};
  if (method.toLowerCase() === 'get') {
    response = await axios.get(url, {
      params: body,
    });
  } else if (method.toLowerCase() === 'post') {
    response = await axios.post(url, body);
  }
  loader.classList.add('hidden');
  return response;
}
