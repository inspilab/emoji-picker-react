import { categories } from './';

export default function(emoji, categories=categories) {

    if (!emoji) {
        return;
    }

    const { u, n, o, c, ...rest } = emoji;
    const emojiObject = {
        name: n,
        unified: u,
        order: o,
        category: categories[c].name,
        ...rest
    };

    if (emoji.d) {
        emojiObject.diversities = emoji.d;
    }

    return emojiObject;
}
