"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var compilerDom = require("@vue/compiler-dom"),
  runtimeDom = require("@vue/runtime-dom"),
  shared = require("@vue/shared");
function _interopNamespace(t) {
  if (t && t.__esModule) return t;
  var o = Object.create(null);
  return (
    t &&
      Object.keys(t).forEach(function (e) {
        o[e] = t[e];
      }),
    (o.default = t),
    Object.freeze(o)
  );
}
var runtimeDom__namespace = _interopNamespace(runtimeDom);
const compileCache = Object.create(null);
function compileToFunction(o, e) {
  if (!shared.isString(o)) {
    if (!o.nodeType)
      return runtimeDom.warn("invalid template option: ", o), shared.NOOP;
    o = o.innerHTML;
  }
  var t = o,
    r = compileCache[t];
  if (r) return r;
  "#" === o[0] &&
    ((r = document.querySelector(o)) ||
      runtimeDom.warn("Template element not found or is empty: " + o),
    (o = r ? r.innerHTML : ""));
  const n = shared.extend(
    { hoistStatic: !0, onError: i, onWarn: (e) => i(e, !0) },
    e
  );
  n.isCustomElement ||
    "undefined" == typeof customElements ||
    (n.isCustomElement = (e) => !!customElements.get(e));
  r = compilerDom.compile(o, n).code;
  function i(e, t = !1) {
    (t = t ? e.message : "Template compilation error: " + e.message),
      (e =
        e.loc &&
        shared.generateCodeFrame(o, e.loc.start.offset, e.loc.end.offset));
    runtimeDom.warn(
      e
        ? t +
            `
` +
            e
        : t
    );
  }
  const m = new Function("Vue", r)(runtimeDom__namespace);
  return (m._rc = !0), (compileCache[t] = m);
}
runtimeDom.registerRuntimeCompiler(compileToFunction),
  Object.keys(runtimeDom).forEach(function (e) {
    "default" !== e && (exports[e] = runtimeDom[e]);
  }),
  (exports.compile = compileToFunction);
