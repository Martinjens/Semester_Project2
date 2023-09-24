import { BASE_URL, AUCTIONS_LIMIT } from '../../constants/api.js';

export async function get(offset) {
  const url = `${BASE_URL}listings?limit=${AUCTIONS_LIMIT}&offset=${offset}`;
  const response = await fetch(url);
  console.log(response);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('There was an error fetching the auctions');
}
