import * as foobar from '../foobar/index.js';
import { buzzfizz } from './util.js';

function init() {
    if (document.readyState === 'complete') {
        console.log(buzzfizz());
        document.body.innerHTML = `<div class="foo">${foobar.foo.bar()}${foobar.bar.baz()}</div>` + document.body.innerHTML;
        return true;
    }
    return false;
}

if (!init()) {
    window.addEventListener('readystatechange', init);
}
