import emojiList from './emojiList.json';

export default function filterEmoji(searchText, maxResults) {
    return emojiList.filter((emoji) => {
        return emoji.title.includes(searchText) || emoji.keywords.includes(searchText);
    }).slice(0, maxResults);
}