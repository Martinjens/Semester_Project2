import { displayAuctions } from '../../ui/templates/auctions/index.js';
import { displayMessage } from '../../ui/common/displayMessage.js';
import * as api from '../../api/auctions/index.js';

export async function getAuctions() {
  const container = document.querySelector('#auctions');

  try {
    const auctions = await api.get();
    displayAuctions(auctions, container);
  } catch (error) {
    displayMessage('danger', error, container);
  }
}
