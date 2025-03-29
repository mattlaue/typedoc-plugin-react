import {MarkdownTheme} from 'typedoc-plugin-markdown';
import {ProjectReflection,} from 'typedoc';

export class ReactTheme extends MarkdownTheme {

    getUrls(project: ProjectReflection) {
        console.log('*** getUrls ***');
        const getUrlsInternal = Object.getPrototypeOf(MarkdownTheme.prototype).getUrls;

        const urls = getUrlsInternal.call(this, project);

        for (const mapping of urls) {
            mapping.url = mapping.url.replace('function', 'component');
            console.log(mapping);
        }

        return urls;
    }
}
