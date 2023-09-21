export function displayAuctions(auctions, container) {
  container.innerHTML = '';
  const html = auctions.map((auction) => createAuction(auction));
  container.append(...html);
  console.log(html);
}

function createAuction({ title }) {
  const div = document.createElement('div');
  div.innerText = title;
  return div;
}
