// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"4CCEi":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 62094;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "language", ()=>language);
var _observerJs = require("./modules/observer.js");
var _constantsJs = require("./modules/constants.js");
var _navBarJs = require("./modules/nav-bar.js");
var _resizeAccordionJs = require("./modules/resize-accordion.js");
var _backgroundItemStateJs = require("./modules/background_item_state.js");
var _modalJs = require("./modules/modal.js");
var _projectCardsJs = require("./modules/project-cards.js");
var _anchorScrollJs = require("./modules/anchor-scroll.js");
var _imageCarouselJs = require("./modules/image-carousel.js");
var _languageToogleJs = require("./modules/language-toogle.js");
var _currentSectionJs = require("./modules/current-section.js");
var _skillsSectionSizeJs = require("./modules/skills-section-size.js");
var _setLanguageJs = require("./modules/set-language.js");
"use strict";
// -------------------
// --- ИНИЦИАЛИЗАЦИЯ ЯЗЫКА ---
(0, _setLanguageJs.getLocalLanguage)();
const language = (0, _setLanguageJs.language);
// --- ОТКРЫТИЕ/ЗАКРЫТИЕ SKILLS ПРИ МОБИЛЬНОМ РАЗРЕШЕНИИ ---
(0, _skillsSectionSizeJs.setSkillsSectionSize)();
// --- ОБОЗНАЧЕНИЕ ТЕКУЩЕЙ СЕКЦИИ В NAV ---
(0, _currentSectionJs.displayCurrentSection)();
// --- ДОБАВЛЕНИЕ КНОПОЧЕК ВЫБОРА ЯЗЫКА ---
(0, _languageToogleJs.languageToogler)();
(0, _setLanguageJs.chooseLanguage)();
// --- ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЮ ---
(0, _anchorScrollJs.anchorScroll)();
// --- ОТКРЫТИЕ/ЗАКРЫТИЕ НАВИГАЦИОННОГО МЕНЮ ---
// Открытие навигационного меню
(0, _constantsJs.burgerButton).addEventListener("click", (0, _navBarJs.openNavBar));
// Закрытие навигационного меню
(0, _constantsJs.sideNavCloseButton).addEventListener("click", (0, _navBarJs.closeNavBar));
// --- АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ---
(0, _observerJs.animation).observe((0, _constantsJs.aboutInfoWrapper));
(0, _observerJs.animation).observe((0, _constantsJs.background));
(0, _observerJs.animation).observe((0, _constantsJs.skillsSection));
(0, _observerJs.animation).observe((0, _constantsJs.projects));
(0, _observerJs.animation).observe((0, _constantsJs.life));
(0, _observerJs.animation).observe((0, _constantsJs.footer));
// --- УВЕЛИЧЕНИЕ ШИРИНЫ ОПИСАНИЯ ДОЛЖНОСТИ ---
(0, _resizeAccordionJs.resizeDescription)();
// --- ХОВЕР НА КАРТОЧКУ ОПЫТА В BACKGROUND ---
(0, _backgroundItemStateJs.backgroundItemState)();
// --- ВОЗВРАТ BACKGROUND В НАЧАЛЬНОЕ СОСОТОЯНИЕ ---
(0, _observerJs.backgroundBackState).observe((0, _constantsJs.background));
// --- Открытие модального окна SKILLS ---
(0, _modalJs.skillModalEventListener)();
// --- Закрыть SKILL MODAL кликом на оверлей или Esc
(0, _modalJs.closeModalClickOutside)();
(0, _modalJs.closeModalPushEsc)();
// --- Переворачивание карточек PROJECTS ---
(0, _projectCardsJs.turnCards)();
// --- Переворачивание карточек PROJECTS ---
(0, _observerJs.projectCardsStartState).observe((0, _constantsJs.projects));
// --- КАРУСЕЛЬ ФОТОГРАФИЙ ---
(0, _imageCarouselJs.carousel)();

},{"./modules/observer.js":"3sGbo","./modules/constants.js":"3Sp5n","./modules/nav-bar.js":"dU09r","./modules/resize-accordion.js":"7pFct","./modules/background_item_state.js":"3h9nM","./modules/modal.js":"9UgsT","./modules/project-cards.js":"bgJx3","./modules/anchor-scroll.js":"5WQ4u","./modules/image-carousel.js":"b30J1","./modules/language-toogle.js":"eOJTo","./modules/current-section.js":"eaoOV","./modules/skills-section-size.js":"7cGJr","./modules/set-language.js":"ksZG3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3sGbo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animation", ()=>animation);
parcelHelpers.export(exports, "backgroundBackState", ()=>backgroundBackState);
parcelHelpers.export(exports, "projectCardsStartState", ()=>projectCardsStartState);
var _constantsJs = require("./constants.js");
var _cardsAnimationDelayJs = require("./cards-animation-delay.js");
var _projectCardsJs = require("./project-cards.js");
// -----------------
// --- НАБЛЮДЕНИЕ ЗА АНИМАЦИЕЙ ---
function getAnimation(entries, observer) {
    entries.forEach((entry)=>{
        // --- Наблюдение за секцией ABOUT ---
        if (entry.isIntersecting && entry.target.classList.contains((0, _constantsJs.aboutInfoWrapperClass))) {
            aboutAddAnimation(entry);
            observer.unobserve(entry.target);
        }
        // --- Наблюдение за секцией BACKGROUND ---
        if (entry.isIntersecting && entry.target.classList.contains((0, _constantsJs.backgroundClass))) {
            backgroundAddAnimation();
            observer.unobserve(entry.target);
        }
        // --- Наблюдение за секцией SKILLS ---
        if (entry.isIntersecting && entry.target.classList.contains("skills")) {
            skillsAddAnimation();
            observer.unobserve(entry.target);
        }
        // --- Наблюдение за секцией PROJECTS ---
        if (entry.isIntersecting && entry.target.classList.contains((0, _constantsJs.projectsSection))) {
            projectsAddAnimation();
            observer.unobserve(entry.target);
        }
        // --- Наблюдение за секцией LIFE ---
        if (entry.isIntersecting && entry.target.classList.contains((0, _constantsJs.lifeSection))) {
            lifeAddAnimation();
            observer.unobserve(entry.target);
        }
        // --- Наблюдение за секцией FOOTER ---
        if (entry.isIntersecting && entry.target.classList.contains((0, _constantsJs.lifeSection))) {
            footerAddAnimation();
            observer.unobserve(entry.target);
        }
    });
}
const animation = new IntersectionObserver(getAnimation, {
    root: null,
    threshold: 0.2
});
// -------------------
// --- НАБЛЮДЕНИЕ ЗА СОСТОЯНИЕМ BACKGROUND ---
function getBackgroundBackState(entries) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) (0, _constantsJs.backgroundItemOpenArrows).forEach((item)=>{
            item.textContent = "\u25BC";
            item.classList.remove("hoveredArrow");
            (0, _constantsJs.backgroundItems).forEach((item)=>{
                item.classList.remove("background__item_opened");
            });
            (0, _constantsJs.backgroundItemCheckboxes).forEach((item)=>{
                item.checked = false;
            });
        });
    });
}
const backgroundBackState = new IntersectionObserver(getBackgroundBackState, {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
});
// сбор всех элементов background в массив
const backgroundCardsElemets = [
    ...(0, _constantsJs.backgroundCards),
    ...(0, _constantsJs.backgroundTitles),
    ...(0, _constantsJs.backgroundIcons),
    ...(0, _constantsJs.backgroundItems),
    ...(0, _constantsJs.cvLinks)
];
// ----------------
// --- НАБЛЮДЕНИЕ ЗА СОСТОЯНИЕМ PROJECTS-CARDS ---
function getProjectCardsStartState(entries) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) (0, _projectCardsJs.turnAllCardsInStartState)();
    });
}
const projectCardsStartState = new IntersectionObserver(getProjectCardsStartState, {
    root: null,
    threshold: 1,
    rootMargin: "150% 0px -150% 0px"
});
// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в ABOUT ---
function aboutAddAnimation(entry) {
    entry.target.classList.add((0, _constantsJs.aboutAnimation));
    entry.target.children[0].classList.add((0, _constantsJs.aboutAnimation));
    entry.target.children[1].classList.add((0, _constantsJs.aboutAnimation));
}
// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в BACKGROUND ---
function backgroundAddAnimation() {
    backgroundCardsElemets.forEach((item)=>{
        item.classList.add((0, _constantsJs.backgroundAnimation));
    });
}
// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в SKILLS ---
function skillsAddAnimation() {
    (0, _constantsJs.skillsTitle).classList.add((0, _constantsJs.skillsAnimationClass));
    if ((0, _constantsJs.skillsDivider) && (0, _constantsJs.skillsDivider).classList.contains((0, _constantsJs.skillsDividerClass))) (0, _constantsJs.skillsDivider).classList.add((0, _constantsJs.skillsAnimationClass));
    (0, _cardsAnimationDelayJs.cardsAnimationDelay)((0, _constantsJs.skills), (0, _constantsJs.skillsAnimationClass));
}
// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в PROJECTS ---
function projectsAddAnimation() {
    (0, _constantsJs.projectsTitle).classList.add((0, _constantsJs.projectAnimationClass));
    if ((0, _constantsJs.projectDivider) && (0, _constantsJs.projectDivider).classList.contains((0, _constantsJs.projectDividerClass))) (0, _constantsJs.projectDivider).classList.add((0, _constantsJs.projectAnimationClass));
    (0, _cardsAnimationDelayJs.cardsAnimationDelay)((0, _constantsJs.projectCards), (0, _constantsJs.projectAnimationClass));
}
// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в LIFE ---
function lifeAddAnimation() {
    (0, _constantsJs.lifeTitle).classList.add((0, _constantsJs.lifeAnimationClass));
    if ((0, _constantsJs.lifeDivider) && (0, _constantsJs.lifeDivider).classList.contains((0, _constantsJs.lifeDividerClass))) (0, _constantsJs.lifeDivider).classList.add((0, _constantsJs.lifeAnimationClass));
    (0, _constantsJs.lifeSlider).classList.add((0, _constantsJs.lifeAnimationClass));
    (0, _constantsJs.lifeSliderDots).classList.add((0, _constantsJs.lifeAnimationClass));
    (0, _constantsJs.lifeSliderArrowLeft).classList.add((0, _constantsJs.lifeAnimationClass));
    (0, _constantsJs.lifeSliderArrowRight).classList.add((0, _constantsJs.lifeAnimationClass));
}
// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в FOOTER ---
function footerAddAnimation() {
    (0, _constantsJs.footerContainer).classList.add((0, _constantsJs.footerAnimationClass));
}

},{"./constants.js":"3Sp5n","./cards-animation-delay.js":"c7rGb","./project-cards.js":"bgJx3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Sp5n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageBody", ()=>pageBody);
parcelHelpers.export(exports, "header", ()=>header);
parcelHelpers.export(exports, "headerNavList", ()=>headerNavList);
parcelHelpers.export(exports, "burgerButton", ()=>burgerButton);
parcelHelpers.export(exports, "sideNavCloseButton", ()=>sideNavCloseButton);
parcelHelpers.export(exports, "sideBarLanguageLinks", ()=>sideBarLanguageLinks);
parcelHelpers.export(exports, "aboutInfoWrapper", ()=>aboutInfoWrapper);
parcelHelpers.export(exports, "aboutInfoWrapperClass", ()=>aboutInfoWrapperClass);
parcelHelpers.export(exports, "aboutAnimation", ()=>aboutAnimation);
parcelHelpers.export(exports, "headerFixed", ()=>headerFixed);
parcelHelpers.export(exports, "active", ()=>active);
parcelHelpers.export(exports, "overlay", ()=>overlay);
parcelHelpers.export(exports, "background", ()=>background);
parcelHelpers.export(exports, "backgroundClass", ()=>backgroundClass);
parcelHelpers.export(exports, "backgroundItemCheckboxes", ()=>backgroundItemCheckboxes);
parcelHelpers.export(exports, "backgroundCards", ()=>backgroundCards);
parcelHelpers.export(exports, "backgroundIcons", ()=>backgroundIcons);
parcelHelpers.export(exports, "backgroundTitles", ()=>backgroundTitles);
parcelHelpers.export(exports, "backgroundItems", ()=>backgroundItems);
parcelHelpers.export(exports, "backgroundFirstCard", ()=>backgroundFirstCard);
parcelHelpers.export(exports, "backgroundAnimation", ()=>backgroundAnimation);
parcelHelpers.export(exports, "backgroundItemTitles", ()=>backgroundItemTitles);
parcelHelpers.export(exports, "backgroundItemEstablishments", ()=>backgroundItemEstablishments);
parcelHelpers.export(exports, "backgroundItemTimePeriods", ()=>backgroundItemTimePeriods);
parcelHelpers.export(exports, "backgroundItemOpenArrows", ()=>backgroundItemOpenArrows);
parcelHelpers.export(exports, "backgroundItemStorys", ()=>backgroundItemStorys);
parcelHelpers.export(exports, "cvLinks", ()=>cvLinks);
parcelHelpers.export(exports, "openBackgroundCard", ()=>openBackgroundCard);
parcelHelpers.export(exports, "skillsSection", ()=>skillsSection);
parcelHelpers.export(exports, "skills", ()=>skills);
parcelHelpers.export(exports, "skillsTitle", ()=>skillsTitle);
parcelHelpers.export(exports, "skillsDivider", ()=>skillsDivider);
parcelHelpers.export(exports, "skillsDividerClass", ()=>skillsDividerClass);
parcelHelpers.export(exports, "skillsAnimationClass", ()=>skillsAnimationClass);
parcelHelpers.export(exports, "skillsWrapper", ()=>skillsWrapper);
parcelHelpers.export(exports, "skillsWrapperButton", ()=>skillsWrapperButton);
parcelHelpers.export(exports, "projects", ()=>projects);
parcelHelpers.export(exports, "projectsSection", ()=>projectsSection);
parcelHelpers.export(exports, "projectAnimationClass", ()=>projectAnimationClass);
parcelHelpers.export(exports, "projectsTitle", ()=>projectsTitle);
parcelHelpers.export(exports, "projectDivider", ()=>projectDivider);
parcelHelpers.export(exports, "projectDividerClass", ()=>projectDividerClass);
parcelHelpers.export(exports, "projectCards", ()=>projectCards);
parcelHelpers.export(exports, "life", ()=>life);
parcelHelpers.export(exports, "lifeSection", ()=>lifeSection);
parcelHelpers.export(exports, "lifeTitle", ()=>lifeTitle);
parcelHelpers.export(exports, "lifeDivider", ()=>lifeDivider);
parcelHelpers.export(exports, "lifeDividerClass", ()=>lifeDividerClass);
parcelHelpers.export(exports, "lifeAnimationClass", ()=>lifeAnimationClass);
parcelHelpers.export(exports, "lifeSlider", ()=>lifeSlider);
parcelHelpers.export(exports, "lifeSliderDots", ()=>lifeSliderDots);
parcelHelpers.export(exports, "lifeSliderArrowLeft", ()=>lifeSliderArrowLeft);
parcelHelpers.export(exports, "lifeSliderArrowRight", ()=>lifeSliderArrowRight);
parcelHelpers.export(exports, "sliderContainer", ()=>sliderContainer);
parcelHelpers.export(exports, "sliderDotsContainer", ()=>sliderDotsContainer);
parcelHelpers.export(exports, "sliderArrowLeft", ()=>sliderArrowLeft);
parcelHelpers.export(exports, "sliderArrowRight", ()=>sliderArrowRight);
parcelHelpers.export(exports, "modal", ()=>modal);
parcelHelpers.export(exports, "modalTitle", ()=>modalTitle);
parcelHelpers.export(exports, "modalImg", ()=>modalImg);
parcelHelpers.export(exports, "modalStory", ()=>modalStory);
parcelHelpers.export(exports, "modalCloseButton", ()=>modalCloseButton);
parcelHelpers.export(exports, "footer", ()=>footer);
parcelHelpers.export(exports, "footerAnimationClass", ()=>footerAnimationClass);
parcelHelpers.export(exports, "footerContainer", ()=>footerContainer);
const pageBody = document.querySelector(".page");
const header = document.querySelector(".header");
const headerNavList = document.querySelector(".header__nav_list");
const burgerButton = document.querySelector(".header__burger");
const sideNavCloseButton = document.querySelector(".header__nav_list_close-button");
const sideBarLanguageLinks = document.querySelector(".topbar__language_links_side-bar");
const aboutInfoWrapper = document.querySelector(".about__info_wrapper");
const aboutInfoWrapperClass = "about__info_wrapper";
const aboutAnimation = "about__animation";
const headerFixed = "header_fixed";
const active = "active";
const overlay = "overlay";
const background = document.querySelector(".background");
const backgroundClass = "background";
const backgroundItemCheckboxes = document.querySelectorAll(".background__item_checkbox");
const backgroundCards = document.querySelectorAll(".background__card");
const backgroundIcons = document.querySelectorAll(".background__icon");
const backgroundTitles = document.querySelectorAll(".background__title");
const backgroundItems = document.querySelectorAll(".background__item");
const backgroundFirstCard = "background__card";
const backgroundAnimation = "background__animation";
const backgroundItemTitles = document.querySelectorAll(".background__item_title");
const backgroundItemEstablishments = document.querySelectorAll(".background__item_establishment");
const backgroundItemTimePeriods = document.querySelectorAll(".background__item_time-period");
const backgroundItemOpenArrows = document.querySelectorAll(".background__item_open_arrow");
const backgroundItemStorys = document.querySelectorAll(".background__item_story");
const cvLinks = document.querySelectorAll(".cv_link");
const openBackgroundCard = document.querySelectorAll(".background__item_checkbox");
const skillsSection = document.querySelector(".skills");
const skills = document.querySelectorAll(".skill");
const skillsTitle = document.querySelector(".skills_section__title");
const skillsDivider = skillsTitle.nextElementSibling;
const skillsDividerClass = "section__divider";
const skillsAnimationClass = "skills__animation";
const skillsWrapper = document.querySelector(".skills__wrapper");
const skillsWrapperButton = document.querySelector(".skills__wrapper_open-button");
const projects = document.querySelector(".projects");
const projectsSection = "projects";
const projectAnimationClass = "projects__animation";
const projectsTitle = document.querySelector(".project_section__title");
const projectDivider = projectsTitle.nextElementSibling;
const projectDividerClass = "section__divider";
const projectCards = document.querySelectorAll(".project__container");
const life = document.querySelector(".life");
const lifeSection = "life";
const lifeTitle = document.querySelector(".life_section__title");
const lifeDivider = lifeTitle.nextElementSibling;
const lifeDividerClass = "section__divider";
const lifeAnimationClass = "life__animation";
const lifeSlider = document.querySelector(".life__slider_container");
const lifeSliderDots = document.querySelector(".life__slider_dots-container");
const lifeSliderArrowLeft = document.querySelector(".life__slider_arrow-left");
const lifeSliderArrowRight = document.querySelector(".life__slider_arrow-right");
const sliderContainer = document.querySelector(".life__slider_container");
const sliderDotsContainer = document.querySelector(".life__slider_dots-container");
const sliderArrowLeft = document.querySelector(".life__slider_arrow-left");
const sliderArrowRight = document.querySelector(".life__slider_arrow-right");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal_title");
const modalImg = document.querySelector(".modal_img");
const modalStory = document.querySelector(".modal_story");
const modalCloseButton = document.querySelector(".modal_close_button");
const footer = document.querySelector(".footer");
const footerAnimationClass = "footer__animation";
const footerContainer = document.querySelector(".footer__container");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c7rGb":[function(require,module,exports,__globalThis) {
// --- Поочередное появления карточек ---
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cardsAnimationDelay", ()=>cardsAnimationDelay);
async function cardsAnimationDelay(cards, selector) {
    for (const card of cards)await new Promise((resolve)=>{
        setTimeout(()=>{
            card.classList.add(selector);
            resolve();
        }, 50);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bgJx3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "turnCards", ()=>turnCards);
parcelHelpers.export(exports, "turnAllCardsInStartState", ()=>turnAllCardsInStartState);
var _constantsJs = require("./constants.js");
function turnCards() {
    const allCards = (0, _constantsJs.projectCards);
    allCards.forEach((card)=>{
        card.addEventListener("click", ()=>{
            turnCard(card);
        });
    });
}
function turnCard(card) {
    if (!card.classList.contains("flipped")) card.classList.add("flipped");
    else card.classList.remove("flipped");
}
function turnAllCardsInStartState() {
    (0, _constantsJs.projectCards).forEach((card)=>{
        card.classList.remove("flipped");
    });
}

},{"./constants.js":"3Sp5n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dU09r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Открытие навигационного меню
parcelHelpers.export(exports, "openNavBar", ()=>openNavBar);
// Закрытие навигационного меню
parcelHelpers.export(exports, "closeNavBar", ()=>closeNavBar);
var _constantsJs = require("./constants.js");
function openNavBar() {
    (0, _constantsJs.headerNavList).classList.add((0, _constantsJs.active));
    (0, _constantsJs.header).classList.add((0, _constantsJs.overlay));
}
function closeNavBar() {
    (0, _constantsJs.headerNavList).classList.remove((0, _constantsJs.active));
    (0, _constantsJs.header).classList.remove((0, _constantsJs.overlay));
}

},{"./constants.js":"3Sp5n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7pFct":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// --- изменение размера background_item_story в background_item  ---
parcelHelpers.export(exports, "resizeDescription", ()=>resizeDescription);
var _constantsJs = require("./constants.js");
function resizeDescription() {
    (0, _constantsJs.openBackgroundCard).forEach((item)=>{
        item.addEventListener("click", (e)=>{
            const targetElement = e.target.closest(".background__item");
            if (targetElement.classList.contains("background__item_opened")) {
                targetElement.classList.remove("background__item_opened");
                return;
            }
            if (!targetElement.classList.contains("background__item_opened")) {
                targetElement.classList.add("background__item_opened");
                return;
            }
        });
    });
}

},{"./constants.js":"3Sp5n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3h9nM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backgroundItemState", ()=>backgroundItemState);
var _constantsJs = require("./constants.js");
// --- ХОВЕР НА КАРТОЧКУ ОПЫТА В BACKGROUND ---
let backgroundHoveredElements = [];
backgroundHoveredElements.push(...(0, _constantsJs.backgroundItemTitles), ...(0, _constantsJs.backgroundItemEstablishments), ...(0, _constantsJs.backgroundItemTimePeriods), ...(0, _constantsJs.backgroundItemOpenArrows), ...(0, _constantsJs.backgroundItemStorys));
function backgroundItemState() {
    // Добавить событие ховер на background_item
    backgroundHoveredElements.forEach((item)=>{
        // наведение мыши на элементы
        item.addEventListener("mouseenter", function() {
            this.parentElement.classList.add("hovered");
            this.parentElement.children[4].classList.add("hoveredArrow");
            this.parentElement.parentElement.classList.add("hoveredElement");
            changeBackgroundItemOpenArrow(item, "\u25B2", "\u25BC");
            // отведение мыши с элемента
            item.addEventListener("mouseleave", function() {
                if (this.parentNode.children[0].checked) {
                    this.parentElement.classList.remove("hovered");
                    this.parentElement.parentElement.classList.remove("hoveredElement");
                }
                if (!this.parentNode.children[0].checked) {
                    this.parentElement.classList.remove("hovered");
                    this.parentElement.children[4].classList.remove("hoveredArrow");
                    this.parentElement.parentElement.classList.remove("hoveredElement");
                }
            });
            // нажатие на элемент, замена стрелки при открытии/сворачивании
            item.addEventListener("click", function() {
                changeBackgroundItemOpenArrow(item, "\u25BC", "\u25B2");
                // если (карточка открыта)
                if (!item.parentElement.children[0].checked) // перебор чек-боксов
                (0, _constantsJs.backgroundItemCheckboxes).forEach((item)=>{
                    if (item.checked) {
                        item.checked = false;
                        item.parentElement.parentElement.classList.remove("background__item_opened");
                        item.parentElement.children[4].textContent = "\u25BC";
                        item.parentElement.children[4].classList.remove("hoveredArrow");
                    }
                });
            });
        });
    });
}
// Функция выбора стрелки в зависимости от состояния checkbox(карточки)
function changeBackgroundItemOpenArrow(item, arrow1, arrow2) {
    if (item.parentNode.children[0].checked) {
        item.parentElement.children[4].textContent = arrow1;
        item.parentElement.children[4].textContent;
    }
    if (!item.parentNode.children[0].checked) {
        item.parentElement.children[4].textContent = arrow2;
        item.parentElement.children[4].textContent;
    }
}

},{"./constants.js":"3Sp5n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9UgsT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closeModalClickOutside", ()=>closeModalClickOutside);
parcelHelpers.export(exports, "closeModalPushEsc", ()=>closeModalPushEsc);
// Открытие модального окна со скилами
parcelHelpers.export(exports, "skillModalEventListener", ()=>skillModalEventListener);
// Открытие модального окна с фотками (обработчик в image-carousel.js)
parcelHelpers.export(exports, "lifeModalSlide", ()=>lifeModalSlide);
var _constantsJs = require("./constants.js");
var _navBarJs = require("./nav-bar.js");
// Открыть модальное окно
function openModal(itm, title, img, story) {
    (0, _constantsJs.modal).classList.add("modal_active");
    (0, _constantsJs.modalTitle).textContent = title;
    // Условие для выбора типа модального окна (удаляет не нужные элементы)
    if (img === '') (0, _constantsJs.modalImg).style.setProperty("display", "none");
    if (img !== '') {
        (0, _constantsJs.modalTitle).style.setProperty("display", "none");
        (0, _constantsJs.modalStory).style.setProperty("display", "none");
    }
    (0, _constantsJs.modalImg).src = img;
    (0, _constantsJs.modalStory).textContent = story;
    document.body.classList.add("overlay");
}
// Закрыть модальное окно
function closeModal() {
    (0, _constantsJs.modal).classList.remove("modal_active");
    document.body.classList.remove("overlay");
    setTimeout(()=>{
        (0, _constantsJs.modalTitle).textContent = "";
        (0, _constantsJs.modalTitle).style.removeProperty("display");
        (0, _constantsJs.modalStory).textContent = "";
        (0, _constantsJs.modalStory).style.removeProperty("display");
        (0, _constantsJs.modalImg).src = "";
        (0, _constantsJs.modalImg).setAttribute("alt", "");
        (0, _constantsJs.modalImg).style.removeProperty("display");
    }, 200);
}
function closeModalOnButtonClick() {
    (0, _constantsJs.modalCloseButton).addEventListener("click", ()=>{
        closeModal();
    });
}
function closeModalClickOutside() {
    (0, _constantsJs.pageBody).addEventListener("click", (e)=>{
        if (e.target.classList.contains("overlay")) {
            closeModal();
            (0, _navBarJs.closeNavBar)();
        }
    });
}
function closeModalPushEsc() {
    (0, _constantsJs.pageBody).addEventListener("keydown", (e)=>{
        if (e.key !== "Escape") return;
        if (e.target.classList.contains("overlay")) {
            closeModal();
            (0, _navBarJs.closeNavBar)();
        }
    });
}
function skillModalEventListener() {
    (0, _constantsJs.skills).forEach((skill)=>{
        skill.addEventListener("click", ()=>{
            const title = skill.querySelector(".skill__name").textContent;
            const story = skill.querySelector(".skill__story_container").textContent;
            openModal(skill, title, '', story);
        });
    });
    closeModalOnButtonClick();
}
function lifeModalSlide(el) {
    const img = el.children[0].src;
    openModal(el, '', img, '');
    closeModalOnButtonClick();
}

},{"./constants.js":"3Sp5n","./nav-bar.js":"dU09r","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5WQ4u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anchorScroll", ()=>anchorScroll);
function anchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            const headerHeight = document.querySelector(".header").offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b30J1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "carousel", ()=>carousel);
var _modalJs = require("./modal.js");
var _constantsJs = require("./constants.js");
var _indexJs = require("../index.js");
var _translationsJs = require("./translations.js");
async function carousel() {
    const images = [
        '/dist/bike.jpg',
        '/dist/football.jpg',
        '/dist/guitar.jpg',
        '/dist/office.jpg',
        '/dist/sup.jpg',
        '/dist/vata.jpg'
    ];
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    await (0, _indexJs.language);
    const slideHandlers = new Map();
    function createSlides() {
        // Создание слайдов
        images.forEach((src, index)=>{
            const slide = document.createElement('div');
            slide.classList.add('life__slide');
            slide.innerHTML = `<img src="${src}" alt="${(0, _translationsJs.translations).life.attr[`picture_${index + 1}`][0, _indexJs.language]}" class="tr_life_slide_${index + 1}">`;
            (0, _constantsJs.sliderContainer).appendChild(slide);
            // Создание точек
            const dot = document.createElement('span');
            dot.classList.add('life__slider_dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', ()=>{
                currentIndex = index;
                updateSlider();
            });
            (0, _constantsJs.sliderDotsContainer).appendChild(dot);
        });
        // Обработка свайпов
        (0, _constantsJs.sliderContainer).addEventListener('touchstart', (e)=>{
            touchStartX = e.touches[0].clientX;
        });
        (0, _constantsJs.sliderContainer).addEventListener('touchend', (e)=>{
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        // Обработка стрелок
        if (0, _constantsJs.sliderArrowLeft) (0, _constantsJs.sliderArrowLeft).addEventListener('click', ()=>moveSlider(-1));
        if (0, _constantsJs.sliderArrowRight) (0, _constantsJs.sliderArrowRight).addEventListener('click', ()=>moveSlider(1));
        updateSlider();
    }
    // Свайп влево и вправо
    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        const minSwipeDistance = 50;
        if (swipeDistance > minSwipeDistance) moveSlider(-1);
        if (swipeDistance < -minSwipeDistance) moveSlider(1);
    }
    // Обновление слайдера
    function updateSlider() {
        const slides = document.querySelectorAll('.life__slide');
        const dots = document.querySelectorAll('.life__slider_dot');
        // Очистка всех обработчиков
        slides.forEach((slide)=>{
            if (slideHandlers.has(slide)) {
                slide.removeEventListener('click', slideHandlers.get(slide));
                slideHandlers.delete(slide);
            }
            // Удаление старых установленных onclick
            slide.onclick = null;
        });
        // Обновление слайдов
        slides.forEach((slide, index)=>{
            const handleSlideClick = ()=>(0, _modalJs.lifeModalSlide)(slide);
            slide.classList.remove('life__slide_center', 'life__slide_left', 'life__slide_right', 'life__slide_side', 'life__slide_active');
            const offset = (index - currentIndex + images.length) % images.length;
            if (offset === 0) {
                slide.classList.add('life__slide_center', 'life__slide_active');
                // Создание функции с аргементом для передачи ее в eventListener
                const handler = ()=>(0, _modalJs.lifeModalSlide)(slide);
                slide.addEventListener('click', handler);
                // Добавление eventa в Map для дальнейшеого удаления
                slideHandlers.set(slide, handler);
            } else if (offset === 1) slide.classList.add('life__slide_side', 'life__slide_right', 'life__slide_active');
            else if (offset === images.length - 1) slide.classList.add('life__slide_side', 'life__slide_left', 'life__slide_active');
        });
        // Обновление точек
        dots.forEach((dot, index)=>{
            dot.classList.toggle('life__slider_dot_active', index === currentIndex);
        });
        // Обработчики кликов по слайдам
        slides.forEach((slide, index)=>{
            slide.onclick = ()=>{
                if (slide.classList.contains('life__slide_side')) {
                    currentIndex = index === (currentIndex + 1) % images.length ? (currentIndex + 1) % images.length : (currentIndex - 1 + images.length) % images.length;
                    updateSlider();
                }
            };
        });
    }
    // Переключение слайдов
    function moveSlider(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        updateSlider();
    }
    // Создание слайдов при загрузке страницы
    document.addEventListener('DOMContentLoaded', ()=>{
        createSlides();
        document.addEventListener('keydown', (e)=>{
            if (e.key === 'ArrowLeft') moveSlider(-1);
            if (e.key === 'ArrowRight') moveSlider(1);
        });
    });
}

},{"./modal.js":"9UgsT","./constants.js":"3Sp5n","../index.js":"a0t4e","./translations.js":"J9JlI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"J9JlI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "translations", ()=>translations);
const translations = {
    "topbar": {
        "email": "andreykolod979@gmail.com",
        "phone": "+7 906 287 78 18"
    },
    "header": {
        "logo": "Andrey",
        "qa": ".QA",
        "about": {
            "en": "About me",
            "ru": "\u041E\u0431\u043E \u043C\u043D\u0435"
        },
        "background": {
            "en": "Experience",
            "ru": "\u041E\u043F\u044B\u0442"
        },
        "skills": {
            "en": "Skills",
            "ru": "\u041D\u0430\u0432\u044B\u043A\u0438"
        },
        "projects": {
            "en": "Projects and artifacts",
            "ru": "\u041F\u0440\u043E\u0435\u043A\u0442\u044B \u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u044B"
        },
        "life": {
            "en": "Life",
            "ru": "\u0418\u0437 \u0436\u0438\u0437\u043D\u0438"
        }
    },
    "hero": {
        "me": {
            "en": "Hi, I'--m-- ",
            "ru": "\u042F "
        },
        "name": {
            "en": "Andrey ",
            "ru": "\u0410\u043D\u0434\u0440\u0435\u0439 "
        },
        "speciality": {
            "en": "QA --engineer--",
            "ru": "\u0418\u043D\u0436\u0435\u043D\u0435\u0440 \u043F\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E"
        },
        "subtitle": {
            "en": "Making applications reliable and perfect",
            "ru": "\u0414\u0435\u043B\u0430\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430\u0434\u0435\u0436\u043D\u0435\u0439 \u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0435\u0439"
        },
        "additional": {
            "en": "And users are happier",
            "ru": "\u0410 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u0435\u0439"
        },
        "button": {
            "en": "Learn more",
            "ru": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435"
        },
        "img_alt": {
            "en": "Andrey's picture",
            "ru": "\u0424\u043E\u0442\u043E \u0410\u043D\u0434\u0440\u0435\u044F"
        }
    },
    "about": {
        "title": {
            "en": "A little about me",
            "ru": "\u041D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u043E \u043C\u043D\u0435"
        },
        "subtitle": {
            "en": "In 2022, I had the opportunity to train as a software testing specialist. I figured that free education is never a bad thing and could potentially benefit my career.\n With each module, I found myself increasingly captivated. Through the learning process, I realized it would be amazing to do what I love while earning a living.\n To gain experience, I started participating in pet projects while simultaneously exploring the world of web development.\n I landed an exciting job in quality assurance from the client\u2019s side, but after some time, I realized I was craving more technical challenges.\n Currently, I work as a testing engineer at Simple One, where I\u2019m advancing my skills in software development and quality assurance.\n I built this website using pure HTML, CSS, and JavaScript to share my knowledge of the web development stack and my testing expertise. \nOutside of work, I enjoy spending time with my family. I love camping trips in nature, cycling, paddleboarding, and running. I\u2019m a fan of rock music and occasionally play computer games.",
            "ru": "\u0412 2022 \u0433\u043E\u0434\u0443 \u0443 \u043C\u0435\u043D\u044F \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0449\u0438\u043A\u0430 \u041F\u041E. \u042F \u043F\u043E\u0434\u0443\u043C\u0430\u043B, \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043B\u0438\u0448\u043D\u0438\u043C \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043C\u043E\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u0435.\n \u0421 \u043A\u0430\u0436\u0434\u044B\u043C \u043C\u043E\u0434\u0443\u043B\u0435\u043C \u043C\u0435\u043D\u044F \u043D\u0430\u0447\u0430\u043B\u043E \u0437\u0430\u0442\u044F\u0433\u0438\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u0438 \u0441\u0438\u043B\u044C\u043D\u0435\u0435. \u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u044F \u043F\u043E\u043D\u044F\u043B, \u0447\u0442\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u0437\u0434\u043E\u0440\u043E\u0432\u043E \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043B\u044E\u0431\u0438\u043C\u044B\u043C \u0434\u0435\u043B\u043E\u043C \u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0436\u0438\u0437\u043D\u044C.\n \u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u044B\u0442\u0430 \u044F \u043D\u0430\u0447\u0430\u043B \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0442\u044C \u0432 \u043F\u0435\u0442-\u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445 \u0438 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E \u043E\u0441\u0432\u0430\u0438\u0432\u0430\u0442\u044C \u043C\u0438\u0440 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438.\n \u042F \u043D\u0430\u0448\u0435\u043B \u0441\u0435\u0431\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0432 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u044F \u043F\u043E\u043D\u044F\u043B, \u0447\u0442\u043E \u043C\u043D\u0435 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447.\n \u0421\u0435\u0439\u0447\u0430\u0441 \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u044E \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u043C \u043F\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Simple One \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0441\u044C \u0432 \u0441\u0444\u0435\u0440\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u041F\u041E.\n \u042F \u0441\u043E\u0437\u0434\u0430\u043B \u044D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u043D\u0430 \u0447\u0438\u0441\u0442\u043E\u043C HTML, CSS \u0438 JS, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u0432\u043E\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0441\u0442\u044D\u043A\u0430 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u043D\u0430\u0432\u044B\u043A\u0430\u043C\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. \n\u0412\u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u044F \u043B\u044E\u0431\u043B\u044E \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0441\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0435\u043C\u044C\u0435\u0439. \u041E\u0431\u0430\u0436\u0430\u044E \u0432\u044B\u043B\u0430\u0437\u043A\u0438 \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0443 \u0441 \u043F\u0430\u043B\u0430\u0442\u043A\u0430\u043C\u0438, \u0432\u0435\u043B\u043E\u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0438, \u043A\u0430\u0442\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0430\u043F-\u0431\u043E\u0440\u0434\u0435 \u0438 \u0431\u0435\u0433\u0430\u0442\u044C. \u041B\u044E\u0431\u043B\u044E \u0440\u043E\u043A \u043C\u0443\u0437\u044B\u043A\u0443 \u0438 \u0438\u043D\u043E\u0433\u0434\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0435 \u0438\u0433\u0440\u044B."
        }
    },
    "background": {
        "experence": {
            "title": {
                "en": "My experience",
                "ru": "\u041C\u043E\u0439 \u043E\u043F\u044B\u0442"
            },
            "job_4": {
                "title": {
                    "en": "QA engineer",
                    "ru": "\u0418\u043D\u0436\u0435\u043D\u0435\u0440 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430"
                },
                "establishment": "SimpleOne",
                "period": {
                    "en": "April 2025 - now",
                    "ru": "\u0410\u043F\u0440\u0435\u043B\u044C 2025 - \u043D.\u0432."
                },
                "story": {
                    "en": {
                        "text": "Work on a unified digital environment for the HR department and employees [HRMS] and the IT process automation system [ITSM].\n\n**Tasks:**\n- Preparing test plans;\n- Reviewing specifications;\n- Preparing e2e test cases for automation;\n- Writing checklists;\n- Testing;\n- Reporting and tracking defect fixes;\n- Making software development better and cheaper)",
                        "links": {
                            "HRMS": "https://simpleone.ru/hrms",
                            "ITSM": "https://simpleone.ru/itsm"
                        }
                    },
                    "ru": {
                        "text": "\u0420\u0430\u0431\u043E\u0442\u0430 \u043D\u0430\u0434 \u0435\u0434\u0438\u043D\u043E\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B HR-\u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u0430 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 [HRMS] \u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 IT-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 [ITSM].\n\n**\u0417\u0430\u0434\u0430\u0447\u0438:**\n- \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0442\u0435\u0441\u0442-\u043F\u043B\u0430\u043D\u043E\u0432;\n- \u0420\u0435\u0432\u044C\u044E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0439;\n- \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 e2e \u0442\u0435\u0441\u0442-\u043A\u0435\u0439\u0441\u043E\u0432 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438;\n- \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0447\u0435\u043A-\u043B\u0438\u0441\u0442\u043E\u0432;\n- \u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435;\n- \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432;\n- \u0414\u0435\u043B\u0430\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u041F\u041E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0435\u0439 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435)",
                        "links": {
                            "HRMS": "https://simpleone.ru/hrms",
                            "ITSM": "https://simpleone.ru/itsm"
                        }
                    }
                }
            },
            "job_3": {
                "title": {
                    "en": "Software Implementation, Testing, and Support Specialist",
                    "ru": "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044E \u041F\u041E, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0435"
                },
                "establishment": "Setl Group",
                "period": {
                    "en": "January 2024 - April 2025",
                    "ru": "\u042F\u043D\u0432\u0430\u0440\u044C 2024 - \u0410\u043F\u0440\u0435\u043B\u044C 2025"
                },
                "story": {
                    "en": {
                        "text": "Work with the website [LKK], integrated with the business process management platform [DocsVision] and the electronic trading platform [Praktis].\n\n**Responsibilities:**\n- Functional, integration, and exploratory testing from the client's side;\n- Maintaining test documentation;\n- Logging incidents and creating tasks for product improvements;\n- Gathering initial business requirements, describing and approving solutions for business process optimization and automation;\n- Participation in preparing functional requirements;\n- User support;\n- Collaboration with the development team and other stakeholders on development-related matters;\n- Keeping minutes of technical meetings.",
                        "links": {
                            "LKK": "https://lkk.setlgroup.ru/",
                            "DocsVision": "https://docsvision.com/",
                            "Praktis": "https://praktis.ru/"
                        }
                    },
                    "ru": {
                        "text": "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0432\u0435\u0431 \u0441\u0430\u0439\u0442\u043E\u043C \u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 [\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430], \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0441 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u043C\u0438 [DocsVision] \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u043E\u0439 [Praktis].\n\n**\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438:**\n - \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430;\n - \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438;\n - \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u043D\u0446\u0438\u0434\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0430\u0434\u0430\u0447 \u043F\u043E \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430;\n - \u0441\u0431\u043E\u0440 \u043F\u0435\u0440\u0432\u0438\u0447\u043D\u044B\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439, \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043F\u043E \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432;\n - \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439;\n - \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439;\n - \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438;\n - \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043E\u0432\u0435\u0449\u0430\u043D\u0438\u0439.",
                        "links": {
                            "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430": "https://lkk.setlgroup.ru/",
                            "DocsVision": "https://docsvision.com/",
                            "Praktis": "https://praktis.ru/"
                        }
                    }
                }
            },
            "job_2": {
                "title": {
                    "en": "QA Tester",
                    "ru": "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0449\u0438\u043A"
                },
                "establishment": {
                    "en": "Pet-projects",
                    "ru": "\u041F\u044D\u0442-\u043F\u0440\u043E\u0435\u043A\u0442\u044B"
                },
                "period": {
                    "en": "January 2023 - March 2024",
                    "ru": "\u042F\u043D\u0432\u0430\u0440\u044C 2023 - \u041C\u0430\u0440\u0442 2024"
                },
                "story": {
                    "en": "Preparation of a test plan, visualization, and analysis of requirements based on the feature list, prototypes, and mockups. Preparation of test documentation, testing of functionality, API, and GUI. Participation in feature list development. Used Qase.io, Trello, Miro, Git, Figma, and Postman in the project.<br> More details in the resume \uD83D\uDC47\uD83C\uDFFB",
                    "ru": "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u043D\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u0430\u043D\u0430\u043B\u0438\u0437 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u043E \u0444\u0438\u0442\u0447-\u043B\u0438\u0441\u0442\u0443, \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u0430\u043C \u0438 \u043C\u0430\u043A\u0435\u0442\u0430\u043C. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0430, api, gui. \u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0444\u0438\u0442\u0447-\u043B\u0438\u0441\u0442\u0430. \u0412 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B Qase.io, Trello, Miro, Git, Figma, Postman."
                }
            },
            "job_1": {
                "title": {
                    "en": "QA Tester",
                    "ru": "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0449\u0438\u043A"
                },
                "establishment": {
                    "en": "Yandex",
                    "ru": "\u042F\u043D\u0434\u0435\u043A\u0441"
                },
                "period": {
                    "en": "September 2022 - March 2023",
                    "ru": "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C 2022 - \u041C\u0430\u0440\u0442 2023"
                },
                "story": {
                    "en": "Testing of Yandex web and mobile services (Yandex Music, Yandex Disk, Yandex Games, Yandex Market, etc.) using ready-made test cases. Test suites with sets of test cases were provided, and I performed verifications based on them. Utilized tools such as DevTools and Charles. Remote part-time work.",
                    "ru": "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0431 \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 \u042F\u043D\u0434\u0435\u043A\u0441 (\u042F\u043D\u0434\u0435\u043A\u0441 \u043C\u0443\u0437\u044B\u043A\u0430, \u042F\u043D\u0434\u0435\u043A\u0441 \u0434\u0438\u0441\u043A, \u042F\u043D\u0434\u0435\u043A\u0441 \u0438\u0433\u0440\u044B, \u042F\u043D\u0434\u0435\u043A\u0441 \u043C\u0430\u0440\u043A\u0435\u0442 \u0438 \u043F\u0440\u043E\u0447\u0435\u0435) \u043F\u043E \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u0442\u0435\u0441\u0442-\u043A\u0435\u0439\u0441\u0430\u043C. \u0412\u044B\u0434\u0430\u0432\u0430\u043B\u0438\u0441\u044C \u0442\u0435\u0441\u0442-\u0441\u044C\u044E\u0442\u044B \u0441 \u043D\u0430\u0431\u043E\u0440\u043E\u043C \u0442\u0435\u0441\u0442-\u043A\u0435\u0439\u0441\u043E\u0432, \u043F\u043E \u043D\u0438\u043C \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043B \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B \u0442\u0430\u043A\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u043A\u0430\u043A DevTools \u0438 Charles. \u0423\u0434\u0430\u043B\u0451\u043D\u043D\u0430\u044F \u043F\u043E\u0434\u0440\u0430\u0431\u043E\u0442\u043A\u0430."
                }
            },
            "experience_alt": {
                "en": "Experience icon - medal with three stars",
                "ru": "\u0418\u043A\u043E\u043D\u043A\u0430 \u043E\u043F\u044B\u0442\u0430 - \u043C\u0435\u0434\u0430\u043B\u044C \u0441 \u0442\u0440\u0435\u043C\u044F \u0437\u0432\u0435\u0437\u0434\u0430\u043C\u0438"
            }
        },
        "education": {
            "title": {
                "en": "Education",
                "ru": "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
            },
            "speciality_1": {
                "title": {
                    "en": "Manual testing of software",
                    "ru": "\u0420\u0443\u0447\u043D\u043E\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u041F\u041E"
                },
                "establishment": {
                    "en": "Yandex Practicum",
                    "ru": "\u042F\u043D\u0434\u0435\u043A\u0441 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C"
                },
                "end_date": "2022",
                "story": {
                    "en": "Manual testing of functionality, GUI, API, working with relational databases, working with Linux console, test documentation, testing theory.",
                    "ru": "\u0420\u0443\u0447\u043D\u043E\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, GUI, API, \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0440\u0435\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0411\u0414, \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u043A\u043E\u043D\u0441\u043E\u043B\u044C\u044E Linux, \u0442\u0435\u0441\u0442\u043E\u0432\u0430\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F, \u0442\u0435\u043E\u0440\u0438\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F."
                }
            },
            "speciality_2": {
                "title": {
                    "en": "Law",
                    "ru": "\u042E\u0440\u0438\u0441\u043F\u0440\u0443\u0434\u0435\u043D\u0446\u0438\u044F"
                },
                "establishment": {
                    "en": "The Russian Presidential Academy of National Economy and Public Administration (RANEPA)",
                    "ru": "\u0420\u0410\u041D\u0425\u0438\u0413\u0421"
                },
                "end_date": "2015",
                "story": {
                    "en": "Civil law. Part-time department.",
                    "ru": "\u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0435 \u043F\u0440\u0430\u0432\u043E. \u0417\u0430\u043E\u0447\u043D\u043E\u0435 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435."
                }
            },
            "speciality_3": {
                "title": {
                    "en": "Linguistics",
                    "ru": "\u041B\u0438\u043D\u0433\u0432\u0438\u0441\u0442\u0438\u043A\u0430"
                },
                "establishment": {
                    "en": "Modern University for the Humanities",
                    "ru": "\u0421\u0413\u0410"
                },
                "end_date": "2009",
                "story": {
                    "en": "Foreign languages. Specialization - translator.",
                    "ru": "\u0418\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F - \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A."
                }
            },
            "education_alt": {
                "en": "Icon of education - student's book cover",
                "ru": "\u0418\u043A\u043E\u043D\u043A\u0430 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F - \u0448\u0430\u043F\u043A\u0430 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 \u043D\u0430 \u043A\u043D\u0438\u0433\u0430\u0445"
            }
        },
        "cv": {
            "link": {
                "en": "Open CV",
                "ru": "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435"
            },
            "download": {
                "en": "Download CV",
                "ru": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435"
            },
            "hh": {
                "en": "CV on hh",
                "ru": "\u0420\u0435\u0437\u044E\u043C\u0435 \u043D\u0430 hh"
            }
        }
    },
    "skills": {
        "title": {
            "en": "My skills",
            "ru": "\u041C\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438"
        },
        "js": {
            "title": "Java Script",
            "story": {
                "en": "Basic JS, Primise, Async/await.<br> I can write scripts, make requests to the server, manipulate the DOM",
                "ru": "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 JS, Primise, Async/await.<br> \u0423\u043C\u0435\u044E \u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442\u044B, \u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u0438\u0440\u0432\u0430\u0442\u044C DOM"
            }
        },
        "css": {
            "title": "CSS",
            "story": {
                "en": "General styles, positioning, animations, media queries, adaptive layout, grid, flex",
                "ru": "\u041E\u0431\u0449\u0438\u0435 \u0441\u0442\u0438\u043B\u0438, \u043F\u043E\u0437\u0438\u0446\u0438\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438, \u043C\u0435\u0434\u0438\u0430-\u0437\u0430\u043F\u0440\u043E\u0441\u044B, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430, grid, flex"
            }
        },
        "html": {
            "title": "HTML",
            "story": {
                "en": "Structure of the site, semantics, creating forms",
                "ru": "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0430\u0439\u0442\u0430, \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430, \u0441\u043E\u0437\u0434\u0430\u043D\u0435 \u0444\u043E\u0440\u043C"
            }
        },
        "api": {
            "title": "API",
            "story": {
                "en": "Testing API in Postman, writing checklists, creating collections, working with Swagger",
                "ru": "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u043D\u0438\u0435 API \u0432 Postman, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0447\u0435\u043A-\u043B\u0438\u0441\u0442\u043E\u0432, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439, \u0440\u0430\u0431\u043E\u0442\u0430 \u0441\u043E Swagger"
            }
        },
        "pw": {
            "title": "Playwright",
            "story": {
                "en": "Automation of E2E test cases. Using internal classes and methods of the employer. Initial level.",
                "ru": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F E2E \u0442\u0435\u0441\u0442-\u043A\u0435\u0439\u0441\u043E\u0432. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u043A\u043B\u0430\u0441\u0441\u043E\u0432 \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F. \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C."
            }
        },
        "linux": {
            "title": {
                "en": "Linux console",
                "ru": "\u041A\u043E\u043D\u0441\u043E\u043B\u044C Linux"
            },
            "story": {
                "en": "Manipulating directories, working with files, grep",
                "ru": "\u041C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0446\u0438\u0438 \u0441 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F\u043C\u0438, \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0444\u0430\u0439\u043B\u0430\u043C\u0438, grep"
            }
        },
        "func_test": {
            "title": {
                "en": "Functional testing",
                "ru": "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
            },
            "story": {
                "en": "Writing test documentation, Charles, Android Studio",
                "ru": "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0439-\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438, Charles, Android Studio"
            }
        },
        "test_gui": {
            "title": {
                "en": "Testing GUI",
                "ru": "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 GUI"
            },
            "story": {
                "en": "Testing GUI to Pixel Perfet in dependence of need, Charles, DevTools",
                "ru": "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 GUI \u0434\u043E Pixel Perfet \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438, Charles, DevTools"
            }
        },
        "git": {
            "title": "Git Hub",
            "story": {
                "en": "Creating and working with repositories, commits, pull-requests, working with branches",
                "ru": "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u044F\u043C\u0438, \u043A\u043E\u043C\u043C\u0438\u0442\u044B, pull-requests, \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0432\u0435\u0442\u043A\u0430\u043C\u0438"
            }
        },
        "postman": {
            "title": "Postman",
            "story": {
                "en": "Requests to API, creating collections",
                "ru": "\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043A API, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439"
            }
        },
        "charles": {
            "title": "Charles",
            "story": {
                "en": "Catching and replacing responses from the server",
                "ru": "\u041F\u0435\u0440\u0435\u0445\u0432\u0430\u0442 \u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u0430 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"
            }
        },
        "ttms": {
            "title": {
                "en": "Task and test management systems",
                "ru": "\u0421\u0438\u0441\u0442\u0435\u043C\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 \u0438 \u0442\u0435\u0441\u0442\u0430\u043C\u0438"
            },
            "story": {
                "en": "Worked in YouTrack, Kaiten, Trello, Qase.io, EvaTeam",
                "ru": "\u0411\u044B\u043B \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 YouTrack, Kaiten, Trello, Qase.io, EvaTeam"
            }
        },
        "test_theory": {
            "title": {
                "en": "Testing theory",
                "ru": "\u0422\u0435\u043E\u0440\u0438\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
            },
            "story": {
                "en": "Understanding the basic principles of testing and software development, types of testing, test design techniques and other",
                "ru": "\u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u041F\u041E, \u0432\u0438\u0434\u043E\u0432 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0442\u0435\u0441\u0442-\u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u043F\u0440\u043E\u0447\u0435\u0435"
            }
        },
        "sql": {
            "title": "SQL",
            "story": {
                "en": "Requests to relational DB, data manipulation",
                "ru": "\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043A \u0440\u0435\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u0411\u0414, \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438"
            }
        },
        "figma": {
            "title": "Figma",
            "story": {
                "en": "Reading and composing simple layouts",
                "ru": "\u0427\u0442\u0435\u043D\u0438\u0435 \u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u043C\u0430\u043A\u0435\u0442\u043E\u0432"
            }
        },
        "dv": {
            "title": "DocsVision",
            "story": {
                "en": "Working with documents, testing individual modules",
                "ru": "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043C\u043E\u0434\u0443\u043B\u0435\u0439"
            }
        },
        "ai": {
            "title": {
                "en": "AI",
                "ru": "\u0418\u0418"
            },
            "story": {
                "en": "Using Grok 3, DeepSeek, ChartGPT and Codeium in development and work.",
                "ru": "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0418\u0418 Grok 3, DeepSeek, ChartGPT \u0438 Codeium \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0435."
            }
        },
        "eng": {
            "title": {
                "en": "English",
                "ru": "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A"
            },
            "story": {
                "en": "Conversation level. Approximately A2. Can communicate in everyday life.",
                "ru": "\u0420\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C. \u041F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u04102. \u041C\u043E\u0433\u0443 \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0432 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0436\u0438\u0437\u043D\u0438."
            }
        },
        "soft_skills": {
            "title": {
                "en": "Soft skills",
                "ru": "\u0421\u041E\u0424\u0422 \u0421\u041A\u0418\u041B\u042B"
            },
            "story": {
                "en": "Very well adjust to team work, do not conflict, but can stand my position, quickly learn, disciplined.",
                "ru": "\u041E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0441\u044C \u043F\u043E\u0434 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443, \u043D\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0443\u044E, \u043D\u043E \u043C\u043E\u0433\u0443 \u043E\u0442\u0441\u0442\u043E\u044F\u0442\u044C \u0441\u0432\u043E\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E, \u0431\u044B\u0441\u0442\u0440\u043E \u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C, \u0445\u043E\u0440\u043E\u0448\u043E \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D."
            }
        },
        "open_button": {
            "en": "MORE",
            "ru": "\u0411\u041E\u041B\u042C\u0428\u0415"
        }
    },
    "projects": {
        "title": {
            "en": "My projects and artifacts",
            "ru": "\u041C\u043E\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u044B"
        },
        "my_web": {
            "name": {
                "en": "This site",
                "ru": "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442"
            },
            "description": {
                "en": "The site on which you are now. Created by me using HTML, CSS and JS",
                "ru": "\u0421\u0430\u0439\u0442 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0412\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C. \u0421\u043E\u0437\u0434\u0430\u043D \u043C\u043D\u043E\u0439 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C HTML, CSS \u0438 JS"
            },
            "git_link": {
                "en": "Project\n code",
                "ru": "\u041A\u043E\u0434\n \u043F\u0440\u043E\u0435\u043A\u0442\u0430"
            },
            "ak_alt": {
                "en": "AK yellow color",
                "ru": "AK \u0436\u0435\u043B\u0442\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430"
            }
        },
        "rus_place": {
            "name": {
                "en": "Russia's place",
                "ru": "\u041C\u0435\u0441\u0442\u043E Russia"
            },
            "description": {
                "en": "A website with photos of places in Russia. Written completely by me. The site was created according to the recommendation of the frontend developer course at Yandex Practicum. The backend is mock data.",
                "ru": "\u0412\u0435\u0431 \u0441\u0430\u0439\u0442 \u0441 \u0444\u043E\u0442\u043E \u043C\u0435\u0441\u0442 \u0420\u043E\u0441\u0441\u0438\u0438. \u041D\u0430\u043F\u0438\u0441\u0430\u043D \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043C\u043D\u043E\u0439. \u0421\u0430\u0439\u0442 \u0441\u043E\u0437\u0434\u0430\u043D \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u0443 \u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u043C \u043A\u0443\u0440\u0441\u0430 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u042F\u043D\u0434\u0435\u043A\u0441 \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u044D\u043A\u0435\u043D\u0434\u0430 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u043C\u043E\u043A-\u0434\u0430\u043D\u043D\u044B\u0435."
            },
            "git_link": {
                "en": "Project code",
                "ru": "\u041A\u043E\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"
            },
            "project_link": {
                "en": "Project link",
                "ru": "\u041F\u0440\u043E\u0435\u043A\u0442"
            },
            "mesto_alt": {
                "en": "Logo with 'Mesto Russia' on a black background",
                "ru": "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0441 '\u041C\u0435\u0441\u0442\u043E Russia' \u043D\u0430 \u0447\u0435\u0440\u043D\u043E\u043C \u0444\u043E\u043D\u0435"
            }
        },
        "test_doc": {
            "name": {
                "en": "Sample test documentation",
                "ru": "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438"
            },
            "description": {
                "en": "Sample test documentation from test tasks that I performed when looking for a job. Real documentation from work is not published for the sake of confidentiality.",
                "ru": "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438\u0437 \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044F \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u043B \u043F\u0440\u0438 \u043F\u043E\u0438\u0441\u043A\u0435 \u0440\u0430\u0431\u043E\u0442\u044B. \u0420\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u0441 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u044E \u0438\u0437 \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438."
            },
            "google_link": "Google Docs",
            "yandex_link": {
                "en": "Yandex Disk",
                "ru": "\u042F\u043D\u0434\u0435\u043A\u0441 \u0414\u0438\u0441\u043A"
            },
            "git_link": "GitHub",
            "test_doc_alt": {
                "en": "Circle with 8 types of test documentation",
                "ru": "\u041A\u0440\u0443\u0433 \u0441 8 \u0432\u0438\u0434\u0430\u043C\u0438 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438"
            }
        }
    },
    "life": {
        "title": {
            "en": "Life",
            "ru": "\u0418\u0437 \u0436\u0438\u0437\u043D\u0438"
        },
        "attr": {
            "arrow_left": {
                "en": "Arrow to the left",
                "ru": "\u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043B\u0435\u0432\u043E"
            },
            "arrow_right": {
                "en": "Arrow to the right",
                "ru": "\u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043F\u0440\u0430\u0432\u043E"
            },
            "picture_1": {
                "en": "Andrey near a bicycle",
                "ru": "\u0410\u043D\u0434\u0440\u0435\u0439 \u0440\u044F\u0434\u043E\u043C \u0441 \u0432\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434\u043E\u043C"
            },
            "picture_2": {
                "en": "Andrey with a girl on a football field",
                "ru": "\u0410\u043D\u0434\u0440\u0435\u0439 \u0441 \u0434\u0435\u0432\u0443\u0448\u043A\u043E\u0439 \u043D\u0430 \u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u043E\u043C \u0441\u0442\u0430\u0434\u0438\u043E\u043D\u0435"
            },
            "picture_3": {
                "en": "Andrey and his daughter play guitar and sing in a microphone",
                "ru": "\u0410\u043D\u0434\u0440\u0435\u0439 \u0441 \u0434\u043E\u0447\u0435\u0440\u044C\u044E \u0438\u0433\u0440\u0435\u0442 \u043D\u0430 \u0433\u0438\u0442\u0430\u0440\u0435, \u0434\u043E\u0447\u043A\u0430 \u043F\u043E\u0435\u0442 \u0432 \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D"
            },
            "picture_4": {
                "en": "Andrey on a sofa with a notebook. He works",
                "ru": "\u0410\u043D\u0434\u0440\u0435\u0439 \u043D\u0430 \u0434\u0438\u0432\u0430\u043D\u0435 \u0441 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u043E\u043C. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442"
            },
            "picture_5": {
                "en": "Andrey on a board in the middle of the lake",
                "ru": "\u0410\u043D\u0434\u0440\u0435\u0439 \u043D\u0430 \u0441\u0430\u043F-\u0434\u043E\u0441\u043A\u0435 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 \u043E\u0437\u0435\u0440\u0430"
            },
            "picture_6": {
                "en": "Andrey hugs his daughter, she's with cotton candy",
                "ru": "\u0410\u043D\u0434\u0440\u0435\u0439 \u043E\u0431\u043D\u0438\u043C\u0430\u0435\u0442 \u0434\u043E\u0447\u044C, \u043E\u043D\u0430 \u0441\u043E \u0441\u043B\u0430\u0434\u043A\u043E\u0439 \u0432\u0430\u0442\u043E\u0439"
            }
        }
    },
    "modal": {
        "img_alt": {
            "en": "Zoomed image",
            "ru": "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
        }
    },
    "footer": {
        "layot": {
            "en": "The layout was created using",
            "ru": "\u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0441\u0430\u0439\u0442\u0430 \u0431\u044B\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u043C\u0430\u043A\u0435\u0442 \u0441 "
        },
        "layout_link": "demo.templatemonster.com",
        "icons_1": {
            "en": "Icons were taken from ",
            "ru": "\u0418\u043A\u043E\u043D\u043A\u0438 \u0432\u0437\u044F\u0442\u044B \u0441 "
        },
        "icons_2": {
            "en": " and ",
            "ru": " \u0438 "
        },
        "icons_link_1": "flaticon.com",
        "icons_link_2": "pautina.io"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eOJTo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "languageToogler", ()=>languageToogler);
var _indexJs = require("../index.js");
function languageToogler() {
    function handleResize() {
        const sectionWidth = document.querySelector('.topbar__container');
        const sideBar = document.querySelector('.header__side-bar');
        const existingSideBarLinks = document.querySelector('.topbar__language_links_side-bar');
        const existingTopBarLinks = document.querySelector('.topbar__language_links');
        if (existingSideBarLinks) existingSideBarLinks.remove();
        if (existingTopBarLinks) existingTopBarLinks.remove();
        if (window.innerWidth <= 768) {
            const languageLinks = document.createElement('li');
            languageLinks.classList.add('topbar__language_links_side-bar');
            setLanguageButton((0, _indexJs.language), languageLinks);
            sideBar.append(languageLinks);
        } else {
            const languageLinks = document.createElement('div');
            languageLinks.classList.add('topbar__language_links');
            setLanguageButton((0, _indexJs.language), languageLinks);
            sectionWidth.prepend(languageLinks);
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
}
function setLanguageButton(language, languageLinks) {
    languageLinks.innerHTML = `
        <img class="topbar__language_link rus${language === 'ru' ? ' language_active' : ''}" src="/images/icons/rus.svg" alt="\u{422}\u{440}\u{435}\u{445}\u{446}\u{432}\u{435}\u{442}\u{43D}\u{44B}\u{439} \u{444}\u{43B}\u{430}\u{433} \u{420}\u{43E}\u{441}\u{441}\u{438}\u{438}">
        <img class="topbar__language_link eng${language === 'en' ? ' language_active' : ''}" src="/images/icons/usa.svg" alt="\u{417}\u{432}\u{435}\u{437}\u{434}\u{43D}\u{43E}-\u{43F}\u{43E}\u{43B}\u{43E}\u{441}\u{430}\u{442}\u{44B}\u{439} \u{444}\u{43B}\u{430}\u{433} \u{421}\u{428}\u{410}">
    `;
}

},{"../index.js":"a0t4e","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eaoOV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayCurrentSection", ()=>displayCurrentSection);
function displayCurrentSection() {
    document.addEventListener("DOMContentLoaded", ()=>{
        const links = document.querySelectorAll('.header__nav_link');
        const sections = Array.from(links).map((link)=>{
            const targetId = link.getAttribute('href').substring(1);
            const section = document.getElementById(targetId);
            return {
                link,
                section
            };
        });
        function activateLink() {
            const scrollPosition = window.scrollY + 100;
            for(let i = 0; i < sections.length; i++){
                const { link, section } = sections[i];
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) link.classList.add('section_active');
                else link.classList.remove('section_active');
            }
        }
        window.addEventListener('scroll', activateLink);
        activateLink();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7cGJr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setSkillsSectionSize", ()=>setSkillsSectionSize);
var _constantsJs = require("./constants.js");
function setSkillsSectionSize() {
    (0, _constantsJs.skillsWrapperButton).addEventListener("click", ()=>{
        (0, _constantsJs.skillsWrapper).classList.toggle("skills__wrapper_opened");
        if ((0, _constantsJs.skillsWrapper).classList.contains("skills__wrapper_opened")) (0, _constantsJs.skillsWrapperButton).textContent = "\u0421\u0412\u0415\u0420\u041D\u0423\u0422\u042C".toUpperCase();
        if (!(0, _constantsJs.skillsWrapper).classList.contains("skills__wrapper_opened")) (0, _constantsJs.skillsWrapperButton).textContent = "\u0411\u041E\u041B\u042C\u0428\u0415".toUpperCase();
    });
}

},{"./constants.js":"3Sp5n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ksZG3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "language", ()=>language);
parcelHelpers.export(exports, "getLocalLanguage", ()=>getLocalLanguage);
parcelHelpers.export(exports, "setLifePicturesLanguage", ()=>setLifePicturesLanguage);
parcelHelpers.export(exports, "chooseLanguage", ()=>chooseLanguage);
var _translationsJs = require("./translations.js");
let language;
function getLocalLanguage() {
    // Проверка сохраненного языка в localStorage
    const savedLanguage = localStorage.getItem('language');
    const supportedLanguages = [
        'en',
        'ru'
    ];
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
        language = savedLanguage;
        setLanguage(savedLanguage);
        return;
    }
    // Определение языка браузера
    const userLanguage = (navigator.language || navigator.userLanguage).split('-')[0];
    // Выбор языка
    language = supportedLanguages.includes(userLanguage) ? userLanguage : 'en';
    localStorage.setItem('language', language);
    setLanguage(language);
}
// Функция установки языка
function setLanguage(language) {
    if (!language) return; // Проверка на null/undefined
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
    setTopbarLanguauge(language);
    setHeaderLanguauge(language);
    setHeroLanguauge(language);
    setAboutLanguauge(language);
    setBackgroundLanguauge(language);
    setSkillsLanguauge(language);
    setProjectsLanguauge(language);
    setLifeLanguauge(language);
    setModalLanguauge(language);
    setFooterLanguauge(language);
}
// Функция замены ссылок в тексте
function replaceLinks(text, links = {}) {
    for (const [key, url] of Object.entries(links))text = text.replace(`[${key}]`, `<a href="${url}" class="text_link" target="_blank">${key}</a>`);
    text = replaceBreaks(text);
    text = replaceBold(text);
    return text;
}
function replaceBreaks(text) {
    if (!text || typeof text !== 'string') return text;
    text = text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
    return text;
}
function replaceBold(text) {
    if (!text || typeof text !== 'string') return text;
    text = `<p>${text}</p>`;
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text_strong">$1</strong>');
    return text;
}
function toLowercaseText(text) {
    if (!text || typeof text !== 'string') return text;
    text = text.replace(/--([^\-]+)--/g, '<span class="to-lowercase_text">$1</span>');
    return text;
}
function setTopbarLanguauge(language) {
    document.querySelectorAll('.tr-email').forEach((el)=>el.textContent = (0, _translationsJs.translations).topbar.email);
    document.querySelectorAll('.tr-phone').forEach((el)=>el.textContent = (0, _translationsJs.translations).topbar.phone);
}
function setHeaderLanguauge(language) {
    document.querySelector('.tr-logo_name').textContent = (0, _translationsJs.translations).header.logo;
    document.querySelector('.tr_logo_qa').textContent = (0, _translationsJs.translations).header.qa;
    document.querySelector('.tr_header_about').textContent = (0, _translationsJs.translations).header.about[language];
    document.querySelector('.tr_header_background').textContent = (0, _translationsJs.translations).header.background[language];
    document.querySelector('.tr_header_skills').textContent = (0, _translationsJs.translations).header.skills[language];
    document.querySelector('.tr_header_projects').textContent = (0, _translationsJs.translations).header.projects[language];
    document.querySelector('.tr_header_life').textContent = (0, _translationsJs.translations).header.life[language];
}
function setHeroLanguauge(language) {
    document.querySelector('.tr_hero_i').innerHTML = toLowercaseText((0, _translationsJs.translations).hero.me[language]);
    document.querySelector('.tr_hero_name').textContent = (0, _translationsJs.translations).hero.name[language];
    document.querySelector('.tr_hero_speciality').innerHTML = toLowercaseText((0, _translationsJs.translations).hero.speciality[language]);
    document.querySelector('.tr_hero_subtitle').textContent = (0, _translationsJs.translations).hero.subtitle[language];
    document.querySelector('.tr_hero_addition').textContent = (0, _translationsJs.translations).hero.additional[language];
    document.querySelector('.tr_hero_button').textContent = (0, _translationsJs.translations).hero.button[language];
    document.querySelector('.tr_hero-img_alt').setAttribute('alt', (0, _translationsJs.translations).hero.img_alt[language]);
}
function setAboutLanguauge(language) {
    document.querySelector('.tr_about_title').textContent = (0, _translationsJs.translations).about.title[language];
    document.querySelector('.tr_about_story').innerHTML = replaceLinks((0, _translationsJs.translations).about.subtitle[language]);
}
function setBackgroundLanguauge(language) {
    // Опыт 
    document.querySelector('.tr_background_experience_title').textContent = (0, _translationsJs.translations).background.experence.title[language];
    // job-4
    document.querySelector('.tr_background_job-4_title').textContent = (0, _translationsJs.translations).background.experence.job_4.title[language];
    document.querySelector('.tr_background_job-4_establishment').textContent = (0, _translationsJs.translations).background.experence.job_4.establishment;
    document.querySelector('.tr_background_job-4_period').textContent = (0, _translationsJs.translations).background.experence.job_4.period[language];
    document.querySelector('.tr_background_job-4_story').textContent = (0, _translationsJs.translations).background.experence.job_4.story[language];
    document.querySelector('.tr_background_job-4_story').innerHTML = replaceLinks((0, _translationsJs.translations).background.experence.job_4.story[language].text, (0, _translationsJs.translations).background.experence.job_4.story[language].links);
    // job-3
    document.querySelector('.tr_background_job-3_title').textContent = (0, _translationsJs.translations).background.experence.job_3.title[language];
    document.querySelector('.tr_background_job-3_establishment').textContent = (0, _translationsJs.translations).background.experence.job_3.establishment;
    document.querySelector('.tr_background_job-3_period').textContent = (0, _translationsJs.translations).background.experence.job_3.period[language];
    document.querySelector('.tr_background_job-3_story').innerHTML = replaceLinks((0, _translationsJs.translations).background.experence.job_3.story[language].text, (0, _translationsJs.translations).background.experence.job_3.story[language].links);
    // job-2
    document.querySelector('.tr_background_job-2_title').textContent = (0, _translationsJs.translations).background.experence.job_2.title[language];
    document.querySelector('.tr_background_job-2_establishment').textContent = (0, _translationsJs.translations).background.experence.job_2.establishment[language];
    document.querySelector('.tr_background_job-2_period').textContent = (0, _translationsJs.translations).background.experence.job_2.period[language];
    document.querySelector('.tr_background_job-2_story').textContent = (0, _translationsJs.translations).background.experence.job_2.story[language];
    // job-1
    document.querySelector('.tr_background_job-1_title').textContent = (0, _translationsJs.translations).background.experence.job_1.title[language];
    document.querySelector('.tr_background_job-1_establishment').textContent = (0, _translationsJs.translations).background.experence.job_1.establishment[language];
    document.querySelector('.tr_background_job-1_period').textContent = (0, _translationsJs.translations).background.experence.job_1.period[language];
    document.querySelector('.tr_background_job-1_story').textContent = (0, _translationsJs.translations).background.experence.job_1.story[language];
    document.querySelector('.tr_experience_alt').setAttribute('alt', (0, _translationsJs.translations).background.experence.experience_alt[language]);
    // Образование
    document.querySelector('.tr_background_education_title').textContent = (0, _translationsJs.translations).background.education.title[language];
    // Образование 3
    document.querySelector('.tr_background_edu-3_title').textContent = (0, _translationsJs.translations).background.education.speciality_3.title[language];
    document.querySelector('.tr_background_edu-3_establishment').textContent = (0, _translationsJs.translations).background.education.speciality_3.establishment[language];
    document.querySelector('.tr_background_edu-3_period').textContent = (0, _translationsJs.translations).background.education.speciality_3.end_date;
    document.querySelector('.tr_background_edu-3_story').textContent = (0, _translationsJs.translations).background.education.speciality_3.story[language];
    // Образование 2
    document.querySelector('.tr_background_edu-2_title').textContent = (0, _translationsJs.translations).background.education.speciality_2.title[language];
    document.querySelector('.tr_background_edu-2_establishment').textContent = (0, _translationsJs.translations).background.education.speciality_2.establishment[language];
    document.querySelector('.tr_background_edu-2_period').textContent = (0, _translationsJs.translations).background.education.speciality_2.end_date;
    document.querySelector('.tr_background_edu-2_story').textContent = (0, _translationsJs.translations).background.education.speciality_2.story[language];
    // Образование 1
    document.querySelector('.tr_background_edu-1_title').textContent = (0, _translationsJs.translations).background.education.speciality_1.title[language];
    document.querySelector('.tr_background_edu-1_establishment').textContent = (0, _translationsJs.translations).background.education.speciality_1.establishment[language];
    document.querySelector('.tr_background_edu-1_period').textContent = (0, _translationsJs.translations).background.education.speciality_1.end_date;
    document.querySelector('.tr_background_edu-1_story').textContent = (0, _translationsJs.translations).background.education.speciality_1.story[language];
    document.querySelector('.tr_education_alt').setAttribute('alt', (0, _translationsJs.translations).background.education.education_alt[language]);
    // CV
    document.querySelector('.tr_cv_link').textContent = (0, _translationsJs.translations).background.cv.link[language];
    document.querySelector('.tr_cv-download_link').textContent = (0, _translationsJs.translations).background.cv.download[language];
    document.querySelector('.tr_cv-hh_link').textContent = (0, _translationsJs.translations).background.cv.hh[language];
}
function setSkillsLanguauge(language) {
    document.querySelector('.tr_skills_title').textContent = (0, _translationsJs.translations).skills.title[language];
    // JS
    document.querySelector('.tr_skills_js').textContent = (0, _translationsJs.translations).skills.js.title;
    document.querySelector('.tr_skills_js_story').textContent = (0, _translationsJs.translations).skills.js.story[language];
    // CSS
    document.querySelector('.tr_skills_css').textContent = (0, _translationsJs.translations).skills.css.title;
    document.querySelector('.tr_skills_css_story').textContent = (0, _translationsJs.translations).skills.css.story[language];
    // HTML
    document.querySelector('.tr_skills_html').textContent = (0, _translationsJs.translations).skills.html.title;
    document.querySelector('.tr_skills_html_story').textContent = (0, _translationsJs.translations).skills.html.story[language];
    // API
    document.querySelector('.tr_skills_api').textContent = (0, _translationsJs.translations).skills.api.title;
    document.querySelector('.tr_skills_api_story').textContent = (0, _translationsJs.translations).skills.api.story[language];
    // Playwrghit
    document.querySelector('.tr_skills_playwright').textContent = (0, _translationsJs.translations).skills.pw.title;
    document.querySelector('.tr_skills_playwright_story').textContent = (0, _translationsJs.translations).skills.pw.story[language];
    // Linux console
    document.querySelector('.tr_skills_console').textContent = (0, _translationsJs.translations).skills.linux.title[language];
    document.querySelector('.tr_skills_console_story').textContent = (0, _translationsJs.translations).skills.linux.story[language];
    // Functional testing
    document.querySelector('.tr_skills_functional').textContent = (0, _translationsJs.translations).skills.func_test.title[language];
    document.querySelector('.tr_skills_functional_story').textContent = (0, _translationsJs.translations).skills.func_test.story[language];
    // GUI testing
    document.querySelector('.tr_skills_gui').textContent = (0, _translationsJs.translations).skills.test_gui.title[language];
    document.querySelector('.tr_skills_gui_story').textContent = (0, _translationsJs.translations).skills.test_gui.story[language];
    // Git
    document.querySelector('.tr_skills_git').textContent = (0, _translationsJs.translations).skills.git.title;
    document.querySelector('.tr_skills_git_story').textContent = (0, _translationsJs.translations).skills.git.story[language];
    // Postman
    document.querySelector('.tr_skills_postman').textContent = (0, _translationsJs.translations).skills.postman.title;
    document.querySelector('.tr_skills_postman_story').textContent = (0, _translationsJs.translations).skills.postman.story[language];
    // Charles
    document.querySelector('.tr_skills_charles').textContent = (0, _translationsJs.translations).skills.charles.title;
    document.querySelector('.tr_skills_charles_story').textContent = (0, _translationsJs.translations).skills.charles.story[language];
    // TTMS
    document.querySelector('.tr_skills_ttms').textContent = (0, _translationsJs.translations).skills.ttms.title[language];
    document.querySelector('.tr_skills_ttms_story').textContent = (0, _translationsJs.translations).skills.ttms.story[language];
    // Testing theory
    document.querySelector('.tr_skills_theory').textContent = (0, _translationsJs.translations).skills.test_theory.title[language];
    document.querySelector('.tr_skills_theory_story').textContent = (0, _translationsJs.translations).skills.test_theory.story[language];
    // SQL
    document.querySelector('.tr_skills_sql').textContent = (0, _translationsJs.translations).skills.sql.title;
    document.querySelector('.tr_skills_sql_story').textContent = (0, _translationsJs.translations).skills.sql.story[language];
    // Figma
    document.querySelector('.tr_skills_figma').textContent = (0, _translationsJs.translations).skills.figma.title;
    document.querySelector('.tr_skills_figma_story').textContent = (0, _translationsJs.translations).skills.figma.story[language];
    // DocsVision
    document.querySelector('.tr_skills_docsvision').textContent = (0, _translationsJs.translations).skills.dv.title;
    document.querySelector('.tr_skills_docsvision_story').textContent = (0, _translationsJs.translations).skills.dv.story[language];
    // AI
    document.querySelector('.tr_skills_ai').textContent = (0, _translationsJs.translations).skills.ai.title[language];
    document.querySelector('.tr_skills_ai_story').textContent = (0, _translationsJs.translations).skills.ai.story[language];
    // English
    document.querySelector('.tr_skills_eng').textContent = (0, _translationsJs.translations).skills.eng.title[language];
    document.querySelector('.tr_skills_eng_story').textContent = (0, _translationsJs.translations).skills.eng.story[language];
    // Soft skills
    document.querySelector('.tr_skills_soft').textContent = (0, _translationsJs.translations).skills.soft_skills.title[language];
    document.querySelector('.tr_skills_soft_story').textContent = (0, _translationsJs.translations).skills.soft_skills.story[language];
    document.querySelector('.tr_skills_open').textContent = (0, _translationsJs.translations).skills.open_button[language];
}
function setProjectsLanguauge(language) {
    document.querySelector('.tr_projects_title').textContent = (0, _translationsJs.translations).projects.title[language];
    // My website
    document.querySelector('.tr_project_ak').textContent = (0, _translationsJs.translations).projects.my_web.name[language];
    document.querySelector('.tr_project_ak_story').textContent = (0, _translationsJs.translations).projects.my_web.description[language];
    document.querySelector('.tr_project_ak_link').textContent = (0, _translationsJs.translations).projects.my_web.git_link[language];
    document.querySelector('.tr_project_ak_alt').setAttribute('alt', (0, _translationsJs.translations).projects.my_web.ak_alt[language]);
    // Russia Place
    document.querySelector('.tr_project_mesto').textContent = (0, _translationsJs.translations).projects.rus_place.name[language];
    document.querySelector('.tr_project_mesto_story').textContent = (0, _translationsJs.translations).projects.rus_place.description[language];
    document.querySelector('.tr_project_mesto_git-link').textContent = (0, _translationsJs.translations).projects.rus_place.git_link[language];
    document.querySelector('.tr_project_mesto_link').textContent = (0, _translationsJs.translations).projects.rus_place.project_link[language];
    document.querySelector('.tr_project_mesto_alt').setAttribute('alt', (0, _translationsJs.translations).projects.rus_place.mesto_alt[language]);
    // Test documentation
    document.querySelector('.tr_project_documentation').textContent = (0, _translationsJs.translations).projects.test_doc.name[language];
    document.querySelector('.tr_project_documentation_story').textContent = (0, _translationsJs.translations).projects.test_doc.description[language];
    document.querySelector('.tr_project_documentation_google-link').textContent = (0, _translationsJs.translations).projects.test_doc.google_link;
    document.querySelector('.tr_project_documentation_yandex-link').textContent = (0, _translationsJs.translations).projects.test_doc.yandex_link[language];
    document.querySelector('.tr_project_documentation_git-link').textContent = (0, _translationsJs.translations).projects.test_doc.git_link;
    document.querySelector('.tr_test-doc_alt').setAttribute('alt', (0, _translationsJs.translations).projects.test_doc.test_doc_alt[language]);
}
function setLifeLanguauge(language) {
    document.querySelector('.tr_life_title').textContent = (0, _translationsJs.translations).life.title[language];
    document.querySelector('.tr_life_left_arrow').setAttribute('alt', (0, _translationsJs.translations).life.attr.arrow_left[language]);
    document.querySelector('.tr_life_left_arrow').setAttribute('alt', (0, _translationsJs.translations).life.attr.arrow_right[language]);
}
async function setLifePicturesLanguage(language) {
    document.querySelector('.tr_life_slide_1').setAttribute('alt', (0, _translationsJs.translations).life.attr.picture_1[language]);
    document.querySelector('.tr_life_slide_2').setAttribute('alt', (0, _translationsJs.translations).life.attr.picture_2[language]);
    document.querySelector('.tr_life_slide_3').setAttribute('alt', (0, _translationsJs.translations).life.attr.picture_3[language]);
    document.querySelector('.tr_life_slide_4').setAttribute('alt', (0, _translationsJs.translations).life.attr.picture_4[language]);
    document.querySelector('.tr_life_slide_5').setAttribute('alt', (0, _translationsJs.translations).life.attr.picture_5[language]);
    document.querySelector('.tr_life_slide_6').setAttribute('alt', (0, _translationsJs.translations).life.attr.picture_6[language]);
}
function setModalLanguauge(language) {
    document.querySelector('.tr_alt_modal_img').setAttribute('alt', (0, _translationsJs.translations).modal.img_alt[language]);
}
function setFooterLanguauge(language) {
    document.querySelector('.tr_footer_layout').textContent = (0, _translationsJs.translations).footer.layot[language];
    document.querySelector('.tr_footer_layout_link').textContent = (0, _translationsJs.translations).footer.layout_link;
    document.querySelector('.tr_footer_icons-1').textContent = (0, _translationsJs.translations).footer.icons_1[language];
    document.querySelector('.tr_footer_icons-2').textContent = (0, _translationsJs.translations).footer.icons_2[language];
    document.querySelector('.tr_footer_icons_link-2').textContent = (0, _translationsJs.translations).footer.icons_link_1;
    document.querySelector('.tr_footer_icons_link-1').textContent = (0, _translationsJs.translations).footer.icons_link_2;
}
function chooseLanguage() {
    document.addEventListener('click', (event)=>{
        const langButton = event.target.closest('.topbar__language_link');
        if (!langButton) return;
        document.querySelectorAll('.topbar__language_link').forEach((btn)=>{
            btn.classList.remove('language_active');
        });
        langButton.classList.add('language_active');
        const selectedLanguage = langButton.classList.contains('rus') ? 'ru' : 'en';
        localStorage.setItem('language', selectedLanguage);
        setLanguage(selectedLanguage);
        setLifePicturesLanguage(selectedLanguage);
    });
}

},{"./translations.js":"J9JlI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["4CCEi","a0t4e"], "a0t4e", "parcelRequirebbb8", {})

//# sourceMappingURL=andrey-kolod.github.io.31b563d9.js.map
