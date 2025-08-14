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
})({"hYSXo":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 62094;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a090c233945ddfa4";
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

},{}],"2Wtak":[function(require,module,exports,__globalThis) {
var _constantsJs = require("./src/components/constants.js");
var _modalJs = require("./src/components/modal.js");
var _cardJs = require("./src/components/card.js");
var _validateJs = require("./src/components/validate.js");
var _apiJs = require("./src/components/api.js");
// Перемещаем асинхронный код в IIAFE
let profileData; // Объявляем переменную без export
(async ()=>{
    try {
        profileData = await (0, _apiJs.getServerProfile)(); // Загружаем данные профиля
        setLocalProfile(profileData); // Устанавливаем данные профиля
    } catch (err) {
        console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
    }
})();
// Функция для установки данных профиля
function setLocalProfile(profile) {
    (0, _constantsJs.profileUserName).textContent = profile.name;
    (0, _constantsJs.profileUserAbout).textContent = profile.about;
    (0, _constantsJs.profileUserAvatar).setAttribute("src", profile.avatar);
    (0, _modalJs.getProfileInfo)();
}
// Загрузка карточек мест с сервера
try {
    (async ()=>{
        const cards = await (0, _apiJs.getServerCards)();
        setLocalCards(cards);
    })();
} catch (err) {
    console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
}
function setLocalCards(cards) {
    cards.forEach((card)=>{
        setLocalCard(card);
    });
}
function setLocalCard(card) {
    const userIsOwner = card.owner._id === profileData._id;
    const likeState = card.likes.some((item)=>item._id === profileData._id);
    (0, _cardJs.addPlaceInArray)(card.name, card.link, userIsOwner, card._id, card.likes, likeState);
    (0, _cardJs.addPlacesInHtml)(card._id, likeState);
    (0, _cardJs.deletePictureButton)();
    (0, _modalJs.popupOverlay)();
    (0, _cardJs.addLike)();
}
// Остальной код остаётся без изменений
(0, _constantsJs.editProfileButton).addEventListener("click", ()=>(0, _modalJs.openPopup)((0, _constantsJs.editProfilePopup)));
async function saveProfileInfoOnServerAndHTML(evt) {
    try {
        evt.preventDefault();
        (0, _modalJs.savingButtonText)((0, _constantsJs.saveProfileButton));
        (0, _modalJs.saveProfileInfo)();
        await (0, _apiJs.setServerProfile)((0, _constantsJs.profileUserName).textContent, (0, _constantsJs.profileUserAbout).textContent);
        (0, _modalJs.savedButtonText)((0, _constantsJs.saveProfileButton));
        (0, _modalJs.closePopup)((0, _constantsJs.editProfilePopup));
    } catch (err) {
        console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
    }
}
(0, _constantsJs.saveProfileButton).addEventListener("click", (evt)=>saveProfileInfoOnServerAndHTML(evt));
(0, _constantsJs.closeProfilePopupButton).addEventListener("click", (evt)=>{
    evt.preventDefault();
    (0, _modalJs.closePopup)((0, _constantsJs.editProfilePopup));
    (0, _modalJs.getProfileInfo)();
});
(0, _apiJs.getServerCards)();
(0, _constantsJs.addPictureButton).addEventListener("click", ()=>{
    (0, _modalJs.openPopup)((0, _constantsJs.addPicturesPopup));
});
(0, _constantsJs.closePicturesPopupButton).addEventListener("click", (evt)=>{
    evt.preventDefault();
    (0, _modalJs.closePopup)((0, _constantsJs.addPicturesPopup));
});
(0, _cardJs.deletePictureButton)();
async function saveAddedPictureOnServerAndHTML(evt) {
    try {
        evt.preventDefault();
        (0, _modalJs.savingButtonText)((0, _constantsJs.savePicturesButton));
        const newCard = await (0, _apiJs.addServerCard)((0, _constantsJs.placeNameField).value, (0, _constantsJs.placeLinkField).value);
        setLocalCard(newCard);
        (0, _modalJs.savedButtonText)((0, _constantsJs.savePicturesButton));
        (0, _modalJs.closePopup)((0, _constantsJs.addPicturesPopup));
    } catch (err) {
        console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
    }
}
(0, _constantsJs.savePicturesButton).addEventListener("click", (evt)=>{
    saveAddedPictureOnServerAndHTML(evt);
});
(0, _constantsJs.closeFullScreenPicturePopupButton).addEventListener("click", function(evt) {
    evt.preventDefault();
    (0, _modalJs.closePopup)((0, _constantsJs.fullScreenPicturePopup));
});
(0, _constantsJs.avatarPopupOpenElement).addEventListener("click", (item)=>{
    item.preventDefault();
    (0, _modalJs.openPopup)((0, _constantsJs.avatarPopup));
});
(0, _constantsJs.avatarPopupCloseButton).addEventListener("click", (item)=>{
    item.preventDefault();
    (0, _modalJs.closePopup)((0, _constantsJs.avatarPopup));
});
async function saveNewAvatar() {
    try {
        const avatarLink = (0, _constantsJs.avatarInput).value;
        await (0, _apiJs.setServerAvatar)(avatarLink);
        (0, _modalJs.uploadAvatar)(avatarLink); // Исправлено: передаём avatarLink напрямую
        (0, _modalJs.closePopup)((0, _constantsJs.avatarPopup));
    } catch (err) {
        console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
    }
}
(0, _constantsJs.saveAvatarButton).addEventListener("click", (item)=>{
    item.preventDefault();
    saveNewAvatar();
});
(0, _modalJs.closePopupOnClick)((0, _constantsJs.overLay));
(0, _modalJs.closePopupOnEsc)((0, _constantsJs.overLay));
(0, _modalJs.saveFormInfoOnEnter)();
(0, _validateJs.enableValidation)();
(0, _validateJs.submitButtonValidation)((0, _constantsJs.editProfileButton));
(0, _validateJs.submitButtonValidation)((0, _constantsJs.addPictureButton));

},{"./src/components/constants.js":"hxn1V","./src/components/modal.js":"5SvFU","./src/components/card.js":"7cNeQ","./src/components/validate.js":"gzfE1","./src/components/api.js":"d69Et"}],"hxn1V":[function(require,module,exports,__globalThis) {
// Попапы
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "overLay", ()=>overLay);
parcelHelpers.export(exports, "popupOpened", ()=>popupOpened);
parcelHelpers.export(exports, "popupClosed", ()=>popupClosed);
parcelHelpers.export(exports, "input", ()=>input);
parcelHelpers.export(exports, "editProfileButton", ()=>editProfileButton);
parcelHelpers.export(exports, "closeProfilePopupButton", ()=>closeProfilePopupButton);
parcelHelpers.export(exports, "editProfilePopup", ()=>editProfilePopup);
parcelHelpers.export(exports, "saveProfileButton", ()=>saveProfileButton);
parcelHelpers.export(exports, "editProfileForm", ()=>editProfileForm);
parcelHelpers.export(exports, "addPictureButton", ()=>addPictureButton);
parcelHelpers.export(exports, "closePicturesPopupButton", ()=>closePicturesPopupButton);
parcelHelpers.export(exports, "addPicturesPopup", ()=>addPicturesPopup);
parcelHelpers.export(exports, "savePicturesButton", ()=>savePicturesButton);
parcelHelpers.export(exports, "closeFullScreenPicturePopupButton", ()=>closeFullScreenPicturePopupButton);
parcelHelpers.export(exports, "initialCards", ()=>initialCards);
parcelHelpers.export(exports, "places", ()=>places);
parcelHelpers.export(exports, "placeTemplate", ()=>placeTemplate);
parcelHelpers.export(exports, "placeNameField", ()=>placeNameField);
parcelHelpers.export(exports, "placeLinkField", ()=>placeLinkField);
parcelHelpers.export(exports, "avatarPopupOpenElement", ()=>avatarPopupOpenElement);
parcelHelpers.export(exports, "avatarPopup", ()=>avatarPopup);
parcelHelpers.export(exports, "avatarPopupCloseButton", ()=>avatarPopupCloseButton);
parcelHelpers.export(exports, "saveAvatarButton", ()=>saveAvatarButton);
parcelHelpers.export(exports, "avatarInput", ()=>avatarInput);
parcelHelpers.export(exports, "userNameField", ()=>userNameField);
parcelHelpers.export(exports, "userAboutField", ()=>userAboutField);
parcelHelpers.export(exports, "profileUserName", ()=>profileUserName);
parcelHelpers.export(exports, "profileUserAbout", ()=>profileUserAbout);
parcelHelpers.export(exports, "profileUserAvatar", ()=>profileUserAvatar);
parcelHelpers.export(exports, "fullScreenPicturePopup", ()=>fullScreenPicturePopup);
parcelHelpers.export(exports, "overlayHeader", ()=>overlayHeader);
parcelHelpers.export(exports, "confirmDeletePicturePopup", ()=>confirmDeletePicturePopup);
parcelHelpers.export(exports, "confirmDeletePictureButton", ()=>confirmDeletePictureButton);
parcelHelpers.export(exports, "closePopupConfirmDeletePictureButton", ()=>closePopupConfirmDeletePictureButton);
const overLay = document.querySelectorAll(".popup");
const popupOpened = "popup_opened";
const popupClosed = "popup_closed";
const input = document.querySelectorAll(".popup__container_fields");
const editProfileButton = document.querySelector("#edit-button");
const closeProfilePopupButton = document.querySelector("#profile-popup-close-button");
const editProfilePopup = document.querySelector("#edit-profile-popup");
const saveProfileButton = document.querySelector("#save-profile-button");
const editProfileForm = document.forms["editProfileForm"];
const addPictureButton = document.querySelector("#add-picture-button");
const closePicturesPopupButton = document.querySelector("#pictures-popup-close-button");
const addPicturesPopup = document.querySelector("#add-pictures-popup");
const savePicturesButton = document.querySelector("#save-pictures-button");
const closeFullScreenPicturePopupButton = document.querySelector("#full-screen-picture-close-button");
const initialCards = [];
const places = document.querySelector(".elements");
const placeTemplate = document.querySelector("#place").content;
let placeNameField = document.querySelector("#edit-place-name");
let placeLinkField = document.querySelector("#edit-place-link");
const avatarPopupOpenElement = document.querySelector(".profile__info_avatar");
const avatarPopup = document.querySelector("#change-avatar");
const avatarPopupCloseButton = document.querySelector("#avatar-popup-close-button");
const saveAvatarButton = document.querySelector("#save-avatar-button");
const avatarInput = document.querySelector("#input-avatar-link");
let userNameField = document.querySelector("#edit-user-name");
let userAboutField = document.querySelector("#edit-user-about");
let profileUserName = document.querySelector("#profile-user-name");
let profileUserAbout = document.querySelector("#profile-user-about");
let profileUserAvatar = document.querySelector("#profile-user-avatar");
const fullScreenPicturePopup = document.querySelector("#full-screen-picture-popup");
const overlayHeader = document.querySelector(".full-screen-picture-header");
const confirmDeletePicturePopup = document.querySelector("#confirm-delete-picture-popup");
const confirmDeletePictureButton = document.querySelector("#confirm-delete-picture-button");
const closePopupConfirmDeletePictureButton = document.querySelector("#confirm-delete-pictures-popup-close-button");

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

},{}],"5SvFU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ---- УПРАВЛЕНИЕ ПОПАПОМ ----
//
// Открытие попапа
parcelHelpers.export(exports, "openPopup", ()=>openPopup);
// Закрытие попапа
parcelHelpers.export(exports, "closePopup", ()=>closePopup);
// Закрыть попап кликом на оверлей
parcelHelpers.export(exports, "closePopupOnClick", ()=>closePopupOnClick);
// Закрыть попап клавишей ESC
parcelHelpers.export(exports, "closePopupOnEsc", ()=>closePopupOnEsc);
// ---- УПРАВЛЕНИЕ ОТОБРАЖЕНИЯ ТЕКСТА ----
//
// Установление значений имени и описания в поля ввода попапа профиля
parcelHelpers.export(exports, "getProfileInfo", ()=>getProfileInfo);
// Отображение данных профиля на странице и установление значений в поля ввода
parcelHelpers.export(exports, "saveProfileInfo", ()=>saveProfileInfo);
// Очистка полей ввода места (Назвние места и ссылка)
parcelHelpers.export(exports, "placeFieldsClear", ()=>placeFieldsClear);
// Сохранение данных и закрытие попапа при нажатии на Enter
parcelHelpers.export(exports, "saveFormInfoOnEnter", ()=>saveFormInfoOnEnter);
// Открытие попапа с картинкой
parcelHelpers.export(exports, "popupOverlay", ()=>popupOverlay);
// Сохранить и закрыть попап с аватаром
parcelHelpers.export(exports, "uploadAvatar", ()=>uploadAvatar);
// Изменение текста кнопки во время сохранения
parcelHelpers.export(exports, "savingButtonText", ()=>savingButtonText);
// Возврат текста кнопки после сохранения
parcelHelpers.export(exports, "savedButtonText", ()=>savedButtonText);
var _validateJs = require("./validate.js");
var _constantsJs = require("./constants.js");
function openPopup(button) {
    button.classList.add((0, _constantsJs.popupOpened)); // добавить класс открытого попапа
    button.classList.remove((0, _constantsJs.popupClosed)); // удалить класс закрытого попапа
}
function closePopup(button) {
    button.classList.remove((0, _constantsJs.popupOpened)); // удалить класса открытого попапа
    button.classList.add((0, _constantsJs.popupClosed)); // добавить класса закрытого попапа
    getProfileInfo(); // установить актуальные данные в поля ввода профиля
    placeFieldsClear(); // очистка полей места в попапе загрузки места
    (0, _validateJs.placeValidInfoClear)(); // очистка информации об ошибке
}
function closePopupOnClick(popup) {
    popup.forEach((item)=>{
        item.addEventListener("mousedown", function(evt) {
            if (evt.target.classList.contains("popup") && evt.button === 0) closePopup(this.closest(".popup"));
        });
    });
}
function closePopupOnEsc(popup) {
    document.addEventListener("keyup", function(evt) {
        popup.forEach((item)=>{
            if (!item.classList.contains("popup_closed") && evt.key === "Escape") closePopup(item);
        });
    });
}
function getProfileInfo() {
    (0, _constantsJs.userNameField).value = (0, _constantsJs.profileUserName).textContent.trim(); // установить значение имени
    (0, _constantsJs.userAboutField).value = (0, _constantsJs.profileUserAbout).textContent.trim(); // установить значение описания
}
function saveProfileInfo() {
    (0, _constantsJs.profileUserName).textContent = (0, _constantsJs.userNameField).value.trim(); // установить значение имени
    (0, _constantsJs.profileUserAbout).textContent = (0, _constantsJs.userAboutField).value.trim(); // установить значение описания
    getProfileInfo(); // установить значения в инпуты
}
function placeFieldsClear() {
    (0, _constantsJs.placeNameField).value = "";
    (0, _constantsJs.placeLinkField).value = "";
}
function saveFormInfoOnEnter() {
    (0, _constantsJs.input).forEach((item)=>{
        item.addEventListener("keyup", function(evt) {
            if (evt.code === "Enter" && evt.target.matches(evt.target.button)) {
                saveProfileInfo(); // сохранение профиля
                closePopup(this.closest(".popup")); // закрытие попапа
            }
            if (evt.code === "Enter" && evt.target.matches(".place-input") && evt.target.button) {
                saveAddedPicture(); // сохранение места
                closePopup(this.closest(".popup")); // закрытие попапа
            }
        });
    });
}
function popupOverlay() {
    const pictures = document.querySelectorAll(".elements__element_pic");
    pictures.forEach((picture)=>{
        picture.addEventListener("click", function(evt) {
            (0, _constantsJs.fullScreenPicturePopup).querySelector(".full-screen-picture").src = evt.target.src;
            (0, _constantsJs.overlayHeader).textContent = evt.target.closest(".elements__element").querySelector(".elements__element_header").textContent;
            openPopup((0, _constantsJs.fullScreenPicturePopup));
        });
    });
}
function uploadAvatar() {
    (0, _constantsJs.profileUserAvatar).src = (0, _constantsJs.avatarInput).value; // установить ссылку из инпута в html документ
}
function savingButtonText(button) {
    button.textContent = "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...";
}
function savedButtonText(button) {
    button.textContent = "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C";
}

},{"./validate.js":"gzfE1","./constants.js":"hxn1V","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gzfE1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Перебор форм
parcelHelpers.export(exports, "enableValidation", ()=>enableValidation);
// Валидация кнопки Отправить
parcelHelpers.export(exports, "submitButtonValidation", ()=>submitButtonValidation);
// Очистка уведомлений валидации
parcelHelpers.export(exports, "placeValidInfoClear", ()=>placeValidInfoClear);
var _constantsJs = require("./constants.js");
// Вывод сообщения об ошибке ввода под инпутом
const showInputError = (inputName)=>{
    inputName.classList.add("popup__container_field-error_visible");
};
// Скрытие сообщения об ошибке ввода
const hideInputError = (inputName)=>{
    inputName.classList.remove("popup__container_field-error_visible");
};
// Вывод/скрытие сообщения об ошибке в зависимости от валидности
function isValid(inputElement) {
    const errorMessage = inputElement.nextElementSibling;
    if (inputElement.validity.valid) hideInputError(errorMessage); // скрыть сообщение об ошибке
    else {
        errorMessage.textContent = inputElement.validationMessage;
        showInputError(errorMessage); // показать сообщение об ошибке
    }
}
// Проверки валидности инпутов
function hasInvalidInput(inputList) {
    return inputList.some((inputElement)=>{
        return !inputElement.validity.valid;
    });
}
// Переключение состояния кнопки сохранения
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) buttonElement.disabled = true;
    else if (buttonElement === null) buttonElement = false; // Обход ошибки из-за того, что buttonElement не определен (null)
    else buttonElement.disabled = false;
}
// Перебора всех инпутов
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".popup__container_fields"));
    const buttonElement = formElement.querySelector(".popup__container_save-button");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement)=>{
        inputElement.addEventListener("input", (inputElement)=>{
            const inputElementTarget = inputElement.target;
            isValid(inputElementTarget);
            toggleButtonState(inputList, buttonElement);
        });
    });
}
function enableValidation() {
    const formList = Array.from(document.querySelectorAll(".popup__container"));
    formList.forEach((formElement)=>{
        setEventListeners(formElement);
    });
}
function submitButtonValidation(button) {
    button.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        (0, _constantsJs.editProfileForm).reset();
    });
    button.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        addPlaceForm.reset();
    });
}
function placeValidInfoClear() {
    document.querySelectorAll(".popup__container_field-error_visible").forEach((span)=>{
        span.classList.remove("popup__container_field-error_visible");
    });
}

},{"./constants.js":"hxn1V","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7cNeQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//
//
// Добавление места в документ HTML (принимает id карточки и состояние лайка)
parcelHelpers.export(exports, "addPlacesInHtml", ()=>addPlacesInHtml);
// Добавление места в массив initialCards (принимает имя, ссылку на картинку, владельца, id карточки и количество лайков)
parcelHelpers.export(exports, "addPlaceInArray", ()=>addPlaceInArray);
// Установление/снятие лайка
parcelHelpers.export(exports, "addLike", ()=>addLike);
// Удаление карточки места из HTML и массива
parcelHelpers.export(exports, "deletePlaceCard", ()=>deletePlaceCard);
// Удалить карточки
parcelHelpers.export(exports, "deletePictureButton", ()=>deletePictureButton);
var _apiJs = require("./api.js");
var _constantsJs = require("./constants.js");
var _modalJs = require("./modal.js");
function addPlacesInHtml(card_id, likeState) {
    const element = (0, _constantsJs.initialCards)[(0, _constantsJs.initialCards).length - 1]; // присвоить элементу индекс последнего элемента
    const placeElement = (0, _constantsJs.placeTemplate).querySelector(".elements__element").cloneNode(true); // клонировать шаблон карточки
    placeElement.querySelector(".elements__element_pic").src = element.link; // установить шаблону ссылку на изображение
    placeElement.querySelector(".elements__element_header").textContent = element.name; // установить шаблону название места
    placeElement.querySelector(".elements__element_like-counter").textContent = element.likes; // установить шаблону количество лайков
    placeElement.querySelector(".elements__element_pic").setAttribute("alt", element.name); // установить alt изображению в шаблоне карточки
    if (likeState) placeElement.querySelector(".elements__element_like-img").classList.add("elements__element_like-img_active");
     // установить лайку активное состояние если есть активные лайки
    placeElement.querySelector(".elements__element_pic").setAttribute("dataId", card_id); // установить изображению в шаблоне id карточки
    (0, _constantsJs.places).prepend(placeElement); // добавить карточку в начало секции с карточками мест
    // Кнопка удаления места
    const deletePictureButton = document.querySelector(".elements__element_pic_remove-button");
    // Cкрыть с чужих картинок кнопоки удаления
    if (!element.userIsOwner) deletePictureButton.classList.add("disable_btn");
}
function addPlaceInArray(name, link, owner, cardId, likes) {
    let initialCard = {}; // объявление массива
    initialCard.name = name; // имя
    initialCard.link = link; // ссылка на картинку
    initialCard.userIsOwner = owner; // владельец
    initialCard.id = cardId; // id карточки
    initialCard.likes = likes.length; // количество лайков
    (0, _constantsJs.initialCards).push(initialCard); // добавление в конец массива
}
function addLike() {
    const likeButton = document.querySelector(".elements__element_like-img");
    likeButton.addEventListener("click", function(evt) {
        const cardId = likeButton.closest(".elements__element").querySelector(".elements__element_pic").getAttribute("dataId");
        const eventTarget = evt.target;
        if (!eventTarget.classList.contains("elements__element_like-img_active")) // Установка лайка месту на сервере
        (async function() {
            try {
                const likeCount = await (0, _apiJs.addLikeServerCard)(cardId);
                eventTarget.closest(".elements__element").querySelector(".elements__element_like-counter").textContent = likeCount.likes.length;
            } catch (err) {
                console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
            }
        })();
        else // Удалить лайк места на сервере
        (async function() {
            try {
                const likeCount = await (0, _apiJs.deleteLikeServerCard)(cardId);
                eventTarget.closest(".elements__element").querySelector(".elements__element_like-counter").textContent = likeCount.likes.length;
            } catch (err) {
                console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
            }
        })();
        evt.target.classList.toggle("elements__element_like-img_active");
    });
}
function deletePlaceCard(item) {
    const place = item.target.closest(".elements__element");
    place.remove(); // удалить место из html
    removePlaceFromArray(place, (0, _constantsJs.initialCards)); // удалить место из массива
}
// Удаление элемента из массива
function removePlaceFromArray(place, initialCards) {
    const placeId = place.closest(".elements__element").querySelector(".elements__element_pic"); // определение ближайшего изображения
    let arrayIndex;
    initialCards.findIndex((item, index)=>{
        const id = item.id === placeId.getAttribute("dataId");
        if (!id) return;
        if (id) {
            arrayIndex = index;
            // Удалить карточку с сервера
            (async function() {
                try {
                    await (0, _apiJs.deleteServerCard)(item.name, item.link, item.id);
                } catch (err) {
                    console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
                }
            })();
        }
    });
    initialCards.splice(arrayIndex, 1);
}
// Переменная для хранения кнопок "удалить место"
let deletePictureButtons;
function deletePictureButton() {
    // Запись кнопок в переменную
    deletePictureButtons = document.querySelectorAll(".elements__element_pic_remove-button");
    // Открытие попапа подтверждения удаления и подтверждения удаления нажатием на кнопку
    deletePictureButtons.forEach((button)=>{
        button.addEventListener("click", (evt)=>{
            const targetDeletePictureButton = evt; // записать в переменную нажатую кнопку
            (0, _modalJs.openPopup)((0, _constantsJs.confirmDeletePicturePopup)); // открыть попап подтверждения удаления
            (0, _constantsJs.confirmDeletePictureButton).addEventListener("click", (evt)=>{
                evt.preventDefault();
                (async function() {
                    try {
                        await deletePlaceCard(targetDeletePictureButton); // удалить карточку с сервера
                    } catch (err) {
                        console.error(`\u{427}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}: ${err}`);
                    }
                })();
                (0, _modalJs.closePopup)((0, _constantsJs.confirmDeletePicturePopup)); // закрыть попап подтверждения удаления
            }); // обработчик кнопки подтверждения удаления ("Да")
        }); // обработчик кнопки удаления карточки ("Корзиночки")
    }); // установка слушателя на кнопки удаления карточек
}
// Закрыть попап подтверждения удаления нажатием на кнопку закрытия попапа
(0, _constantsJs.closePopupConfirmDeletePictureButton).addEventListener("click", (evt)=>{
    evt.preventDefault();
    (0, _modalJs.closePopup)((0, _constantsJs.confirmDeletePicturePopup)); // закрыть попап подтверждения удаления
}); // обработчик кнопки закрытия попапа подтверждения удаления карточки

},{"./api.js":"d69Et","./constants.js":"hxn1V","./modal.js":"5SvFU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d69Et":[function(require,module,exports,__globalThis) {
// Конфигурация сервера
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Получение данных профиля пользователя с сервера
parcelHelpers.export(exports, "getServerProfile", ()=>getServerProfile);
// Получение карточек мест с сервера
parcelHelpers.export(exports, "getServerCards", ()=>getServerCards);
// Изменение данных профиля на сервере
parcelHelpers.export(exports, "setServerProfile", ()=>setServerProfile);
// Добавление карточки на сервер
parcelHelpers.export(exports, "addServerCard", ()=>addServerCard);
// Удаление карточки
parcelHelpers.export(exports, "deleteServerCard", ()=>deleteServerCard);
// Добавление лайка к карточке
parcelHelpers.export(exports, "addLikeServerCard", ()=>addLikeServerCard);
// Удаление лайка к карточке
parcelHelpers.export(exports, "deleteLikeServerCard", ()=>deleteLikeServerCard);
// Замена аватара на сервере
parcelHelpers.export(exports, "setServerAvatar", ()=>setServerAvatar);
const config = {
    baseUrl: "./backend.js",
    headers: {
        authorization: "14b58559-029e-496e-9a10-e787d4f1cf4c",
        "Content-Type": "application/json"
    }
};
async function getServerProfile() {
    return fetch(config.baseUrl + "/users/me", {
        method: "GET",
        headers: config.headers
    }).then((res)=>{
        if (res.ok) return res.json();
        return Promise.reject(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{437}\u{430}\u{433}\u{440}\u{443}\u{437}\u{438}\u{442}\u{44C} \u{434}\u{430}\u{43D}\u{43D}\u{44B}\u{435} \u{43F}\u{440}\u{43E}\u{444}\u{438}\u{43B}\u{44F}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`);
    });
}
async function getServerCards() {
    return fetch(config.baseUrl + "/cards", {
        method: "GET",
        headers: config.headers
    }).then((res)=>{
        if (res.ok) return res.json();
        return Promise.reject(console.error(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{437}\u{430}\u{433}\u{440}\u{443}\u{437}\u{438}\u{442}\u{44C} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{438}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`));
    });
}
async function setServerProfile(name, about) {
    return fetch(config.baseUrl + "/users/me", {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    }).then((res)=>{
        if (res.ok) return res.json();
        return Promise.reject(console.error(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{43E}\u{431}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{44C} \u{434}\u{430}\u{43D}\u{43D}\u{44B}\u{435} \u{43F}\u{440}\u{43E}\u{444}\u{438}\u{43B}\u{44F}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`));
    });
}
async function addServerCard(name, link) {
    return fetch(config.baseUrl + "/cards", {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    }).then((res)=>{
        if (res.ok) return res.json();
        return Promise.reject(console.error(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{437}\u{430}\u{433}\u{440}\u{443}\u{437}\u{438}\u{442}\u{44C} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{443}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`));
    });
}
async function deleteServerCard(name, link, card_id) {
    return fetch(config.baseUrl + `/cards/${card_id}`, {
        method: "DELETE",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    }).then((res)=>{
        if (res.ok) return res.json();
        return Promise.reject(console.error(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{443}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`));
    });
}
async function addLikeServerCard(card_id) {
    return fetch(config.baseUrl + `/cards/likes/${card_id}`, {
        method: "PUT",
        headers: config.headers
    }).then((res)=>{
        if (res.ok) return res.json();
        return Promise.reject(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{43F}\u{43E}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43B}\u{430}\u{439}\u{43A}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`);
    });
}
async function deleteLikeServerCard(card_id) {
    return fetch(config.baseUrl + `/cards/likes/${card_id}`, {
        method: "DELETE",
        headers: config.headers
    }).then((res)=>{
        if (res.ok) return res.json(); // Возвращаем данные
        return Promise.reject(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{443}\u{431}\u{440}\u{430}\u{442}\u{44C} \u{43B}\u{430}\u{439}\u{43A}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`);
    });
}
async function setServerAvatar(link) {
    return fetch(config.baseUrl + "/users/me/avatar", {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar: link
        })
    }).then((res)=>{
        if (res.ok) return res.json();
        return Promise.reject(console.error(`\u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{43E}\u{431}\u{43D}\u{43E}\u{432}\u{438}\u{442} \u{430}\u{432}\u{430}\u{442}\u{430}\u{440}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${res.status}. ${res.statusText}`));
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["hYSXo","2Wtak"], "2Wtak", "parcelRequirebbb8", {})

//# sourceMappingURL=mesto_project.945ddfa4.js.map
