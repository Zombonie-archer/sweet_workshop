import axios from 'axios';

const BASE_URL = 'https://deserts-store.b.goit.study/api/';

export default async function request({ method, body, route }) {
  const url = BASE_URL + route;
  if (method === 'get') {
    return await axios.get(url, {
      params: body,
    });
  } else if (method === 'post') {
    return await axios.post(url, body);
  }
}
