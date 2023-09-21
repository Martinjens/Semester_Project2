import { getToken } from './storage.js';

export function isLoggedIn() {
  return getToken() !== null;
}
