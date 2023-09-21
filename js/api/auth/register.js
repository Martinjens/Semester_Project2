import { BASE_URL } from '../../constants/api.js';

export async function register(data) {
  const url = `${BASE_URL}auth/register`;
  const body = JSON.stringify(data);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body,
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  }

  if (json && json.errors && Array.isArray(json.errors)) {
    const errorMessage = json.errors.map((error) => error.message).join('\n');
    throw new Error(errorMessage);
  }

  throw new Error('There was an error registering');
}
