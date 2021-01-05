/*! For license information please see index.701723c2.js.LICENSE.txt */
(function () {
    var __webpack_modules__ = {
        567: function (e, t, n) {
            "use strict";
            n.d(t, {
                R3: function () {
                    return s
                }, VR: function () {
                    return c
                }, KS: function () {
                    return l
                }, an: function () {
                    return u
                }, U2: function () {
                    return d
                }, X2: function () {
                    return p
                }, Zz: function () {
                    return m
                }, QD: function () {
                    return f
                }, ET: function () {
                    return h
                }, gp: function () {
                    return g
                }, yU: function () {
                    return _
                }, g4: function () {
                    return v
                }, A1: function () {
                    return w
                }, sc: function () {
                    return b
                }, VV: function () {
                    return y
                }, tI: function () {
                    return x
                }, z2: function () {
                    return k
                }, LS: function () {
                    return S
                }, Q_: function () {
                    return E
                }, Ak: function () {
                    return C
                }, gQ: function () {
                    return O
                }, A7: function () {
                    return T
                }, VK: function () {
                    return Z
                }
            });
            var i = n(183), o = n.n(i), a = n(50), r = n(685), s = function (e) {
                return (0, a.j0)((0, r.K)("/users/{user_id}/followers", e))
            }, c = function (e) {
                return (0, a.Jl)((0, r.K)("/users/{user_id}/followers", e))
            }, l = function () {
                return (0, a.Jl)((0, r.K)("/user/avatar", {}))
            }, u = function () {
                return (0, a.Jl)((0, r.K)("/user/cover", {}))
            }, d = function (e) {
                return (0, a.A_)((0, r.K)("/users/{user_id}", e, ["include"]))
            }, p = function (e) {
                return (0, a.A_)((0, r.K)("/users/{user_id}/answers", e, ["page", "per_page", "order", "include"]))
            }, m = function (e) {
                return (0, a.A_)((0, r.K)("/users/{user_id}/articles", e, ["page", "per_page", "order", "include"]))
            }, f = function (e) {
                return (0, a.A_)((0, r.K)("/users/{user_id}/followees", e, ["page", "per_page", "include"]))
            }, h = function (e) {
                return (0, a.A_)((0, r.K)("/users/{user_id}/followers", e, ["page", "per_page", "include"]))
            }, g = function (e) {
                return void 0 === e && (e = {}), (0, a.A_)((0, r.K)("/users", e, ["page", "per_page", "order", "include", "user_id", "username", "email", "disabled"]))
            }, _ = function (e) {
                return void 0 === e && (e = {}), (0, a.A_)((0, r.K)("/user/followees", e, ["page", "per_page", "include"]))
            }, v = function (e) {
                return void 0 === e && (e = {}), (0, a.A_)((0, r.K)("/user/followers", e, ["page", "per_page", "include"]))
            }, w = function (e) {
                return void 0 === e && (e = {}), (0, a.A_)((0, r.K)("/user/following_articles", e, ["page", "per_page", "include"]))
            }, b = function (e) {
                return void 0 === e && (e = {}), (0, a.A_)((0, r.K)("/user/following_questions", e, ["page", "per_page", "include"]))
            }, y = function (e) {
                return void 0 === e && (e = {}), (0, a.A_)((0, r.K)("/user/following_topics", e, ["page", "per_page", "include"]))
            }, x = function (e) {
                return (0, a.A_)((0, r.K)("/users/{user_id}/questions", e, ["page", "per_page", "order", "include"]))
            }, k = function (e) {
                return e.password && (e.password = o()(e.password)), (0, a.j0)((0, r.K)("/users", e, ["include"]), (0, r.o)(e, ["email", "email_code", "username", "password"]))
            }, S = function (e) {
                return (0, a.j0)((0, r.K)("/user/password/email", e), (0, r.o)(e, ["email", "captcha_token", "captcha_code"]))
            }, E = function (e) {
                return (0, a.j0)((0, r.K)("/user/register/email", e), (0, r.o)(e, ["email", "captcha_token", "captcha_code"]))
            }, C = function (e) {
                return (0, a.Ll)((0, r.K)("/user", e, ["include"]), (0, r.o)(e, ["headline", "bio", "blog", "company", "location"]))
            }, O = function (e) {
                return e.password && (e.password = o()(e.password)), (0, a.GH)((0, r.K)("/user/password", e), (0, r.o)(e, ["email", "email_code", "password"]))
            }, T = function (e) {
                var t = new FormData;
                return t.append("avatar", e.avatar), (0, a.j0)((0, r.K)("/user/avatar"), t)
            }, Z = function (e) {
                var t = new FormData;
                return t.append("cover", e.cover), (0, a.j0)((0, r.K)("/user/cover"), t)
            }
        }, 655: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return i
                }
            });
            const i = {apiPath: "/api", methodOverride: !1, timeout: 3e4}
        }, 50: function (e, t, n) {
            "use strict";
            n.d(t, {
                A_: function () {
                    return s
                }, j0: function () {
                    return c
                }, Ll: function () {
                    return l
                }, GH: function () {
                    return u
                }, Jl: function () {
                    return d
                }
            });
            var i = n(655), o = n(213), a = n(125);
            if ((0, o.o8)(i.Z.adapter)) throw new Error("adapter must be set. e.g. new BrowserAdapter() or new MiniProgramAdapter()");
            var r = function (e, t, n) {
                var o = {}, r = "X-Http-Method-Override";
                i.Z.methodOverride && (e !== a.Q0 && e !== a.uO || (o[r] = e, e = a.a4), e === a.yY && (o[r] = e, e = a.HT));
                var s = ["application/json"];
                return "undefined" != typeof document && [].map && 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") && s.push("image/webp"), o.Accept = s.join(", "), i.Z.adapter.request({
                    method: e,
                    url: t,
                    data: n,
                    headers: o
                })
            }, s = function (e, t) {
                return r(a.HT, e, t)
            }, c = function (e, t) {
                return r(a.a4, e, t)
            }, l = function (e, t) {
                return r(a.Q0, e, t)
            }, u = function (e, t) {
                return r(a.uO, e, t)
            }, d = function (e, t) {
                return r(a.yY, e, t)
            }
        }, 685: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return o
                }, o: function () {
                    return a
                }
            });
            var i = n(616);

            function o(e, t, n) {
                void 0 === t && (t = {}), void 0 === n && (n = []);
                var o = e.replace(/({.*?})/g, (function (e) {
                    var n = e.substr(1, e.length - 2);
                    if (null == t[n]) throw new Error("Missing required parameter " + n);
                    return String(t[n])
                })), a = {};
                n.forEach((function (e) {
                    null != t[e] && (a[e] = String(t[e]))
                }));
                var r = (0, i.Z)(a);
                return r ? o + "?" + r : o
            }

            function a(e, t) {
                var n = {};
                return t.forEach((function (t) {
                    null != e[t] && (n[t] = e[t])
                })), n
            }
        }, 125: function (e, t, n) {
            "use strict";
            n.d(t, {
                HT: function () {
                    return i
                }, a4: function () {
                    return o
                }, uO: function () {
                    return a
                }, Q0: function () {
                    return r
                }, yY: function () {
                    return s
                }
            });
            var i = "GET", o = "POST", a = "PUT", r = "PATCH", s = "DELETE"
        }, 41: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return r
                }
            });
            var i = n(66), o = n(666), a = n(213);
            const r = function () {
                var e = function (t) {
                    if (!t) return new o.JQ;
                    if (t instanceof o.JQ) return t;
                    if ((0, a.mf)(t)) return /complete|loaded|interactive/.test(document.readyState) && document.body ? t.call(document, e) : document.addEventListener("DOMContentLoaded", (function () {
                        return t.call(document, e)
                    }), !1), new o.JQ([document]);
                    if ((0, a.HD)(t)) {
                        var n = t.trim();
                        if ("<" === n[0] && ">" === n[n.length - 1]) {
                            var r = "div";
                            return (0, i.Z)({
                                li: "ul",
                                tr: "tbody",
                                td: "tr",
                                th: "tr",
                                tbody: "table",
                                option: "select"
                            }, (function (e, t) {
                                if (0 === n.indexOf("<" + e)) return r = t, !1
                            })), new o.JQ((0, a.q8)(n, r))
                        }
                        if (!("#" === t[0] && !t.match(/[ .<>:~]/))) return new o.JQ(document.querySelectorAll(t));
                        var s = document.getElementById(t.slice(1));
                        return s ? new o.JQ([s]) : new o.JQ
                    }
                    return (0, a.zG)(t) && !(0, a.UG)(t) ? new o.JQ(t) : new o.JQ([t])
                };
                return e.fn = o.JQ.prototype, e
            }()
        }, 666: function (e, t, n) {
            "use strict";
            n.d(t, {
                JQ: function () {
                    return o
                }
            });
            var i = n(66), o = function (e) {
                var t = this;
                return this.length = 0, e ? ((0, i.Z)(e, (function (e, n) {
                    t[e] = n
                })), this.length = e.length, this) : this
            }
        }, 66: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            var i = n(213);
            const o = function (e, t) {
                if ((0, i.zG)(e)) {
                    for (var n = 0; n < e.length; n += 1) if (!1 === t.call(e[n], n, e[n])) return e
                } else for (var o = Object.keys(e), a = 0; a < o.length; a += 1) if (!1 === t.call(e[o[a]], o[a], e[o[a]])) return e;
                return e
            }
        }, 616: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return a
                }
            });
            var i = n(213), o = n(66);
            const a = function (e) {
                if (!(0, i.yD)(e) && !Array.isArray(e)) return "";
                var t = [];

                function n(e, a) {
                    var r;
                    (0, i.yD)(a) ? (0, o.Z)(a, (function (t, o) {
                        r = Array.isArray(a) && !(0, i.yD)(o) ? "" : t, n(e + "[" + r + "]", o)
                    })) : (r = null == a || "" === a ? "=" : "=" + encodeURIComponent(a), t.push(encodeURIComponent(e) + r))
                }

                return Array.isArray(e) ? (0, o.Z)(e, (function () {
                    n(this.name, this.value)
                })) : (0, o.Z)(e, n), t.join("&")
            }
        }, 213: function (e, t, n) {
            "use strict";

            function i(e) {
                return "function" == typeof e
            }

            function o(e) {
                return "string" == typeof e
            }

            function a(e) {
                return "number" == typeof e
            }

            function r(e) {
                return "boolean" == typeof e
            }

            function s(e) {
                return void 0 === e
            }

            function c(e) {
                return null === e
            }

            function l(e) {
                return e instanceof Window
            }

            function u(e) {
                return e instanceof Document
            }

            function d(e) {
                return e instanceof Element
            }

            function p(e) {
                return e instanceof Node
            }

            function m() {
                return !!window.document.documentMode
            }

            function f(e) {
                return !i(e) && !l(e) && a(e.length)
            }

            function h(e) {
                return "object" == typeof e && null !== e
            }

            function g(e) {
                return u(e) ? e.documentElement : e
            }

            function _(e) {
                return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, (function (e, t) {
                    return t.toUpperCase()
                }))
            }

            function v(e) {
                return e.replace(/[A-Z]/g, (function (e) {
                    return "-" + e.toLowerCase()
                }))
            }

            function w(e, t) {
                return window.getComputedStyle(e).getPropertyValue(v(t))
            }

            function b(e) {
                return "border-box" === w(e, "box-sizing")
            }

            function y(e, t, n) {
                var i = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"];
                return [0, 1].reduce((function (t, o, a) {
                    var r = n + i[a];
                    return "border" === n && (r += "Width"), t + parseFloat(w(e, r) || "0")
                }), 0)
            }

            function x(e, t) {
                if ("width" === t || "height" === t) {
                    var n = e.getBoundingClientRect()[t];
                    return b(e) ? n + "px" : n - y(e, t, "border") - y(e, t, "padding") + "px"
                }
                return w(e, t)
            }

            function k(e, t) {
                var n = document.createElement(t);
                return n.innerHTML = e, [].slice.call(n.childNodes)
            }

            function S() {
                return !1
            }

            n.d(t, {
                zG: function () {
                    return f
                }, yD: function () {
                    return h
                }, mf: function () {
                    return i
                }, HD: function () {
                    return o
                }, hj: function () {
                    return a
                }, jn: function () {
                    return r
                }, o8: function () {
                    return s
                }, Ft: function () {
                    return c
                }, FJ: function () {
                    return l
                }, qk: function () {
                    return u
                }, kK: function () {
                    return d
                }, UG: function () {
                    return p
                }, w1: function () {
                    return m
                }, Nj: function () {
                    return g
                }, zW: function () {
                    return _
                }, mA: function () {
                    return v
                }, B7: function () {
                    return w
                }, _s: function () {
                    return b
                }, MO: function () {
                    return y
                }, C2: function () {
                    return x
                }, q8: function () {
                    return k
                }, ar: function () {
                    return S
                }, hA: function () {
                    return E
                }
            });
            var E = ["animationIterationCount", "columnCount", "fillOpacity", "flexGrow", "flexShrink", "fontWeight", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineHeight", "opacity", "order", "orphans", "widows", "zIndex", "zoom"]
        }, 671: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            var i = n(41);
            setTimeout((function () {
                return (0, i.Z)("body").addClass("mdui-loaded")
            }));
            const o = {$: i.Z}
        }, 381: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Z: function () {
                    return __WEBPACK_DEFAULT_EXPORT__
                }
            });
            var mdui_jq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41),
                mdui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(671),
                mdclub_sdk_js_es_UserApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567),
                _utils_func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(505),
                _utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(822);
            const __WEBPACK_DEFAULT_EXPORT__ = {
                onUserPopoverCreate: function (e) {
                    var t = e.element, n = e.dataName, i = e.primaryKey;
                    void 0 === i && (i = null);
                    var o = e.primaryValue;
                    return void 0 === o && (o = null), function (e, a) {
                        var r, s = (0, mdui_jq__WEBPACK_IMPORTED_MODULE_0__.Z)(t), c = s.find(".user-popover-trigger"),
                            l = s.find(".popover"), u = new mdui__WEBPACK_IMPORTED_MODULE_1__.Z.Menu(c, l);
                        c.on("mouseenter", (function () {
                            r = setTimeout((function () {
                                u.open(), a.loadUserForUserPopover({dataName: n, primaryKey: i, primaryValue: o})
                            }), 500)
                        })).on("mouseleave", (function () {
                            clearTimeout(r), r = null
                        })), l.on("mouseleave", (function () {
                            r && (clearTimeout(r), r = null), u.close()
                        }))
                    }
                }, loadUserForUserPopover: function (ref) {
                    var dataName = ref.dataName, primaryKey = ref.primaryKey, primaryValue = ref.primaryValue;
                    return function (state, actions) {
                        var data = eval("state." + dataName), index, item;
                        primaryKey && (index = (0, _utils_func__WEBPACK_IMPORTED_MODULE_3__.c)(data, primaryKey, primaryValue), item = data[index]);
                        var user_id = primaryKey ? item.relationships.user.user_id : data.relationships.user.user_id;
                        (0, mdclub_sdk_js_es_UserApi__WEBPACK_IMPORTED_MODULE_2__.U2)({
                            user_id,
                            include: ["is_followed", "is_following", "is_me"]
                        }).then((function (e) {
                            var t;
                            primaryKey ? data[index].relationships.user = e.data : data.relationships.user = e.data, actions.setState(((t = {})[dataName] = data, t))
                        })).catch(_utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__.Z)
                    }
                }
            }
        }, 822: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            var i = n(671);

            function o(e) {
                var t;
                t = 999999 === e.code ? "网络错误" : e.message ? e.message : "未知错误", i.Z.snackbar(t)
            }
        }, 505: function (e, t, n) {
            "use strict";
            n.d(t, {
                c: function () {
                    return o
                }
            });
            var i = n(66), o = function (e, t, n) {
                var o;
                return (0, i.Z)(e, (function (e, i) {
                    return i[t] !== n || (o = e, !1)
                })), o
            }
        }, 802: function (e) {
            function t(e) {
                Object.freeze(e);
                var n = "function" == typeof e;
                return Object.getOwnPropertyNames(e).forEach((function (i) {
                    !Object.hasOwnProperty.call(e, i) || null === e[i] || "object" != typeof e[i] && "function" != typeof e[i] || n && ("caller" === i || "callee" === i || "arguments" === i) || Object.isFrozen(e[i]) || t(e[i])
                })), e
            }

            class n {
                constructor(e) {
                    void 0 === e.data && (e.data = {}), this.data = e.data
                }

                ignoreMatch() {
                    this.ignore = !0
                }
            }

            function i(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
            }

            function o(e, ...t) {
                var n = {};
                for (const t in e) n[t] = e[t];
                return t.forEach((function (e) {
                    for (const t in e) n[t] = e[t]
                })), n
            }

            function a(e) {
                return e.nodeName.toLowerCase()
            }

            var r = Object.freeze({
                __proto__: null, escapeHTML: i, inherit: o, nodeStream: function (e) {
                    var t = [];
                    return function e(n, i) {
                        for (var o = n.firstChild; o; o = o.nextSibling) 3 === o.nodeType ? i += o.nodeValue.length : 1 === o.nodeType && (t.push({
                            event: "start",
                            offset: i,
                            node: o
                        }), i = e(o, i), a(o).match(/br|hr|img|input/) || t.push({event: "stop", offset: i, node: o}));
                        return i
                    }(e, 0), t
                }, mergeStreams: function (e, t, n) {
                    var o = 0, r = "", s = [];

                    function c() {
                        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                    }

                    function l(e) {
                        r += "<" + a(e) + [].map.call(e.attributes, (function (e) {
                            return " " + e.nodeName + '="' + i(e.value) + '"'
                        })).join("") + ">"
                    }

                    function u(e) {
                        r += "</" + a(e) + ">"
                    }

                    function d(e) {
                        ("start" === e.event ? l : u)(e.node)
                    }

                    for (; e.length || t.length;) {
                        var p = c();
                        if (r += i(n.substring(o, p[0].offset)), o = p[0].offset, p === e) {
                            s.reverse().forEach(u);
                            do {
                                d(p.splice(0, 1)[0]), p = c()
                            } while (p === e && p.length && p[0].offset === o);
                            s.reverse().forEach(l)
                        } else "start" === p[0].event ? s.push(p[0].node) : s.pop(), d(p.splice(0, 1)[0])
                    }
                    return r + i(n.substr(o))
                }
            });
            const s = e => !!e.kind;

            class c {
                constructor(e, t) {
                    this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
                }

                addText(e) {
                    this.buffer += i(e)
                }

                openNode(e) {
                    if (!s(e)) return;
                    let t = e.kind;
                    e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t)
                }

                closeNode(e) {
                    s(e) && (this.buffer += "</span>")
                }

                value() {
                    return this.buffer
                }

                span(e) {
                    this.buffer += `<span class="${e}">`
                }
            }

            class l {
                constructor() {
                    this.rootNode = {children: []}, this.stack = [this.rootNode]
                }

                get top() {
                    return this.stack[this.stack.length - 1]
                }

                get root() {
                    return this.rootNode
                }

                add(e) {
                    this.top.children.push(e)
                }

                openNode(e) {
                    const t = {kind: e, children: []};
                    this.add(t), this.stack.push(t)
                }

                closeNode() {
                    if (this.stack.length > 1) return this.stack.pop()
                }

                closeAllNodes() {
                    for (; this.closeNode();) ;
                }

                toJSON() {
                    return JSON.stringify(this.rootNode, null, 4)
                }

                walk(e) {
                    return this.constructor._walk(e, this.rootNode)
                }

                static _walk(e, t) {
                    return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t => this._walk(e, t))), e.closeNode(t)), e
                }

                static _collapse(e) {
                    "string" != typeof e && e.children && (e.children.every((e => "string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e => {
                        l._collapse(e)
                    })))
                }
            }

            class u extends l {
                constructor(e) {
                    super(), this.options = e
                }

                addKeyword(e, t) {
                    "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
                }

                addText(e) {
                    "" !== e && this.add(e)
                }

                addSublanguage(e, t) {
                    const n = e.root;
                    n.kind = t, n.sublanguage = !0, this.add(n)
                }

                toHTML() {
                    return new c(this, this.options).value()
                }

                finalize() {
                    return !0
                }
            }

            function d(e) {
                return e ? "string" == typeof e ? e : e.source : null
            }

            const p = "[a-zA-Z]\\w*", m = "[a-zA-Z_]\\w*", f = "\\b\\d+(\\.\\d+)?",
                h = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", g = "\\b(0b[01]+)",
                _ = {begin: "\\\\[\\s\\S]", relevance: 0},
                v = {className: "string", begin: "'", end: "'", illegal: "\\n", contains: [_]},
                w = {className: "string", begin: '"', end: '"', illegal: "\\n", contains: [_]},
                b = {begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},
                y = function (e, t, n = {}) {
                    var i = o({className: "comment", begin: e, end: t, contains: []}, n);
                    return i.contains.push(b), i.contains.push({
                        className: "doctag",
                        begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                        relevance: 0
                    }), i
                }, x = y("//", "$"), k = y("/\\*", "\\*/"), S = y("#", "$"),
                E = {className: "number", begin: f, relevance: 0}, C = {className: "number", begin: h, relevance: 0},
                O = {className: "number", begin: g, relevance: 0}, T = {
                    className: "number",
                    begin: f + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                    relevance: 0
                }, Z = {
                    begin: /(?=\/[^/\n]*\/)/,
                    contains: [{
                        className: "regexp",
                        begin: /\//,
                        end: /\/[gimuy]*/,
                        illegal: /\n/,
                        contains: [_, {begin: /\[/, end: /\]/, relevance: 0, contains: [_]}]
                    }]
                }, I = {className: "title", begin: p, relevance: 0}, N = {className: "title", begin: m, relevance: 0},
                R = {begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0};
            var D = Object.freeze({
                __proto__: null,
                IDENT_RE: p,
                UNDERSCORE_IDENT_RE: m,
                NUMBER_RE: f,
                C_NUMBER_RE: h,
                BINARY_NUMBER_RE: g,
                RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
                SHEBANG: (e = {}) => {
                    const t = /^#![ ]*\//;
                    return e.binary && (e.begin = function (...e) {
                        return e.map((e => d(e))).join("")
                    }(t, /.*\b/, e.binary, /\b.*/)), o({
                        className: "meta",
                        begin: t,
                        end: /$/,
                        relevance: 0,
                        "on:begin": (e, t) => {
                            0 !== e.index && t.ignoreMatch()
                        }
                    }, e)
                },
                BACKSLASH_ESCAPE: _,
                APOS_STRING_MODE: v,
                QUOTE_STRING_MODE: w,
                PHRASAL_WORDS_MODE: b,
                COMMENT: y,
                C_LINE_COMMENT_MODE: x,
                C_BLOCK_COMMENT_MODE: k,
                HASH_COMMENT_MODE: S,
                NUMBER_MODE: E,
                C_NUMBER_MODE: C,
                BINARY_NUMBER_MODE: O,
                CSS_NUMBER_MODE: T,
                REGEXP_MODE: Z,
                TITLE_MODE: I,
                UNDERSCORE_TITLE_MODE: N,
                METHOD_GUARD: R,
                END_SAME_AS_BEGIN: function (e) {
                    return Object.assign(e, {
                        "on:begin": (e, t) => {
                            t.data._beginMatch = e[1]
                        }, "on:end": (e, t) => {
                            t.data._beginMatch !== e[1] && t.ignoreMatch()
                        }
                    })
                }
            }), A = "of and for in not or if then".split(" ");

            function q(e) {
                function t(t, n) {
                    return new RegExp(d(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
                }

                class n {
                    constructor() {
                        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                    }

                    addRule(e, t) {
                        t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += function (e) {
                            return new RegExp(e.toString() + "|").exec("").length - 1
                        }(e) + 1
                    }

                    compile() {
                        0 === this.regexes.length && (this.exec = () => null);
                        const e = this.regexes.map((e => e[1]));
                        this.matcherRe = t(function (e, t = "|") {
                            for (var n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, i = 0, o = "", a = 0; a < e.length; a++) {
                                var r = i += 1, s = d(e[a]);
                                for (a > 0 && (o += t), o += "("; s.length > 0;) {
                                    var c = n.exec(s);
                                    if (null == c) {
                                        o += s;
                                        break
                                    }
                                    o += s.substring(0, c.index), s = s.substring(c.index + c[0].length), "\\" === c[0][0] && c[1] ? o += "\\" + String(Number(c[1]) + r) : (o += c[0], "(" === c[0] && i++)
                                }
                                o += ")"
                            }
                            return o
                        }(e), !0), this.lastIndex = 0
                    }

                    exec(e) {
                        this.matcherRe.lastIndex = this.lastIndex;
                        const t = this.matcherRe.exec(e);
                        if (!t) return null;
                        const n = t.findIndex(((e, t) => t > 0 && void 0 !== e)), i = this.matchIndexes[n];
                        return t.splice(0, n), Object.assign(t, i)
                    }
                }

                class i {
                    constructor() {
                        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                    }

                    getMatcher(e) {
                        if (this.multiRegexes[e]) return this.multiRegexes[e];
                        const t = new n;
                        return this.rules.slice(e).forEach((([e, n]) => t.addRule(e, n))), t.compile(), this.multiRegexes[e] = t, t
                    }

                    resumingScanAtSamePosition() {
                        return 0 !== this.regexIndex
                    }

                    considerAll() {
                        this.regexIndex = 0
                    }

                    addRule(e, t) {
                        this.rules.push([e, t]), "begin" === t.type && this.count++
                    }

                    exec(e) {
                        const t = this.getMatcher(this.regexIndex);
                        t.lastIndex = this.lastIndex;
                        let n = t.exec(e);
                        if (this.resumingScanAtSamePosition()) if (n && n.index === this.lastIndex) ; else {
                            const t = this.getMatcher(0);
                            t.lastIndex = this.lastIndex + 1, n = t.exec(e)
                        }
                        return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n
                    }
                }

                function a(e, t) {
                    const n = e.input[e.index - 1], i = e.input[e.index + e[0].length];
                    "." !== n && "." !== i || t.ignoreMatch()
                }

                if (e.contains && e.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                return function n(r, s) {
                    const c = r;
                    if (r.compiled) return c;
                    r.compiled = !0, r.__beforeBegin = null, r.keywords = r.keywords || r.beginKeywords;
                    let l = null;
                    if ("object" == typeof r.keywords && (l = r.keywords.$pattern, delete r.keywords.$pattern), r.keywords && (r.keywords = function (e, t) {
                        var n = {};
                        "string" == typeof e ? i("keyword", e) : Object.keys(e).forEach((function (t) {
                            i(t, e[t])
                        }));
                        return n;

                        function i(e, i) {
                            t && (i = i.toLowerCase()), i.split(" ").forEach((function (t) {
                                var i = t.split("|");
                                n[i[0]] = [e, L(i[0], i[1])]
                            }))
                        }
                    }(r.keywords, e.case_insensitive)), r.lexemes && l) throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
                    return c.keywordPatternRe = t(r.lexemes || l || /\w+/, !0), s && (r.beginKeywords && (r.begin = "\\b(" + r.beginKeywords.split(" ").join("|") + ")(?=\\b|\\s)", r.__beforeBegin = a), r.begin || (r.begin = /\B|\b/), c.beginRe = t(r.begin), r.endSameAsBegin && (r.end = r.begin), r.end || r.endsWithParent || (r.end = /\B|\b/), r.end && (c.endRe = t(r.end)), c.terminator_end = d(r.end) || "", r.endsWithParent && s.terminator_end && (c.terminator_end += (r.end ? "|" : "") + s.terminator_end)), r.illegal && (c.illegalRe = t(r.illegal)), void 0 === r.relevance && (r.relevance = 1), r.contains || (r.contains = []), r.contains = [].concat(...r.contains.map((function (e) {
                        return function (e) {
                            e.variants && !e.cached_variants && (e.cached_variants = e.variants.map((function (t) {
                                return o(e, {variants: null}, t)
                            })));
                            if (e.cached_variants) return e.cached_variants;
                            if (M(e)) return o(e, {starts: e.starts ? o(e.starts) : null});
                            if (Object.isFrozen(e)) return o(e);
                            return e
                        }("self" === e ? r : e)
                    }))), r.contains.forEach((function (e) {
                        n(e, c)
                    })), r.starts && n(r.starts, s), c.matcher = function (e) {
                        const t = new i;
                        return e.contains.forEach((e => t.addRule(e.begin, {
                            rule: e,
                            type: "begin"
                        }))), e.terminator_end && t.addRule(e.terminator_end, {type: "end"}), e.illegal && t.addRule(e.illegal, {type: "illegal"}), t
                    }(c), c
                }(e)
            }

            function M(e) {
                return !!e && (e.endsWithParent || M(e.starts))
            }

            function L(e, t) {
                return t ? Number(t) : function (e) {
                    return A.includes(e.toLowerCase())
                }(e) ? 0 : 1
            }

            const $ = {
                props: ["language", "code", "autodetect"], data: function () {
                    return {detectedLanguage: "", unknownLanguage: !1}
                }, computed: {
                    className() {
                        return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                    }, highlighted() {
                        if (!this.autoDetect && !hljs.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, i(this.code);
                        let e;
                        return this.autoDetect ? (e = hljs.highlightAuto(this.code), this.detectedLanguage = e.language) : (e = hljs.highlight(this.language, this.code, this.ignoreIllegals), this.detectectLanguage = this.language), e.value
                    }, autoDetect() {
                        return !this.language || (e = this.autodetect, Boolean(e || "" === e));
                        var e
                    }, ignoreIllegals: () => !0
                }, render(e) {
                    return e("pre", {}, [e("code", {class: this.className, domProps: {innerHTML: this.highlighted}})])
                }
            }, P = {
                install(e) {
                    e.component("highlightjs", $)
                }
            }, j = i, U = o, {nodeStream: H, mergeStreams: K} = r, B = Symbol("nomatch");
            var G = function (e) {
                var i = [], o = Object.create(null), a = Object.create(null), r = [], s = !0,
                    c = /(^(<[^>]+>|\t|)+|\n)/gm,
                    l = "Could not find the language '{}', did you forget to load/include a language module?";
                const d = {disableAutodetect: !0, name: "Plain text", contains: []};
                var p = {
                    noHighlightRe: /^(no-?highlight)$/i,
                    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                    classPrefix: "hljs-",
                    tabReplace: null,
                    useBR: !1,
                    languages: null,
                    __emitter: u
                };

                function m(e) {
                    return p.noHighlightRe.test(e)
                }

                function f(e, t, n, i) {
                    var o = {code: t, language: e};
                    k("before:highlight", o);
                    var a = o.result ? o.result : h(o.language, o.code, n, i);
                    return a.code = o.code, k("after:highlight", a), a
                }

                function h(e, t, i, a) {
                    var r = t;

                    function c(e, t) {
                        var n = x.case_insensitive ? t[0].toLowerCase() : t[0];
                        return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
                    }

                    function u() {
                        null != E.subLanguage ? function () {
                            if ("" !== T) {
                                var e = null;
                                if ("string" == typeof E.subLanguage) {
                                    if (!o[E.subLanguage]) return void O.addText(T);
                                    e = h(E.subLanguage, T, !0, C[E.subLanguage]), C[E.subLanguage] = e.top
                                } else e = g(T, E.subLanguage.length ? E.subLanguage : null);
                                E.relevance > 0 && (Z += e.relevance), O.addSublanguage(e.emitter, e.language)
                            }
                        }() : function () {
                            if (!E.keywords) return void O.addText(T);
                            let e = 0;
                            E.keywordPatternRe.lastIndex = 0;
                            let t = E.keywordPatternRe.exec(T), n = "";
                            for (; t;) {
                                n += T.substring(e, t.index);
                                const i = c(E, t);
                                if (i) {
                                    const [e, o] = i;
                                    O.addText(n), n = "", Z += o, O.addKeyword(t[0], e)
                                } else n += t[0];
                                e = E.keywordPatternRe.lastIndex, t = E.keywordPatternRe.exec(T)
                            }
                            n += T.substr(e), O.addText(n)
                        }(), T = ""
                    }

                    function d(e) {
                        return e.className && O.openNode(e.className), E = Object.create(e, {parent: {value: E}})
                    }

                    function m(e, t, i) {
                        let o = function (e, t) {
                            var n = e && e.exec(t);
                            return n && 0 === n.index
                        }(e.endRe, i);
                        if (o) {
                            if (e["on:end"]) {
                                const i = new n(e);
                                e["on:end"](t, i), i.ignore && (o = !1)
                            }
                            if (o) {
                                for (; e.endsParent && e.parent;) e = e.parent;
                                return e
                            }
                        }
                        if (e.endsWithParent) return m(e.parent, t, i)
                    }

                    function f(e) {
                        return 0 === E.matcher.regexIndex ? (T += e[0], 1) : (R = !0, 0)
                    }

                    function _(e) {
                        var t = e[0], i = e.rule;
                        const o = new n(i), a = [i.__beforeBegin, i["on:begin"]];
                        for (const n of a) if (n && (n(e, o), o.ignore)) return f(t);
                        return i && i.endSameAsBegin && (i.endRe = new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), i.skip ? T += t : (i.excludeBegin && (T += t), u(), i.returnBegin || i.excludeBegin || (T = t)), d(i), i.returnBegin ? 0 : t.length
                    }

                    function v(e) {
                        var t = e[0], n = r.substr(e.index), i = m(E, e, n);
                        if (!i) return B;
                        var o = E;
                        o.skip ? T += t : (o.returnEnd || o.excludeEnd || (T += t), u(), o.excludeEnd && (T = t));
                        do {
                            E.className && O.closeNode(), E.skip || E.subLanguage || (Z += E.relevance), E = E.parent
                        } while (E !== i.parent);
                        return i.starts && (i.endSameAsBegin && (i.starts.endRe = i.endRe), d(i.starts)), o.returnEnd ? 0 : t.length
                    }

                    var w = {};

                    function y(t, n) {
                        var o = n && n[0];
                        if (T += t, null == o) return u(), 0;
                        if ("begin" === w.type && "end" === n.type && w.index === n.index && "" === o) {
                            if (T += r.slice(n.index, n.index + 1), !s) {
                                const t = new Error("0 width match regex");
                                throw t.languageName = e, t.badRule = w.rule, t
                            }
                            return 1
                        }
                        if (w = n, "begin" === n.type) return _(n);
                        if ("illegal" === n.type && !i) {
                            const e = new Error('Illegal lexeme "' + o + '" for mode "' + (E.className || "<unnamed>") + '"');
                            throw e.mode = E, e
                        }
                        if ("end" === n.type) {
                            var a = v(n);
                            if (a !== B) return a
                        }
                        if ("illegal" === n.type && "" === o) return 1;
                        if (N > 1e5 && N > 3 * n.index) {
                            throw new Error("potential infinite loop, way more iterations than matches")
                        }
                        return T += o, o.length
                    }

                    var x = b(e);
                    if (!x) throw console.error(l.replace("{}", e)), new Error('Unknown language: "' + e + '"');
                    var k = q(x), S = "", E = a || k, C = {}, O = new p.__emitter(p);
                    !function () {
                        for (var e = [], t = E; t !== x; t = t.parent) t.className && e.unshift(t.className);
                        e.forEach((e => O.openNode(e)))
                    }();
                    var T = "", Z = 0, I = 0, N = 0, R = !1;
                    try {
                        for (E.matcher.considerAll(); ;) {
                            N++, R ? R = !1 : E.matcher.considerAll(), E.matcher.lastIndex = I;
                            const e = E.matcher.exec(r);
                            if (!e) break;
                            const t = y(r.substring(I, e.index), e);
                            I = e.index + t
                        }
                        return y(r.substr(I)), O.closeAllNodes(), O.finalize(), S = O.toHTML(), {
                            relevance: Z,
                            value: S,
                            language: e,
                            illegal: !1,
                            emitter: O,
                            top: E
                        }
                    } catch (t) {
                        if (t.message && t.message.includes("Illegal")) return {
                            illegal: !0,
                            illegalBy: {msg: t.message, context: r.slice(I - 100, I + 100), mode: t.mode},
                            sofar: S,
                            relevance: 0,
                            value: j(r),
                            emitter: O
                        };
                        if (s) return {
                            illegal: !1,
                            relevance: 0,
                            value: j(r),
                            emitter: O,
                            language: e,
                            top: E,
                            errorRaised: t
                        };
                        throw t
                    }
                }

                function g(e, t) {
                    t = t || p.languages || Object.keys(o);
                    var n = function (e) {
                        const t = {relevance: 0, emitter: new p.__emitter(p), value: j(e), illegal: !1, top: d};
                        return t.emitter.addText(e), t
                    }(e), i = n;
                    return t.filter(b).filter(x).forEach((function (t) {
                        var o = h(t, e, !1);
                        o.language = t, o.relevance > i.relevance && (i = o), o.relevance > n.relevance && (i = n, n = o)
                    })), i.language && (n.second_best = i), n
                }

                function _(e) {
                    return p.tabReplace || p.useBR ? e.replace(c, (e => "\n" === e ? p.useBR ? "<br>" : e : p.tabReplace ? e.replace(/\t/g, p.tabReplace) : e)) : e
                }

                function v(e) {
                    let t = null;
                    const n = function (e) {
                        var t = e.className + " ";
                        t += e.parentNode ? e.parentNode.className : "";
                        const n = p.languageDetectRe.exec(t);
                        if (n) {
                            var i = b(n[1]);
                            return i || (console.warn(l.replace("{}", n[1])), console.warn("Falling back to no-highlight mode for this block.", e)), i ? n[1] : "no-highlight"
                        }
                        return t.split(/\s+/).find((e => m(e) || b(e)))
                    }(e);
                    if (m(n)) return;
                    k("before:highlightBlock", {
                        block: e,
                        language: n
                    }), p.useBR ? (t = document.createElement("div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n")) : t = e;
                    const i = t.textContent, o = n ? f(n, i, !0) : g(i), r = H(t);
                    if (r.length) {
                        const e = document.createElement("div");
                        e.innerHTML = o.value, o.value = K(r, H(e), i)
                    }
                    o.value = _(o.value), k("after:highlightBlock", {
                        block: e,
                        result: o
                    }), e.innerHTML = o.value, e.className = function (e, t, n) {
                        var i = t ? a[t] : n, o = [e.trim()];
                        return e.match(/\bhljs\b/) || o.push("hljs"), e.includes(i) || o.push(i), o.join(" ").trim()
                    }(e.className, n, o.language), e.result = {
                        language: o.language,
                        re: o.relevance,
                        relavance: o.relevance
                    }, o.second_best && (e.second_best = {
                        language: o.second_best.language,
                        re: o.second_best.relevance,
                        relavance: o.second_best.relevance
                    })
                }

                const w = () => {
                    if (!w.called) {
                        w.called = !0;
                        var e = document.querySelectorAll("pre code");
                        i.forEach.call(e, v)
                    }
                };

                function b(e) {
                    return e = (e || "").toLowerCase(), o[e] || o[a[e]]
                }

                function y(e, {languageName: t}) {
                    "string" == typeof e && (e = [e]), e.forEach((e => {
                        a[e] = t
                    }))
                }

                function x(e) {
                    var t = b(e);
                    return t && !t.disableAutodetect
                }

                function k(e, t) {
                    var n = e;
                    r.forEach((function (e) {
                        e[n] && e[n](t)
                    }))
                }

                Object.assign(e, {
                    highlight: f, highlightAuto: g, fixMarkup: function (e) {
                        return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"), console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"), _(e)
                    }, highlightBlock: v, configure: function (e) {
                        e.useBR && (console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"), console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")), p = U(p, e)
                    }, initHighlighting: w, initHighlightingOnLoad: function () {
                        window.addEventListener("DOMContentLoaded", w, !1)
                    }, registerLanguage: function (t, n) {
                        var i = null;
                        try {
                            i = n(e)
                        } catch (e) {
                            if (console.error("Language definition for '{}' could not be registered.".replace("{}", t)), !s) throw e;
                            console.error(e), i = d
                        }
                        i.name || (i.name = t), o[t] = i, i.rawDefinition = n.bind(null, e), i.aliases && y(i.aliases, {languageName: t})
                    }, listLanguages: function () {
                        return Object.keys(o)
                    }, getLanguage: b, registerAliases: y, requireLanguage: function (e) {
                        var t = b(e);
                        if (t) return t;
                        throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
                    }, autoDetection: x, inherit: U, addPlugin: function (e) {
                        r.push(e)
                    }, vuePlugin: P
                }), e.debugMode = function () {
                    s = !1
                }, e.safeMode = function () {
                    s = !0
                }, e.versionString = "10.3.1";
                for (const e in D) "object" == typeof D[e] && t(D[e]);
                return Object.assign(e, D), e
            }({});
            e.exports = G
        }, 914: function (e) {
            e.exports = function (e) {
                var t = {
                    begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
                    returnBegin: !0,
                    end: ";",
                    endsWithParent: !0,
                    contains: [{
                        className: "attribute",
                        begin: /\S/,
                        end: ":",
                        excludeEnd: !0,
                        starts: {
                            endsWithParent: !0,
                            excludeEnd: !0,
                            contains: [{
                                begin: /[\w-]+\(/,
                                returnBegin: !0,
                                contains: [{className: "built_in", begin: /[\w-]+/}, {
                                    begin: /\(/,
                                    end: /\)/,
                                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                                }]
                            }, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
                                className: "number",
                                begin: "#[0-9A-Fa-f]+"
                            }, {className: "meta", begin: "!important"}]
                        }
                    }]
                };
                return {
                    name: "CSS",
                    case_insensitive: !0,
                    illegal: /[=\/|'\$]/,
                    contains: [e.C_BLOCK_COMMENT_MODE, {
                        className: "selector-id",
                        begin: /#[A-Za-z0-9_-]+/
                    }, {className: "selector-class", begin: /\.[A-Za-z0-9_-]+/}, {
                        className: "selector-attr",
                        begin: /\[/,
                        end: /\]/,
                        illegal: "$",
                        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    }, {
                        className: "selector-pseudo",
                        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                    }, {begin: "@(page|font-face)", lexemes: "@[a-z-]+", keywords: "@page @font-face"}, {
                        begin: "@",
                        end: "[{;]",
                        illegal: /:/,
                        returnBegin: !0,
                        contains: [{className: "keyword", begin: /@\-?\w[\w]*(\-\w+)*/}, {
                            begin: /\s/,
                            endsWithParent: !0,
                            excludeEnd: !0,
                            relevance: 0,
                            keywords: "and or not only",
                            contains: [{
                                begin: /[a-z-]+:/,
                                className: "attribute"
                            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                        }]
                    }, {className: "selector-tag", begin: "[a-zA-Z-][a-zA-Z0-9_-]*", relevance: 0}, {
                        begin: "{",
                        end: "}",
                        illegal: /\S/,
                        contains: [e.C_BLOCK_COMMENT_MODE, t]
                    }]
                }
            }
        }, 344: function (e) {
            const t = "[A-Za-z$_][0-9A-Za-z$_]*",
                n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
                i = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                o = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);

            function a(e) {
                return s("(?=", e, ")")
            }

            function r(e) {
                return s("(", e, ")?")
            }

            function s(...e) {
                return e.map((e => {
                    return (t = e) ? "string" == typeof t ? t : t.source : null;
                    var t
                })).join("")
            }

            e.exports = function (e) {
                const c = t, l = "<>", u = "</>", d = {
                        begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e, t) => {
                            const n = e[0].length + e.index, i = e.input[n];
                            "<" !== i ? ">" === i && (((e, {after: t}) => {
                                const n = e[0].replace("<", "</");
                                return -1 !== e.input.indexOf(n, t)
                            })(e, {after: n}) || t.ignoreMatch()) : t.ignoreMatch()
                        }
                    }, p = {$pattern: t, keyword: n.join(" "), literal: i.join(" "), built_in: o.join(" ")},
                    m = (e, t) => `\\b0[${e}][${t}]([${t}_]*[${t}])?n?`, f = /[1-9]([0-9_]*\d)?/, h = /\d([0-9_]*\d)?/,
                    g = s(/[eE][+-]?/, h), _ = {
                        className: "number",
                        variants: [{begin: m("bB", "01")}, {begin: m("oO", "0-7")}, {begin: m("xX", "0-9a-fA-F")}, {begin: s(/\b/, f, "n")}, {begin: s(/(\b0)?\./, h, r(g))}, {begin: s(/\b/, f, r(s(/\./, r(h))), r(g))}, {begin: /\b0[\.n]?/}],
                        relevance: 0
                    }, v = {className: "subst", begin: "\\$\\{", end: "\\}", keywords: p, contains: []}, w = {
                        begin: "html`",
                        end: "",
                        starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, v], subLanguage: "xml"}
                    }, b = {
                        begin: "css`",
                        end: "",
                        starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, v], subLanguage: "css"}
                    }, y = {className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, v]}, x = {
                        className: "comment",
                        variants: [e.COMMENT("/\\*\\*", "\\*/", {
                            relevance: 0,
                            contains: [{
                                className: "doctag",
                                begin: "@[A-Za-z]+",
                                contains: [{
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: c + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {begin: /(?=[^\n])\s/, relevance: 0}]
                            }]
                        }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                    }, k = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, w, b, y, _, e.REGEXP_MODE];
                v.contains = k.concat({begin: /{/, end: /}/, keywords: p, contains: ["self"].concat(k)});
                const S = [].concat(x, v.contains),
                    E = S.concat([{begin: /\(/, end: /\)/, keywords: p, contains: ["self"].concat(S)}]), C = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: p,
                        contains: E
                    };
                return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: p,
                    exports: {PARAMS_CONTAINS: E},
                    illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({label: "shebang", binary: "node", relevance: 5}), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, w, b, y, x, _, {
                        begin: s(/[{,\n]\s*/, a(s(/(\/\/.*$)*/, /(\/\*(.|\n)*\*\/)*/, /\s*/, c + "\\s*:"))),
                        relevance: 0,
                        contains: [{className: "attr", begin: c + a("\\s*:"), relevance: 0}]
                    }, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        contains: [x, e.REGEXP_MODE, {
                            className: "function",
                            begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{begin: e.UNDERSCORE_IDENT_RE}, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: p, contains: E}]
                            }]
                        }, {begin: /,/, relevance: 0}, {
                            className: "",
                            begin: /\s/,
                            end: /\s*/,
                            skip: !0
                        }, {
                            variants: [{begin: l, end: u}, {
                                begin: d.begin,
                                "on:begin": d.isTrulyOpeningTag,
                                end: d.end
                            }],
                            subLanguage: "xml",
                            contains: [{begin: d.begin, end: d.end, skip: !0, contains: ["self"]}]
                        }],
                        relevance: 0
                    }, {
                        className: "function",
                        beginKeywords: "function",
                        end: /[{;]/,
                        excludeEnd: !0,
                        keywords: p,
                        contains: ["self", e.inherit(e.TITLE_MODE, {begin: c}), C],
                        illegal: /%/
                    }, {
                        className: "function",
                        begin: e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",
                        returnBegin: !0,
                        contains: [C, e.inherit(e.TITLE_MODE, {begin: c})]
                    }, {variants: [{begin: "\\." + c}, {begin: "\\$" + c}], relevance: 0}, {
                        className: "class",
                        beginKeywords: "class",
                        end: /[{;=]/,
                        excludeEnd: !0,
                        illegal: /[:"\[\]]/,
                        contains: [{beginKeywords: "extends"}, e.UNDERSCORE_TITLE_MODE]
                    }, {
                        begin: /\b(?=constructor)/,
                        end: /[\{;]/,
                        excludeEnd: !0,
                        contains: [e.inherit(e.TITLE_MODE, {begin: c}), "self", C]
                    }, {
                        begin: "(get|set)\\s+(?=" + c + "\\()",
                        end: /{/,
                        keywords: "get set",
                        contains: [e.inherit(e.TITLE_MODE, {begin: c}), {begin: /\(\)/}, C]
                    }, {begin: /\$[(.]/}]
                }
            }
        }, 26: function (e) {
            e.exports = function (e) {
                var t = {literal: "true false null"}, n = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    i = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
                    o = {end: ",", endsWithParent: !0, excludeEnd: !0, contains: i, keywords: t}, a = {
                        begin: "{",
                        end: "}",
                        contains: [{
                            className: "attr",
                            begin: /"/,
                            end: /"/,
                            contains: [e.BACKSLASH_ESCAPE],
                            illegal: "\\n"
                        }, e.inherit(o, {begin: /:/})].concat(n),
                        illegal: "\\S"
                    }, r = {begin: "\\[", end: "\\]", contains: [e.inherit(o)], illegal: "\\S"};
                return i.push(a, r), n.forEach((function (e) {
                    i.push(e)
                })), {name: "JSON", contains: i, keywords: t, illegal: "\\S"}
            }
        }, 306: function (e) {
            e.exports = function (e) {
                var t = {begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"}, n = {
                        className: "meta",
                        variants: [{begin: /<\?php/, relevance: 10}, {begin: /<\?[=]?/}, {begin: /\?>/}]
                    }, i = {className: "subst", variants: [{begin: /\$\w+/}, {begin: /\{\$/, end: /\}/}]},
                    o = e.inherit(e.APOS_STRING_MODE, {illegal: null}), a = e.inherit(e.QUOTE_STRING_MODE, {
                        illegal: null,
                        contains: e.QUOTE_STRING_MODE.contains.concat(i)
                    }), r = e.END_SAME_AS_BEGIN({
                        begin: /<<<[ \t]*(\w+)\n/,
                        end: /[ \t]*(\w+)\b/,
                        contains: e.QUOTE_STRING_MODE.contains.concat(i)
                    }), s = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE, n],
                        variants: [e.inherit(o, {begin: "b'", end: "'"}), e.inherit(a, {begin: 'b"', end: '"'}), a, o, r]
                    }, c = {variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]}, l = {
                        keyword: "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match new object or private protected public real return string switch throw trait try unset use var void while xor yield",
                        literal: "false null true",
                        built_in: "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
                    };
                return {
                    aliases: ["php", "php3", "php4", "php5", "php6", "php7", "php8"],
                    case_insensitive: !0,
                    keywords: l,
                    contains: [e.HASH_COMMENT_MODE, e.COMMENT("//", "$", {contains: [n]}), e.COMMENT("/\\*", "\\*/", {
                        contains: [{
                            className: "doctag",
                            begin: "@[A-Za-z]+"
                        }]
                    }), e.COMMENT("__halt_compiler.+?;", !1, {
                        endsWithParent: !0,
                        keywords: "__halt_compiler"
                    }), n, {
                        className: "keyword",
                        begin: /\$this\b/
                    }, t, {begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/}, {
                        className: "function",
                        beginKeywords: "fn function",
                        end: /[;{]/,
                        excludeEnd: !0,
                        illegal: "[$%\\[]",
                        contains: [e.UNDERSCORE_TITLE_MODE, {
                            className: "params",
                            begin: "\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: l,
                            contains: ["self", t, e.C_BLOCK_COMMENT_MODE, s, c]
                        }]
                    }, {
                        className: "class",
                        beginKeywords: "class interface",
                        end: "{",
                        excludeEnd: !0,
                        illegal: /[:\(\$"]/,
                        contains: [{beginKeywords: "extends implements"}, e.UNDERSCORE_TITLE_MODE]
                    }, {
                        beginKeywords: "namespace",
                        end: ";",
                        illegal: /[\.']/,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {beginKeywords: "use", end: ";", contains: [e.UNDERSCORE_TITLE_MODE]}, {begin: "=>"}, s, c]
                }
            }
        }, 157: function (e) {
            e.exports = function (e) {
                var t = {className: "symbol", begin: "&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"}, n = {
                        begin: "\\s",
                        contains: [{className: "meta-keyword", begin: "#?[a-z_][a-z1-9_-]+", illegal: "\\n"}]
                    }, i = e.inherit(n, {begin: "\\(", end: "\\)"}),
                    o = e.inherit(e.APOS_STRING_MODE, {className: "meta-string"}),
                    a = e.inherit(e.QUOTE_STRING_MODE, {className: "meta-string"}), r = {
                        endsWithParent: !0,
                        illegal: /</,
                        relevance: 0,
                        contains: [{className: "attr", begin: "[A-Za-z0-9\\._:-]+", relevance: 0}, {
                            begin: /=\s*/,
                            relevance: 0,
                            contains: [{
                                className: "string",
                                endsParent: !0,
                                variants: [{begin: /"/, end: /"/, contains: [t]}, {
                                    begin: /'/,
                                    end: /'/,
                                    contains: [t]
                                }, {begin: /[^\s"'=<>`]+/}]
                            }]
                        }]
                    };
                return {
                    name: "HTML, XML",
                    aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                    case_insensitive: !0,
                    contains: [{
                        className: "meta",
                        begin: "<![a-z]",
                        end: ">",
                        relevance: 10,
                        contains: [n, a, o, i, {
                            begin: "\\[",
                            end: "\\]",
                            contains: [{className: "meta", begin: "<![a-z]", end: ">", contains: [n, i, a, o]}]
                        }]
                    }, e.COMMENT("\x3c!--", "--\x3e", {relevance: 10}), {
                        begin: "<\\!\\[CDATA\\[",
                        end: "\\]\\]>",
                        relevance: 10
                    }, t, {className: "meta", begin: /<\?xml/, end: /\?>/, relevance: 10}, {
                        className: "tag",
                        begin: "<style(?=\\s|>)",
                        end: ">",
                        keywords: {name: "style"},
                        contains: [r],
                        starts: {end: "</style>", returnEnd: !0, subLanguage: ["css", "xml"]}
                    }, {
                        className: "tag",
                        begin: "<script(?=\\s|>)",
                        end: ">",
                        keywords: {name: "script"},
                        contains: [r],
                        starts: {end: "<\/script>", returnEnd: !0, subLanguage: ["javascript", "handlebars", "xml"]}
                    }, {
                        className: "tag",
                        begin: "</?",
                        end: "/?>",
                        contains: [{className: "name", begin: /[^\/><\s]+/, relevance: 0}, r]
                    }]
                }
            }
        }, 835: function () {
            !function () {
                function e(e, t) {
                    t = t || {bubbles: !1, cancelable: !1, detail: void 0};
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }

                "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
            }()
        }, 867: function () {
            !function () {
                try {
                    return new MouseEvent("test")
                } catch (e) {
                }
                var e = function (e, t) {
                    t = t || {bubbles: !1, cancelable: !1};
                    var n = document.createEvent("MouseEvent");
                    return n.initMouseEvent(e, t.bubbles, t.cancelable, window, 0, t.screenX || 0, t.screenY || 0, t.clientX || 0, t.clientY || 0, t.ctrlKey || !1, t.altKey || !1, t.shiftKey || !1, t.metaKey || !1, t.button || 0, t.relatedTarget || null), n
                };
                e.prototype = Event.prototype, window.MouseEvent = e
            }()
        }, 183: function (e) {
            e.exports = function () {
                "use strict";

                function e(e) {
                    var t, n = 1 + (e.length + 8 >> 6), i = [];
                    for (t = 0; t < 16 * n; t++) i[t] = 0;
                    for (t = 0; t < e.length; t++) i[t >> 2] |= e.charCodeAt(t) << 24 - 8 * (3 & t);
                    return i[t >> 2] |= 128 << 24 - 8 * (3 & t), i[16 * n - 1] = 8 * e.length, i
                }

                function t(e) {
                    var t, n = "0123456789abcdef", i = "";
                    for (t = 0; t < 4 * e.length; t++) i += n.charAt(e[t >> 2] >> 8 * (3 - t % 4) + 4 & 15) + n.charAt(e[t >> 2] >> 8 * (3 - t % 4) & 15);
                    return i
                }

                function n(e) {
                    var t, n, s, c, l, u, d, p, m = [], f = 1732584193, h = 4023233417, g = 2562383102, _ = 271733878,
                        v = 3285377520;
                    for (d = 0; d < e.length; d += 16) {
                        for (t = f, n = h, s = g, c = _, l = v, p = 0; p < 80; p++) m[p] = p < 16 ? e[d + p] : r(m[p - 3] ^ m[p - 8] ^ m[p - 14] ^ m[p - 16], 1), u = a(a(r(f, 5), i(p, h, g, _)), a(a(v, m[p]), o(p))), v = _, _ = g, g = r(h, 30), h = f, f = u;
                        f = a(f, t), h = a(h, n), g = a(g, s), _ = a(_, c), v = a(v, l)
                    }
                    return [f, h, g, _, v]
                }

                function i(e, t, n, i) {
                    return e < 20 ? t & n | ~t & i : e < 40 ? t ^ n ^ i : e < 60 ? t & n | t & i | n & i : t ^ n ^ i
                }

                function o(e) {
                    return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? 2400959708 : 3395469782
                }

                function a(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function r(e, t) {
                    return e << t | e >>> 32 - t
                }

                function s(i) {
                    return t(n(e(i)))
                }

                return s
            }()
        }, 966: function (e) {
            "use strict";
            var t = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/g, n = {
                YYYY: ["getFullYear", 4],
                YY: ["getFullYear", 2],
                MM: ["getMonth", 2, 1],
                DD: ["getDate", 2],
                HH: ["getHours", 2],
                mm: ["getMinutes", 2],
                ss: ["getSeconds", 2],
                ms: ["getMilliseconds", 3]
            }, i = function (e, i, o) {
                return "string" != typeof e && (i = e, e = "YYYY-MM-DD"), i || (i = new Date), e.replace(t, (function (e, t, a) {
                    var r = n[t], s = r[0], c = r[1];
                    return !0 === o && (s = "getUTC" + s.slice(3)), ("00" + String(i[s]() + (r[2] || 0))).slice(-c) + (a || "")
                }))
            };
            i.utc = function (e, t) {
                return i(e, t, !0)
            }, e.exports = i
        }
    }, __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
        var t = __webpack_module_cache__[e] = {exports: {}};
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports
    }

    __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return __webpack_require__.d(t, {a: t}), t
    }, __webpack_require__.d = function (e, t) {
        for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, function () {
        "use strict";
        __webpack_require__(867), __webpack_require__(835);
        const e = function (e) {
            var t = this.constructor;
            return this.then((function (n) {
                return t.resolve(e()).then((function () {
                    return n
                }))
            }), (function (n) {
                return t.resolve(e()).then((function () {
                    return t.reject(n)
                }))
            }))
        };
        const t = function (e) {
            return new this((function (t, n) {
                if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var i = Array.prototype.slice.call(e);
                if (0 === i.length) return t([]);
                var o = i.length;

                function a(e, n) {
                    if (n && ("object" == typeof n || "function" == typeof n)) {
                        var r = n.then;
                        if ("function" == typeof r) return void r.call(n, (function (t) {
                            a(e, t)
                        }), (function (n) {
                            i[e] = {status: "rejected", reason: n}, 0 == --o && t(i)
                        }))
                    }
                    i[e] = {status: "fulfilled", value: n}, 0 == --o && t(i)
                }

                for (var r = 0; r < i.length; r++) a(r, i[r])
            }))
        };
        var n = setTimeout;

        function i(e) {
            return Boolean(e && void 0 !== e.length)
        }

        function o() {
        }

        function a(e) {
            if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
        }

        function r(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, a._immediateFn((function () {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var i;
                    try {
                        i = n(e._value)
                    } catch (e) {
                        return void c(t.promise, e)
                    }
                    s(t.promise, i)
                } else (1 === e._state ? s : c)(t.promise, e._value)
            }))) : e._deferreds.push(t)
        }

        function s(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof a) return e._state = 3, e._value = t, void l(e);
                    if ("function" == typeof n) return void d((i = n, o = t, function () {
                        i.apply(o, arguments)
                    }), e)
                }
                e._state = 1, e._value = t, l(e)
            } catch (t) {
                c(e, t)
            }
            var i, o
        }

        function c(e, t) {
            e._state = 2, e._value = t, l(e)
        }

        function l(e) {
            2 === e._state && 0 === e._deferreds.length && a._immediateFn((function () {
                e._handled || a._unhandledRejectionFn(e._value)
            }));
            for (var t = 0, n = e._deferreds.length; t < n; t++) r(e, e._deferreds[t]);
            e._deferreds = null
        }

        function u(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function d(e, t) {
            var n = !1;
            try {
                e((function (e) {
                    n || (n = !0, s(t, e))
                }), (function (e) {
                    n || (n = !0, c(t, e))
                }))
            } catch (e) {
                if (n) return;
                n = !0, c(t, e)
            }
        }

        a.prototype.catch = function (e) {
            return this.then(null, e)
        }, a.prototype.then = function (e, t) {
            var n = new this.constructor(o);
            return r(this, new u(e, t, n)), n
        }, a.prototype.finally = e, a.all = function (e) {
            return new a((function (t, n) {
                if (!i(e)) return n(new TypeError("Promise.all accepts an array"));
                var o = Array.prototype.slice.call(e);
                if (0 === o.length) return t([]);
                var a = o.length;

                function r(e, i) {
                    try {
                        if (i && ("object" == typeof i || "function" == typeof i)) {
                            var s = i.then;
                            if ("function" == typeof s) return void s.call(i, (function (t) {
                                r(e, t)
                            }), n)
                        }
                        o[e] = i, 0 == --a && t(o)
                    } catch (e) {
                        n(e)
                    }
                }

                for (var s = 0; s < o.length; s++) r(s, o[s])
            }))
        }, a.allSettled = t, a.resolve = function (e) {
            return e && "object" == typeof e && e.constructor === a ? e : new a((function (t) {
                t(e)
            }))
        }, a.reject = function (e) {
            return new a((function (t, n) {
                n(e)
            }))
        }, a.race = function (e) {
            return new a((function (t, n) {
                if (!i(e)) return n(new TypeError("Promise.race accepts an array"));
                for (var o = 0, r = e.length; o < r; o++) a.resolve(e[o]).then(t, n)
            }))
        }, a._immediateFn = "function" == typeof setImmediate && function (e) {
            setImmediate(e)
        } || function (e) {
            n(e, 0)
        }, a._unhandledRejectionFn = function (e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        };
        const p = a;
        var m = function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("unable to locate global object")
        }();

        function f(e, t) {
            for (var n = [], i = [], o = arguments.length; o-- > 2;) n.push(arguments[o]);
            for (; n.length;) {
                var a = n.pop();
                if (a && a.pop) for (o = a.length; o--;) n.push(a[o]); else null != a && !0 !== a && !1 !== a && i.push(a)
            }
            return "function" == typeof e ? e(t || {}, i) : {
                nodeName: e,
                attributes: t || {},
                children: i,
                key: t && t.key
            }
        }

        function h(e, t, n, i) {
            var o, a = [].map, r = i && i.children[0] || null, s = r && function e(t) {
                return {
                    nodeName: t.nodeName.toLowerCase(),
                    attributes: {},
                    children: a.call(t.childNodes, (function (t) {
                        return 3 === t.nodeType ? t.nodeValue : e(t)
                    }))
                }
            }(r), c = [], l = !0, u = h(e), d = function e(t, n, i) {
                for (var o in i) "function" == typeof i[o] ? function (e, o) {
                    i[e] = function (e) {
                        var a = o(e);
                        return "function" == typeof a && (a = a(_(t, u), i)), a && a !== (n = _(t, u)) && !a.then && f(u = g(t, h(n, a), u)), a
                    }
                }(o, i[o]) : e(t.concat(o), n[o] = h(n[o]), i[o] = h(i[o]));
                return i
            }([], u, h(t));
            return f(), d;

            function p(e) {
                return "function" == typeof e ? p(e(u, d)) : null != e ? e : ""
            }

            function m() {
                o = !o;
                var e = p(n);
                for (i && !o && (r = S(i, r, s, s = e)), l = !1; c.length;) c.pop()()
            }

            function f() {
                o || (o = !0, setTimeout(m))
            }

            function h(e, t) {
                var n = {};
                for (var i in e) n[i] = e[i];
                for (var i in t) n[i] = t[i];
                return n
            }

            function g(e, t, n) {
                var i = {};
                return e.length ? (i[e[0]] = e.length > 1 ? g(e.slice(1), t, n[e[0]]) : t, h(n, i)) : t
            }

            function _(e, t) {
                for (var n = 0; n < e.length;) t = t[e[n++]];
                return t
            }

            function v(e) {
                return e ? e.key : null
            }

            function w(e) {
                return e.currentTarget.events[e.type](e)
            }

            function b(e, t, n, i, o) {
                if ("key" === t) ; else if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else for (var a in "string" == typeof i && (i = e.style.cssText = ""), h(i, n)) {
                    var r = null == n || null == n[a] ? "" : n[a];
                    "-" === a[0] ? e.style.setProperty(a, r) : e.style[a] = r
                } else "o" === t[0] && "n" === t[1] ? (t = t.slice(2), e.events ? i || (i = e.events[t]) : e.events = {}, e.events[t] = n, n ? i || e.addEventListener(t, w) : e.removeEventListener(t, w)) : t in e && "list" !== t && "type" !== t && "draggable" !== t && "spellcheck" !== t && "translate" !== t && !o ? e[t] = null == n ? "" : n : null != n && !1 !== n && e.setAttribute(t, n), null != n && !1 !== n || e.removeAttribute(t)
            }

            function y(e, t) {
                var n = "string" == typeof e || "number" == typeof e ? document.createTextNode(e) : (t = t || "svg" === e.nodeName) ? document.createElementNS("http://www.w3.org/2000/svg", e.nodeName) : document.createElement(e.nodeName),
                    i = e.attributes;
                if (i) {
                    i.oncreate && c.push((function () {
                        i.oncreate(n)
                    }));
                    for (var o = 0; o < e.children.length; o++) n.appendChild(y(e.children[o] = p(e.children[o]), t));
                    for (var a in i) b(n, a, i[a], null, t)
                }
                return n
            }

            function x(e, t) {
                var n = t.attributes;
                if (n) {
                    for (var i = 0; i < t.children.length; i++) x(e.childNodes[i], t.children[i]);
                    n.ondestroy && n.ondestroy(e)
                }
                return e
            }

            function k(e, t, n) {
                function i() {
                    e.removeChild(x(t, n))
                }

                var o = n.attributes && n.attributes.onremove;
                o ? o(t, i) : i()
            }

            function S(e, t, n, i, o) {
                if (i === n) ; else if (null == n || n.nodeName !== i.nodeName) {
                    var a = y(i, o);
                    e.insertBefore(a, t), null != n && k(e, t, n), t = a
                } else if (null == n.nodeName) t.nodeValue = i; else {
                    !function (e, t, n, i) {
                        for (var o in h(t, n)) n[o] !== ("value" === o || "checked" === o ? e[o] : t[o]) && b(e, o, n[o], t[o], i);
                        var a = l ? n.oncreate : n.onupdate;
                        a && c.push((function () {
                            a(e, t)
                        }))
                    }(t, n.attributes, i.attributes, o = o || "svg" === i.nodeName);
                    for (var r = {}, s = {}, u = [], d = n.children, m = i.children, f = 0; f < d.length; f++) {
                        u[f] = t.childNodes[f], null != (_ = v(d[f])) && (r[_] = [u[f], d[f]])
                    }
                    f = 0;
                    for (var g = 0; g < m.length;) {
                        var _ = v(d[f]), w = v(m[g] = p(m[g]));
                        if (s[_]) f++; else if (null == w || w !== v(d[f + 1])) if (null == w || l) null == _ && (S(t, u[f], d[f], m[g], o), g++), f++; else {
                            var x = r[w] || [];
                            _ === w ? (S(t, x[0], x[1], m[g], o), f++) : x[0] ? S(t, t.insertBefore(x[0], u[f]), x[1], m[g], o) : S(t, u[f], null, m[g], o), s[w] = m[g], g++
                        } else null == _ && k(t, u[f], d[f]), f++
                    }
                    for (; f < d.length;) null == v(d[f]) && k(t, u[f], d[f]), f++;
                    for (var f in r) s[f] || k(t, r[f][0], r[f][1])
                }
                return t
            }
        }

        function g(e, t) {
            return function (n, i) {
                var o = e.to, a = n.location, r = e.onclick;
                return delete e.to, delete e.location, e.href = o, e.onclick = function (t) {
                    r && r(t), t.defaultPrevented || 0 !== t.button || t.altKey || t.metaKey || t.ctrlKey || t.shiftKey || "_blank" === e.target || (t.preventDefault(), o !== a.pathname && history.pushState(a.pathname, "", o))
                }, f("a", e, t)
            }
        }

        function _(e, t, n, i) {
            return {isExact: e, path: t, url: n, params: i}
        }

        function v(e) {
            for (var t = e.length; "/" === e[--t];) ;
            return e.slice(0, t + 1)
        }

        function w(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }

        function b(e) {
            return function (t, n) {
                var i = t.location, o = function (e, t, n) {
                    if (e === t || !e) return _(e === t, e, t);
                    var i = n && n.exact, o = v(e).split("/"), a = v(t).split("/");
                    if (!(o.length > a.length || i && o.length < a.length)) {
                        var r = 0, s = {}, c = o.length;
                        for (t = ""; r < c; r++) {
                            if (":" === o[r][0]) s[o[r].slice(1)] = a[r] = w(a[r]); else if (o[r] !== a[r]) return;
                            t += a[r] + "/"
                        }
                        return _(!1, e, t.slice(0, -1), s)
                    }
                }(e.path, i.pathname, {exact: !e.parent});
                return o && e.render({match: o, location: i})
            }
        }

        "function" != typeof m.Promise ? m.Promise = p : m.Promise.prototype.finally ? m.Promise.allSettled || (m.Promise.allSettled = t) : m.Promise.prototype.finally = e;
        var y = {
            state: {pathname: window.location.pathname, previous: window.location.pathname},
            actions: {
                go: function (e) {
                    history.pushState(null, "", e)
                }, set: function (e) {
                    return e
                }
            },
            subscribe: function (e) {
                function t(t) {
                    e.set({
                        pathname: window.location.pathname,
                        previous: t.detail ? window.location.previous = t.detail : window.location.previous
                    })
                }

                var n = ["pushState", "replaceState"].reduce((function (e, t) {
                    var n = history[t];
                    return history[t] = function (e, t, i) {
                        n.call(this, e, t, i), dispatchEvent(new CustomEvent("pushstate", {detail: e}))
                    }, function () {
                        history[t] = n, e && e()
                    }
                }), null);
                return addEventListener("pushstate", t), addEventListener("popstate", t), function () {
                    removeEventListener("pushstate", t), removeEventListener("popstate", t), n()
                }
            }
        }, x = __webpack_require__(41), k = (0, x.Z)(document), S = (0, x.Z)(window), E = (0, x.Z)("body");

        function C(e, t) {
            k.on(e, (function (e, n) {
                t(n)
            }))
        }

        function O(e, t) {
            void 0 === t && (t = ""), k.trigger(e, t)
        }

        var T = __webpack_require__(66), Z = __webpack_require__(213);
        x.Z.fn.each = function (e) {
            return (0, T.Z)(this, e)
        }, (0, T.Z)(["add", "remove", "toggle"], (function (e, t) {
            x.Z.fn[t + "Class"] = function (e) {
                return "remove" !== t || arguments.length ? this.each((function (n, i) {
                    if ((0, Z.kK)(i)) {
                        var o = ((0, Z.mf)(e) ? e.call(i, n, i.getAttribute("class") || "") : e).split(" ").filter((function (e) {
                            return e
                        }));
                        (0, T.Z)(o, (function (e, n) {
                            i.classList[t](n)
                        }))
                    }
                })) : this.each((function (e, t) {
                    t.setAttribute("class", "")
                }))
            }
        })), (0, T.Z)(["insertBefore", "insertAfter"], (function (e, t) {
            x.Z.fn[t] = function (t) {
                var n = e ? (0, x.Z)(this.get().reverse()) : this, i = (0, x.Z)(t), o = [];
                return i.each((function (t, i) {
                    i.parentNode && n.each((function (n, a) {
                        var r = t ? a.cloneNode(!0) : a, s = e ? i.nextSibling : i;
                        o.push(r), i.parentNode.insertBefore(r, s)
                    }))
                })), (0, x.Z)(e ? o.reverse() : o)
            }
        }));
        const I = function (e, t) {
            var n, i, o = [];
            return (0, T.Z)(e, (function (e, n) {
                null != (i = t.call(window, n, e)) && o.push(i)
            })), (n = []).concat.apply(n, o)
        };
        var N = __webpack_require__(666);
        x.Z.fn.map = function (e) {
            return new N.JQ(I(this, (function (t, n) {
                return e.call(t, n, t)
            })))
        }, x.Z.fn.is = function (e) {
            var t = !1;
            if ((0, Z.mf)(e)) return this.each((function (n, i) {
                e.call(i, n, i) && (t = !0)
            })), t;
            if ((0, Z.HD)(e)) return this.each((function (n, i) {
                (0, Z.qk)(i) || (0, Z.FJ)(i) || (i.matches || i.msMatchesSelector).call(i, e) && (t = !0)
            })), t;
            var n = (0, x.Z)(e);
            return this.each((function (e, i) {
                n.each((function (e, n) {
                    i === n && (t = !0)
                }))
            })), t
        }, x.Z.fn.remove = function (e) {
            return this.each((function (t, n) {
                !n.parentNode || e && !(0, x.Z)(n).is(e) || n.parentNode.removeChild(n)
            }))
        }, (0, T.Z)(["appendTo", "prependTo"], (function (e, t) {
            x.Z.fn[t] = function (t) {
                var n = [], i = (0, x.Z)(t).map((function (t, i) {
                    var o = i.childNodes, a = o.length;
                    if (a) return o[e ? 0 : a - 1];
                    var r = document.createElement("div");
                    return i.appendChild(r), n.push(r), r
                })), o = this[e ? "insertBefore" : "insertAfter"](i);
                return (0, x.Z)(n).remove(), o
            }
        }));
        const R = function (e) {
            var t = [];
            return (0, T.Z)(e, (function (e, n) {
                -1 === t.indexOf(n) && t.push(n)
            })), t
        };
        x.Z.fn.children = function (e) {
            var t = [];
            return this.each((function (n, i) {
                (0, T.Z)(i.childNodes, (function (n, i) {
                    (0, Z.kK)(i) && (e && !(0, x.Z)(i).is(e) || t.push(i))
                }))
            })), new N.JQ(R(t))
        }, x.Z.fn.clone = function () {
            return this.map((function () {
                return this.cloneNode(!0)
            }))
        };
        const D = "_mduiElementDataStorage";

        function A(e, t) {
            e[D] || (e[D] = {}), (0, T.Z)(t, (function (t, n) {
                e[D][(0, Z.zW)(t)] = n
            }))
        }

        const q = function (e, t, n) {
            var i;
            return (0, Z.yD)(t) ? (A(e, t), t) : (0, Z.o8)(n) ? (0, Z.o8)(t) ? e[D] ? e[D] : {} : (t = (0, Z.zW)(t), e[D] && t in e[D] ? e[D][t] : void 0) : (A(e, ((i = {})[t] = n, i)), n)
        };
        var M = /^(?:{[\w\W]*\}|\[[\w\W]*\])$/;

        function L(e, t, n) {
            if ((0, Z.o8)(n) && 1 === e.nodeType) {
                var i = "data-" + (0, Z.mA)(t);
                if (n = e.getAttribute(i), (0, Z.HD)(n)) try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : M.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {
                } else n = void 0
            }
            return n
        }

        x.Z.fn.data = function (e, t) {
            if ((0, Z.o8)(e)) {
                if (!this.length) return;
                var n = this[0], i = q(n);
                if (1 !== n.nodeType) return i;
                for (var o = n.attributes, a = o.length; a--;) if (o[a]) {
                    var r = o[a].name;
                    0 === r.indexOf("data-") && (i[r = (0, Z.zW)(r.slice(5))] = L(n, r, i[r]))
                }
                return i
            }
            return (0, Z.yD)(e) ? this.each((function () {
                q(this, e)
            })) : 2 === arguments.length && (0, Z.o8)(t) ? this : (0, Z.o8)(t) ? this.length ? L(this[0], e, q(this[0], e)) : void 0 : this.each((function () {
                q(this, e, t)
            }))
        };
        const $ = function (e, t) {
            return (0, T.Z)(t, (function (t, n) {
                e.push(n)
            })), e
        };

        function P(e, t, n, i, o) {
            var a, r = [];
            return e.each((function (e, s) {
                for (a = s[n]; a && (0, Z.kK)(a);) {
                    if (2 === t) {
                        if (i && (0, x.Z)(a).is(i)) break;
                        o && !(0, x.Z)(a).is(o) || r.push(a)
                    } else {
                        if (0 === t) {
                            i && !(0, x.Z)(a).is(i) || r.push(a);
                            break
                        }
                        i && !(0, x.Z)(a).is(i) || r.push(a)
                    }
                    a = a[n]
                }
            })), new N.JQ(R(r))
        }

        x.Z.fn.get = function (e) {
            return void 0 === e ? [].slice.call(this) : this[e >= 0 ? e : e + this.length]
        }, x.Z.fn.find = function (e) {
            var t = [];
            return this.each((function (n, i) {
                $(t, (0, x.Z)(i.querySelectorAll(e)).get())
            })), new N.JQ(t)
        }, (0, T.Z)(["", "All", "Until"], (function (e, t) {
            x.Z.fn["next" + t] = function (t, n) {
                return P(this, e, "nextElementSibling", t, n)
            }
        }));
        const j = function (e, t) {
            return e !== t && (0, Z.Nj)(e).contains(t)
        };
        var U = {}, H = 1;

        function K(e) {
            var t = "_mduiEventId";
            return e[t] || (e[t] = ++H), e[t]
        }

        function B(e) {
            var t = e.split(".");
            return {type: t[0], ns: t.slice(1).sort().join(" ")}
        }

        function G(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function z(e, t, n, i) {
            var o = U[K(e)] || [], a = function (t) {
                delete o[t.id], e.removeEventListener(t.type, t.proxy, !1)
            };
            t ? t.split(" ").forEach((function (t) {
                t && function (e, t, n, i) {
                    var o = B(t);
                    return (U[K(e)] || []).filter((function (e) {
                        return e && (!o.type || e.type === o.type) && (!o.ns || G(o.ns).test(e.ns)) && (!n || K(e.func) === K(n)) && (!i || e.selector === i)
                    }))
                }(e, t, n, i).forEach((function (e) {
                    return a(e)
                }))
            })) : o.forEach((function (e) {
                return a(e)
            }))
        }

        x.Z.fn.off = function (e, t, n) {
            var i = this;
            return (0, Z.yD)(e) ? ((0, T.Z)(e, (function (e, n) {
                i.off(e, t, n)
            })), this) : ((!1 === t || (0, Z.mf)(t)) && (n = t, t = void 0), !1 === n && (n = Z.ar), this.each((function () {
                z(this, e, n, t)
            })))
        }, x.Z.fn.on = function (e, t, n, i, o) {
            var a = this;
            if ((0, Z.yD)(e)) return (0, Z.HD)(t) || (n = n || t, t = void 0), (0, T.Z)(e, (function (e, i) {
                a.on(e, t, n, i, o)
            })), this;
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ((0, Z.HD)(t) ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = Z.ar; else if (!i) return this;
            if (o) {
                var r = this, s = i;
                i = function (e) {
                    return r.off(e.type, t, i), s.apply(this, arguments)
                }
            }
            return this.each((function () {
                !function (e, t, n, i, o) {
                    var a = K(e);
                    U[a] || (U[a] = []);
                    var r = !1;
                    (0, Z.yD)(i) && i.useCapture && (r = !0), t.split(" ").forEach((function (t) {
                        if (t) {
                            var s = B(t), c = {type: s.type, ns: s.ns, func: n, selector: o, id: U[a].length, proxy: u};
                            U[a].push(c), e.addEventListener(c.type, u, r)
                        }

                        function l(e, t) {
                            !1 === n.apply(t, void 0 === e._detail ? [e] : [e].concat(e._detail)) && (e.preventDefault(), e.stopPropagation())
                        }

                        function u(t) {
                            t._ns && !G(t._ns).test(s.ns) || (t._data = i, o ? (0, x.Z)(e).find(o).get().reverse().forEach((function (e) {
                                (e === t.target || j(e, t.target)) && l(t, e)
                            })) : l(t, e))
                        }
                    }))
                }(this, e, i, n, t)
            }))
        }, (0, T.Z)(["", "s", "sUntil"], (function (e, t) {
            x.Z.fn["parent" + t] = function (t, n) {
                return P(e ? (0, x.Z)(this.get().reverse()) : this, e, "parentNode", t, n)
            }
        })), (0, T.Z)(["val", "html", "text"], (function (e, t) {
            var n = {0: "value", 1: "innerHTML", 2: "textContent"}[e];

            function i(t) {
                if (2 === e) return I(t, (function (e) {
                    return (0, Z.Nj)(e)[n]
                })).join("");
                if (t.length) {
                    var i = t[0];
                    return 0 === e && (0, x.Z)(i).is("select[multiple]") ? I((0, x.Z)(i).find("option:checked"), (function (e) {
                        return e.value
                    })) : i[n]
                }
            }

            function o(t, i) {
                if ((0, Z.o8)(i)) {
                    if (0 !== e) return;
                    i = ""
                }
                1 === e && (0, Z.kK)(i) && (i = i.outerHTML), t[n] = i
            }

            x.Z.fn[t] = function (t) {
                return arguments.length ? this.each((function (n, a) {
                    var r = (0, Z.mf)(t) ? t.call(a, n, i((0, x.Z)(a))) : t;
                    0 === e && Array.isArray(r) ? (0, x.Z)(a).is("select[multiple]") ? I((0, x.Z)(a).find("option"), (function (e) {
                        return e.selected = r.indexOf(e.value) > -1
                    })) : a.checked = r.indexOf(a.value) > -1 : o(a, r)
                })) : i(this)
            }
        })), x.Z.fn.serializeArray = function () {
            var e = [];
            return this.each((function (t, n) {
                var i = n instanceof HTMLFormElement ? n.elements : [n];
                (0, x.Z)(i).each((function (t, n) {
                    var i = (0, x.Z)(n), o = n.type, a = n.nodeName.toLowerCase();
                    if ("fieldset" !== a && n.name && !n.disabled && ["input", "select", "textarea", "keygen"].indexOf(a) > -1 && -1 === ["submit", "button", "image", "reset", "file"].indexOf(o) && (-1 === ["radio", "checkbox"].indexOf(o) || n.checked)) {
                        var r = i.val();
                        (Array.isArray(r) ? r : [r]).forEach((function (t) {
                            e.push({name: n.name, value: t})
                        }))
                    }
                }))
            })), e
        };
        var F = {};

        function Y(e, t, n, i, o, a) {
            var r = function (n) {
                return (0, Z.MO)(e, t.toLowerCase(), n) * a
            };
            return 2 === i && o && (n += r("margin")), (0, Z._s)(e) ? ((0, Z.w1)() && 1 === a && (n += r("border"), n += r("padding")), 0 === i && (n -= r("border")), 1 === i && (n -= r("border"), n -= r("padding"))) : (0 === i && (n += r("padding")), 2 === i && (n += r("border"), n += r("padding"))), n
        }

        function Q(e, t, n, i) {
            var o = "client" + t, a = "scroll" + t, r = "offset" + t, s = "inner" + t;
            if ((0, Z.FJ)(e)) return 2 === n ? e[s] : (0, Z.Nj)(document)[o];
            if ((0, Z.qk)(e)) {
                var c = (0, Z.Nj)(e);
                return Math.max(e.body[a], c[a], e.body[r], c[r], c[o])
            }
            var l = parseFloat((0, Z.B7)(e, t.toLowerCase()) || "0");
            return Y(e, t, l, n, i, 1)
        }

        function W(e, t, n, i, o, a) {
            var r = (0, Z.mf)(a) ? a.call(e, t, Q(e, n, i, o)) : a;
            if (null != r) {
                var s = (0, x.Z)(e), c = n.toLowerCase();
                if (["auto", "inherit", ""].indexOf(r) > -1) s.css(c, r); else {
                    var l = r.toString().replace(/\b[0-9.]*/, "");
                    r = Y(e, n, parseFloat(r), i, o, -1) + (l || "px"), s.css(c, r)
                }
            }
        }

        x.Z.fn.show = function () {
            return this.each((function () {
                var e, t, n;
                "none" === this.style.display && (this.style.display = ""), "none" === (0, Z.C2)(this, "display") && (this.style.display = (e = this.nodeName, F[e] || (t = document.createElement(e), document.body.appendChild(t), n = (0, Z.C2)(t, "display"), t.parentNode.removeChild(t), "none" === n && (n = "block"), F[e] = n), F[e]))
            }))
        }, x.Z.fn.trigger = function (e, t) {
            var n, i = B(e), o = {bubbles: !0, cancelable: !0};
            return ["click", "mousedown", "mouseup", "mousemove"].indexOf(i.type) > -1 ? n = new MouseEvent(i.type, o) : (o.detail = t, n = new CustomEvent(i.type, o)), n._detail = t, n._ns = i.ns, this.each((function () {
                this.dispatchEvent(n)
            }))
        }, (0, T.Z)(["attr", "prop", "css"], (function (e, t) {
            function n(t, n, i) {
                if (!(0, Z.o8)(i)) switch (e) {
                    case 0:
                        (0, Z.Ft)(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
                        break;
                    case 1:
                        t[n] = i;
                        break;
                    default:
                        n = (0, Z.zW)(n), t.style[n] = (0, Z.hj)(i) ? i + (Z.hA.indexOf(n) > -1 ? "" : "px") : i
                }
            }

            function i(t, n) {
                switch (e) {
                    case 0:
                        var i = t.getAttribute(n);
                        return (0, Z.Ft)(i) ? void 0 : i;
                    case 1:
                        return t[n];
                    default:
                        return (0, Z.C2)(t, n)
                }
            }

            x.Z.fn[t] = function (e, o) {
                var a = this;
                if ((0, Z.yD)(e)) return (0, T.Z)(e, (function (e, n) {
                    a[t](e, n)
                })), this;
                if (1 === arguments.length) {
                    var r = this[0];
                    return (0, Z.kK)(r) ? i(r, e) : void 0
                }
                return this.each((function (t, a) {
                    n(a, e, (0, Z.mf)(o) ? o.call(a, t, i(a, e)) : o)
                }))
            }
        })), (0, T.Z)(["Width", "Height"], (function (e, t) {
            (0, T.Z)(["inner" + t, t.toLowerCase(), "outer" + t], (function (e, n) {
                x.Z.fn[n] = function (n, i) {
                    var o = arguments.length && (e < 2 || !(0, Z.jn)(n)), a = !0 === n || !0 === i;
                    return o ? this.each((function (i, o) {
                        return W(o, i, t, e, a, n)
                    })) : this.length ? Q(this[0], t, e, a) : void 0
                }
            }))
        })), x.Z.fn.reflow = function () {
            return this.each((function () {
                return this.clientLeft
            }))
        }, x.Z.fn.transitionEnd = function (e) {
            var t = this, n = ["webkitTransitionEnd", "transitionend"];

            function i(o) {
                o.target === this && (e.call(this, o), (0, T.Z)(n, (function (e, n) {
                    t.off(n, i)
                })))
            }

            return (0, T.Z)(n, (function (e, n) {
                t.on(n, i)
            })), this
        };
        var J = {};

        function V(e, t, n, i) {
            var o = q(i, "_mdui_mutation");
            o || q(i, "_mdui_mutation", o = []), -1 === o.indexOf(e) && (o.push(e), t.call(i, n, i))
        }

        x.Z.fn.mutation = function () {
            return this.each((function (e, t) {
                var n = (0, x.Z)(t);
                (0, T.Z)(J, (function (i, o) {
                    n.is(i) && V(i, o, e, t), n.find(i).each((function (e, t) {
                        V(i, o, e, t)
                    }))
                }))
            }))
        }, x.Z.showOverlay = function (e) {
            var t = (0, x.Z)(".mdui-overlay");
            t.length ? (t.data("_overlay_is_deleted", !1), (0, Z.o8)(e) || t.css("z-index", e)) : ((0, Z.o8)(e) && (e = 2e3), t = (0, x.Z)('<div class="mdui-overlay">').appendTo(document.body).reflow().css("z-index", e));
            var n = t.data("_overlay_level") || 0;
            return t.data("_overlay_level", ++n).addClass("mdui-overlay-show")
        }, x.Z.hideOverlay = function (e) {
            void 0 === e && (e = !1);
            var t = (0, x.Z)(".mdui-overlay");
            if (t.length) {
                var n = e ? 1 : t.data("_overlay_level");
                n > 1 ? t.data("_overlay_level", --n) : t.data("_overlay_level", 0).removeClass("mdui-overlay-show").data("_overlay_is_deleted", !0).transitionEnd((function () {
                    t.data("_overlay_is_deleted") && t.remove()
                }))
            }
        }, x.Z.lockScreen = function () {
            var e = (0, x.Z)("body"), t = e.width(), n = e.data("_lockscreen_level") || 0;
            e.addClass("mdui-locked").width(t).data("_lockscreen_level", ++n)
        }, x.Z.unlockScreen = function (e) {
            void 0 === e && (e = !1);
            var t = (0, x.Z)("body"), n = e ? 1 : t.data("_lockscreen_level");
            n > 1 ? t.data("_lockscreen_level", --n) : t.data("_lockscreen_level", 0).removeClass("mdui-locked").width("")
        };
        var X = __webpack_require__(671);
        X.Z.mutation = function (e, t) {
            (0, Z.o8)(e) || (0, Z.o8)(t) ? (0, x.Z)(document).mutation() : (J[e] = t, (0, x.Z)(e).each((function (n, i) {
                return V(e, t, n, i)
            })))
        };
        const ee = function (e, t) {
            for (var n = [], i = arguments.length - 2; i-- > 0;) n[i] = arguments[i + 2];
            return n.unshift(t), (0, T.Z)(n, (function (t, n) {
                (0, T.Z)(n, (function (t, n) {
                    (0, Z.o8)(n) || (e[t] = n)
                }))
            })), e
        };

        function te(e, t, n, i, o) {
            o || (o = {}), o.inst = i;
            var a = e + ".mdui." + t;
            "undefined" != typeof jQuery && jQuery(n).trigger(a, o);
            var r = (0, x.Z)(n);
            r.trigger(a, o);
            var s = new CustomEvent(a, {bubbles: !0, cancelable: !0, detail: o});
            s._detail = o, r[0].dispatchEvent(s)
        }

        x.Z.fn.slice = function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            return new N.JQ([].slice.apply(this, e))
        }, x.Z.fn.eq = function (e) {
            var t = -1 === e ? this.slice(e) : this.slice(e, +e + 1);
            return new N.JQ(t)
        }, x.Z.fn.first = function () {
            return this.eq(0)
        }, x.Z.fn.hasClass = function (e) {
            return this[0].classList.contains(e)
        };
        var ne = {
            tolerance: 5,
            offset: 0,
            initialClass: "mdui-headroom",
            pinnedClass: "mdui-headroom-pinned-top",
            unpinnedClass: "mdui-headroom-unpinned-top"
        }, ie = function (e, t) {
            void 0 === t && (t = {}), this.options = ee({}, ne), this.state = "pinned", this.isEnable = !1, this.lastScrollY = 0, this.rafId = 0, this.$element = (0, x.Z)(e).first(), ee(this.options, t);
            var n = this.options.tolerance;
            (0, Z.hj)(n) && (this.options.tolerance = {down: n, up: n}), this.enable()
        };

        function oe(e, t) {
            return parseFloat(e.css(t))
        }

        function ae(e) {
            if (!e.getClientRects().length) return {top: 0, left: 0};
            var t = e.getBoundingClientRect(), n = e.ownerDocument.defaultView;
            return {top: t.top + n.pageYOffset, left: t.left + n.pageXOffset}
        }

        function re(e, t, n) {
            var i = (0, x.Z)(e), o = i.css("position");
            "static" === o && i.css("position", "relative");
            var a, r, s = ae(e), c = i.css("top"), l = i.css("left");
            if (("absolute" === o || "fixed" === o) && (c + l).indexOf("auto") > -1) {
                var u = i.position();
                a = u.top, r = u.left
            } else a = parseFloat(c), r = parseFloat(l);
            var d = (0, Z.mf)(t) ? t.call(e, n, ee({}, s)) : t;
            i.css({
                top: null != d.top ? d.top - s.top + a : void 0,
                left: null != d.left ? d.left - s.left + r : void 0
            })
        }

        ie.prototype.onScroll = function () {
            var e = this;
            this.rafId = window.requestAnimationFrame((function () {
                var t = window.pageYOffset, n = t > e.lastScrollY ? "down" : "up", i = e.options.tolerance[n],
                    o = Math.abs(t - e.lastScrollY) >= i;
                t > e.lastScrollY && t >= e.options.offset && o ? e.unpin() : (t < e.lastScrollY && o || t <= e.options.offset) && e.pin(), e.lastScrollY = t
            }))
        }, ie.prototype.triggerEvent = function (e) {
            te(e, "headroom", this.$element, this)
        }, ie.prototype.transitionEnd = function () {
            "pinning" === this.state && (this.state = "pinned", this.triggerEvent("pinned")), "unpinning" === this.state && (this.state = "unpinned", this.triggerEvent("unpinned"))
        }, ie.prototype.pin = function () {
            var e = this;
            "pinning" !== this.state && "pinned" !== this.state && this.$element.hasClass(this.options.initialClass) && (this.triggerEvent("pin"), this.state = "pinning", this.$element.removeClass(this.options.unpinnedClass).addClass(this.options.pinnedClass).transitionEnd((function () {
                return e.transitionEnd()
            })))
        }, ie.prototype.unpin = function () {
            var e = this;
            "unpinning" !== this.state && "unpinned" !== this.state && this.$element.hasClass(this.options.initialClass) && (this.triggerEvent("unpin"), this.state = "unpinning", this.$element.removeClass(this.options.pinnedClass).addClass(this.options.unpinnedClass).transitionEnd((function () {
                return e.transitionEnd()
            })))
        }, ie.prototype.enable = function () {
            var e = this;
            this.isEnable || (this.isEnable = !0, this.state = "pinned", this.$element.addClass(this.options.initialClass).removeClass(this.options.pinnedClass).removeClass(this.options.unpinnedClass), this.lastScrollY = window.pageYOffset, S.on("scroll", (function () {
                return e.onScroll()
            })))
        }, ie.prototype.disable = function () {
            var e = this;
            this.isEnable && (this.isEnable = !1, this.$element.removeClass(this.options.initialClass).removeClass(this.options.pinnedClass).removeClass(this.options.unpinnedClass), S.off("scroll", (function () {
                return e.onScroll()
            })), window.cancelAnimationFrame(this.rafId))
        }, ie.prototype.getState = function () {
            return this.state
        }, X.Z.Headroom = ie, x.Z.fn.offsetParent = function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === (0, x.Z)(e).css("position");) e = e.offsetParent;
                return e || document.documentElement
            }))
        }, x.Z.fn.position = function () {
            if (this.length) {
                var e, t = this.eq(0), n = {left: 0, top: 0};
                if ("fixed" === t.css("position")) e = t[0].getBoundingClientRect(); else {
                    e = t.offset();
                    var i = t.offsetParent();
                    (n = i.offset()).top += oe(i, "border-top-width"), n.left += oe(i, "border-left-width")
                }
                return {top: e.top - n.top - oe(t, "margin-top"), left: e.left - n.left - oe(t, "margin-left")}
            }
        }, x.Z.fn.offset = function (e) {
            if (!arguments.length) {
                if (!this.length) return;
                return ae(this[0])
            }
            return this.each((function (t) {
                re(this, e, t)
            }))
        }, x.Z.fn.transform = function (e) {
            return this.each((function () {
                this.style.webkitTransform = e, this.style.transform = e
            }))
        };
        var se = "touchstart mousedown", ce = "touchmove mousemove", le = "touchend mouseup",
            ue = "touchcancel mouseleave", de = "touchend touchmove touchcancel", pe = 0;

        function me(e) {
            return !(pe && ["mousedown", "mouseup", "mousemove", "click", "mouseover", "mouseout", "mouseenter", "mouseleave"].indexOf(e.type) > -1)
        }

        function fe(e) {
            "touchstart" === e.type ? pe += 1 : ["touchmove", "touchend", "touchcancel"].indexOf(e.type) > -1 && setTimeout((function () {
                pe && (pe -= 1)
            }), 500)
        }

        function he(e, t) {
            if (!(e instanceof MouseEvent && 2 === e.button)) {
                var n = "undefined" != typeof TouchEvent && e instanceof TouchEvent && e.touches.length ? e.touches[0] : e,
                    i = n.pageX, o = n.pageY, a = t.offset(), r = t.innerHeight(), s = t.innerWidth(), c = i - a.left,
                    l = o - a.top, u = Math.max(Math.pow(Math.pow(r, 2) + Math.pow(s, 2), .5), 48),
                    d = "translate3d(" + (s / 2 - c) + "px," + (r / 2 - l) + "px, 0) scale(1)";
                (0, x.Z)('<div class="mdui-ripple-wave" style="width:' + u + "px;height:" + u + "px;margin-top:-" + u / 2 + "px;margin-left:-" + u / 2 + "px;left:" + c + "px;top:" + l + 'px;"></div>').data("_ripple_wave_translate", d).prependTo(t).reflow().transform(d)
            }
        }

        function ge() {
            var e = (0, x.Z)(this);
            e.children(".mdui-ripple-wave").each((function (e, t) {
                !function (e) {
                    if (e.length && !e.data("_ripple_wave_removed")) {
                        e.data("_ripple_wave_removed", !0);
                        var t = setTimeout((function () {
                            return e.remove()
                        }), 400), n = e.data("_ripple_wave_translate");
                        e.addClass("mdui-ripple-wave-fill").transform(n.replace("scale(1)", "scale(1.01)")).transitionEnd((function () {
                            clearTimeout(t), e.addClass("mdui-ripple-wave-out").transform(n.replace("scale(1)", "scale(1.01)")), t = setTimeout((function () {
                                return e.remove()
                            }), 700), setTimeout((function () {
                                e.transitionEnd((function () {
                                    clearTimeout(t), e.remove()
                                }))
                            }), 0)
                        }))
                    }
                }((0, x.Z)(t))
            })), e.off(ce + " " + le + " " + ue, ge)
        }

        function _e(e) {
            if (me(e) && (fe(e), e.target !== document)) {
                var t = (0, x.Z)(e.target), n = t.hasClass("mdui-ripple") ? t : t.parents(".mdui-ripple").first();
                if (n.length && !n.prop("disabled") && (0, Z.o8)(n.attr("disabled"))) if ("touchstart" === e.type) {
                    var i = !1, o = setTimeout((function () {
                        o = 0, he(e, n)
                    }), 200), a = function () {
                        o && (clearTimeout(o), o = 0, he(e, n)), i || (i = !0, ge.call(n))
                    };
                    n.on("touchmove", (function () {
                        o && (clearTimeout(o), o = 0), a()
                    })).on("touchend touchcancel", a)
                } else he(e, n), n.on(ce + " " + le + " " + ue, ge)
            }
        }

        (0, x.Z)((function () {
            k.on(se, _e).on(de, fe)
        }));
        var ve = {reInit: !1, domLoadedEvent: !1};

        function we(e, t) {
            void 0 === t && (t = {}), t = ee({}, ve, t);
            var n = e.target, i = (0, x.Z)(n), o = e.type, a = i.val(), r = i.attr("type") || "";
            if (!(["checkbox", "button", "submit", "range", "radio", "image"].indexOf(r) > -1)) {
                var s = i.parent(".mdui-textfield");
                if ("focus" === o && s.addClass("mdui-textfield-focus"), "blur" === o && s.removeClass("mdui-textfield-focus"), "blur" !== o && "input" !== o || (a ? s.addClass("mdui-textfield-not-empty") : s.removeClass("mdui-textfield-not-empty")), n.disabled ? s.addClass("mdui-textfield-disabled") : s.removeClass("mdui-textfield-disabled"), "input" !== o && "blur" !== o || t.domLoadedEvent || !n.validity || (n.validity.valid ? s.removeClass("mdui-textfield-invalid-html5") : s.addClass("mdui-textfield-invalid-html5")), i.is("textarea")) {
                    var c = a, l = !1;
                    "" === c.replace(/[\r\n]/g, "") && (i.val(" " + c), l = !0), i.outerHeight("");
                    var u = i.outerHeight(), d = n.scrollHeight;
                    d > u && i.outerHeight(d), l && i.val(c)
                }
                t.reInit && s.find(".mdui-textfield-counter").remove();
                var p = i.attr("maxlength");
                p && ((t.reInit || t.domLoadedEvent) && (0, x.Z)('<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed"></span> / ' + p + "</div>").appendTo(s), s.find(".mdui-textfield-counter-inputed").text(a.length.toString())), (s.find(".mdui-textfield-helper").length || s.find(".mdui-textfield-error").length || p) && s.addClass("mdui-textfield-has-bottom")
            }
        }

        (0, x.Z)((function () {
            k.on("input focus blur", ".mdui-textfield-input", {useCapture: !0}, we), k.on("click", ".mdui-textfield-expandable .mdui-textfield-icon", (function () {
                (0, x.Z)(this).parents(".mdui-textfield").addClass("mdui-textfield-expanded").find(".mdui-textfield-input")[0].focus()
            })), k.on("click", ".mdui-textfield-expanded .mdui-textfield-close", (function () {
                (0, x.Z)(this).parents(".mdui-textfield").removeClass("mdui-textfield-expanded").find(".mdui-textfield-input").val("")
            })), X.Z.mutation(".mdui-textfield", (function () {
                (0, x.Z)(this).find(".mdui-textfield-input").trigger("input", {domLoadedEvent: !0})
            }))
        })), X.Z.updateTextFields = function (e) {
            ((0, Z.o8)(e) ? (0, x.Z)(".mdui-textfield") : (0, x.Z)(e)).each((function (e, t) {
                (0, x.Z)(t).find(".mdui-textfield-input").trigger("input", {reInit: !0})
            }))
        }, (0, x.Z)((function () {
            X.Z.mutation(".mdui-appbar-scroll-hide", (function () {
                new X.Z.Headroom(this)
            })), X.Z.mutation(".mdui-appbar-scroll-toolbar-hide", (function () {
                new X.Z.Headroom(this, {
                    pinnedClass: "mdui-headroom-pinned-toolbar",
                    unpinnedClass: "mdui-headroom-unpinned-toolbar"
                })
            }))
        })), x.Z.fn.hide = function () {
            return this.each((function () {
                this.style.display = "none"
            }))
        }, x.Z.fn.index = function (e) {
            return arguments.length ? (0, Z.HD)(e) ? (0, x.Z)(e).get().indexOf(this[0]) : this.get().indexOf((0, x.Z)(e)[0]) : this.eq(0).parent().children().get().indexOf(this[0])
        }, x.Z.throttle = function (e, t) {
            void 0 === t && (t = 16);
            var n = null;
            return function () {
                for (var i = this, o = [], a = arguments.length; a--;) o[a] = arguments[a];
                (0, Z.Ft)(n) && (n = setTimeout((function () {
                    e.apply(i, o), n = null
                }), t))
            }
        };
        var be = {trigger: "click", loop: !1}, ye = function (e, t) {
            var n = this;
            void 0 === t && (t = {}), this.options = ee({}, be), this.activeIndex = -1, this.$element = (0, x.Z)(e).first(), ee(this.options, t), this.$tabs = this.$element.children("a"), this.$indicator = (0, x.Z)('<div class="mdui-tab-indicator"></div>').appendTo(this.$element);
            var i = window.location.hash;
            i && this.$tabs.each((function (e, t) {
                return (0, x.Z)(t).attr("href") !== i || (n.activeIndex = e, !1)
            })), -1 === this.activeIndex && this.$tabs.each((function (e, t) {
                return !(0, x.Z)(t).hasClass("mdui-tab-active") || (n.activeIndex = e, !1)
            })), this.$tabs.length && -1 === this.activeIndex && (this.activeIndex = 0), this.setActive(), S.on("resize", x.Z.throttle((function () {
                return n.setIndicatorPosition()
            }), 100)), this.$tabs.each((function (e, t) {
                n.bindTabEvent(t)
            }))
        };

        function xe(e, t) {
            var n = (0, x.Z)(e).attr(t);
            return n ? new Function("", "var json = " + n + "; return JSON.parse(JSON.stringify(json));")() : {}
        }

        ye.prototype.isDisabled = function (e) {
            return void 0 !== e.attr("disabled")
        }, ye.prototype.bindTabEvent = function (e) {
            var t = this, n = (0, x.Z)(e), i = function () {
                if (t.isDisabled(n)) return !1;
                t.activeIndex = t.$tabs.index(e), t.setActive()
            };
            n.on("click", i), "hover" === this.options.trigger && n.on("mouseenter", i), n.on("click", (function () {
                if (0 === (n.attr("href") || "").indexOf("#")) return !1
            }))
        }, ye.prototype.triggerEvent = function (e, t, n) {
            void 0 === n && (n = {}), te(e, "tab", t, this, n)
        }, ye.prototype.setActive = function () {
            var e = this;
            this.$tabs.each((function (t, n) {
                var i = (0, x.Z)(n), o = i.attr("href") || "";
                t !== e.activeIndex || e.isDisabled(i) ? (i.removeClass("mdui-tab-active"), (0, x.Z)(o).hide()) : (i.hasClass("mdui-tab-active") || (e.triggerEvent("change", e.$element, {
                    index: e.activeIndex,
                    id: o.substr(1)
                }), e.triggerEvent("show", i), i.addClass("mdui-tab-active")), (0, x.Z)(o).show(), e.setIndicatorPosition())
            }))
        }, ye.prototype.setIndicatorPosition = function () {
            if (-1 !== this.activeIndex) {
                var e = this.$tabs.eq(this.activeIndex);
                if (!this.isDisabled(e)) {
                    var t = e.offset();
                    this.$indicator.css({
                        left: t.left + this.$element[0].scrollLeft - this.$element[0].getBoundingClientRect().left + "px",
                        width: e.innerWidth() + "px"
                    })
                }
            } else this.$indicator.css({left: 0, width: 0})
        }, ye.prototype.next = function () {
            -1 !== this.activeIndex && (this.$tabs.length > this.activeIndex + 1 ? this.activeIndex++ : this.options.loop && (this.activeIndex = 0), this.setActive())
        }, ye.prototype.prev = function () {
            -1 !== this.activeIndex && (this.activeIndex > 0 ? this.activeIndex-- : this.options.loop && (this.activeIndex = this.$tabs.length - 1), this.setActive())
        }, ye.prototype.show = function (e) {
            var t = this;
            -1 !== this.activeIndex && ((0, Z.hj)(e) ? this.activeIndex = e : this.$tabs.each((function (n, i) {
                if (i.id === e) return t.activeIndex, !1
            })), this.setActive())
        }, ye.prototype.handleUpdate = function () {
            var e = this, t = this.$tabs, n = this.$element.children("a"), i = t.get(), o = n.get();
            if (!n.length) return this.activeIndex = -1, this.$tabs = n, void this.setIndicatorPosition();
            n.each((function (t, n) {
                i.indexOf(n) < 0 && (e.bindTabEvent(n), -1 === e.activeIndex ? e.activeIndex = 0 : t <= e.activeIndex && e.activeIndex++)
            })), t.each((function (t, n) {
                o.indexOf(n) < 0 && (t < e.activeIndex ? e.activeIndex-- : t === e.activeIndex && (e.activeIndex = 0))
            })), this.$tabs = n, this.setActive()
        }, X.Z.Tab = ye;
        var ke = "mdui-tab";
        (0, x.Z)((function () {
            X.Z.mutation("[mdui-tab]", (function () {
                new X.Z.Tab(this, xe(this, ke))
            }))
        })), x.Z.fn.one = function (e, t, n, i) {
            return this.on(e, t, n, i, !0)
        };
        var Se = {overlay: !1, swipe: !1}, Ee = function (e, t) {
            var n = this;
            void 0 === t && (t = {}), this.options = ee({}, Se), this.overlay = !1, this.$element = (0, x.Z)(e).first(), ee(this.options, t), this.position = this.$element.hasClass("mdui-drawer-right") ? "right" : "left", this.$element.hasClass("mdui-drawer-close") ? this.state = "closed" : this.$element.hasClass("mdui-drawer-open") || this.isDesktop() ? this.state = "opened" : this.state = "closed", S.on("resize", x.Z.throttle((function () {
                n.isDesktop() ? (n.overlay && !n.options.overlay && (x.Z.hideOverlay(), n.overlay = !1, x.Z.unlockScreen()), n.$element.hasClass("mdui-drawer-close") || (n.state = "opened")) : n.overlay || "opened" !== n.state || (n.$element.hasClass("mdui-drawer-open") ? (x.Z.showOverlay(), n.overlay = !0, x.Z.lockScreen(), (0, x.Z)(".mdui-overlay").one("click", (function () {
                    return n.close()
                }))) : n.state = "closed")
            }), 100)), this.$element.find("[mdui-drawer-close]").each((function (e, t) {
                (0, x.Z)(t).on("click", (function () {
                    return n.close()
                }))
            })), this.swipeSupport()
        };
        Ee.prototype.isDesktop = function () {
            return S.width() >= 1024
        }, Ee.prototype.swipeSupport = function () {
            var e, t, n, i, o = this, a = null, r = !1, s = (0, x.Z)("body");

            function c(e) {
                var t = "translate(" + -1 * ("right" === o.position ? -1 : 1) * e + "px, 0) !important;";
                o.$element.css("cssText", "transform: " + t + "; transition: initial !important;;")
            }

            function l() {
                o.$element[0].style.transform = "", o.$element[0].style.webkitTransform = "", o.$element[0].style.transition = "", o.$element[0].style.webkitTransition = ""
            }

            function u() {
                return o.$element.width() + 10
            }

            function d(e) {
                return Math.min(Math.max("closing" === a ? i - e : u() + i - e, 0), u())
            }

            function p(e) {
                if (a) {
                    var t = e.changedTouches[0].pageX;
                    "right" === o.position && (t = s.width() - t);
                    var n = d(t) / u();
                    r = !1;
                    var i = a;
                    a = null, "opening" === i ? n < .92 ? (l(), o.open()) : l() : n > .08 ? (l(), o.close()) : l(), x.Z.unlockScreen()
                } else r = !1;
                s.off({touchmove: m, touchend: p, touchcancel: m})
            }

            function m(e) {
                var l = e.touches[0].pageX;
                "right" === o.position && (l = s.width() - l);
                var u = e.touches[0].pageY;
                if (a) c(d(l)); else if (r) {
                    var m = Math.abs(l - t), f = Math.abs(u - n);
                    m > 8 && f <= 8 ? (i = l, a = "opened" === o.state ? "closing" : "opening", x.Z.lockScreen(), c(d(l))) : m <= 8 && f > 8 && p()
                }
            }

            function f(i) {
                t = i.touches[0].pageX, "right" === o.position && (t = s.width() - t), n = i.touches[0].pageY, "opened" !== o.state && (t > 24 || e !== f) || (r = !0, s.on({
                    touchmove: m,
                    touchend: p,
                    touchcancel: m
                }))
            }

            this.options.swipe && (e || (s.on("touchstart", f), e = f))
        }, Ee.prototype.triggerEvent = function (e) {
            te(e, "drawer", this.$element, this)
        }, Ee.prototype.transitionEnd = function () {
            this.$element.hasClass("mdui-drawer-open") ? (this.state = "opened", this.triggerEvent("opened")) : (this.state = "closed", this.triggerEvent("closed"))
        }, Ee.prototype.isOpen = function () {
            return "opening" === this.state || "opened" === this.state
        }, Ee.prototype.open = function () {
            var e = this;
            this.isOpen() || (this.state = "opening", this.triggerEvent("open"), this.options.overlay || (0, x.Z)("body").addClass("mdui-drawer-body-" + this.position), this.$element.removeClass("mdui-drawer-close").addClass("mdui-drawer-open").transitionEnd((function () {
                return e.transitionEnd()
            })), this.isDesktop() && !this.options.overlay || (this.overlay = !0, x.Z.showOverlay().one("click", (function () {
                return e.close()
            })), x.Z.lockScreen()))
        }, Ee.prototype.close = function () {
            var e = this;
            this.isOpen() && (this.state = "closing", this.triggerEvent("close"), this.options.overlay || (0, x.Z)("body").removeClass("mdui-drawer-body-" + this.position), this.$element.addClass("mdui-drawer-close").removeClass("mdui-drawer-open").transitionEnd((function () {
                return e.transitionEnd()
            })), this.overlay && (x.Z.hideOverlay(), this.overlay = !1, x.Z.unlockScreen()))
        }, Ee.prototype.toggle = function () {
            this.isOpen() ? this.close() : this.open()
        }, Ee.prototype.getState = function () {
            return this.state
        }, X.Z.Drawer = Ee;
        var Ce = "mdui-drawer";

        function Oe(e) {
            return (0, Z.HD)(e) && ("<" !== e[0] || ">" !== e[e.length - 1])
        }

        (0, x.Z)((function () {
            X.Z.mutation("[mdui-drawer]", (function () {
                var e = (0, x.Z)(this), t = xe(this, Ce), n = t.target;
                delete t.target;
                var i = (0, x.Z)(n).first(), o = new X.Z.Drawer(i, t);
                e.on("click", (function () {
                    return o.toggle()
                }))
            }))
        })), (0, T.Z)(["before", "after"], (function (e, t) {
            x.Z.fn[t] = function () {
                for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                return 1 === e && (t = t.reverse()), this.each((function (n, i) {
                    var o = (0, Z.mf)(t[0]) ? [t[0].call(i, n, i.innerHTML)] : t;
                    (0, T.Z)(o, (function (t, o) {
                        (Oe(o) ? (0, x.Z)((0, Z.q8)(o, "div")) : n && (0, Z.kK)(o) ? (0, x.Z)(o.cloneNode(!0)) : (0, x.Z)(o))[e ? "insertAfter" : "insertBefore"](i)
                    }))
                }))
            }
        })), (0, T.Z)(["prepend", "append"], (function (e, t) {
            x.Z.fn[t] = function () {
                for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                return this.each((function (n, i) {
                    var o, a = i.childNodes, r = a.length, s = r ? a[e ? r - 1 : 0] : document.createElement("div");
                    r || i.appendChild(s);
                    var c = (0, Z.mf)(t[0]) ? [t[0].call(i, n, i.innerHTML)] : t;
                    n && (c = c.map((function (e) {
                        return (0, Z.HD)(e) ? e : (0, x.Z)(e).clone()
                    }))), (o = (0, x.Z)(s))[e ? "after" : "before"].apply(o, c), r || i.removeChild(s)
                }))
            }
        }));
        var Te = {};

        function Ze(e, t) {
            if ((0, Z.o8)(Te[e]) && (Te[e] = []), (0, Z.o8)(t)) return Te[e];
            Te[e].push(t)
        }

        function Ie(e) {
            (0, Z.o8)(Te[e]) || Te[e].length && Te[e].shift()()
        }

        var Ne, Re = {
            history: !0,
            overlay: !0,
            modal: !1,
            closeOnEsc: !0,
            closeOnCancel: !0,
            closeOnConfirm: !0,
            destroyOnClosed: !1
        }, De = null, Ae = "_mdui_dialog", qe = !1, Me = function (e, t) {
            var n = this;
            void 0 === t && (t = {}), this.options = ee({}, Re), this.state = "closed", this.append = !1, this.$element = (0, x.Z)(e).first(), j(document.body, this.$element[0]) || (this.append = !0, (0, x.Z)("body").append(this.$element)), ee(this.options, t), this.$element.find("[mdui-dialog-cancel]").each((function (e, t) {
                (0, x.Z)(t).on("click", (function () {
                    n.triggerEvent("cancel"), n.options.closeOnCancel && n.close()
                }))
            })), this.$element.find("[mdui-dialog-confirm]").each((function (e, t) {
                (0, x.Z)(t).on("click", (function () {
                    n.triggerEvent("confirm"), n.options.closeOnConfirm && n.close()
                }))
            })), this.$element.find("[mdui-dialog-close]").each((function (e, t) {
                (0, x.Z)(t).on("click", (function () {
                    return n.close()
                }))
            }))
        };
        Me.prototype.triggerEvent = function (e) {
            te(e, "dialog", this.$element, this)
        }, Me.prototype.readjust = function () {
            if (De) {
                var e = De.$element, t = e.children(".mdui-dialog-title"), n = e.children(".mdui-dialog-content"),
                    i = e.children(".mdui-dialog-actions");
                e.height(""), n.height("");
                var o = e.height();
                e.css({
                    top: (S.height() - o) / 2 + "px",
                    height: o + "px"
                }), n.innerHeight(o - (t.innerHeight() || 0) - (i.innerHeight() || 0))
            }
        }, Me.prototype.hashchangeEvent = function () {
            window.location.hash.substring(1).indexOf("mdui-dialog") < 0 && De.close(!0)
        }, Me.prototype.overlayClick = function (e) {
            (0, x.Z)(e.target).hasClass("mdui-overlay") && De && De.close()
        }, Me.prototype.transitionEnd = function () {
            this.$element.hasClass("mdui-dialog-open") ? (this.state = "opened", this.triggerEvent("opened")) : (this.state = "closed", this.triggerEvent("closed"), this.$element.hide(), Ze(Ae).length || De || !qe || (x.Z.unlockScreen(), qe = !1), S.off("resize", x.Z.throttle(this.readjust, 100)), this.options.destroyOnClosed && this.destroy())
        }, Me.prototype.doOpen = function () {
            var e = this;
            if (De = this, qe || (x.Z.lockScreen(), qe = !0), this.$element.show(), this.readjust(), S.on("resize", x.Z.throttle(this.readjust, 100)), this.state = "opening", this.triggerEvent("open"), this.$element.addClass("mdui-dialog-open").transitionEnd((function () {
                return e.transitionEnd()
            })), Ne || (Ne = x.Z.showOverlay(5100)), this.options.modal ? Ne.off("click", this.overlayClick) : Ne.on("click", this.overlayClick), Ne.css("opacity", this.options.overlay ? "" : 0), this.options.history) {
                var t = window.location.hash.substring(1);
                t.indexOf("mdui-dialog") > -1 && (t = t.replace(/[&?]?mdui-dialog/g, "")), window.location.hash = t ? t + (t.indexOf("?") > -1 ? "&" : "?") + "mdui-dialog" : "mdui-dialog", S.on("hashchange", this.hashchangeEvent)
            }
        }, Me.prototype.isOpen = function () {
            return "opening" === this.state || "opened" === this.state
        }, Me.prototype.open = function () {
            var e = this;
            this.isOpen() || (De && ("opening" === De.state || "opened" === De.state) || Ze(Ae).length ? Ze(Ae, (function () {
                return e.doOpen()
            })) : this.doOpen())
        }, Me.prototype.close = function (e) {
            var t = this;
            void 0 === e && (e = !1), setTimeout((function () {
                t.isOpen() && (De = null, t.state = "closing", t.triggerEvent("close"), !Ze(Ae).length && Ne && (x.Z.hideOverlay(), Ne = null, (0, x.Z)(".mdui-overlay").css("z-index", 2e3)), t.$element.removeClass("mdui-dialog-open").transitionEnd((function () {
                    return t.transitionEnd()
                })), t.options.history && !Ze(Ae).length && (e || window.history.back(), S.off("hashchange", t.hashchangeEvent)), setTimeout((function () {
                    Ie(Ae)
                }), 100))
            }))
        }, Me.prototype.toggle = function () {
            this.isOpen() ? this.close() : this.open()
        }, Me.prototype.getState = function () {
            return this.state
        }, Me.prototype.destroy = function () {
            this.append && this.$element.remove(), Ze(Ae).length || De || (Ne && (x.Z.hideOverlay(), Ne = null), qe && (x.Z.unlockScreen(), qe = !1))
        }, Me.prototype.handleUpdate = function () {
            this.readjust()
        }, k.on("keydown", (function (e) {
            De && De.options.closeOnEsc && "opened" === De.state && 27 === e.keyCode && De.close()
        })), X.Z.Dialog = Me;
        var Le = {
            text: "", bold: !1, close: !0, onClick: function () {
            }
        }, $e = {
            title: "",
            content: "",
            buttons: [],
            stackedButtons: !1,
            cssClass: "",
            history: !0,
            overlay: !0,
            modal: !1,
            closeOnEsc: !0,
            destroyOnClosed: !0,
            onOpen: function () {
            },
            onOpened: function () {
            },
            onClose: function () {
            },
            onClosed: function () {
            }
        };
        X.Z.dialog = function (e) {
            var t, n;
            e = ee({}, $e, e), (0, T.Z)(e.buttons, (function (t, n) {
                e.buttons[t] = ee({}, Le, n)
            }));
            var i = "";
            (null === (t = e.buttons) || void 0 === t ? void 0 : t.length) && (i = '<div class="mdui-dialog-actions' + (e.stackedButtons ? " mdui-dialog-actions-stacked" : "") + '">', (0, T.Z)(e.buttons, (function (e, t) {
                i += '<a href="javascript:void(0)" class="mdui-btn mdui-ripple mdui-text-color-primary ' + (t.bold ? "mdui-btn-bold" : "") + '">' + t.text + "</a>"
            })), i += "</div>");
            var o = '<div class="mdui-dialog ' + e.cssClass + '">' + (e.title ? '<div class="mdui-dialog-title">' + e.title + "</div>" : "") + (e.content ? '<div class="mdui-dialog-content">' + e.content + "</div>" : "") + i + "</div>",
                a = new X.Z.Dialog(o, {
                    history: e.history,
                    overlay: e.overlay,
                    modal: e.modal,
                    closeOnEsc: e.closeOnEsc,
                    destroyOnClosed: e.destroyOnClosed
                });
            return (null === (n = e.buttons) || void 0 === n ? void 0 : n.length) && a.$element.find(".mdui-dialog-actions .mdui-btn").each((function (t, n) {
                (0, x.Z)(n).on("click", (function () {
                    e.buttons[t].onClick(a), e.buttons[t].close && a.close()
                }))
            })), a.$element.on("open.mdui.dialog", (function () {
                e.onOpen(a)
            })).on("opened.mdui.dialog", (function () {
                e.onOpened(a)
            })).on("close.mdui.dialog", (function () {
                e.onClose(a)
            })).on("closed.mdui.dialog", (function () {
                e.onClosed(a)
            })), a.open(), a
        };
        var Pe = {
            confirmText: "ok",
            cancelText: "cancel",
            history: !0,
            modal: !1,
            closeOnEsc: !0,
            closeOnCancel: !0,
            closeOnConfirm: !0
        };
        X.Z.confirm = function (e, t, n, i, o) {
            return (0, Z.mf)(t) && (o = i, i = n, n = t, t = ""), (0, Z.o8)(n) && (n = function () {
            }), (0, Z.o8)(i) && (i = function () {
            }), (0, Z.o8)(o) && (o = {}), o = ee({}, Pe, o), X.Z.dialog({
                title: t,
                content: e,
                buttons: [{text: o.cancelText, bold: !1, close: o.closeOnCancel, onClick: i}, {
                    text: o.confirmText,
                    bold: !1,
                    close: o.closeOnConfirm,
                    onClick: n
                }],
                cssClass: "mdui-dialog-confirm",
                history: o.history,
                modal: o.modal,
                closeOnEsc: o.closeOnEsc
            })
        }, x.Z.fn.transformOrigin = function (e) {
            return this.each((function () {
                this.style.webkitTransformOrigin = e, this.style.transformOrigin = e
            }))
        };
        var je = {};
        x.Z.guid = function (e) {
            if (!(0, Z.o8)(e) && !(0, Z.o8)(je[e])) return je[e];

            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            var n = "_" + t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
            return (0, Z.o8)(e) || (je[e] = n), n
        };
        var Ue = {position: "auto", delay: 0, content: ""}, He = function (e, t) {
            void 0 === t && (t = {}), this.options = ee({}, Ue), this.state = "closed", this.timeoutId = null, this.$target = (0, x.Z)(e).first(), ee(this.options, t), this.$element = (0, x.Z)('<div class="mdui-tooltip" id="' + x.Z.guid() + '">' + this.options.content + "</div>").appendTo(document.body);
            var n = this;
            this.$target.on("touchstart mouseenter", (function (e) {
                n.isDisabled(this) || me(e) && (fe(e), n.open())
            })).on("touchend mouseleave", (function (e) {
                n.isDisabled(this) || me(e) && n.close()
            })).on(de, (function (e) {
                n.isDisabled(this) || fe(e)
            }))
        };
        He.prototype.isDisabled = function (e) {
            return e.disabled || void 0 !== (0, x.Z)(e).attr("disabled")
        }, He.prototype.isDesktop = function () {
            return S.width() > 1024
        }, He.prototype.setPosition = function () {
            var e, t, n = this.$target[0].getBoundingClientRect(), i = this.isDesktop() ? 14 : 24,
                o = this.$element[0].offsetWidth, a = this.$element[0].offsetHeight, r = this.options.position;
            switch ("auto" === r && (r = n.top + n.height + i + a + 2 < S.height() ? "bottom" : i + a + 2 < n.top ? "top" : i + o + 2 < n.left ? "left" : n.width + i + o + 2 < S.width() - n.left ? "right" : "bottom"), r) {
                case"bottom":
                    e = o / 2 * -1, t = n.height / 2 + i, this.$element.transformOrigin("top center");
                    break;
                case"top":
                    e = o / 2 * -1, t = -1 * (a + n.height / 2 + i), this.$element.transformOrigin("bottom center");
                    break;
                case"left":
                    e = -1 * (o + n.width / 2 + i), t = a / 2 * -1, this.$element.transformOrigin("center right");
                    break;
                case"right":
                    e = n.width / 2 + i, t = a / 2 * -1, this.$element.transformOrigin("center left")
            }
            var s = this.$target.offset();
            this.$element.css({
                top: s.top + n.height / 2 + "px",
                left: s.left + n.width / 2 + "px",
                "margin-left": e + "px",
                "margin-top": t + "px"
            })
        }, He.prototype.triggerEvent = function (e) {
            te(e, "tooltip", this.$target, this)
        }, He.prototype.transitionEnd = function () {
            this.$element.hasClass("mdui-tooltip-open") ? (this.state = "opened", this.triggerEvent("opened")) : (this.state = "closed", this.triggerEvent("closed"))
        }, He.prototype.isOpen = function () {
            return "opening" === this.state || "opened" === this.state
        }, He.prototype.doOpen = function () {
            var e = this;
            this.state = "opening", this.triggerEvent("open"), this.$element.addClass("mdui-tooltip-open").transitionEnd((function () {
                return e.transitionEnd()
            }))
        }, He.prototype.open = function (e) {
            var t = this;
            if (!this.isOpen()) {
                var n = ee({}, this.options);
                e && ee(this.options, e), n.content !== this.options.content && this.$element.html(this.options.content), this.setPosition(), this.options.delay ? this.timeoutId = setTimeout((function () {
                    return t.doOpen()
                }), this.options.delay) : (this.timeoutId = null, this.doOpen())
            }
        }, He.prototype.close = function () {
            var e = this;
            this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null), this.isOpen() && (this.state = "closing", this.triggerEvent("close"), this.$element.removeClass("mdui-tooltip-open").transitionEnd((function () {
                return e.transitionEnd()
            })))
        }, He.prototype.toggle = function () {
            this.isOpen() ? this.close() : this.open()
        }, He.prototype.getState = function () {
            return this.state
        }, X.Z.Tooltip = He;
        var Ke = "mdui-tooltip", Be = "_mdui_tooltip";
        (0, x.Z)((function () {
            k.on("touchstart mouseover", "[mdui-tooltip]", (function () {
                var e = (0, x.Z)(this), t = e.data(Be);
                t || (t = new X.Z.Tooltip(this, xe(this, Ke)), e.data(Be, t))
            }))
        }));
        var Ge = {
            message: "",
            timeout: 4e3,
            position: "bottom",
            buttonText: "",
            buttonColor: "",
            closeOnButtonClick: !0,
            closeOnOutsideClick: !0,
            onClick: function () {
            },
            onButtonClick: function () {
            },
            onOpen: function () {
            },
            onOpened: function () {
            },
            onClose: function () {
            },
            onClosed: function () {
            }
        }, ze = null, Fe = "_mdui_snackbar", Ye = function (e) {
            this.options = ee({}, Ge), this.state = "closed", this.timeoutId = null, ee(this.options, e);
            var t = "", n = "";
            0 === this.options.buttonColor.indexOf("#") || 0 === this.options.buttonColor.indexOf("rgb") ? t = 'style="color:' + this.options.buttonColor + '"' : "" !== this.options.buttonColor && (n = "mdui-text-color-" + this.options.buttonColor), this.$element = (0, x.Z)('<div class="mdui-snackbar"><div class="mdui-snackbar-text">' + this.options.message + "</div>" + (this.options.buttonText ? '<a href="javascript:void(0)" class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white ' + n + '" ' + t + ">" + this.options.buttonText + "</a>" : "") + "</div>").appendTo(document.body), this.setPosition("close"), this.$element.reflow().addClass("mdui-snackbar-" + this.options.position)
        };

        function Qe(e) {
            return void 0 === e && (e = !1), '<div class="mdui-spinner-layer ' + (e ? "mdui-spinner-layer-" + e : "") + '"><div class="mdui-spinner-circle-clipper mdui-spinner-left"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-gap-patch"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-circle-clipper mdui-spinner-right"><div class="mdui-spinner-circle"></div></div></div>'
        }

        function We(e) {
            var t = (0, x.Z)(e), n = t.hasClass("mdui-spinner-colorful") ? Qe(1) + Qe(2) + Qe(3) + Qe(4) : Qe();
            t.html(n)
        }

        Ye.prototype.closeOnOutsideClick = function (e) {
            var t = (0, x.Z)(e.target);
            t.hasClass("mdui-snackbar") || t.parents(".mdui-snackbar").length || ze.close()
        }, Ye.prototype.setPosition = function (e) {
            var t, n, i = this.$element[0].clientHeight, o = this.options.position;
            t = "bottom" === o || "top" === o ? "-50%" : "0", "open" === e ? n = "0" : ("bottom" === o && (n = i), "top" === o && (n = -i), "left-top" !== o && "right-top" !== o || (n = -i - 24), "left-bottom" !== o && "right-bottom" !== o || (n = i + 24)), this.$element.transform("translate(" + t + "," + n + "px")
        }, Ye.prototype.open = function () {
            var e = this;
            "opening" !== this.state && "opened" !== this.state && (ze ? Ze(Fe, (function () {
                return e.open()
            })) : (ze = this, this.state = "opening", this.options.onOpen(this), this.setPosition("open"), this.$element.transitionEnd((function () {
                "opening" === e.state && (e.state = "opened", e.options.onOpened(e), e.options.buttonText && e.$element.find(".mdui-snackbar-action").on("click", (function () {
                    e.options.onButtonClick(e), e.options.closeOnButtonClick && e.close()
                })), e.$element.on("click", (function (t) {
                    (0, x.Z)(t.target).hasClass("mdui-snackbar-action") || e.options.onClick(e)
                })), e.options.closeOnOutsideClick && k.on(se, e.closeOnOutsideClick), e.options.timeout && (e.timeoutId = setTimeout((function () {
                    return e.close()
                }), e.options.timeout)))
            }))))
        }, Ye.prototype.close = function () {
            var e = this;
            "closing" !== this.state && "closed" !== this.state && (this.timeoutId && clearTimeout(this.timeoutId), this.options.closeOnOutsideClick && k.off(se, this.closeOnOutsideClick), this.state = "closing", this.options.onClose(this), this.setPosition("close"), this.$element.transitionEnd((function () {
                "closing" === e.state && (ze = null, e.state = "closed", e.options.onClosed(e), e.$element.remove(), Ie(Fe))
            })))
        }, X.Z.snackbar = function (e, t) {
            void 0 === t && (t = {}), (0, Z.HD)(e) ? t.message = e : t = e;
            var n = new Ye(t);
            return n.open(), n
        }, (0, x.Z)((function () {
            X.Z.mutation(".mdui-spinner", (function () {
                We(this)
            }))
        })), X.Z.updateSpinners = function (e) {
            ((0, Z.o8)(e) ? (0, x.Z)(".mdui-spinner") : (0, x.Z)(e)).each((function () {
                We(this)
            }))
        };
        var Je = {
            position: "auto",
            align: "auto",
            gutter: 16,
            fixed: !1,
            covered: "auto",
            subMenuTrigger: "hover",
            subMenuDelay: 200
        }, Ve = function (e, t, n) {
            var i = this;
            if (void 0 === n && (n = {}), this.options = ee({}, Je), this.state = "closed", this.$anchor = (0, x.Z)(e).first(), this.$element = (0, x.Z)(t).first(), !this.$anchor.parent().is(this.$element.parent())) throw new Error("anchorSelector and menuSelector must be siblings");
            ee(this.options, n), this.isCascade = this.$element.hasClass("mdui-menu-cascade"), this.isCovered = "auto" === this.options.covered ? !this.isCascade : this.options.covered, this.$anchor.on("click", (function () {
                return i.toggle()
            })), k.on("click touchstart", (function (e) {
                var t = (0, x.Z)(e.target);
                !i.isOpen() || t.is(i.$element) || j(i.$element[0], t[0]) || t.is(i.$anchor) || j(i.$anchor[0], t[0]) || i.close()
            }));
            var o = this;
            k.on("click", ".mdui-menu-item", (function () {
                var e = (0, x.Z)(this);
                e.find(".mdui-menu").length || void 0 !== e.attr("disabled") || o.close()
            })), this.bindSubMenuEvent(), S.on("resize", x.Z.throttle((function () {
                return i.readjust()
            }), 100))
        };
        Ve.prototype.isOpen = function () {
            return "opening" === this.state || "opened" === this.state
        }, Ve.prototype.triggerEvent = function (e) {
            te(e, "menu", this.$element, this)
        }, Ve.prototype.readjust = function () {
            var e, t, n, i, o, a, r = S.height(), s = S.width(), c = this.options.gutter, l = this.isCovered,
                u = this.options.fixed, d = this.$element.width(), p = this.$element.height(),
                m = this.$anchor[0].getBoundingClientRect(), f = m.top, h = m.left, g = m.height, _ = m.width,
                v = r - f - g, w = s - h - _, b = this.$anchor[0].offsetTop, y = this.$anchor[0].offsetLeft;
            if (n = "auto" === this.options.position ? v + (l ? g : 0) > p + c ? "bottom" : f + (l ? g : 0) > p + c ? "top" : "center" : this.options.position, i = "auto" === this.options.align ? w + _ > d + c ? "left" : h + _ > d + c ? "right" : "center" : this.options.align, "bottom" === n) a = "0", t = (l ? 0 : g) + (u ? f : b); else if ("top" === n) a = "100%", t = (l ? g : 0) + (u ? f - p : b - p); else {
                a = "50%";
                var x = p;
                this.isCascade || p + 2 * c > r && (x = r - 2 * c, this.$element.height(x)), t = (r - x) / 2 + (u ? 0 : b - f)
            }
            if (this.$element.css("top", t + "px"), "left" === i) o = "0", e = u ? h : y; else if ("right" === i) o = "100%", e = u ? h + _ - d : y + _ - d; else {
                o = "50%";
                var k = d;
                d + 2 * c > s && (k = s - 2 * c, this.$element.width(k)), e = (s - k) / 2 + (u ? 0 : y - h)
            }
            this.$element.css("left", e + "px"), this.$element.transformOrigin(o + " " + a)
        }, Ve.prototype.readjustSubmenu = function (e) {
            var t, n, i, o, a, r, s = e.parent(".mdui-menu-item"), c = S.height(), l = S.width(), u = e.width(),
                d = e.height(), p = s[0].getBoundingClientRect(), m = p.width, f = p.height, h = p.left, g = p.top;
            o = l - h - m > u ? "left" : h > u ? "right" : "left", "bottom" === (i = c - g > d ? "bottom" : g + f > d ? "top" : "bottom") ? (r = "0", t = "0") : "top" === i && (r = "100%", t = -d + f), e.css("top", t + "px"), "left" === o ? (a = "0", n = m) : "right" === o && (a = "100%", n = -u), e.css("left", n + "px"), e.transformOrigin(a + " " + r)
        }, Ve.prototype.openSubMenu = function (e) {
            this.readjustSubmenu(e), e.addClass("mdui-menu-open").parent(".mdui-menu-item").addClass("mdui-menu-item-active")
        }, Ve.prototype.closeSubMenu = function (e) {
            e.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((function () {
                return e.removeClass("mdui-menu-closing")
            })).parent(".mdui-menu-item").removeClass("mdui-menu-item-active"), e.find(".mdui-menu").each((function (e, t) {
                var n = (0, x.Z)(t);
                n.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((function () {
                    return n.removeClass("mdui-menu-closing")
                })).parent(".mdui-menu-item").removeClass("mdui-menu-item-active")
            }))
        }, Ve.prototype.toggleSubMenu = function (e) {
            e.hasClass("mdui-menu-open") ? this.closeSubMenu(e) : this.openSubMenu(e)
        }, Ve.prototype.bindSubMenuEvent = function () {
            var e = this;
            if (this.$element.on("click", ".mdui-menu-item", (function (t) {
                var n = (0, x.Z)(this), i = (0, x.Z)(t.target);
                if (void 0 === n.attr("disabled") && !i.is(".mdui-menu") && !i.is(".mdui-divider") && i.parents(".mdui-menu-item").first().is(n)) {
                    var o = n.children(".mdui-menu");
                    n.parent(".mdui-menu").children(".mdui-menu-item").each((function (t, n) {
                        var i = (0, x.Z)(n).children(".mdui-menu");
                        !i.length || o.length && i.is(o) || e.closeSubMenu(i)
                    })), o.length && e.toggleSubMenu(o)
                }
            })), "hover" === this.options.subMenuTrigger) {
                var t = null, n = null;
                this.$element.on("mouseover mouseout", ".mdui-menu-item", (function (i) {
                    var o = (0, x.Z)(this), a = i.type, r = (0, x.Z)(i.relatedTarget);
                    if (void 0 === o.attr("disabled")) {
                        if ("mouseover" === a) {
                            if (!o.is(r) && j(o[0], r[0])) return
                        } else if ("mouseout" === a && (o.is(r) || j(o[0], r[0]))) return;
                        var s = o.children(".mdui-menu");
                        if ("mouseover" === a) {
                            if (s.length) {
                                var c = s.data("timeoutClose.mdui.menu");
                                if (c && clearTimeout(c), s.hasClass("mdui-menu-open")) return;
                                clearTimeout(n), t = n = setTimeout((function () {
                                    return e.openSubMenu(s)
                                }), e.options.subMenuDelay), s.data("timeoutOpen.mdui.menu", t)
                            }
                        } else if ("mouseout" === a && s.length) {
                            var l = s.data("timeoutOpen.mdui.menu");
                            l && clearTimeout(l), t = setTimeout((function () {
                                return e.closeSubMenu(s)
                            }), e.options.subMenuDelay), s.data("timeoutClose.mdui.menu", t)
                        }
                    }
                }))
            }
        }, Ve.prototype.transitionEnd = function () {
            this.$element.removeClass("mdui-menu-closing"), "opening" === this.state && (this.state = "opened", this.triggerEvent("opened")), "closing" === this.state && (this.state = "closed", this.triggerEvent("closed"), this.$element.css({
                top: "",
                left: "",
                width: "",
                position: "fixed"
            }))
        }, Ve.prototype.toggle = function () {
            this.isOpen() ? this.close() : this.open()
        }, Ve.prototype.open = function () {
            var e = this;
            this.isOpen() || (this.state = "opening", this.triggerEvent("open"), this.readjust(), this.$element.css("position", this.options.fixed ? "fixed" : "absolute").addClass("mdui-menu-open").transitionEnd((function () {
                return e.transitionEnd()
            })))
        }, Ve.prototype.close = function () {
            var e = this;
            this.isOpen() && (this.state = "closing", this.triggerEvent("close"), this.$element.find(".mdui-menu").each((function (t, n) {
                e.closeSubMenu((0, x.Z)(n))
            })), this.$element.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((function () {
                return e.transitionEnd()
            })))
        }, X.Z.Menu = Ve;
        var Xe = "mdui-menu", et = "_mdui_menu";
        (0, x.Z)((function () {
            k.on("click", "[mdui-menu]", (function () {
                var e = (0, x.Z)(this), t = e.data(et);
                if (!t) {
                    var n = xe(this, Xe), i = n.target;
                    delete n.target, t = new X.Z.Menu(e, i, n), e.data(et, t), t.toggle()
                }
            }))
        }));
        var tt = __webpack_require__(655), nt = __webpack_require__(616), it = {}, ot = "start.mdui.ajax",
            at = "success.mdui.ajax", rt = "error.mdui.ajax", st = "complete.mdui.ajax";

        function ct(e) {
            return ["GET", "HEAD"].indexOf(e) >= 0
        }

        function lt(e, t) {
            return (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        const ut = function (e) {
            var t, n = !1, i = {}, o = function (e) {
                    var t = {
                        url: "",
                        method: "GET",
                        data: "",
                        processData: !0,
                        async: !0,
                        cache: !0,
                        username: "",
                        password: "",
                        headers: {},
                        xhrFields: {},
                        statusCode: {},
                        dataType: "text",
                        contentType: "application/x-www-form-urlencoded",
                        timeout: 0,
                        global: !0
                    };
                    return (0, T.Z)(it, (function (e, n) {
                        ["beforeSend", "success", "error", "complete", "statusCode"].indexOf(e) < 0 && !(0, Z.o8)(n) && (t[e] = n)
                    })), ee({}, t, e)
                }(e), a = o.url || window.location.toString(), r = o.method.toUpperCase(), s = o.data, c = o.processData,
                l = o.async, u = o.cache, d = o.username, p = o.password, m = o.headers, f = o.xhrFields,
                h = o.statusCode, g = o.dataType, _ = o.contentType, v = o.timeout, w = o.global;

            function b(e, t, i) {
                for (var a, r, s = [], c = arguments.length - 3; c-- > 0;) s[c] = arguments[c + 3];
                w && (0, x.Z)(document).trigger(e, t), i && (i in it && (a = it[i].apply(it, s)), o[i] && (r = o[i].apply(o, s)), "beforeSend" !== i || !1 !== a && !1 !== r || (n = !0))
            }

            return !s || !ct(r) && !c || (0, Z.HD)(s) || s instanceof ArrayBuffer || s instanceof Blob || s instanceof Document || s instanceof FormData || (s = (0, nt.Z)(s)), s && ct(r) && (a = lt(a, s), s = null), new Promise((function (e, c) {
                ct(r) && !u && (a = lt(a, "_=" + Date.now()));
                var w, y = new XMLHttpRequest;
                y.open(r, a, l, d, p), (_ || s && !ct(r) && !1 !== _) && y.setRequestHeader("Content-Type", _), "json" === g && y.setRequestHeader("Accept", "application/json, text/javascript"), m && (0, T.Z)(m, (function (e, t) {
                    (0, Z.o8)(t) || y.setRequestHeader(e, t + "")
                })), /^([\w-]+:)?\/\/([^/]+)/.test(a) && RegExp.$2 !== window.location.host || y.setRequestHeader("X-Requested-With", "XMLHttpRequest"), f && (0, T.Z)(f, (function (e, t) {
                    y[e] = t
                })), i.xhr = y, i.options = o, y.onload = function () {
                    w && clearTimeout(w);
                    var n, o = y.status >= 200 && y.status < 300 || 304 === y.status || 0 === y.status;
                    if (o) if (t = 204 === y.status || "HEAD" === r ? "nocontent" : 304 === y.status ? "notmodified" : "success", "json" === g) {
                        try {
                            n = "HEAD" === r ? void 0 : JSON.parse(y.responseText), i.data = n
                        } catch (e) {
                            b(rt, i, "error", y, t = "parsererror"), c(new Error(t))
                        }
                        "parsererror" !== t && (b(at, i, "success", n, t, y), e(n))
                    } else n = "HEAD" === r ? void 0 : "text" === y.responseType || "" === y.responseType ? y.responseText : y.response, i.data = n, b(at, i, "success", n, t, y), e(n); else b(rt, i, "error", y, t = "error"), c(new Error(t));
                    (0, T.Z)([it.statusCode, h], (function (e, i) {
                        i && i[y.status] && (o ? i[y.status](n, t, y) : i[y.status](y, t))
                    })), b(st, i, "complete", y, t)
                }, y.onerror = function () {
                    w && clearTimeout(w), b(rt, i, "error", y, y.statusText), b(st, i, "complete", y, "error"), c(new Error(y.statusText))
                }, y.onabort = function () {
                    var e = "abort";
                    w && (e = "timeout", clearTimeout(w)), b(rt, i, "error", y, e), b(st, i, "complete", y, e), c(new Error(e))
                }, b(ot, i, "beforeSend", y), n ? c(new Error("cancel")) : (v > 0 && (w = setTimeout((function () {
                    y.abort()
                }), v)), y.send(s))
            }))
        };
        var dt = __webpack_require__(125), pt = function () {
        };
        pt.prototype.getStorage = function (e) {
            return window.localStorage.getItem(e)
        }, pt.prototype.setStorage = function (e, t) {
            window.localStorage.setItem(e, t)
        }, pt.prototype.removeStorage = function (e) {
            window.localStorage.removeItem(e)
        };
        const mt = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.request = function (e) {
                var t = e.data instanceof FormData, n = {token: this.getStorage("token") || void 0};
                return e.headers && (n = ee({}, n, e.headers)), new Promise((function (i, o) {
                    ut({
                        method: e.method || dt.HT,
                        url: "" + tt.Z.apiPath + (e.url || ""),
                        data: t ? e.data : JSON.stringify(e.data),
                        headers: n,
                        dataType: "json",
                        contentType: !t && "application/json",
                        timeout: tt.Z.timeout,
                        global: !1,
                        beforeSend: function () {
                            tt.Z.beforeSend && tt.Z.beforeSend()
                        },
                        success: function (e) {
                            tt.Z.success && tt.Z.success(e), 0 === e.code ? i(e) : o(e)
                        },
                        error: function (e, t) {
                            tt.Z.error && tt.Z.error(t), o({code: 999999, message: t})
                        },
                        complete: function () {
                            tt.Z.complete && tt.Z.complete()
                        }
                    })
                }))
            }, t
        }(pt);

        function ft(e, t, n) {
            void 0 === n && (n = 1296e3);
            var i = new Date;
            i.setTime(i.getTime() + 1e3 * n), document.cookie = e + "=" + t + "; expires=" + i.toUTCString() + "; path=/"
        }

        tt.Z.apiPath = window.G_API, tt.Z.adapter = new mt, tt.Z.error = function () {
        };
        var ht = tt.Z.adapter.getStorage("token");
        ht && ft("token", ht), window.top === window && window.console && !(0, Z.w1)() && setTimeout((function () {
            window.console.log("%c%s", "color: red; background: yellow; font-size: 24px;", "警告！"), window.console.log("%c%s", "color: black; font-size: 18px;", "使用此控制台可能会让攻击者利用 Self-XSS（自跨站脚本）攻击来冒充你，并窃取你的信息。\n请勿输入或粘贴你不明白的代码。")
        }));
        var gt = __webpack_require__(50), _t = __webpack_require__(685), vt = function (e) {
            return (0, gt.j0)((0, _t.K)("/topics/{topic_id}/followers", e))
        }, wt = function (e) {
            return (0, gt.Jl)((0, _t.K)("/topics/{topic_id}/followers", e))
        }, bt = function (e) {
            return void 0 === e && (e = {}), (0, gt.A_)((0, _t.K)("/topics", e, ["page", "per_page", "include", "order", "topic_id", "name", "trashed"]))
        }, yt = function (e) {
            return (0, gt.j0)((0, _t.K)("/questions/{question_id}/followers", e))
        }, xt = function (e) {
            return (0, gt.j0)((0, _t.K)("/questions/{question_id}/comments", e, ["include"]), (0, _t.o)(e, ["content"]))
        }, kt = function (e) {
            return (0, gt.Jl)((0, _t.K)("/questions/{question_id}/followers", e))
        }, St = function (e) {
            return void 0 === e && (e = {}), (0, gt.A_)((0, _t.K)("/questions", e, ["page", "per_page", "order", "include", "question_id", "user_id", "topic_id", "trashed"]))
        }, Et = function (e) {
            return (0, gt.j0)((0, _t.K)("/articles/{article_id}/followers", e))
        }, Ct = function (e) {
            return (0, gt.j0)((0, _t.K)("/articles/{article_id}/comments", e, ["include"]), (0, _t.o)(e, ["content"]))
        }, Ot = function (e) {
            return (0, gt.Jl)((0, _t.K)("/articles/{article_id}/followers", e))
        }, Tt = function (e) {
            return void 0 === e && (e = {}), (0, gt.A_)((0, _t.K)("/articles", e, ["page", "per_page", "order", "include", "article_id", "user_id", "topic_id", "trashed"]))
        }, Zt = __webpack_require__(567);

        function It() {
            return window.app.user.getState().user
        }

        var Nt = __webpack_require__(822), Rt = function (e) {
            return e.indexOf("question") ? e.indexOf("user") ? e.indexOf("topic") && "index_topics" !== e ? Et : vt : Zt.R3 : yt
        }, Dt = function (e) {
            return e.indexOf("question") ? e.indexOf("user") ? e.indexOf("topic") && "index_topics" !== e ? Ot : wt : Zt.VR : kt
        };
        const At = {
            toggleFollow: function (e) {
                var t = e.type, n = e.dataName;
                void 0 === n && (n = null);
                var i = e.primaryKey;
                void 0 === i && (i = null);
                var o = e.id;
                return void 0 === o && (o = null), function (e, a) {
                    It() ? ["article", "question", "user", "topic"].indexOf(t) > -1 ? function (e, t, n) {
                        var i, o = "user" === e ? "interviewee" : e, a = e + "_id", r = "following_" + o, s = t[o];
                        if (!t[r]) {
                            n.setState(((i = {})[r] = !0, i));
                            var c = function () {
                                var e;
                                s.relationships.is_following = !s.relationships.is_following, n.setState(((e = {})[o] = s, e))
                            };
                            c();
                            var l = {};
                            l[a] = s[a], (s.relationships.is_following ? Rt(e) : Dt(e))(l).finally((function () {
                                var e;
                                return n.setState(((e = {})[r] = !1, e))
                            })).then((function (t) {
                                var i;
                                O(e + "s_follow_updated"), s.follower_count = t.data.follower_count, n.setState(((i = {})[o] = s, i))
                            })).catch((function (e) {
                                (0, Nt.Z)(e), c()
                            }))
                        }
                    }(t, e, a) : ["users", "topics", "index_topics", "users_dialog"].indexOf(t) > -1 ? function (e, t, n, i) {
                        var o = {
                            users: function () {
                                return [n.tabs[n.tabIndex] + "_data", "user", "user_id"]
                            }, topics: function () {
                                return [n.tabs[n.tabIndex] + "_data", "topic", "topic_id"]
                            }, users_dialog: function () {
                                return ["data", "user", "user_id"]
                            }, index_topics: function () {
                                return ["topics_data", "topic", "topic_id"]
                            }
                        }[e](), a = o[0], r = o[1], s = o[2], c = n[a];
                        c.forEach((function (n, o) {
                            if (n[s] === t) {
                                var l, u = function () {
                                    var e;
                                    c[o].relationships.is_following = !n.relationships.is_following, i.setState(((e = {})[a] = c, e))
                                };
                                u(), (n.relationships.is_following ? Rt(e) : Dt(e))(((l = {})[s] = t, l)).then((function () {
                                    O(r + "s_follow_updated")
                                })).catch((function (e) {
                                    (0, Nt.Z)(e), u()
                                }))
                            }
                        }))
                    }(t, o, e, a) : ["relationships-user"].indexOf(t) > -1 && ("article" === n || "question" === n ? function (e, t, n) {
                        var i = n.getState()[t], o = function () {
                            var e;
                            i.relationships.user.relationships.is_following = !i.relationships.user.relationships.is_following, n.setState(((e = {})[t] = i, e))
                        };
                        o(), (i.relationships.user.relationships.is_following ? Zt.R3 : Zt.VR)({user_id: i.user_id}).then((function () {
                            O("users_follow_updated")
                        })).catch((function (e) {
                            (0, Nt.Z)(e), o()
                        }))
                    }(0, n, a) : function (e, t, n, i) {
                        var o;
                        "comments_data" === n ? (o = window.app.comments.getState(), i = window.app.comments) : o = i.getState();
                        var a = o[n];
                        a.forEach((function (o, r) {
                            if (o[e] === t) {
                                var s = function () {
                                    var e, t = o.relationships.user.relationships.is_following;
                                    a[r].relationships.user.relationships.is_following = !t, i.setState(((e = {})[n] = a, e))
                                };
                                s(), (o.relationships.user.relationships.is_following ? Zt.R3 : Zt.VR)({user_id: o.user_id}).then((function () {
                                    O("users_follow_updated")
                                })).catch((function (e) {
                                    (0, Nt.Z)(e), s()
                                }))
                            }
                        }))
                    }(i, o, n, a)) : O("login_open")
                }
            }
        };
        var qt = (0, x.Z)("title");
        const Mt = ee({
            setState: function (e) {
                return e
            }, getState: function () {
                return function (e) {
                    return e
                }
            }, setTitle: function (e) {
                var t = e ? e + " - " + window.G_OPTIONS.site_name : window.G_OPTIONS.site_name + (window.G_OPTIONS.site_description ? " - " + window.G_OPTIONS.site_description : "");
                qt.text(t)
            }
        }, At);
        var Lt, $t = __webpack_require__(381);
        const Pt = ee({
            onCreate: function () {
                return function (e, t) {
                    O("route_update"), t.setTitle(""), e.topics_pagination || t.loadData({
                        localParamName: "G_INDEX_TOPICS",
                        func: bt,
                        fieldPrefix: "topics",
                        include: ["is_following"],
                        order: "-follower_count",
                        per_page: 12
                    });
                    var n = ["user", "topics", "is_following"];
                    e.questions_recent_pagination || t.loadData({
                        localParamName: "G_INDEX_QUESTIONS_RECENT",
                        func: St,
                        fieldPrefix: "questions_recent",
                        include: n,
                        order: "-update_time",
                        per_page: 5
                    }), e.questions_popular_pagination || t.loadData({
                        localParamName: "G_INDEX_QUESTIONS_POPULAR",
                        func: St,
                        fieldPrefix: "questions_popular",
                        include: n,
                        order: "-answer_count",
                        per_page: 5
                    }), e.articles_recent_pagination || t.loadData({
                        localParamName: "G_INDEX_ARTICLES_RECENT",
                        func: Tt,
                        fieldPrefix: "articles_recent",
                        include: n,
                        order: "-create_time",
                        per_page: 5
                    }), e.articles_popular_pagination || t.loadData({
                        localParamName: "G_INDEX_ARTICLES_POPULAR",
                        func: Tt,
                        fieldPrefix: "articles_popular",
                        include: n,
                        order: "-vote_count",
                        per_page: 5
                    }), Lt && (window.scrollTo(0, Lt), Lt = 0)
                }
            }, onDestroy: function () {
            }, loadData: function (e) {
                var t = e.localParamName, n = e.func, i = e.fieldPrefix, o = e.include, a = e.order, r = e.per_page;
                return function (e, s) {
                    var c, l;
                    ((l = window[t]) && (s.setState(((c = {})[i + "_data"] = l.data, c[i + "_pagination"] = l.pagination, c)), window[t] = null), l) || function () {
                        var e;
                        s.setState(((e = {})[i + "_loading"] = !0, e)), n({
                            include: o,
                            order: a,
                            per_page: r
                        }).finally((function () {
                            var e;
                            s.setState(((e = {})[i + "_loading"] = !1, e))
                        })).then((function (e) {
                            var t, n = e.data, o = e.pagination;
                            s.setState(((t = {})[i + "_data"] = n, t[i + "_pagination"] = o, t))
                        })).catch(Nt.Z)
                    }()
                }
            }, afterItemClick: function (e) {
                Lt = window.pageYOffset, (0, Z.o8)(e.topic_id) ? (0, Z.o8)(e.question_id) ? (0, Z.o8)(e.article_id) || (window.G_ARTICLE = e) : window.G_QUESTION = e : window.G_TOPIC = e
            }
        }, Mt, $t.Z);
        var jt = 200001, Ut = 200003, Ht = 200004;
        const Kt = {
            editorOpen: function () {
                return function (e, t) {
                    if (It()) {
                        try {
                            var n = JSON.parse(window.localStorage.getItem(e.auto_save_key + "-topics"));
                            n && t.setState({
                                editor_selected_topics: n, editor_selected_topic_ids: n.map((function (e) {
                                    return e.topic_id
                                }))
                            })
                        } catch (e) {
                        }
                        t.setState({editor_open: !0}), t.editorUpdateOverlay()
                    } else O("login_open")
                }
            }, editorClose: function () {
                return function (e, t) {
                    t.setState({editor_open: !1}), t.editorUpdateOverlay()
                }
            }, editorMinimize: function () {
                return function (e, t) {
                    t.setState({editor_minimize: !e.editor_minimize}), t.editorUpdateOverlay()
                }
            }, editorMaximize: function () {
                return function (e, t) {
                    t.setState({editor_minimize: !1, editor_maximize: !e.editor_maximize}), t.editorUpdateOverlay()
                }
            }, editorUpdateOverlay: function () {
                return function (e, t) {
                    var n = t.getState();
                    n.editor_open && n.editor_maximize && !n.editor_minimize ? x.Z.showOverlay() : x.Z.hideOverlay()
                }
            }
        }, Bt = {
            topicSelectorOpen: function () {
                return function (e, t) {
                    var n = new X.Z.Dialog(".mc-topic-selector", {history: !1}),
                        i = n.$element.find(".mdui-dialog-content");
                    t.setState({topics_data: [], topics_pagination: null, topics_loading: !0}), n.open();
                    var o = function (e) {
                        e.finally((function () {
                            t.setState({topics_loading: !1})
                        })).then((function (e) {
                            var n = e.data, i = e.pagination;
                            t.setState({topics_data: t.getState().topics_data.concat(n), topics_pagination: i})
                        })).catch(Nt.Z)
                    }, a = function () {
                        if (!t.getState().topics_loading) {
                            var e = t.getState().topics_pagination;
                            e && (e.page >= e.pages || i[0].scrollHeight - i[0].scrollTop - i[0].offsetHeight > 100 || (t.setState({topics_loading: !0}), o(bt({
                                page: e.page + 1,
                                order: "-follower_count"
                            }))))
                        }
                    };
                    o(bt({order: "-follower_count"})), i.on("scroll", a), n.$element.on("close.mdui.dialog", (function () {
                        i.off("scroll", a)
                    }))
                }
            }, topicSelectorChange: function (e) {
                var t = e.event, n = e.dataIndex;
                return function (e, i) {
                    var o = t.target.checked, a = e.topics_data, r = e.editor_selected_topics,
                        s = e.topics_max_selectable;
                    if (o && r.length >= s) X.Z.snackbar("最多只能选择 " + s + " 个话题"); else {
                        if (o) {
                            var c = r.concat([a[n]]);
                            i.setState({
                                editor_selected_topics: c, editor_selected_topic_ids: c.map((function (e) {
                                    return e.topic_id
                                }))
                            })
                        } else {
                            var l = function (e, t, n) {
                                var i, o = t[e].topic_id;
                                return (0, T.Z)(n, (function (e, t) {
                                    return t.topic_id !== o || (i = e, !1)
                                })), i
                            }(n, a, r);
                            r.splice(l, 1), i.setState({
                                editor_selected_topics: r,
                                editor_selected_topic_ids: r.map((function (e) {
                                    return e.topic_id
                                }))
                            })
                        }
                        i.saveToLocalStorage()
                    }
                }
            }, topicSelectorRemoveOne: function (e) {
                return function (t, n) {
                    var i = t.editor_selected_topics;
                    i.splice(e, 1), n.setState({
                        editor_selected_topics: i,
                        editor_selected_topic_ids: i.map((function (e) {
                            return e.topic_id
                        }))
                    }), n.saveToLocalStorage()
                }
            }, saveToLocalStorage: function () {
                return function (e) {
                    window.localStorage.setItem(e.auto_save_key + "-topics", JSON.stringify(e.editor_selected_topics))
                }
            }
        }, Gt = {
            editor_open: !1,
            editor_maximize: !1,
            editor_minimize: !1,
            editor_selected_topics: [],
            editor_selected_topic_ids: []
        }, zt = {topics_data: [], topics_pagination: null, topics_loading: !1, topics_max_selectable: 10};
        var Ft = ["recent", "popular", "following"],
            Yt = {current_tab: "", publishing: !1, tabs: Ft, last_visit_id: 0, auto_save_key: "page-questions"};
        Ft.forEach((function (e) {
            Yt[e + "_data"] = [], Yt[e + "_pagination"] = null, Yt[e + "_loading"] = !1
        }));
        const Qt = ee(Yt, Gt, zt);

        function Wt(e) {
            return window.G_ROOT + e
        }

        function Jt(e) {
            return window.location.pathname === Wt(e)
        }

        function Vt(e) {
            var t = window.location.pathname.substr(window.G_ROOT.length);
            return e.test(t)
        }

        function Xt() {
            return Jt("/")
        }

        function en() {
            return Vt(/^\/articles\/\d+$/)
        }

        function tn() {
            return Jt("/articles")
        }

        function nn() {
            return Vt(/^\/questions\/\d+$/)
        }

        function on() {
            return Jt("/questions")
        }

        function an() {
            return Vt(/^\/topics\/\d+$/)
        }

        function rn() {
            return Jt("/topics")
        }

        function sn() {
            return Vt(/^\/users\/\d+$/)
        }

        function cn() {
            return Jt("/users")
        }

        function ln() {
            return Jt("/notifications")
        }

        var un = __webpack_require__(966), dn = __webpack_require__.n(un);

        function pn(e, t) {
            void 0 === t && (t = "YYYY-MM-DD HH:mm:ss");
            var n = new Date(1e3 * e);
            return dn()(t, n)
        }

        function mn(e) {
            var t = new Date(1e3 * e), n = Date.parse((new Date).toString()) / 1e3 - e;
            return n < 1 ? "刚刚" : n < 60 ? n + " 秒前" : n < 3600 ? parseInt(String(n / 60), 10) + " 分钟前" : e > Date.parse(new Date((new Date).setHours(0, 0, 0, 0)).toString()) / 1e3 ? "今天 " + dn()("HH:mm", t) : e > Date.parse(new Date((new Date).getFullYear() + "/01/01 00:00:00").toString()) / 1e3 ? dn()("MM-DD HH:mm", t) : dn()("YYYY-MM-DD", t)
        }

        function fn() {
            return Date.parse((new Date).toString()) / 1e3
        }

        var hn, gn, _n = "recent", vn = "popular", wn = "following", bn = Ft.indexOf(_n),
            yn = {recent: !1, popular: !1, following: !1}, xn = {recent: 0, popular: 0, following: 0},
            kn = ["user", "topics", "is_following"], Sn = function (e, t) {
                return e === _n ? St({page: t, include: kn, per_page: 20, order: "-update_time"}) : e === vn ? St({
                    page: t,
                    include: kn,
                    per_page: 20,
                    order: "-vote_count"
                }) : (0, Zt.sc)({page: t, include: kn, per_page: 20})
            };
        const En = ee({
            onCreate: function () {
                return function (e, t) {
                    O("route_update"), hn = new X.Z.Tab(".mc-tab"), bn = hn.activeIndex, hn.$element.on("change.mdui.tab", (function () {
                        bn = hn.activeIndex, window.scrollTo(0, 0), window.history.replaceState({}, "", "#" + Ft[bn]), t.afterChangeTab()
                    })), t.afterChangeTab(), gn && (window.scrollTo(0, gn), gn = 0), S.on("scroll", t.infiniteLoad)
                }
            }, onDestroy: function () {
                return function (e, t) {
                    S.off("scroll", t.infiniteLoad)
                }
            }, afterChangeTab: function () {
                return function (e, t) {
                    var n, i, o = Ft[bn], a = o.toUpperCase();
                    if (o === _n ? t.setTitle("最新提问") : o === vn ? t.setTitle("近期热门提问") : t.setTitle("我关注的提问"), t.setState({current_tab: o}), !(!yn[Ft[bn]] && e[o + "_pagination"] && fn() - xn[Ft[bn]] < 180)) {
                        if (yn[Ft[bn]] = !1, xn[Ft[bn]] = fn(), window["G_QUESTIONS_" + a]) return t.setState(((n = {})[o + "_data"] = window["G_QUESTIONS_" + a].data, n[o + "_pagination"] = window["G_QUESTIONS_" + a].pagination, n)), window["G_QUESTIONS_" + a] = null, void setTimeout((function () {
                            t.infiniteLoad()
                        }));
                        t.setState(((i = {})[o + "_data"] = [], i[o + "_pagination"] = null, i[o + "_loading"] = !0, i)), Sn(o, 1).finally((function () {
                            var e;
                            t.setState(((e = {})[o + "_loading"] = !1, e))
                        })).then((function (e) {
                            var n;
                            t.setState(((n = {})[o + "_data"] = e.data, n[o + "_pagination"] = e.pagination, n)), setTimeout((function () {
                                t.infiniteLoad()
                            }))
                        })).catch(Nt.Z)
                    }
                }
            }, infiniteLoad: function () {
                return function (e, t) {
                    var n, i = Ft[bn];
                    if (!e[i + "_loading"]) {
                        var o = e[i + "_pagination"];
                        o.page >= o.pages || document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100 || (t.setState(((n = {})[i + "_loading"] = !0, n)), Sn(i, o.page + 1).finally((function () {
                            var e;
                            t.setState(((e = {})[i + "_loading"] = !1, e))
                        })).then((function (n) {
                            var o;
                            t.setState(((o = {})[i + "_data"] = e[i + "_data"].concat(n.data), o[i + "_pagination"] = n.pagination, o))
                        })).catch(Nt.Z))
                    }
                }
            }, toRecent: function () {
                hn.show(Ft.indexOf(_n))
            }, toPopular: function () {
                hn.show(Ft.indexOf(vn))
            }, toFolliwing: function () {
                hn.show(Ft.indexOf(wn))
            }, followUpdate: function () {
                yn.following = !0
            }, questionUpdate: function (e) {
                return function (t, n) {
                    var i = [];
                    Ft.forEach((function (o) {
                        var a;
                        i = t[o + "_data"];
                        var r = !1;
                        i.forEach((function (t, n) {
                            e.question_id === t.question_id && (r = !0, i[n] = e)
                        })), r && n.setState(((a = {})[o + "_data"] = i, a))
                    }))
                }
            }, publish: function (e) {
                var t = e.title, n = e.content;
                return function (e, i) {
                    var o, a = e.editor_selected_topic_ids, r = e.auto_save_key;
                    t ? a.length ? n && "<p><br></p>" !== n ? (i.setState({publishing: !0}), (o = {
                        title: t,
                        topic_ids: a,
                        content_rendered: n,
                        include: kn
                    }, (0, gt.j0)((0, _t.K)("/questions", o, ["include"]), (0, _t.o)(o, ["title", "topic_ids", "content_markdown", "content_rendered"]))).finally((function () {
                        i.setState({publishing: !1})
                    })).then((function (e) {
                        yn.recent = !0, yn.popular = !0, yn.following = !0, window.localStorage.removeItem(r + "-title"), window.localStorage.removeItem(r + "-topics"), window.localStorage.removeItem(r + "-content"), i.setState({
                            editor_selected_topics: [],
                            editor_selected_topic_ids: []
                        }), i.editorClose(), window.G_QUESTION = e.data, y.actions.go(Wt("/questions/" + e.data.question_id))
                    })).catch((function (e) {
                        e.code !== jt ? (0, Nt.Z)(e) : X.Z.snackbar(Object.values(e.errors)[0])
                    }))) : X.Z.snackbar("请输入正文") : X.Z.snackbar("请选择话题") : X.Z.snackbar("请输入标题")
                }
            }, afterItemClick: function (e) {
                return function (t, n) {
                    window.G_QUESTION = e, gn = window.pageYOffset, n.setState({last_visit_id: e.question_id})
                }
            }
        }, Mt, Kt, Bt, $t.Z), {replace: Cn} = "", On = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g, Tn = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"'
        }, Zn = e => Tn[e], In = e => Cn.call(e, On, Zn);
        var Nn = function (e) {
            return (0, gt.j0)((0, _t.K)("/answers/{answer_id}/comments", e, ["include"]), (0, _t.o)(e, ["content"]))
        }, Rn = function (e) {
            return (0, gt.A_)((0, _t.K)("/answers/{answer_id}", e, ["include"]))
        }, Dn = function (e) {
            return (0, gt.j0)((0, _t.K)("/comments/{comment_id}/voters", e), (0, _t.o)(e, ["type"]))
        }, An = function (e) {
            return (0, gt.Jl)((0, _t.K)("/comments/{comment_id}/voters", e))
        }, qn = __webpack_require__(505), Mn = function (e, t, n, i, o, a) {
            var r, s;
            if ("article" === n) {
                var c = o.article, l = c.relationships.voting === i;
                c.relationships.voting = l ? "" : i, a.setState({article: c}), (r = l ? (s = {article_id: e}, (0, gt.Jl)((0, _t.K)("/articles/{article_id}/voters", s))) : function (e) {
                    return (0, gt.j0)((0, _t.K)("/articles/{article_id}/voters", e), (0, _t.o)(e, ["type"]))
                }({article_id: e, type: i})).then((function (e) {
                    var t = e.data;
                    ee(c, t), a.setState({article: c})
                }))
            }
            if ("answers" === n) {
                var u = o.answer_data, d = (0, qn.c)(u, "answer_id", e), p = u[d], m = p.relationships.voting === i;
                p.relationships.voting = m ? "" : i, u[d] = p, a.setState({answer_data: u}), (r = m ? function (e) {
                    return (0, gt.Jl)((0, _t.K)("/answers/{answer_id}/voters", e))
                }({answer_id: e}) : function (e) {
                    return (0, gt.j0)((0, _t.K)("/answers/{answer_id}/voters", e), (0, _t.o)(e, ["type"]))
                }({answer_id: e, type: i})).then((function (e) {
                    var t = e.data;
                    ee(p, t), u[d] = p, a.setState({answer_data: u})
                }))
            }
            if ("comments" === n) {
                var f = o.comments_data, h = (0, qn.c)(f, "comment_id", e), g = f[h], _ = g.relationships.voting === i;
                g.relationships.voting = _ ? "" : i, f[h] = g, a.setState({comments_data: f}), (r = _ ? An({comment_id: e}) : Dn({
                    comment_id: e,
                    type: i
                })).then((function (e) {
                    var t = e.data;
                    ee(g, t), f[h] = g, a.setState({comments_data: f})
                }))
            }
            if ("replies" === n) {
                var v = o.comments_data, w = v[t].replies_data, b = (0, qn.c)(w, "comment_id", e), y = w[b],
                    x = y.relationships.voting === i;
                y.relationships.voting = x ? "" : i, v[t].replies_data[b] = y, a.setState({comments_data: v}), (r = x ? An({comment_id: e}) : Dn({
                    comment_id: e,
                    type: i
                })).then((function (e) {
                    var n = e.data;
                    ee(y, n), v[t].replies_data[b] = y, a.setState({comments_data: v})
                }))
            }
            r.catch(Nt.Z)
        }, Ln = function (e, t) {
            switch (t) {
                case"article":
                    return e.article_id;
                case"answers":
                    return e.answer_id;
                default:
                    return e.comment_id
            }
        };
        const $n = {
            voteUp: function (e) {
                var t = e.item, n = e.type, i = e.commentIndex;
                return function (e, o) {
                    Mn(Ln(t, n), i, n, "up", e, o)
                }
            }, voteDown: function (e) {
                var t = e.item, n = e.type, i = e.commentIndex;
                return function (e, o) {
                    Mn(Ln(t, n), i, n, "down", e, o)
                }
            }
        }, Pn = {
            question_id: 0,
            answer_id: 0,
            question: null,
            loading: !1,
            following_question: !1,
            answer_order: "-vote_count",
            answer_data: [],
            answer_pagination: null,
            answer_loading: !1,
            answer_publishing: !1,
            auto_save_key: "page-answers"
        };
        const jn = ee({
            onCreate: function (e) {
                var t = e.question_id, n = e.answer_id, i = e.route;
                return function (e, o) {
                    O("route_update"), o.setState({route: i}), n ? e.answer_id !== n && (o.setState(Pn), o.setState({
                        question_id: t,
                        answer_id: n
                    }), o.loadQuestion(), o.loadAnswer()) : ((e.question_id !== t || e.answer_id) && (o.setState(Pn), o.setState({question_id: t}), o.loadQuestion(), o.loadAnswers()), e.answer_pagination || o.loadAnswers(), S.on("scroll", o.infiniteLoadAnswers))
                }
            }, onDestroy: function () {
                return function (e, t) {
                    "question" === e.route && S.off("scroll", t.infiniteLoadAnswers)
                }
            }, loadQuestion: function () {
                return function (e, t) {
                    var n, i, o = function (n) {
                        "question" === e.route ? t.setTitle(n) : t.setTitle(n + " 的回答")
                    };
                    ((n = window.G_QUESTION) && (t.setState({question: n}), window.G_QUESTION = null, o(In(n.title))), n) || (t.setState({loading: !0}), (i = {
                        question_id: e.question_id,
                        include: ["user", "topics", "is_following", "voting"]
                    }, (0, gt.A_)((0, _t.K)("/questions/{question_id}", i, ["include"]))).finally((function () {
                        t.setState({loading: !1})
                    })).then((function (e) {
                        var n = e.data;
                        t.setState({question: n}), o(In(n.title))
                    })).catch(Nt.Z))
                }
            }, loadAnswer: function () {
                return function (e, t) {
                    var n;
                    ((n = window.G_ANSWER) && (t.setState({answer_data: [n]}), window.G_ANSWER = null), n) || (t.setState({answer_loading: !0}), Rn({
                        answer_id: e.answer_id,
                        include: ["user", "voting"]
                    }).finally((function () {
                        t.setState({answer_loading: !1})
                    })).then((function (e) {
                        var n = e.data;
                        t.setState({answer_data: [n]})
                    })).catch(Nt.Z))
                }
            }, changeOrder: function (e) {
                return function (t, n) {
                    e !== t.answer_order && (n.setState({
                        answer_order: e,
                        answer_data: [],
                        answer_pagination: null
                    }), n.loadAnswers())
                }
            }, loadAnswers: function () {
                return function (e, t) {
                    var n, i;
                    ((n = window.G_QUESTION_ANSWERS) && (t.setState({
                        answer_data: n.data,
                        answer_pagination: n.pagination,
                        answer_loading: !1
                    }), window.G_QUESTION_ANSWERS = null), n) || (t.setState({answer_loading: !0}), (i = {
                        question_id: e.question_id,
                        per_page: 20,
                        order: e.answer_order,
                        include: ["user", "voting"]
                    }, (0, gt.A_)((0, _t.K)("/questions/{question_id}/answers", i, ["page", "per_page", "order", "include"]))).finally((function () {
                        t.setState({answer_loading: !1})
                    })).then((function (e) {
                        t.setState({answer_data: e.data, answer_pagination: e.pagination})
                    })).catch(Nt.Z))
                }
            }, infiniteLoadAnswers: function () {
                return function (e, t) {
                    if (!e.answer_loading) {
                        var n, i = e.answer_pagination;
                        if (!(i.page >= i.pages)) if (!(document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100)) t.setState({answer_loading: !0}), (n = {
                            page: i.page + 1,
                            per_page: 20,
                            order: e.answer_order,
                            include: ["user", "voting"],
                            question_id: e.question_id
                        }, void 0 === n && (n = {}), (0, gt.A_)((0, _t.K)("/answers", n, ["page", "per_page", "order", "include", "answer_id", "question_id", "user_id", "trashed"]))).finally((function () {
                            t.setState({answer_loading: !1})
                        })).then((function (n) {
                            t.setState({answer_data: e.answer_data.concat(n.data), answer_pagination: n.pagination})
                        })).catch(Nt.Z)
                    }
                }
            }, publishAnswer: function (e) {
                var t = e.content;
                return function (e, n) {
                    var i, o = e.auto_save_key;
                    t && "<p><br></p>" !== t ? (n.setState({answer_publishing: !0}), (i = {
                        question_id: e.question_id,
                        content_rendered: t,
                        include: ["user", "voting"]
                    }, (0, gt.j0)((0, _t.K)("/questions/{question_id}/answers", i, ["include"]), (0, _t.o)(i, ["content_markdown", "content_rendered"]))).finally((function () {
                        n.setState({answer_publishing: !1})
                    })).then((function (t) {
                        window.localStorage.removeItem(o + "-content"), n.editorClose();
                        var i = e.question;
                        i.answer_count += 1, n.setState({
                            question: i,
                            answer_data: [],
                            answer_pagination: null
                        }), window.G_QUESTION = e.question, window.G_ANSWER = t.data, y.actions.go(Wt("/questions/" + e.question_id + "/answers/" + t.data.answer_id))
                    })).catch((function (e) {
                        e.code !== jt ? (0, Nt.Z)(e) : X.Z.snackbar(Object.values(e.errors)[0])
                    }))) : X.Z.snackbar("请输入正文")
                }
            }
        }, Mt, Kt, $n, $t.Z);
        var Un = ["recent", "popular", "following"],
            Hn = {current_tab: "", publishing: !1, tabs: Un, last_visit_id: 0, auto_save_key: "page-articles"};
        Un.forEach((function (e) {
            Hn[e + "_data"] = [], Hn[e + "_pagination"] = null, Hn[e + "_loading"] = !1
        }));
        const Kn = ee(Hn, Gt, zt);
        var Bn, Gn, zn = "recent", Fn = "popular", Yn = "following", Qn = Un.indexOf(zn),
            Wn = {recent: !1, popular: !1, following: !1}, Jn = {recent: 0, popular: 0, following: 0},
            Vn = ["user", "topics", "is_following", "voting"], Xn = function (e, t) {
                return e === zn ? Tt({page: t, include: Vn, per_page: 20, order: "-update_time"}) : e === Fn ? Tt({
                    page: t,
                    include: Vn,
                    per_page: 20,
                    order: "-vote_count"
                }) : (0, Zt.A1)({page: t, include: Vn, per_page: 20})
            };
        const ei = ee({
            onCreate: function () {
                return function (e, t) {
                    O("route_update"), Bn = new X.Z.Tab(".mc-tab"), Qn = Bn.activeIndex, Bn.$element.on("change.mdui.tab", (function () {
                        Qn = Bn.activeIndex, window.scrollTo(0, 0), window.history.replaceState({}, "", "#" + Un[Qn]), t.afterChangeTab()
                    })), t.afterChangeTab(), Gn && (window.scrollTo(0, Gn), Gn = 0), S.on("scroll", t.infiniteLoad)
                }
            }, onDestroy: function () {
                return function (e, t) {
                    S.off("scroll", t.infiniteLoad)
                }
            }, afterChangeTab: function () {
                return function (e, t) {
                    var n, i, o = Un[Qn], a = o.toUpperCase();
                    if (o === zn ? t.setTitle("最新文章") : o === Fn ? t.setTitle("近期热门文章") : t.setTitle("我关注的文章"), t.setState({current_tab: o}), !(!Wn[Un[Qn]] && e[o + "_pagination"] && fn() - Jn[Un[Qn]] < 180)) {
                        if (Wn[Un[Qn]] = !1, Jn[Un[Qn]] = fn(), window["G_ARTICLES_" + a]) return t.setState(((n = {})[o + "_data"] = window["G_ARTICLES_" + a].data, n[o + "_pagination"] = window["G_ARTICLES_" + a].pagination, n)), window["G_ARTICLES_" + a] = null, void setTimeout((function () {
                            t.infiniteLoad()
                        }));
                        t.setState(((i = {})[o + "_data"] = [], i[o + "_pagination"] = null, i[o + "_loading"] = !0, i)), Xn(o, 1).finally((function () {
                            var e;
                            t.setState(((e = {})[o + "_loading"] = !1, e))
                        })).then((function (e) {
                            var n;
                            t.setState(((n = {})[o + "_data"] = e.data, n[o + "_pagination"] = e.pagination, n)), setTimeout((function () {
                                t.infiniteLoad()
                            }))
                        })).catch(Nt.Z)
                    }
                }
            }, infiniteLoad: function () {
                return function (e, t) {
                    var n, i = Un[Qn];
                    if (!e[i + "_loading"]) {
                        var o = e[i + "_pagination"];
                        o.page >= o.pages || document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100 || (t.setState(((n = {})[i + "_loading"] = !0, n)), Xn(i, o.page + 1).finally((function () {
                            var e;
                            t.setState(((e = {})[i + "_loading"] = !1, e))
                        })).then((function (n) {
                            var o;
                            t.setState(((o = {})[i + "_data"] = e[i + "_data"].concat(n.data), o[i + "_pagination"] = n.pagination, o))
                        })).catch(Nt.Z))
                    }
                }
            }, toRecent: function () {
                Bn.show(Un.indexOf(zn))
            }, toPopular: function () {
                Bn.show(Un.indexOf(Fn))
            }, toFolliwing: function () {
                Bn.show(Un.indexOf(Yn))
            }, followUpdate: function () {
                Wn.following = !0
            }, articleUpdate: function (e) {
                return function (t, n) {
                    var i = [];
                    Un.forEach((function (o) {
                        var a;
                        i = t[o + "_data"];
                        var r = !1;
                        i.forEach((function (t, n) {
                            e.article_id === t.article_id && (r = !0, i[n] = e)
                        })), r && n.setState(((a = {})[o + "_data"] = i, a))
                    }))
                }
            }, publish: function (e) {
                var t = e.title, n = e.content;
                return function (e, i) {
                    var o, a = e.editor_selected_topic_ids, r = e.auto_save_key;
                    t ? a.length ? n && "<p><br></p>" !== n ? (i.setState({publishing: !0}), (o = {
                        title: t,
                        topic_ids: a,
                        content_rendered: n,
                        include: Vn
                    }, (0, gt.j0)((0, _t.K)("/articles", o, ["include"]), (0, _t.o)(o, ["title", "topic_ids", "content_markdown", "content_rendered"]))).finally((function () {
                        i.setState({publishing: !1})
                    })).then((function (e) {
                        Wn.recent = !0, Wn.popular = !0, Wn.following = !0, window.localStorage.removeItem(r + "-title"), window.localStorage.removeItem(r + "-topics"), window.localStorage.removeItem(r + "-content"), i.editorClose(), window.G_ARTICLE = e.data, y.actions.go(Wt("/articles/" + e.data.article_id))
                    })).catch((function (e) {
                        e.code !== jt ? (0, Nt.Z)(e) : X.Z.snackbar(Object.values(e.errors)[0])
                    }))) : X.Z.snackbar("请输入正文") : X.Z.snackbar("请选择话题") : X.Z.snackbar("请输入标题")
                }
            }, afterItemClick: function (e) {
                return function (t, n) {
                    window.G_ARTICLE = e, Gn = window.pageYOffset, n.setState({last_visit_id: e.article_id})
                }
            }
        }, Mt, Kt, Bt, $t.Z), ti = {article_id: 0, article: null, loading: !1, following_article: !1};
        const ni = ee({
            onCreate: function (e) {
                var t = e.article_id;
                return function (e, n) {
                    O("route_update"), e.article_id !== t && (n.setState(ti), n.setState({article_id: t}), n.loadArticle())
                }
            }, loadArticle: function () {
                return function (e, t) {
                    var n, i;
                    ((n = window.G_ARTICLE) && (t.setState({article: n}), window.G_ARTICLE = null, t.setTitle(In(n.title))), n) || (t.setState({loading: !0}), (i = {
                        article_id: e.article_id,
                        include: ["user", "topics", "is_following", "voting"]
                    }, (0, gt.A_)((0, _t.K)("/articles/{article_id}", i, ["include"]))).finally((function () {
                        t.setState({loading: !1})
                    })).then((function (e) {
                        var n = e.data;
                        t.setState({article: n}), t.setTitle(In(n.title))
                    })).catch(Nt.Z))
                }
            }
        }, Mt, $n, $t.Z);
        var ii = ["following", "recommended"], oi = {current_tab: "", tabs: ii, tabIndex: ii.indexOf("recommended")};
        ii.forEach((function (e) {
            oi[e + "_data"] = [], oi[e + "_pagination"] = null, oi[e + "_loading"] = !1
        }));
        const ai = oi;
        var ri, si, ci = "following", li = "recommended", ui = {following: !1, recommended: !1}, di = ["is_following"],
            pi = function (e, t) {
                return e === ci ? (0, Zt.VV)({page: t, per_page: 20, include: di}) : bt({
                    page: t,
                    per_page: 20,
                    include: di,
                    order: "-follower_count"
                })
            };
        const mi = ee({
            onCreate: function () {
                return function (e, t) {
                    O("route_update"), It() && (ri = new X.Z.Tab(".mc-tab"), t.setState({tabIndex: ri.activeIndex}), ri.$element.on("change.mdui.tab", (function () {
                        t.setState({tabIndex: ri.activeIndex}), window.scrollTo(0, 0), window.history.replaceState({}, "", "#" + ii[ri.activeIndex]), t.afterChangeTab()
                    }))), t.afterChangeTab(), si && (window.scrollTo(0, si), si = 0), S.on("scroll", t.infiniteLoad)
                }
            }, onDestroy: function () {
                return function (e, t) {
                    S.off("scroll", t.infiniteLoad)
                }
            }, afterChangeTab: function () {
                return function (e, t) {
                    var n, i, o = ii[e.tabIndex], a = o.toUpperCase();
                    if (o === ci ? t.setTitle("我关注的话题") : t.setTitle("推荐话题"), t.setState({current_tab: o}), ui[o] || !e[o + "_pagination"]) {
                        if (ui[o] = !1, window["G_TOPICS_" + a]) return t.setState(((n = {})[o + "_data"] = window["G_TOPICS_" + a].data, n[o + "_pagination"] = window["G_TOPICS_" + a].pagination, n)), window["G_TOPICS_" + a] = null, void setTimeout((function () {
                            t.infiniteLoad()
                        }));
                        t.setState(((i = {})[o + "_data"] = [], i[o + "_pagination"] = null, i)), t.loadStart(o), pi(o, 1).finally((function () {
                            t.loadEnd(o)
                        })).then((function (e) {
                            var n;
                            t.setState(((n = {})[o + "_data"] = e.data, n[o + "_pagination"] = e.pagination, n)), setTimeout((function () {
                                t.infiniteLoad()
                            }))
                        })).catch(Nt.Z)
                    }
                }
            }, infiniteLoad: function () {
                return function (e, t) {
                    var n = ii[e.tabIndex];
                    if (!e[n + "_loading"]) {
                        var i = e[n + "_pagination"];
                        i.page >= i.pages || document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100 || (t.loadStart(n), pi(n, i.page + 1).finally((function () {
                            t.loadEnd(n)
                        })).then((function (i) {
                            var o;
                            t.setState(((o = {})[n + "_data"] = e[n + "_data"].concat(i.data), o[n + "_pagination"] = i.pagination, o))
                        })).catch(Nt.Z))
                    }
                }
            }, toRecommended: function () {
                ri.show(ii.indexOf(li))
            }, toFollowing: function () {
                ri.show(ii.indexOf(ci))
            }, followUpdate: function () {
                ui.following = !0, ui.recommended = !0
            }, afterItemClick: function (e) {
                window.G_TOPIC = e, si = window.pageYOffset
            }, loadStart: function (e) {
                var t;
                return (t = {})[e + "_loading"] = !0, t
            }, loadEnd: function (e) {
                var t;
                return (t = {})[e + "_loading"] = !1, t
            }
        }, Mt);
        var fi = ["questions", "articles"], hi = {
            topic_id: 0,
            topic: null,
            loading: !1,
            following_topic: !1,
            tabs: fi,
            current_tab: "",
            last_visit_article_id: 0,
            last_visit_question_id: 0
        };
        fi.forEach((function (e) {
            hi[e + "_order"] = "-update_time", hi[e + "_data"] = [], hi[e + "_pagination"] = null, hi[e + "_loading"] = !1
        }));
        const gi = hi;
        var _i, vi, wi = "questions", bi = fi.indexOf(wi), yi = ["user", "topics", "is_following"];
        const xi = ee({
            getContexts: function (e) {
                var t = e.tabName, n = e.page;
                return function (e) {
                    var i = {topic_id: e.topic_id, page: n, per_page: 20, include: yi, order: e[t + "_order"]};
                    return t === wi ? function (e) {
                        return (0, gt.A_)((0, _t.K)("/topics/{topic_id}/questions", e, ["page", "per_page", "order", "include"]))
                    }(i) : function (e) {
                        return (0, gt.A_)((0, _t.K)("/topics/{topic_id}/articles", e, ["page", "per_page", "order", "include"]))
                    }(i)
                }
            }, onCreate: function (e) {
                var t = e.topic_id;
                return function (e, n) {
                    O("route_update"), _i = new X.Z.Tab(".mc-tab"), bi = _i.activeIndex, e.topic_id !== t && (n.setState(gi), n.setState({topic_id: t}), n.loadTopic(), n.afterChangeTab()), _i.$element.on("change.mdui.tab", (function () {
                        bi = _i.activeIndex, window.scrollTo(0, 0), window.history.replaceState({}, "", "#" + fi[bi]), n.afterChangeTab()
                    })), vi && (window.scrollTo(0, vi), vi = 0), S.on("scroll", n.infiniteLoad)
                }
            }, onDestroy: function () {
                return function (e, t) {
                    S.off("scroll", t.infiniteLoad)
                }
            }, loadTopic: function () {
                return function (e, t) {
                    var n, i;
                    ((n = window.G_TOPIC) && (t.setState({topic: n}), window.G_TOPIC = null, t.setTitle(In(n.name))), n) || (t.setState({loading: !0}), (i = {
                        topic_id: e.topic_id,
                        include: ["is_following"]
                    }, (0, gt.A_)((0, _t.K)("/topics/{topic_id}", i, ["include"]))).finally((function () {
                        t.setState({loading: !1})
                    })).then((function (e) {
                        var n = e.data;
                        t.setState({topic: n}), t.setTitle(In(n.name))
                    })).catch(Nt.Z))
                }
            }, afterChangeTab: function () {
                return function (e, t) {
                    var n, i, o = fi[bi], a = o.toUpperCase();
                    if (t.setState({current_tab: o}), !e[o + "_pagination"]) {
                        if (window["G_TOPIC_" + a]) return t.setState(((n = {})[o + "_data"] = window["G_TOPIC_" + a].data, n[o + "_pagination"] = window["G_TOPIC_" + a].pagination, n)), window["G_TOPIC_" + a] = null, void setTimeout((function () {
                            t.infiniteLoad()
                        }));
                        t.setState(((i = {})[o + "_data"] = [], i[o + "_pagination"] = null, i[o + "_loading"] = !0, i)), t.getContexts({
                            tabName: o,
                            page: 1
                        }).finally((function () {
                            var e;
                            t.setState(((e = {})[o + "_loading"] = !1, e))
                        })).then((function (e) {
                            var n;
                            t.setState(((n = {})[o + "_data"] = e.data, n[o + "_pagination"] = e.pagination, n)), setTimeout((function () {
                                t.infiniteLoad()
                            }))
                        })).catch(Nt.Z)
                    }
                }
            }, infiniteLoad: function () {
                return function (e, t) {
                    var n, i = fi[bi];
                    if (!e[i + "_loading"]) {
                        var o = e[i + "_pagination"];
                        o.page >= o.pages || document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100 || (t.setState(((n = {})[i + "_loading"] = !0, n)), t.getContexts({
                            tabName: i,
                            page: o.page + 1
                        }).finally((function () {
                            var e;
                            t.setState(((e = {})[i + "_loading"] = !1, e))
                        })).then((function (n) {
                            var o;
                            t.setState(((o = {})[i + "_data"] = e[i + "_data"].concat(n.data), o[i + "_pagination"] = n.pagination, o))
                        })).catch(Nt.Z))
                    }
                }
            }, afterItemClick: function (e) {
                return function (t, n) {
                    var i = fi[bi];
                    vi = window.pageYOffset, i === wi ? (window.G_QUESTION = e, n.setState({last_visit_question_id: e.question_id})) : (window.G_ARTICLE = e, n.setState({last_visit_article_id: e.article_id}))
                }
            }, changeOrder: function (e) {
                return function (t, n) {
                    var i, o = fi[bi];
                    e !== t[o + "_order"] && (n.setState(((i = {})[o + "_order"] = e, i[o + "_data"] = [], i[o + "_pagination"] = null, i)), n.afterChangeTab())
                }
            }
        }, Mt, $t.Z);
        var ki = ["followees", "followers", "recommended"],
            Si = {current_tab: "", tabs: ki, tabIndex: ki.indexOf("recommended")};
        ki.forEach((function (e) {
            Si[e + "_data"] = [], Si[e + "_pagination"] = null, Si[e + "_loading"] = !1
        }));
        const Ei = Si;
        var Ci, Oi, Ti = "followees", Zi = "followers", Ii = "recommended",
            Ni = {followees: !1, followers: !1, recommended: !1}, Ri = ["is_following", "is_me"], Di = function (e, t) {
                return e === Ti ? (0, Zt.yU)({include: Ri, page: t, per_page: 20}) : e === Zi ? (0, Zt.g4)({
                    include: Ri,
                    page: t,
                    per_page: 20
                }) : (0, Zt.gp)({include: Ri, page: t, per_page: 20, order: "-follower_count"})
            };
        const Ai = ee({
            onCreate: function () {
                return function (e, t) {
                    O("route_update"), It() && (Ci = new X.Z.Tab(".mc-tab"), t.setState({tabIndex: Ci.activeIndex}), Ci.$element.on("change.mdui.tab", (function () {
                        t.setState({tabIndex: Ci.activeIndex}), window.scrollTo(0, 0), window.history.replaceState({}, "", "#" + ki[Ci.activeIndex]), t.afterChangeTab()
                    }))), t.afterChangeTab(), Oi && (window.scrollTo(0, Oi), Oi = 0), S.on("scroll", t.infiniteLoad)
                }
            }, onDestroy: function () {
                return function (e, t) {
                    S.off("scroll", t.infiniteLoad)
                }
            }, afterChangeTab: function () {
                return function (e, t) {
                    var n, i, o = ki[e.tabIndex], a = o.toUpperCase();
                    if (o === Ti ? t.setTitle("我关注的人") : o === Zi ? t.setTitle("我的关注者") : t.setTitle("推荐人脉"), t.setState({current_tab: o}), Ni[o] || !e[o + "_pagination"]) {
                        if (Ni[o] = !1, window["G_USERS_" + a]) return t.setState(((n = {})[o + "_data"] = window["G_USERS_" + a].data, n[o + "_pagination"] = window["G_USERS_" + a].pagination, n)), window["G_USERS_" + a] = null, void setTimeout((function () {
                            t.infiniteLoad()
                        }));
                        t.setState(((i = {})[o + "_data"] = [], i[o + "_pagination"] = null, i)), t.loadStart(o), Di(o, 1).finally((function () {
                            t.loadEnd(o)
                        })).then((function (e) {
                            var n;
                            t.setState(((n = {})[o + "_data"] = e.data, n[o + "_pagination"] = e.pagination, n)), setTimeout((function () {
                                t.infiniteLoad()
                            }))
                        })).catch(Nt.Z)
                    }
                }
            }, infiniteLoad: function () {
                return function (e, t) {
                    var n = ki[e.tabIndex];
                    if (!e[n + "_loading"]) {
                        var i = e[n + "_pagination"];
                        i.page >= i.pages || document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100 || (t.loadStart(n), Di(n, i.page + 1).finally((function () {
                            t.loadEnd(n)
                        })).then((function (i) {
                            var o;
                            t.setState(((o = {})[n + "_data"] = e[n + "_data"].concat(i.data), o[n + "_pagination"] = i.pagination, o))
                        })).catch(Nt.Z))
                    }
                }
            }, toRecommended: function () {
                Ci.show(ki.indexOf(Ii))
            }, followUpdate: function () {
                Ni.followees = !0, Ni.recommended = !0
            }, afterItemClick: function (e) {
                window.G_INTERVIEWEE = e, Oi = window.pageYOffset
            }, loadStart: function (e) {
                var t;
                return (t = {})[e + "_loading"] = !0, t
            }, loadEnd: function (e) {
                var t;
                return (t = {})[e + "_loading"] = !1, t
            }
        }, Mt);
        var qi = ["questions", "answers", "articles"], Mi = {
            interviewee: null,
            loading: !1,
            following_interviewee: !1,
            edit_info_submitting: !1,
            profile_fold: !0,
            tabs: qi,
            current_tab: "",
            last_visit_article_id: 0,
            last_visit_question_id: 0,
            last_visit_answer_id: 0
        };
        qi.forEach((function (e) {
            Mi[e + "_order"] = "questions" === e ? "-update_time" : "-create_time", Mi[e + "_data"] = [], Mi[e + "_pagination"] = null, Mi[e + "_loading"] = !1
        }));
        const Li = Mi;
        var $i, Pi, ji, Ui, Hi = "questions", Ki = "articles", Bi = qi.indexOf(Hi);
        const Gi = ee({
            getContexts: function (e) {
                var t = e.tabName, n = e.page;
                return function (e) {
                    var i = {
                        user_id: $i,
                        page: n,
                        per_page: 20,
                        include: ["user", "topics", "is_following"],
                        order: e[t + "_order"]
                    };
                    return t === Hi ? (0, Zt.tI)(i) : t === Ki ? (0, Zt.Zz)(i) : (i.include = ["user", "question", "voting"], (0, Zt.X2)(i))
                }
            }, onCreate: function (e) {
                return function (t, n) {
                    O("route_update"), ji = new X.Z.Tab(".mc-tab"), Bi = ji.activeIndex, $i !== e.interviewee_id && ($i = e.interviewee_id, n.setState(Li), n.loadInterviewee(), n.afterChangeTab()), ji.$element.on("change.mdui.tab", (function () {
                        Bi = ji.activeIndex, window.history.replaceState({}, "", "#" + qi[Bi]), n.afterChangeTab()
                    })), Ui && (window.scrollTo(0, Ui), Ui = 0), S.on("scroll", n.infiniteLoad)
                }
            }, onDestroy: function () {
                return function (e, t) {
                    S.off("scroll", t.infiniteLoad)
                }
            }, loadInterviewee: function () {
                return function (e, t) {
                    if (e.user && $i === e.user.user_id) return t.setTitle(e.user.username + "的个人主页"), t.setState({interviewee: e.user}), void (window.G_INTERVIEWEE = null);
                    var n = window.G_INTERVIEWEE;
                    if (n) return t.setState({interviewee: n}), window.G_INTERVIEWEE = null, void t.setTitle(n.username + "的个人主页");
                    t.setState({loading: !0, interviewee: null}), (0, Zt.U2)({
                        user_id: $i,
                        include: ["is_following"]
                    }).finally((function () {
                        t.setState({loading: !1})
                    })).then((function (e) {
                        var n = e.data;
                        t.setState({interviewee: n}), t.setTitle(n.username + "的个人主页")
                    })).catch(Nt.Z)
                }
            }, afterChangeTab: function () {
                return function (e, t) {
                    var n, i, o = qi[Bi], a = o.toUpperCase();
                    if (t.setState({current_tab: o}), !e[o + "_pagination"]) {
                        if (window["G_USER_" + a]) return t.setState(((n = {})[o + "_data"] = window["G_USER_" + a].data, n[o + "_pagination"] = window["G_USER_" + a].pagination, n)), window["G_USER_" + a] = null, void setTimeout((function () {
                            t.infiniteLoad()
                        }));
                        t.setState(((i = {})[o + "_data"] = [], i[o + "_pagination"] = null, i[o + "_loading"] = !0, i)), t.getContexts({
                            tabName: o,
                            page: 1
                        }).finally((function () {
                            var e;
                            t.setState(((e = {})[o + "_loading"] = !1, e))
                        })).then((function (e) {
                            var n;
                            t.setState(((n = {})[o + "_data"] = e.data, n[o + "_pagination"] = e.pagination, n)), setTimeout((function () {
                                t.infiniteLoad()
                            }))
                        })).catch(Nt.Z)
                    }
                }
            }, infiniteLoad: function () {
                return function (e, t) {
                    var n, i = qi[Bi];
                    if (!e[i + "_loading"]) {
                        var o = e[i + "_pagination"];
                        o.page >= o.pages || document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100 || (t.setState(((n = {})[i + "_loading"] = !0, n)), t.getContexts({
                            tabName: i,
                            page: o.page + 1
                        }).finally((function () {
                            var e;
                            t.setState(((e = {})[i + "_loading"] = !1, e))
                        })).then((function (n) {
                            var o;
                            t.setState(((o = {})[i + "_data"] = e[i + "_data"].concat(n.data), o[i + "_pagination"] = n.pagination, o))
                        })).catch(Nt.Z))
                    }
                }
            }, afterItemClick: function (e) {
                return function (t, n) {
                    var i = qi[Bi];
                    Ui = window.pageYOffset, i === Hi ? (window.G_QUESTION = e, n.setState({last_visit_question_id: e.question_id})) : i === Ki ? (window.G_ARTICLE = e, n.setState({last_visit_article_id: e.article_id})) : (window.G_ANSWER = e, n.setState({last_visit_answer_id: e.answer_id}))
                }
            }, changeOrder: function (e) {
                return function (t, n) {
                    var i, o = qi[Bi];
                    e !== t[o + "_order"] && (n.setState(((i = {})[o + "_order"] = e, i[o + "_data"] = [], i[o + "_pagination"] = null, i)), n.afterChangeTab())
                }
            }, deleteAvatar: function (e) {
                return function (t, n) {
                    e.preventDefault(), X.Z.confirm("系统将删除现有头像，并随机生成一个新头像。", "要删除现有头像吗？", (function () {
                        (0, Zt.KS)().then((function (e) {
                            var i = e.data, o = t.user;
                            o.avatar = i, n.setState({user: o})
                        })).catch(Nt.Z)
                    }), (function () {
                    }), {confirmText: "删除", cancelText: "取消"})
                }
            }, deleteCover: function (e) {
                return function (t, n) {
                    e.preventDefault(), X.Z.confirm("系统将删除现有封面，并重置为默认封面。", "要删除现有封面吗？", (function () {
                        (0, Zt.an)().then((function (e) {
                            var i = e.data, o = t.user;
                            o.cover = i, n.setState({user: o})
                        })).catch(Nt.Z)
                    }), (function () {
                    }), {confirmText: "删除", cancelText: "取消"})
                }
            }, updateUserInfo: function () {
                return function (e, t) {
                    if (Pi) Pi.open(); else {
                        var n = (0, x.Z)("#page-user .edit-info");
                        Pi = new X.Z.Dialog(n, {closeOnConfirm: !1}), n.on("open.mdui.dialog", (function () {
                            n.find(".mdui-textfield-input")[0].focus()
                        })), n.on("opened.mdui.dialog", (function () {
                            Pi.handleUpdate()
                        })), n.on("confirm.mdui.dialog", (function () {
                            var e = {include: ["is_following"]};
                            n.find("form").serializeArray().forEach((function (t) {
                                e[t.name] = t.value
                            })), t.setState({edit_info_submitting: !0}), (0, Zt.Ak)(e).finally((function () {
                                t.setState({edit_info_submitting: !1})
                            })).then((function (e) {
                                var n = e.data, i = {user: n};
                                n.user_id === $i && (i.interviewee = n), t.setState(i), Pi.close(), X.Z.snackbar("更新成功")
                            })).catch(Nt.Z)
                        })), Pi.open()
                    }
                }
            }
        }, Mt, $t.Z);
        var zi = function (e) {
            return void 0 === e && (e = {}), (0, gt.A_)((0, _t.K)("/notifications", e, ["page", "per_page", "include", "type", "read"]))
        }, Fi = ["sender", "article", "question", "answer", "comment", "reply"], Yi = function (e) {
            return e.map((function (e) {
                return e.is_loaded_detail = !1, e.is_show_detail = !1, e.content_detail = "", e
            }))
        };
        const Qi = ee({
            onCreate: function () {
                return function (e, t) {
                    var n;
                    (O("route_update"), t.setTitle("通知"), It()) && (e.pagination && !e.count || t.loadData(), (void 0 === n && (n = {}), (0, gt.j0)((0, _t.K)("/notifications/read", n, ["type"]))).then((function () {
                        t.updateCount(0)
                    })).catch(Nt.Z), S.on("scroll", t.infiniteLoad))
                }
            }, onDestroy: function () {
                return function (e, t) {
                    S.off("scroll", t.infiniteLoad)
                }
            }, updateCount: function (e) {
                return function (t, n) {
                    n.setState({count: e})
                }
            }, loadData: function () {
                return function (e, t) {
                    t.setState({data: [], pagination: null, loading: !0}), zi({
                        page: 1,
                        per_page: 20,
                        include: Fi
                    }).finally((function () {
                        t.setState({loading: !1})
                    })).then((function (e) {
                        t.setState({data: Yi(e.data), pagination: e.pagination})
                    })).catch(Nt.Z)
                }
            }, infiniteLoad: function () {
                return function (e, t) {
                    if (!e.loading) {
                        var n = e.pagination;
                        n.page >= n.pages || document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100 || (t.setState({loading: !0}), zi({
                            page: n.page + 1,
                            per_page: 20,
                            include: Fi
                        }).finally((function () {
                            t.setState({loading: !1})
                        })).then((function (n) {
                            t.setState({data: e.data.concat(Yi(n.data)), pagination: n.pagination})
                        })).catch(Nt.Z))
                    }
                }
            }, deleteOne: function (e) {
                return function (t, n) {
                    X.Z.confirm("确认删除这条通知？", (function () {
                        var i, o = t.data, a = (0, qn.c)(o, "notification_id", e.notification_id);
                        o.splice(a, 1), n.setState({data: o}), (i = {notification_id: e.notification_id}, (0, gt.Jl)((0, _t.K)("/notifications/{notification_id}", i))).catch(Nt.Z)
                    }), (function () {
                        return !1
                    }), {history: !1, confirmText: "确定", cancelText: "取消"})
                }
            }, toggleDetail: function (e) {
                return function (t, n) {
                    var i, o = t.data, a = (0, qn.c)(o, "notification_id", e.notification_id), r = o[a];
                    if (r.is_show_detail = !r.is_show_detail, r.is_show_detail && r.is_loaded_detail) o[a] = r, n.setState({data: o}); else switch (r.type) {
                        case"article_deleted":
                        case"question_deleted":
                        case"answer_deleted":
                        case"comment_deleted":
                            r.is_loaded_detail = !0, r.content_detail = "comment_deleted" === r.type ? r.content_deleted.content : r.content_deleted.content_rendered, o[a] = r, n.setState({data: o});
                            break;
                        case"question_commented":
                        case"article_commented":
                        case"answer_commented":
                        case"comment_replies":
                        case"question_answered":
                            o[a] = r, n.setState({data: o}), ("question_answered" === r.type ? Rn({answer_id: r.answer_id}) : (i = {comment_id: r.comment_id}, (0, gt.A_)((0, _t.K)("/comments/{comment_id}", i, ["include"])))).then((function (e) {
                                r.is_loaded_detail = !0, r.content_detail = "question_answered" === r.type ? e.data.content_rendered : e.data.content, o[a] = r, n.setState({data: o})
                            })).catch(Nt.Z)
                    }
                }
            }
        }, Mt);
        var Wi, Ji, Vi, Xi, eo = function () {
            return (0, gt.j0)((0, _t.K)("/captchas", {}))
        }, to = __webpack_require__(183), no = __webpack_require__.n(to), io = function (e) {
            return e.password && (e.password = no()(e.password)), (0, gt.j0)((0, _t.K)("/tokens", e), (0, _t.o)(e, ["name", "password", "device", "captcha_token", "captcha_code"])).then((function (e) {
                return e.code || tt.Z.adapter.setStorage("token", e.data.token), e
            }))
        };
        const oo = ee({
            onInput: function (e) {
                var t, n = e.target;
                return (t = {})[n.name] = n.value, t[n.name + "_msg"] = "", t
            }, onCreate: function (e) {
                var t = (0, x.Z)(e.element).mutation();
                Wi = new X.Z.Dialog(t, {
                    modal: !0,
                    history: !1
                }), Ji = t.find('[name="name"]'), Vi = t.find('[name="password"]'), Xi = t.find('[name="captcha_code"]'), t.on("open.mdui.dialog", (function () {
                    Ji[0].focus()
                }))
            }, open: function () {
                Wi.open()
            }, close: function () {
                Wi && Wi.close()
            }, toRegister: function () {
                Wi.close(), O("register_open")
            }, toReset: function () {
                Wi.close(), O("reset_open")
            }, refreshCaptcha: function () {
                return function (e, t) {
                    eo().then((function (e) {
                        var n = e.data, i = n.captcha_token, o = n.captcha_image;
                        t.setState({captcha_token: i, captcha_image: o, captcha_code: ""}), setTimeout((function () {
                            Xi[0].focus()
                        }))
                    })).catch(Nt.Z)
                }
            }, login: function (e) {
                return function (t, n) {
                    e.preventDefault(), n.setState({submitting: !0});
                    var i = {name: t.name, password: t.password, device: navigator.userAgent};
                    t.captcha_token && (i.captcha_token = t.captcha_token, i.captcha_code = t.captcha_code), io(i).then((function (e) {
                        ft("token", e.data.token), window.location.reload()
                    })).catch((function (e) {
                        if (n.setState({
                            submitting: !1,
                            captcha_token: e.captcha_token || "",
                            captcha_image: e.captcha_image || "",
                            captcha_code: ""
                        }), e.code === jt) {
                            var t = e.errors.name || "", i = e.errors.password || "", o = e.errors.captcha_code || "";
                            return n.setState({
                                name_msg: t,
                                password_msg: i,
                                captcha_code_msg: o
                            }), void (t ? Ji[0].focus() : i ? Vi[0].focus() : o && Xi[0].focus())
                        }
                        (0, Nt.Z)(e)
                    }))
                }
            }
        }, Mt);
        var ao, ro, so, co, lo, uo;
        const po = ee({
            onInput: function (e) {
                var t, n = e.target;
                return (t = {})[n.name] = n.value, t[n.name + "_msg"] = "", t
            }, onCreate: function (e) {
                return function (t) {
                    var n = (0, x.Z)(e.element).mutation();
                    ao = new X.Z.Dialog(n, {
                        modal: !0,
                        history: !1
                    }), ro = n.find('[name="email"]'), so = n.find('[name="email_code"]'), co = n.find('[name="username"]'), lo = n.find('[name="password"]'), uo = n.find('[name="captcha_code"]'), n.on("open.mdui.dialog", (function () {
                        t.email_valid ? co[0].focus() : ro[0].focus()
                    }))
                }
            }, open: function () {
                ao.open()
            }, close: function () {
                ao && ao.close()
            }, toLogin: function () {
                ao.close(), O("login_open")
            }, refreshCaptcha: function () {
                return function (e, t) {
                    eo().then((function (e) {
                        var n = e.data, i = n.captcha_token, o = n.captcha_image;
                        t.setState({captcha_token: i, captcha_image: o, captcha_code: ""}), setTimeout((function () {
                            uo[0].focus()
                        }), 0)
                    })).catch(Nt.Z)
                }
            }, countdown: function () {
                return function (e, t) {
                    e.resend_countdown > 0 ? (t.setState({resend_countdown: e.resend_countdown - 1}), setTimeout(t.countdown, 1e3)) : t.setState({show_resend_countdown: !1})
                }
            }, sendCountdown: function () {
                return function (e, t) {
                    t.setState({show_resend_countdown: !0, resend_countdown: 60}), t.countdown()
                }
            }, sendEmail: function () {
                return function (e, t) {
                    if (ro[0].validity.valid) {
                        if (e.captcha_token && !uo[0].validity.valid) return t.setState({captcha_code_msg: "请输入图形验证码"}), void uo[0].focus();
                        t.setState({sending: !0});
                        var n = {email: e.email};
                        e.captcha_token && (n.captcha_token = e.captcha_token, n.captcha_code = e.captcha_code), (0, Zt.Q_)(n).finally((function () {
                            t.setState({
                                sending: !1,
                                captcha_token: "",
                                captcha_image: "",
                                captcha_code: "",
                                email_code: "",
                                email_code_msg: ""
                            })
                        })).then((function () {
                            X.Z.snackbar("邮箱验证码已发送"), t.sendCountdown()
                        })).catch((function (e) {
                            if (t.setState({
                                captcha_token: e.captcha_token || "",
                                captcha_image: e.captcha_image || ""
                            }), e.code === jt) {
                                var n = e.errors.email || "", i = e.errors.captcha_code || "";
                                return t.setState({
                                    email_msg: n,
                                    captcha_code_msg: i
                                }), void (n ? ro[0].focus() : i && uo[0].focus())
                            }
                            (0, Nt.Z)(e)
                        }))
                    } else ro[0].focus()
                }
            }, prevStep: function () {
                return function (e, t) {
                    t.setState({email_valid: !1})
                }
            }, nextStep: function (e) {
                return function (t, n) {
                    e.preventDefault(), n.setState({verifying: !0});
                    var i = {email: t.email, email_code: t.email_code};
                    (0, Zt.z2)(i).finally((function () {
                        n.setState({verifying: !1})
                    })).catch((function (e) {
                        if (e.code === jt) {
                            if (!e.errors.email && !e.errors.email_code) return n.setState({email_valid: !0}), void setTimeout((function () {
                                co[0].focus()
                            }), 0);
                            var t = e.errors.email || "", i = e.errors.email_code || "";
                            return n.setState({
                                email_msg: t,
                                email_code_msg: i
                            }), void (t ? ro[0].focus() : i && so[0].focus())
                        }
                        if (e.code === Ut) return X.Z.snackbar("验证码已失效，请重新发送邮箱验证码", {timeout: 1e4}), void n.setState({
                            email_code: "",
                            email_code_msg: ""
                        });
                        (0, Nt.Z)(e)
                    }))
                }
            }, register: function (e) {
                return function (t, n) {
                    e.preventDefault(), n.setState({submitting: !0});
                    var i = {email: t.email, email_code: t.email_code, username: t.username, password: t.password},
                        o = {name: t.username, password: t.password, device: window.navigator.userAgent};
                    (0, Zt.z2)(i).then((function (e) {
                        return O("user_update", e.data), io(o)
                    })).finally((function () {
                        n.setState({submitting: !1})
                    })).then((function (e) {
                        ft("token", e.data.token), window.location.reload()
                    })).catch((function (e) {
                        if (e.code === jt) {
                            var t = e.errors.email || "", i = e.errors.email_code || "", o = e.errors.username || "",
                                a = e.errors.password || "";
                            return t || i ? (n.setState({
                                email_valid: !1,
                                email_msg: t,
                                email_code_msg: i
                            }), void (t ? ro[0].focus() : i && so[0].focus())) : (n.setState({
                                username_msg: o,
                                password_msg: a
                            }), void (o ? co[0].focus() : a && lo[0].focus()))
                        }
                        if (e.code === Ut) return X.Z.snackbar("验证码已失效，请重新发送邮箱验证码", {timeout: 1e4}), void n.setState({
                            email_valid: !1,
                            email_code: "",
                            email_code_msg: ""
                        });
                        (0, Nt.Z)(e)
                    }))
                }
            }
        }, Mt);
        var mo, fo, ho, go, _o, vo;
        const wo = ee({
            onInput: function (e) {
                var t, n = e.target;
                return (t = {})[n.name] = n.value, t[n.name + "_msg"] = "", t
            }, onCreate: function (e) {
                return function (t) {
                    var n = (0, x.Z)(e.element).mutation();
                    mo = new X.Z.Dialog(n, {
                        modal: !0,
                        history: !1
                    }), fo = n.find('[name="email"]'), ho = n.find('[name="email_code"]'), _o = n.find('[name="password"]'), vo = n.find('[name="password_repeat"]'), go = n.find('[name="captcha_code"]'), n.on("open.mdui.dialog", (function () {
                        t.email_valid ? _o[0].focus() : fo[0].focus()
                    }))
                }
            }, open: function () {
                mo.open()
            }, close: function () {
                mo && mo.close()
            }, toLogin: function () {
                mo.close(), O("login_open")
            }, toRegister: function () {
                mo.close(), O("register_open")
            }, refreshCaptcha: function () {
                return function (e, t) {
                    eo().then((function (e) {
                        var n = e.data, i = n.captcha_token, o = n.captcha_image;
                        t.setState({captcha_token: i, captcha_image: o, captcha_code: ""}), setTimeout((function () {
                            go[0].focus()
                        }), 0)
                    })).catch(Nt.Z)
                }
            }, countdown: function () {
                return function (e, t) {
                    e.resend_countdown > 0 ? (t.setState({resend_countdown: e.resend_countdown - 1}), setTimeout(t.countdown, 1e3)) : t.setState({show_resend_countdown: !1})
                }
            }, sendCountdown: function () {
                return function (e, t) {
                    t.setState({show_resend_countdown: !0, resend_countdown: 60}), t.countdown()
                }
            }, sendEmail: function () {
                return function (e, t) {
                    if (fo[0].validity.valid) {
                        if (e.captcha_token && !go[0].validity.valid) return t.setState({captcha_code_msg: "请输入图形验证码"}), void go[0].focus();
                        t.setState({sending: !0});
                        var n = {email: e.email};
                        e.captcha_token && (n.captcha_token = e.captcha_token, n.captcha_code = e.captcha_code), (0, Zt.LS)(n).finally((function () {
                            t.setState({
                                sending: !1,
                                captcha_token: "",
                                captcha_image: "",
                                captcha_code: "",
                                email_code: "",
                                email_code_msg: ""
                            })
                        })).then((function () {
                            X.Z.snackbar("邮箱验证码已发送"), t.sendCountdown()
                        })).catch((function (e) {
                            if (t.setState({
                                captcha_token: e.captcha_token || "",
                                captcha_image: e.captcha_image || ""
                            }), e.code === jt) {
                                var n = e.errors.email || "", i = e.errors.captcha_code || "";
                                return t.setState({
                                    email_msg: n,
                                    captcha_code_msg: i
                                }), void (n ? fo[0].focus() : i && go[0].focus())
                            }
                            (0, Nt.Z)(e)
                        }))
                    } else fo[0].focus()
                }
            }, prevStep: function () {
                return function (e, t) {
                    t.setState({email_valid: !1})
                }
            }, nextStep: function (e) {
                return function (t, n) {
                    e.preventDefault(), n.setState({verifying: !0});
                    var i = {email: t.email, email_code: t.email_code};
                    (0, Zt.gQ)(i).finally((function () {
                        n.setState({verifying: !1})
                    })).catch((function (e) {
                        if (e.code === jt) {
                            if (!e.errors.email && !e.errors.email_code) return n.setState({email_valid: !0}), void setTimeout((function () {
                                _o[0].focus()
                            }), 0);
                            var t = e.errors.email || "", i = e.errors.email_code || "";
                            return n.setState({
                                email_msg: t,
                                email_code_msg: i
                            }), void (t ? fo[0].focus() : i && ho[0].focus())
                        }
                        if (e.code === Ut) return X.Z.snackbar("验证码已失效，请重新发送邮箱验证码", {timeout: 1e4}), void n.setState({
                            email_code: "",
                            email_code_msg: ""
                        });
                        (0, Nt.Z)(e)
                    }))
                }
            }, submit: function (e) {
                return function (t, n) {
                    if (e.preventDefault(), t.password !== t.password_repeat) return n.setState({password_repeat_msg: "两次输入的密码不一致"}), void vo[0].focus();
                    n.setState({submitting: !0});
                    var i = {email: t.email, email_code: t.email_code, password: t.password};
                    (0, Zt.gQ)(i).finally((function () {
                        n.setState({submitting: !1})
                    })).then((function () {
                        X.Z.snackbar("重置密码成功"), mo.close(), O("login_open")
                    })).catch((function (e) {
                        if (e.code === jt) {
                            var t = e.errors.email || "", i = e.errors.email_code || "", o = e.errors.password || "";
                            return t || i ? (n.setState({
                                email_valid: !1,
                                email_msg: t,
                                email_code_msg: i
                            }), void (t ? fo[0].focus() : i && ho[0].focus())) : (n.setState({password_msg: o}), void (o && _o[0].focus()))
                        }
                        if (e.code === Ut) return X.Z.snackbar("验证码已失效，请重新发送邮箱验证码", {timeout: 1e4}), void n.setState({
                            email_valid: !1,
                            email_code: "",
                            email_code_msg: ""
                        });
                        (0, Nt.Z)(e)
                    }))
                }
            }
        }, Mt), bo = {type: "", data: [], pagination: null, loading: !1};
        var yo, xo, ko, So = {
            followees: Zt.QD, followers: Zt.ET, topic_followers: function (e) {
                return (0, gt.A_)((0, _t.K)("/topics/{topic_id}/followers", e, ["page", "per_page", "include"]))
            }, question_followers: function (e) {
                return (0, gt.A_)((0, _t.K)("/questions/{question_id}/followers", e, ["page", "per_page", "include"]))
            }, article_followers: function (e) {
                return (0, gt.A_)((0, _t.K)("/articles/{article_id}/followers", e, ["page", "per_page", "include"]))
            }
        }, Eo = {
            followees: "user_id",
            followers: "user_id",
            topic_followers: "topic_id",
            question_followers: "question_id",
            article_followers: "article_id"
        };
        const Co = ee({
            onCreate: function (e) {
                var t = e.element;
                xo = (0, x.Z)(t), ko = xo.find(".mdui-dialog-content")
            }, open: function (e) {
                var t = e.type, n = e.id;
                return function (e, i) {
                    var o;
                    yo || (yo = new X.Z.Dialog(".mc-users-dialog", {history: !1})).$element.on("closed.mdui.dialog", (function () {
                        i.setState(bo)
                    })), i.setState({type: t, data: [], pagination: null, loading: !0}), yo.open();
                    var a = function (e) {
                        e.finally((function () {
                            i.setState({loading: !1})
                        })).then((function (e) {
                            var t = e.data, n = e.pagination;
                            i.setState({data: i.getState().data.concat(t), pagination: n})
                        })).catch(Nt.Z)
                    }, r = function () {
                        var e;
                        if (!i.getState().loading) {
                            var o = i.getState().pagination;
                            o && (o.page >= o.pages || ko[0].scrollHeight - ko[0].scrollTop - ko[0].offsetHeight > 100 || (i.setState({loading: !0}), a(So[t](((e = {})[Eo[t]] = n, e.page = o.page + 1, e.include = ["is_following", "is_me"], e)))))
                        }
                    };
                    a(So[t](((o = {})[Eo[t]] = n, o.include = ["is_following", "is_me"], o))), ko.on("scroll", r), xo.on("close.mdui.dialog", (function () {
                        ko.off("scroll", r)
                    }))
                }
            }, close: function () {
                yo && yo.close()
            }, onItemClick: function (e) {
                y.actions.go(Wt("/users/" + e)), yo.close()
            }
        }, Mt), Oo = {
            commentable_type: "",
            commentable_id: 0,
            order: "create_time",
            comments_data: [],
            pagination: null,
            loading: !1,
            submitting: !1,
            open_dialog: !1
        };
        var To, Zo = ["user", "voting"], Io = function (e, t, n, i) {
            void 0 === i && (i = 1);
            var o, a = {page: i, per_page: 20, order: n, include: Zo};
            switch (e) {
                case"question":
                    a.question_id = t, o = function (e) {
                        return (0, gt.A_)((0, _t.K)("/questions/{question_id}/comments", e, ["page", "per_page", "order", "include"]))
                    }(a);
                    break;
                case"article":
                    a.article_id = t, o = function (e) {
                        return (0, gt.A_)((0, _t.K)("/articles/{article_id}/comments", e, ["page", "per_page", "order", "include"]))
                    }(a);
                    break;
                default:
                    a.answer_id = t, o = function (e) {
                        return (0, gt.A_)((0, _t.K)("/answers/{answer_id}/comments", e, ["page", "per_page", "order", "include"]))
                    }(a)
            }
            return o.then((function (e) {
                return e.data.forEach((function (t, n) {
                    e.data[n].show_replies = !1, e.data[n].show_new_reply = !1, e.data[n].reply_submitting = !1, e.data[n].replies_loading = !1, e.data[n].replies_data = [], e.data[n].replies_pagination = null
                })), e
            })), o
        };
        const No = ee({
            onCreate: function (e) {
                var t = e.commentable_type, n = e.commentable_id, i = e.isInDialog;
                return function (e, o) {
                    (e.commentable_type !== t || e.commentable_id !== n) && !i && (o.setState(Oo), o.setState({
                        commentable_type: t,
                        commentable_id: n
                    }), o.loadData()), i || S.on("scroll", o.infiniteLoadInPage)
                }
            }, onDestroy: function (e) {
                var t = e.isInDialog;
                return function (e, n) {
                    t || S.off("scroll", n.infiniteLoadInPage)
                }
            }, doCloseDialog: function () {
                return function (e, t) {
                    x.Z.hideOverlay(), setTimeout((function () {
                        (0, x.Z)(".mc-comments-dialog").hide(), x.Z.unlockScreen()
                    }), 300), t.setState({open_dialog: !1})
                }
            }, openDialog: function (e) {
                var t = e.commentable_type, n = e.commentable_id;
                return function (e, i) {
                    To = (0, x.Z)(".comments-wrapper"), x.Z.showOverlay(), x.Z.lockScreen(), (0, x.Z)(".mc-comments-dialog").show(), k.on("click", ".mdui-overlay", i.doCloseDialog), To.on("scroll", i.infiniteLoadInDialog), (e.commentable_type !== t || e.commentable_id !== n) && (i.setState(Oo), i.setState({
                        commentable_type: t,
                        commentable_id: n
                    }), i.loadData()), i.setState({open_dialog: !0})
                }
            }, closeDialog: function () {
                return function (e, t) {
                    e.open_dialog && (t.doCloseDialog(), k.off("click", ".mdui-overlay", t.doCloseDialog), To.off("scroll", t.infiniteLoadInDialog))
                }
            }, onSubmit: function () {
                return function (e, t) {
                    var n = {question: xt, answer: Nn, article: Ct}, i = (0, x.Z)(".new-comment"),
                        o = i.find("textarea"), a = o.val();
                    if (a) {
                        var r = {};
                        r[{
                            question: "question_id",
                            answer: "answer_id",
                            article: "article_id"
                        }[e.commentable_type]] = e.commentable_id, r.content = a, r.include = ["user", "voting"], t.setState({submitting: !0}), n[e.commentable_type](r).finally((function () {
                            t.setState({submitting: !1})
                        })).then((function (n) {
                            var a = n.data;
                            X.Z.snackbar("评论发布成功"), o.val(""), X.Z.updateTextFields(i);
                            var r = e.pagination, s = r && (r.page === r.pages || !r.pages);
                            r.total += 1, t.setState({pagination: r}), "-create_time" === e.order ? t.setState({comments_data: [a].concat(e.comments_data)}) : s && t.setState({comments_data: e.comments_data.concat(a)})
                        })).catch((function (e) {
                            e.code !== jt ? (0, Nt.Z)(e) : X.Z.snackbar(e.errors.content)
                        }))
                    } else X.Z.snackbar("请输入评论内容")
                }
            }, changeOrder: function (e) {
                return function (t, n) {
                    e !== t.order && (n.setState({order: e, comments_data: [], pagination: null}), n.loadData())
                }
            }, loadData: function () {
                return function (e, t) {
                    var n;
                    ((n = window.G_COMMENTS) && (t.setState({
                        comments_data: n.data,
                        pagination: n.pagination,
                        loading: !1
                    }), window.G_COMMENTS = null), n) || (t.setState({loading: !0}), Io(e.commentable_type, e.commentable_id, e.order).finally((function () {
                        t.setState({loading: !1})
                    })).then((function (e) {
                        t.setState({comments_data: e.data, pagination: e.pagination})
                    })).catch(Nt.Z))
                }
            }, infiniteLoadInPage: function () {
                return function (e, t) {
                    t.infiniteLoad({isInDialog: !1})
                }
            }, infiniteLoadInDialog: function () {
                return function (e, t) {
                    t.infiniteLoad({isInDialog: !0})
                }
            }, infiniteLoad: function (e) {
                var t = e.isInDialog;
                return function (e, n) {
                    if (!e.loading) {
                        var i = e.pagination;
                        if (!(i.page >= i.pages)) {
                            if (t) {
                                if (To[0].scrollHeight - To[0].scrollTop - To[0].clientHeight > 100) return
                            } else if (document.body.scrollHeight - window.pageYOffset - window.innerHeight > 100) return;
                            n.setState({loading: !0}), Io(e.commentable_type, e.commentable_id, e.order, i.page + 1).finally((function () {
                                n.setState({loading: !1})
                            })).then((function (t) {
                                n.setState({comments_data: e.comments_data.concat(t.data), pagination: t.pagination})
                            })).catch(Nt.Z)
                        }
                    }
                }
            }, toggleState: function (e) {
                var t = e.comment_id, n = e.fieldName, i = e.value;
                return void 0 === i && (i = void 0), function (e, o) {
                    var a = e.comments_data, r = (0, qn.c)(a, "comment_id", t), s = a[r];
                    a[r][n] = (0, Z.o8)(i) ? !s[n] : i, o.setState({comments_data: a}), "show_replies" === n && s[n] && !s.replies_pagination && o.loadReplies({comment: s})
                }
            }, loadReplies: function (e) {
                var t = e.comment;
                return function (e, n) {
                    var i,
                        o = !t.replies_loading && t.replies_pagination && t.replies_pagination.page === t.replies_pagination.pages;
                    t.replies_loading || o || (n.toggleState({
                        comment_id: t.comment_id,
                        fieldName: "replies_loading",
                        value: !0
                    }), (i = {
                        comment_id: t.comment_id,
                        page: t.replies_pagination ? t.replies_pagination.page + 1 : 1,
                        per_page: 10,
                        order: "create_time",
                        include: ["user", "voting"]
                    }, (0, gt.A_)((0, _t.K)("/comments/{comment_id}/replies", i, ["page", "per_page", "order", "include"]))).finally((function () {
                        n.toggleState({comment_id: t.comment_id, fieldName: "replies_loading", value: !1})
                    })).then((function (e) {
                        n.toggleState({
                            comment_id: t.comment_id,
                            fieldName: "replies_data",
                            value: t.replies_data.concat(e.data)
                        }), n.toggleState({
                            comment_id: t.comment_id,
                            fieldName: "replies_pagination",
                            value: e.pagination
                        })
                    })).catch(Nt.Z))
                }
            }, submitReply: function (e) {
                var t = e.target, n = e.comment;
                return function (e, i) {
                    var o = (0, x.Z)(t).parent();
                    if (!o.find(".submit")[0].disabled) {
                        var a = o.find("textarea").val();
                        if (a) {
                            var r = {comment_id: n.comment_id, content: a, include: ["user", "voting"]};
                            i.toggleState({
                                comment_id: n.comment_id,
                                fieldName: "reply_submitting",
                                value: !0
                            }), function (e) {
                                return (0, gt.j0)((0, _t.K)("/comments/{comment_id}/replies", e, ["include"]), (0, _t.o)(e, ["content"]))
                            }(r).finally((function () {
                                i.toggleState({comment_id: n.comment_id, fieldName: "reply_submitting", value: !1})
                            })).then((function () {
                                X.Z.snackbar("回复发布成功"), i.toggleState({
                                    comment_id: n.comment_id,
                                    fieldName: "show_new_reply"
                                }), i.toggleState({
                                    comment_id: n.comment_id,
                                    fieldName: "reply_count",
                                    value: n.reply_count + 1
                                })
                            })).catch((function (e) {
                                e.code !== jt ? (0, Nt.Z)(e) : X.Z.snackbar(e.errors.content)
                            }))
                        } else X.Z.snackbar("请输入回复内容")
                    }
                }
            }
        }, Mt, $n, $t.Z);
        const Ro = {type: "", item: null, reason: ""};
        var Do;
        const Ao = ee({
            onCreate: function (e) {
                var t = e.element;
                return function (e, n) {
                    var i = (0, x.Z)(t).mutation();
                    (Do = new X.Z.Dialog(i, {history: !1})).$element.on("confirm.mdui.dialog", (function () {
                        var e, t = Do.$element.find(".custom-reason"), i = t.val(), o = n.getState(), a = o.type,
                            r = o.item, s = o.reason;
                        (e = {
                            reportable_type: a, reportable_id: function () {
                                switch (a) {
                                    case"question":
                                        return r.question_id;
                                    case"answer":
                                        return r.answer_id;
                                    case"article":
                                        return r.article_id;
                                    case"comment":
                                        return r.comment_id;
                                    case"user":
                                        return r.user_id;
                                    default:
                                        return null
                                }
                            }(), reason: "其他原因" === s ? i : s
                        }, (0, gt.j0)((0, _t.K)("/reports/{reportable_type}:{reportable_id}", e, ["include"]), (0, _t.o)(e, ["reason"]))).finally((function () {
                            n.setState(Ro), t.val("")
                        })).then((function () {
                            X.Z.snackbar("举报成功")
                        })).catch((function (e) {
                            e.code !== jt ? (0, Nt.Z)(e) : X.Z.snackbar(Object.values(e.errors)[0])
                        })), Do.close()
                    }))
                }
            }, onChange: function (e) {
                return function (t, n) {
                    var i = e.target.value;
                    n.setState({reason: i}), [i, t.reason].indexOf("其他原因") > -1 && setTimeout((function () {
                        return Do.handleUpdate()
                    }))
                }
            }, open: function (e) {
                var t = e.type, n = e.item;
                return function (e, i) {
                    i.setState({type: t, item: n}), Do.open()
                }
            }, close: function () {
                Do.close()
            }
        }, Mt);
        var qo;
        const Mo = ee({
            onCreate: function (e) {
                var t = e.element, n = (0, x.Z)(t).mutation();
                qo = new X.Z.Dialog(n, {history: !1})
            }, open: function (e) {
                var t = e.url, n = e.title;
                return function (e, i) {
                    i.setState({url: t, title: n}), qo.open()
                }
            }, close: function () {
                qo.close()
            }, shareToWeibo: function () {
                return function (e, t) {
                    t.close(), window.open("https://service.weibo.com/share/share.php?url=" + e.url + "&title=" + e.title)
                }
            }, shareToFacebook: function () {
                return function (e, t) {
                    t.close(), window.open("https://www.facebook.com/sharer/sharer.php?u=" + e.url)
                }
            }, shareToTwitter: function () {
                return function (e, t) {
                    t.close(), window.open("https://twitter.com/intent/tweet?url=" + e.url)
                }
            }
        }, Mt), Lo = {
            location: y.actions,
            getState: function () {
                return function (e) {
                    return e
                }
            },
            index: Pt,
            questions: En,
            question: jn,
            answer: jn,
            articles: ei,
            article: ni,
            topics: mi,
            topic: xi,
            users: Ai,
            user: Gi,
            notifications: Qi,
            theme: {
                setLayout: function (e) {
                    return {layout: e}
                }
            },
            login: oo,
            register: po,
            reset: wo,
            usersDialog: Co,
            comments: No,
            reportDialog: Ao,
            shareDialog: Mo
        };
        const $o = ee({
            topics_data: [],
            topics_pagination: null,
            topics_loading: !1,
            questions_recent_data: [],
            questions_recent_pagination: null,
            questions_recent_loading: !1,
            questions_popular_data: [],
            questions_popular_pagination: null,
            questions_popular_loading: !1,
            articles_recent_data: [],
            articles_recent_pagination: null,
            articles_recent_loading: !1,
            articles_popular_data: [],
            articles_popular_pagination: null,
            articles_popular_loading: !1
        }, {topics_show_arrow_left: !1, topics_show_arrow_right: !1});
        const Po = ee({route: "question"}, Pn, Gt);
        const jo = ee({route: "answer"}, Pn, Gt), Uo = ee({}, ti), Ho = ee({}, gi);
        const Ko = ee({user: null}, Li);
        const Bo = {layout: "light"}, Go = ee({}, bo), zo = ee({}, Oo), Fo = ee({}, Ro), Yo = {
            location: y.state,
            index: $o,
            questions: Qt,
            question: Po,
            answer: jo,
            articles: Kn,
            article: Uo,
            topics: ai,
            topic: Ho,
            users: Ei,
            user: Ko,
            notifications: {data: [], pagination: null, loading: !1, count: null},
            theme: Bo,
            login: {
                name: "",
                name_msg: "",
                password: "",
                password_msg: "",
                captcha_code: "",
                captcha_code_msg: "",
                captcha_token: "",
                captcha_image: "",
                submitting: !1
            },
            register: {
                email: "",
                email_msg: "",
                email_code: "",
                email_code_msg: "",
                username: "",
                username_msg: "",
                password: "",
                password_msg: "",
                captcha_code: "",
                captcha_code_msg: "",
                captcha_token: "",
                captcha_image: "",
                email_valid: !1,
                sending: !1,
                show_resend_countdown: !1,
                resend_countdown: 60,
                verifying: !1,
                submitting: !1
            },
            reset: {
                email: "",
                email_msg: "",
                email_code: "",
                email_code_msg: "",
                password: "",
                password_msg: "",
                password_repeat: "",
                password_repeat_msg: "",
                captcha_code: "",
                captcha_code_msg: "",
                captcha_token: "",
                captcha_image: "",
                email_valid: !1,
                sending: !1,
                show_resend_countdown: !1,
                resend_countdown: 60,
                verifying: !1,
                submitting: !1
            },
            usersDialog: Go,
            comments: zo,
            reportDialog: Fo,
            shareDialog: {url: "", title: ""}
        };
        var Qo = Array.isArray;

        function Wo(e) {
            var t = "";
            if ("string" == typeof e || "number" == typeof e) return e || "";
            if (Qo(e)) for (var n, i = 0; i < e.length; i++) "" !== (n = Wo(e[i])) && (t += (t && " ") + n); else for (var i in e) e.hasOwnProperty(i) && e[i] && (t += (t && " ") + i);
            return t
        }

        const Jo = function (e) {
            var t = e.title;
            return f(g, {
                class: "header mdui-ripple",
                to: Wt(e.url)
            }, f("div", {class: "mdui-text-color-theme-secondary"}, t), f("i", {class: "mdui-icon material-icons mdui-text-color-theme"}, "arrow_forward"))
        };
        var Vo = function (e, t, n, i) {
            return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * ((e -= 1) * (e - 2) - 1) + t
        };
        const Xo = function (e) {
            return f("div", {
                key: "mc-loading",
                class: Wo(["mc-loading", {"mdui-hidden": !e.show}])
            }, f("div", {
                class: "mdui-spinner", oncreate: function (e) {
                    return (0, x.Z)(e).mutation()
                }
            }))
        };
        var ea = __webpack_require__(802), ta = __webpack_require__.n(ea), na = __webpack_require__(157),
            ia = __webpack_require__.n(na), oa = __webpack_require__(914), aa = __webpack_require__.n(oa),
            ra = __webpack_require__(344), sa = __webpack_require__.n(ra), ca = __webpack_require__(26),
            la = __webpack_require__.n(ca), ua = __webpack_require__(306), da = __webpack_require__.n(ua);
        ta().registerLanguage("xml", ia()), ta().registerLanguage("css", aa()), ta().registerLanguage("javascript", sa()), ta().registerLanguage("json", la()), ta().registerLanguage("php", da());
        var pa = function (e) {
            return function (t) {
                q(t, "html") !== e && (q(t, "html", e), e && "<p><br/></p>" !== e.replace(/ /gi, "") || (e = ""), t.innerHTML = e, function (e) {
                    (0, x.Z)(e).find("pre").each((function (e, t) {
                        ta().highlightBlock(t)
                    }))
                }(t))
            }
        }, ma = function (e, t) {
            return void 0 === t && (t = 0), function (n) {
                if (q(n, "html") !== e) {
                    q(n, "html", e);
                    var i = e.replace(/<[^>]+>/g, "");
                    t && (i = i.substr(0, t)), n.innerHTML = i
                }
            }
        }, fa = function (e) {
            return function (t) {
                q(t, "html") !== e && (q(t, "html", e), t.innerHTML = "<p>" + e.replace(/[\r\n]/g, "</p><p>") + "</p>")
            }
        };
        const ha = function (e) {
            var t = e.cls;
            void 0 === t && (t = "");
            var n = e.icon, i = e.iconActive, o = e.tooltip;
            void 0 === o && (o = "");
            var a = e.badge;
            void 0 === a && (a = 0);
            var r = e.active;
            void 0 === r && (r = !1);
            var s = e.onClick;
            return f("button", {
                class: Wo(["mc-icon-button", "mdui-btn", "mdui-btn-icon", "mdui-btn-outlined", {active: r}, t]),
                "mdui-tooltip": "{content: '" + o + "', delay: 300}",
                onclick: s
            }, a ? f("span", {class: "badge"}, function (e) {
                return e < 1e3 ? e : e < 1e4 ? (e / 1e3).toFixed(1) + "k" : Math.floor(e / 1e3) + "k"
            }(a)) : null, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, r && i ? i : n))
        }, ga = function (e) {
            var t = e.item, n = e.type, i = e.primaryKey;
            void 0 === i && (i = null);
            var o = e.id;
            void 0 === o && (o = null);
            var a = e.dataName;
            void 0 === a && (a = null);
            var r = e.actions, s = t.relationships.is_following;
            return f(ha, {
                cls: "mc-follow",
                icon: "star_border",
                iconActive: "star",
                tooltip: s ? "取消关注" : "关注",
                active: s,
                onClick: function () {
                    return r.toggleFollow({type: n, dataName: a, primaryKey: i, id: o})
                }
            })
        }, _a = function (e) {
            var t = e.topic, n = e.actions, i = e.type;
            return void 0 === i && (i = "topics"), f("div", {
                class: "mc-topic-item item-inner",
                key: t.topic_id
            }, f("div", {
                class: "item mdui-card",
                style: {backgroundImage: 'url("' + t.cover.small + '")'}
            }, f(g, {
                to: Wt("/topics/" + t.topic_id), class: "mdui-ripple info", onclick: function () {
                    return n.afterItemClick(t)
                }
            }, f("div", {
                class: "name mdui-text-color-theme-text",
                oncreate: ma(t.name),
                onupdate: ma(t.name)
            })), f("div", {class: "actions"}, f(ga, {
                item: t,
                type: i,
                id: t.topic_id,
                actions: n
            }), f("button", {
                class: "followers mdui-btn mdui-ripple mdui-text-color-theme-secondary",
                onclick: function () {
                    O("users_dialog_open", {type: "topic_followers", id: t.topic_id})
                }
            }, t.follower_count, " 人关注"))))
        };
        var va = function (e, t) {
            t.setState({
                topics_show_arrow_left: e.scrollLeft > 0,
                topics_show_arrow_right: e.scrollLeft + e.offsetWidth < e.scrollWidth
            })
        }, wa = function (e, t, n) {
            var i = (0, x.Z)(e.target).parents(".topics-wrapper").find(".topics")[0], o = "left" === t,
                a = i.offsetWidth * (o ? -1 : 1);
            !function (e, t) {
                var n, i, o, a = t.duration || 300, r = t.offset || 0, s = t.callback, c = e.scrollLeft;
                window.requestAnimationFrame((function t(l) {
                    n || (n = l), o = Vo(i = l - n, c, r, a), e.scrollLeft = o, i < a ? window.requestAnimationFrame(t) : (e.scrollLeft = c + r, s && s(), n = !1)
                }))
            }(i, {
                offset: a, callback: function () {
                    va(i, n)
                }
            })
        }, ba = function (e) {
            var t = e.icon, n = e.cls, i = e.show, o = e.onClick;
            return f("button", {
                class: Wo(["mdui-btn", "mdui-btn-raised", "mdui-btn-icon", "mdui-ripple", n, {"mdui-hidden": !i}]),
                onclick: o
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, t))
        };
        const ya = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {class: "topics-wrapper"}, f("div", {
                class: "topics", onupdate: function (e) {
                    return va(e, n)
                }
            }, t.topics_data.map((function (e) {
                return f(_a, {topic: e, actions: n, type: "index_topics"})
            }))), f(ba, {
                icon: "keyboard_arrow_left",
                cls: "arrow-left",
                show: t.topics_show_arrow_left,
                onClick: function (e) {
                    return wa(e, "left", n)
                }
            }), f(ba, {
                icon: "keyboard_arrow_right",
                cls: "arrow-right",
                show: t.topics_show_arrow_right,
                onClick: function (e) {
                    return wa(e, "right", n)
                }
            }), f(Xo, {show: t.topics_loading}))
        };
        var xa = function (e) {
            var t, n;
            n = e, (t = document.createElement("textArea")).value = n, document.body.appendChild(t), function () {
                if (window.navigator.userAgent.match(/ipad|iphone/i)) {
                    var e = document.createRange();
                    e.selectNodeContents(t);
                    var n = window.getSelection();
                    n.removeAllRanges(), n.addRange(e), t.setSelectionRange(0, 999999)
                } else t.select()
            }(), function () {
                try {
                    document.execCommand("Copy") ? X.Z.snackbar("已复制") : X.Z.snackbar("复制失败！请手动复制！")
                } catch (e) {
                    X.Z.snackbar("复制失败！请手动复制！")
                }
                document.body.removeChild(t)
            }()
        };
        const ka = function (e) {
            var t, n, i = e.type, o = e.item, a = e.extraOptions;
            switch (void 0 === a && (a = null), i) {
                case"question":
                    t = "/questions/" + o.question_id, n = o.title;
                    break;
                case"answer":
                    t = "/questions/" + o.question_id + "/answers/" + o.answer_id, n = o.title;
                    break;
                case"article":
                    t = "/articles/" + o.article_id, n = o.title;
                    break;
                case"comment":
                    n = o.content;
                    break;
                case"user":
                    t = "/users/" + o.user_id, n = o.username;
                    break;
                case"topic":
                    t = "/topics/" + o.topic_id, n = o.name
            }
            t = window.location.protocol + "//" + window.location.host + Wt(t);
            var r = function (e) {
                var t = e.name;
                return f("li", {class: "mdui-menu-item"}, f("a", {class: "mdui-ripple", onclick: e.onClick}, t))
            };
            return f("div", {
                class: "mc-options-button", oncreate: function (e) {
                    var t = (0, x.Z)(e);
                    new X.Z.Menu(t.children("button"), t.children(".mdui-menu"), {position: "top", align: "right"})
                }
            }, f("button", {class: Wo(["mdui-btn", "mdui-btn-icon", "mdui-text-color-theme-icon", "mdui-ripple"])}, f("i", {class: "mdui-icon material-icons"}, "more_vert")), f("ul", {class: "mdui-menu"}, "comment" !== i ? [f(r, {
                name: "复制链接",
                onClick: function () {
                    return xa(t)
                },
                key: "0"
            }), f(r, {
                name: "分享", onClick: function () {
                    return O("share_dialog_open", {url: t, title: n})
                }, key: "1"
            })] : null, "topic" === i || "user" === i && It() && It().user_id === o.user_id ? null : f(r, {
                name: "举报",
                onClick: function () {
                    return O("report_dialog_open", {type: i, item: o})
                }
            }), a ? a.map((function (e) {
                return f(r, {name: e.name, onClick: e.onClick})
            })) : null))
        };
        var Sa = function (e) {
            var t = e.url, n = e.label, i = e.count;
            return f(g, {
                to: t,
                class: "mdui-btn mdui-ripple"
            }, f("label", {class: "mdui-text-color-theme-secondary"}, n), f("span", {class: "mdui-text-color-theme-text"}, i))
        };
        const Ea = function (e, t) {
            var n = e.actions, i = e.user, o = e.dataName, a = e.primaryKey;
            void 0 === a && (a = null);
            var r = e.primaryValue;
            return void 0 === r && (r = null), f("div", {
                class: "mc-user-popover",
                key: "mc-user-popover",
                onclick: function (e) {
                    return e.preventDefault()
                },
                oncreate: function (e) {
                    n.onUserPopoverCreate({element: e, dataName: o, primaryKey: a, primaryValue: r})
                }
            }, t, f("div", {class: "popover mdui-menu", key: "popover"}, i.cover ? [f("div", {
                class: "mc-user-line",
                key: "0"
            }, f(g, {
                key: "avatar",
                class: "avatar user-popover-trigger",
                to: Wt("/users/" + i.user_id),
                style: {backgroundImage: 'url("' + i.avatar.middle + '")'}
            }), f(g, {
                key: "username",
                class: "username user-popover-trigger mdui-text-color-theme-text",
                to: Wt("/users/" + i.user_id)
            }, i.username), f("div", {
                key: "headline",
                class: "headline mdui-text-color-theme-secondary"
            }, In(i.headline))), f("div", {
                class: "stats",
                key: "1"
            }, f(Sa, {
                url: Wt("/users/" + i.user_id + "#answers"),
                label: "回答",
                count: i.answer_count
            }), f(Sa, {
                url: Wt("/users/" + i.user_id + "#articles"),
                label: "文章",
                count: i.article_count
            }), f("button", {
                class: "mdui-btn mdui-ripple", onclick: function () {
                    O("users_dialog_open", {type: "followers", id: i.user_id})
                }
            }, f("label", {class: "mdui-text-color-theme-secondary"}, "关注者"), f("span", {class: "mdui-text-color-theme-text"}, i.follower_count))), f("div", {
                class: "bottom",
                key: "2"
            }, It() && It().user_id === i.user_id ? null : f(ga, {
                item: i,
                type: "relationships-user",
                dataName: o,
                primaryKey: a,
                id: r,
                actions: n
            }), f("div", {class: "flex-grow"}), f(ka, {
                type: "user",
                item: i
            }))] : null, i.cover ? null : f("div", {
                key: "mc-user-popover-spinner",
                class: "mdui-spinner",
                oncreate: function (e) {
                    return (0, x.Z)(e).mutation()
                }
            })))
        }, Ca = function (e) {
            var t = e.title, n = e.items, i = e.primaryKey, o = e.dataName, a = e.loading, r = e.url, s = e.actions;
            return f("div", {class: "items-container"}, f("div", {class: "items mdui-card"}, f(Jo, {
                title: t,
                url: r
            }), f("div", {class: "content"}, f(Xo, {show: a}), n.map((function (e) {
                return f(g, {
                    class: "item", to: Wt(r.split("#")[0] + "/" + e[i]), onclick: function () {
                        return s.afterItemClick(e)
                    }
                }, f(Ea, {
                    actions: s,
                    user: e.relationships.user,
                    dataName: o,
                    primaryKey: i,
                    primaryValue: e[i]
                }, f("div", {
                    class: "avatar user-popover-trigger",
                    style: {backgroundImage: 'url("' + e.relationships.user.avatar.middle + '")'}
                })), f("div", {
                    class: "title mdui-text-color-theme-text",
                    oncreate: ma(e.title),
                    onupdate: ma(e.title)
                }))
            })))))
        }, Oa = function (e, t) {
            return function (n) {
                var i = n.match;
                return f("div", {
                    oncreate: t.onCreate,
                    ondestroy: t.onDestroy,
                    key: i.url,
                    id: "page-index",
                    class: "mdui-container"
                }, f(Jo, {title: "推荐话题", url: "/topics#recommended"}), f(ya, {
                    state: e,
                    actions: t
                }), f("div", {class: "items-wrapper"}, f(Ca, {
                    title: "最近更新提问",
                    items: e.questions_recent_data,
                    primaryKey: "question_id",
                    dataName: "questions_recent_data",
                    loading: e.questions_recent_loading,
                    url: "/questions",
                    actions: t
                }), f(Ca, {
                    title: "最近热门提问",
                    items: e.questions_popular_data,
                    primaryKey: "question_id",
                    dataName: "questions_popular_data",
                    loading: e.questions_popular_loading,
                    url: "/questions#popular",
                    actions: t
                })), f("div", {class: "items-wrapper"}, f(Ca, {
                    title: "最新文章",
                    items: e.articles_recent_data,
                    primaryKey: "article_id",
                    dataName: "articles_recent_data",
                    loading: e.articles_recent_loading,
                    url: "/articles",
                    actions: t
                }), f(Ca, {
                    title: "最近热门文章",
                    items: e.articles_popular_data,
                    primaryKey: "article_id",
                    dataName: "articles_popular_data",
                    loading: e.articles_popular_loading,
                    url: "/articles#popular",
                    actions: t
                })))
            }
        }, Ta = function (e) {
            return f("div", {class: Wo(["mc-loaded", {"mdui-hidden": !e.show}]), key: "mc-loaded"}, "已加载完所有数据")
        }, Za = function (e) {
            var t = e.show;
            void 0 === t && (t = !1);
            var n = e.title, i = e.description;
            void 0 === i && (i = "");
            var o = e.action;
            void 0 === o && (o = !1);
            var a = e.action_text;
            return void 0 === a && (a = ""), f("div", {
                class: Wo(["mc-empty", {"mdui-hidden": !t}]),
                style: {backgroundImage: "url(" + (window.G_OPTIONS.site_static_url ? window.G_OPTIONS.site_static_url : window.G_ROOT + "/static") + "/theme/material/./994575169312f0027615406d265202f2.png)"},
                key: "mc-empty"
            }, f("div", {class: "title"}, n), i ? f("div", {class: "description"}, i) : null, o ? f("button", {
                class: "mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme",
                onclick: function () {
                    o()
                }
            }, a) : null)
        };
        x.Z.fn.last = function () {
            return this.eq(-1)
        };
        var Ia = function (e) {
            this.editor = e
        }, Na = {
            $toolbar: {configurable: !0},
            $container: {configurable: !0},
            selection: {configurable: !0},
            command: {configurable: !0}
        };
        Na.$toolbar.get = function () {
            return this.editor.$toolbar
        }, Na.$container.get = function () {
            return this.editor.$container
        }, Na.selection.get = function () {
            return this.editor.selection
        }, Na.command.get = function () {
            return this.editor.command
        }, Object.defineProperties(Ia.prototype, Na);
        const Ra = Ia;
        const Da = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.do = function (e, t) {
                if (this.selection.getRange()) {
                    this.selection.restore();
                    var n = e;
                    this[n] ? this[n](t) : document.execCommand(e, !1, t), this.editor.menus.changeStatus(), this.selection.saveRange(), this.selection.restore(), this.editor.change && this.editor.change()
                }
            }, t.prototype.insertHTML = function (e) {
                if (document.queryCommandSupported("insertHTML")) document.execCommand("insertHTML", !1, e); else {
                    var t = this.selection.getRange();
                    t.insertNode ? (t.deleteContents(), t.insertNode((0, x.Z)(e)[0])) : t.pasteHTML && t.pasteHTML(e)
                }
            }, t.prototype.replaceRoot = function (e) {
                var t = this.selection.getRootElem(), n = (0, x.Z)(e).insertAfter(t);
                t.remove(), this.selection.createRangeByElem(n, !1, !0), this.selection.restore()
            }, t.prototype.insertAfterRoot = function (e) {
                var t = this.selection.getRootElem(), n = (0, x.Z)(e).insertAfter(t);
                this.selection.createRangeByElem(n, !1, !0), this.selection.restore()
            }, t.prototype.appendHTML = function (e) {
                var t = (0, x.Z)(e).appendTo(this.$container);
                this.selection.createRangeByElem(t, !1, !0), this.selection.restore()
            }, t.prototype.insertElem = function (e) {
                var t = this.selection.getRange();
                t.insertNode && (t.deleteContents(), t.insertNode(e[0]))
            }, t
        }(Ra);
        var Aa = function (e) {
            function t(t, n) {
                e.call(this, t), this.$button = n
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.isActive = function () {
                return !1
            }, t
        }(Ra);
        Aa.icon = "", Aa.title = "", Aa.disable = [];
        const qa = Aa;
        const Ma = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.onclick = function () {
                var e = this.selection.isEmpty();
                e && this.selection.createEmptyRange(this.getElementName()), this.command.do(this.getCommandName()), e && (this.selection.collapseRange(), this.selection.restore())
            }, t.prototype.isActive = function () {
                return document.queryCommandState(this.getCommandName())
            }, t
        }(qa);
        var La = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getCommandName = function () {
                return "bold"
            }, t.prototype.getElementName = function () {
                return "strong"
            }, t
        }(Ma);
        La.icon = "format_bold", La.title = "粗体", La.disable = ["image"];
        const $a = La;
        var Pa = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.onclick = function () {
                var e = this;
                X.Z.confirm("确定要清空内容？", (function () {
                    var t = e.editor.options;
                    e.editor.setHTML(""), t.autoSave && (window.localStorage.removeItem(t.autoSaveKey), t.onClearDrafts())
                }), Z.ar, {confirmText: "确定", cancelText: "取消"})
            }, t
        }(qa);
        Pa.icon = "delete", Pa.title = "舍弃草稿";
        const ja = Pa;

        function Ua(e) {
            return void 0 === e && (e = ""), e.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;")
        }

        x.Z.fn.add = function (e) {
            return new N.JQ(R($(this.get(), (0, x.Z)(e).get())))
        };
        var Ha = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.active = !1, this.init()
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.init = function () {
                var e = this;
                this.$container.on("keydown", (function (t) {
                    if (13 === t.keyCode && e.active) {
                        t.preventDefault();
                        var n = e.selection.getRange().startOffset;
                        e.command.do("insertHTML", "\n"), e.selection.saveRange(), e.selection.getRange().startOffset === n && e.command.do("insertHTML", "\n"), e.selection.getContainerElem()[0].scrollLeft = 0
                    }
                    9 === t.keyCode && e.active && (t.preventDefault(), e.command.do("insertHTML", "    "))
                }))
            }, t.prototype.onclick = function () {
                var e = this, t = this.selection.getRootElem();
                if (this.active) {
                    var n = t.text().split("\n"), i = "";
                    return n.forEach((function (e) {
                        e = Ua(e), i = e ? "<p>" + e + "</p>" + i : "<p><br></p>" + i
                    })), void this.command.do("replaceRoot", i)
                }
                if (t.length) {
                    var o = Ua(t.text());
                    this.command.do("replaceRoot", o ? "<pre><code>" + o + "</code></pre>" : "<pre><code><br></code></pre>")
                } else {
                    var a = this.selection.getRange();
                    if (a.collapsed) this.command.do("appendHTML", "<pre><code><br></code></pre>"); else {
                        var r = "", s = !1, c = (0, x.Z)();
                        this.$container.children().each((function (t, n) {
                            var i = (0, x.Z)(n);
                            return s || (i.is(a.startContainer) || i[0].contains(a.startContainer) || e.$container.is(a.startContainer)) && (s = !0), !(s && (r += Ua(i.text()) + "\n", c = c.add(i), i.is(a.endContainer) || i[0].contains(a.endContainer)))
                        })), c.each((function (e, t) {
                            var n = (0, x.Z)(t);
                            e < c.length - 1 && n.remove()
                        })), this.selection.createRangeByElem(c.last(), !1, !0), this.command.do("replaceRoot", "<pre><code>" + r + "</code></pre>")
                    }
                }
            }, t.prototype.isActive = function () {
                return this.active = this.selection.getRootElem().is("pre"), this.active
            }, t
        }(qa);
        Ha.icon = "code", Ha.title = "代码块", Ha.disable = ["bold", "italic", "head", "ol", "ul", "link", "image"];
        const Ka = Ha;
        var Ba = function (e) {
            function t() {
                e.apply(this, arguments), this.active = !1
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.onclick = function () {
                var e = this.selection.getRootElem();
                if (this.active) {
                    var t = e.text();
                    this.command.do("replaceRoot", t ? "<p>" + t + "</p>" : "<p><br></p>")
                } else {
                    if (e.length) this.command.do("replaceRoot", "<h2>" + Ua(e.text()) + "</h2>"); else this.selection.getRange().collapsed && this.command.do("appendHTML", "<h2><br></h2>")
                }
            }, t.prototype.isActive = function () {
                return this.active = this.selection.getRootElem().is("h2"), this.active
            }, t
        }(qa);
        Ba.icon = "title", Ba.title = "标题", Ba.disable = ["bold", "italic", "image"];
        const Ga = Ba;
        var za = {confirmText: "ok", history: !0, modal: !1, closeOnEsc: !0, closeOnConfirm: !0};
        X.Z.alert = function (e, t, n, i) {
            return (0, Z.mf)(t) && (i = n, n = t, t = ""), (0, Z.o8)(n) && (n = function () {
            }), (0, Z.o8)(i) && (i = {}), i = ee({}, za, i), X.Z.dialog({
                title: t,
                content: e,
                buttons: [{text: i.confirmText, bold: !1, close: i.closeOnConfirm, onClick: n}],
                cssClass: "mdui-dialog-alert",
                history: i.history,
                modal: i.modal,
                closeOnEsc: i.closeOnEsc
            })
        };
        var Fa = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.$input = (0, x.Z)(), this.inputID = x.Z.guid(), this.suffixs = [], this.accepts = [], this.setAccepts(), this.setInput(), this.bindInputChange(), this.bindKeyboardEvent()
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.bindKeyboardEvent = function () {
                var e = this;
                this.$container.on("keydown", (function (t) {
                    var n = t.keyCode;
                    e.selection.saveRange();
                    var i = e.selection.getContainerElem();
                    if ((8 === n || 46 === n) && i.is("figcaption")) {
                        var o = i.html().toLowerCase().trim();
                        o && "<br>" !== o && "<br/>" !== o || (i.html(""), t.preventDefault())
                    }
                    if (i.is("figure") && (8 !== n && 46 !== n || (e.selection.createRangeByElem(i.next()), i.remove(), e.selection.restore()), t.preventDefault()), 13 === n && i.is("figcaption")) {
                        var a = e.selection.getRootElem().next();
                        a.length ? (e.selection.createRangeByElem(a), e.selection.restore()) : e.command.do("insertAfterRoot", "<p><br></p>"), t.preventDefault()
                    }
                })), this.$container.on("keyup", (function (t) {
                    var n = t.keyCode, i = e.selection.getContainerElem();
                    if ((8 === n || 46 === n) && i.is("figcaption")) {
                        var o = i.html().toLowerCase().trim();
                        o && "<br>" !== o && "<br/>" !== o || i.html("")
                    }
                }))
            }, t.prototype.setAccepts = function () {
                this.suffixs = this.editor.options.imageUploadSuffix;
                var e = {png: "image/png", jpg: "image/jpeg", gif: "image/gif"};
                this.accepts = this.suffixs.map((function (t) {
                    return e[t]
                }))
            }, t.prototype.setInput = function () {
                this.$input = (0, x.Z)('<input type="file" id="' + this.inputID + '" name="' + this.editor.options.imageUploadName + '" accept="' + this.accepts.join(", ") + '"/>').insertAfter(this.$button)
            }, t.prototype.bindInputChange = function () {
                var e = this;
                this.$input.on("change", (function (t) {
                    var n = t.target.files;
                    n.length && (e.upload(n[0]), e.$input.val(""))
                }))
            }, t.prototype.upload = function (e) {
                var t = this;
                if (this.accepts.indexOf(e.type) < 0) X.Z.alert("仅允许上传 " + this.suffixs.join(", ") + " 格式的图片"); else if (this.editor.options.imageUploadMaxSize && e.size > this.editor.options.imageUploadMaxSize) X.Z.alert("图片体积不能超过 " + function (e) {
                    for (var t = 0; e >= 1024;) e /= 1024, t++;
                    return e.toFixed(2) + ["B", "KB", "MB", "GB", "TB"][t]
                }(this.editor.options.imageUploadMaxSize)); else {
                    var n, i, o, a = new FormData;
                    a.append(this.editor.options.imageUploadName, e), ut({
                        url: this.editor.options.imageUploadUrl,
                        method: "POST",
                        data: a,
                        processData: !1,
                        dataType: "json",
                        contentType: !1,
                        global: !1,
                        beforeSend: function (e) {
                            i = 0, o = setInterval((function () {
                                return i += 100
                            }), 100);
                            var t = (n = X.Z.dialog({
                                title: "上传中…",
                                content: '<p class="mdui_editor-upload-progress">0%</p>',
                                history: !1,
                                modal: !0,
                                cssClass: "mdui_editor-upload-progress-dialog"
                            })).$element.find(".mdui_editor-upload-progress");
                            e.upload.onprogress = function (e) {
                                t.html((e.loaded / e.total * 100).toFixed(0) + "%")
                            }
                        },
                        complete: function () {
                            clearInterval(o), i < 500 ? setTimeout((function () {
                                n.close()
                            }), 500 - i) : n.close()
                        }
                    }).then((function (e) {
                        if (t.editor.options.imageUploadResponseTransform && (e = t.editor.options.imageUploadResponseTransform(e)), e.code) X.Z.alert(e.message); else {
                            var n = t.selection.getRootElem(), i = n.html().toLowerCase().trim(),
                                o = '<figure><img src="' + e.data.url + '"/><figcaption placeholder="图片描述（选填）"></figcaption></figure>';
                            "P" !== n[0].nodeName || "<br>" !== i && "<br/>" !== i ? t.command.do("insertAfterRoot", o) : t.command.do("replaceRoot", o), t.command.do("insertAfterRoot", "<p><br></p>")
                        }
                    })).catch((function () {
                        return X.Z.alert("图片上传失败")
                    }))
                }
            }, t.prototype.onclick = function () {
                (0, x.Z)("#" + this.inputID).trigger("click")
            }, t
        }(qa);
        Fa.icon = "image", Fa.title = "插入图片";
        const Ya = Fa;
        var Qa = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getCommandName = function () {
                return "italic"
            }, t.prototype.getElementName = function () {
                return "em"
            }, t
        }(Ma);
        Qa.icon = "format_italic", Qa.title = "斜体", Qa.disable = ["image"];
        const Wa = Qa;
        var Ja = {
            confirmText: "ok",
            cancelText: "cancel",
            history: !0,
            modal: !1,
            closeOnEsc: !0,
            closeOnCancel: !0,
            closeOnConfirm: !0,
            type: "text",
            maxlength: 0,
            defaultValue: "",
            confirmOnEnter: !1
        };
        X.Z.prompt = function (e, t, n, i, o) {
            (0, Z.mf)(t) && (o = i, i = n, n = t, t = ""), (0, Z.o8)(n) && (n = function () {
            }), (0, Z.o8)(i) && (i = function () {
            }), (0, Z.o8)(o) && (o = {});
            var a = '<div class="mdui-textfield">' + (e ? '<label class="mdui-textfield-label">' + e + "</label>" : "") + ("text" === (o = ee({}, Ja, o)).type ? '<input class="mdui-textfield-input" type="text" value="' + o.defaultValue + '" ' + (o.maxlength ? 'maxlength="' + o.maxlength + '"' : "") + "/>" : "") + ("textarea" === o.type ? '<textarea class="mdui-textfield-input" ' + (o.maxlength ? 'maxlength="' + o.maxlength + '"' : "") + ">" + o.defaultValue + "</textarea>" : "") + "</div>";
            return X.Z.dialog({
                title: t,
                content: a,
                buttons: [{
                    text: o.cancelText, bold: !1, close: o.closeOnCancel, onClick: function (e) {
                        var t = e.$element.find(".mdui-textfield-input").val();
                        i(t, e)
                    }
                }, {
                    text: o.confirmText, bold: !1, close: o.closeOnConfirm, onClick: function (e) {
                        var t = e.$element.find(".mdui-textfield-input").val();
                        n(t, e)
                    }
                }],
                cssClass: "mdui-dialog-prompt",
                history: o.history,
                modal: o.modal,
                closeOnEsc: o.closeOnEsc,
                onOpen: function (e) {
                    var t = e.$element.find(".mdui-textfield-input");
                    X.Z.updateTextFields(t), t[0].focus(), "textarea" !== o.type && !0 === o.confirmOnEnter && t.on("keydown", (function (t) {
                        if (13 === t.keyCode) {
                            var i = e.$element.find(".mdui-textfield-input").val();
                            return n(i, e), o.closeOnConfirm && e.close(), !1
                        }
                    })), "textarea" === o.type && t.on("input", (function () {
                        return e.handleUpdate()
                    })), o.maxlength && e.handleUpdate()
                }
            })
        };
        var Va = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.onclick = function () {
                var e = this, t = this.selection.getContainerElem(), n = "";
                t.is("a") && (this.selection.createRangeByElem(t, !1, !0), n = t.attr("href") || "");
                var i = X.Z.prompt("请输入链接地址", (function (t, n) {
                    if (!t) return e.command.do("unlink"), void n.close();
                    var i = n.$element.find(".mdui-textfield-input")[0];
                    return i.validity && i.validity.valid ? (e.command.do("createLink", t), void n.close()) : void 0
                }), Z.ar, {
                    confirmText: "确认",
                    cancelText: "取消",
                    defaultValue: n,
                    confirmOnEnter: !0,
                    closeOnConfirm: !1
                });
                i.$element.find(".mdui-textfield-input").attr("type", "text").attr("pattern", "^(https?|ftp|file)://[\\S]+\\.[\\S]+$").after('<div class="mdui-textfield-error">链接格式错误</div>'), X.Z.updateTextFields(i.$element.find(".mdui-textfield")), i.handleUpdate()
            }, t.prototype.isActive = function () {
                return this.selection.getContainerElem().is("a")
            }, t
        }(qa);
        Va.icon = "link", Va.title = "插入链接", Va.disable = ["image"];
        const Xa = Va;
        (0, T.Z)(["", "All", "Until"], (function (e, t) {
            x.Z.fn["prev" + t] = function (t, n) {
                return P(e ? (0, x.Z)(this.get().reverse()) : this, e, "previousElementSibling", t, n)
            }
        }));
        const er = function (e) {
            function t() {
                e.apply(this, arguments), this.disable = ["head", "code", "image"]
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getCommandName = function () {
                return "ol" === this.getName() ? "insertOrderedList" : "insertUnorderedList"
            }, t.prototype.moveListToRoot = function (e) {
                var t = this;
                e.each((function (e, n) {
                    var i = (0, x.Z)(n).parent();
                    i.is(t.$container) || (t.selection.createRangeByElem(i, !1, !0), t.command.do("replaceRoot", n))
                }))
            }, t.prototype.moveElemToP = function () {
                var e = this;
                (0, x.Z)(this.$container[0].childNodes).each((function (t, n) {
                    var i = (0, x.Z)(n), o = n.nodeType, a = n.nodeName, r = n.nodeValue, s = n.outerHTML;
                    return 3 === o ? (e.selection.createRangeByElem(i.prev(), !1, !0), e.command.do("insertAfterRoot", r ? "<p>" + r + "</p>" : "<p><br></p>"), void i.remove()) : 1 === o ? ["B", "STRONG", "I", "EM", "A"].indexOf(a) > -1 ? (e.selection.createRangeByElem(i, !1, !0), void e.command.do("replaceRoot", s ? "<p>" + s + "</p>" : "<p><br></p>")) : void ("BR" === a && i.remove()) : void 0
                }))
            }, t.prototype.onclick = function () {
                this.command.do(this.getCommandName()), this.moveListToRoot(this.$container.find(this.getName())), this.moveElemToP()
            }, t.prototype.isActive = function () {
                return document.queryCommandState(this.getCommandName())
            }, t
        }(qa);
        var tr = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getName = function () {
                return "ol"
            }, t
        }(er);
        tr.icon = "format_list_numbered", tr.title = "有序列表";
        const nr = tr;
        var ir = function (e) {
            function t() {
                e.apply(this, arguments)
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getName = function () {
                return "ul"
            }, t
        }(er);
        ir.icon = "format_list_bulleted", ir.title = "无序列表";
        var or = {bold: $a, clear_drafts: ja, code: Ka, head: Ga, image: Ya, italic: Wa, link: Xa, ol: nr, ul: ir};
        const ar = function (e) {
            function t(t) {
                e.call(this, t), this.menus = {}, this.init()
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.init = function () {
                var e = this;
                this.editor.options.menus.forEach((function (t) {
                    if ("|" !== t) if (" " !== t) {
                        var n = or[t];
                        if (n && "function" == typeof n) {
                            var i = (0, x.Z)('<button class="mdui-btn mdui_editor-toolbar-menu mdui_editor-toolbar-menu-' + t + '" type="button" title="' + n.title + '"><i class="mdui-icon material-icons">' + n.icon + "</i></button>").appendTo(e.$toolbar),
                                o = new n(e.editor, i);
                            e.menus[t] = o;
                            i.on("click", (function () {
                                null !== e.selection.getRange() && o.onclick()
                            }))
                        }
                    } else e.$toolbar.append('<div class="mdui-toolbar-spacer"></div>'); else e.$toolbar.append('<div class="mdui_editor-toolbar-divider"></div>')
                }))
            }, t.prototype.changeStatus = function () {
                var e = this, t = [];
                (0, T.Z)(this.menus, (function (n, i) {
                    setTimeout((function () {
                        i.isActive() ? (i.$button.addClass("mdui_editor-toolbar-menu-active"), or[n].disable && (t = t.concat(or[n].disable))) : i.$button.removeClass("mdui_editor-toolbar-menu-active"), n === e.editor.options.menus[e.editor.options.menus.length - 1] && (t = R(t), (0, T.Z)(e.menus, (function (e, n) {
                            n.$button.prop("disabled", t.indexOf(e) > -1)
                        })))
                    }), 0)
                }))
            }, t
        }(Ra);
        const rr = function (e) {
            function t() {
                e.apply(this, arguments), this.currentRange = void 0
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getRange = function () {
                return this.currentRange
            }, t.prototype.saveRange = function (e) {
                if (e) this.currentRange = e; else {
                    var t = window.getSelection();
                    if (0 !== t.rangeCount) {
                        var n = t.getRangeAt(0), i = this.getContainerElem(n);
                        i.length && this.$container[0].contains(i[0]) && (this.currentRange = n)
                    }
                }
            }, t.prototype.collapseRange = function (e) {
                void 0 === e && (e = !1);
                var t = this.currentRange;
                t && t.collapse(e)
            }, t.prototype.getText = function () {
                return this.currentRange ? this.currentRange.toString() : ""
            }, t.prototype.getContainerElem = function (e) {
                if (e = e || this.currentRange) {
                    var t = e.commonAncestorContainer;
                    return (0, x.Z)(1 === t.nodeType ? t : t.parentNode)
                }
                return (0, x.Z)()
            }, t.prototype.getRootElem = function (e) {
                var t = this.getContainerElem(e);
                return this.$container.is(t) ? (0, x.Z)() : t.parent().is(this.$container) ? t : t.parentsUntil(this.$container).last()
            }, t.prototype.isEmpty = function () {
                var e = this.currentRange;
                return !(!e || !e.startContainer) && (e.startContainer === e.endContainer && e.startOffset === e.endOffset)
            }, t.prototype.restore = function () {
                var e = window.getSelection();
                e.removeAllRanges(), e.addRange(this.currentRange)
            }, t.prototype.createEmptyRange = function (e) {
                void 0 === e && (e = "strong");
                var t, n = this.getRange();
                if (n && this.isEmpty()) try {
                    /webkit/i.test(navigator.userAgent) ? (this.command.do("insertHTML", "&#8203;"), n.setEnd(n.endContainer, n.endOffset + 1), this.saveRange(n)) : (t = (0, x.Z)("<" + e + ">&#8203;</" + e + ">"), this.command.do("insertElem", t), this.createRangeByElem(t, !0))
                } catch (e) {
                }
            }, t.prototype.createRangeByElem = function (e, t, n) {
                if (void 0 === t && (t = !1), void 0 === n && (n = !1), e.length) {
                    var i = e[0], o = document.createRange();
                    n ? o.selectNodeContents(i) : o.selectNode(i), o.collapse(t), this.saveRange(o)
                }
            }, t
        }(Ra);

        function sr(e) {
            var t = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData, n = "", i = "";
            return null === t ? n = window.clipboardData && window.clipboardData.getData("text") : (n = t.getData("text/plain"), i = t.getData("text/html")), {
                pasteText: n,
                pasteHtml: i
            }
        }

        function cr(e) {
            return Ua(sr(e).pasteText)
        }

        var lr = {
            onchange: function () {
            },
            onClearDrafts: function () {
            },
            onchangeTimeout: 200,
            placeholder: "说点什么",
            menus: ["bold", "italic", "head", "code", "ol", "ul", "link", "image", " ", "clear_drafts"],
            tagsWhiteList: ["p", "strong", "b", "em", "i", "h2", "pre", "code", "ol", "ul", "li", "a", "img", "figure", "figcaption"],
            autoSave: !1,
            autoSaveKey: "mdui-editor-content",
            imageUploadUrl: "",
            imageUploadMaxSize: 2097152,
            imageUploadSuffix: ["png", "jpg", "gif"],
            imageUploadName: "file",
            imageUploadResponseTransform: !1
        }, ur = function (e, t, n) {
            void 0 === n && (n = {}), this.options = ee({}, lr), this.change = null, ee(this.options, n), this.$toolbar = (0, x.Z)(e).first().addClass("mdui_editor-toolbar"), this.$container = (0, x.Z)(t).first().addClass("mdui_editor-content mdui-typo").attr({
                contenteditable: "",
                placeholder: this.options.placeholder
            }), this.command = new Da(this), this.selection = new rr(this), this.menus = new ar(this), this.options.autoSave && this.setHTML(window.localStorage.getItem(this.options.autoSaveKey) || ""), this.initSelection(!0), this.bindEvent(), this.command.do("defaultParagraphSeparator", "p");
            try {
                this.command.do("AutoUrlDetect", !1)
            } catch (e) {
            }
        };
        ur.prototype.initSelection = function (e) {
            void 0 === e && (e = !1);
            var t = this.$container.children();
            if (!t.length) return this.$container.append("<p><br></p>"), this.initSelection();
            var n = t.last();
            if (e) {
                var i = n.html().toLowerCase(), o = n[0].nodeName;
                if ("<br>" !== i && "<br/>" !== i || "P" !== o) return this.$container.append("<p><br></p>"), this.initSelection()
            }
            this.updatePlaceholder(), this.selection.createRangeByElem(n, !1, !0), this.selection.restore()
        }, ur.prototype.getHTML = function () {
            return this.$container.html().replace(/\u200b/gm, "")
        }, ur.prototype.setHTML = function (e) {
            this.$container.html(e), this.initSelection()
        }, ur.prototype.getText = function () {
            return this.$container.text().replace(/\u200b/gm, "")
        }, ur.prototype.setText = function (e) {
            this.setHTML(e ? "<p>" + e + "</p>" : "<p><br></p>")
        }, ur.prototype.clear = function () {
            this.setHTML("<p><br></p>")
        }, ur.prototype.focus = function () {
            this.initSelection()
        }, ur.prototype.bindEvent = function () {
            var e = this, t = !0;
            this.$container.on("compositionstart", (function () {
                t = !1
            })).on("compositionend", (function () {
                t = !0
            })).on("click keyup", (function () {
                t && e.change && e.change()
            })), this.$toolbar.on("click", (function () {
                e.change && e.change()
            })), this.bindChange(), this.saveRangeRealTime(), this.pasteHandler(), this.deleteHandler(), this.containerClickHandler(), this.dragHandler(), this.undoHandler()
        }, ur.prototype.updatePlaceholder = function () {
            var e = "mdui_editor-content-empty";
            "<p><br></p>" === this.$container.html() ? this.$container.addClass(e) : this.$container.removeClass(e)
        }, ur.prototype.bindChange = function () {
            var e = this, t = this.options, n = t.onchangeTimeout, i = 0, o = this.getHTML();
            this.change = function () {
                var a = e.getHTML();
                a !== o && (i && clearTimeout(i), i = setTimeout((function () {
                    t.onchange(e), o = a, t.autoSave && window.localStorage.setItem(t.autoSaveKey, e.getHTML()), e.updatePlaceholder()
                }), n))
            }
        }, ur.prototype.saveRangeRealTime = function () {
            var e = this, t = function () {
                e.selection.saveRange(), e.menus.changeStatus()
            };
            this.$container.on("keyup", t).on("mousedown", (function () {
                e.$container.on("mouseleave", t)
            })).on("mouseup", (function () {
                t(), e.$container.off("mouseleave", t)
            }))
        }, ur.prototype.pasteHandler = function () {
            var e = this;
            this.$container.on("paste", (function (t) {
                t.preventDefault();
                var n, i, o = (n = cr(t), i = "", n.split("\n").forEach((function (e) {
                    e = e.replace(/[\r\n]/gm, ""), i += e ? "<p>" + e + "</p>" : "<p><br></p>"
                })), i), a = cr(t), r = e.selection.getContainerElem();
                if (r.length) {
                    var s = r[0].nodeName;
                    if ("CODE" !== s && "PRE" !== s) {
                        if (o) try {
                            e.command.do("insertHTML", o)
                        } catch (t) {
                            e.command.do("insertHTML", a)
                        }
                    } else e.command.do("insertHTML", a)
                }
            }))
        }, ur.prototype.deleteHandler = function () {
            var e = this;
            this.$container.on("keydown keyup", (function (t) {
                var n = t.keyCode, i = t.type;
                if (8 === n || 46 === n) {
                    var o = e.$container.html().toLowerCase().trim();
                    "keydown" === i && ("<p><br></p>" === o ? t.preventDefault() : o || (e.$container.html("<p><br></p>"), t.preventDefault())), "keyup" === i && (o || e.$container.html("<p><br></p>"))
                }
                e.updatePlaceholder()
            }))
        }, ur.prototype.containerClickHandler = function () {
            var e = this;
            this.$container.on("click", (function (t) {
                var n = t.target;
                if ((0, x.Z)(n).is(e.$container)) {
                    var i = e.$container.children().last();
                    i.length && "P" === i[0].nodeName || e.command.do("appendHTML", "<p><br></p>")
                }
            }))
        }, ur.prototype.dragHandler = function () {
            this.$container.on("dragleave drop dragenter dragover", !1)
        }, ur.prototype.undoHandler = function () {
            this.$container.on("keydown", (function (e) {
                if (e.ctrlKey && 90 === e.keyCode) return !1
            }))
        };
        const dr = ur, pr = function (e) {
            var t = e.topic, n = e.onRemove;
            return f("div", {class: "mdui-chip", key: t.topic_id}, f("img", {
                class: "mdui-chip-icon",
                src: t.cover.small
            }), f("span", {class: "mdui-chip-title"}, t.name), f("span", {
                class: "mdui-chip-delete",
                onclick: n
            }, f("i", {class: "mdui-icon material-icons"}, "cancel")))
        };
        var mr = function (e) {
            var t = e.iconTitle, n = e.icon;
            return f("i", {class: "mdui-icon material-icons", title: t, onclick: e.onClick}, n)
        };
        const fr = function (e) {
            var t = e.id, n = e.title, i = e.withTitle;
            void 0 === i && (i = !1);
            var o = e.withTopics;
            void 0 === o && (o = !1);
            var a = e.onSubmit, r = e.publishing, s = e.state, c = e.actions;
            return f("div", {
                class: Wo(["mc-editor", {
                    "mdui-hidden": !s.editor_open,
                    maximize: s.editor_maximize,
                    minimize: s.editor_minimize,
                    "with-title": i,
                    "with-topics": o
                }]), id: t, key: "mc-editor-" + t, oncreate: function (e) {
                    var t = (0, x.Z)(e), n = t.find(".editor-toolbar"), a = t.find(".editor-content"),
                        r = new dr(n, a, {
                            onClearDrafts: function () {
                                i && window.localStorage.removeItem(s.auto_save_key + "-title"), o && window.localStorage.removeItem(s.auto_save_key + "-topics"), c.editorClose()
                            },
                            placeholder: "请输入内容",
                            autoSave: !!s.auto_save_key,
                            autoSaveKey: s.auto_save_key + "-content",
                            imageUploadMaxSize: 0,
                            imageUploadUrl: window.G_API + "/images",
                            imageUploadName: "image",
                            imageUploadResponseTransform: function (e) {
                                return e.code === Ht && (e.message = e.extra_message), 0 === e.code && (e.data.url = e.data.urls.release), e
                            }
                        });
                    t.data("editor-instance", r)
                }
            }, f((function () {
                return f("div", {class: "header"}, f("div", {
                    class: "header-title",
                    onclick: c.editorMinimize
                }, n), f("div", {class: "header-actions"}, f(mr, {
                    iconTitle: "最小化",
                    icon: "remove",
                    onClick: c.editorMinimize
                }), f(mr, {
                    iconTitle: "全屏模式",
                    icon: s.editor_maximize ? "fullscreen_exit" : "fullscreen",
                    onClick: c.editorMaximize
                }), f(mr, {iconTitle: "保存为草稿并关闭", icon: "close", onClick: c.editorClose})))
            }), null), f("div", {class: "body"}, i ? f((function () {
                return f("input", {
                    class: "editor-title mdui-text-color-theme-text",
                    placeholder: "请输入标题",
                    value: window.localStorage.getItem(s.auto_save_key + "-title"),
                    oninput: function (e) {
                        window.localStorage.setItem(s.auto_save_key + "-title", e.target.value)
                    }
                })
            }), null) : null, o ? f((function () {
                return f("div", {class: "editor-topics"}, s.editor_selected_topics.length ? f("div", {class: "chip-wrapper"}, s.editor_selected_topics.map((function (e, t) {
                    return f(pr, {
                        topic: e, onRemove: function () {
                            c.topicSelectorRemoveOne(t)
                        }
                    })
                }))) : null, s.editor_selected_topics.length ? null : f("span", {
                    class: "placeholder",
                    title: "点击添加话题",
                    onclick: c.topicSelectorOpen
                }, "请至少选择 1 个话题"), f("button", {
                    class: "add mdui-btn mdui-btn-icon mdui-btn-dense mdui-ripple",
                    title: "点击添加话题",
                    onclick: c.topicSelectorOpen
                }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "add")))
            }), null) : null, f("div", {class: "editor-content mdui-text-color-theme-text"}), f("div", {class: "editor-toolbar"}, f((function () {
                return f("button", {
                    class: "submit mdui-btn mdui-btn-raised mdui-color-theme",
                    disabled: r,
                    onclick: function (e) {
                        var t = (0, x.Z)(e.target).parents(".mc-editor"), n = t.data("editor-instance");
                        a({title: t.find(".editor-title").val(), content: n.getHTML()})
                    }
                }, r ? "发布中" : "发布")
            }), null))))
        };
        var hr = function (e, t) {
            var n = e.item, i = e.id, o = e.last_visit_id, a = e.path, r = e.actions;
            return f(g, {
                to: Wt(a),
                class: Wo(["mc-list-item", {"last-visit": o === i}]),
                key: i,
                oncreate: function (e) {
                    return (0, x.Z)(e).mutation()
                },
                onclick: function () {
                    r.afterItemClick(n)
                }
            }, t)
        }, gr = function (e) {
            var t = e.actions, n = e.user, i = e.tabName, o = e.primaryKey, a = e.id;
            return f(Ea, {
                actions: t,
                user: n,
                dataName: i + "_data",
                primaryKey: o,
                primaryValue: a
            }, f("div", {
                class: "avatar user-popover-trigger",
                style: {backgroundImage: 'url("' + n.avatar.middle + '")'}
            }))
        }, _r = function (e) {
            var t = e.content;
            return f("div", {class: "title mdui-text-color-theme-text", oncreate: ma(t), onupdate: ma(t)})
        }, vr = function (e) {
            var t = e.snippet, n = e.updateTime, i = e.updateTimeDesc, o = e.replys;
            return f("div", {class: "content mdui-text-color-theme-secondary"}, f("div", {
                class: "snippet",
                oncreate: ma(t, 100),
                onupdate: ma(t, 100)
            }), f("div", {class: "meta"}, f("div", {
                class: "update_time",
                title: pn(n)
            }, i + " " + mn(n)), f("div", {class: "replys"}, o)))
        }, wr = function (e) {
            var t = e.question, n = e.last_visit_id, i = e.tabName, o = e.actions;
            return f(hr, {
                item: t,
                id: t.question_id,
                last_visit_id: n,
                path: "/questions/" + t.question_id,
                actions: o
            }, f(gr, {
                actions: o,
                user: t.relationships.user,
                tabName: i,
                primaryKey: "question_id",
                id: t.question_id
            }), f(_r, {content: t.title}), f(vr, {
                snippet: t.content_rendered,
                updateTime: t.answer_time || t.create_time,
                updateTimeDesc: t.answer_time ? "回复于" : "发布于",
                replys: t.answer_count + " 个回答"
            }))
        }, br = function (e) {
            var t = e.article, n = e.last_visit_id, i = e.tabName, o = e.actions;
            return f(hr, {
                item: t,
                id: t.article_id,
                last_visit_id: n,
                path: "/articles/" + t.article_id,
                actions: o
            }, f(gr, {
                actions: o,
                user: t.relationships.user,
                tabName: i,
                primaryKey: "article_id",
                id: t.article_id
            }), f(_r, {content: t.title}), f(vr, {
                snippet: t.content_rendered,
                updateTime: t.create_time,
                updateTimeDesc: "发布于",
                replys: t.comment_count + " 条评论"
            }))
        }, yr = function (e) {
            var t = e.answer, n = e.last_visit_id, i = e.tabName, o = e.actions;
            return f(hr, {
                item: t,
                id: t.answer_id,
                last_visit_id: n,
                path: "/questions/" + t.question_id + "/answers/" + t.answer_id,
                actions: o
            }, f(gr, {
                actions: o,
                user: t.relationships.user,
                tabName: i,
                primaryKey: "answer_id",
                id: t.answer_id
            }), f(_r, {content: t.relationships.question.title}), f(vr, {
                snippet: t.content_rendered,
                updateTime: t.create_time,
                updateTimeDesc: "发布于",
                replys: t.comment_count + " 条评论"
            }))
        }, xr = function () {
            return f("div", {class: "mdui-dialog-title"}, "请选择话题", f("button", {
                class: "mdui-btn mdui-btn-icon mdui-ripple close",
                "mdui-dialog-close": !0
            }, f("i", {class: "mdui-icon material-icons"}, "close")))
        };
        const kr = function (e) {
            var t = e.state, n = e.actions, i = t.topics_data, o = t.topics_pagination, a = t.topics_loading,
                r = t.editor_selected_topics, s = t.editor_selected_topic_ids, c = !a && !i.length && o, l = a,
                u = !a && o && o.page === o.pages, d = function (e) {
                    var t = e.topic, i = e.dataIndex;
                    return f("label", {
                        class: "mdui-list-item",
                        key: t.topic_id
                    }, f("div", {class: "mdui-list-item-avatar"}, f("img", {src: t.cover.small})), f("div", {class: "mdui-list-item-content"}, f("div", {class: "mdui-list-item-title mdui-list-item-one-line"}, t.name), f("div", {class: "mdui-list-item-text mdui-list-item-one-line"}, t.description)), f("div", {class: "mdui-checkbox"}, f("input", {
                        type: "checkbox",
                        checked: s.indexOf(t.topic_id) > -1,
                        onchange: function (e) {
                            n.topicSelectorChange({event: e, dataIndex: i})
                        }
                    }), f("i", {class: "mdui-checkbox-icon"})))
                };
            return f("div", {
                key: "topic-selector",
                class: "mdui-dialog mc-topic-selector"
            }, f(xr, null), f("div", {class: "mdui-dialog-content"}, f((function () {
                return r.length ? f("div", {class: "selected", key: "selected"}, r.map((function (e, t) {
                    return f(pr, {
                        topic: e, onRemove: function () {
                            n.topicSelectorRemoveOne(t)
                        }
                    })
                }))) : null
            }), null), f("div", {class: "mdui-list", key: "list"}, i.map((function (e, t) {
                return f(d, {topic: e, dataIndex: t})
            }))), f(Za, {
                show: c,
                title: "管理员未发布任何话题",
                description: "待管理员发布话题后，会显示在此处"
            }), f(Xo, {show: l}), f(Ta, {show: u})), f("div", {class: "mdui-dialog-actions"}, f("button", {
                class: "mdui-btn mdui-ripple",
                "mdui-dialog-confirm": !0
            }, "确定")))
        }, Sr = function (e, t) {
            return function (n) {
                var i = n.match;
                return f("div", {
                    oncreate: t.onCreate,
                    ondestroy: t.onDestroy,
                    key: i.url,
                    id: "page-questions",
                    class: "mdui-container"
                }, e.tabs.map((function (n) {
                    var i = !e[n + "_loading"] && !e[n + "_data"].length && e[n + "_pagination"],
                        o = !e[n + "_loading"] && e[n + "_pagination"] && e[n + "_pagination"].page === e[n + "_pagination"].pages,
                        a = e[n + "_loading"];
                    return function () {
                        return f("div", {id: n}, e[n + "_data"].length ? f("div", {class: "item-list mdui-card mdui-card-shadow"}, e[n + "_data"].map((function (i) {
                            return f(wr, {question: i, last_visit_id: e.last_visit_id, tabName: n, actions: t})
                        }))) : null, "recent" === n ? f(Za, {
                            show: i,
                            title: "尚未发布任何问题",
                            description: "此处会显示最近更新的问题",
                            action: function () {
                                t.editorOpen()
                            },
                            action_text: "发布问题"
                        }) : null, "popular" === n ? f(Za, {
                            show: i,
                            title: "没有近期热门问题",
                            description: "此处会显示近期最受欢迎的问题",
                            action: function () {
                                t.toRecent()
                            },
                            action_text: "查看最新问题"
                        }) : null, "following" === n ? f(Za, {
                            show: i,
                            title: "尚未关注任何问题",
                            description: "关注问题后，相应问题就会显示在此处",
                            action: function () {
                                t.toPopular()
                            },
                            action_text: "查看热门问题"
                        }) : null, f(Xo, {show: a}), f(Ta, {show: o}))
                    }
                })), f("button", {
                    class: Wo(["mdui-fab", "mdui-fab-fixed", "mdui-fab-extended", "mdui-ripple", "mdui-color-theme", {"mdui-hidden": e.editor_open}]),
                    onclick: t.editorOpen
                }, f("i", {class: "mdui-icon material-icons"}, "add"), f("span", null, "提问题")), f(fr, {
                    id: "page-questions-editor",
                    title: "新提问",
                    withTitle: !0,
                    withTopics: !0,
                    onSubmit: t.publish,
                    publishing: e.publishing,
                    state: e,
                    actions: t
                }), f(kr, {state: e, actions: t}))
            }
        }, Er = function (e) {
            var t = e.actions, n = e.user, i = e.time, o = e.dataName;
            void 0 === o && (o = null);
            var a = e.primaryKey;
            void 0 === a && (a = null);
            var r = e.primaryValue;
            return void 0 === r && (r = null), f("div", {class: "mc-user-line"}, f(Ea, {
                actions: t,
                user: n,
                dataName: o,
                primaryKey: a,
                primaryValue: r
            }, f(g, {
                class: "avatar user-popover-trigger",
                to: Wt("/users/" + n.user_id),
                style: {backgroundImage: 'url("' + n.avatar.middle + '")'}
            }), f(g, {
                class: "username user-popover-trigger mdui-text-color-theme-text",
                to: Wt("/users/" + n.user_id)
            }, n.username), f("div", {class: "headline mdui-text-color-theme-secondary"}, In(n.headline)), i ? f("div", {class: "more"}, f("span", {
                class: "time mdui-text-color-theme-secondary",
                title: pn(i)
            }, mn(i))) : null))
        }, Cr = function (e) {
            return f("div", {class: "mc-topics-bar"}, e.topics.map((function (e) {
                return f(g, {
                    to: Wt("/topics/" + e.topic_id),
                    class: "mdui-chip mdui-ripple",
                    key: e.topic_id
                }, f("img", {
                    class: "mdui-chip-icon",
                    src: e.cover.small
                }), f("span", {class: "mdui-chip-title"}, e.name))
            })))
        }, Or = function (e) {
            var t = e.show, n = e.title, i = e.disabled, o = e.currentOrder, a = e.orders, r = e.onChangeOrder,
                s = e.key;
            void 0 === s && (s = "");
            var c = e.closeBtnClick;
            return void 0 === c && (c = !1), f("div", {class: Wo(["mc-list-header", {"mdui-hidden": !t}])}, f("div", {class: "title"}, c ? f("button", {
                class: "close mdui-btn mdui-btn-icon mdui-ripple",
                onclick: c
            }, f("i", {class: "mdui-icon material-icons"}, "close")) : null, n), f("button", {
                class: "mdui-btn mdui-btn-dense",
                "mdui-menu": "{target: '#mc-list-header-" + s + "', align: 'right'}",
                disabled: i
            }, I(a, (function (e) {
                var t = e.order, n = e.name;
                return t === o ? n : null
            }))[0], a[o], f("i", {class: "mdui-icon mdui-icon-right material-icons mdui-text-color-theme-icon"}, "arrow_drop_down")), f("ul", {
                class: "mdui-menu",
                id: "mc-list-header-" + s
            }, a.map((function (e) {
                var t = e.order, n = e.name;
                return f("li", {
                    class: "mdui-menu-item", onclick: function () {
                        return r(t)
                    }
                }, f("a", {href: "javascript:void(0)"}, f("i", {class: "mdui-menu-item-icon mdui-icon material-icons"}, o === t ? "check" : null), n))
            }))))
        };
        const Tr = function (e) {
            var t = e.path;
            return f("div", {class: "mc-nav"}, f("button", {
                class: "back mdui-btn mdui-color-theme mdui-ripple",
                onclick: function () {
                    return function (e) {
                        window.history.state ? window.history.back() : y.actions.go(Wt(e))
                    }(t)
                }
            }, f("i", {class: "mdui-icon mdui-icon-left material-icons"}, "arrow_back"), "返回"))
        }, Zr = function (e) {
            var t = e.actions, n = e.item, i = e.type, o = e.commentIndex;
            return void 0 === o && (o = null), f("div", {class: "mc-vote"}, f(ha, {
                icon: "thumb_up",
                tooltip: "up" === n.relationships.voting ? "取消顶" : "顶一下",
                badge: n.vote_up_count,
                active: "up" === n.relationships.voting,
                onClick: function () {
                    return t.voteUp({item: n, type: i, commentIndex: o})
                }
            }), f(ha, {
                icon: "thumb_down",
                tooltip: "down" === n.relationships.voting ? "取消踩" : "踩一下",
                badge: n.vote_down_count,
                active: "down" === n.relationships.voting,
                onClick: function () {
                    return t.voteDown({item: n, type: i, commentIndex: o})
                }
            }))
        }, Ir = function (e) {
            var t = e.item, n = e.onClick;
            return f(ha, {cls: "comment", icon: "comment", tooltip: "查看评论", badge: t.comment_count, onClick: n})
        }, Nr = function (e) {
            var t = e.answer, n = e.actions;
            return f("div", {
                class: "item", key: t.answer_id, oncreate: function (e) {
                    return (0, x.Z)(e).mutation()
                }
            }, f(Er, {
                actions: n,
                user: t.relationships.user,
                time: t.create_time,
                dataName: "answer_data",
                primaryKey: "answer_id",
                primaryValue: t.answer_id
            }), f("div", {
                class: "content mdui-typo",
                oncreate: pa(t.content_rendered),
                onupdate: pa(t.content_rendered)
            }), f("div", {class: "actions"}, f(Zr, {actions: n, item: t, type: "answers"}), f(Ir, {
                item: t,
                onClick: function () {
                    O("comments_dialog_open", {commentable_type: "answer", commentable_id: t.answer_id})
                }
            }), f("div", {class: "flex-grow"}), f(ka, {type: "answer", item: t})))
        }, Rr = function (e, t) {
            return function (n) {
                var i = n.match, o = 0, a = (0, Z.o8)(i.params.answer_id) ? "question" : "answer";
                "answer" === a && (o = parseInt(i.params.answer_id, 10));
                var r = parseInt(i.params.question_id, 10), s = e.question, c = e.loading, l = e.answer_data,
                    u = e.answer_pagination, d = e.answer_loading, p = 0;
                s && (p = s.answer_count), u && (p = u.total);
                var m = !d && u && !u.total, h = function (e) {
                    var t = e.count;
                    return f(g, {class: "all-answers mdui-text-color-theme-text", to: Wt(e.url)}, "查看全部 ", t, " 个回答")
                };
                return f("div", {
                    oncreate: function () {
                        return t.onCreate({question_id: r, answer_id: o, route: a})
                    }, ondestroy: t.onDestroy, key: i.url, id: "page-question", class: "mdui-container"
                }, f(Tr, {path: o ? "/questions/" + r : "/questions"}), f("div", {class: "mdui-card mdui-card-shadow question"}, s ? [f("h1", {
                    class: "title",
                    oncreate: ma(s.title),
                    onupdate: ma(s.title),
                    key: "0"
                }), f(Er, {
                    actions: t,
                    user: s.relationships.user,
                    time: s.create_time,
                    dataName: "question",
                    key: "1"
                }), f("div", {
                    class: "mdui-typo content",
                    oncreate: pa(s.content_rendered),
                    onupdate: pa(s.content_rendered),
                    key: "2"
                }), s.relationships.topics.length ? f(Cr, {
                    topics: s.relationships.topics,
                    key: "3"
                }) : null, f("div", {class: "actions", key: "4"}, f(ga, {
                    item: s,
                    type: "question",
                    actions: t
                }), f(Ir, {
                    item: s, onClick: function () {
                        O("comments_dialog_open", {commentable_type: "question", commentable_id: r})
                    }
                }), f("div", {class: "flex-grow"}), f(ka, {
                    type: "question",
                    item: s,
                    extraOptions: [{
                        name: "查看 " + s.follower_count + " 位关注者", onClick: function () {
                            O("users_dialog_open", {type: "question_followers", id: r})
                        }
                    }]
                }))] : null, f(Xo, {show: c})), "question" === a ? [f(Za, {
                    show: m,
                    title: "尚未有人回答该问题",
                    key: "0"
                }), f(Or, {
                    show: !m,
                    title: "共 " + p + " 个回答",
                    disabled: d,
                    currentOrder: e.answer_order,
                    orders: [{order: "-vote_count", name: "最热门"}, {
                        order: "create_time",
                        name: "发布时间（从早到晚）"
                    }, {order: "-create_time", name: "发布时间（从晚到早）"}],
                    onChangeOrder: t.changeOrder,
                    key: "1"
                }), l && l.length ? f("div", {class: "mdui-card answers", key: "2"}, l.map((function (e) {
                    return f(Nr, {answer: e, actions: t})
                }))) : null, f(Ta, {
                    show: !d && u && u.page === u.pages,
                    key: "3"
                })] : null, "answer" === a && s ? [f(h, {
                    count: s.answer_count,
                    url: "/questions/" + r,
                    key: "0"
                }), f("div", {class: "mdui-card answers", key: "1"}, f(Nr, {
                    answer: l[0],
                    actions: t
                })), f(h, {
                    count: s.answer_count,
                    url: "/questions/" + r,
                    key: "2"
                })] : null, f(Xo, {show: d}), f("button", {
                    class: Wo(["mdui-fab", "mdui-fab-fixed", "mdui-fab-extended", "mdui-ripple", "mdui-color-theme", {"mdui-hidden": e.editor_open}]),
                    onclick: t.editorOpen
                }, f("i", {class: "mdui-icon material-icons"}, "add"), f("span", null, "写回答")), f(fr, {
                    id: "page-question-editor",
                    title: "写回答",
                    withTitle: !1,
                    withTopics: !1,
                    onSubmit: t.publishAnswer,
                    publishing: e.answer_publishing,
                    state: e,
                    actions: t
                }))
            }
        }, Dr = function (e, t) {
            return function (n) {
                var i = n.match;
                return f("div", {
                    oncreate: t.onCreate,
                    ondestroy: t.onDestroy,
                    key: i.url,
                    id: "page-articles",
                    class: "mdui-container"
                }, e.tabs.map((function (n) {
                    var i = !e[n + "_loading"] && !e[n + "_data"].length && e[n + "_pagination"],
                        o = !e[n + "_loading"] && e[n + "_pagination"] && e[n + "_pagination"].page === e[n + "_pagination"].pages,
                        a = e[n + "_loading"];
                    return function () {
                        return f("div", {id: n}, e[n + "_data"].length ? f("div", {class: "item-list mdui-card mdui-card-shadow"}, e[n + "_data"].map((function (i) {
                            return f(br, {article: i, last_visit_id: e.last_visit_id, tabName: n, actions: t})
                        }))) : null, "recent" === n ? f(Za, {
                            show: i,
                            title: "尚未发布任何文章",
                            description: "此处会显示最近更新的文章",
                            action: function () {
                                t.editorOpen()
                            },
                            action_text: "写文章"
                        }) : null, "popular" === n ? f(Za, {
                            show: i,
                            title: "没有近期热门文章",
                            description: "此处会显示近期最受欢迎的文章",
                            action: function () {
                                t.toRecent()
                            },
                            action_text: "查看最新文章"
                        }) : null, "following" === n ? f(Za, {
                            show: i,
                            title: "尚未关注任何文章",
                            description: "关注文章后，相应文章就会显示在此处",
                            action: function () {
                                t.toPopular()
                            },
                            action_text: "查看热门文章"
                        }) : null, f(Xo, {show: a}), f(Ta, {show: o}))
                    }
                })), f("button", {
                    class: Wo(["mdui-fab", "mdui-fab-fixed", "mdui-fab-extended", "mdui-ripple", "mdui-color-theme", {"mdui-hidden": e.editor_open}]),
                    onclick: t.editorOpen
                }, f("i", {class: "mdui-icon material-icons"}, "add"), f("span", null, "写文章")), f(fr, {
                    id: "page-article-editor",
                    title: "新文章",
                    withTitle: !0,
                    withTopics: !0,
                    onSubmit: t.publish,
                    publishing: e.publishing,
                    state: e,
                    actions: t
                }), f(kr, {state: e, actions: t}))
            }
        }, Ar = function (e) {
            var t = e.submitting, n = e.onSubmit, i = e.onCreate;
            void 0 === i && (i = null);
            var o = e.placeholder;
            return void 0 === o && (o = "写下你的评论..."), f("div", {
                class: "mdui-textfield new-comment",
                key: "new-comment",
                oncreate: i
            }, f("textarea", {
                class: "mdui-textfield-input",
                placeholder: o,
                disabled: t
            }), f("button", {
                class: "submit mdui-btn mdui-btn-raised mdui-color-theme",
                onclick: n,
                disabled: t
            }, t ? "发布中" : "发布"))
        }, qr = function (e) {
            var t = e.comment, n = e.commentIndex, i = e.actions;
            return f("div", {
                class: "item", key: t.comment_id, oncreate: function (e) {
                    return (0, x.Z)(e).mutation()
                }
            }, f(Er, {
                actions: i,
                user: t.relationships.user,
                time: t.create_time,
                dataName: "comments_data[" + n + "].replies_data",
                primaryKey: "comment_id",
                primaryValue: t.comment_id
            }), f("div", {
                class: "content mdui-typo",
                oncreate: fa(t.content),
                onupdate: fa(t.content)
            }), f("div", {class: "actions"}, f(Zr, {
                actions: i,
                item: t,
                commentIndex: n,
                type: "replies"
            }), f("div", {class: "flex-grow"}), f(ka, {type: "comment", item: t})))
        }, Mr = function (e) {
            var t = e.comment, n = e.commentIndex, i = e.actions,
                o = !t.replies_loading && t.replies_pagination && t.replies_pagination.page === t.replies_pagination.pages,
                a = t.replies_loading;
            return f("div", {
                class: "item", key: t.comment_id, oncreate: function (e) {
                    return (0, x.Z)(e).mutation()
                }
            }, f(Er, {
                actions: i,
                user: t.relationships.user,
                time: t.create_time,
                dataName: "comments_data",
                primaryKey: "comment_id",
                primaryValue: t.comment_id
            }), f("div", {
                class: "content mdui-typo",
                oncreate: fa(t.content),
                onupdate: fa(t.content)
            }), f("div", {class: "actions"}, f(Zr, {actions: i, item: t, type: "comments"}), f(ha, {
                icon: "reply",
                tooltip: "发表回复",
                onClick: function () {
                    i.toggleState({comment_id: t.comment_id, fieldName: "show_new_reply"})
                }
            }), f("div", {class: "flex-grow"}), f(ka, {
                type: "comment",
                item: t
            })), t.show_new_reply ? f(Ar, {
                placeholder: "添加回复...",
                submitting: t.reply_submitting,
                onCreate: function (e) {
                    setTimeout((function () {
                        return (0, x.Z)(e).find("textarea")[0].focus()
                    }))
                },
                onSubmit: function (e) {
                    var n = e.target;
                    i.submitReply({target: n, comment: t})
                }
            }) : null, t.reply_count ? f("div", {
                class: Wo(["reply_count", {"show-replies": t.show_replies}]),
                onclick: function () {
                    i.toggleState({comment_id: t.comment_id, fieldName: "show_replies"})
                }
            }, f("i", {class: "mdui-icon material-icons"}, "arrow_drop_down"), f("span", null, t.show_replies ? "隐藏" : "查看", " ", t.reply_count, " ", "条回复")) : null, t.show_replies ? f("div", {class: "replies"}, t.replies_data.map((function (e) {
                return f(qr, {comment: e, commentIndex: n, actions: i})
            })), f(Xo, {show: t.replies_loading}), f("div", {
                class: Wo(["reply_more", {"mdui-hidden": o || a}]),
                onclick: function () {
                    i.loadReplies({comment: t})
                }
            }, f("i", {class: "mdui-icon material-icons"}, "subdirectory_arrow_right"), f("span", null, "显示更多回复"))) : null)
        }, Lr = function (e) {
            var t = e.commentable_type, n = e.commentable_id, i = e.isInDialog, o = e.state, a = e.actions, r = o.order,
                s = o.comments_data, c = o.pagination, l = o.loading, u = o.submitting, d = !l && c && !c.total, p = 0;
            return c && (p = c.total), f("div", {class: "mc-comments"}, f(Or, {
                show: !0,
                title: "共 " + p + " 条评论",
                disabled: l || u,
                currentOrder: r,
                key: "comments",
                orders: [{order: "create_time", name: "发布时间（从早到晚）"}, {
                    order: "-create_time",
                    name: "发布时间（从晚到早）"
                }, {order: "-vote_count", name: "最热门"}],
                onChangeOrder: a.changeOrder,
                closeBtnClick: !!i && a.closeDialog
            }), f("div", {
                class: "comments-wrapper", oncreate: function () {
                    a.onCreate({commentable_type: t, commentable_id: n, isInDialog: i})
                }, ondestroy: function () {
                    return a.onDestroy({isInDialog: i})
                }
            }, f(Za, {
                show: d,
                title: "尚未有人发表评论"
            }), s && s.length ? f("div", {class: "mdui-card comments"}, s.map((function (e, t) {
                return f(Mr, {comment: e, commentIndex: t, actions: a})
            }))) : null, f(Xo, {show: l}), f(Ta, {show: !l && c && c.page === c.pages})), i ? f(Ar, {
                submitting: o.submitting,
                onSubmit: a.onSubmit
            }) : null)
        }, $r = function (e) {
            var t = e.commentable_type, n = e.commentable_id;
            return function (e, i) {
                var o = e.comments, a = i.comments;
                return f("div", {class: "mc-comments-page"}, f(Lr, {
                    commentable_type: t,
                    commentable_id: n,
                    isInDialog: !1,
                    state: o,
                    actions: a
                }), f("div", {
                    class: "new-comment-fixed", oncreate: function (e) {
                        new X.Z.Headroom(e, {
                            pinnedClass: "mdui-headroom-pinned-down",
                            unpinnedClass: "mdui-headroom-unpinned-down"
                        })
                    }
                }, f("div", {class: "mdui-container"}, f(Ar, {submitting: o.submitting, onSubmit: a.onSubmit}))))
            }
        }, Pr = function (e, t) {
            return function (n) {
                var i = n.match, o = parseInt(i.params.article_id, 10), a = e.article, r = e.loading;
                return f("div", {
                    oncreate: function () {
                        return t.onCreate({article_id: o})
                    }, key: i.url, id: "page-article", class: "mdui-container"
                }, f(Tr, {path: "/articles"}), f("div", {class: "mdui-card mdui-card-shadow article"}, a ? [f("h1", {
                    class: "title",
                    oncreate: ma(a.title),
                    onupdate: ma(a.title),
                    key: "0"
                }), f(Er, {
                    actions: t,
                    user: a.relationships.user,
                    time: a.create_time,
                    dataName: "article",
                    key: "1"
                }), f("div", {
                    class: "mdui-typo content",
                    oncreate: pa(a.content_rendered),
                    onupdate: pa(a.content_rendered),
                    key: "2"
                }), a.relationships.topics.length ? f(Cr, {
                    topics: a.relationships.topics,
                    key: "3"
                }) : null, f("div", {class: "actions", key: "4"}, f(Zr, {
                    actions: t,
                    item: a,
                    type: "article"
                }), f(ga, {
                    item: a,
                    type: "article",
                    actions: t
                }), f("div", {class: "flex-grow"}), f(ka, {
                    type: "article",
                    item: a,
                    extraOptions: [{
                        name: "查看 " + a.follower_count + " 位关注者", onClick: function () {
                            O("users_dialog_open", {type: "article_followers", id: o})
                        }
                    }]
                }))] : null, f(Xo, {show: r})), f($r, {commentable_type: "article", commentable_id: o}))
            }
        }, jr = function (e, t) {
            return function (n) {
                var i = n.match;
                return f("div", {
                    oncreate: t.onCreate,
                    ondestroy: t.onDestroy,
                    key: i.url,
                    id: "page-topics",
                    class: "mdui-container"
                }, e.tabs.map((function (n) {
                    var i = !e[n + "_loading"] && !e[n + "_data"].length && e[n + "_pagination"],
                        o = !e[n + "_loading"] && e[n + "_pagination"] && e[n + "_pagination"].page === e[n + "_pagination"].pages,
                        a = e[n + "_loading"];
                    return function () {
                        return f("div", {id: n}, !a && e.following_data.length ? f("div", {class: "subheading mdui-text-color-theme-secondary"}, "following" === n ? ["已关注 ", e[n + "_pagination"].total, " 个话题"] : null, "recommended" === n ? "话题推荐" : null) : null, f("div", {class: "items-wrapper"}, e[n + "_data"].map((function (e) {
                            return f(_a, {topic: e, actions: t})
                        }))), "following" === n ? f(Za, {
                            show: i,
                            title: "尚未关注任何话题",
                            description: "关注话题后，相应话题就会显示在此处。",
                            action: function () {
                                t.toRecommended()
                            },
                            action_text: "查看精选话题"
                        }) : null, "recommended" === n ? f(Za, {
                            show: i,
                            title: "管理员未发布任何话题",
                            description: "待管理员发布话题后，会显示在此处"
                        }) : null, f(Xo, {show: a}), f(Ta, {show: o}))
                    }
                })))
            }
        }, Ur = function (e) {
            var t = e.topic, n = e.loading, i = e.actions;
            return f("div", {class: "mdui-card mdui-card-shadow topic"}, t ? [f("div", {
                class: "info",
                key: "0"
            }, f("div", {
                class: "cover",
                style: {backgroundImage: 'url("' + t.cover.small + '")'}
            }), f("div", {class: "main"}, f("div", {
                class: "name",
                oncreate: ma(t.name),
                onupdate: ma(t.name)
            }), f("div", {class: "meta mdui-text-color-theme-secondary"}, f("span", null, t.question_count, " 个提问"), f("span", null, t.article_count, " 篇文章")), f("div", {
                class: "description mdui-text-color-theme-secondary",
                oncreate: ma(t.description),
                onupdate: ma(t.description)
            }))), f("div", {class: "actions", key: "1"}, f(ga, {
                item: t,
                type: "topic",
                actions: i
            }), f("div", {class: "flex-grow"}), f(ka, {
                type: "topic",
                item: t,
                extraOptions: [{
                    name: "查看 " + t.follower_count + " 位关注者", onClick: function () {
                        O("users_dialog_open", {type: "topic_followers", id: t.topic_id})
                    }
                }]
            }))] : null, f(Xo, {show: n}))
        }, Hr = function (e) {
            var t = e.items, n = e.centered;
            void 0 === n && (n = !1);
            var i = e.key;
            return void 0 === i && (i = null), f("div", {
                key: i,
                class: Wo(["mc-tab", "mdui-tab", {"mdui-tab-centered": n}])
            }, t.map((function (e) {
                return e ? f("a", {
                    href: "#" + e.hash,
                    class: "mdui-ripple"
                }, e.name, (0, Z.o8)(e.count) ? null : f("span", null, e.count)) : null
            })))
        }, Kr = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {class: "contexts mdui-card"}, f(Hr, {
                items: [{
                    name: "提问",
                    hash: "questions",
                    count: t.topic ? t.topic.question_count : 0
                }, {name: "文章", hash: "articles", count: t.topic ? t.topic.article_count : 0}]
            }), t.tabs.map((function (e) {
                var i = t[e + "_pagination"], o = t[e + "_data"], a = t[e + "_order"], r = t[e + "_loading"],
                    s = !r && !o.length && i, c = !r && i && i.page === i.pages;
                return function () {
                    return f("div", {id: e}, "questions" === e ? f(Or, {
                        show: !s,
                        title: "共 " + (i ? i.total : 0) + " 个提问",
                        disabled: r,
                        currentOrder: a,
                        key: e,
                        orders: [{order: "-update_time", name: "更新时间（从晚到早）"}, {
                            order: "update_time",
                            name: "更新时间（从早到晚）"
                        }],
                        onChangeOrder: n.changeOrder
                    }) : null, "articles" === e ? f(Or, {
                        show: !s,
                        title: "共 " + (i ? i.total : 0) + " 篇文章",
                        disabled: r,
                        currentOrder: a,
                        key: e,
                        orders: [{order: "-update_time", name: "更新时间（从晚到早）"}, {
                            order: "update_time",
                            name: "更新时间（从早到晚）"
                        }, {order: "-vote_count", name: "最热门"}],
                        onChangeOrder: n.changeOrder
                    }) : null, o.length ? f("div", {class: "item-list"}, "questions" === e ? o.map((function (i) {
                        return f(wr, {question: i, last_visit_id: t.last_visit_question_id, tabName: e, actions: n})
                    })) : null, "articles" === e ? o.map((function (i) {
                        return f(br, {article: i, last_visit_id: t.last_visit_article_id, tabName: e, actions: n})
                    })) : null) : null, f(Za, {
                        show: s,
                        title: "该话题下没有" + ("questions" === e ? "提问" : "文章")
                    }), f(Xo, {show: r}), f(Ta, {show: c}))
                }
            })))
        }, Br = function (e, t) {
            return function (n) {
                var i = n.match, o = parseInt(i.params.topic_id, 10), a = e.topic, r = e.loading;
                return f("div", {
                    oncreate: function () {
                        return t.onCreate({topic_id: o})
                    }, ondestroy: t.onDestroy, key: i.url, id: "page-topic", class: "mdui-container"
                }, f(Tr, {path: "/topics"}), f(Ur, {topic: a, loading: r, actions: t}), f(Kr, {state: e, actions: t}))
            }
        }, Gr = function (e) {
            var t = e.user, n = e.actions;
            return f("div", {
                class: "item-inner",
                key: t.user_id
            }, f("div", {class: "item mdui-card"}, f(g, {
                to: Wt("/users/" + t.user_id),
                class: "mdui-ripple info",
                onclick: function () {
                    return n.afterItemClick(t)
                }
            }, f("div", {
                class: "avatar",
                style: {backgroundImage: 'url("' + t.avatar.large + '")'}
            }), f("div", {class: "username mdui-text-color-theme-text"}, t.username), f("div", {class: "headline mdui-text-color-theme-secondary"}, t.headline)), f("div", {class: "actions"}, t.relationships.is_me ? null : f(ga, {
                item: t,
                type: "users",
                id: t.user_id,
                actions: n
            }), f("div", {class: "flex-grow"}), f(ka, {type: "user", item: t}))))
        }, zr = function (e, t) {
            return function (n) {
                var i = n.match;
                return f("div", {
                    oncreate: t.onCreate,
                    ondestroy: t.onDestroy,
                    key: i.url,
                    id: "page-users",
                    class: "mdui-container"
                }, e.tabs.map((function (n) {
                    var i = !e[n + "_loading"] && !e[n + "_data"].length && e[n + "_pagination"],
                        o = !e[n + "_loading"] && e[n + "_pagination"] && e[n + "_pagination"].page === e[n + "_pagination"].pages,
                        a = e[n + "_loading"];
                    return function () {
                        return f("div", {id: n}, !a && e[n + "_data"].length ? f("div", {class: "subheading mdui-text-color-theme-secondary"}, "followees" === n ? ["已关注 ", e[n + "_pagination"].total, " 人"] : null, "followers" === n ? ["关注者 ", e[n + "_pagination"].total, " 人"] : null, "recommended" === n ? "人员推荐" : null) : null, f("div", {class: "items-wrapper"}, e[n + "_data"].map((function (e) {
                            return f(Gr, {user: e, actions: t})
                        }))), "followees" === n ? f(Za, {
                            show: i,
                            title: "尚未关注任何用户",
                            description: "关注用户后，相应用户就会显示在此处。",
                            action: function () {
                                t.toRecommended()
                            },
                            action_text: "查看推荐用户"
                        }) : null, "followers" === n ? f(Za, {
                            show: i,
                            title: "你还没有关注者",
                            description: "用户关注了你后，相应用户就会显示在此处。"
                        }) : null, "recommended" === n ? f(Za, {
                            show: i,
                            title: "已关注所有用户",
                            description: "你未关注的用户会显示再此处。"
                        }) : null, f(Xo, {show: a}), f(Ta, {show: o}))
                    }
                })))
            }
        };

        function Fr() {
            (0, x.Z)(".mc-loading-overlay").length || ((0, x.Z)('<div class="mc-loading-overlay"><div class="mdui-spinner mdui-spinner-colorful"></div></div>').appendTo(document.body).reflow().addClass("mc-loading-overlay-show"), setTimeout((function () {
                (0, x.Z)(".mc-loading-overlay").mutation()
            }), 0), x.Z.lockScreen())
        }

        function Yr() {
            var e = (0, x.Z)(".mc-loading-overlay");
            e.length && e.removeClass("mc-loading-overlay-show").transitionEnd((function () {
                e.remove(), x.Z.unlockScreen()
            }))
        }

        const Qr = function (e) {
            var t = e.user;
            return f("div", {class: "mc-avatar-upload"}, f("button", {
                onclick: function (e) {
                    (0, x.Z)(e.currentTarget).next().val("").trigger("click")
                }, class: "upload-btn mdui-btn mdui-btn-icon mdui-ripple", type: "button", title: "点击上传头像"
            }, f("i", {class: "mdui-icon material-icons"}, "photo_camera")), f("input", {
                onchange: function (e) {
                    return function (e, t) {
                        var n = e.target.files[0];
                        return n.size > 5242880 ? (X.Z.snackbar("头像文件不能超过 5M"), void (e.target.value = "")) : ["image/png", "image/jpeg"].indexOf(n.type) < 0 ? (X.Z.snackbar("只能上传 png、jpg 格式的图片"), void (e.target.value = "")) : (Fr(), void (0, Zt.A7)({avatar: n}).finally(Yr).then((function (e) {
                            var n = e.data;
                            t.avatar = n, O("user_update", t)
                        })).catch((function (e) {
                            e.code !== Ht ? (0, Nt.Z)(e) : X.Z.snackbar(e.extra_message)
                        })))
                    }(e, t)
                }, type: "file", title: " ", accept: "image/jpeg,image/png"
            }))
        };
        const Wr = function (e) {
            var t = e.user;
            return f("div", {class: "mc-cover-upload"}, f("button", {
                onclick: function (e) {
                    (0, x.Z)(e.currentTarget).next().val("").trigger("click")
                }, class: "upload-btn mdui-btn mdui-btn-icon mdui-ripple", type: "button", title: "点击上传封面"
            }, f("i", {className: "mdui-icon material-icons"}, "photo_camera")), f("input", {
                onchange: function (e) {
                    return function (e, t) {
                        var n = e.target.files[0];
                        return n.size > 5242880 ? (X.Z.snackbar("封面文件不能超过 5M"), void (e.target.value = "")) : ["image/png", "image/jpeg"].indexOf(n.type) < 0 ? (X.Z.snackbar("只能上传 png、jpg 格式的图片"), void (e.target.value = "")) : (Fr(), void (0, Zt.VK)({cover: n}).finally(Yr).then((function (e) {
                            var n = e.data;
                            t.cover = n, O("user_update", t)
                        })).catch((function (e) {
                            e.code !== Ht ? (0, Nt.Z)(e) : X.Z.snackbar(e.extra_message)
                        })))
                    }(e, t)
                }, type: "file", title: " ", accept: "image/jpeg,image/png"
            }))
        };
        var Jr = function (e) {
            var t = e.icon, n = e.text, i = e.tooltip, o = e.multiLine;
            void 0 === o && (o = !1);
            var a = o ? fa(n) : ma(n);
            return f("div", {class: "meta"}, f("i", {
                class: "mdui-icon material-icons mdui-text-color-theme-icon",
                "mdui-tooltip": "{content: '" + i + "', delay: 300}"
            }, t), f("div", {class: Wo([{"mdui-typo": o}]), oncreate: a, onupdate: a}))
        };
        const Vr = function (e) {
            var t = e.state, n = e.actions, i = e.is_me, o = t.interviewee;
            return f("div", {
                key: "user",
                class: "user mdui-card mdui-card-shadow"
            }, f(Xo, {show: t.loading}), o ? [f("div", {
                class: "cover",
                style: {backgroundImage: 'url("' + o.cover.large + '")'},
                oncreate: function (e) {
                    setTimeout((function () {
                        S.on("scroll", (function () {
                            window.requestAnimationFrame((function () {
                                e.style["background-position-y"] = window.pageYOffset / 2 + "px"
                            }))
                        })), window.scrollTo(0, .56 * (0, x.Z)(e).width() * .58)
                    }))
                },
                key: "0"
            }, i ? f(Wr, {user: o}) : null), f("div", {
                class: "info",
                key: "1"
            }, f("div", {class: "avatar-box"}, i ? f(Qr, {user: o}) : null, f("img", {
                src: o.avatar.large,
                class: "avatar"
            })), f("div", {class: Wo(["profile", {fold: t.profile_fold}])}, f("div", {class: "meta username mdui-text-color-theme-text"}, o.username), o.headline ? f(Jr, {
                icon: "credit_card",
                text: o.headline,
                tooltip: "一句话介绍"
            }) : null, o.blog ? f(Jr, {
                icon: "insert_link",
                text: o.blog,
                tooltip: "个人主页"
            }) : null, o.company ? f(Jr, {
                icon: "location_city",
                text: o.company,
                tooltip: "所属学校或企业"
            }) : null, o.location ? f(Jr, {
                icon: "location_on",
                text: o.location,
                tooltip: "所在地区"
            }) : null, o.bio ? f(Jr, {
                icon: "description",
                text: o.bio,
                tooltip: "个人简介",
                multiLine: !0
            }) : null, o.blog || o.company || o.location || o.bio ? f("button", {
                class: "fold-button mdui-btn",
                onclick: function () {
                    n.setState({profile_fold: !t.profile_fold})
                }
            }, f("i", {class: "mdui-icon-left mdui-icon material-icons mdui-text-color-theme-icon"}, t.profile_fold ? "keyboard_arrow_down" : "keyboard_arrow_up"), t.profile_fold ? "查看" : "收起", "详细资料") : null)), f("div", {
                class: "actions",
                key: "2"
            }, i ? null : f(ga, {
                item: o,
                type: "user",
                id: o.user_id,
                actions: n
            }), i ? f("button", {
                class: "edit mdui-btn mdui-btn-icon mdui-btn-outlined",
                "mdui-tooltip": "{content: '编辑个人资料', delay: 300}",
                onclick: n.updateUserInfo
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "edit")) : null, f("div", {class: "follow"}, f("button", {
                class: "followers mdui-btn mdui-text-color-theme-secondary",
                onclick: function () {
                    O("users_dialog_open", {type: "followers", id: o.user_id})
                }
            }, o.follower_count, " 人关注"), f("div", {class: "divider"}), f("button", {
                class: "followees mdui-btn mdui-text-color-theme-secondary",
                onclick: function () {
                    O("users_dialog_open", {type: "followees", id: o.user_id})
                }
            }, "关注了 ", o.followee_count, " 人")), f("div", {class: "flex-grow"}), f(ka, {
                type: "user",
                item: o,
                extraOptions: i ? [{name: "重置头像", onClick: n.deleteAvatar}, {
                    name: "重置封面",
                    onClick: n.deleteCover
                }] : null
            }))] : null)
        };
        var Xr = function () {
            return f("div", {class: "mdui-dialog-title"}, f("button", {
                class: "mdui-btn mdui-btn-icon mdui-ripple close",
                "mdui-dialog-close": !0
            }, f("i", {class: "mdui-icon material-icons"}, "close")), "编辑个人信息")
        }, es = function (e) {
            var t = e.label, n = e.maxlength, i = e.name, o = e.value, a = e.type;
            return f("div", {
                class: "mdui-textfield mdui-textfield-floating-label", onupdate: function (e) {
                    return X.Z.updateTextFields(e)
                }
            }, f("label", {class: "mdui-textfield-label"}, t), "text" === a ? f("input", {
                class: "mdui-textfield-input",
                name: i,
                type: "text",
                maxlength: n,
                value: In(o)
            }) : null, "textfield" === a ? f("textarea", {
                class: "mdui-textfield-input",
                name: i,
                maxlength: n,
                value: In(o)
            }) : null)
        }, ts = function (e) {
            var t = e.user;
            return f("form", {class: "mdui-dialog-content"}, f(es, {
                label: "一句话介绍",
                maxlength: 40,
                name: "headline",
                value: t.headline,
                type: "text"
            }), f(es, {
                label: "个人主页",
                maxlength: 80,
                name: "blog",
                value: t.blog,
                type: "text"
            }), f(es, {
                label: "所属学校或企业",
                maxlength: 80,
                name: "company",
                value: t.company,
                type: "text"
            }), f(es, {
                label: "所在地区",
                maxlength: 80,
                name: "location",
                value: t.location,
                type: "text"
            }), f(es, {label: "个人简介", maxlength: 160, name: "bio", value: t.bio, type: "textfield"}))
        }, ns = function (e) {
            var t = e.edit_info_submitting;
            return f("div", {class: "mdui-dialog-actions"}, f("button", {
                class: "mdui-btn",
                "mdui-dialog-close": !0
            }, "取消"), f("button", {class: "mdui-btn", "mdui-dialog-confirm": !0, disabled: t}, t ? "保存中" : "确定"))
        };
        const is = function (e) {
            var t = e.user, n = e.edit_info_submitting;
            return f("div", {
                class: "mdui-dialog edit-info", oncreate: function (e) {
                    return (0, x.Z)(e).mutation()
                }
            }, f(Xr, null), f(ts, {user: t}), f(ns, {edit_info_submitting: n}))
        }, os = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {class: "contexts mdui-card"}, f(Hr, {
                items: [{
                    name: "提问",
                    hash: "questions",
                    count: t.interviewee ? t.interviewee.question_count : 0
                }, {name: "回答", hash: "answers", count: t.interviewee ? t.interviewee.answer_count : 0}, {
                    name: "文章",
                    hash: "articles",
                    count: t.interviewee ? t.interviewee.article_count : 0
                }]
            }), t.tabs.map((function (e) {
                var i = t[e + "_pagination"], o = t[e + "_data"], a = t[e + "_order"], r = t[e + "_loading"],
                    s = !r && !o.length && i, c = !r && i && i.page === i.pages;
                return function () {
                    return f("div", {id: e}, "questions" === e ? f(Or, {
                        show: !s,
                        title: "共 " + (i ? i.total : 0) + " 个提问",
                        disabled: r,
                        currentOrder: a,
                        key: e,
                        orders: [{order: "-update_time", name: "更新时间（从晚到早）"}, {
                            order: "update_time",
                            name: "更新时间（从早到晚）"
                        }],
                        onChangeOrder: n.changeOrder
                    }) : null, "articles" === e ? f(Or, {
                        show: !s,
                        title: "共 " + (i ? i.total : 0) + " 篇文章",
                        disabled: r,
                        currentOrder: a,
                        key: e,
                        orders: [{order: "-create_time", name: "发布时间（从晚到早）"}, {
                            order: "create_time",
                            name: "发布时间（从早到晚）"
                        }, {order: "-vote_count", name: "最热门"}],
                        onChangeOrder: n.changeOrder
                    }) : null, "answers" === e ? f(Or, {
                        show: !s,
                        title: "共 " + (i ? i.total : 0) + " 个回答",
                        disabled: r,
                        currentOrder: a,
                        key: e,
                        orders: [{order: "-create_time", name: "发布时间（从晚到早）"}, {
                            order: "create_time",
                            name: "发布时间（从早到晚）"
                        }, {order: "-vote_count", name: "最热门"}],
                        onChangeOrder: n.changeOrder
                    }) : null, o.length ? f("div", {class: "item-list"}, "questions" === e ? o.map((function (i) {
                        return f(wr, {question: i, last_visit_id: t.last_visit_question_id, tabName: e, actions: n})
                    })) : null, "articles" === e ? o.map((function (i) {
                        return f(br, {article: i, last_visit_id: t.last_visit_article_id, tabName: e, actions: n})
                    })) : null, "answers" === e ? o.map((function (i) {
                        return f(yr, {answer: i, last_visit_id: t.last_visit_question_id, tabName: e, actions: n})
                    })) : null) : null, f(Za, {
                        show: s,
                        title: "该用户没有发表" + ("questions" === e ? "提问" : "articles" === e ? "文章" : "回答")
                    }), f(Xo, {show: r}), f(Ta, {show: c}))
                }
            })))
        }, as = function (e, t) {
            return function (n) {
                var i = n.match, o = parseInt(i.params.user_id, 10), a = e.user && o === e.user.user_id;
                return f("div", {
                    oncreate: function () {
                        return t.onCreate({interviewee_id: o})
                    }, ondestroy: t.onDestroy, key: i.url, id: "page-user", class: "mdui-container"
                }, f(Vr, {state: e, actions: t, is_me: a}), f(os, {state: e, actions: t}), e.user ? f(is, {
                    user: e.user,
                    edit_info_submitting: e.edit_info_submitting
                }) : null)
            }
        }, rs = function (e) {
            var t = e.notification, n = e.actions, i = function (e, t) {
                return f("div", {class: "title mdui-text-color-theme-text"}, t)
            }, o = function (e) {
                var n = e.content;
                if (!t.is_show_detail) return f("div", {
                    class: "content",
                    key: "summary",
                    oncreate: ma(n, 46),
                    onupdate: ma(n, 46)
                });
                if (t.is_loaded_detail) {
                    var i = ["comment_deleted", "question_commented", "article_commented", "answer_commented", "comment_replies"].indexOf(t.type) > -1 ? fa(t.content_detail) : pa(t.content_detail);
                    return f("div", {class: "content mdui-typo", key: "richtext", oncreate: i, onupdate: i})
                }
                return f("div", {class: "content", key: "loading"}, f(Xo, {show: !0}))
            }, a = function () {
                return f("div", {
                    class: "mdui-btn mdui-btn-icon more",
                    title: t.is_show_detail ? "隐藏详细信息" : "显示详细信息",
                    onclick: function () {
                        return n.toggleDetail(t)
                    }
                }, f("i", {class: "mdui-icon material-icons"}, t.is_show_detail ? "arrow_drop_up" : "arrow_drop_down"))
            }, r = function () {
                return f("div", {
                    class: "mdui-btn mdui-btn-icon delete", title: "删除该通知", onclick: function () {
                        return n.deleteOne(t)
                    }
                }, f("i", {class: "mdui-icon material-icons"}, "close"))
            }, s = function (e, t) {
                return f("div", {class: "item"}, f(r, null), t, f(a, null))
            }, c = function (e, n) {
                return f(s, null, n, f(o, {content: t.relationships.reply.content_summary}))
            }, l = function (e, n) {
                return f(s, null, n, f(o, {content: t.content_deleted.content}))
            }, u = function () {
                return f(g, {to: Wt("/users/" + t.sender_id), class: "user"}, t.relationships.sender.username)
            }, d = function () {
                return f(g, {
                    to: Wt("/questions/" + t.question_id),
                    class: "question"
                }, t.relationships.question ? t.relationships.question.title : t.content_deleted.title)
            }, p = function () {
                return f(g, {
                    to: Wt("/articles/" + t.article_id),
                    class: "article"
                }, t.relationships.article ? t.relationships.article.title : t.content_deleted.title)
            };
            switch (t.type) {
                case"question_answered":
                    return f(s, null, f(i, null, f(u, null), " 回答了你的提问 ", f(d, null)), f(o, {content: t.relationships.answer.content_summary}));
                case"question_commented":
                    return f(s, null, f(i, null, f(u, null), " 评论了你的提问 ", f(d, null)), f(o, {content: t.relationships.comment.content_summary}));
                case"question_deleted":
                    return f(s, null, f(i, null, "你的提问", " ", f("span", {class: "question deleted"}, t.content_deleted.title), " ", "已被删除"), f(o, {content: t.content_deleted.content_rendered}));
                case"article_commented":
                    return f(s, null, f(i, null, f(u, null), " 评论了你的文章 ", f(p, null)), f(o, {content: t.relationships.comment.content_summary}));
                case"article_deleted":
                    return f(s, null, f(i, null, "你的文章", " ", f("span", {class: "article deleted"}, t.content_deleted.title), " ", "已被删除"), f(o, {content: t.content_deleted.content_rendered}));
                case"answer_commented":
                    return f(s, null, f(i, null, f(u, null), " 评论了你在提问 ", f(d, null), " 中的回答"), f(o, {content: t.relationships.comment.content_summary}));
                case"answer_deleted":
                    return f(s, null, f(i, null, "你在提问 ", f(d, null), " 中的回答已被删除"), f(o, {content: t.content_deleted.content_rendered}));
                case"comment_replied":
                    return t.answer_id && t.question_id ? f(c, null, f(i, null, f(u, null), " 回复了你在提问 ", f(d, null), " 的回答中的评论")) : t.question_id ? f(c, null, f(i, null, f(u, null), " 回复了你在提问 ", f(d, null), " 中的评论")) : t.article_id ? f(c, null, f(i, null, f(u, null), " 回复了你在文章 ", f(p, null), " 中的评论")) : null;
                case"comment_deleted":
                    return t.answer_id && t.question_id ? f(l, null, f(i, null, "你在提问 ", f(d, null), " 的回答中的评论已被删除")) : t.question_id ? f(l, null, f(i, null, "你在提问 ", f(d, null), " 中的评论已被删除")) : t.article_id ? f(l, null, f(i, null, "你在文章 ", f(p, null), " 中的评论已被删除")) : null;
                default:
                    return null
            }
        }, ss = function (e, t) {
            return function (n) {
                var i = n.match, o = !e.loading && !e.data.length && e.pagination,
                    a = !e.loading && e.pagination && e.pagination.page === e.pagination.pages, r = e.loading;
                return f("div", {
                    oncreate: t.onCreate,
                    ondestroy: t.onDestroy,
                    key: i.url,
                    id: "page-notifications",
                    class: "mdui-container"
                }, It() ? [f(Za, {
                    show: o,
                    title: "没有你的通知",
                    description: "此处会显示你所有的已读和未读通知",
                    key: "0"
                }), e.data.length ? f("div", {
                    class: "item-list mdui-card mdui-card-shadow",
                    key: "1"
                }, e.data.map((function (e) {
                    return f(rs, {notification: e, actions: t})
                }))) : null, It() ? null : f(Za, {
                    show: !0,
                    title: "登陆后才能查看通知",
                    description: "登陆后，你的通知消息将会显示在此处",
                    action: function () {
                        O("login_open")
                    },
                    action_text: "登录",
                    key: "2"
                }), f(Xo, {show: r, key: "3"}), f(Ta, {show: a, key: "4"})] : null)
            }
        };
        var cs, ls = function (e) {
            var t = e.user;
            return f("div", {
                class: "user mdui-btn mdui-btn-icon mdui-btn-dense",
                title: "帐号：" + t.username + "\n(" + t.email + ")",
                oncreate: function (e) {
                    cs = new X.Z.Menu(e, "#appbar-avatar-popover", {covered: !1})
                }
            }, f("img", {src: t.avatar.middle, width: "32", height: "32"}))
        }, us = function (e) {
            return f("button", {
                onclick: e.onClick,
                class: "mdui-btn mdui-btn-dense mdui-btn-outlined mdui-color-theme mdui-ripple"
            }, e.text)
        }, ds = function (e) {
            var t = e.user;
            return f("div", {
                class: "popover mdui-menu",
                id: "appbar-avatar-popover"
            }, f("div", {class: "info"}, f("div", {class: "avatar-box"}, f(Qr, {user: t}), f("img", {
                src: t.avatar.large,
                width: "96",
                height: "96"
            })), f("div", {class: "username"}, t.username), f("div", {class: "email mdui-text-color-theme-secondary"}, t.email), f("button", {
                class: "personal mdui-btn mdui-btn-dense mdui-btn-outlined mdui-color-theme mdui-ripple",
                onclick: function () {
                    var e = Wt("/users/" + t.user_id);
                    y.actions.go(e), cs.close()
                }
            }, "个人资料")), f("div", {class: "bottom"}, 1 === t.user_id ? f(us, {
                onClick: function () {
                    window.location.href = Wt("/admin"), cs.close()
                }, text: "管理后台"
            }) : null, f("div", {class: "mdui-toolbar-spacer"}), f(us, {
                onClick: function () {
                    ft("token", "", -1), window.localStorage.removeItem("token"), window.location.reload()
                }, text: "退出"
            })))
        };
        const ps = function (e) {
            var t = e.user;
            return f("div", {class: "avatar"}, f(ls, {user: t}), f(ds, {user: t}))
        }, ms = function (e) {
            var t = e.count;
            return f(g, {
                to: Wt("/notifications"),
                class: "notification mdui-btn mdui-btn-icon",
                title: (t ? t + " 条" : "没有") + "未读通知"
            }, t ? f("span", {class: "count"}) : null, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "notifications"))
        };
        var fs, hs, gs = function () {
            fs.addClass("focus")
        }, _s = function () {
            fs.removeClass("focus")
        }, vs = function (e) {
            e.target.value ? fs.addClass("not-empty") : fs.removeClass("not-empty")
        }, ws = function () {
            hs.val("").trigger("input")
        }, bs = function (e) {
            (0, x.Z)(e.target).parents(".toolbar").removeClass("mobile")
        }, ys = function (e) {
            var t = "site:" + window.location.host + "%20" + e;
            if ("third" === window.G_OPTIONS.search_type) switch (window.G_OPTIONS.search_third) {
                case"google":
                    return "https://www.google.com/search?q=" + t;
                case"bing":
                    return "https://www.bing.com/search?q=" + t;
                case"baidu":
                    return "https://www.baidu.com/s?ws=" + t;
                case"sogou":
                    return "https://www.sogou.com/web?query=" + t;
                case"360":
                    return "https://www.so.com/s?q=" + t;
                default:
                    return ""
            }
            return ""
        }, xs = function (e) {
            e.preventDefault();
            var t = hs.val();
            if (t) {
                var n = window.navigator.userAgent;
                n.indexOf("iPad") > -1 || n.indexOf("Ipod") > -1 || n.indexOf("iPhone") > -1 ? window.location.href = ys(t) : window.open(ys(t), "_blank")
            }
        };
        const ks = function () {
            return f("form", {
                method: "get", class: "search-bar", oncreate: function (e) {
                    return function (e) {
                        fs = (0, x.Z)(e), hs = fs.find("input")
                    }(e)
                }, onsubmit: xs
            }, f("button", {
                type: "button",
                class: "back mdui-btn mdui-btn-icon",
                onclick: bs
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "arrow_back")), f("button", {
                type: "submit",
                class: "submit mdui-btn mdui-btn-icon"
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "search")), f("input", {
                type: "text",
                placeholder: "搜索文章与问答",
                onfocus: gs,
                onblur: _s,
                oninput: vs
            }), f("button", {
                type: "button",
                class: "cancel mdui-btn mdui-btn-icon",
                onclick: ws
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "close")))
        };
        var Ss = function (e) {
            var t = (0, x.Z)(e.target).parents(".toolbar");
            t.addClass("mobile"), t.find(".search-bar input")[0].focus()
        };
        const Es = function () {
            return f("div", {
                class: "search-icon mdui-btn mdui-btn-icon",
                onclick: Ss
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "search"))
        };
        var Cs = function (e) {
            var t = e.interviewee;
            return f("div", {class: "title"}, Xt() ? "首页" : on() || nn() ? "问答" : tn() || en() ? "文章" : rn() || an() ? "话题" : cn() ? "人脉" : sn() && t ? t.username : Jt("/inbox") ? "私信" : ln() ? "通知" : null)
        }, Os = function () {
            return f("div", {
                class: "login mdui-btn mdui-btn-dense", onclick: function () {
                    return O("login_open")
                }
            }, "登录")
        }, Ts = function () {
            return f("div", {
                class: "register mdui-btn mdui-btn-dense", onclick: function () {
                    return O("register_open")
                }
            }, "注册")
        };
        const Zs = function (e) {
            var t = e.user, n = e.interviewee, i = e.notifications;
            return f("div", {class: "toolbar mdui-toolbar"}, f("button", {
                class: "drawer mdui-btn mdui-btn-icon mdui-ripple",
                oncreate: function (e) {
                    var t = (0, x.Z)(".mc-drawer"), n = new X.Z.Drawer(t, {swipe: !0});
                    t.data("drawerInstance", n), (0, x.Z)(e).on("click", (function () {
                        return n.toggle()
                    }))
                }
            }, f("i", {class: "mdui-icon material-icons"}, "menu")), f(g, {
                class: "headline",
                to: Wt("/")
            }, window.G_OPTIONS.site_name), f(Cs, {interviewee: n}), f(ks, null), f("div", {class: "mdui-toolbar-spacer"}), f(Es, null), t ? [f(ms, {
                count: i.count,
                key: "0"
            }), f(ps, {user: t, key: "1"})] : null, t ? null : [f(Os, {key: "0"}), f(Ts, {key: "1"})])
        }, Is = function (e) {
            var t = e.user;
            return on() ? f(Hr, {
                key: "questions",
                centered: !0,
                items: [{name: "最新", hash: "recent"}, {name: "近期热门", hash: "popular"}].concat(t ? {
                    name: "已关注",
                    hash: "following"
                } : null)
            }) : tn() ? f(Hr, {
                key: "articles",
                centered: !0,
                items: [{name: "最新", hash: "recent"}, {name: "近期热门", hash: "popular"}].concat(t ? {
                    name: "已关注",
                    hash: "following"
                } : null)
            }) : t && rn() ? f(Hr, {
                key: "topics",
                centered: !0,
                items: [{name: "已关注", hash: "following"}, {name: "精选", hash: "recommended"}]
            }) : t && cn() ? f(Hr, {
                key: "users",
                centered: !0,
                items: [{name: "已关注", hash: "followees"}, {name: "关注者", hash: "followers"}, {
                    name: "找人",
                    hash: "recommended"
                }]
            }) : null
        };
        var Ns = function (e) {
            var t = (0, x.Z)(e).mutation(), n = new X.Z.Headroom(t, {
                pinnedClass: "mdui-headroom-pinned-toolbar",
                unpinnedClass: "mdui-headroom-unpinned-toolbar"
            }), i = function () {
                S.width() < 600 ? n.enable() : n.disable()
            };
            S.on("resize", i), i(), t.on("click", (function (e) {
                if (window.pageYOffset) {
                    var t = (0, x.Z)(e.target);
                    (t.is(".mdui-toolbar") || t.is("mdui-tab")) && function (e) {
                        void 0 === e && (e = 300);
                        var t, n, i, o = window.scrollY || window.pageYOffset,
                            a = document.body.getBoundingClientRect().top + o - o;
                        window.requestAnimationFrame((function r(s) {
                            t || (t = s), i = Vo(n = s - t, o, a, e), window.scrollTo(0, i), n < e ? window.requestAnimationFrame(r) : (window.scrollTo(0, o + a), t = !1)
                        }))
                    }()
                }
            }))
        };
        const Rs = function (e) {
            var t = e.user, n = e.interviewee, i = e.notifications;
            return f("div", {
                class: "mc-appbar mdui-appbar mdui-appbar-fixed", oncreate: function (e) {
                    return Ns(e)
                }
            }, f(Zs, {user: t, interviewee: n, notifications: i}), f(Is, {user: t}))
        };
        var Ds = window.G_OPTIONS, As = Ds.site_name, qs = Ds.site_icp_beian, Ms = Ds.site_gongan_beian,
            Ls = Ms ? Ms.match(/\d+/)[0] : "", $s = function (e) {
                var t = e.url, n = e.icon, i = e.title, o = e.active;
                return f(g, {
                    to: Wt(t),
                    class: Wo(["mdui-list-item", "mdui-ripple", {"mdui-list-item-active": o}])
                }, f("i", {class: "mdui-list-item-icon mdui-icon material-icons"}, n), f("div", {class: "mdui-list-item-content"}, i))
            };
        const Ps = function (e) {
            var t = e.user, n = e.interviewee;
            return f("div", {class: "mc-drawer mdui-drawer"}, f("div", {class: "mdui-list"}, f($s, {
                url: "/",
                icon: "home",
                title: "首页",
                active: Xt()
            }), f($s, {url: "/topics", icon: "class", title: "话题", active: rn() || an()}), f($s, {
                url: "/questions",
                icon: "forum",
                title: "问答",
                active: on() || nn()
            }), f($s, {
                url: "/articles",
                icon: "description",
                title: "文章",
                active: tn() || en()
            }), f("div", {class: "mdui-divider"}), t ? f($s, {
                url: "/users/" + t.user_id,
                icon: "account_circle",
                title: "个人资料",
                active: sn() && n && t.user_id === n.user_id
            }) : null, f($s, {
                url: "/users",
                icon: "people",
                title: "人脉",
                active: cn() || sn() && (!t || n && t.user_id !== n.user_id)
            }), t ? f($s, {
                url: "/notifications",
                icon: "notifications",
                title: "通知",
                active: ln()
            }) : null), f("div", {class: "copyright"}, qs ? f("p", null, f("a", {
                href: "https://beian.miit.gov.cn/",
                target: "_blank"
            }, qs)) : null, Ms ? f("p", null, f("a", {
                href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=" + Ls,
                target: "_blank"
            }, Ms)) : null, f("p", null, "© ", (new Date).getFullYear(), " ", As), f("p", null, "Powered by", " ", f("a", {
                href: "https://mdui.org",
                target: "_blank"
            }, "MDUI"), " ", "&", " ", f("a", {href: "https://mdclub.org", target: "_blank"}, "MDClub"))))
        }, js = function (e) {
            var t = e.onClick, n = e.icon;
            return f("button", {
                onclick: t,
                class: Wo(["mdui-btn", "mdui-btn-icon", n])
            }, f("i", {class: "mdui-icon material-icons"}, n))
        }, Us = function (e) {
            return f("div", {class: "mdui-dialog-title"}, e.text)
        }, Hs = function (e) {
            var t = e.value, n = e.message, i = e.label, o = e.name, a = e.error, r = e.onInput;
            return f("div", {
                class: Wo(["mdui-textfield", "mdui-textfield-floating-label", "mdui-textfield-has-bottom", {
                    "mdui-textfield-invalid": n,
                    "mdui-textfield-not-empty": t
                }])
            }, f("label", {class: "mdui-textfield-label"}, i), f("input", {
                oninput: r,
                value: t,
                class: "mdui-textfield-input",
                name: o,
                type: "text",
                required: "required"
            }), f("div", {class: "mdui-textfield-error"}, a))
        }, Ks = function (e) {
            var t = e.value, n = e.message, i = e.label, o = e.name, a = e.onInput;
            return f("div", {
                class: Wo(["mdui-textfield", "mdui-textfield-floating-label", "mdui-textfield-has-bottom", {
                    "mdui-textfield-invalid": n,
                    "mdui-textfield-not-empty": t
                }])
            }, f("label", {class: "mdui-textfield-label"}, i), f("input", {
                oninput: a,
                value: t,
                class: "mdui-textfield-input",
                name: o,
                type: "password",
                required: "required"
            }), f("div", {class: "mdui-textfield-error"}, n || "密码不能为空"))
        }, Bs = function (e) {
            var t = e.value, n = e.message, i = e.image, o = e.hide, a = e.onInput, r = e.onRefresh;
            return f("div", {
                class: Wo(["mdui-textfield", "mdui-textfield-floating-label", "mdui-textfield-has-bottom", "captcha-field", {
                    "mdui-textfield-invalid": n,
                    "mdui-textfield-not-empty": t,
                    "mdui-hidden": o
                }])
            }, f("label", {class: "mdui-textfield-label"}, "图形验证码"), f("input", {
                oninput: a,
                value: t,
                class: "mdui-textfield-input",
                name: "captcha_code",
                type: "text",
                autocomplete: "off",
                required: !o
            }), f("div", {class: "mdui-textfield-error"}, n || "请输入图形验证码"), f("img", {
                class: "captcha-image",
                src: i,
                title: "点击刷新验证码",
                onclick: r
            }))
        }, Gs = function (e) {
            return f("button", {
                type: "submit",
                class: "mdui-btn mdui-btn-raised mdui-color-theme action-btn",
                disabled: e.disabled
            }, e.text)
        };
        var zs = function () {
            return f("button", {
                class: "mdui-btn mdui-ripple more-option",
                type: "button",
                "mdui-menu": "{target: '#mc-login-menu', position: 'top', covered: true}"
            }, "更多选项", f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "arrow_drop_down"))
        }, Fs = function (e) {
            var t = e.actions;
            return f("ul", {
                class: "mdui-menu",
                id: "mc-login-menu"
            }, f("li", {class: "mdui-menu-item"}, f("a", {
                onclick: t.toReset,
                class: "mdui-ripple"
            }, "忘记密码")), f("li", {class: "mdui-menu-item"}, f("a", {
                onclick: t.toRegister,
                class: "mdui-ripple"
            }, "创建新账号")))
        };
        const Ys = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {class: "actions mdui-clearfix"}, f(zs, null), f(Fs, {actions: n}), f(Gs, {
                disabled: t.submitting,
                text: t.submitting ? "登录中…" : "登录"
            }))
        }, Qs = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {
                oncreate: function (e) {
                    return n.onCreate({element: e})
                }, key: "login", class: "mc-account mc-login mdui-dialog"
            }, f(js, {
                onClick: n.close,
                icon: "close"
            }), f(Us, {text: "登录"}), f("form", {onsubmit: n.login}, f(Hs, {
                value: t.name,
                message: t.name_msg,
                label: "用户名或邮箱",
                name: "name",
                error: t.name_msg || "账号不能为空",
                onInput: n.onInput
            }), f(Ks, {
                value: t.password,
                message: t.password_msg,
                label: "密码",
                name: "password",
                onInput: n.onInput
            }), f(Bs, {
                value: t.captcha_code,
                message: t.captcha_code_msg,
                image: t.captcha_image,
                hide: !t.captcha_token,
                onInput: n.onInput,
                onRefresh: n.refreshCaptcha
            }), f(Ys, {state: t, actions: n})))
        }, Ws = function () {
            return f("i", {class: "mdui-icon material-icons avatar"}, "account_circle")
        }, Js = function (e) {
            var t = e.value, n = e.message, i = e.onInput;
            return f("div", {
                class: Wo(["mdui-textfield", "mdui-textfield-floating-label", "mdui-textfield-has-bottom", {
                    "mdui-textfield-invalid": n,
                    "mdui-textfield-not-empty": t
                }])
            }, f("label", {class: "mdui-textfield-label"}, "邮箱"), f("input", {
                oninput: i,
                value: t,
                class: "mdui-textfield-input",
                name: "email",
                type: "email",
                required: "required"
            }), f("div", {class: "mdui-textfield-error"}, n || "邮箱格式错误"))
        };
        const Vs = function (e) {
            var t = e.value, n = e.message, i = e.sending, o = e.show_resend_countdown, a = e.resend_countdown,
                r = e.onInput, s = e.onSend;
            return f("div", {
                class: Wo(["mdui-textfield", "mdui-textfield-floating-label", "mdui-textfield-has-bottom", "send-email-field", {
                    "mdui-textfield-invalid": n,
                    "mdui-textfield-not-empty": t
                }])
            }, f("labe", {class: "mdui-textfield-label"}, "邮件验证码"), f("input", {
                oninput: r,
                value: t,
                class: "mdui-textfield-input",
                name: "email_code",
                type: "text",
                autocomplete: "off",
                required: "required"
            }), f("div", {class: "mdui-textfield-error"}, n || "验证码不能为空"), f("button", {
                onclick: s,
                class: "mdui-btn send-email",
                type: "button",
                disabled: i || o
            }, o ? a + "s" : function (e) {
                return e ? "发送中…" : "发送验证码"
            }(i)))
        };
        var Xs = function (e) {
            return f("div", {class: "mdui-btn mdui-ripple more-option", onclick: e.actions.toLogin}, "已有账号？")
        };
        const ec = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {class: "actions"}, f(Xs, {actions: n}), f(Gs, {
                disabled: t.verifying,
                text: t.verifying ? "正在验证…" : "下一步"
            }))
        }, tc = function (e) {
            var t = e.state;
            return f("div", {class: "actions mdui-clearfix"}, f(Gs, {
                disabled: t.submitting,
                text: t.submitting ? "注册中…" : "注册"
            }))
        }, nc = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {
                oncreate: function (e) {
                    return n.onCreate({element: e})
                }, key: "register", class: "mc-account mc-register mdui-dialog"
            }, f(js, {
                onClick: t.email_valid ? n.prevStep : n.close,
                icon: t.email_valid ? "arrow_back" : "close"
            }), t.email_valid ? f(Ws, null) : null, f(Us, {text: t.email_valid ? t.email : "创建新账号"}), f("form", {
                onsubmit: n.nextStep,
                class: Wo([{"mdui-hidden": t.email_valid}]),
                key: "send"
            }, f(Js, {value: t.email, message: t.email_msg, onInput: n.onInput}), f(Bs, {
                value: t.captcha_code,
                message: t.captcha_code_msg,
                image: t.captcha_image,
                hide: !t.captcha_token,
                onInput: n.onInput,
                onRefresh: n.refreshCaptcha
            }), f(Vs, {
                value: t.email_code,
                message: t.email_code_msg,
                sending: t.sending,
                show_resend_countdown: t.show_resend_countdown,
                resend_countdown: t.resend_countdown,
                onInput: n.onInput,
                onSend: n.sendEmail
            }), f(ec, {state: t, actions: n})), f("form", {
                onsubmit: n.register,
                class: Wo([{"mdui-hidden": !t.email_valid}]),
                key: "submit"
            }, f(Hs, {
                value: t.username,
                message: t.username_msg,
                label: "用户名",
                name: "username",
                error: t.username_msg || "用户名不能为空",
                onInput: n.onInput
            }), f(Ks, {
                value: t.password,
                message: t.password_msg,
                label: "密码",
                name: "password",
                onInput: n.onInput
            }), f(tc, {state: t})))
        };
        var ic = function () {
            return f("button", {
                type: "button",
                class: "mdui-btn mdui-ripple more-option",
                "mdui-menu": "{target: '#mc-password-reset-menu', position: 'top', covered: true}"
            }, "更多选项", f("i", {className: "mdui-icon material-icons mdui-text-color-theme-icon"}, "arrow_drop_down"))
        }, oc = function (e) {
            var t = e.actions;
            return f("ul", {
                class: "mdui-menu",
                id: "mc-password-reset-menu"
            }, f("li", {class: "mdui-menu-item"}, f("a", {
                onclick: t.toLogin,
                class: "mdui-ripple"
            }, "登录账号")), f("li", {class: "mdui-menu-item"}, f("a", {
                onclick: t.toRegister,
                class: "mdui-ripple"
            }, "创建新账号")))
        };
        const ac = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {class: "actions"}, f(ic, null), f(oc, {actions: n}), f(Gs, {
                disabled: t.verifying,
                text: t.verifying ? "正在验证…" : "下一步"
            }))
        }, rc = function (e) {
            var t = e.state;
            return f("div", {class: "actions mdui-clearfix"}, f(Gs, {
                disabled: t.submitting,
                text: t.submitting ? "提交中…" : "提交"
            }))
        }, sc = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {
                oncreate: function (e) {
                    return n.onCreate({element: e})
                }, key: "reset", class: "mc-account mc-reset mdui-dialog"
            }, f(js, {
                onClick: t.email_valid ? n.prevStep : n.close,
                icon: t.email_valid ? "arrow_back" : "close"
            }), t.email_valid ? f(Ws, null) : null, f(Us, {text: t.email_valid ? t.email : "重置密码"}), f("form", {
                onsubmit: n.nextStep,
                class: Wo([{"mdui-hidden": t.email_valid}]),
                key: "verify"
            }, f(Js, {value: t.email, message: t.email_msg, onInput: n.onInput}), f(Bs, {
                value: t.captcha_code,
                message: t.captcha_code_msg,
                image: t.captcha_image,
                hide: !t.captcha_token,
                onInput: n.onInput,
                onRefresh: n.refreshCaptcha
            }), f(Vs, {
                value: t.email_code,
                message: t.email_code_msg,
                sending: t.sending,
                show_resend_countdown: t.show_resend_countdown,
                resend_countdown: t.resend_countdown,
                onInput: n.onInput,
                onSend: n.sendEmail
            }), f(ac, {state: t, actions: n})), f("form", {
                onsubmit: n.submit,
                class: Wo([{"mdui-hidden": !t.email_valid}]),
                key: "submit"
            }, f(Ks, {
                value: t.password,
                message: t.password_msg,
                label: "新密码",
                name: "password",
                onInput: n.onInput
            }), f(Ks, {
                value: t.password_repeat,
                message: t.password_repeat_msg,
                label: "重复新密码",
                name: "password_repeat",
                onInput: n.onInput
            }), f(rc, {state: t})))
        };
        var cc = function (e) {
            var t = e.state;
            return f("div", {class: "mdui-dialog-title"}, f("button", {
                class: "close mdui-btn mdui-btn-icon mdui-ripple",
                "mdui-dialog-close": !0
            }, f("i", {class: "mdui-icon material-icons"}, "close")), t.pagination ? "followees" === t.type ? ["关注了 ", t.pagination.total, " 人"] : [t.pagination.total, " 位关注者"] : null)
        }, lc = function (e) {
            var t = e.item, n = e.actions;
            return f("div", {class: "item"}, f("div", {
                class: "mdui-list-item mdui-ripple",
                key: t.user_id,
                onclick: function () {
                    return n.onItemClick(t.user_id)
                }
            }, f("div", {class: "mdui-list-item-avatar"}, f("img", {src: t.avatar.middle})), f("div", {class: "mdui-list-item-content"}, t.username)), t.relationships.is_me ? null : f(ga, {
                item: t,
                type: "users_dialog",
                id: t.user_id,
                actions: n
            }))
        };
        const uc = function (e) {
            var t = e.state, n = e.actions, i = !t.loading && !t.data.length && t.pagination, o = t.loading,
                a = !t.loading && t.pagination && t.pagination.page === t.pagination.pages;
            return f("div", {
                key: "users-dialog", class: "mdui-dialog mc-users-dialog", oncreate: function (e) {
                    return n.onCreate({element: e})
                }
            }, f(cc, {state: t}), f("div", {class: "mdui-dialog-content"}, f("div", {class: "mdui-list"}, t.data.map((function (e) {
                return f(lc, {item: e, actions: n})
            }))), f(Za, {
                show: i,
                title: "followees" === t.type ? "尚未关注任何用户" : "没有任何关注者"
            }), f(Xo, {show: o}), f(Ta, {show: a})))
        }, dc = function (e) {
            var t = e.state, n = e.actions, i = function (e) {
                var i = e.reason;
                return f("label", {class: "mdui-list-item"}, f("div", {class: "mdui-radio"}, f("input", {
                    type: "radio",
                    name: "reason",
                    value: i,
                    checked: i === t.reason,
                    onchange: function (e) {
                        return n.onChange(e)
                    }
                }), f("i", {class: "mdui-radio-icon"})), f("div", {class: "mdui-list-item-content"}, i))
            };
            return f("div", {
                oncreate: function (e) {
                    return n.onCreate({element: e})
                }, key: "report-dialog", class: "mc-report-dialog mdui-dialog"
            }, f("div", {class: "mdui-dialog-title"}, f("span", null, "举报"), f("button", {
                class: "mdui-btn mdui-btn-icon mdui-ripple",
                onclick: n.close
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "close"))), f("form", {
                class: "mdui-dialog-content",
                method: "post"
            }, f("div", {class: "mdui-list"}, f(i, {reason: "垃圾广告信息"}), f(i, {reason: "不友善行为"}), f(i, {reason: "有害信息"}), f(i, {reason: "涉嫌侵权"}), f(i, {reason: "诱导赞同、关注等行为"}), f(i, {reason: "其他原因"}), f("div", {class: Wo(["mdui-textfield", {"mdui-hidden": "其他原因" !== t.reason}])}, f("textarea", {
                class: "custom-reason mdui-textfield-input",
                placeholder: "请输入原因"
            })))), f("div", {class: "mdui-dialog-actions"}, f("button", {
                class: "mdui-btn mdui-ripple",
                "mdui-dialog-cancel": !0
            }, "取消"), f("button", {class: "mdui-btn mdui-ripple", "mdui-dialog-confirm": !0}, "举报")))
        };
        var pc = function (e) {
            var t = e.name, n = e.svg;
            return f("div", {
                class: "mdui-list-item mdui-ripple",
                onclick: e.onClick
            }, f("img", {src: window.G_ROOT + "/static/theme/material/" + n}), f("div", {class: "mdui-list-item-content"}, t))
        };
        const mc = function (e) {
            var t = e.actions;
            return f("div", {
                oncreate: function (e) {
                    return t.onCreate({element: e})
                }, key: "share-dialog", class: "mc-share-dialog mdui-dialog"
            }, f("div", {class: "mdui-dialog-title"}, f("span", null, "分享"), f("button", {
                class: "mdui-btn mdui-btn-icon mdui-ripple",
                onclick: t.close
            }, f("i", {class: "mdui-icon material-icons mdui-text-color-theme-icon"}, "close"))), f("div", {class: "mdui-dialog-content"}, f("div", {class: "mdui-list"}, f(pc, {
                name: "微博",
                svg: "./4a718302573d384b438fc47f8a3c5031.svg",
                onClick: t.shareToWeibo
            }), f(pc, {
                name: "Facebook",
                svg: "./4fb701ba006326e351298a120baa1284.svg",
                onClick: t.shareToFacebook
            }), f(pc, {name: "Twitter", svg: "./0a3424f1a2cc42d9637f8ab1f9d55733.svg", onClick: t.shareToTwitter}))))
        }, fc = function (e) {
            var t = e.state, n = e.actions;
            return f("div", {class: Wo(["mc-comments-dialog", "mdui-dialog", {"mdui-dialog-open": t.open_dialog}])}, f(Lr, {
                commentable_type: "",
                commentable_id: 0,
                isInDialog: !0,
                state: t,
                actions: n
            }))
        };
        var hc = function (e) {
            var t = window.matchMedia("(prefers-color-scheme: dark)"), n = function (e) {
                return O("layout_update", e.matches ? "dark" : "light")
            };
            O("layout_update", t.matches ? "dark" : "light"), (0, Z.o8)(t.addEventListener) ? (0, Z.o8)(t.addListener) || t.addListener(n) : t.addEventListener("change", n);
            var i = function () {
                var e;
                (void 0 === e && (e = {}), (0, gt.A_)((0, _t.K)("/notifications/count", e, ["type"]))).then((function (e) {
                    O("notification_count_update", e.data.notification_count)
                }))
            };
            e && (setInterval(i, 3e4), i())
        };
        const gc = function (e, t) {
            var n = ["mdui-appbar-with-toolbar", "mg-app"];
            return (on() || tn() || rn() && e.user.user || cn() && e.user.user) && n.push("mdui-appbar-with-tab"), E["dark" === e.theme.layout ? "addClass" : "removeClass"]("mdui-theme-layout-dark"), f("div", {
                class: Wo(n),
                oncreate: function () {
                    hc(e.user.user)
                }
            }, f(Rs, {
                user: e.user.user,
                interviewee: e.user.interviewee,
                notifications: e.notifications
            }), f(Ps, {user: e.user.user, interviewee: e.user.interviewee}), f(b, {
                path: Wt("/"),
                render: Oa(e.index, t.index)
            }), f(b, {
                path: Wt("/questions"),
                render: Sr(e.questions, t.questions)
            }), f(b, {
                path: Wt("/questions/:question_id"),
                render: Rr(e.question, t.question)
            }), f(b, {
                path: Wt("/questions/:question_id/answers/:answer_id"),
                render: Rr(e.answer, t.answer)
            }), f(b, {
                path: Wt("/articles"),
                render: Dr(e.articles, t.articles)
            }), f(b, {path: Wt("/articles/:article_id"), render: Pr(e.article, t.article)}), f(b, {
                path: Wt("/topics"),
                render: jr(e.topics, t.topics)
            }), f(b, {path: Wt("/topics/:topic_id"), render: Br(e.topic, t.topic)}), f(b, {
                path: Wt("/users"),
                render: zr(e.users, t.users)
            }), f(b, {path: Wt("/users/:user_id"), render: as(e.user, t.user)}), f(b, {
                path: Wt("/notifications"),
                render: ss(e.notifications, t.notifications)
            }), e.user.user ? null : [f(Qs, {state: e.login, actions: t.login, key: "0"}), f(nc, {
                state: e.register,
                actions: t.register,
                key: "1"
            }), f(sc, {state: e.reset, actions: t.reset, key: "2"})], f(uc, {
                state: e.usersDialog,
                actions: t.usersDialog
            }), f(dc, {state: e.reportDialog, actions: t.reportDialog}), f(mc, {
                state: e.shareDialog,
                actions: t.shareDialog
            }), f(fc, {state: e.comments, actions: t.comments}))
        };
        const _c = function (e) {
            C("user_update", (function (t) {
                e.user.setState({user: t})
            })), C("layout_update", (function (t) {
                e.theme.setLayout(t)
            })), C("route_update", (function () {
                if (window.scrollTo(0, 0), (0, x.Z)(".mdui-tooltip").remove(), window.innerWidth < 1024) {
                    var t = (0, x.Z)(".mc-drawer").data("drawerInstance");
                    t && t.close()
                }
                e.login.close(), e.register.close(), e.reset.close(), e.usersDialog.close(), e.comments.closeDialog(), e.reportDialog.close(), e.shareDialog.close()
            })), C("login_open", (function () {
                e.login.open()
            })), C("register_open", (function () {
                e.register.open()
            })), C("reset_open", (function () {
                e.reset.open()
            })), C("users_dialog_open", (function (t) {
                e.usersDialog.open(t)
            })), C("share_dialog_open", (function (t) {
                e.shareDialog.open(t)
            })), C("report_dialog_open", (function (t) {
                e.reportDialog.open(t)
            })), C("users_follow_updated", (function () {
                e.users.followUpdate()
            })), C("topics_follow_updated", (function () {
                e.topics.followUpdate()
            })), C("questions_follow_updated", (function () {
                e.questions.followUpdate()
            })), C("articles_follow_updated", (function () {
                e.articles.followUpdate()
            })), C("question_updated", (function (t) {
                e.questions.questionUpdate(t)
            })), C("notification_count_update", (function (t) {
                e.notifications.updateCount(t)
            })), C("comments_dialog_open", (function (t) {
                e.comments.openDialog(t)
            }))
        };
        (0, x.Z)((function () {
            document.body.innerHTML = "", window.app = h(Yo, Lo, gc, document.body), _c(window.app), y.subscribe(window.app.location);
            var e = window.G_USER;
            e && (O("user_update", e), window.G_USER = null)
        }))
    }()
})();
//# sourceMappingURL=index.701723c2.js.map