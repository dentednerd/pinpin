import dictionary from './dictionary.json';

export default function filterDict(searchText) {
  return dictionary[searchText];
}