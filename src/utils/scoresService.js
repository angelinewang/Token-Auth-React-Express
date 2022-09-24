import tokenService from './tokenService';

const BASE_URL = '/api/scores/';

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(score) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Ensure a space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(score)
  };
  return fetch(BASE_URL, options).then(res => res.json())
}



export default {
  index,
  create
};