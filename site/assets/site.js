window.addEventListener("load", function() {

    document.querySelectorAll('[data-preload]').forEach(element=>{
        element.style.backgroundColor=null;
    });

    document.querySelectorAll('.site-heading nav').forEach(element=>{
        const button = document.createElement('button');
        button.classList.add("hamburger", "hamburger--squeeze", "dropdown");
        button.type = "button";
        const hamburgerbox = document.createElement('span');
        hamburgerbox.classList.add("hamburger-box");
        const hamburgerInner = document.createElement('span');
        hamburgerInner.classList.add("hamburger-inner");
        hamburgerbox.append(hamburgerInner);
        button.append(hamburgerbox);
        element.parentNode.insertBefore(button, element);
        button.onclick = ()=>{
            element.classList.toggle("active");
            button.classList.toggle("active");
            return false;
        }
    }
    )
});
var connection = new WebSocket('wss://csokavar.hu/finger',"finger-protocol");
connection.onmessage = function(e) {
    console.log(e.data);
}
;
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(D).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                re.removeChild(e)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = E.createElement("div").style
      , Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = _e.length;
            while (n--)
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = mt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Bt(Rt, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            f = v.url.replace(qt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials"in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});
jQuery.noConflict();
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                if (+o[i] < +n[i])
                    return 1;
                if (+n[i] < +o[i])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.3.2",
    n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};
    function u(e) {
        var t = n.console;
        s.migrateDeduplicateWarnings && r[e] || (r[e] = !0,
        s.migrateWarnings.push(e),
        t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e),
        s.migrateTrace && t.trace && t.trace()))
    }
    function t(e, t, r, n) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(n),
                r
            },
            set: function(e) {
                u(n),
                r = e
            }
        })
    }
    function o(e, t, r, n) {
        e[t] = function() {
            return u(n),
            r.apply(this, arguments)
        }
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        r = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i, a, c, d = {}, l = s.fn.init, p = s.find, f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in s.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        l.apply(this, t)
    }
    ,
    s.fn.init.prototype = s.fn,
    s.find = function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && f.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(y, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    u("Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    u("Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return p.apply(this, r)
    }
    ,
    p)
        Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(s.fn, "size", function() {
        return this.length
    }, "jQuery.fn.size() is deprecated and removed; use the .length property"),
    o(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "jQuery.parseJSON is deprecated; use JSON.parse"),
    o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
    o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && o(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(m, "")
    }, "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (o(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "jQuery.nodeName is deprecated"),
    o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (o(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        d["[object " + t + "]"] = t.toLowerCase()
    }),
    o(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "jQuery.type is deprecated"),
    o(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "jQuery.isFunction() is deprecated"),
    o(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "jQuery.isWindow() is deprecated")),
    s.ajax && (a = s.ajax,
    c = /(=)\?(?=&|$)|\?\?/,
    s.ajax = function() {
        var e = a.apply(this, arguments);
        return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"),
        o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
        o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
        e
    }
    ,
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
    }));
    var g = s.fn.removeAttr
      , h = s.fn.toggleClass
      , v = /\S+/g;
    function j(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    s.fn.removeAttr = function(e) {
        var r = this;
        return s.each(e.match(v), function(e, t) {
            s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        g.apply(this, arguments)
    }
    ;
    var Q, b = !(s.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }
    ), w = /^[a-z]/, x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return b = !0,
            e = r.apply(this, arguments),
            b = !1,
            e
        }
        )
    }),
    s.swap = function(e, t, r, n) {
        var o, i, a = {};
        for (i in b || u("jQuery.swap() is undocumented and deprecated"),
        t)
            a[i] = e.style[i],
            e.style[i] = t[i];
        for (i in o = r.apply(e, n || []),
        t)
            e.style[i] = a[i];
        return o
    }
    ,
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return u("JQMIGRATE: jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    s.cssNumber || (s.cssNumber = {}),
    Q = s.fn.css,
    s.fn.css = function(e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(o, e, t)
        }),
        this) : ("number" == typeof t && (r = j(e),
        n = r,
        w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        Q.apply(this, arguments))
    }
    ;
    var A, k, S, M, N = s.data;
    s.data = function(e, t, r) {
        var n, o, i;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (i in n = s.hasData(e) && N.call(this, e),
            o = {},
            t)
                i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i),
                n[i] = t[i]) : o[i] = t[i];
            return N.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : N.apply(this, arguments)
    }
    ,
    s.fx && (S = s.Tween.prototype.run,
    M = function(e) {
        return e
    }
    ,
    s.Tween.prototype.run = function() {
        1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = M),
        S.apply(this, arguments)
    }
    ,
    A = s.fx.interval || 13,
    k = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || u(k),
            A
        },
        set: function(e) {
            u(k),
            A = e
        }
    }));
    var R = s.fn.load
      , H = s.event.add
      , C = s.event.fix;
    s.event.props = [],
    s.event.fixHooks = {},
    t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
    s.event.fix = function(e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length)
                s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0,
        u("jQuery.event.fixHooks are deprecated and removed: " + r),
        (o = n.props) && o.length))
            while (o.length)
                s.event.addProp(o.pop());
        return t = C.call(this, e),
        n && n.filter ? n.filter(t, e) : t
    }
    ,
    s.event.add = function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"),
        H.apply(this, arguments)
    }
    ,
    s.each(["load", "unload", "error"], function(e, t) {
        s.fn[t] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        s.fn[r] = function(e, t) {
            return u("jQuery.fn." + r + "() event shorthand is deprecated"),
            0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && u("'ready' event is deprecated")
        }
    },
    s.fn.extend({
        bind: function(e, t, r) {
            return u("jQuery.fn.bind() is deprecated"),
            this.on(e, null, t, r)
        },
        unbind: function(e, t) {
            return u("jQuery.fn.unbind() is deprecated"),
            this.off(e, null, t)
        },
        delegate: function(e, t, r, n) {
            return u("jQuery.fn.delegate() is deprecated"),
            this.on(t, e, r, n)
        },
        undelegate: function(e, t, r) {
            return u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        },
        hover: function(e, t) {
            return u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
        }
    });
    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    function P(e) {
        var t = e.replace(O, "<$1></$2>");
        t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
    }
    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , q = s.htmlPrefilter;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.htmlPrefilter = function(e) {
            return P(e),
            e.replace(O, "<$1></$2>")
        }
    }
    ,
    s.htmlPrefilter = function(e) {
        return P(e),
        q(e)
    }
    ;
    var D, _ = s.fn.offset;
    s.fn.offset = function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }
    ,
    s.ajax && (D = s.param,
    s.param = function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        D.call(this, e, t)
    }
    );
    var E, F, J = s.fn.andSelf || s.fn.addBack;
    return s.fn.andSelf = function() {
        return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
        J.apply(this, arguments)
    }
    ,
    s.Deferred && (E = s.Deferred,
    F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    s.Deferred = function(e) {
        var i = E()
          , a = i.promise();
        return i.pipe = a.pipe = function() {
            var o = arguments;
            return u("deferred.pipe() is deprecated"),
            s.Deferred(function(n) {
                s.each(F, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    i[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        ,
        e && e.call(i, i),
        i
    }
    ,
    s.Deferred.exceptionHook = E.exceptionHook),
    s
});
!function(t, e) {
    t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    var i = Array.prototype.slice
      , n = t.console
      , d = void 0 === n ? function() {}
    : function(t) {
        n.error(t)
    }
    ;
    function o(h, u, l) {
        (l = l || e || t.jQuery) && (u.prototype.option || (u.prototype.option = function(t) {
            l.isPlainObject(t) && (this.options = l.extend(!0, this.options, t))
        }
        ),
        l.fn[h] = function(t) {
            if ("string" != typeof t)
                return a = t,
                this.each(function(t, e) {
                    var i = l.data(e, h);
                    i ? (i.option(a),
                    i._init()) : (i = new u(e,a),
                    l.data(e, h, i))
                }),
                this;
            var n, o, s, r, a, e = i.call(arguments, 1);
            return o = e,
            r = "$()." + h + '("' + (n = t) + '")',
            (t = this).each(function(t, e) {
                var i = l.data(e, h);
                i ? (e = i[n]) && "_" != n.charAt(0) ? (i = e.apply(i, o),
                s = void 0 === s ? i : s) : d(r + " is not a valid method") : d(h + " not initialized. Cannot call methods, i.e. " + r)
            }),
            void 0 !== s ? s : t
        }
        ,
        s(l))
    }
    function s(t) {
        !t || t && t.bridget || (t.bridget = o)
    }
    return s(e || t.jQuery),
    o
}),
function(t) {
    function e() {}
    t.EvEmitter = ((t = e.prototype).on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , t = i[t] = i[t] || [];
            return -1 == t.indexOf(e) && t.push(e),
            this
        }
    }
    ,
    t.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    }
    ,
    t.off = function(t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
            e = t.indexOf(e);
            return -1 != e && t.splice(e, 1),
            this
        }
    }
    ,
    t.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var s = i[o];
                n && n[s] && (this.off(t, s),
                delete n[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    t.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e)
}("undefined" != typeof window ? window : this),
function(t) {
    window.getSize = t()
}(function() {
    "use strict";
    function m(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    var e = "undefined" == typeof console ? function() {}
    : function(t) {
        console.error(t)
    }
      , f = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]
      , p = f.length;
    function g(t) {
        t = getComputedStyle(t);
        return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        t
    }
    var y, v = !1;
    function _(t) {
        if (v || (v = !0,
        (c = document.createElement("div")).style.width = "200px",
        c.style.padding = "1px 2px 3px 4px",
        c.style.borderStyle = "solid",
        c.style.borderWidth = "1px 2px 3px 4px",
        c.style.boxSizing = "border-box",
        (d = document.body || document.documentElement).appendChild(c),
        l = g(c),
        y = 200 == Math.round(m(l.width)),
        _.isBoxSizeOuter = y,
        d.removeChild(c)),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType) {
            var e = g(t);
            if ("none" == e.display)
                return function() {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < p; e++)
                        t[f[e]] = 0;
                    return t
                }();
            var i = {};
            i.width = t.offsetWidth,
            i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, o = 0; o < p; o++) {
                var s = f[o]
                  , r = e[s]
                  , r = parseFloat(r);
                i[s] = isNaN(r) ? 0 : r
            }
            var a = i.paddingLeft + i.paddingRight
              , h = i.paddingTop + i.paddingBottom
              , u = i.marginLeft + i.marginRight
              , l = i.marginTop + i.marginBottom
              , d = i.borderLeftWidth + i.borderRightWidth
              , c = i.borderTopWidth + i.borderBottomWidth
              , t = n && y
              , n = m(e.width);
            !1 !== n && (i.width = n + (t ? 0 : a + d));
            n = m(e.height);
            return !1 !== n && (i.height = n + (t ? 0 : h + c)),
            i.innerWidth = i.width - (a + d),
            i.innerHeight = i.height - (h + c),
            i.outerWidth = i.width + u,
            i.outerHeight = i.height + l,
            i
        }
    }
    return _
}),
window.matchesSelector = function() {
    "use strict";
    var i = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(t, e) {
        return t[i](e)
    }
}(),
function(t, e) {
    t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(i, r) {
    var n = {};
    n.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    n.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var e = Array.prototype.slice;
    n.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
    }
    ,
    n.removeFrom = function(t, e) {
        e = t.indexOf(e);
        -1 != e && t.splice(e, 1)
    }
    ,
    n.getParent = function(t, e) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            r(t, e))
                return t
    }
    ,
    n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    n.filterFindElements = function(t, o) {
        t = n.makeArray(t);
        var s = [];
        return t.forEach(function(t) {
            var e;
            if (e = t,
            "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)
                if (o) {
                    r(t, o) && s.push(t);
                    for (var i = t.querySelectorAll(o), n = 0; n < i.length; n++)
                        s.push(i[n])
                } else
                    s.push(t)
        }),
        s
    }
    ,
    n.debounceMethod = function(t, e, n) {
        n = n || 100;
        var o = t.prototype[e]
          , s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            clearTimeout(t);
            var e = arguments
              , i = this;
            this[s] = setTimeout(function() {
                o.apply(i, e),
                delete i[s]
            }, n)
        }
    }
    ,
    n.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var u = i.console;
    return n.htmlInit = function(a, h) {
        n.docReady(function() {
            var t = n.toDashed(h)
              , o = "data-" + t
              , e = document.querySelectorAll("[" + o + "]")
              , t = document.querySelectorAll(".js-" + t)
              , t = n.makeArray(e).concat(n.makeArray(t))
              , s = o + "-options"
              , r = i.jQuery;
            t.forEach(function(e) {
                var t, i = e.getAttribute(o) || e.getAttribute(s);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void (u && u.error("Error parsing " + o + " on " + e.className + ": " + t))
                }
                var n = new a(e,t);
                r && r.data(e, h, n)
            })
        })
    }
    ,
    n
}),
function(t, e) {
    t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize)
}(window, function(t, e) {
    "use strict";
    var i = document.documentElement.style
      , n = "string" == typeof i.transition ? "transition" : "WebkitTransition"
      , o = "string" == typeof i.transform ? "transform" : "WebkitTransform"
      , s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[n]
      , r = {
        transform: o,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay"
    };
    function a(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    t = a.prototype = Object.create(t.prototype);
    t.constructor = a,
    t._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    t.getSize = function() {
        this.size = e(this.element)
    }
    ,
    t.css = function(t) {
        var e, i = this.element.style;
        for (e in t)
            i[r[e] || e] = t[e]
    }
    ,
    t.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , n = t[e ? "left" : "right"]
          , o = t[i ? "top" : "bottom"]
          , s = parseFloat(n)
          , r = parseFloat(o)
          , t = this.layout.size;
        -1 != n.indexOf("%") && (s = s / 100 * t.width),
        -1 != o.indexOf("%") && (r = r / 100 * t.height),
        s = isNaN(s) ? 0 : s,
        r = isNaN(r) ? 0 : r,
        s -= e ? t.paddingLeft : t.paddingRight,
        r -= i ? t.paddingTop : t.paddingBottom,
        this.position.x = s,
        this.position.y = r
    }
    ,
    t.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , o = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , i = i ? "right" : "left"
          , o = this.position.x + t[o];
        e[s] = this.getXValue(o),
        e[i] = "";
        o = n ? "paddingTop" : "paddingBottom",
        i = n ? "top" : "bottom",
        n = n ? "bottom" : "top",
        o = this.position.y + t[o];
        e[i] = this.getYValue(o),
        e[n] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    t.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    t.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    t._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , n = this.position.y
          , o = t == this.position.x && e == this.position.y;
        this.setPosition(t, e),
        !o || this.isTransitioning ? (i = t - i,
        e -= n,
        (n = {}).transform = this.getTranslate(i, e),
        this.transition({
            to: n,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })) : this.layoutPosition()
    }
    ,
    t.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }
    ,
    t.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    t.moveTo = t._transitionTo,
    t.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    t._nonTransition = function(t) {
        for (var e in this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    t.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e, i = this._transn;
            for (e in t.onTransitionEnd)
                i.onEnd[e] = t.onTransitionEnd[e];
            for (e in t.to)
                i.ingProperties[e] = !0,
                t.isCleaning && (i.clean[e] = !0);
            t.from && (this.css(t.from),
            this.element.offsetHeight,
            0),
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        } else
            this._nonTransition(t)
    }
    ;
    var h = "opacity," + o.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase()
    });
    t.enableTransition = function() {
        var t;
        this.isTransitioning || (t = "number" == typeof (t = this.layout.options.transitionDuration) ? t + "ms" : t,
        this.css({
            transitionProperty: h,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0
        }),
        this.element.addEventListener(s, this, !1))
    }
    ,
    t.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    t.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var u = {
        "-webkit-transform": "transform"
    };
    t.ontransitionend = function(t) {
        var e, i;
        t.target === this.element && (e = this._transn,
        i = u[t.propertyName] || t.propertyName,
        delete e.ingProperties[i],
        function(t) {
            for (var e in t)
                return;
            return 1
        }(e.ingProperties) && this.disableTransition(),
        i in e.clean && (this.element.style[t.propertyName] = "",
        delete e.clean[i]),
        i in e.onEnd && (e.onEnd[i].call(this),
        delete e.onEnd[i]),
        this.emitEvent("transitionEnd", [this]))
    }
    ,
    t.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(s, this, !1),
        this.isTransitioning = !1
    }
    ,
    t._removeStyles = function(t) {
        var e, i = {};
        for (e in t)
            i[e] = "";
        this.css(i)
    }
    ;
    var l = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return t.removeTransitionStyles = function() {
        this.css(l)
    }
    ,
    t.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    t.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    t.remove = function() {
        n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        this.hide()) : this.removeElem()
    }
    ,
    t.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    t.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    t.getHideRevealTransitionEndProperty = function(t) {
        var e, t = this.layout.options[t];
        if (t.opacity)
            return "opacity";
        for (e in t)
            return e
    }
    ,
    t.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    t.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    t.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    a
}),
function(t, e) {
    "use strict";
    t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, o, n, s) {
    "use strict";
    function i() {}
    var r = t.console
      , a = t.jQuery
      , h = 0
      , u = {};
    function l(t, e) {
        var i = n.getQueryElement(t);
        i ? (this.element = i,
        a && (this.$element = a(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e),
        e = ++h,
        this.element.outlayerGUID = e,
        (u[e] = this)._create(),
        this._getOption("initLayout") && this.layout()) : r && r.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
    l.namespace = "outlayer",
    l.Item = s,
    l.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var d = l.prototype;
    function c(t) {
        function e() {
            t.apply(this, arguments)
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    n.extend(d, e.prototype),
    d.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    d._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    l.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    d._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }
    ,
    d.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    d._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var s = new i(e[o],this);
            n.push(s)
        }
        return n
    }
    ,
    d._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }
    ,
    d.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    d.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , t = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t),
        this._isLayoutInited = !0
    }
    ,
    d._init = d.layout,
    d._resetLayout = function() {
        this.getSize()
    }
    ,
    d.getSize = function() {
        this.size = o(this.element)
    }
    ,
    d._getMeasurement = function(t, e) {
        var i, n = this.options[t];
        n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n),
        this[t] = i ? o(i)[e] : n) : this[t] = 0
    }
    ,
    d.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    d._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    d._layoutItems = function(t, i) {
        var n;
        this._emitCompleteOnItems("layout", t),
        t && t.length && (n = [],
        t.forEach(function(t) {
            var e = this._getItemLayoutPosition(t);
            e.item = t,
            e.isInstant = i || t.isLayoutInstant,
            n.push(e)
        }, this),
        this._processLayoutQueue(n))
    }
    ,
    d._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    d._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    d.updateStagger = function() {
        var t = this.options.stagger;
        if (null != t)
            return this.stagger = function(t) {
                if ("number" == typeof t)
                    return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/)
                  , t = e && e[1]
                  , e = e && e[2];
                if (!t.length)
                    return 0;
                t = parseFloat(t);
                e = m[e] || 1;
                return t * e
            }(t),
            this.stagger;
        this.stagger = 0
    }
    ,
    d._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger),
        t.moveTo(e, i))
    }
    ,
    d._postLayout = function() {
        this.resizeContainer()
    }
    ,
    d.resizeContainer = function() {
        var t;
        !this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0),
        this._setContainerMeasure(t.height, !1))
    }
    ,
    d._getContainerSize = i,
    d._setContainerMeasure = function(t, e) {
        var i;
        void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
        t = Math.max(t, 0),
        this.element.style[e ? "width" : "height"] = t + "px")
    }
    ,
    d._emitCompleteOnItems = function(e, t) {
        var i = this;
        function n() {
            i.dispatchEvent(e + "Complete", null, [t])
        }
        var o, s = t.length;
        function r() {
            ++o == s && n()
        }
        t && s ? (o = 0,
        t.forEach(function(t) {
            t.once(e, r)
        })) : n()
    }
    ,
    d.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n),
        a && (this.$element = this.$element || a(this.element),
        e ? ((e = a.Event(e)).type = t,
        this.$element.trigger(e, i)) : this.$element.trigger(t, i))
    }
    ,
    d.ignore = function(t) {
        t = this.getItem(t);
        t && (t.isIgnored = !0)
    }
    ,
    d.unignore = function(t) {
        t = this.getItem(t);
        t && delete t.isIgnored
    }
    ,
    d.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    d.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    d._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = n.makeArray(t)
    }
    ,
    d._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    d._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    d._manageStamp = i,
    d._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , i = this._boundingRect
          , t = o(t);
        return {
            left: e.left - i.left - t.marginLeft,
            top: e.top - i.top - t.marginTop,
            right: i.right - e.right - t.marginRight,
            bottom: i.bottom - e.bottom - t.marginBottom
        }
    }
    ,
    d.handleEvent = n.handleEvent,
    d.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    d.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    d.onresize = function() {
        this.resize()
    }
    ,
    n.debounceMethod(l, "onresize", 100),
    d.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    d.needsResizeLayout = function() {
        var t = o(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }
    ,
    d.addItems = function(t) {
        t = this._itemize(t);
        return t.length && (this.items = this.items.concat(t)),
        t
    }
    ,
    d.appended = function(t) {
        t = this.addItems(t);
        t.length && (this.layoutItems(t, !0),
        this.reveal(t))
    }
    ,
    d.prepended = function(t) {
        var e = this._itemize(t);
        e.length && (t = this.items.slice(0),
        this.items = e.concat(t),
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(e, !0),
        this.reveal(e),
        this.layoutItems(t))
    }
    ,
    d.reveal = function(t) {
        var i;
        this._emitCompleteOnItems("reveal", t),
        t && t.length && (i = this.updateStagger(),
        t.forEach(function(t, e) {
            t.stagger(e * i),
            t.reveal()
        }))
    }
    ,
    d.hide = function(t) {
        var i;
        this._emitCompleteOnItems("hide", t),
        t && t.length && (i = this.updateStagger(),
        t.forEach(function(t, e) {
            t.stagger(e * i),
            t.hide()
        }))
    }
    ,
    d.revealItemElements = function(t) {
        t = this.getItems(t);
        this.reveal(t)
    }
    ,
    d.hideItemElements = function(t) {
        t = this.getItems(t);
        this.hide(t)
    }
    ,
    d.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    d.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            t = this.getItem(t);
            t && e.push(t)
        }, this),
        e
    }
    ,
    d.remove = function(t) {
        t = this.getItems(t);
        this._emitCompleteOnItems("remove", t),
        t && t.length && t.forEach(function(t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }, this)
    }
    ,
    d.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        t = this.element.outlayerGUID;
        delete u[t],
        delete this.element.outlayerGUID,
        a && a.removeData(this.element, this.constructor.namespace)
    }
    ,
    l.data = function(t) {
        t = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return t && u[t]
    }
    ,
    l.create = function(t, e) {
        var i = c(l);
        return i.defaults = n.extend({}, l.defaults),
        n.extend(i.defaults, e),
        i.compatOptions = n.extend({}, l.compatOptions),
        i.namespace = t,
        i.data = l.data,
        i.Item = c(s),
        n.htmlInit(i, t),
        a && a.bridget && a.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return l.Item = s,
    l
}),
function(t, e) {
    t.ModulaIsotope = t.ModulaIsotope || {},
    t.ModulaIsotope.Item = e(t.Outlayer)
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        n.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t, e = this.layout.options.getSortData, i = this.layout._sorters;
            for (t in e) {
                var n = i[t];
                this.sortData[t] = n(this.element, this)
            }
        }
    }
    ;
    var o = i.destroy;
    return i.destroy = function() {
        o.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    t.ModulaIsotope = t.ModulaIsotope || {},
    t.ModulaIsotope.LayoutMode = e(t.getSize, t.Outlayer)
}(window, function(e, i) {
    "use strict";
    function n(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = n.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
        o[t] = function() {
            return i.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , n = "outer" + e;
        this._getMeasurement(i, n),
        this[i] || (t = this.getFirstItemSize(),
        this[i] = t && t[n] || this.isotope.size["inner" + e])
    }
    ,
    o.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    n.modes = {},
    n.create = function(t, e) {
        function i() {
            n.apply(this, arguments)
        }
        return (i.prototype = Object.create(o)).constructor = i,
        e && (i.options = e),
        n.modes[i.prototype.namespace = t] = i
    }
    ,
    n
}),
function(t, e) {
    t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, a) {
    var e = t.create("masonry");
    e.compatOptions.fitWidth = "isFitWidth";
    t = e.prototype;
    return t._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    t.measureColumns = function() {
        this.getContainerWidth(),
        this.columnWidth || (i = (e = this.items[0]) && e.element,
        this.columnWidth = i && a(i).outerWidth || this.containerWidth);
        var t = this.columnWidth += this.gutter
          , e = this.containerWidth + this.gutter
          , i = e / t
          , t = t - e % t
          , i = Math[t && t < 1 ? "round" : "floor"](i);
        this.cols = Math.max(i, 1)
    }
    ,
    t.getContainerWidth = function() {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element
          , t = a(t);
        this.containerWidth = t && t.innerWidth
    }
    ,
    t._getItemLayoutPosition = function(t) {
        t.getSize();
        for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), i = Math.min(i, this.cols), n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), e = {
            x: this.columnWidth * n.col,
            y: n.y
        }, o = n.y + t.size.outerHeight, s = i + n.col, r = n.col; r < s; r++)
            this.colYs[r] = o;
        return e
    }
    ,
    t._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , t = Math.min.apply(Math, e);
        return {
            col: e.indexOf(t),
            y: t
        }
    }
    ,
    t._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
            e[n] = this._getColGroupY(n, t);
        return e
    }
    ,
    t._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        e = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, e)
    }
    ,
    t._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , i = 1 < t && i + t > this.cols ? 0 : i
          , e = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = e ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    t._manageStamp = function(t) {
        var e = a(t)
          , i = this._getElementOffset(t)
          , n = this._getOption("originLeft") ? i.left : i.right
          , t = n + e.outerWidth
          , n = Math.floor(n / this.columnWidth)
          , n = Math.max(0, n)
          , o = Math.floor(t / this.columnWidth);
        o -= t % this.columnWidth ? 0 : 1,
        o = Math.min(this.cols - 1, o);
        for (var s = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, r = n; r <= o; r++)
            this.colYs[r] = Math.max(s, this.colYs[r])
    }
    ,
    t._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    t._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    t.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    e
}),
function(t, e) {
    e(t.ModulaIsotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i, t = t.create("masonry"), n = t.prototype, o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (i in e.prototype)
        o[i] || (n[i] = e.prototype[i]);
    var s = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        s.call(this)
    }
    ;
    var r = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
    }
    ,
    t
}),
function() {
    "use strict";
    var t = window.ModulaIsotope.LayoutMode.create("fitRows");
    (t = t.prototype)._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    t._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        i = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        i
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
}(),
function() {
    "use strict";
    var t = window.ModulaIsotope.LayoutMode.create("vertical", {
        horizontalAlignment: 0
    });
    (t = t.prototype)._resetLayout = function() {
        this.y = 0
    }
    ,
    t._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.y
        }
    }
}(),
function(t, e) {
    t.ModulaIsotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.ModulaIsotope.Item, t.ModulaIsotope.LayoutMode)
}(window, function(t, i, e, n, s, o, r) {
    var a = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , u = i.create("modulaisotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    u.Item = o,
    u.LayoutMode = r;
    o = u.prototype;
    o._create = function() {
        for (var t in this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        i.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"],
        r.modes)
            this._initLayoutMode(t)
    }
    ,
    o.reloadItems = function() {
        this.itemGUID = 0,
        i.prototype.reloadItems.call(this)
    }
    ,
    o._itemize = function() {
        for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++)
            t[e].id = this.itemGUID++;
        return this._updateItemsSortData(t),
        t
    }
    ,
    o._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    o.layout = function() {
        this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange()
    }
    ,
    o._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    o.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        t = this._filter(this.items);
        this.filteredItems = t.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t),
        this._sort(),
        this._layout()
    }
    ,
    o._init = o.arrange,
    o._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    o._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , t = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = t
    }
    ,
    o._bindArrangeComplete = function() {
        var t, e, i, n = this;
        function o() {
            t && e && i && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        this.once("layoutComplete", function() {
            t = !0,
            o()
        }),
        this.once("hideComplete", function() {
            e = !0,
            o()
        }),
        this.once("revealComplete", function() {
            i = !0,
            o()
        })
    }
    ,
    o._filter = function(t) {
        for (var e = (e = this.options.filter) || "*", i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a, h = t[r];
            h.isIgnored || ((a = s(h)) && i.push(h),
            a && h.isHidden ? n.push(h) : a || h.isHidden || o.push(h))
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }
    ,
    o._getFilterTest = function(e) {
        return a && this.options.isJQueryFiltering ? function(t) {
            return a(t.element).is(e)
        }
        : "function" == typeof e ? function(t) {
            return e(t.element)
        }
        : function(t) {
            return n(t.element, e)
        }
    }
    ,
    o.updateSortData = function(t) {
        t = t ? (t = s.makeArray(t),
        this.getItems(t)) : this.items;
        this._getSorters(),
        this._updateItemsSortData(t)
    }
    ,
    o._getSorters = function() {
        var t, e = this.options.getSortData;
        for (t in e) {
            var i = e[t];
            this._sorters[t] = l(i)
        }
    }
    ,
    o._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++)
            t[i].updateSortData()
    }
    ;
    var l = function(t) {
        if ("string" != typeof t)
            return t;
        var e = h(t).split(" ")
          , i = e[0]
          , n = i.match(/^\[(.+)\]$/)
          , o = function(e, i) {
            if (e)
                return function(t) {
                    return t.getAttribute(e)
                }
                ;
            return function(t) {
                t = t.querySelector(i);
                return t && t.textContent
            }
        }(n && n[1], i)
          , s = u.sortDataParsers[e[1]];
        return t = s ? function(t) {
            return t && s(o(t))
        }
        : function(t) {
            return t && o(t)
        }
    };
    u.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    o._sort = function() {
        var t, r, a;
        this.options.sortBy && (t = s.makeArray(this.options.sortBy),
        this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)),
        r = this.sortHistory,
        a = this.options.sortAscending,
        t = function(t, e) {
            for (var i = 0; i < r.length; i++) {
                var n = r[i]
                  , o = t.sortData[n]
                  , s = e.sortData[n];
                if (s < o || o < s)
                    return (s < o ? 1 : -1) * ((void 0 !== a[n] ? a[n] : a) ? 1 : -1)
            }
            return 0
        }
        ,
        this.filteredItems.sort(t))
    }
    ,
    o._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    o._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    o._resetLayout = function() {
        i.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    o._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    o._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    o._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    o.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    o.appended = function(t) {
        t = this.addItems(t);
        t.length && (t = this._filterRevealAdded(t),
        this.filteredItems = this.filteredItems.concat(t))
    }
    ,
    o.prepended = function(t) {
        var e = this._itemize(t);
        e.length && (this._resetLayout(),
        this._manageStamps(),
        t = this._filterRevealAdded(e),
        this.layoutItems(this.filteredItems),
        this.filteredItems = t.concat(this.filteredItems),
        this.items = e.concat(this.items))
    }
    ,
    o._filterRevealAdded = function(t) {
        t = this._filter(t);
        return this.hide(t.needHide),
        this.reveal(t.matches),
        this.layoutItems(t.matches, !0),
        t.matches
    }
    ,
    o.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            for (var i, n = e.length, o = 0; o < n; o++)
                i = e[o],
                this.element.appendChild(i.element);
            t = this._filter(e).matches;
            for (o = 0; o < n; o++)
                e[o].isLayoutInstant = !0;
            for (this.arrange(),
            o = 0; o < n; o++)
                delete e[o].isLayoutInstant;
            this.reveal(t)
        }
    }
    ;
    var d = o.remove;
    return o.remove = function(t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        d.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var o = e[n];
            s.removeFrom(this.filteredItems, o)
        }
    }
    ,
    o.shuffle = function() {
        for (var t = 0; t < this.items.length; t++)
            this.items[t].sortData.random = Math.random();
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    o._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        e = t.apply(this, e);
        return this.options.transitionDuration = i,
        e
    }
    ,
    o.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    u
});
!function(t, i) {
    t.Packery = t.Packery || {},
    t.Packery.Rect = i()
}(window, function() {
    function a(t) {
        for (var i in a.defaults)
            this[i] = a.defaults[i];
        for (i in t)
            this[i] = t[i]
    }
    a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var t = a.prototype;
    return t.contains = function(t) {
        var i = t.width || 0
          , e = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + i && this.y + this.height >= t.y + e
    }
    ,
    t.overlaps = function(t) {
        var i = this.x + this.width
          , e = this.y + this.height
          , s = t.x + t.width
          , h = t.y + t.height;
        return this.x < s && i > t.x && this.y < h && e > t.y
    }
    ,
    t.getMaximalFreeRects = function(t) {
        if (!this.overlaps(t))
            return !1;
        var i, e = [], s = this.x + this.width, h = this.y + this.height, n = t.x + t.width, r = t.y + t.height;
        return this.y < t.y && (i = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: t.y - this.y
        }),
        e.push(i)),
        n < s && (i = new a({
            x: n,
            y: this.y,
            width: s - n,
            height: this.height
        }),
        e.push(i)),
        r < h && (i = new a({
            x: this.x,
            y: r,
            width: this.width,
            height: h - r
        }),
        e.push(i)),
        this.x < t.x && (i = new a({
            x: this.x,
            y: this.y,
            width: t.x - this.x,
            height: this.height
        }),
        e.push(i)),
        e
    }
    ,
    t.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height
    }
    ,
    a
}),
function(t, i) {
    (t = t.Packery = t.Packery || {}).Packer = i(t.Rect)
}(window, function(i) {
    function t(t, i, e) {
        this.width = t || 0,
        this.height = i || 0,
        this.sortDirection = e || "downwardLeftToRight",
        this.reset()
    }
    var e = t.prototype;
    e.reset = function() {
        this.spaces = [];
        var t = new i({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(t),
        this.sorter = s[this.sortDirection] || s.downwardLeftToRight
    }
    ,
    e.pack = function(t) {
        for (var i = 0; i < this.spaces.length; i++) {
            var e = this.spaces[i];
            if (e.canFit(t)) {
                this.placeInSpace(t, e);
                break
            }
        }
    }
    ,
    e.columnPack = function(t) {
        for (var i = 0; i < this.spaces.length; i++) {
            var e = this.spaces[i];
            if (e.x <= t.x && e.x + e.width >= t.x + t.width && e.height >= t.height - .01) {
                t.y = e.y,
                this.placed(t);
                break
            }
        }
    }
    ,
    e.rowPack = function(t) {
        for (var i = 0; i < this.spaces.length; i++) {
            var e = this.spaces[i];
            if (e.y <= t.y && e.y + e.height >= t.y + t.height && e.width >= t.width - .01) {
                t.x = e.x,
                this.placed(t);
                break
            }
        }
    }
    ,
    e.placeInSpace = function(t, i) {
        t.x = i.x,
        t.y = i.y,
        this.placed(t)
    }
    ,
    e.placed = function(t) {
        for (var i = [], e = 0; e < this.spaces.length; e++) {
            var s = this.spaces[e]
              , h = s.getMaximalFreeRects(t);
            h ? i.push.apply(i, h) : i.push(s)
        }
        this.spaces = i,
        this.mergeSortSpaces()
    }
    ,
    e.mergeSortSpaces = function() {
        t.mergeRects(this.spaces),
        this.spaces.sort(this.sorter)
    }
    ,
    e.addSpace = function(t) {
        this.spaces.push(t),
        this.mergeSortSpaces()
    }
    ,
    t.mergeRects = function(t) {
        var i = 0
          , e = t[i];
        t: for (; e; ) {
            for (var s = 0, h = t[i + s]; h; ) {
                if (h == e)
                    s++;
                else {
                    if (h.contains(e)) {
                        t.splice(i, 1),
                        e = t[i];
                        continue t
                    }
                    e.contains(h) ? t.splice(i + s, 1) : s++
                }
                h = t[i + s]
            }
            e = t[++i]
        }
        return t
    }
    ;
    var s = {
        downwardLeftToRight: function(t, i) {
            return t.y - i.y || t.x - i.x
        },
        rightwardTopToBottom: function(t, i) {
            return t.x - i.x || t.y - i.y
        }
    };
    return t
}),
function(t, i) {
    t.Packery.Item = i(t.Outlayer, t.Packery.Rect)
}(window, function(t, i) {
    function e() {
        t.Item.apply(this, arguments)
    }
    var s = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform"
      , h = e.prototype = Object.create(t.Item.prototype)
      , n = h._create;
    h._create = function() {
        n.call(this),
        this.rect = new i
    }
    ;
    var r = h.moveTo;
    return h.moveTo = function(t, i) {
        var e = Math.abs(this.position.x - t)
          , s = Math.abs(this.position.y - i);
        this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && e < 1 && s < 1 ? this.goTo(t, i) : r.apply(this, arguments)
    }
    ,
    h.enablePlacing = function() {
        this.removeTransitionStyles(),
        this.isTransitioning && s && (this.element.style[s] = "none"),
        this.isTransitioning = !1,
        this.getSize(),
        this.layout._setRectSize(this.element, this.rect),
        this.isPlacing = !0
    }
    ,
    h.disablePlacing = function() {
        this.isPlacing = !1
    }
    ,
    h.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.layout.packer.addSpace(this.rect),
        this.emitEvent("remove", [this])
    }
    ,
    h.showDropPlaceholder = function() {
        var t = this.dropPlaceholder;
        t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder",
        t.style.position = "absolute"),
        t.style.width = this.size.width + "px",
        t.style.height = this.size.height + "px",
        this.positionDropPlaceholder(),
        this.layout.element.appendChild(t)
    }
    ,
    h.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[s] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }
    ,
    h.hideDropPlaceholder = function() {
        this.layout.element.removeChild(this.dropPlaceholder)
    }
    ,
    e
}),
function(t, i) {
    t.Packery = i(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}(window, function(c, t, r, i, e) {
    r.prototype.canFit = function(t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1
    }
    ;
    var s = t.create("packery");
    s.Item = e;
    e = s.prototype;
    function h(t, i) {
        return t.position.y - i.position.y || t.position.x - i.position.x
    }
    function n(t, i) {
        return t.position.x - i.position.x || t.position.y - i.position.y
    }
    e._create = function() {
        t.prototype._create.call(this),
        this.packer = new i,
        this.shiftPacker = new i,
        this.isEnabled = !0,
        this.dragItemCount = 0;
        var e = this;
        this.handleDraggabilly = {
            dragStart: function() {
                e.itemDragStart(this.element)
            },
            dragMove: function() {
                e.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                e.itemDragEnd(this.element)
            }
        },
        this.handleUIDraggable = {
            start: function(t, i) {
                i && e.itemDragStart(t.currentTarget)
            },
            drag: function(t, i) {
                i && e.itemDragMove(t.currentTarget, i.position.left, i.position.top)
            },
            stop: function(t, i) {
                i && e.itemDragEnd(t.currentTarget)
            }
        }
    }
    ,
    e._resetLayout = function() {
        var t, i, e;
        this.getSize(),
        this._getMeasurements(),
        e = this._getOption("horizontal") ? (t = 1 / 0,
        i = this.size.innerHeight + this.gutter,
        "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter,
        i = 1 / 0,
        "downwardLeftToRight"),
        this.packer.width = this.shiftPacker.width = t,
        this.packer.height = this.shiftPacker.height = i,
        this.packer.sortDirection = this.shiftPacker.sortDirection = e,
        this.packer.reset(),
        this.maxY = 0,
        this.maxX = 0
    }
    ,
    e._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"),
        this._getMeasurement("rowHeight", "height"),
        this._getMeasurement("gutter", "width")
    }
    ,
    e._getItemLayoutPosition = function(t) {
        var i;
        return this._setRectSize(t.element, t.rect),
        this.isShifting || 0 < this.dragItemCount ? (i = this._getPackMethod(),
        this.packer[i](t.rect)) : this.packer.pack(t.rect),
        this._setMaxXY(t.rect),
        t.rect
    }
    ,
    e.shiftLayout = function() {
        this.isShifting = !0,
        this.layout(),
        delete this.isShifting
    }
    ,
    e._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }
    ,
    e._setMaxXY = function(t) {
        this.maxX = Math.max(t.x + t.width, this.maxX),
        this.maxY = Math.max(t.y + t.height, this.maxY)
    }
    ,
    e._setRectSize = function(t, i) {
        var e = c(t)
          , t = e.outerWidth
          , e = e.outerHeight;
        (t || e) && (t = this._applyGridGutter(t, this.columnWidth),
        e = this._applyGridGutter(e, this.rowHeight)),
        i.width = Math.min(t, this.packer.width),
        i.height = Math.min(e, this.packer.height)
    }
    ,
    e._applyGridGutter = function(t, i) {
        if (!i)
            return t + this.gutter;
        var e = t % (i += this.gutter);
        return t = Math[e && e < 1 ? "round" : "ceil"](t / i) * i
    }
    ,
    e._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }
    ,
    e._manageStamp = function(t) {
        var i, e = this.getItem(t);
        i = e && e.isPlacing ? e.rect : (i = this._getElementOffset(t),
        new r({
            x: this._getOption("originLeft") ? i.left : i.right,
            y: this._getOption("originTop") ? i.top : i.bottom
        })),
        this._setRectSize(t, i),
        this.packer.placed(i),
        this._setMaxXY(i)
    }
    ,
    e.sortItemsByPosition = function() {
        var t = this._getOption("horizontal") ? n : h;
        this.items.sort(t)
    }
    ,
    e.fit = function(t, i, e) {
        t = this.getItem(t);
        t && (this.stamp(t.element),
        t.enablePlacing(),
        this.updateShiftTargets(t),
        i = void 0 === i ? t.rect.x : i,
        e = void 0 === e ? t.rect.y : e,
        this.shift(t, i, e),
        this._bindFitEvents(t),
        t.moveTo(t.rect.x, t.rect.y),
        this.shiftLayout(),
        this.unstamp(t.element),
        this.sortItemsByPosition(),
        t.disablePlacing())
    }
    ,
    e._bindFitEvents = function(t) {
        var i = this
          , e = 0;
        function s() {
            2 == ++e && i.dispatchEvent("fitComplete", null, [t])
        }
        t.once("layout", s),
        this.once("layoutComplete", s)
    }
    ,
    e.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }
    ,
    e.needsResizeLayout = function() {
        var t = c(this.element)
          , i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return t[i] != this.size[i]
    }
    ,
    e.resizeShiftPercentLayout = function() {
        var e, i, s, t = this._getItemsForLayout(this.items), h = this._getOption("horizontal"), n = h ? "y" : "x", r = h ? "height" : "width", a = h ? "rowHeight" : "columnWidth", h = h ? "innerHeight" : "innerWidth", o = this[a];
        (o = o && o + this.gutter) ? (this._getMeasurements(),
        e = this[a] + this.gutter,
        t.forEach(function(t) {
            var i = Math.round(t.rect[n] / o);
            t.rect[n] = i * e
        })) : (i = c(this.element)[h] + this.gutter,
        s = this.packer[r],
        t.forEach(function(t) {
            t.rect[n] = t.rect[n] / s * i
        })),
        this.shiftLayout()
    }
    ,
    e.itemDragStart = function(t) {
        this.isEnabled && (this.stamp(t),
        (t = this.getItem(t)) && (t.enablePlacing(),
        t.showDropPlaceholder(),
        this.dragItemCount++,
        this.updateShiftTargets(t)))
    }
    ,
    e.updateShiftTargets = function(t) {
        this.shiftPacker.reset(),
        this._getBoundingRect();
        var e = this._getOption("originLeft")
          , s = this._getOption("originTop");
        this.stamps.forEach(function(t) {
            var i = this.getItem(t);
            i && i.isPlacing || (i = this._getElementOffset(t),
            i = new r({
                x: e ? i.left : i.right,
                y: s ? i.top : i.bottom
            }),
            this._setRectSize(t, i),
            this.shiftPacker.placed(i))
        }, this);
        var o = this._getOption("horizontal")
          , i = o ? "rowHeight" : "columnWidth"
          , c = o ? "height" : "width";
        this.shiftTargetKeys = [],
        this.shiftTargets = [];
        var g = this[i];
        if (g = g && g + this.gutter)
            for (var i = Math.ceil(t.rect[c] / g), h = Math.floor((this.shiftPacker[c] + this.gutter) / g), u = (h - i) * g, n = 0; n < h; n++)
                this._addShiftTarget(n * g, 0, u);
        else
            u = this.shiftPacker[c] + this.gutter - t.rect[c],
            this._addShiftTarget(0, 0, u);
        var t = this._getItemsForLayout(this.items)
          , d = this._getPackMethod();
        t.forEach(function(t) {
            var i = t.rect;
            this._setRectSize(t.element, i),
            this.shiftPacker[d](i),
            this._addShiftTarget(i.x, i.y, u);
            var e = o ? i.x + i.width : i.x
              , s = o ? i.y : i.y + i.height;
            if (this._addShiftTarget(e, s, u),
            g)
                for (var h = Math.round(i[c] / g), n = 1; n < h; n++) {
                    var r = o ? e : i.x + g * n
                      , a = o ? i.y + g * n : s;
                    this._addShiftTarget(r, a, u)
                }
        }, this)
    }
    ,
    e._addShiftTarget = function(t, i, e) {
        var s = this._getOption("horizontal") ? i : t;
        0 !== s && e < s || (s = t + "," + i,
        -1 != this.shiftTargetKeys.indexOf(s) || (this.shiftTargetKeys.push(s),
        this.shiftTargets.push({
            x: t,
            y: i
        })))
    }
    ,
    e.shift = function(t, i, e) {
        var h, n = 1 / 0, r = {
            x: i,
            y: e
        };
        this.shiftTargets.forEach(function(t) {
            var i, e, s, i = (s = (e = r).x - (i = t).x,
            i = e.y - i.y,
            Math.sqrt(s * s + i * i));
            i < n && (h = t,
            n = i)
        }),
        t.rect.x = h.x,
        t.rect.y = h.y
    }
    ;
    e.itemDragMove = function(t, i, e) {
        var s, h = this.isEnabled && this.getItem(t);
        function n() {
            s.shift(h, i, e),
            h.positionDropPlaceholder(),
            s.layout()
        }
        h && (i -= this.size.paddingLeft,
        e -= this.size.paddingTop,
        s = this,
        t = new Date,
        this._itemDragTime && t - this._itemDragTime < 120 ? (clearTimeout(this.dragTimeout),
        this.dragTimeout = setTimeout(n, 120)) : (n(),
        this._itemDragTime = t))
    }
    ,
    e.itemDragEnd = function(t) {
        var i, e, s = this.isEnabled && this.getItem(t);
        function h() {
            2 == ++i && (s.element.classList.remove("is-positioning-post-drag"),
            s.hideDropPlaceholder(),
            e.dispatchEvent("dragItemPositioned", null, [s]))
        }
        s && (clearTimeout(this.dragTimeout),
        s.element.classList.add("is-positioning-post-drag"),
        i = 0,
        e = this,
        s.once("layout", h),
        this.once("layoutComplete", h),
        s.moveTo(s.rect.x, s.rect.y),
        this.layout(),
        this.dragItemCount = Math.max(0, this.dragItemCount - 1),
        this.sortItemsByPosition(),
        s.disablePlacing(),
        this.unstamp(s.element))
    }
    ,
    e.bindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "on")
    }
    ,
    e.unbindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "off")
    }
    ,
    e._bindDraggabillyEvents = function(t, i) {
        var e = this.handleDraggabilly;
        t[i]("dragStart", e.dragStart),
        t[i]("dragMove", e.dragMove),
        t[i]("dragEnd", e.dragEnd)
    }
    ,
    e.bindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "on")
    }
    ,
    e.unbindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "off")
    }
    ,
    e._bindUIDraggableEvents = function(t, i) {
        var e = this.handleUIDraggable;
        t[i]("dragstart", e.start)[i]("drag", e.drag)[i]("dragstop", e.stop)
    }
    ;
    var a = e.destroy;
    return e.destroy = function() {
        a.apply(this, arguments),
        this.isEnabled = !1
    }
    ,
    s.Rect = r,
    s.Packer = i,
    s
}),
function(t, i) {
    i(t.ModulaIsotope.LayoutMode, t.Packery)
}(window, function(t, i) {
    var e, t = t.create("packery"), s = t.prototype, h = {
        _getElementOffset: !0,
        _getMeasurement: !0
    };
    for (e in i.prototype)
        h[e] || (s[e] = i.prototype[e]);
    var n = s._resetLayout;
    s._resetLayout = function() {
        this.packer = this.packer || new i.Packer,
        this.shiftPacker = this.shiftPacker || new i.Packer,
        n.apply(this, arguments)
    }
    ;
    var r = s._getItemLayoutPosition;
    s._getItemLayoutPosition = function(t) {
        return t.rect = t.rect || new i.Rect,
        r.call(this, t)
    }
    ;
    var a = s.needsResizeLayout;
    s.needsResizeLayout = function() {
        return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : a.call(this)
    }
    ;
    var o = s._getOption;
    return s._getOption = function(t) {
        return "horizontal" == t ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : o.apply(this.isotope, arguments)
    }
    ,
    t
});
!function(l, s, f, m) {
    "use strict";
    var a, i, r, d, e, c, p, u, n, t, o, h, g;
    function b(t, e) {
        var o, n, a, i = [], s = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(),
        e = e || {},
        t && t.data && (e = u(t.data.options, e)),
        o = e.$target || f(t.currentTarget).trigger("blur"),
        (a = f.modulaFancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (i = e.selector ? f(e.selector) : (n = o.attr("data-fancybox") || "") ? (i = t.data ? t.data.items : []).length ? i.filter('[data-fancybox="' + n + '"]') : f('[data-fancybox="' + n + '"]') : [o],
        (s = f(i).index(o)) < 0 && (s = 0),
        (a = f.modulaFancybox.open(i, e, s)).$trigger = o))
    }
    l.console = l.console || {
        info: function(t) {}
    },
    f && (f.fn.modulaFancybox ? console.info("fancyBox already initialized") : (t = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {
            preload: !1
        },
        ajax: {
            settings: {
                data: {
                    fancybox: !0
                }
            }
        },
        iframe: {
            tpl: '<iframe id="modula-fancybox-frame{rnd}" name="modula-fancybox-frame{rnd}" class="modula-fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: {
                scrolling: "auto"
            }
        },
        video: {
            tpl: '<video class="modula-fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="modula-fancybox-container" role="dialog" tabindex="-1"><div class="modula-fancybox-bg"></div><div class="modula-fancybox-inner"><div class="modula-fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="modula-fancybox-toolbar">{{buttons}}</div><div class="modula-fancybox-navigation">{{arrows}}</div><div class="modula-fancybox-stage"></div><div class="modula-fancybox-caption"><div class="modula-fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="modula-fancybox-loading"></div>',
        errorTpl: '<div class="modula-fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
            download: '<a download data-fancybox-download class="modula-fancybox-button modula-fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="modula-fancybox-button modula-fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close: '<button data-fancybox-close class="modula-fancybox-button modula-fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft: '<button data-fancybox-prev class="modula-fancybox-button modula-fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight: '<button data-fancybox-next class="modula-fancybox-button modula-fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn: '<button type="button" data-fancybox-close class="modula-fancybox-button modula-fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
        },
        modulaShare: ["facebook", "twitter", "pinterest", "whatsapp", "linkedin", "email"],
        shareBtnTpl: {
            facebook: '<a class="modula-fancybox-share__button modula-fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{modulaShareUrl}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a>',
            twitter: '<a class="modula-fancybox-share__button modula-fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{modulaShareUrl}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a>',
            pinterest: '<a class="modula-fancybox-share__button modula-fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{modulaShareUrl}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a>',
            whatsapp: '<a class="modula-fancybox-share__button modula-fancybox-share__button--wa" href="https://api.whatsapp.com/send?text={{modulaShareUrl}}&review_url=true"><svg aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1600"><path d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104zm0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26z" fill="currentColor"/></svg><span>WhatsApp</span></a>',
            linkedin: '<a class="modula-fancybox-share__button modula-fancybox-share__button--li" href="//linkedin.com/shareArticle?mini=true&url={{modulaShareUrl}}"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><span>LinkedIn</span></a>',
            email: '<a class="modula-fancybox-share__button modula-fancybox-share__button--email" href="mailto:?subject={{subject}}&body={{emailMessage}}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" fill="currentColor"></path></svg><span>Email</span></a>'
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
            autoStart: !1
        },
        touch: {
            vertical: !0,
            momentum: !0
        },
        hash: null,
        media: {},
        slideShow: {
            autoStart: !1,
            speed: 3e3
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".modula-fancybox-container",
            axis: "y"
        },
        wheel: "auto",
        onInit: f.noop,
        beforeLoad: f.noop,
        afterLoad: f.noop,
        beforeShow: f.noop,
        afterShow: f.noop,
        beforeClose: f.noop,
        afterClose: f.noop,
        onActivate: f.noop,
        onDeactivate: f.noop,
        clickContent: function(t, e) {
            return "image" === t.type && "zoom"
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function(t, e) {
                return "image" === t.type && "toggleControls"
            },
            clickSlide: function(t, e) {
                return "image" === t.type ? "toggleControls" : "close"
            },
            dblclickContent: function(t, e) {
                return "image" === t.type && "zoom"
            },
            dblclickSlide: function(t, e) {
                return "image" === t.type && "zoom"
            }
        },
        lang: "en",
        i18n: {
            en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom"
            },
            de: {
                CLOSE: "Schlie&szlig;en",
                NEXT: "Weiter",
                PREV: "Zur&uuml;ck",
                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Vergr&ouml;&szlig;ern"
            }
        }
    },
    a = f(l),
    i = f(s),
    r = 0,
    d = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function(t) {
        return l.setTimeout(t, 1e3 / 60)
    }
    ,
    e = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function(t) {
        l.clearTimeout(t)
    }
    ,
    c = function() {
        var t, e = s.createElement("fakeelement"), o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (t in o)
            if (e.style[t] !== m)
                return o[t];
        return "transitionend"
    }(),
    p = function(t) {
        return t && t.length && t[0].offsetHeight
    }
    ,
    u = function(t, e) {
        var o = f.extend(!0, {}, t, e);
        return f.each(e, function(t, e) {
            f.isArray(e) && (o[t] = e)
        }),
        o
    }
    ,
    n = function(t, e, o) {
        var n = this;
        n.opts = u({
            index: o
        }, f.modulaFancybox.defaults),
        f.isPlainObject(e) && (n.opts = u(n.opts, e)),
        f.modulaFancybox.isMobile && (n.opts = u(n.opts, n.opts.mobile)),
        n.id = n.opts.id || ++r,
        n.currIndex = parseInt(n.opts.index, 10) || 0,
        n.prevIndex = null,
        n.prevPos = null,
        n.currPos = 0,
        n.firstRun = !0,
        n.group = [],
        n.slides = {},
        n.addContent(t),
        n.group.length && n.init()
    }
    ,
    f.extend(n.prototype, {
        init: function() {
            var o = this;
            o.currIndex < 0 && (o.currIndex = 0),
            void 0 === o.group[o.currIndex] && jQuery.each(this.group, function(t, e) {
                o.currIndex == parseInt(e.opts.image_id) && (o.currIndex = t)
            });
            var e, n, a = o.group[o.currIndex].opts;
            a.closeExisting && f.modulaFancybox.close(!0),
            f("body").addClass("modula-fancybox-active"),
            !f.modulaFancybox.getInstance() && !1 !== a.hideScrollbar && !f.modulaFancybox.isMobile && s.body.scrollHeight > l.innerHeight && (f("head").append('<style id="modula-fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - s.documentElement.clientWidth) + "px;}</style>"),
            f("body").addClass("compensate-for-scrollbar")),
            n = "",
            f.each(a.buttons, function(t, e) {
                n += a.btnTpl[e] || ""
            }),
            e = f(o.translate(o, a.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "modula-fancybox-container-" + o.id).addClass(a.baseClass).data("modulaFancyBox", o).appendTo(a.parentEl),
            o.$refs = {
                container: e
            },
            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                o.$refs[t] = e.find(".modula-fancybox-" + t)
            }),
            o.trigger("onInit"),
            o.activate(),
            o.jumpTo(o.currIndex)
        },
        translate: function(t, e) {
            var o = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
            return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                return o[e] === m ? t : o[e]
            })
        },
        addContent: function(t) {
            var r = this
              , t = f.makeArray(t);
            f.each(t, function(t, e) {
                var o, n, a, i = {}, s = {};
                f.isPlainObject(e) ? s = (i = e).opts || e : "object" === f.type(e) && f(e).length ? (s = (n = f(e)).data() || {},
                (s = f.extend(!0, {}, s, s.options)).$orig = n,
                i.src = r.opts.src || s.src || n.attr("href"),
                i.type || i.src || (i.type = "inline",
                i.src = e)) : i = {
                    type: "html",
                    src: e + ""
                },
                i.opts = f.extend(!0, {}, r.opts, s),
                f.isArray(s.buttons) && (i.opts.buttons = s.buttons),
                f.modulaFancybox.isMobile && i.opts.mobile && (i.opts = u(i.opts, i.opts.mobile)),
                o = i.type || i.opts.type,
                n = i.src || "",
                !o && n && ((s = n.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video",
                i.opts.video.format || (i.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : n.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : n.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe",
                i = f.extend(!0, i, {
                    contentType: "pdf",
                    opts: {
                        iframe: {
                            preload: !1
                        }
                    }
                })) : "#" === n.charAt(0) && (o = "inline")),
                o ? i.type = o : r.trigger("objectNeedsType", i),
                i.contentType || (i.contentType = -1 < f.inArray(i.type, ["html", "inline", "ajax"]) ? "html" : i.type),
                i.index = r.group.length,
                "auto" == i.opts.smallBtn && (i.opts.smallBtn = -1 < f.inArray(i.type, ["html", "inline", "ajax"])),
                "auto" === i.opts.toolbar && (i.opts.toolbar = !i.opts.smallBtn),
                i.$thumb = i.opts.$thumb || null,
                i.opts.$trigger && i.index === r.opts.index && (i.$thumb = i.opts.$trigger.find("img:first"),
                i.$thumb.length && (i.opts.$orig = i.opts.$trigger)),
                i.$thumb && i.$thumb.length || !i.opts.$orig || (i.$thumb = i.opts.$orig.find("img:first")),
                i.$thumb && !i.$thumb.length && (i.$thumb = null),
                i.thumb = i.opts.thumb || (i.$thumb ? i.$thumb[0].src : null),
                "function" === f.type(i.opts.caption) && (i.opts.caption = i.opts.caption.apply(e, [r, i])),
                "function" === f.type(r.opts.caption) && (i.opts.caption = r.opts.caption.apply(e, [r, i])),
                i.opts.caption instanceof f || (i.opts.caption = i.opts.caption === m ? "" : i.opts.caption + ""),
                "ajax" === i.type && 1 < (a = n.split(/\s+/, 2)).length && (i.src = a.shift(),
                i.opts.filter = a.shift()),
                i.opts.modal && (i.opts = f.extend(!0, i.opts, {
                    trapFocus: !0,
                    infobar: 0,
                    toolbar: 0,
                    smallBtn: 0,
                    keyboard: 0,
                    slideShow: 0,
                    fullScreen: 0,
                    thumbs: 0,
                    touch: 0,
                    clickContent: !1,
                    clickSlide: !1,
                    clickOutside: !1,
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1
                })),
                r.group.push(i)
            }),
            Object.keys(r.slides).length && (r.updateControls(),
            (t = r.Thumbs) && t.isActive && (t.create(),
            t.focus()))
        },
        addEvents: function() {
            var n = this;
            n.removeEvents(),
            n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                n.close(t)
            }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                n.previous()
            }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                n.next()
            }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                n[n.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
            }),
            a.on("orientationchange.fb resize.fb", function(t) {
                t && t.originalEvent && "resize" === t.originalEvent.type ? (n.requestId && e(n.requestId),
                n.requestId = d(function() {
                    n.update(t)
                })) : (n.current && "iframe" === n.current.type && n.$refs.stage.hide(),
                setTimeout(function() {
                    n.$refs.stage.show(),
                    n.update(t)
                }, f.modulaFancybox.isMobile ? 600 : 250))
            }),
            i.on("keydown.fb", function(t) {
                var e = (f.modulaFancybox ? f.modulaFancybox.getInstance() : null).current
                  , o = t.keyCode || t.which;
                if (9 != o) {
                    if (!(!e.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || f(t.target).is("input,textarea,video,audio,select")))
                        return 8 === o || 27 === o ? (t.preventDefault(),
                        void n.close(t)) : 37 === o || 38 === o ? (t.preventDefault(),
                        void n.previous()) : 39 === o || 40 === o ? (t.preventDefault(),
                        void n.next()) : void n.trigger("afterKeydown", t, o)
                } else
                    e.opts.trapFocus && n.focus(t)
            }),
            n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0,
            i.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                n.idleSecondsCounter = 0,
                n.isIdle && n.showControls(),
                n.isIdle = !1
            }),
            n.idleInterval = l.setInterval(function() {
                n.idleSecondsCounter++,
                n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && !n.isDragging && (n.isIdle = !0,
                n.idleSecondsCounter = 0,
                n.hideControls())
            }, 1e3))
        },
        removeEvents: function() {
            a.off("orientationchange.fb resize.fb"),
            i.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            this.idleInterval && (l.clearInterval(this.idleInterval),
            this.idleInterval = null)
        },
        previous: function(t) {
            return this.jumpTo(this.currPos - 1, t)
        },
        next: function(t) {
            return this.jumpTo(this.currPos + 1, t)
        },
        jumpTo: function(t, n) {
            var e, o, a, i, s, r, l, c, d = this, u = d.group.length;
            if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun))
                return t = parseInt(t, 10),
                !(!(o = (d.current || d).opts.loop) && (t < 0 || u <= t)) && (e = d.firstRun = !Object.keys(d.slides).length,
                i = d.current,
                d.prevIndex = d.currIndex,
                d.prevPos = d.currPos,
                a = d.createSlide(t),
                1 < u && ((o || a.index < u - 1) && d.createSlide(t + 1),
                (o || 0 < a.index) && d.createSlide(t - 1)),
                d.current = a,
                d.currIndex = a.index,
                d.currPos = a.pos,
                d.trigger("beforeShow", e),
                d.updateControls(),
                a.forcedDuration = m,
                f.isNumeric(n) ? a.forcedDuration = n : n = a.opts[e ? "animationDuration" : "transitionDuration"],
                n = parseInt(n, 10),
                t = d.isMoved(a),
                a.$slide.addClass("modula-fancybox-slide--current"),
                e ? (a.opts.animationEffect && n && d.$refs.container.css("transition-duration", n + "ms"),
                d.$refs.container.addClass("modula-fancybox-is-open").trigger("focus"),
                d.loadSlide(a)) : (s = f.modulaFancybox.getTranslate(i.$slide),
                r = f.modulaFancybox.getTranslate(d.$refs.stage),
                f.each(d.slides, function(t, e) {
                    f.modulaFancybox.stop(e.$slide, !0)
                }),
                i.pos !== a.pos && (i.isComplete = !1),
                i.$slide.removeClass("modula-fancybox-slide--complete modula-fancybox-slide--current"),
                t ? (c = s.left - (i.pos * s.width + i.pos * i.opts.gutter),
                f.each(d.slides, function(t, e) {
                    e.$slide.removeClass("modula-fancybox-animated").removeClass(function(t, e) {
                        return (e.match(/(^|\s)modula-fancybox-fx-\S+/g) || []).join(" ")
                    });
                    var o = e.pos * s.width + e.pos * e.opts.gutter;
                    f.modulaFancybox.setTranslate(e.$slide, {
                        top: 0,
                        left: o - r.left + c
                    }),
                    e.pos !== a.pos && e.$slide.addClass("modula-fancybox-slide--" + (e.pos > a.pos ? "next" : "previous")),
                    p(e.$slide),
                    f.modulaFancybox.animate(e.$slide, {
                        top: 0,
                        left: (e.pos - a.pos) * s.width + (e.pos - a.pos) * e.opts.gutter
                    }, n, function() {
                        e.$slide.css({
                            transform: "",
                            opacity: ""
                        }).removeClass("modula-fancybox-slide--next modula-fancybox-slide--previous"),
                        e.pos === d.currPos && d.complete()
                    })
                })) : n && a.opts.transitionEffect && (l = "modula-fancybox-animated modula-fancybox-fx-" + a.opts.transitionEffect,
                i.$slide.addClass("modula-fancybox-slide--" + (i.pos > a.pos ? "next" : "previous")),
                f.modulaFancybox.animate(i.$slide, l, n, function() {
                    i.$slide.removeClass(l).removeClass("modula-fancybox-slide--next modula-fancybox-slide--previous")
                }, !1)),
                a.isLoaded ? d.revealContent(a) : d.loadSlide(a)),
                void d.preload("image"))
        },
        createSlide: function(t) {
            var e, o = this, n = t % o.group.length;
            return n = n < 0 ? o.group.length + n : n,
            !o.slides[t] && o.group[n] && (e = f('<div class="modula-fancybox-slide"></div>').appendTo(o.$refs.stage),
            o.slides[t] = f.extend(!0, {}, o.group[n], {
                pos: t,
                $slide: e,
                isLoaded: !1
            }),
            o.updateSlide(o.slides[t])),
            o.slides[t]
        },
        scaleToActual: function(t, e, o) {
            var n, a, i, s, r = this, l = r.current, c = l.$content, d = f.modulaFancybox.getTranslate(l.$slide).width, u = f.modulaFancybox.getTranslate(l.$slide).height, p = l.width, h = l.height;
            r.isAnimating || r.isMoved() || !c || "image" != l.type || !l.isLoaded || l.hasError || (r.isAnimating = !0,
            f.modulaFancybox.stop(c),
            t = t === m ? .5 * d : t,
            e = e === m ? .5 * u : e,
            (n = f.modulaFancybox.getTranslate(c)).top -= f.modulaFancybox.getTranslate(l.$slide).top,
            n.left -= f.modulaFancybox.getTranslate(l.$slide).left,
            i = p / n.width,
            s = h / n.height,
            a = .5 * d - .5 * p,
            l = .5 * u - .5 * h,
            d < p && (0 < (a = n.left * i - (t * i - t)) && (a = 0),
            a < d - p && (a = d - p)),
            u < h && (0 < (l = n.top * s - (e * s - e)) && (l = 0),
            l < u - h && (l = u - h)),
            r.updateCursor(p, h),
            f.modulaFancybox.animate(c, {
                top: l,
                left: a,
                scaleX: i,
                scaleY: s
            }, o || 366, function() {
                r.isAnimating = !1
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop())
        },
        scaleToFit: function(t) {
            var e = this
              , o = e.current
              , n = o.$content;
            e.isAnimating || e.isMoved() || !n || "image" != o.type || !o.isLoaded || o.hasError || (e.isAnimating = !0,
            f.modulaFancybox.stop(n),
            o = e.getFitPos(o),
            e.updateCursor(o.width, o.height),
            f.modulaFancybox.animate(n, {
                top: o.top,
                left: o.left,
                scaleX: o.width / n.width(),
                scaleY: o.height / n.height()
            }, t || 366, function() {
                e.isAnimating = !1
            }))
        },
        getFitPos: function(t) {
            var e, o, n = t.$content, a = t.$slide, i = t.width || t.opts.width, s = t.height || t.opts.height, r = {};
            return !!(t.isLoaded && n && n.length) && (e = f.modulaFancybox.getTranslate(this.$refs.stage).width,
            o = f.modulaFancybox.getTranslate(this.$refs.stage).height,
            e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(n.css("marginLeft")) + parseFloat(n.css("marginRight")),
            o -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(n.css("marginTop")) + parseFloat(n.css("marginBottom")),
            i && s || (i = e,
            s = o),
            e - .5 < (i *= n = Math.min(1, e / i, o / s)) && (i = e),
            o - .5 < (s *= n) && (s = o),
            "image" === t.type ? (r.top = Math.floor(.5 * (o - s)) + parseFloat(a.css("paddingTop")),
            r.left = Math.floor(.5 * (e - i)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (i / (t = t.opts.width && t.opts.height ? i / s : t.opts.ratio || 16 / 9) < s ? s = i / t : s * t < i && (i = s * t)),
            r.width = i,
            r.height = s,
            r)
        },
        update: function(o) {
            var n = this;
            f.each(n.slides, function(t, e) {
                n.updateSlide(e, o)
            })
        },
        updateSlide: function(t, e) {
            var o = this
              , n = t && t.$content
              , a = t.width || t.opts.width
              , i = t.height || t.opts.height
              , s = t.$slide;
            o.adjustCaption(t),
            n && (a || i || "video" === t.contentType) && !t.hasError && (f.modulaFancybox.stop(n),
            f.modulaFancybox.setTranslate(n, o.getFitPos(t)),
            t.pos === o.currPos && (o.isAnimating = !1,
            o.updateCursor())),
            o.adjustLayout(t),
            s.length && (s.trigger("refresh"),
            t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".modula-fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)),
            o.trigger("onUpdate", t, e)
        },
        centerSlide: function(t) {
            var e = this
              , o = e.current
              , n = o.$slide;
            !e.isClosing && o && (n.siblings().css({
                transform: "",
                opacity: ""
            }),
            n.parent().children().removeClass("modula-fancybox-slide--previous modula-fancybox-slide--next"),
            f.modulaFancybox.animate(n, {
                top: 0,
                left: 0,
                opacity: 1
            }, t === m ? 0 : t, function() {
                n.css({
                    transform: "",
                    opacity: ""
                }),
                o.isComplete || e.complete()
            }, !1))
        },
        isMoved: function(t) {
            var e, o = t || this.current;
            return !!o && (e = f.modulaFancybox.getTranslate(this.$refs.stage),
            t = f.modulaFancybox.getTranslate(o.$slide),
            !o.$slide.hasClass("modula-fancybox-animated") && (.5 < Math.abs(t.top - e.top) || .5 < Math.abs(t.left - e.left)))
        },
        updateCursor: function(t, e) {
            var o = this
              , n = o.current
              , a = o.$refs.container;
            n && !o.isClosing && o.Guestures && (a.removeClass("modula-fancybox-is-zoomable modula-fancybox-can-zoomIn modula-fancybox-can-zoomOut modula-fancybox-can-swipe modula-fancybox-can-pan"),
            e = !!(t = o.canPan(t, e)) || o.isZoomable(),
            a.toggleClass("modula-fancybox-is-zoomable", e),
            f("[data-fancybox-zoom]").prop("disabled", !e),
            t ? a.addClass("modula-fancybox-can-pan") : e && ("zoom" === n.opts.clickContent || f.isFunction(n.opts.clickContent) && "zoom" == n.opts.clickContent(n)) ? a.addClass("modula-fancybox-can-zoomIn") : n.opts.touch && (n.opts.touch.vertical || 1 < o.group.length) && "video" !== n.contentType && a.addClass("modula-fancybox-can-swipe"))
        },
        isZoomable: function() {
            var t, e = this.current;
            if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                if (!e.isLoaded)
                    return !0;
                if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height))
                    return !0
            }
            return !1
        },
        isScaledDown: function(t, e) {
            var o = !1
              , n = this.current
              , a = n.$content;
            return t !== m && e !== m ? o = t < n.width && e < n.height : a && (o = (o = f.modulaFancybox.getTranslate(a)).width < n.width && o.height < n.height),
            o
        },
        canPan: function(t, e) {
            var o = this.current
              , n = null
              , a = !1;
            return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (a = this.getFitPos(o),
            t !== m && e !== m ? n = {
                width: t,
                height: e
            } : o.isComplete && (n = f.modulaFancybox.getTranslate(o.$content)),
            n && a && (a = 1.5 < Math.abs(n.width - a.width) || 1.5 < Math.abs(n.height - a.height))),
            a
        },
        loadSlide: function(o) {
            var t, e, n, a = this;
            if (!o.isLoading && !o.isLoaded) {
                if (!(o.isLoading = !0) === a.trigger("beforeLoad", o))
                    return o.isLoading = !1;
                switch (t = o.type,
                (e = o.$slide).off("refresh").trigger("onReset").addClass(o.opts.slideClass),
                t) {
                case "image":
                    a.setImage(o);
                    break;
                case "iframe":
                    a.setIframe(o);
                    break;
                case "html":
                    a.setContent(o, o.src || o.content);
                    break;
                case "video":
                    a.setContent(o, o.opts.video.tpl.replace(/\{\{src\}\}/gi, o.src).replace("{{format}}", o.opts.videoFormat || o.opts.video.format || "").replace("{{poster}}", o.thumb || ""));
                    break;
                case "inline":
                    f(o.src).length ? a.setContent(o, f(o.src)) : a.setError(o);
                    break;
                case "ajax":
                    a.showLoading(o),
                    n = f.ajax(f.extend({}, o.opts.ajax.settings, {
                        url: o.src,
                        success: function(t, e) {
                            "success" === e && a.setContent(o, t)
                        },
                        error: function(t, e) {
                            t && "abort" !== e && a.setError(o)
                        }
                    })),
                    e.one("onReset", function() {
                        n.abort()
                    });
                    break;
                default:
                    a.setError(o)
                }
                return !0
            }
        },
        setImage: function(e) {
            var t, o = this;
            setTimeout(function() {
                var t = e.$image;
                o.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || o.showLoading(e)
            }, 50),
            o.checkSrcset(e),
            e.$content = f('<div class="modula-fancybox-content"></div>').addClass("modula-fancybox-is-hidden").appendTo(e.$slide.addClass("modula-fancybox-slide--image")),
            !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width,
            e.height = e.opts.height,
            (t = s.createElement("img")).onerror = function() {
                f(this).remove(),
                e.$ghost = null
            }
            ,
            t.onload = function() {
                o.afterLoad(e)
            }
            ,
            e.$ghost = f(t).addClass("modula-fancybox-image").appendTo(e.$content).attr("src", e.thumb),
            "undifined" != typeof e.src && e.$ghost.attr("alt", e.alt)),
            o.setBigImage(e)
        },
        checkSrcset: function(t) {
            var e, o, n, a, i = t.opts.srcset || t.opts.image.srcset;
            if (i) {
                n = l.devicePixelRatio || 1,
                a = l.innerWidth * n,
                (o = i.split(",").map(function(t) {
                    var n = {};
                    return t.trim().split(/\s+/).forEach(function(t, e) {
                        var o = parseInt(t.substring(0, t.length - 1), 10);
                        if (0 === e)
                            return n.url = t;
                        o && (n.value = o,
                        n.postfix = t[t.length - 1])
                    }),
                    n
                })).sort(function(t, e) {
                    return t.value - e.value
                });
                for (var s = 0; s < o.length; s++) {
                    var r = o[s];
                    if ("w" === r.postfix && r.value >= a || "x" === r.postfix && r.value >= n) {
                        e = r;
                        break
                    }
                }
                !e && o.length && (e = o[o.length - 1]),
                e && (t.src = e.url,
                t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value,
                t.width = e.value),
                t.opts.srcset = i)
            }
        },
        setBigImage: function(e) {
            var o = this
              , t = s.createElement("img")
              , n = f(t);
            e.$image = n.one("error", function() {
                o.setError(e)
            }).one("load", function() {
                var t;
                e.$ghost || (o.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight),
                o.afterLoad(e)),
                o.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (1 < e.width / e.height && 1 < a.width() / a.height() ? "100" : Math.round(e.width / e.height * 100)) + "vw"),
                n.attr("sizes", t).attr("srcset", e.opts.srcset)),
                e.opts.alt && n.attr("alt", e.opts.alt),
                e.opts.image_id && n.attr("image-id", e.opts.image_id),
                e.$thumb && n.attr("title", e.$thumb.find("img.pic").attr("title")),
                e.$ghost && setTimeout(function() {
                    e.$ghost && !o.isClosing && e.$ghost.hide()
                }, Math.min(300, Math.max(1e3, e.height / 1600))),
                o.hideLoading(e))
            }).addClass("modula-fancybox-image").attr("src", e.src).appendTo(e.$content),
            (t.complete || "complete" == t.readyState) && n.naturalWidth && n.naturalHeight ? n.trigger("load") : t.error && n.trigger("error")
        },
        resolveImageSlideSize: function(t, e, o) {
            var n = parseInt(t.opts.width, 10)
              , a = parseInt(t.opts.height, 10);
            t.width = e,
            t.height = o,
            0 < n && (t.width = n,
            t.height = Math.floor(n * o / e)),
            0 < a && (t.width = Math.floor(a * e / o),
            t.height = a)
        },
        setIframe: function(a) {
            var i, e = this, s = a.opts.iframe, r = a.$slide;
            a.$content = f('<div class="modula-fancybox-content' + (s.preload ? " modula-fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(r),
            r.addClass("modula-fancybox-slide--" + a.contentType),
            a.$iframe = i = f(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(a.$content),
            s.preload ? (e.showLoading(a),
            i.on("load.fb error.fb", function(t) {
                this.isReady = 1,
                a.$slide.trigger("refresh"),
                e.afterLoad(a)
            }),
            r.on("refresh.fb", function() {
                var t, e = a.$content, o = s.css.width, n = s.css.height;
                if (1 === i[0].isReady) {
                    try {
                        t = i.contents().find("body")
                    } catch (t) {}
                    t && t.length && t.children().length && (r.css("overflow", "visible"),
                    e.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px"
                    }),
                    o === m && (o = Math.ceil(Math.max(t[0].clientWidth, t.outerWidth(!0)))),
                    e.css("width", o || "").css("max-width", ""),
                    n === m && (n = Math.ceil(Math.max(t[0].clientHeight, t.outerHeight(!0)))),
                    e.css("height", n || ""),
                    r.css("overflow", "auto")),
                    e.removeClass("modula-fancybox-is-hidden")
                }
            })) : e.afterLoad(a),
            i.attr("src", a.src),
            r.one("onReset", function() {
                try {
                    f(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                } catch (t) {}
                f(this).off("refresh.fb").empty(),
                a.isLoaded = !1,
                a.isRevealed = !1
            })
        },
        setContent: function(t, e) {
            var o;
            this.isClosing || (this.hideLoading(t),
            t.$content && f.modulaFancybox.stop(t.$content),
            t.$slide.empty(),
            (o = e) && o.hasOwnProperty && o instanceof f && e.parent().length ? ((e.hasClass("modula-fancybox-content") || e.parent().hasClass("modula-fancybox-content")) && e.parents(".modula-fancybox-slide").trigger("onReset"),
            t.$placeholder = f("<div>").hide().insertAfter(e),
            e.css("display", "inline-block")) : t.hasError || ("string" === f.type(e) && (e = f("<div>").append(f.trim(e)).contents()),
            t.opts.filter && (e = f("<div>").html(e).find(t.opts.filter))),
            t.$slide.one("onReset", function() {
                f(this).find("video,audio").trigger("pause"),
                t.$placeholder && (t.$placeholder.after(e.removeClass("modula-fancybox-content").hide()).remove(),
                t.$placeholder = null),
                t.$smallBtn && (t.$smallBtn.remove(),
                t.$smallBtn = null),
                t.hasError || (f(this).empty(),
                t.isLoaded = !1,
                t.isRevealed = !1)
            }),
            f(e).appendTo(t.$slide),
            f(e).is("video,audio") && (f(e).addClass("modula-fancybox-video"),
            f(e).wrap("<div></div>"),
            t.contentType = "video",
            t.opts.width = t.opts.width || f(e).attr("width"),
            t.opts.height = t.opts.height || f(e).attr("height")),
            t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.modula-fancybox-content").first(),
            t.$content.siblings().hide(),
            t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
            t.$content.addClass("modula-fancybox-content"),
            t.$slide.addClass("modula-fancybox-slide--" + t.contentType),
            this.afterLoad(t))
        },
        setError: function(t) {
            t.hasError = !0,
            t.$slide.trigger("onReset").removeClass("modula-fancybox-slide--" + t.contentType).addClass("modula-fancybox-slide--error"),
            t.contentType = "html",
            this.setContent(t, this.translate(t, t.opts.errorTpl)),
            t.pos === this.currPos && (this.isAnimating = !1)
        },
        showLoading: function(t) {
            (t = t || this.current) && !t.$spinner && (t.$spinner = f(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
        },
        hideLoading: function(t) {
            (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(),
            delete t.$spinner)
        },
        afterLoad: function(t) {
            var e = this;
            e.isClosing || (t.isLoading = !1,
            t.isLoaded = !0,
            e.trigger("afterLoad", t),
            e.hideLoading(t),
            !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = f(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
            t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                return 2 == t.button && t.preventDefault(),
                !0
            }),
            "image" === t.type && f('<div class="modula-fancybox-spaceball"></div>').appendTo(t.$content)),
            e.adjustCaption(t),
            e.adjustLayout(t),
            t.pos === e.currPos && e.updateCursor(),
            e.revealContent(t))
        },
        adjustCaption: function(t) {
            var e = this
              , o = t || e.current
              , n = o.opts.caption
              , a = o.opts.preventCaptionOverlap
              , i = e.$refs.caption
              , t = !1;
            i.toggleClass("modula-fancybox-caption--separate", a),
            a && n && n.length && (o.pos !== e.currPos ? ((i = i.clone().appendTo(i.parent())).children().eq(0).empty().html(n),
            t = i.outerHeight(!0),
            i.empty().remove()) : e.$caption && (t = e.$caption.outerHeight(!0)),
            o.$slide.css("padding-bottom", t || ""))
        },
        adjustLayout: function(t) {
            var e, o, n, a = t || this.current;
            a.isLoaded && !0 !== a.opts.disableLayoutFix && (a.$content.css("margin-bottom", ""),
            a.$content.outerHeight() > a.$slide.height() + .5 && (o = a.$slide[0].style["padding-bottom"],
            n = a.$slide.css("padding-bottom"),
            0 < parseFloat(n) && (t = a.$slide[0].scrollHeight,
            a.$slide.css("padding-bottom", 0),
            Math.abs(t - a.$slide[0].scrollHeight) < 1 && (e = n),
            a.$slide.css("padding-bottom", o))),
            a.$content.css("margin-bottom", e))
        },
        revealContent: function(t) {
            var e, o, n, a, i = this, s = t.$slide, r = !1, l = !1, c = i.isMoved(t), d = t.isRevealed;
            return t.isRevealed = !0,
            e = t.opts[i.firstRun ? "animationEffect" : "transitionEffect"],
            n = t.opts[i.firstRun ? "animationDuration" : "transitionDuration"],
            n = parseInt(t.forcedDuration === m ? n : t.forcedDuration, 10),
            !c && t.pos === i.currPos && n || (e = !1),
            "zoom" === e && (t.pos === i.currPos && n && "image" === t.type && !t.hasError && (l = i.getThumbPos(t)) ? r = i.getFitPos(t) : e = "fade"),
            "zoom" === e ? (i.isAnimating = !0,
            r.scaleX = r.width / l.width,
            r.scaleY = r.height / l.height,
            "auto" == (a = t.opts.zoomOpacity) && (a = .1 < Math.abs(t.width / t.height - l.width / l.height)),
            a && (l.opacity = .1,
            r.opacity = 1),
            f.modulaFancybox.setTranslate(t.$content.removeClass("modula-fancybox-is-hidden"), l),
            p(t.$content),
            void f.modulaFancybox.animate(t.$content, r, n, function() {
                i.isAnimating = !1,
                i.complete()
            })) : (i.updateSlide(t),
            e ? (f.modulaFancybox.stop(s),
            o = "modula-fancybox-slide--" + (t.pos >= i.prevPos ? "next" : "previous") + " modula-fancybox-animated modula-fancybox-fx-" + e,
            s.addClass(o).removeClass("modula-fancybox-slide--current"),
            t.$content.removeClass("modula-fancybox-is-hidden"),
            p(s),
            "image" !== t.type && t.$content.hide().show(0),
            void f.modulaFancybox.animate(s, "modula-fancybox-slide--current", n, function() {
                s.removeClass(o).css({
                    transform: "",
                    opacity: ""
                }),
                t.pos === i.currPos && i.complete()
            }, !0)) : (t.$content.removeClass("modula-fancybox-is-hidden"),
            d || !c || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"),
            void (t.pos === i.currPos && i.complete())))
        },
        getThumbPos: function(t) {
            var e, o, n, a, i = t.$thumb;
            return !!(i && (a = (n = i).find("a.tile-inner")[0]) && a.ownerDocument === s && (f(".modula-fancybox-container").css("pointer-events", "none"),
            n = {
                x: a.getBoundingClientRect().left + a.offsetWidth / 2,
                y: a.getBoundingClientRect().top + a.offsetHeight / 2
            },
            a = s.elementFromPoint(n.x, n.y) === a,
            f(".modula-fancybox-container").css("pointer-events", ""),
            a)) && (o = f.modulaFancybox.getTranslate(i),
            t = parseFloat(i.css("border-top-width") || 0),
            n = parseFloat(i.css("border-right-width") || 0),
            a = parseFloat(i.css("border-bottom-width") || 0),
            i = parseFloat(i.css("border-left-width") || 0),
            e = {
                top: o.top + t,
                left: o.left + i,
                width: o.width - n - i,
                height: o.height - t - a,
                scaleX: 1,
                scaleY: 1
            },
            0 < o.width && 0 < o.height && e)
        },
        complete: function() {
            var t, o = this, e = o.current, n = {};
            !o.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0,
            e.$slide.siblings().trigger("onReset"),
            o.preload("inline"),
            p(e.$slide),
            e.$slide.addClass("modula-fancybox-slide--complete"),
            f.each(o.slides, function(t, e) {
                e.pos >= o.currPos - 1 && e.pos <= o.currPos + 1 ? n[e.pos] = e : e && (f.modulaFancybox.stop(e.$slide),
                e.$slide.off().remove())
            }),
            o.slides = n),
            o.isAnimating = !1,
            o.updateCursor(),
            o.trigger("afterShow"),
            e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                o.next()
            }),
            e.opts.autoFocus && "html" === e.contentType && ((t = e.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : o.focus(null, !0)),
            e.$slide.scrollTop(0).scrollLeft(0))
        },
        preload: function(t) {
            var e, o, n = this;
            n.group.length < 2 || (o = n.slides[n.currPos + 1],
            (e = n.slides[n.currPos - 1]) && e.type === t && n.loadSlide(e),
            o && o.type === t && n.loadSlide(o))
        },
        focus: function(t, e) {
            var o = this
              , n = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
            o.isClosing || ((e = (e = !t && o.current && o.current.isComplete ? o.current.$slide.find("*:visible" + (e ? ":not(.modula-fancybox-close-small)" : "")) : o.$refs.container.find("*:visible")).filter(n).filter(function() {
                return "hidden" !== f(this).css("visibility") && !f(this).hasClass("disabled")
            })).length ? (n = e.index(s.activeElement),
            t && t.shiftKey ? (n < 0 || 0 == n) && (t.preventDefault(),
            e.eq(e.length - 1).trigger("focus")) : (n < 0 || n == e.length - 1) && (t && t.preventDefault(),
            e.eq(0).trigger("focus"))) : o.$refs.container.trigger("focus"))
        },
        activate: function() {
            var e = this;
            f(".modula-fancybox-container").each(function() {
                var t = f(this).data("modulaFancyBox");
                t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"),
                t.removeEvents(),
                t.isVisible = !1)
            }),
            e.isVisible = !0,
            (e.current || e.isIdle) && (e.update(),
            e.updateControls()),
            e.trigger("onActivate"),
            e.addEvents()
        },
        close: function(t, e) {
            function o() {
                l.cleanUp(t)
            }
            var n, a, i, s, r, l = this, c = l.current;
            return !l.isClosing && (!(l.isClosing = !0) === l.trigger("beforeClose", t) ? (l.isClosing = !1,
            d(function() {
                l.update()
            }),
            !1) : (l.removeEvents(),
            i = c.$content,
            n = c.opts.animationEffect,
            a = f.isNumeric(e) ? e : n ? c.opts.animationDuration : 0,
            c.$slide.removeClass("modula-fancybox-slide--complete modula-fancybox-slide--next modula-fancybox-slide--previous modula-fancybox-animated"),
            !0 !== t ? f.modulaFancybox.stop(c.$slide) : n = !1,
            c.$slide.siblings().trigger("onReset").remove(),
            a && l.$refs.container.removeClass("modula-fancybox-is-open").addClass("modula-fancybox-is-closing").css("transition-duration", a + "ms"),
            l.hideLoading(c),
            l.hideControls(!0),
            l.updateCursor(),
            "zoom" !== n || i && a && "image" === c.type && !l.isMoved() && !c.hasError && (r = l.getThumbPos(c)) || (n = "fade"),
            "zoom" === n ? (f.modulaFancybox.stop(i),
            e = {
                top: (s = f.modulaFancybox.getTranslate(i)).top,
                left: s.left,
                scaleX: s.width / r.width,
                scaleY: s.height / r.height,
                width: r.width,
                height: r.height
            },
            "auto" == (s = c.opts.zoomOpacity) && (s = .1 < Math.abs(c.width / c.height - r.width / r.height)),
            s && (r.opacity = 0),
            f.modulaFancybox.setTranslate(i, e),
            p(i),
            f.modulaFancybox.animate(i, r, a, o)) : n && a ? f.modulaFancybox.animate(c.$slide.addClass("modula-fancybox-slide--previous").removeClass("modula-fancybox-slide--current"), "modula-fancybox-animated modula-fancybox-fx-" + n, a, o) : !0 === t ? setTimeout(o, a) : o(),
            !0))
        },
        cleanUp: function(t) {
            var e, o = this, n = o.current.opts.$orig;
            o.current.$slide.trigger("onReset"),
            o.$refs.container.empty().remove(),
            o.trigger("afterClose", t),
            o.current.opts.backFocus && (n && n.length && n.is(":visible") || (n = o.$trigger),
            n && n.length && (e = l.scrollX,
            t = l.scrollY,
            n.trigger("focus"),
            f("html, body").scrollTop(t).scrollLeft(e))),
            o.current = null,
            (o = f.modulaFancybox.getInstance()) ? o.activate() : (f("body").removeClass("modula-fancybox-active compensate-for-scrollbar"),
            f("#modula-fancybox-style-noscroll").remove())
        },
        trigger: function(t, e) {
            var o, n = Array.prototype.slice.call(arguments, 1), a = this, e = e && e.opts ? e : a.current;
            if (e ? n.unshift(e) : e = a,
            n.unshift(a),
            f.isFunction(e.opts[t]) && (o = e.opts[t].apply(e, n)),
            !1 === o)
                return o;
            ("afterClose" !== t && a.$refs ? a.$refs.container : i).trigger(t + ".fb", n)
        },
        updateControls: function() {
            var t = this
              , e = t.current
              , o = e.index
              , n = t.$refs.container
              , a = t.$refs.caption
              , i = e.opts.caption;
            e.$slide.trigger("refresh"),
            i && i.length ? (t.$caption = a).children().eq(0).html(i) : t.$caption = null,
            t.hasHiddenControls || t.isIdle || t.showControls(),
            n.find("[data-fancybox-count]").html(t.group.length),
            n.find("[data-fancybox-index]").html(o + 1),
            n.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && o <= 0),
            n.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && o >= t.group.length - 1),
            "image" === e.type ? n.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", e.opts.image.src || e.src).show() : e.opts.toolbar && n.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            f(s.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
        },
        hideControls: function(t) {
            var e = ["infobar", "toolbar", "nav"];
            !t && this.current.opts.preventCaptionOverlap || e.push("caption"),
            this.$refs.container.removeClass(e.map(function(t) {
                return "modula-fancybox-show-" + t
            }).join(" ")),
            this.hasHiddenControls = !0
        },
        showControls: function() {
            var t = this
              , e = (t.current || t).opts
              , o = t.$refs.container;
            t.hasHiddenControls = !1,
            t.idleSecondsCounter = 0,
            o.toggleClass("modula-fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("modula-fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("modula-fancybox-show-caption", !!t.$caption).toggleClass("modula-fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("modula-fancybox-is-modal", !!e.modal)
        },
        toggleControls: function() {
            this.hasHiddenControls ? this.showControls() : this.hideControls()
        }
    }),
    f.modulaFancybox = {
        version: "3.5.7",
        defaults: t,
        getInstance: function(t) {
            var e = f('.modula-fancybox-container:not(".modula-fancybox-is-closing"):last').data("modulaFancyBox")
              , o = Array.prototype.slice.call(arguments, 1);
            return e instanceof n && ("string" === f.type(t) ? e[t].apply(e, o) : "function" === f.type(t) && t.apply(e, o),
            e)
        },
        open: function(t, e, o) {
            return new n(t,e,o)
        },
        close: function(t) {
            var e = this.getInstance();
            e && (e.close(),
            !0 === t && this.close(t))
        },
        destroy: function() {
            this.close(!0),
            i.add("body").off("click.fb-start", "**")
        },
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        use3d: (t = s.createElement("div"),
        l.getComputedStyle && l.getComputedStyle(t) && l.getComputedStyle(t).getPropertyValue("transform") && !(s.documentMode && s.documentMode < 11)),
        getTranslate: function(t) {
            var e;
            return !(!t || !t.length) && {
                top: (e = t[0].getBoundingClientRect()).top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity"))
            }
        },
        setTranslate: function(t, e) {
            var o = ""
              , n = {};
            if (t && e)
                return e.left === m && e.top === m || (o = (e.left === m ? t.position() : e).left + "px, " + (e.top === m ? t.position() : e).top + "px",
                o = this.use3d ? "translate3d(" + o + ", 0px)" : "translate(" + o + ")"),
                e.scaleX !== m && e.scaleY !== m ? o += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== m && (o += " scaleX(" + e.scaleX + ")"),
                o.length && (n.transform = o),
                e.opacity !== m && (n.opacity = e.opacity),
                e.width !== m && (n.width = e.width),
                e.height !== m && (n.height = e.height),
                t.css(n)
        },
        animate: function(e, o, n, a, i) {
            var s, r = this;
            f.isFunction(n) && (a = n,
            n = null),
            r.stop(e),
            s = r.getTranslate(e),
            e.on(c, function(t) {
                t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (r.stop(e),
                f.isNumeric(n) && e.css("transition-duration", ""),
                f.isPlainObject(o) ? o.scaleX !== m && o.scaleY !== m && r.setTranslate(e, {
                    top: o.top,
                    left: o.left,
                    width: s.width * o.scaleX,
                    height: s.height * o.scaleY,
                    scaleX: 1,
                    scaleY: 1
                }) : !0 !== i && e.removeClass(o),
                f.isFunction(a) && a(t))
            }),
            f.isNumeric(n) && e.css("transition-duration", n + "ms"),
            f.isPlainObject(o) ? (o.scaleX !== m && o.scaleY !== m && (delete o.width,
            delete o.height,
            e.parent().hasClass("modula-fancybox-slide--image") && e.parent().addClass("modula-fancybox-is-scaling")),
            f.modulaFancybox.setTranslate(e, o)) : e.addClass(o),
            e.data("timer", setTimeout(function() {
                e.trigger(c)
            }, n + 33))
        },
        stop: function(t, e) {
            t && t.length && (clearTimeout(t.data("timer")),
            e && t.trigger(c),
            t.off(c).css("transition-duration", ""),
            t.parent().removeClass("modula-fancybox-is-scaling"))
        }
    },
    f.fn.modulaFancybox = function(t) {
        var e;
        return (e = (t = t || {}).selector || !1) ? f("body").off("click.fb-start", e).on("click.fb-start", e, {
            options: t
        }, b) : this.off("click.fb-start").on("click.fb-start", {
            items: this,
            options: t
        }, b),
        this
    }
    ,
    i.on("click.fb-start", "[data-fancybox]", b),
    i.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
        f('[data-fancybox="' + f(this).attr("data-fancybox-trigger") + '"]').eq(f(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
            $trigger: f(this)
        })
    }),
    o = ".modula-fancybox-button",
    h = "modula-fancybox-focus",
    g = null,
    i.on("mousedown mouseup focus blur", o, function(t) {
        switch (t.type) {
        case "mousedown":
            g = f(this);
            break;
        case "mouseup":
            g = null;
            break;
        case "focusin":
            f(o).removeClass(h),
            f(this).is(g) || f(this).is("[disabled]") || f(this).addClass(h);
            break;
        case "focusout":
            f(o).removeClass(h)
        }
    })))
}(window, document, jQuery),
function(h) {
    "use strict";
    function f(o, t, e) {
        if (o)
            return e = e || "",
            "object" === h.type(e) && (e = h.param(e, !0)),
            h.each(t, function(t, e) {
                o = o.replace("$" + t, e || "")
            }),
            e.length && (o += (0 < o.indexOf("?") ? "&" : "?") + e),
            o
    }
    var n = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    h(document).on("objectNeedsType.fb", function(t, e, a) {
        var i, s, r, l, c, d, u = a.src || "", p = !1, o = h.extend(!0, {}, n, a.opts.media);
        h.each(o, function(t, e) {
            if (s = u.match(e.matcher)) {
                if (p = e.type,
                d = t,
                c = {},
                e.paramPlace && s[e.paramPlace]) {
                    "?" == (l = s[e.paramPlace])[0] && (l = l.substring(1)),
                    l = l.split("&");
                    for (var o = 0; o < l.length; ++o) {
                        var n = l[o].split("=", 2);
                        2 == n.length && (c[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")))
                    }
                }
                return r = h.extend(!0, {}, e.params, a.opts[t], c),
                u = "function" === h.type(e.url) ? e.url.call(this, s, r, a) : f(e.url, s, r),
                i = "function" === h.type(e.thumb) ? e.thumb.call(this, s, r, a) : f(e.thumb, s),
                "youtube" === t ? u = u.replace(/&t=(\d+)/, function(t, e) {
                    return "&start=" + e
                }) : "vimeo" === t && (u = u.replace("&%23", "#")),
                !1
            }
        }),
        p ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = i),
        "iframe" === p && (a.opts = h.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        h.extend(a, {
            type: p,
            src: u,
            origSrc: a.src,
            contentSource: d,
            contentType: "image" === p ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
        })) : u && (a.type = a.opts.defaultType)
    });
    var a = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, o = this;
            this[t].loaded ? setTimeout(function() {
                o.done(t)
            }) : this[t].loading || (this[t].loading = !0,
            (e = document.createElement("script")).type = "text/javascript",
            e.src = this[t].src,
            "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                o[t].loaded = !0,
                o.done(t)
            }
            : e.onload = function() {
                o[t].loaded = !0,
                o.done(t)
            }
            ,
            document.body.appendChild(e))
        },
        done: function(t) {
            var e, o;
            "youtube" === t && delete window.onYouTubeIframeAPIReady,
            (e = h.modulaFancybox.getInstance()) && (o = e.current.$content.find("iframe"),
            "youtube" === t && void 0 !== YT && YT ? new YT.Player(o.attr("id"),{
                events: {
                    onStateChange: function(t) {
                        0 == t.data && e.next()
                    }
                }
            }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(o).on("ended", function() {
                e.next()
            }))
        }
    };
    h(document).on({
        "afterShow.fb": function(t, e, o) {
            1 < e.group.length && ("youtube" === o.contentSource || "vimeo" === o.contentSource) && a.load(o.contentSource)
        }
    })
}(jQuery),
function(d, l, u) {
    "use strict";
    function p(t) {
        var e, o = [];
        for (e in t = (t = t.originalEvent || t || d.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t])
            t[e].pageX ? o.push({
                x: t[e].pageX,
                y: t[e].pageY
            }) : t[e].clientX && o.push({
                x: t[e].clientX,
                y: t[e].clientY
            });
        return o
    }
    function h(t, e, o) {
        return e && t ? "x" === o ? t.x - e.x : "y" === o ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }
    function c(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || u.isFunction(t.get(0).onclick) || t.data("selectable"))
            return 1;
        for (var e = 0, o = t[0].attributes, n = o.length; e < n; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14))
                return 1
    }
    function f(t) {
        for (var e, o, n, a = !1; e = t.get(0),
        o = n = o = void 0,
        o = d.getComputedStyle(e)["overflow-y"],
        n = d.getComputedStyle(e)["overflow-x"],
        o = ("scroll" === o || "auto" === o) && e.scrollHeight > e.clientHeight,
        e = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth,
        !(a = o || e) && (t = t.parent()).length && !t.hasClass("modula-fancybox-stage") && !t.is("body"); )
            ;
        return a
    }
    function o(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", u.proxy(e, "ontouchstart"))
    }
    var m = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || function(t) {
        return d.setTimeout(t, 1e3 / 60)
    }
      , g = d.cancelAnimationFrame || d.webkitCancelAnimationFrame || d.mozCancelAnimationFrame || d.oCancelAnimationFrame || function(t) {
        d.clearTimeout(t)
    }
    ;
    o.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"),
        u(l).off(".fb.touch"),
        t.requestId && (g(t.requestId),
        t.requestId = null),
        t.tapped && (clearTimeout(t.tapped),
        t.tapped = null)
    }
    ,
    o.prototype.ontouchstart = function(t) {
        var e = this
          , o = u(t.target)
          , n = e.instance
          , a = n.current
          , i = a.$slide
          , s = a.$content
          , r = "touchstart" == t.type;
        if (r && e.$container.off("mousedown.fb.touch"),
        (!t.originalEvent || 2 != t.originalEvent.button) && i.length && o.length && !c(o) && !c(o.parent()) && (o.is("img") || !(t.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
            if (!a || n.isAnimating || a.$slide.hasClass("modula-fancybox-animated"))
                return t.stopPropagation(),
                void t.preventDefault();
            e.realPoints = e.startPoints = p(t),
            e.startPoints.length && (a.touch && t.stopPropagation(),
            e.startEvent = t,
            e.canTap = !0,
            e.$target = o,
            e.$content = s,
            e.opts = a.opts.touch,
            e.isPanning = !1,
            e.isSwiping = !1,
            e.isZooming = !1,
            e.isScrolling = !1,
            e.canPan = n.canPan(),
            e.startTime = (new Date).getTime(),
            e.distanceX = e.distanceY = e.distance = 0,
            e.canvasWidth = Math.round(i[0].clientWidth),
            e.canvasHeight = Math.round(i[0].clientHeight),
            e.contentLastPos = null,
            e.contentStartPos = u.modulaFancybox.getTranslate(e.$content) || {
                top: 0,
                left: 0
            },
            e.sliderStartPos = u.modulaFancybox.getTranslate(i),
            e.stagePos = u.modulaFancybox.getTranslate(n.$refs.stage),
            e.sliderStartPos.top -= e.stagePos.top,
            e.sliderStartPos.left -= e.stagePos.left,
            e.contentStartPos.top -= e.stagePos.top,
            e.contentStartPos.left -= e.stagePos.left,
            u(l).off(".fb.touch").on(r ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", u.proxy(e, "ontouchend")).on(r ? "touchmove.fb.touch" : "mousemove.fb.touch", u.proxy(e, "ontouchmove")),
            u.modulaFancybox.isMobile && l.addEventListener("scroll", e.onscroll, !0),
            ((e.opts || e.canPan) && (o.is(e.$stage) || e.$stage.find(o).length) || (o.is(".modula-fancybox-image") && t.preventDefault(),
            u.modulaFancybox.isMobile && o.parents(".modula-fancybox-caption").length)) && (e.isScrollable = f(o) || f(o.parent()),
            u.modulaFancybox.isMobile && e.isScrollable || t.preventDefault(),
            1 !== e.startPoints.length && !a.hasError || (e.canPan ? (u.modulaFancybox.stop(e.$content),
            e.isPanning = !0) : e.isSwiping = !0,
            e.$container.addClass("modula-fancybox-is-grabbing")),
            2 === e.startPoints.length && "image" === a.type && (a.isLoaded || a.$ghost) && (e.canTap = !1,
            e.isSwiping = !1,
            e.isPanning = !1,
            e.isZooming = !0,
            u.modulaFancybox.stop(e.$content),
            e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - u(d).scrollLeft(),
            e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - u(d).scrollTop(),
            e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width,
            e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height,
            e.startDistanceBetweenFingers = h(e.startPoints[0], e.startPoints[1]))))
        }
    }
    ,
    o.prototype.onscroll = function(t) {
        this.isScrolling = !0,
        l.removeEventListener("scroll", this.onscroll, !0)
    }
    ,
    o.prototype.ontouchmove = function(t) {
        var e = this;
        void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? e.isScrolling ? e.canTap = !1 : (e.newPoints = p(t),
        (e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(),
        e.distanceX = h(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = h(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = h(e.newPoints[0], e.startPoints[0]),
        0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))) : e.ontouchend(t)
    }
    ,
    o.prototype.onSwipe = function(t) {
        var a = this
          , i = a.instance
          , e = a.isSwiping
          , o = a.sliderStartPos.left || 0;
        if (!0 !== e)
            "x" == e && (0 < a.distanceX && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? o += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? o -= Math.pow(-a.distanceX, .8) : o += a.distanceX),
            a.sliderLastPos = {
                top: "x" == e ? 0 : a.sliderStartPos.top + a.distanceY,
                left: o
            },
            a.requestId && (g(a.requestId),
            a.requestId = null),
            a.requestId = m(function() {
                a.sliderLastPos && (u.each(a.instance.slides, function(t, e) {
                    var o = e.pos - a.instance.currPos;
                    u.modulaFancybox.setTranslate(e.$slide, {
                        top: a.sliderLastPos.top,
                        left: a.sliderLastPos.left + o * a.canvasWidth + o * e.opts.gutter
                    })
                }),
                a.$container.addClass("modula-fancybox-is-sliding"))
            });
        else if (10 < Math.abs(a.distance)) {
            if (a.canTap = !1,
            i.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : i.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && 800 < u(d).width() ? a.isSwiping = "x" : (o = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI),
            a.isSwiping = 45 < o && o < 135 ? "y" : "x"),
            "y" === a.isSwiping && u.modulaFancybox.isMobile && a.isScrollable)
                return void (a.isScrolling = !0);
            i.isDragging = a.isSwiping,
            a.startPoints = a.newPoints,
            u.each(i.slides, function(t, e) {
                var o, n;
                u.modulaFancybox.stop(e.$slide),
                o = u.modulaFancybox.getTranslate(e.$slide),
                n = u.modulaFancybox.getTranslate(i.$refs.stage),
                e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("modula-fancybox-animated").removeClass(function(t, e) {
                    return (e.match(/(^|\s)modula-fancybox-fx-\S+/g) || []).join(" ")
                }),
                e.pos === i.current.pos && (a.sliderStartPos.top = o.top - n.top,
                a.sliderStartPos.left = o.left - n.left),
                u.modulaFancybox.setTranslate(e.$slide, {
                    top: o.top - n.top,
                    left: o.left - n.left
                })
            }),
            i.SlideShow && i.SlideShow.isActive && i.SlideShow.stop()
        }
    }
    ,
    o.prototype.onPan = function() {
        var t = this;
        h(t.newPoints[0], t.realPoints[0]) < (u.modulaFancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1,
        t.contentLastPos = t.limitMovement(),
        t.requestId && g(t.requestId),
        t.requestId = m(function() {
            u.modulaFancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }
    ,
    o.prototype.limitMovement = function() {
        var t = this
          , e = t.canvasWidth
          , o = t.canvasHeight
          , n = t.distanceX
          , a = t.distanceY
          , i = t.contentStartPos
          , s = i.left
          , r = i.top
          , l = i.width
          , c = i.height
          , d = e < l ? s + n : s
          , u = r + a
          , t = Math.max(0, .5 * e - .5 * l)
          , i = Math.max(0, .5 * o - .5 * c)
          , l = Math.min(e - l, .5 * e - .5 * l)
          , c = Math.min(o - c, .5 * o - .5 * c);
        return 0 < n && t < d && (d = t - 1 + Math.pow(-t + s + n, .8) || 0),
        n < 0 && d < l && (d = l + 1 - Math.pow(l - s - n, .8) || 0),
        0 < a && i < u && (u = i - 1 + Math.pow(-i + r + a, .8) || 0),
        a < 0 && u < c && (u = c + 1 - Math.pow(c - r - a, .8) || 0),
        {
            top: u,
            left: d
        }
    }
    ,
    o.prototype.limitPosition = function(t, e, o, n) {
        var a = this.canvasWidth
          , i = this.canvasHeight;
        return t = a < o ? (t = 0 < t ? 0 : t) < a - o ? a - o : t : Math.max(0, a / 2 - o / 2),
        {
            top: e = i < n ? (e = 0 < e ? 0 : e) < i - n ? i - n : e : Math.max(0, i / 2 - n / 2),
            left: t
        }
    }
    ,
    o.prototype.onZoom = function() {
        var t = this
          , e = t.contentStartPos
          , o = e.width
          , n = e.height
          , a = e.left
          , i = e.top
          , s = h(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers
          , r = Math.floor(o * s)
          , l = Math.floor(n * s)
          , c = (o - r) * t.percentageOfImageAtPinchPointX
          , e = (n - l) * t.percentageOfImageAtPinchPointY
          , o = (t.newPoints[0].x + t.newPoints[1].x) / 2 - u(d).scrollLeft()
          , n = (t.newPoints[0].y + t.newPoints[1].y) / 2 - u(d).scrollTop()
          , o = o - t.centerPointStartX
          , s = {
            top: i + (e + (n - t.centerPointStartY)),
            left: a + (c + o),
            scaleX: s,
            scaleY: s
        };
        t.canTap = !1,
        t.newWidth = r,
        t.newHeight = l,
        t.contentLastPos = s,
        t.requestId && g(t.requestId),
        t.requestId = m(function() {
            u.modulaFancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }
    ,
    o.prototype.ontouchend = function(t) {
        var e = this
          , o = e.isSwiping
          , n = e.isPanning
          , a = e.isZooming
          , i = e.isScrolling;
        if (e.endPoints = p(t),
        e.dMs = Math.max((new Date).getTime() - e.startTime, 1),
        e.$container.removeClass("modula-fancybox-is-grabbing"),
        u(l).off(".fb.touch"),
        l.removeEventListener("scroll", e.onscroll, !0),
        e.requestId && (g(e.requestId),
        e.requestId = null),
        e.isSwiping = !1,
        e.isPanning = !1,
        e.isZooming = !1,
        e.isScrolling = !1,
        e.instance.isDragging = !1,
        e.canTap)
            return e.onTap(t);
        e.speed = 100,
        e.velocityX = e.distanceX / e.dMs * .5,
        e.velocityY = e.distanceY / e.dMs * .5,
        n ? e.endPanning() : a ? e.endZooming() : e.endSwiping(o, i)
    }
    ,
    o.prototype.endSwiping = function(t, e) {
        var o = this
          , n = !1
          , a = o.instance.group.length
          , i = Math.abs(o.distanceX)
          , i = "x" == t && 1 < a && (130 < o.dMs && 10 < i || 50 < i);
        o.sliderLastPos = null,
        "y" == t && !e && 50 < Math.abs(o.distanceY) ? (u.modulaFancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200),
        n = o.instance.close(!0, 250)) : i && 0 < o.distanceX ? n = o.instance.previous(300) : i && o.distanceX < 0 && (n = o.instance.next(300)),
        !1 !== n || "x" != t && "y" != t || o.instance.centerSlide(200),
        o.$container.removeClass("modula-fancybox-is-sliding")
    }
    ,
    o.prototype.endPanning = function() {
        var t, e, o = this;
        o.contentLastPos && (e = !1 === o.opts.momentum || 350 < o.dMs ? (t = o.contentLastPos.left,
        o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX,
        o.contentLastPos.top + 500 * o.velocityY),
        (e = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width,
        e.height = o.contentStartPos.height,
        u.modulaFancybox.animate(o.$content, e, 366))
    }
    ,
    o.prototype.endZooming = function() {
        var t, e, o, n = this, a = n.instance.current, i = n.newWidth, s = n.newHeight;
        n.contentLastPos && (t = n.contentLastPos.left,
        o = {
            top: e = n.contentLastPos.top,
            left: t,
            width: i,
            height: s,
            scaleX: 1,
            scaleY: 1
        },
        u.modulaFancybox.setTranslate(n.$content, o),
        i < n.canvasWidth && s < n.canvasHeight ? n.instance.scaleToFit(150) : i > a.width || s > a.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (s = n.limitPosition(t, e, i, s),
        u.modulaFancybox.animate(n.$content, s, 150)))
    }
    ,
    o.prototype.onTap = function(e) {
        function t(t) {
            if (t = s.opts[t],
            u.isFunction(t) && (t = t.apply(i, [s, e])),
            t)
                switch (t) {
                case "close":
                    i.close(n.startEvent);
                    break;
                case "toggleControls":
                    i.toggleControls();
                    break;
                case "next":
                    i.next();
                    break;
                case "nextOrClose":
                    1 < i.group.length ? i.next() : i.close(n.startEvent);
                    break;
                case "zoom":
                    "image" == s.type && (s.isLoaded || s.$ghost) && (i.canPan() ? i.scaleToFit() : i.isScaledDown() ? i.scaleToActual(l, c) : i.group.length < 2 && i.close(n.startEvent))
                }
        }
        var o, n = this, a = u(e.target), i = n.instance, s = i.current, r = e && p(e) || n.startPoints, l = r[0] ? r[0].x - u(d).scrollLeft() - n.stagePos.left : 0, c = r[0] ? r[0].y - u(d).scrollTop() - n.stagePos.top : 0;
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(l > a[0].clientWidth + a.offset().left))) {
            if (a.is(".modula-fancybox-bg,.modula-fancybox-inner,.modula-fancybox-outer,.modula-fancybox-container"))
                o = "Outside";
            else if (a.is(".modula-fancybox-slide"))
                o = "Slide";
            else {
                if (!i.current.$content || !i.current.$content.find(a).addBack().filter(a).length)
                    return;
                o = "Content"
            }
            if (n.tapped) {
                if (clearTimeout(n.tapped),
                n.tapped = null,
                50 < Math.abs(l - n.tapX) || 50 < Math.abs(c - n.tapY))
                    return this;
                t("dblclick" + o)
            } else
                n.tapX = l,
                n.tapY = c,
                s.opts["dblclick" + o] && s.opts["dblclick" + o] !== s.opts["click" + o] ? n.tapped = setTimeout(function() {
                    n.tapped = null,
                    i.isAnimating || t("click" + o)
                }, 500) : t("click" + o);
            return this
        }
    }
    ,
    u(l).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new o(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(i, s) {
    "use strict";
    function o(t) {
        this.instance = t,
        this.init()
    }
    s.extend(!0, s.modulaFancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="modula-fancybox-button modula-fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    }),
    s.extend(o.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this
              , e = t.instance
              , o = e.group[e.currIndex].opts.slideShow;
            t.$button = e.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }),
            e.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = s('<div class="modula-fancybox-progress"></div>').appendTo(e.$refs.inner))
        },
        set: function(t) {
            var e = this
              , o = e.instance
              , n = o.current;
            n && (!0 === t || n.opts.loop || o.currIndex < o.group.length - 1) ? e.isActive && "video" !== n.contentType && (e.$progress && s.modulaFancybox.animate(e.$progress.show(), {
                scaleX: 1
            }, n.opts.slideShow.speed),
            e.timer = setTimeout(function() {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }, n.opts.slideShow.speed)) : (e.stop(),
            o.idleSecondsCounter = 0,
            o.showControls())
        },
        clear: function() {
            clearTimeout(this.timer),
            this.timer = null,
            this.$progress && this.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("modula-fancybox-button--play").addClass("modula-fancybox-button--pause"),
            t.isActive = !0,
            e.isComplete && t.set(!0),
            t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("modula-fancybox-button--pause").addClass("modula-fancybox-button--play"),
            t.isActive = !1,
            t.instance.trigger("onSlideShowChange", !1),
            t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    }),
    s(i).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new o(e))
        },
        "beforeShow.fb": function(t, e, o, n) {
            e = e && e.SlideShow;
            n ? e && o.opts.slideShow.autoStart && e.start() : e && e.isActive && e.clear()
        },
        "afterShow.fb": function(t, e, o) {
            e = e && e.SlideShow;
            e && e.isActive && e.set()
        },
        "afterKeydown.fb": function(t, e, o, n, a) {
            e = e && e.SlideShow;
            !e || !o.opts.slideShow || 80 !== a && 32 !== a || s(i.activeElement).is("button,a,input") || (n.preventDefault(),
            e.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            e = e && e.SlideShow;
            e && e.stop()
        }
    }),
    s(i).on("visibilitychange", function() {
        var t = s.modulaFancybox.getInstance()
          , t = t && t.SlideShow;
        t && t.isActive && (i.hidden ? t.clear() : t.set())
    })
}(document, jQuery),
function(i, o) {
    "use strict";
    var n, a = function() {
        for (var t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], e = {}, o = 0; o < t.length; o++) {
            var n = t[o];
            if (n && n[1]in i) {
                for (var a = 0; a < n.length; a++)
                    e[t[0][a]] = n[a];
                return e
            }
        }
        return !1
    }();
    a && (n = {
        request: function(t) {
            (t = t || i.documentElement)[a.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            i[a.exitFullscreen]()
        },
        toggle: function(t) {
            t = t || i.documentElement,
            this.isFullscreen() ? this.exit() : this.request(t)
        },
        isFullscreen: function() {
            return Boolean(i[a.fullscreenElement])
        },
        enabled: function() {
            return Boolean(i[a.fullscreenEnabled])
        }
    },
    o.extend(!0, o.modulaFancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="modula-fancybox-button modula-fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
        },
        fullScreen: {
            autoStart: !1
        }
    }),
    o(i).on(a.fullscreenchange, function() {
        var t = n.isFullscreen()
          , e = o.modulaFancybox.getInstance();
        e && (e.current && "image" === e.current.type && e.isAnimating && (e.isAnimating = !1,
        e.update(!0, !0, 0),
        e.isComplete || e.complete()),
        e.trigger("onFullscreenChange", t),
        e.$refs.container.toggleClass("modula-fancybox-is-fullscreen", t),
        e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("modula-fancybox-button--fsenter", !t).toggleClass("modula-fancybox-button--fsexit", t))
    })),
    o(i).on({
        "onInit.fb": function(t, e) {
            a ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                n.toggle()
            }),
            e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(),
            e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(t, e, o, n, a) {
            e && e.FullScreen && 70 === a && (n.preventDefault(),
            e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("modula-fancybox-is-fullscreen") && n.exit()
        }
    })
}(document, jQuery),
function(t, i) {
    "use strict";
    var s = "modula-fancybox-thumbs"
      , r = s + "-active";
    function n(t) {
        this.init(t)
    }
    i.modulaFancybox.defaults = i.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="modula-fancybox-button modula-fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".modula-fancybox-container",
            axis: "y"
        }
    }, i.modulaFancybox.defaults),
    i.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this
              , o = t.group
              , n = 0;
            e.instance = t,
            e.opts = o[t.currIndex].opts.thumbs,
            (t.Thumbs = e).$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var a = 0, i = o.length; a < i && (o[a].thumb && n++,
            !(1 < n)); a++)
                ;
            1 < n && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }),
            e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var o, t = this, e = t.instance, n = t.opts.parentEl, a = [];
            t.$grid || (t.$grid = i('<div class="' + s + " " + s + "-" + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(n).addBack().filter(n)),
            t.$grid.on("click", "a", function() {
                e.jumpTo(i(this).attr("data-index"))
            })),
            t.$list || (t.$list = i('<div class="' + s + '__list">').appendTo(t.$grid)),
            i.each(e.group, function(t, e) {
                (o = e.thumb) || "image" !== e.type || (o = e.src),
                a.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (o && o.length ? ' style="background-image:url(' + o + ')"' : 'class="modula-fancybox-thumbs-missing"') + "></a>")
            }),
            t.$list[0].innerHTML = a.join(""),
            "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right"), 10) + e.group.length * t.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, o, n = this, a = n.$list, i = n.$grid;
            n.instance.current && (o = (e = a.children().removeClass(r).filter('[data-index="' + n.instance.current.index + '"]').addClass(r)).position(),
            "y" === n.opts.axis && (o.top < 0 || o.top > a.height() - e.outerHeight()) ? a.stop().animate({
                scrollTop: a.scrollTop() + o.top
            }, t) : "x" === n.opts.axis && (o.left < i.scrollLeft() || o.left > i.scrollLeft() + (i.width() - e.outerWidth())) && a.parent().stop().animate({
                scrollLeft: o.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("modula-fancybox-show-thumbs", this.isVisible),
            t.isVisible ? (t.$grid || t.create(),
            t.instance.trigger("onThumbsShow"),
            t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    i(t).on({
        "onInit.fb": function(t, e) {
            var o;
            e && !e.Thumbs && (o = new n(e)).isActive && !0 === o.opts.autoStart && o.show()
        },
        "beforeShow.fb": function(t, e, o, n) {
            e = e && e.Thumbs;
            e && e.isVisible && e.focus(n ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, o, n, a) {
            e = e && e.Thumbs;
            e && e.isActive && 71 === a && (n.preventDefault(),
            e.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e = e && e.Thumbs;
            e && e.isVisible && !1 !== e.opts.hideOnClose && e.$grid.hide()
        }
    })
}(document, jQuery),
function(t, o) {
    "use strict";
    o.extend(!0, o.modulaFancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="modula-fancybox-button modula-fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            }
        }
    }),
    o(t).on("click", "[data-fancybox-share]", function() {
        var a, e, i = o.modulaFancybox.getInstance(), s = i.current || null, r = "<div class='modula-fancybox-share'><h1>{{SHARE}}</h1><p>";
        s && ("function" === o.type(s.opts.share.url) && (a = s.opts.share.url.apply(s, [i, s])),
        o.each(s.opts.modulaShare, function(t, e) {
            var o = (s.opts.lightboxEmailMessage.length ? s.opts.lightboxEmailMessage : "Here is the link to the image : %%image_link%% and this is the link to the gallery : %%gallery_link%%").replace(/\%%gallery_link%%/g, window.location.href).replace(/\%%image_link%%/g, s.src)
              , n = jQuery(s.$image).attr("title").length ? jQuery(s.$image).attr("title") : "";
            "" == n && (n = i.$caption.text()),
            r += s.opts.shareBtnTpl[e].replace(/\{\{media\}\}/g, "image" === s.type ? encodeURIComponent(s.src) : "").replace(/\{\{modulaShareUrl\}\}/g, encodeURIComponent(a)).replace(/\{\{descr\}\}/g, encodeURIComponent(n)).replace(/\{\{subject\}\}/g, encodeURIComponent(s.opts.lightboxEmailSubject)).replace(/\{\{emailMessage\}\}/g, encodeURIComponent(o))
        }),
        r = (r += "</p><p><input class='modula-fancybox-share__input' type='text' value='{{url_raw}}' /></p></div>").replace(/\{\{url_raw\}\}/g, (e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        String(a).replace(/[&<>"'`=\/]/g, function(t) {
            return e[t]
        }))),
        o.modulaFancybox.open({
            src: i.translate(i, r),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }),
                    e.$content.find(".modula-fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(i, s, n) {
    "use strict";
    function a() {
        var t = i.location.hash.substr(1)
          , e = t.split("-")
          , o = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
        return {
            hash: t,
            index: o < 1 ? 1 : o,
            gallery: e.join("-")
        }
    }
    function e(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }
    function r(t) {
        return !!t && ("" !== (t = (t = (t.current || t).opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && t)
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }
    ),
    n(function() {
        !1 !== n.modulaFancybox.defaults.hash && (n(s).on({
            "onInit.fb": function(t, e) {
                !1 !== e.group[e.currIndex].opts.hash && (a(),
                r(e))
            },
            "beforeShow.fb": function(t, e, o, n) {
                var a;
                o && !1 !== o.opts.hash && (a = r(e)) && (e.currentHash = a + (1 < e.group.length ? "-" + o.opts.image_id : ""),
                i.location.hash !== "#" + e.currentHash && (n && !e.origHash && (e.origHash = i.location.hash),
                e.hashTimer && clearTimeout(e.hashTimer),
                e.hashTimer = setTimeout(function() {
                    "replaceState"in i.history ? (i.history[n ? "pushState" : "replaceState"]({}, s.title, i.location.pathname + i.location.search + "#" + e.currentHash),
                    n && (e.hasCreatedHistory = !0)) : i.location.hash = e.currentHash,
                    e.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(t, e, o) {
                o && !1 !== o.opts.hash && (clearTimeout(e.hashTimer),
                e.currentHash && e.hasCreatedHistory ? i.history.back() : e.currentHash && ("replaceState"in i.history ? i.history.replaceState({}, s.title, i.location.pathname + i.location.search + (e.origHash || "")) : i.location.hash = e.origHash),
                e.currentHash = null)
            }
        }),
        n(i).on("hashchange.fb", function() {
            var t = a()
              , o = null;
            n.each(n(".modula-fancybox-container").get().reverse(), function(t, e) {
                e = n(e).data("modulaFancyBox");
                if (e && e.currentHash)
                    return o = e,
                    !1
            }),
            o ? o.currentHash === t.gallery + "-" + t.index || 1 === t.index && o.currentHash == t.gallery || (o.currentHash = null,
            o.close()) : "" !== t.gallery && e(t)
        }),
        setTimeout(function() {
            n.modulaFancybox.getInstance() || e(a())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var a = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, n, e) {
            n.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var e = n.current
                  , o = (new Date).getTime();
                n.group.length < 2 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(),
                t.stopPropagation(),
                e.$slide.hasClass("modula-fancybox-animated") || (t = t.originalEvent || t,
                o - a < 250 || (a = o,
                n[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);
function tg_getURLParameter(t) {
    return decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
}
function modulaInViewport(t) {
    "function" == typeof jQuery && t instanceof jQuery && (t = t[0]);
    t = t.getBoundingClientRect();
    return t.top - jQuery(window).height() <= -100 && -400 <= t.top - jQuery(window).height() || t.bottom <= jQuery(window).height()
}
jQuery(document).on("vc-full-width-row-single vc-full-width-row", function(t, i) {
    0 < jQuery("body").find(".modula").length && jQuery(window).trigger("modula-update")
}),
jQuery(window).on("elementor/frontend/init", function() {
    window.elementorFrontend && window.elementorFrontend.hooks.addAction("frontend/element_ready/global", function(t) {
        0 < jQuery("body").find(".modula").length && jQuery(window).trigger("modula-update")
    })
}),
function(u, s, a, t) {
    var n = "modulaGallery"
      , e = {
        resizer: "/",
        keepArea: !0,
        type: "creative-gallery",
        columns: 12,
        gutter: 10,
        desktopGutter: 10,
        mobileGutter: 10,
        tabletGutter: 10,
        enableTwitter: !1,
        enableFacebook: !1,
        enableWhatsapp: !1,
        enablePinterest: !1,
        enableLinkedin: !1,
        enableEmail: !1,
        lazyLoad: 0,
        initLightbox: !1,
        lightbox: "fancybox",
        lightboxOpts: {},
        inView: !1
    };
    function h(t, i) {
        this.element = t,
        this.$element = u(t),
        this.$itemsCnt = this.$element.find(".modula-items"),
        this.$items = this.$itemsCnt.find(".modula-item"),
        this.options = u.extend({}, e, i),
        this._defaults = e,
        this._name = n,
        this.tiles = [],
        this.$tilesCnt = null,
        this.completed = !1,
        this.lastWidth = 0,
        this.resizeTO = 0,
        this.isIsotope = !1,
        this.isLazyLoaded = !0,
        this.init()
    }
    h.prototype.init = function() {
        var i = this
          , t = a.documentElement.clientWidth;
        this.options.gutter = t <= 568 ? this.options.mobileGutter : t <= 768 ? this.options.tabletGutter : this.options.desktopGutter,
        u(a).trigger("modula_api_before_init", [i]),
        "custom-grid" === this.options.type ? this.createCustomGallery() : "creative-gallery" == this.options.type ? this.createGrid() : "grid" == this.options.type && ("automatic" == this.options.grid_type ? this.createAutoGrid() : this.createColumnsGrid()),
        "custom-grid" === this.options.type && u(s).height() < u("html").height() && i.onResize(i),
        u(s).resize(function() {
            i.onResize(i)
        }),
        u(s).on("modula-update", function() {
            i.onResize(i)
        }),
        u(a).on("lazyloaded", function(t) {
            t = u(t.target);
            "modula" == t.data("source") && (t.data("size", {
                width: t.width(),
                height: t.height()
            }),
            (t = t.parents(".modula-item")).addClass("tg-loaded"),
            t = i.$items.not(".jtg-hidden").index(t),
            i.placeImage(t),
            i.isIsotope && i.$itemsCnt.modulaisotope("layout"))
        }),
        i.options.inView && jQuery(s).on("DOMContentLoaded load resize scroll", function() {
            modulaInViewport(i.$element) && i.$element.addClass("modula-loaded-scale")
        }),
        this.setupSocial(),
        this.options.onComplete && this.options.onComplete(),
        "fancybox" != i.options.lightbox || i.options.initLightbox || this.initLightbox(),
        u(a).trigger("modula_api_after_init", [i])
    }
    ,
    h.prototype.initLightbox = function() {
        var e = this;
        e.$element.on("click", ".modula-item-link:not( .modula-simple-link )", function(t) {
            t.preventDefault();
            var i = u.map(e.$items, function(t) {
                var i = jQuery(t).find(".modula-item-link:not( .modula-simple-link )")
                  , t = jQuery(t).find(".pic");
                return {
                    src: i.attr("href"),
                    opts: {
                        $thumb: t.parents(".modula-item"),
                        caption: i.data("caption"),
                        alt: t.attr("alt"),
                        image_id: i.attr("data-image-id")
                    }
                }
            })
              , t = e.$items.index(jQuery(this).parents(".modula-item"));
            jQuery.modulaFancybox.open(i, e.options.lightboxOpts, t)
        })
    }
    ,
    h.prototype.trunc = function(t) {
        return Math.trunc ? Math.trunc(t) : (t = +t,
        isFinite(t) ? t - t % 1 || (t < 0 ? -0 : 0 === t ? t : 0) : t)
    }
    ,
    h.prototype.createCustomGallery = function() {
        var h, r = this, t = this.$element.find(".modula-items").width(), d = this, l = this.options.columns, i = a.documentElement.clientWidth;
        "1" == this.options.enableResponsive && (i <= 568 ? l = this.options.mobileColumns : i <= 768 && (l = this.options.tabletColumns)),
        h = 0 < this.options.gutter ? (t - this.options.gutter * (l - 1)) / l : Math.floor(t / l * 1e3) / 1e3,
        this.$items.not(".jtg-hidden").each(function(t, i) {
            var e, o, n = {}, s = u(i).data("width"), a = u(i).data("height");
            12 < s && (s = 12),
            "1" == d.options.enableResponsive && (e = s,
            o = a,
            1 == l ? a = (s = 1) * o / e : ((s = Math.round(l * e / 12)) < 1 && (s = 1),
            (a = Math.round(s * o / e)) < 1 && (a = 1))),
            n.width = h * s + d.options.gutter * (s - 1),
            n.height = Math.round(h) * a + d.options.gutter * (a - 1),
            u(i).data("size", n).addClass("tiled").addClass(n.width > n.height ? "tile-h" : "tile-v").data("position"),
            u(i).css(u(i).data("size")),
            u(i).find(".figc").css({
                width: u(i).data("size").width,
                height: u(i).data("size").height
            }),
            r.loadImage(t)
        });
        t = {
            itemSelector: ".modula-item",
            layoutMode: "packery",
            packery: {
                gutter: parseInt(d.options.gutter)
            }
        };
        this.$itemsCnt.modulaisotope(t),
        this.isIsotope = !0
    }
    ,
    h.prototype.createGrid = function() {
        var o = this;
        this.$itemsCnt.data("area", this.$itemsCnt.width() * this.options.height),
        this.lastWidth = this.$itemsCnt.width();
        for (var t, i = 0; i < this.$items.not(".jtg-hidden").length; i++)
            this.tiles.push(o.getSlot());
        this.tiles.sort(function(t, i) {
            return t.position - i.position
        }),
        this.$items.not(".jtg-hidden").each(function(t, i) {
            var e = o.tiles[t];
            u(i).data("size", e),
            u(i).addClass("tiled").addClass(e.width > e.height ? "tile-h" : "tile-v").data("position"),
            u(i).css({
                width: e.width,
                height: e.height
            }),
            u(i).find(".figc").css({
                width: e.width,
                height: e.height
            }),
            o.loadImage(t)
        }),
        this.isIsotope || (t = {
            resizesContainer: !1,
            itemSelector: ".modula-item",
            layoutMode: "packery",
            packery: {
                gutter: parseInt(o.options.gutter)
            }
        },
        this.$itemsCnt.modulaisotope(t),
        this.isIsotope = !0)
    }
    ,
    h.prototype.createAutoGrid = function() {
        this.$itemsCnt.justifiedGallery({
            rowHeight: this.options.rowHeight,
            margins: this.options.gutter,
            lastRow: this.options.lastRow,
            captions: !1,
            border: 0,
            imgSelector: ".pic",
            cssAnimation: !0,
            imagesAnimationDuration: 700
        })
    }
    ,
    h.prototype.createColumnsGrid = function() {
        var e = this;
        this.$itemsCnt.modulaisotope({
            itemSelector: ".modula-item",
            layoutMode: "packery",
            packery: {
                gutter: parseInt(this.options.gutter)
            }
        }),
        this.$items.each(function(t, i) {
            e.loadImage(t)
        }),
        this.isIsotope = !0
    }
    ,
    h.prototype.getSlot = function() {
        if (0 == this.tiles.length)
            return o = {
                top: 0,
                left: 0,
                width: this.$itemsCnt.width(),
                height: this.options.height,
                area: this.$itemsCnt.width() * this.options.height,
                position: 0
            };
        for (var t = 0, i = 0; i < this.tiles.length; i++)
            (o = this.tiles[i]).area > this.tiles[t].area && (t = i);
        var e, o = {}, n = this.tiles[t];
        return (o = n.width > n.height ? (e = n.width / 2 * this.options.randomFactor,
        n.prevWidth = n.width,
        n.width = Math.floor(n.width / 2 + e * (Math.random() - .5)),
        {
            top: n.top,
            left: n.left + n.width + this.options.gutter,
            width: n.prevWidth - n.width - this.options.gutter,
            height: n.height
        }) : (e = n.height / 2 * this.options.randomFactor,
        n.prevHeight = n.height,
        n.height = Math.floor(n.height / 2 + e * (Math.random() - .5)),
        {
            left: n.left,
            top: n.top + n.height + this.options.gutter,
            width: n.width,
            height: n.prevHeight - n.height - this.options.gutter
        })).area = o.width * o.height,
        o.position = 1e3 * o.top + o.left,
        n.position = 1e3 * n.top + n.left,
        this.tiles[t] = n,
        this.tiles[t].area = n.width * n.height,
        o
    }
    ,
    h.prototype.reset = function() {
        this.tiles = [],
        "custom-grid" === this.options.type ? this.createCustomGallery() : "creative-gallery" == this.options.type ? this.createGrid() : "grid" == this.options.type && ("automatic" == this.options.grid_type ? this.createAutoGrid() : this.createColumnsGrid()),
        this.lastWidth = this.$itemsCnt.width(),
        u(a).trigger("modula_api_reset", [this])
    }
    ,
    h.prototype.onResize = function(i) {
        var t;
        i.lastWidth != i.$itemsCnt.width() && (t = a.documentElement.clientWidth,
        i.options.gutter = t <= 568 ? i.options.mobileGutter : t <= 768 ? i.options.tabletGutter : this.options.desktopGutter,
        clearTimeout(i.resizeTO),
        i.resizeTO = setTimeout(function() {
            var t;
            i.options.keepArea && (t = i.$itemsCnt.data("area"),
            i.$itemsCnt.height(t / i.$itemsCnt.width())),
            i.reset(),
            i.isIsotope && i.$itemsCnt.modulaisotope({
                packery: {
                    gutter: parseInt(i.options.gutter)
                }
            }).modulaisotope("layout")
        }, 100))
    }
    ,
    h.prototype.loadImage = function(t) {
        var i, e = this, o = e.$items.not(".jtg-hidden").eq(t).find(".pic"), n = {};
        "0" == e.options.lazyLoad ? void 0 === o.attr("width") && void 0 === o.attr("height") ? ((i = new Image).onload = function() {
            n = {
                width: this.width,
                height: this.height
            },
            o.data("size", n),
            e.placeImage(t)
        }
        ,
        "undefined" != o.attr("src") ? i.src = o.attr("src") : i.src = o.data("src")) : (n = {
            width: o.width(),
            height: o.height()
        },
        o.data("size", n),
        e.placeImage(t)) : e.placeImage(t)
    }
    ,
    h.prototype.placeImage = function(t) {
        if ("grid" != this.options.type) {
            var i = this.$items.not(".jtg-hidden").eq(t)
              , e = i.find(".pic")
              , o = i.data("size")
              , n = e.data("size");
            if (void 0 !== o && void 0 !== n) {
                o.width,
                o.height;
                var s = n.width / n.height
                  , a = e.data("valign") ? e.data("valign") : "middle"
                  , i = e.data("halign") ? e.data("halign") : "center"
                  , h = {
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                    width: "auto",
                    height: "auto",
                    margin: "0",
                    maxWidth: "999em"
                };
                if (o.width * n.height / n.width > o.height)
                    switch (h.width = o.width,
                    h.left = 0,
                    a) {
                    case "top":
                        h.top = 0;
                        break;
                    case "middle":
                        h.top = 0 - (o.width * (1 / s) - o.height) / 2;
                        break;
                    case "bottom":
                        h.bottom = 0
                    }
                else
                    switch (h.height = o.height,
                    h.top = 0,
                    i) {
                    case "left":
                        h.left = 0;
                        break;
                    case "center":
                        h.left = 0 - (o.height * s - o.width) / 2;
                        break;
                    case "right":
                        h.right = 0
                    }
                e.css(h),
                this.$items.not(".jtg-hidden").eq(t).addClass("tg-loaded")
            }
        }
    }
    ,
    h.prototype.setupSocial = function() {
        this.options.enableTwitter && i(this.$items, this),
        this.options.enableFacebook && o(this.$items, this),
        this.options.enablePinterest && d(this.$items, this),
        this.options.enableLinkedin && l(this.$items, this),
        this.options.enableWhatsapp && r(this.$items, this),
        this.options.enableEmail && p(this.$items, this)
    }
    ,
    h.prototype.destroy = function() {
        this.isPackeryActive && (this.$itemsCnt.packery("destroy"),
        this.isPackeryActive = !1)
    }
    ;
    var i = function(t, i) {
        t.find(".modula-icon-twitter").click(function(t) {
            t.preventDefault();
            var i = u(this).parents(".modula-item").find("img.pic")
              , e = i.data("caption")
              , o = i.data("full")
              , t = i.attr("title")
              , i = a.title;
            return 0 < t.length ? i = u.trim(t) : 0 < e.length && (i = u.trim(e)),
            s.open("https://twitter.com/intent/tweet?url=" + encodeURI(o) + "&text=" + encodeURI(i), "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width / 2 - 300, screen.height / 2 - 200),
            !1
        })
    }
      , o = function(t, i) {
        t.find(".modula-icon-facebook").click(function(t) {
            t.preventDefault();
            t = "//www.facebook.com/sharer.php?u=" + u(this).parents(".modula-item").find("img.pic").attr("data-full");
            return s.open(t, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width / 2 - 300, screen.height / 2 - 200),
            !1
        })
    }
      , r = function(t, i) {
        t.find(".modula-icon-whatsapp").click(function(t) {
            t.preventDefault();
            t = u(this).parents(".modula-item").find("img.pic").attr("data-full");
            return s.open("https://api.whatsapp.com/send?text=" + encodeURI(t) + "&preview_url=true", "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width / 2 - 300, screen.height / 2 - 200),
            !1
        })
    }
      , d = function(t, i) {
        t.find(".modula-icon-pinterest").click(function(t) {
            t.preventDefault();
            var i = u(this).parents(".modula-item").find("img.pic")
              , e = i.data("full")
              , o = i.data("caption")
              , n = i.attr("title")
              , t = a.title;
            0 < n.length ? t = u.trim(n) : 0 < o.length && (t = u.trim(o));
            e = "http://pinterest.com/pin/create/button/?url=" + encodeURI(e) + "&description=" + encodeURI(t);
            return 1 <= i.length && (t = i.attr("data-full"),
            e += "&media=" + (i = t,
            (t = a.createElement("img")).src = i,
            i = t.src,
            t.src = null,
            i)),
            s.open(e, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width / 2 - 300, screen.height / 2 - 200),
            !1
        })
    }
      , l = function(t, i) {
        t.find(".modula-icon-linkedin").click(function(t) {
            t.preventDefault();
            t = u(this).parents(".modula-item").find("img.pic").attr("data-full"),
            t = "//linkedin.com/shareArticle?mini=true&url=" + encodeURI(t);
            return s.open(t, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width / 2 - 300, screen.height / 2 - 200),
            !1
        })
    }
      , p = function(t, n) {
        t.find(".modula-icon-email").click(function(t) {
            var i = encodeURI(n.options.email_subject)
              , e = jQuery(".modula-icon-email").parents(".modula-item").find("img.pic").attr("data-full")
              , o = location.href
              , o = "mailto:?subject=" + i + "&body=" + encodeURI(n.options.email_message.replace(/%%image_link%%/g, e).replace(/%%gallery_link%%/g, o));
            return s.open(o, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400").moveTo(screen.width / 2 - 300, screen.height / 2 - 200),
            !1
        })
    };
    u.fn[n] = function(i) {
        var e, o = arguments;
        return i === t || "object" == typeof i ? this.each(function() {
            u.data(this, "plugin_" + n) || u.data(this, "plugin_" + n, new h(this,i))
        }) : "string" == typeof i && "_" !== i[0] && "init" !== i ? (this.each(function() {
            var t = u.data(this, "plugin_" + n);
            t instanceof h && "function" == typeof t[i] && (e = t[i].apply(t, Array.prototype.slice.call(o, 1))),
            "destroy" === i && u.data(this, "plugin_" + n, null)
        }),
        e !== t ? e : this) : void 0
    }
}(jQuery, window, document),
jQuery(document).ready(function() {
    var t = jQuery(".modula.modula-gallery");
    jQuery.each(t, function() {
        var t = jQuery(this).data("config");
        jQuery(this).modulaGallery(t)
    })
});
