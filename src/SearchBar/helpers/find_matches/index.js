import { ALL_KEYWORDS, KEYWORDS_SINGLE} from '../../../constants';
import { getKeyWordSingleChar } from '../init_keywords_single/index';

export default function findMatches(text, keywords) {
    let keywordsSingle = {};
    let allKeywords = {};
    if (typeof keywords !== 'undefined') {
        keywordsSingle = getKeyWordSingleChar(keywords)
        allKeywords = Object.keys(keywords);
    } else {
        keywordsSingle = KEYWORDS_SINGLE;
        allKeywords = ALL_KEYWORDS;
    }

    if (keywordsSingle.hasOwnProperty(text)) {
        return keywordsSingle[text];
    }
    return allKeywords.filter((keyword) => keyword.indexOf(text) > -1);
}
