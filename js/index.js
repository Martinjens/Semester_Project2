import * as listeners from './listeners/index.js';

export default function router() {
  const path = window.location.pathname;

  switch (path) {
    case '/':
    case '/log/login.html':
      listeners.loginListener();
      break;
    case '/auth/register.html':
      listeners.registerListener();
      break;
    default:
      // Handle any other paths or provide a default behavior.
      break;
  }
}

router();
