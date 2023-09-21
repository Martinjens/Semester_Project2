import { displayMessage } from '../../ui/common/displayMessage.js';
import * as auth from '../../api/auth/login.js';
import * as storage from '../../services/storage.js';

addEventListener('submit', handleLogin);

export function loginListener() {
  const form = document.getElementById('#loginForm');
  if (form) {
    form.addEventListener('submit', handleLogin);
  }
}
async function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const button = form.querySelector('button');
  button.innerText = 'Logging in...';

  try {
    const bodyData = { email: email, password: password };
    const { accessToken } = await auth.login(bodyData);
    storage.save('token', accessToken);

    location.href = '../../../dashboard.html';
  } catch (error) {
    console.error(error);
    displayMessage('danger', error, '#message');
  }
}
loginListener();
