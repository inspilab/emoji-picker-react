import { DEFAULT_CDN_PATH, DEFAULT_IMAGE_RESOLUTION } from '../../../constants';

export default function bgImage({ src, unified, assetPath, emojiResolution }) {
    if (src) {
        return {
            'backgroundImage': `url(${src})`
        };
    }

    if (typeof assetPath === 'undefined') {
        assetPath = DEFAULT_CDN_PATH;
    }

    assetPath += emojiResolution ? `/${emojiResolution}` : `/${DEFAULT_IMAGE_RESOLUTION}`;

    return {
        'backgroundImage': `url(${assetPath}/${unified}.png)`
    };
}
