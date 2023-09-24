export function displayAuctions(auctions, container) {
  container.innerHTML = '';
  const html = auctions.map((auction) => createAuction(auction));
  container.append(...html);
  console.log(html);
}

function createAuction({ title, media, bids }) {
  const div = document.createElement('div');
  (div.innerText = title), bids;
  const img = document.createElement('img');
  img.src = media;
  img.classList.add('imageStyling');
  div.appendChild(img);
  return div;
}
