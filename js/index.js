import { redirectIfLogin } from './helpers/redirectIfLogin.js';
import * as listeners from './listeners/index.js';
import { createMenu } from './ui/common/createMenu.js';

function router() {
  const path = window.location.pathname;

  console.log(path);

  createMenu(path);
  redirectIfLogin(path);

  switch (path) {
    case '/':
    case '/index.html':
      listeners.getAuctions();
      break;
    case '/auth/register.html':
      listeners.registerListener();
      break;
    case '/log/login.html':
      listeners.loginListener();
      break;
    default:
      // Handle any other paths or provide a default behavior.
      break;
  }
}

router();
