import axios from 'axios';
import { showLoader, hideLoader } from './utils.js';

const BASE_URL = 'https://deserts-store.b.goit.study/api/';

export default async function request({ method = "get", body = {}, route = "" }) {
  showLoader();
  const url = BASE_URL + route;
  let response = {};
  if (method.toLowerCase() === 'get') {
    response = await axios.get(url, {
      params: body,
    });
  } else if (method.toLowerCase() === 'post') {
    response = await axios.post(url, body);
  }
  
  hideLoader();
  return response;
}
