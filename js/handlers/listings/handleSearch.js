import { search } from '../../api/search.js';
import displaySearchResults from '../../ui/common/displaySearchResults.js';
import hideSearchResults from '../../ui/common/hideSearchResults.js';
import displaySearchError from '../../ui/common/displaySearchError.js';
import debounce from '../../helpers/debounce.js';

export default function handleSearch() {
  const input = document.querySelector('#search');

  input.addEventListener('input', debouncedSearch);
}

const debouncedSearch = debounce(doSearch, 500);

async function doSearch(event) {
  const tag = event.target.value.trim();

  if (tag.length < 3) {
    return hideSearchResults();
  }

  try {
    const results = await search(tag);
    console.log(results);
    displaySearchResults(results);
  } catch (err) {
    console.log(err);
    displaySearchError();
  }
}
