import {Application, Renderer} from 'typedoc';
import {onRendererEventBeginPage, onRendererEventEndPage} from './renderer.js';

// noinspection JSUnusedGlobalSymbols
export function load(app: Application) {
    app.renderer.on(Renderer.EVENT_BEGIN_PAGE, onRendererEventBeginPage);
    app.renderer.on(Renderer.EVENT_END_PAGE, onRendererEventEndPage);
}
