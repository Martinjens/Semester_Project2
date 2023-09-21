import { isLoggedIn } from '../../helpers/auth.js';
import * as listeners from '../../listeners/index.js';

export function createMenu(path) {
  const menu = document.querySelector('#menu');

  if (isLoggedIn()) {
    menu.innerHTML = ` <li class="nav-item dropdown">
                            <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Menu
                            </a>
                            <ul class="dropdown-menu" id="menu">
        
                            <li>
                            <a class="dropdown-item" ${
                              path === '/' ? 'active' : ''
                            }" href="#">Auctions</a>
                        </li>
                        <li>
                            <a class="dropdown-item" ${
                              path === '/' ? 'active' : ''
                            }" href="#">How to buy</a>
                        </li>
                        <li>
                            <a class="dropdown-item" ${
                              path === '/' ? 'active' : ''
                            }" href="#">How to sell</a>
                        </li>
                        <li>
                            <a class="dropdown-item" ${
                              path === '/' ? 'active' : ''
                            }" href="#">About Auctioneer</a>
                        </li>
                        <li>
                            <a class="dropdown-item" ${
                              path === '/' ? 'active' : ''
                            }" href="#">Contact</a>
                        </li>
                        <button class="btn btn-outline-success" type="button" id="logout">Log Out</button>
                      </li>`;

    listeners.setLogoutListener();
  } else {
    menu.innerHTML = `<li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Menu
                            </a>
                            <ul class="dropdown-menu" id="menu">
                              <li><a class="dropdown-item" ${
                                path === '../../../log/login.html'
                                  ? 'active'
                                  : ''
                              }" href="../../../log/login.html">Log in</a></li>
                              <li>
                                <a class="dropdown-item" ${
                                  path === '../../../auth/register.html'
                                    ? 'active'
                                    : ''
                                }" href="../../../auth/register.html"
                                                >Registrer</a
                                              >
                              </li>
                              <li><hr class="dropdown-divider" /></li>
                              <li>
                                <a class="dropdown-item" ${
                                  path === '/' ? 'active' : ''
                                }" href="#">About Auctioneer</a>
                              </li>
                              <li>
                                <a class="dropdown-item" ${
                                  path === '/' ? 'active' : ''
                                }" href="#">Contact</a>
                              </li>
                            </ul>
                          </li>`;
  }
}
