import {PageEvent} from 'typedoc';

export function onRendererEventBeginPage(event: PageEvent) {
    event.url = event.url.replaceAll('functions', 'components');
    event.filename = event.filename.replaceAll('functions', 'components');

    if (event.model && typeof event.model === "object") {
        (event.model as any).url = event.url;
    }
}

export function onRendererEventEndPage(event: PageEvent) {
    if (event.url === 'index.md' && event.contents) {
        event.contents = event.contents.replaceAll('function', 'component');
    }
}
