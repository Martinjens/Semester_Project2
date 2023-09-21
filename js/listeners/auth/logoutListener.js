import { removeToken } from '../../helpers/storage.js';

export function setLogoutListener() {
  const button = document.querySelector('#logout');

  button.addEventListener('click', function () {
    removeToken();
    location.href = './index.html';
  });
}
