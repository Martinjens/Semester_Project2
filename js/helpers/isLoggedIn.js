import { isLoggedIn } from './storage.js';

export function redirectBasedOnLogin(pathname) {
  if (isLoggedIn()) {
    if (pathname === '/index.html' || pathname === '/auth/register.html') {
      location.href = '/auth/register.html';
    }
  } else {
    if (pathname === '/index.html' || pathname === '/index.html') {
      location.href = '/index.html';
    }
  }
}
