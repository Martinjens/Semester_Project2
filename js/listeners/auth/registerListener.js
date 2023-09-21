import { displayMessage } from '../../ui/common/index.js';
import * as api from '../../api/auth/index.js';

export function registerListener() {
  const form = document.querySelector('#registerForm');

  if (form) {
    form.addEventListener('submit', handleRegister);
  }
}
async function handleRegister(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const password = data.get('password');

  const fieldset = form.querySelector('#fieldi');
  fieldset.disabled = true;

  try {
    const bodyData = { name: name, email: email, password: password };

    const response = await api.register(bodyData);
    displayMessage(
      'success',
      'Account created. You can now <a href="../../../log/login.html">log in</a>',
      '#message',
    );
    form.reset();
    console.log(response);
  } catch (error) {
    displayMessage('danger', error.message, '#message');
    console.log(error);
  } finally {
    fieldset.disabled = false;
  }
}

registerListener();
