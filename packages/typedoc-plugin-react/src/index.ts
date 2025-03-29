import {Application, Renderer} from 'typedoc';
import {onRendererEventBeginPage, onRendererEventEndPage} from './renderer.js';
import {ReactTheme} from './theme.js';

// noinspection JSUnusedGlobalSymbols
export function load(app: Application) {
    app.renderer.defineTheme('react', ReactTheme);
    /*
    app.renderer.on(Renderer.EVENT_BEGIN, (event) => {
        console.log('Renderer.EVENT_BEGIN', event);
    });
    app.renderer.on(Renderer.EVENT_END, (event) => {
        console.log('Renderer.EVENT_END', event);
    });
    */
    app.renderer.on(Renderer.EVENT_BEGIN_PAGE, onRendererEventBeginPage);
    app.renderer.on(Renderer.EVENT_END_PAGE, onRendererEventEndPage);

    /*
    app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
        console.log('Converter.EVENT_RESOLVE_BEGIN', context);
    });
    app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
        console.log('Converter.EVENT_RESOLVE_END', context);
    });
     */
}
