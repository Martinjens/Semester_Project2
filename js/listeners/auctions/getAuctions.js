import { displayAuctions } from '../../ui/templates/auctions/index.js';
import { displayMessage } from '../../ui/common/displayMessage.js';
import * as api from '../../api/auctions/index.js';
import { AUCTIONS_LIMIT } from '../../constants/api.js';

export function getAuctions() {
  const container = document.querySelector('#auctions');

  let offset = 0;

  return async function listAuctions() {
    try {
      const auctions = await api.get(offset);
      offset = offset + AUCTIONS_LIMIT;
      displayAuctions(auctions, container);
    } catch (error) {
      displayMessage('danger', error, container);
    }
  };
}
