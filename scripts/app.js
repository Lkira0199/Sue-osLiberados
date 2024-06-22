function windowSize() {
  var e = $("section.home .welcome .items"),
    t = $("section.home .welcome h1");
  (wwidth = $(window).width()),
    (wheight = $(window).height()),
    $(".heroscreen").css(
      "min-height",
      wheight - $("header")[0].offsetHeight + "px"
    ),
    wwidth > 600 && wwidth < basewidth
      ? ((newscale = (1 * wwidth) / basewidth),
        (newh1 = Math.round(baseh1 * newscale) - 10),
        e.css("transform", "scale(" + newscale + ") translateX(-50%)"),
        t.css("font-size", newh1 + "px"))
      : wwidth > 600
      ? e.css("transform", "translateX(-50%)")
      : (e.css("transform", ""), t.css("font-size", ""));
}
function handleClickKeyboard(e) {
  return function (t) {
    t.stopPropagation(),
      ("keypress" == t.type && 13 != t.keyCode) || e($(this));
  };
}
function toggleAudio() {
  (audioon = !audioon),
    updateAudio(),
    "undefined" != typeof Storage && localStorage.setItem("audioon", audioon);
}
function retrieveAudio() {
  "undefined" != typeof Storage &&
    ((audioon = localStorage.getItem("audioon")),
    "false" == audioon
      ? ((audioon = !1),
        $("button.action-audio")
          .removeClass("icon-audio-on")
          .addClass("icon-audio-off"),
        updateAudio())
      : (audioon = !0));
}
function updateAudio() {
  $("video, audio").each(function () {
    audioon ? $(this).prop("muted", !1) : $(this).prop("muted", !0);
  });
}
function checkHash() {
  var e = location.href.split("#")[1] || "";
  "video" === e && $(".popup-video").first().click();
}
function animateHomeDictionary() {
  var e = $("section.home .definition");
  setTimeout(function () {
    e.find("p:eq(0)").addClass("done"),
      setTimeout(function () {
        e.find("p:eq(1)").addClass("done"),
          setTimeout(function () {
            e.fadeOut("slow", function () {
              animateHomeMainMenu();
            });
          }, 3e3);
      }, 4e3);
  }, 100);
}
function animateHomeMainMenu() {
  var e = $("section.home .welcome");
  e.removeClass("a-hidden"),
    e.find("a.logo, h1").addClass("done"),
    $(window).width() <= 600 && $("section.home button.skip").hide(),
    setTimeout(function () {
      $("#audio1").trigger("play"),
        e.find(".item.orange .img:eq(0)").addClass("done"),
        e.find(".item.orange p").addClass("done"),
        setTimeout(function () {
          e.find(".item.orange .img:eq(1)").addClass("done"),
            setTimeout(function () {
              e.find(".item.orange .img:eq(2)").addClass("done"),
                setTimeout(function () {
                  e.find(".item.orange .img:eq(3)").addClass("done"),
                    e.find(".item.orange h2").addClass("done"),
                    setTimeout(function () {
                      $("#audio2").trigger("play"),
                        e.find(".item.turquoise .img:eq(0)").addClass("done"),
                        e.find(".item.turquoise p").addClass("done"),
                        setTimeout(function () {
                          e.find(".item.turquoise .img:eq(1)").addClass("done"),
                            setTimeout(function () {
                              e
                                .find(".item.turquoise .img:eq(2)")
                                .addClass("done"),
                                setTimeout(function () {
                                  e
                                    .find(".item.turquoise .img:eq(3)")
                                    .addClass("done"),
                                    e
                                      .find(".item.turquoise h2")
                                      .addClass("done"),
                                    setTimeout(function () {
                                      $("#audio3").trigger("play"),
                                        e
                                          .find(".item.yellow .img:eq(0)")
                                          .addClass("done"),
                                        e
                                          .find(".item.yellow p")
                                          .addClass("done"),
                                        setTimeout(function () {
                                          e
                                            .find(".item.yellow .img:eq(1)")
                                            .addClass("done"),
                                            setTimeout(function () {
                                              e
                                                .find(".item.yellow .img:eq(2)")
                                                .addClass("done"),
                                                setTimeout(function () {
                                                  e
                                                    .find(
                                                      ".item.yellow .img:eq(3)"
                                                    )
                                                    .addClass("done"),
                                                    e
                                                      .find(".item.yellow h2")
                                                      .addClass("done"),
                                                    $(window).width() > 600 &&
                                                      $(
                                                        "section.home button.skip"
                                                      ).hide(),
                                                    setTimeout(function () {
                                                      $("audio").remove();
                                                    }, 3e3);
                                                }, 1500);
                                            }, 1500);
                                        }, 1500);
                                    }, 2e3);
                                }, 1500);
                            }, 1500);
                        }, 1500);
                    }, 2e3);
                }, 1500);
            }, 1500);
        }, 1500);
    }, 500);
}
function initDynamicBackgrounds() {
  $("body").hasClass("dynamic") &&
    $("section.content").data("is-active", "false");
}
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t) {
    t = t || ne;
    var n = t.createElement("script");
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  function i(e) {
    var t = !!e && "length" in e && e.length,
      n = ge.type(e);
    return (
      "function" !== n &&
      !ge.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function o(e, t, n) {
    return ge.isFunction(t)
      ? ge.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? ge.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? ge.grep(e, function (e) {
          return se.call(t, e) > -1 !== n;
        })
      : Ee.test(t)
      ? ge.filter(t, e, n)
      : ((t = ge.filter(t, e)),
        ge.grep(e, function (e) {
          return se.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function s(e) {
    var t = {};
    return (
      ge.each(e.match(qe) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function u(e) {
    return e;
  }
  function c(e) {
    throw e;
  }
  function l(e, t, n, i) {
    var r;
    try {
      e && ge.isFunction((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && ge.isFunction((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function f() {
    ne.removeEventListener("DOMContentLoaded", f),
      e.removeEventListener("load", f),
      ge.ready();
  }
  function d() {
    this.expando = ge.expando + d.uid++;
  }
  function p(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Me.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function h(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(Re, "-$&").toLowerCase()),
        (n = e.getAttribute(i)),
        "string" == typeof n)
      ) {
        try {
          n = p(n);
        } catch (r) {}
        Pe.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function g(e, t, n, i) {
    var r,
      o = 1,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return ge.css(e, t, "");
          },
      u = s(),
      c = (n && n[3]) || (ge.cssNumber[t] ? "" : "px"),
      l = (ge.cssNumber[t] || ("px" !== c && +u)) && We.exec(ge.css(e, t));
    if (l && l[3] !== c) {
      (c = c || l[3]), (n = n || []), (l = +u || 1);
      do (o = o || ".5"), (l /= o), ge.style(e, t, l + c);
      while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return (
      n &&
        ((l = +l || +u || 0),
        (r = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = l), (i.end = r))),
      r
    );
  }
  function m(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      r = Xe[i];
    return r
      ? r
      : ((t = n.body.appendChild(n.createElement(i))),
        (r = ge.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === r && (r = "block"),
        (Xe[i] = r),
        r);
  }
  function y(e, t) {
    for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
      (i = e[o]),
        i.style &&
          ((n = i.style.display),
          t
            ? ("none" === n &&
                ((r[o] = Oe.get(i, "display") || null),
                r[o] || (i.style.display = "")),
              "" === i.style.display && ze(i) && (r[o] = m(i)))
            : "none" !== n && ((r[o] = "none"), Oe.set(i, "display", n)));
    for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  function v(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && r(e, t)) ? ge.merge([e], n) : n
    );
  }
  function x(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"));
  }
  function b(e, t, n, i, r) {
    for (
      var o,
        a,
        s,
        u,
        c,
        l,
        f = t.createDocumentFragment(),
        d = [],
        p = 0,
        h = e.length;
      p < h;
      p++
    )
      if (((o = e[p]), o || 0 === o))
        if ("object" === ge.type(o)) ge.merge(d, o.nodeType ? [o] : o);
        else if (Ke.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (Ve.exec(o) || ["", ""])[1].toLowerCase(),
              u = Ye[s] || Ye._default,
              a.innerHTML = u[1] + ge.htmlPrefilter(o) + u[2],
              l = u[0];
            l--;

          )
            a = a.lastChild;
          ge.merge(d, a.childNodes), (a = f.firstChild), (a.textContent = "");
        } else d.push(t.createTextNode(o));
    for (f.textContent = "", p = 0; (o = d[p++]); )
      if (i && ge.inArray(o, i) > -1) r && r.push(o);
      else if (
        ((c = ge.contains(o.ownerDocument, o)),
        (a = v(f.appendChild(o), "script")),
        c && x(a),
        n)
      )
        for (l = 0; (o = a[l++]); ) Ge.test(o.type || "") && n.push(o);
    return f;
  }
  function w() {
    return !0;
  }
  function C() {
    return !1;
  }
  function T() {
    try {
      return ne.activeElement;
    } catch (e) {}
  }
  function k(e, t, n, i, r, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((i = i || n), (n = void 0));
      for (s in t) k(e, s, n, i, t[s], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      r === !1)
    )
      r = C;
    else if (!r) return e;
    return (
      1 === o &&
        ((a = r),
        (r = function (e) {
          return ge().off(e), a.apply(this, arguments);
        }),
        (r.guid = a.guid || (a.guid = ge.guid++))),
      e.each(function () {
        ge.event.add(this, t, r, i, n);
      })
    );
  }
  function E(e, t) {
    return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? ge(">tbody", e)[0] || e
      : e;
  }
  function A(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function S(e) {
    var t = rt.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function N(e, t) {
    var n, i, r, o, a, s, u, c;
    if (1 === t.nodeType) {
      if (
        Oe.hasData(e) &&
        ((o = Oe.access(e)), (a = Oe.set(t, o)), (c = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (r in c)
          for (n = 0, i = c[r].length; n < i; n++) ge.event.add(t, r, c[r][n]);
      }
      Pe.hasData(e) &&
        ((s = Pe.access(e)), (u = ge.extend({}, s)), Pe.set(t, u));
    }
  }
  function D(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ue.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function j(e, t, i, r) {
    t = oe.apply([], t);
    var o,
      a,
      s,
      u,
      c,
      l,
      f = 0,
      d = e.length,
      p = d - 1,
      h = t[0],
      g = ge.isFunction(h);
    if (g || (d > 1 && "string" == typeof h && !pe.checkClone && it.test(h)))
      return e.each(function (n) {
        var o = e.eq(n);
        g && (t[0] = h.call(this, n, o.html())), j(o, t, i, r);
      });
    if (
      d &&
      ((o = b(t, e[0].ownerDocument, !1, e, r)),
      (a = o.firstChild),
      1 === o.childNodes.length && (o = a),
      a || r)
    ) {
      for (s = ge.map(v(o, "script"), A), u = s.length; f < d; f++)
        (c = o),
          f !== p &&
            ((c = ge.clone(c, !0, !0)), u && ge.merge(s, v(c, "script"))),
          i.call(e[f], c, f);
      if (u)
        for (l = s[s.length - 1].ownerDocument, ge.map(s, S), f = 0; f < u; f++)
          (c = s[f]),
            Ge.test(c.type || "") &&
              !Oe.access(c, "globalEval") &&
              ge.contains(l, c) &&
              (c.src
                ? ge._evalUrl && ge._evalUrl(c.src)
                : n(c.textContent.replace(ot, ""), l));
    }
    return e;
  }
  function q(e, t, n) {
    for (var i, r = t ? ge.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || ge.cleanData(v(i)),
        i.parentNode &&
          (n && ge.contains(i.ownerDocument, i) && x(v(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  function $(e, t, n) {
    var i,
      r,
      o,
      a,
      s = e.style;
    return (
      (n = n || ut(e)),
      n &&
        ((a = n.getPropertyValue(t) || n[t]),
        "" !== a || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)),
        !pe.pixelMarginRight() &&
          st.test(a) &&
          at.test(t) &&
          ((i = s.width),
          (r = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = r),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function L(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function H(e) {
    if (e in ht) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--; )
      if (((e = pt[n] + t), e in ht)) return e;
  }
  function F(e) {
    var t = ge.cssProps[e];
    return t || (t = ge.cssProps[e] = H(e) || e), t;
  }
  function O(e, t, n) {
    var i = We.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function P(e, t, n, i, r) {
    var o,
      a = 0;
    for (
      o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += ge.css(e, n + Be[o], !0, r)),
        i
          ? ("content" === n && (a -= ge.css(e, "padding" + Be[o], !0, r)),
            "margin" !== n &&
              (a -= ge.css(e, "border" + Be[o] + "Width", !0, r)))
          : ((a += ge.css(e, "padding" + Be[o], !0, r)),
            "padding" !== n &&
              (a += ge.css(e, "border" + Be[o] + "Width", !0, r)));
    return a;
  }
  function M(e, t, n) {
    var i,
      r = ut(e),
      o = $(e, t, r),
      a = "border-box" === ge.css(e, "boxSizing", !1, r);
    return st.test(o)
      ? o
      : ((i = a && (pe.boxSizingReliable() || o === e.style[t])),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0),
        o + P(e, t, n || (a ? "border" : "content"), i, r) + "px");
  }
  function R(e, t, n, i, r) {
    return new R.prototype.init(e, t, n, i, r);
  }
  function I() {
    mt &&
      (ne.hidden === !1 && e.requestAnimationFrame
        ? e.requestAnimationFrame(I)
        : e.setTimeout(I, ge.fx.interval),
      ge.fx.tick());
  }
  function W() {
    return (
      e.setTimeout(function () {
        gt = void 0;
      }),
      (gt = ge.now())
    );
  }
  function B(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      (n = Be[i]), (r["margin" + n] = r["padding" + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  function z(e, t, n) {
    for (
      var i,
        r = (U.tweeners[t] || []).concat(U.tweeners["*"]),
        o = 0,
        a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function _(e, t, n) {
    var i,
      r,
      o,
      a,
      s,
      u,
      c,
      l,
      f = "width" in t || "height" in t,
      d = this,
      p = {},
      h = e.style,
      g = e.nodeType && ze(e),
      m = Oe.get(e, "fxshow");
    n.queue ||
      ((a = ge._queueHooks(e, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      d.always(function () {
        d.always(function () {
          a.unqueued--, ge.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (i in t)
      if (((r = t[i]), yt.test(r))) {
        if (
          (delete t[i], (o = o || "toggle" === r), r === (g ? "hide" : "show"))
        ) {
          if ("show" !== r || !m || void 0 === m[i]) continue;
          g = !0;
        }
        p[i] = (m && m[i]) || ge.style(e, i);
      }
    if (((u = !ge.isEmptyObject(t)), u || !ge.isEmptyObject(p))) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        (c = m && m.display),
        null == c && (c = Oe.get(e, "display")),
        (l = ge.css(e, "display")),
        "none" === l &&
          (c
            ? (l = c)
            : (y([e], !0),
              (c = e.style.display || c),
              (l = ge.css(e, "display")),
              y([e]))),
        ("inline" === l || ("inline-block" === l && null != c)) &&
          "none" === ge.css(e, "float") &&
          (u ||
            (d.done(function () {
              h.display = c;
            }),
            null == c && ((l = h.display), (c = "none" === l ? "" : l))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          d.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (i in p)
        u ||
          (m
            ? "hidden" in m && (g = m.hidden)
            : (m = Oe.access(e, "fxshow", { display: c })),
          o && (m.hidden = !g),
          g && y([e], !0),
          d.done(function () {
            g || y([e]), Oe.remove(e, "fxshow");
            for (i in p) ge.style(e, i, p[i]);
          })),
          (u = z(g ? m[i] : 0, i, d)),
          i in m || ((m[i] = u.start), g && ((u.end = u.start), (u.start = 0)));
    }
  }
  function X(e, t) {
    var n, i, r, o, a;
    for (n in e)
      if (
        ((i = ge.camelCase(n)),
        (r = t[i]),
        (o = e[n]),
        Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
        n !== i && ((e[i] = o), delete e[n]),
        (a = ge.cssHooks[i]),
        a && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[i];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
      } else t[i] = r;
  }
  function U(e, t, n) {
    var i,
      r,
      o = 0,
      a = U.prefilters.length,
      s = ge.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (r) return !1;
        for (
          var t = gt || W(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = n / c.duration || 0,
            o = 1 - i,
            a = 0,
            u = c.tweens.length;
          a < u;
          a++
        )
          c.tweens[a].run(o);
        return (
          s.notifyWith(e, [c, o, n]),
          o < 1 && u
            ? n
            : (u || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: ge.extend({}, t),
        opts: ge.extend(
          !0,
          { specialEasing: {}, easing: ge.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: gt || W(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = ge.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      l = c.props;
    for (X(l, c.opts.specialEasing); o < a; o++)
      if ((i = U.prefilters[o].call(c, e, l, c.opts)))
        return (
          ge.isFunction(i.stop) &&
            (ge._queueHooks(c.elem, c.opts.queue).stop = ge.proxy(i.stop, i)),
          i
        );
    return (
      ge.map(l, z, c),
      ge.isFunction(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      ge.fx.timer(ge.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  function V(e) {
    var t = e.match(qe) || [];
    return t.join(" ");
  }
  function G(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Y(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      ge.each(t, function (t, r) {
        n || Nt.test(e)
          ? i(e, r)
          : Y(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== ge.type(t)) i(e, t);
    else for (r in t) Y(e + "[" + r + "]", t[r], n, i);
  }
  function K(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(qe) || [];
      if (ge.isFunction(n))
        for (; (i = o[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Q(e, t, n, i) {
    function r(s) {
      var u;
      return (
        (o[s] = !0),
        ge.each(e[s] || [], function (e, s) {
          var c = s(t, n, i);
          return "string" != typeof c || a || o[c]
            ? a
              ? !(u = c)
              : void 0
            : (t.dataTypes.unshift(c), r(c), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === It;
    return r(t.dataTypes[0]) || (!o["*"] && r("*"));
  }
  function J(e, t) {
    var n,
      i,
      r = ge.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && ge.extend(!0, e, i), e;
  }
  function Z(e, t, n) {
    for (var i, r, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (r in s)
        if (s[r] && s[r].test(i)) {
          u.unshift(r);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (r in n) {
        if (!u[0] || e.converters[r + " " + u[0]]) {
          o = r;
          break;
        }
        a || (a = r);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function ee(e, t, n, i) {
    var r,
      o,
      a,
      s,
      u,
      c = {},
      l = e.dataTypes.slice();
    if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = l.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = l.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (((a = c[u + " " + o] || c["* " + o]), !a))
            for (r in c)
              if (
                ((s = r.split(" ")),
                s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]]))
              ) {
                a === !0
                  ? (a = c[r])
                  : c[r] !== !0 && ((o = s[0]), l.unshift(s[1]));
                break;
              }
          if (a !== !0)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (f) {
                return {
                  state: "parsererror",
                  error: a ? f : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  var te = [],
    ne = e.document,
    ie = Object.getPrototypeOf,
    re = te.slice,
    oe = te.concat,
    ae = te.push,
    se = te.indexOf,
    ue = {},
    ce = ue.toString,
    le = ue.hasOwnProperty,
    fe = le.toString,
    de = fe.call(Object),
    pe = {},
    he = "3.2.1",
    ge = function (e, t) {
      return new ge.fn.init(e, t);
    },
    me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ye = /^-ms-/,
    ve = /-([a-z])/g,
    xe = function (e, t) {
      return t.toUpperCase();
    };
  (ge.fn = ge.prototype =
    {
      jquery: he,
      constructor: ge,
      length: 0,
      toArray: function () {
        return re.call(this);
      },
      get: function (e) {
        return null == e
          ? re.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ge.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ge.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          ge.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(re.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ae,
      sort: te.sort,
      splice: te.splice,
    }),
    (ge.extend = ge.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || ge.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                (i = e[t]),
                a !== i &&
                  (c && i && (ge.isPlainObject(i) || (r = Array.isArray(i)))
                    ? (r
                        ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && ge.isPlainObject(n) ? n : {}),
                      (a[t] = ge.extend(c, o, i)))
                    : void 0 !== i && (a[t] = i));
        return a;
      }),
    ge.extend({
      expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === ge.type(e);
      },
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = ge.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== ce.call(e)) &&
          (!(t = ie(e)) ||
            ((n = le.call(t, "constructor") && t.constructor),
            "function" == typeof n && fe.call(n) === de))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? ue[ce.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        n(e);
      },
      camelCase: function (e) {
        return e.replace(ye, "ms-").replace(ve, xe);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (i(e))
          for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
        else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(me, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (i(Object(e))
              ? ge.merge(n, "string" == typeof e ? [e] : e)
              : ae.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++)
          (i = !t(e[o], o)), i !== s && r.push(e[o]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          o,
          a = 0,
          s = [];
        if (i(e))
          for (r = e.length; a < r; a++)
            (o = t(e[a], a, n)), null != o && s.push(o);
        else for (a in e) (o = t(e[a], a, n)), null != o && s.push(o);
        return oe.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, r;
        if (
          ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          ge.isFunction(e))
        )
          return (
            (i = re.call(arguments, 2)),
            (r = function () {
              return e.apply(t || this, i.concat(re.call(arguments)));
            }),
            (r.guid = e.guid = e.guid || ge.guid++),
            r
          );
      },
      now: Date.now,
      support: pe,
    }),
    "function" == typeof Symbol &&
      (ge.fn[Symbol.iterator] = te[Symbol.iterator]),
    ge.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        ue["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var be = (function (e) {
    function t(e, t, n, i) {
      var r,
        o,
        a,
        s,
        u,
        c,
        l,
        d = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : W) !== L && $(t), (t = t || L), F)
      ) {
        if (11 !== h && (u = ye.exec(e)))
          if ((r = u[1])) {
            if (9 === h) {
              if (!(a = t.getElementById(r))) return n;
              if (a.id === r) return n.push(a), n;
            } else if (d && (a = d.getElementById(r)) && R(t, a) && a.id === r)
              return n.push(a), n;
          } else {
            if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
            if (
              (r = u[3]) &&
              C.getElementsByClassName &&
              t.getElementsByClassName
            )
              return J.apply(n, t.getElementsByClassName(r)), n;
          }
        if (C.qsa && !U[e + " "] && (!O || !O.test(e))) {
          if (1 !== h) (d = t), (l = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(we, Ce))
                : t.setAttribute("id", (s = I)),
                c = A(e),
                o = c.length;
              o--;

            )
              c[o] = "#" + s + " " + p(c[o]);
            (l = c.join(",")), (d = (ve.test(e) && f(t.parentNode)) || t);
          }
          if (l)
            try {
              return J.apply(n, d.querySelectorAll(l)), n;
            } catch (g) {
            } finally {
              s === I && t.removeAttribute("id");
            }
        }
      }
      return N(e.replace(se, "$1"), t, n, i);
    }
    function n() {
      function e(n, i) {
        return (
          t.push(n + " ") > T.cacheLength && delete e[t.shift()],
          (e[n + " "] = i)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[I] = !0), e;
    }
    function r(e) {
      var t = L.createElement("fieldset");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) T.attrHandle[n[i]] = t;
    }
    function a(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && t.disabled === !1
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ke(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function l(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var r, o = e([], n.length, t), a = o.length; a--; )
              n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function f(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function d() {}
    function p(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function h(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        a = n && "parentNode" === o,
        s = z++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
            return !1;
          }
        : function (t, n, u) {
            var c,
              l,
              f,
              d = [B, s];
            if (u) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[I] || (t[I] = {})),
                    (l = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = l[o]) && c[0] === B && c[1] === s)
                      return (d[2] = c[2]);
                    if (((l[o] = d), (d[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function g(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, n, i) {
      for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
      return i;
    }
    function y(e, t, n, i, r) {
      for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), c && t.push(s)));
      return a;
    }
    function v(e, t, n, r, o, a) {
      return (
        r && !r[I] && (r = v(r)),
        o && !o[I] && (o = v(o, a)),
        i(function (i, a, s, u) {
          var c,
            l,
            f,
            d = [],
            p = [],
            h = a.length,
            g = i || m(t || "*", s.nodeType ? [s] : s, []),
            v = !e || (!i && t) ? g : y(g, d, e, s, u),
            x = n ? (o || (i ? e : h || r) ? [] : a) : v;
          if ((n && n(v, x, s, u), r))
            for (c = y(x, p), r(c, [], s, u), l = c.length; l--; )
              (f = c[l]) && (x[p[l]] = !(v[p[l]] = f));
          if (i) {
            if (o || e) {
              if (o) {
                for (c = [], l = x.length; l--; )
                  (f = x[l]) && c.push((v[l] = f));
                o(null, (x = []), c, u);
              }
              for (l = x.length; l--; )
                (f = x[l]) &&
                  (c = o ? ee(i, f) : d[l]) > -1 &&
                  (i[c] = !(a[c] = f));
            }
          } else (x = y(x === a ? x.splice(h, x.length) : x)), o ? o(null, a, x, u) : J.apply(a, x);
        })
      );
    }
    function x(e) {
      for (
        var t,
          n,
          i,
          r = e.length,
          o = T.relative[e[0].type],
          a = o || T.relative[" "],
          s = o ? 1 : 0,
          u = h(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          c = h(
            function (e) {
              return ee(t, e) > -1;
            },
            a,
            !0
          ),
          l = [
            function (e, n, i) {
              var r =
                (!o && (i || n !== D)) ||
                ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
              return (t = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((n = T.relative[e[s].type])) l = [h(g(l), n)];
        else {
          if (((n = T.filter[e[s].type].apply(null, e[s].matches)), n[I])) {
            for (i = ++s; i < r && !T.relative[e[i].type]; i++);
            return v(
              s > 1 && g(l),
              s > 1 &&
                p(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(se, "$1"),
              n,
              s < i && x(e.slice(s, i)),
              i < r && x((e = e.slice(i))),
              i < r && p(e)
            );
          }
          l.push(n);
        }
      return g(l);
    }
    function b(e, n) {
      var r = n.length > 0,
        o = e.length > 0,
        a = function (i, a, s, u, c) {
          var l,
            f,
            d,
            p = 0,
            h = "0",
            g = i && [],
            m = [],
            v = D,
            x = i || (o && T.find.TAG("*", c)),
            b = (B += null == v ? 1 : Math.random() || 0.1),
            w = x.length;
          for (
            c && (D = a === L || a || c);
            h !== w && null != (l = x[h]);
            h++
          ) {
            if (o && l) {
              for (
                f = 0, a || l.ownerDocument === L || ($(l), (s = !F));
                (d = e[f++]);

              )
                if (d(l, a || L, s)) {
                  u.push(l);
                  break;
                }
              c && (B = b);
            }
            r && ((l = !d && l) && p--, i && g.push(l));
          }
          if (((p += h), r && h !== p)) {
            for (f = 0; (d = n[f++]); ) d(g, m, a, s);
            if (i) {
              if (p > 0) for (; h--; ) g[h] || m[h] || (m[h] = K.call(u));
              m = y(m);
            }
            J.apply(u, m),
              c && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(u);
          }
          return c && ((B = b), (D = v)), g;
        };
      return r ? i(a) : a;
    }
    var w,
      C,
      T,
      k,
      E,
      A,
      S,
      N,
      D,
      j,
      q,
      $,
      L,
      H,
      F,
      O,
      P,
      M,
      R,
      I = "sizzle" + 1 * new Date(),
      W = e.document,
      B = 0,
      z = 0,
      _ = n(),
      X = n(),
      U = n(),
      V = function (e, t) {
        return e === t && (q = !0), 0;
      },
      G = {}.hasOwnProperty,
      Y = [],
      K = Y.pop,
      Q = Y.push,
      J = Y.push,
      Z = Y.slice,
      ee = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      re =
        "\\[" +
        ne +
        "*(" +
        ie +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ie +
        "))|)" +
        ne +
        "*\\]",
      oe =
        ":(" +
        ie +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        re +
        ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      se = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      fe = new RegExp(oe),
      de = new RegExp("^" + ie + "$"),
      pe = {
        ID: new RegExp("^#(" + ie + ")"),
        CLASS: new RegExp("^\\.(" + ie + ")"),
        TAG: new RegExp("^(" + ie + "|[*])"),
        ATTR: new RegExp("^" + re),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      be = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      Ce = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      Te = function () {
        $();
      },
      ke = h(
        function (e) {
          return e.disabled === !0 && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      J.apply((Y = Z.call(W.childNodes)), W.childNodes),
        Y[W.childNodes.length].nodeType;
    } catch (Ee) {
      J = {
        apply: Y.length
          ? function (e, t) {
              Q.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    (C = t.support = {}),
      (E = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      ($ = t.setDocument =
        function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : W;
          return i !== L && 9 === i.nodeType && i.documentElement
            ? ((L = i),
              (H = L.documentElement),
              (F = !E(L)),
              W !== L &&
                (n = L.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", Te, !1)
                  : n.attachEvent && n.attachEvent("onunload", Te)),
              (C.attributes = r(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (C.getElementsByTagName = r(function (e) {
                return (
                  e.appendChild(L.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (C.getElementsByClassName = me.test(L.getElementsByClassName)),
              (C.getById = r(function (e) {
                return (
                  (H.appendChild(e).id = I),
                  !L.getElementsByName || !L.getElementsByName(I).length
                );
              })),
              C.getById
                ? ((T.filter.ID = function (e) {
                    var t = e.replace(xe, be);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && F) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((T.filter.ID = function (e) {
                    var t = e.replace(xe, be);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && F) {
                      var n,
                        i,
                        r,
                        o = t.getElementById(e);
                      if (o) {
                        if (
                          ((n = o.getAttributeNode("id")), n && n.value === e)
                        )
                          return [o];
                        for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                          if (
                            ((n = o.getAttributeNode("id")), n && n.value === e)
                          )
                            return [o];
                      }
                      return [];
                    }
                  })),
              (T.find.TAG = C.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : C.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      r = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return o;
                  }),
              (T.find.CLASS =
                C.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && F)
                    return t.getElementsByClassName(e);
                }),
              (P = []),
              (O = []),
              (C.qsa = me.test(L.querySelectorAll)) &&
                (r(function (e) {
                  (H.appendChild(e).innerHTML =
                    "<a id='" +
                    I +
                    "'></a><select id='" +
                    I +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      O.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + I + "-]").length ||
                      O.push("~="),
                    e.querySelectorAll(":checked").length || O.push(":checked"),
                    e.querySelectorAll("a#" + I + "+*").length ||
                      O.push(".#.+[+~]");
                }),
                r(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = L.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      O.push("name" + ne + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      O.push(":enabled", ":disabled"),
                    (H.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      O.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    O.push(",.*:");
                })),
              (C.matchesSelector = me.test(
                (M =
                  H.matches ||
                  H.webkitMatchesSelector ||
                  H.mozMatchesSelector ||
                  H.oMatchesSelector ||
                  H.msMatchesSelector)
              )) &&
                r(function (e) {
                  (C.disconnectedMatch = M.call(e, "*")),
                    M.call(e, "[s!='']:x"),
                    P.push("!=", oe);
                }),
              (O = O.length && new RegExp(O.join("|"))),
              (P = P.length && new RegExp(P.join("|"))),
              (t = me.test(H.compareDocumentPosition)),
              (R =
                t || me.test(H.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (V = t
                ? function (e, t) {
                    if (e === t) return (q = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!C.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === L || (e.ownerDocument === W && R(W, e))
                            ? -1
                            : t === L || (t.ownerDocument === W && R(W, t))
                            ? 1
                            : j
                            ? ee(j, e) - ee(j, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (q = !0), 0;
                    var n,
                      i = 0,
                      r = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      u = [t];
                    if (!r || !o)
                      return e === L
                        ? -1
                        : t === L
                        ? 1
                        : r
                        ? -1
                        : o
                        ? 1
                        : j
                        ? ee(j, e) - ee(j, t)
                        : 0;
                    if (r === o) return a(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; s[i] === u[i]; ) i++;
                    return i
                      ? a(s[i], u[i])
                      : s[i] === W
                      ? -1
                      : u[i] === W
                      ? 1
                      : 0;
                  }),
              L)
            : L;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== L && $(e),
          (n = n.replace(le, "='$1']")),
          C.matchesSelector &&
            F &&
            !U[n + " "] &&
            (!P || !P.test(n)) &&
            (!O || !O.test(n)))
        )
          try {
            var i = M.call(e, n);
            if (
              i ||
              C.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (r) {}
        return t(n, L, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== L && $(e), R(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== L && $(e);
        var n = T.attrHandle[t.toLowerCase()],
          i = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
        return void 0 !== i
          ? i
          : C.attributes || !F
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (t.escape = function (e) {
        return (e + "").replace(we, Ce);
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          r = 0;
        if (
          ((q = !C.detectDuplicates),
          (j = !C.sortStable && e.slice(0)),
          e.sort(V),
          q)
        ) {
          for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (j = null), e;
      }),
      (k = t.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += k(t);
          return n;
        }),
      (T = t.selectors =
        {
          cacheLength: 50,
          createPseudo: i,
          match: pe,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(xe, be)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return pe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      fe.test(n) &&
                      (t = A(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(xe, be).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = _[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                  _(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, i) {
              return function (r) {
                var o = t.attr(r, e);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === i
                        : "!=" === n
                        ? o !== i
                        : "^=" === n
                        ? i && 0 === o.indexOf(i)
                        : "*=" === n
                        ? i && o.indexOf(i) > -1
                        : "$=" === n
                        ? i && o.slice(-i.length) === i
                        : "~=" === n
                        ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1
                        : "|=" === n &&
                          (o === i || o.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (e, t, n, i, r) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === i && 0 === r
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var c,
                      l,
                      f,
                      d,
                      p,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      y = s && t.nodeName.toLowerCase(),
                      v = !u && !s,
                      x = !1;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (
                              s
                                ? d.nodeName.toLowerCase() === y
                                : 1 === d.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                        for (
                          d = m,
                            f = d[I] || (d[I] = {}),
                            l = f[d.uniqueID] || (f[d.uniqueID] = {}),
                            c = l[e] || [],
                            p = c[0] === B && c[1],
                            x = p && c[2],
                            d = p && m.childNodes[p];
                          (d = (++p && d && d[g]) || (x = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++x && d === t) {
                            l[e] = [B, p, x];
                            break;
                          }
                      } else if (
                        (v &&
                          ((d = t),
                          (f = d[I] || (d[I] = {})),
                          (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                          (c = l[e] || []),
                          (p = c[0] === B && c[1]),
                          (x = p)),
                        x === !1)
                      )
                        for (
                          ;
                          (d = (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                          ((s
                            ? d.nodeName.toLowerCase() !== y
                            : 1 !== d.nodeType) ||
                            !++x ||
                            (v &&
                              ((f = d[I] || (d[I] = {})),
                              (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (l[e] = [B, x])),
                            d !== t));

                        );
                      return (x -= r), x === i || (x % i === 0 && x / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var r,
                o =
                  T.pseudos[e] ||
                  T.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[I]
                ? o(n)
                : o.length > 1
                ? ((r = [e, e, "", n]),
                  T.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, t) {
                        for (var i, r = o(e, n), a = r.length; a--; )
                          (i = ee(e, r[a])), (e[i] = !(t[i] = r[a]));
                      })
                    : function (e) {
                        return o(e, 0, r);
                      })
                : o;
            },
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                r = S(e.replace(se, "$1"));
              return r[I]
                ? i(function (e, t, n, i) {
                    for (var o, a = r(e, null, i, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: i(function (e) {
              return (
                (e = e.replace(xe, be)),
                function (t) {
                  return (t.textContent || t.innerText || k(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: i(function (e) {
              return (
                de.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(xe, be).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = F
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === H;
            },
            focus: function (e) {
              return (
                e === L.activeElement &&
                (!L.hasFocus || L.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: c(!1),
            disabled: c(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !T.pseudos.empty(e);
            },
            header: function (e) {
              return ge.test(e.nodeName);
            },
            input: function (e) {
              return he.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: l(function () {
              return [0];
            }),
            last: l(function (e, t) {
              return [t - 1];
            }),
            eq: l(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: l(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: l(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: l(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: l(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }),
      (T.pseudos.nth = T.pseudos.eq);
    for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      T.pseudos[w] = s(w);
    for (w in { submit: !0, reset: !0 }) T.pseudos[w] = u(w);
    return (
      (d.prototype = T.filters = T.pseudos),
      (T.setFilters = new d()),
      (A = t.tokenize =
        function (e, n) {
          var i,
            r,
            o,
            a,
            s,
            u,
            c,
            l = X[e + " "];
          if (l) return n ? 0 : l.slice(0);
          for (s = e, u = [], c = T.preFilter; s; ) {
            (i && !(r = ue.exec(s))) ||
              (r && (s = s.slice(r[0].length) || s), u.push((o = []))),
              (i = !1),
              (r = ce.exec(s)) &&
                ((i = r.shift()),
                o.push({ value: i, type: r[0].replace(se, " ") }),
                (s = s.slice(i.length)));
            for (a in T.filter)
              !(r = pe[a].exec(s)) ||
                (c[a] && !(r = c[a](r))) ||
                ((i = r.shift()),
                o.push({ value: i, type: a, matches: r }),
                (s = s.slice(i.length)));
            if (!i) break;
          }
          return n ? s.length : s ? t.error(e) : X(e, u).slice(0);
        }),
      (S = t.compile =
        function (e, t) {
          var n,
            i = [],
            r = [],
            o = U[e + " "];
          if (!o) {
            for (t || (t = A(e)), n = t.length; n--; )
              (o = x(t[n])), o[I] ? i.push(o) : r.push(o);
            (o = U(e, b(r, i))), (o.selector = e);
          }
          return o;
        }),
      (N = t.select =
        function (e, t, n, i) {
          var r,
            o,
            a,
            s,
            u,
            c = "function" == typeof e && e,
            l = !i && A((e = c.selector || e));
          if (((n = n || []), 1 === l.length)) {
            if (
              ((o = l[0] = l[0].slice(0)),
              o.length > 2 &&
                "ID" === (a = o[0]).type &&
                9 === t.nodeType &&
                F &&
                T.relative[o[1].type])
            ) {
              if (
                ((t = (T.find.ID(a.matches[0].replace(xe, be), t) || [])[0]),
                !t)
              )
                return n;
              c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              r = pe.needsContext.test(e) ? 0 : o.length;
              r-- && ((a = o[r]), !T.relative[(s = a.type)]);

            )
              if (
                (u = T.find[s]) &&
                (i = u(
                  a.matches[0].replace(xe, be),
                  (ve.test(o[0].type) && f(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(r, 1), (e = i.length && p(o)), !e))
                  return J.apply(n, i), n;
                break;
              }
          }
          return (
            (c || S(e, l))(
              i,
              t,
              !F,
              n,
              !t || (ve.test(e) && f(t.parentNode)) || t
            ),
            n
          );
        }),
      (C.sortStable = I.split("").sort(V).join("") === I),
      (C.detectDuplicates = !!q),
      $(),
      (C.sortDetached = r(function (e) {
        return 1 & e.compareDocumentPosition(L.createElement("fieldset"));
      })),
      r(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (C.attributes &&
        r(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      r(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(te, function (e, t, n) {
          var i;
          if (!n)
            return e[t] === !0
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      t
    );
  })(e);
  (ge.find = be),
    (ge.expr = be.selectors),
    (ge.expr[":"] = ge.expr.pseudos),
    (ge.uniqueSort = ge.unique = be.uniqueSort),
    (ge.text = be.getText),
    (ge.isXMLDoc = be.isXML),
    (ge.contains = be.contains),
    (ge.escapeSelector = be.escape);
  var we = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && ge(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    Ce = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    Te = ge.expr.match.needsContext,
    ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Ee = /^.[^:#\[\.,]*$/;
  (ge.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? ge.find.matchesSelector(i, e)
          ? [i]
          : []
        : ge.find.matches(
            e,
            ge.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ge.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            ge(e).filter(function () {
              for (t = 0; t < i; t++) if (ge.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) ge.find(e, r[t], n);
        return i > 1 ? ge.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(o(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(o(this, e || [], !0));
      },
      is: function (e) {
        return !!o(
          this,
          "string" == typeof e && Te.test(e) ? ge(e) : e || [],
          !1
        ).length;
      },
    });
  var Ae,
    Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Ne = (ge.fn.init = function (e, t, n) {
      var i, r;
      if (!e) return this;
      if (((n = n || Ae), "string" == typeof e)) {
        if (
          ((i =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : Se.exec(e)),
          !i || (!i[1] && t))
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof ge ? t[0] : t),
            ge.merge(
              this,
              ge.parseHTML(
                i[1],
                t && t.nodeType ? t.ownerDocument || t : ne,
                !0
              )
            ),
            ke.test(i[1]) && ge.isPlainObject(t))
          )
            for (i in t)
              ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        return (
          (r = ne.getElementById(i[2])),
          r && ((this[0] = r), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : ge.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(ge)
        : ge.makeArray(e, this);
    });
  (Ne.prototype = ge.fn), (Ae = ge(ne));
  var De = /^(?:parents|prev(?:Until|All))/,
    je = { children: !0, contents: !0, next: !0, prev: !0 };
  ge.fn.extend({
    has: function (e) {
      var t = ge(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ge.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        a = "string" != typeof e && ge(e);
      if (!Te.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && ge.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ge(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ge.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return we(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return we(e, "parentNode", n);
        },
        next: function (e) {
          return a(e, "nextSibling");
        },
        prev: function (e) {
          return a(e, "previousSibling");
        },
        nextAll: function (e) {
          return we(e, "nextSibling");
        },
        prevAll: function (e) {
          return we(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return we(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return we(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Ce((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Ce(e.firstChild);
        },
        contents: function (e) {
          return r(e, "iframe")
            ? e.contentDocument
            : (r(e, "template") && (e = e.content || e),
              ge.merge([], e.childNodes));
        },
      },
      function (e, t) {
        ge.fn[e] = function (n, i) {
          var r = ge.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = ge.filter(i, r)),
            this.length > 1 &&
              (je[e] || ge.uniqueSort(r), De.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var qe = /[^\x20\t\r\n\f]+/g;
  (ge.Callbacks = function (e) {
    e = "string" == typeof e ? s(e) : ge.extend({}, e);
    var t,
      n,
      i,
      r,
      o = [],
      a = [],
      u = -1,
      c = function () {
        for (r = r || e.once, i = t = !0; a.length; u = -1)
          for (n = a.shift(); ++u < o.length; )
            o[u].apply(n[0], n[1]) === !1 &&
              e.stopOnFalse &&
              ((u = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((u = o.length - 1), a.push(n)),
              (function i(t) {
                ge.each(t, function (t, n) {
                  ge.isFunction(n)
                    ? (e.unique && l.has(n)) || o.push(n)
                    : n && n.length && "string" !== ge.type(n) && i(n);
                });
              })(arguments),
              n && !t && c()),
            this
          );
        },
        remove: function () {
          return (
            ge.each(arguments, function (e, t) {
              for (var n; (n = ge.inArray(t, o, n)) > -1; )
                o.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? ge.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (r = a = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (r = a = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return (
            r ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              a.push(n),
              t || c()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return l;
  }),
    ge.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              ge.Callbacks("memory"),
              ge.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ge.Callbacks("once memory"),
              ge.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ge.Callbacks("once memory"),
              ge.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return ge
                .Deferred(function (t) {
                  ge.each(n, function (n, i) {
                    var r = ge.isFunction(e[i[4]]) && e[i[4]];
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && ge.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              function o(t, n, i, r) {
                return function () {
                  var s = this,
                    l = arguments,
                    f = function () {
                      var e, f;
                      if (!(t < a)) {
                        if (((e = i.apply(s, l)), e === n.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (f =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          ge.isFunction(f)
                            ? r
                              ? f.call(e, o(a, n, u, r), o(a, n, c, r))
                              : (a++,
                                f.call(
                                  e,
                                  o(a, n, u, r),
                                  o(a, n, c, r),
                                  o(a, n, u, n.notifyWith)
                                ))
                            : (i !== u && ((s = void 0), (l = [e])),
                              (r || n.resolveWith)(s, l));
                      }
                    },
                    d = r
                      ? f
                      : function () {
                          try {
                            f();
                          } catch (e) {
                            ge.Deferred.exceptionHook &&
                              ge.Deferred.exceptionHook(e, d.stackTrace),
                              t + 1 >= a &&
                                (i !== c && ((s = void 0), (l = [e])),
                                n.rejectWith(s, l));
                          }
                        };
                  t
                    ? d()
                    : (ge.Deferred.getStackHook &&
                        (d.stackTrace = ge.Deferred.getStackHook()),
                      e.setTimeout(d));
                };
              }
              var a = 0;
              return ge
                .Deferred(function (e) {
                  n[0][3].add(o(0, e, ge.isFunction(r) ? r : u, e.notifyWith)),
                    n[1][3].add(o(0, e, ge.isFunction(t) ? t : u)),
                    n[2][3].add(o(0, e, ge.isFunction(i) ? i : c));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ge.extend(e, r) : r;
            },
          },
          o = {};
        return (
          ge.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (r[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    i = s;
                  },
                  n[3 - e][2].disable,
                  n[0][2].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = re.call(arguments),
          o = ge.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (r[e] = arguments.length > 1 ? re.call(arguments) : n),
                --t || o.resolveWith(i, r);
            };
          };
        if (
          t <= 1 &&
          (l(e, o.done(a(n)).resolve, o.reject, !t),
          "pending" === o.state() || ge.isFunction(r[n] && r[n].then))
        )
          return o.then();
        for (; n--; ) l(r[n], a(n), o.reject);
        return o.promise();
      },
    });
  var $e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ge.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      $e.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (ge.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Le = ge.Deferred();
  (ge.fn.ready = function (e) {
    return (
      Le.then(e)["catch"](function (e) {
        ge.readyException(e);
      }),
      this
    );
  }),
    ge.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (e === !0 ? --ge.readyWait : ge.isReady) ||
          ((ge.isReady = !0),
          (e !== !0 && --ge.readyWait > 0) || Le.resolveWith(ne, [ge]));
      },
    }),
    (ge.ready.then = Le.then),
    "complete" === ne.readyState ||
    ("loading" !== ne.readyState && !ne.documentElement.doScroll)
      ? e.setTimeout(ge.ready)
      : (ne.addEventListener("DOMContentLoaded", f),
        e.addEventListener("load", f));
  var He = function (e, t, n, i, r, o, a) {
      var s = 0,
        u = e.length,
        c = null == n;
      if ("object" === ge.type(n)) {
        r = !0;
        for (s in n) He(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== i &&
        ((r = !0),
        ge.isFunction(i) || (a = !0),
        c &&
          (a
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(ge(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return r ? e : c ? t.call(e) : u ? t(e[0], n) : o;
    },
    Fe = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (d.uid = 1),
    (d.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Fe(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[ge.camelCase(t)] = n;
        else for (i in t) r[ge.camelCase(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][ge.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            Array.isArray(t)
              ? (t = t.map(ge.camelCase))
              : ((t = ge.camelCase(t)), (t = t in i ? [t] : t.match(qe) || [])),
              (n = t.length);
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || ge.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ge.isEmptyObject(t);
      },
    });
  var Oe = new d(),
    Pe = new d(),
    Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Re = /[A-Z]/g;
  ge.extend({
    hasData: function (e) {
      return Pe.hasData(e) || Oe.hasData(e);
    },
    data: function (e, t, n) {
      return Pe.access(e, t, n);
    },
    removeData: function (e, t) {
      Pe.remove(e, t);
    },
    _data: function (e, t, n) {
      return Oe.access(e, t, n);
    },
    _removeData: function (e, t) {
      Oe.remove(e, t);
    },
  }),
    ge.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = Pe.get(o)), 1 === o.nodeType && !Oe.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                ((i = a[n].name),
                0 === i.indexOf("data-") &&
                  ((i = ge.camelCase(i.slice(5))), h(o, i, r[i])));
            Oe.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              Pe.set(this, e);
            })
          : He(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (((n = Pe.get(o, e)), void 0 !== n)) return n;
                  if (((n = h(o, e)), void 0 !== n)) return n;
                } else
                  this.each(function () {
                    Pe.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Pe.remove(this, e);
        });
      },
    }),
    ge.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = Oe.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Oe.access(e, t, ge.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ge.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = ge._queueHooks(e, t),
          a = function () {
            ge.dequeue(e, t);
          };
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Oe.get(e, n) ||
          Oe.access(e, n, {
            empty: ge.Callbacks("once memory").add(function () {
              Oe.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ge.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? ge.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = ge.queue(this, e, t);
                ge._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ge.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = ge.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = Oe.get(o[a], e + "queueHooks")),
            n && n.empty && (i++, n.empty.add(s));
        return s(), r.promise(t);
      },
    });
  var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    We = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
    Be = ["Top", "Right", "Bottom", "Left"],
    ze = function (e, t) {
      return (
        (e = t || e),
        "none" === e.style.display ||
          ("" === e.style.display &&
            ge.contains(e.ownerDocument, e) &&
            "none" === ge.css(e, "display"))
      );
    },
    _e = function (e, t, n, i) {
      var r,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      r = n.apply(e, i || []);
      for (o in t) e.style[o] = a[o];
      return r;
    },
    Xe = {};
  ge.fn.extend({
    show: function () {
      return y(this, !0);
    },
    hide: function () {
      return y(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ze(this) ? ge(this).show() : ge(this).hide();
          });
    },
  });
  var Ue = /^(?:checkbox|radio)$/i,
    Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Ge = /^$|\/(?:java|ecma)script/i,
    Ye = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Ye.optgroup = Ye.option),
    (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
    (Ye.th = Ye.td);
  var Ke = /<|&#?\w+;/;
  !(function () {
    var e = ne.createDocumentFragment(),
      t = e.appendChild(ne.createElement("div")),
      n = ne.createElement("input");
    n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      t.appendChild(n),
      (pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var Qe = ne.documentElement,
    Je = /^key/,
    Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    et = /^([^.]*)(?:\.(.+)|)/;
  (ge.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        d,
        p,
        h,
        g,
        m = Oe.get(e);
      if (m)
        for (
          n.handler && ((o = n), (n = o.handler), (r = o.selector)),
            r && ge.find.matchesSelector(Qe, r),
            n.guid || (n.guid = ge.guid++),
            (u = m.events) || (u = m.events = {}),
            (a = m.handle) ||
              (a = m.handle =
                function (t) {
                  return "undefined" != typeof ge &&
                    ge.event.triggered !== t.type
                    ? ge.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            t = (t || "").match(qe) || [""],
            c = t.length;
          c--;

        )
          (s = et.exec(t[c]) || []),
            (p = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = ge.event.special[p] || {}),
              (p = (r ? f.delegateType : f.bindType) || p),
              (f = ge.event.special[p] || {}),
              (l = ge.extend(
                {
                  type: p,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && ge.expr.match.needsContext.test(r),
                  namespace: h.join("."),
                },
                o
              )),
              (d = u[p]) ||
                ((d = u[p] = []),
                (d.delegateCount = 0),
                (f.setup && f.setup.call(e, i, h, a) !== !1) ||
                  (e.addEventListener && e.addEventListener(p, a))),
              f.add &&
                (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, l) : d.push(l),
              (ge.event.global[p] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        d,
        p,
        h,
        g,
        m = Oe.hasData(e) && Oe.get(e);
      if (m && (u = m.events)) {
        for (t = (t || "").match(qe) || [""], c = t.length; c--; )
          if (
            ((s = et.exec(t[c]) || []),
            (p = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              f = ge.event.special[p] || {},
                p = (i ? f.delegateType : f.bindType) || p,
                d = u[p] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = d.length;
              o--;

            )
              (l = d[o]),
                (!r && g !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (s && !s.test(l.namespace)) ||
                  (i && i !== l.selector && ("**" !== i || !l.selector)) ||
                  (d.splice(o, 1),
                  l.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, l));
            a &&
              !d.length &&
              ((f.teardown && f.teardown.call(e, h, m.handle) !== !1) ||
                ge.removeEvent(e, p, m.handle),
              delete u[p]);
          } else for (p in u) ge.event.remove(e, p + t[c], n, i, !0);
        ge.isEmptyObject(u) && Oe.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s = ge.event.fix(e),
        u = new Array(arguments.length),
        c = (Oe.get(this, "events") || {})[s.type] || [],
        l = ge.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !l.preDispatch || l.preDispatch.call(this, s) !== !1)
      ) {
        for (
          a = ge.event.handlers.call(this, s, c), t = 0;
          (r = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              (i = (
                (ge.event.special[o.origType] || {}).handle || o.handler
              ).apply(r.elem, u)),
              void 0 !== i &&
                (s.result = i) === !1 &&
                (s.preventDefault(), s.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s = [],
        u = t.delegateCount,
        c = e.target;
      if (u && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              (i = t[n]),
                (r = i.selector + " "),
                void 0 === a[r] &&
                  (a[r] = i.needsContext
                    ? ge(r, this).index(c) > -1
                    : ge.find(r, this, null, [c]).length),
                a[r] && o.push(i);
            o.length && s.push({ elem: c, handlers: o });
          }
      return (
        (c = this), u < t.length && s.push({ elem: c, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(ge.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: ge.isFunction(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[ge.expando] ? e : new ge.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== T() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === T() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && r(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return r(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ge.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ge.Event = function (e, t) {
      return this instanceof ge.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && e.returnValue === !1)
                  ? w
                  : C),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && ge.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || ge.now()),
          void (this[ge.expando] = !0))
        : new ge.Event(e, t);
    }),
    (ge.Event.prototype = {
      constructor: ge.Event,
      isDefaultPrevented: C,
      isPropagationStopped: C,
      isImmediatePropagationStopped: C,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = w),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = w),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = w),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ge.each(
      {
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
        char: !0,
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
        which: function (e) {
          var t = e.button;
          return null == e.which && Je.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ze.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      ge.event.addProp
    ),
    ge.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        ge.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              r = e.relatedTarget,
              o = e.handleObj;
            return (
              (r && (r === i || ge.contains(i, r))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    ge.fn.extend({
      on: function (e, t, n, i) {
        return k(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return k(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            ge(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
          n === !1 && (n = C),
          this.each(function () {
            ge.event.remove(this, e, n, t);
          })
        );
      },
    });
  var tt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    nt = /<script|<style|<link/i,
    it = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rt = /^true\/(.*)/,
    ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ge.extend({
    htmlPrefilter: function (e) {
      return e.replace(tt, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s = e.cloneNode(!0),
        u = ge.contains(e.ownerDocument, e);
      if (
        !(
          pe.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ge.isXMLDoc(e)
        )
      )
        for (a = v(s), o = v(e), i = 0, r = o.length; i < r; i++) D(o[i], a[i]);
      if (t)
        if (n)
          for (o = o || v(e), a = a || v(s), i = 0, r = o.length; i < r; i++)
            N(o[i], a[i]);
        else N(e, s);
      return (
        (a = v(s, "script")), a.length > 0 && x(a, !u && v(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = ge.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Fe(n)) {
          if ((t = n[Oe.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, t.handle);
            n[Oe.expando] = void 0;
          }
          n[Pe.expando] && (n[Pe.expando] = void 0);
        }
    },
  }),
    ge.fn.extend({
      detach: function (e) {
        return q(this, e, !0);
      },
      remove: function (e) {
        return q(this, e);
      },
      text: function (e) {
        return He(
          this,
          function (e) {
            return void 0 === e
              ? ge.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return j(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = E(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return j(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = E(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return j(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return j(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ge.cleanData(v(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ge.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return He(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !nt.test(e) &&
              !Ye[(Ve.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ge.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (ge.cleanData(v(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (r) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return j(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            ge.inArray(this, e) < 0 &&
              (ge.cleanData(v(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    ge.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        ge.fn[e] = function (e) {
          for (var n, i = [], r = ge(e), o = r.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              ge(r[a])[t](n),
              ae.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var at = /^margin/,
    st = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
    ut = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    };
  !(function () {
    function t() {
      if (s) {
        (s.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (s.innerHTML = ""),
          Qe.appendChild(a);
        var t = e.getComputedStyle(s);
        (n = "1%" !== t.top),
          (o = "2px" === t.marginLeft),
          (i = "4px" === t.width),
          (s.style.marginRight = "50%"),
          (r = "4px" === t.marginRight),
          Qe.removeChild(a),
          (s = null);
      }
    }
    var n,
      i,
      r,
      o,
      a = ne.createElement("div"),
      s = ne.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (pe.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (a.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      a.appendChild(s),
      ge.extend(pe, {
        pixelPosition: function () {
          return t(), n;
        },
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelMarginRight: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), o;
        },
      }));
  })();
  var ct = /^(none|table(?!-c[ea]).+)/,
    lt = /^--/,
    ft = { position: "absolute", visibility: "hidden", display: "block" },
    dt = { letterSpacing: "0", fontWeight: "400" },
    pt = ["Webkit", "Moz", "ms"],
    ht = ne.createElement("div").style;
  ge.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = $(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          a,
          s = ge.camelCase(t),
          u = lt.test(t),
          c = e.style;
        return (
          u || (t = F(s)),
          (a = ge.cssHooks[t] || ge.cssHooks[s]),
          void 0 === n
            ? a && "get" in a && void 0 !== (r = a.get(e, !1, i))
              ? r
              : c[t]
            : ((o = typeof n),
              "string" === o &&
                (r = We.exec(n)) &&
                r[1] &&
                ((n = g(e, t, r)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (r && r[3]) || (ge.cssNumber[s] ? "" : "px")),
                pe.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                  (u ? c.setProperty(t, n) : (c[t] = n))),
              void 0)
        );
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        a,
        s = ge.camelCase(t),
        u = lt.test(t);
      return (
        u || (t = F(s)),
        (a = ge.cssHooks[t] || ge.cssHooks[s]),
        a && "get" in a && (r = a.get(e, !0, n)),
        void 0 === r && (r = $(e, t, i)),
        "normal" === r && t in dt && (r = dt[t]),
        "" === n || n
          ? ((o = parseFloat(r)), n === !0 || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    ge.each(["height", "width"], function (e, t) {
      ge.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !ct.test(ge.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? M(e, t, i)
              : _e(e, ft, function () {
                  return M(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = i && ut(e),
            a =
              i &&
              P(e, t, i, "border-box" === ge.css(e, "boxSizing", !1, o), o);
          return (
            a &&
              (r = We.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = ge.css(e, t))),
            O(e, n, a)
          );
        },
      };
    }),
    (ge.cssHooks.marginLeft = L(pe.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat($(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              _e(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ge.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (ge.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + Be[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        at.test(e) || (ge.cssHooks[e + t].set = O);
    }),
    ge.fn.extend({
      css: function (e, t) {
        return He(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = ut(e), r = t.length; a < r; a++)
                o[t[a]] = ge.css(e, t[a], !1, i);
              return o;
            }
            return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (ge.Tween = R),
    (R.prototype = {
      constructor: R,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || ge.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (ge.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = R.propHooks[this.prop];
        return e && e.get ? e.get(this) : R.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = R.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ge.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : R.propHooks._default.set(this),
          this
        );
      },
    }),
    (R.prototype.init.prototype = R.prototype),
    (R.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = ge.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
        },
        set: function (e) {
          ge.fx.step[e.prop]
            ? ge.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[ge.cssProps[e.prop]] &&
                !ge.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : ge.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (R.propHooks.scrollTop = R.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ge.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ge.fx = R.prototype.init),
    (ge.fx.step = {});
  var gt,
    mt,
    yt = /^(?:toggle|show|hide)$/,
    vt = /queueHooks$/;
  (ge.Animation = ge.extend(U, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return g(n.elem, e, We.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      ge.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(qe));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (U.tweeners[n] = U.tweeners[n] || []),
          U.tweeners[n].unshift(t);
    },
    prefilters: [_],
    prefilter: function (e, t) {
      t ? U.prefilters.unshift(e) : U.prefilters.push(e);
    },
  })),
    (ge.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? ge.extend({}, e)
          : {
              complete: n || (!n && t) || (ge.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !ge.isFunction(t) && t),
            };
      return (
        ge.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in ge.fx.speeds
              ? (i.duration = ge.fx.speeds[i.duration])
              : (i.duration = ge.fx.speeds._default)),
        (null != i.queue && i.queue !== !0) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          ge.isFunction(i.old) && i.old.call(this),
            i.queue && ge.dequeue(this, i.queue);
        }),
        i
      );
    }),
    ge.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ze)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = ge.isEmptyObject(e),
          o = ge.speed(t, n, i),
          a = function () {
            var t = U(this, ge.extend({}, e), o);
            (r || Oe.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = ge.timers,
              a = Oe.get(this);
            if (r) a[r] && a[r].stop && i(a[r]);
            else for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || ge.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Oe.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = ge.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                ge.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    ge.each(["toggle", "show", "hide"], function (e, t) {
      var n = ge.fn[t];
      ge.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(B(t, !0), e, i, r);
      };
    }),
    ge.each(
      {
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        ge.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (ge.timers = []),
    (ge.fx.tick = function () {
      var e,
        t = 0,
        n = ge.timers;
      for (gt = ge.now(); t < n.length; t++)
        (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
      n.length || ge.fx.stop(), (gt = void 0);
    }),
    (ge.fx.timer = function (e) {
      ge.timers.push(e), ge.fx.start();
    }),
    (ge.fx.interval = 13),
    (ge.fx.start = function () {
      mt || ((mt = !0), I());
    }),
    (ge.fx.stop = function () {
      mt = null;
    }),
    (ge.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ge.fn.delay = function (t, n) {
      return (
        (t = ge.fx ? ge.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e = ne.createElement("input"),
        t = ne.createElement("select"),
        n = t.appendChild(ne.createElement("option"));
      (e.type = "checkbox"),
        (pe.checkOn = "" !== e.value),
        (pe.optSelected = n.selected),
        (e = ne.createElement("input")),
        (e.value = "t"),
        (e.type = "radio"),
        (pe.radioValue = "t" === e.value);
    })();
  var xt,
    bt = ge.expr.attrHandle;
  ge.fn.extend({
    attr: function (e, t) {
      return He(this, ge.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ge.removeAttr(this, e);
      });
    },
  }),
    ge.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ge.prop(e, t, n)
            : ((1 === o && ge.isXMLDoc(e)) ||
                (r =
                  ge.attrHooks[t.toLowerCase()] ||
                  (ge.expr.match.bool.test(t) ? xt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ge.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : ((i = ge.find.attr(e, t)), null == i ? void 0 : i));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!pe.radioValue && "radio" === t && r(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(qe);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (xt = {
      set: function (e, t, n) {
        return t === !1 ? ge.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = bt[t] || ge.find.attr;
      bt[t] = function (e, t, i) {
        var r,
          o,
          a = t.toLowerCase();
        return (
          i ||
            ((o = bt[a]),
            (bt[a] = r),
            (r = null != n(e, t, i) ? a : null),
            (bt[a] = o)),
          r
        );
      };
    });
  var wt = /^(?:input|select|textarea|button)$/i,
    Ct = /^(?:a|area)$/i;
  ge.fn.extend({
    prop: function (e, t) {
      return He(this, ge.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ge.propFix[e] || e];
      });
    },
  }),
    ge.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ge.isXMLDoc(e)) ||
              ((t = ge.propFix[t] || t), (r = ge.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ge.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : wt.test(e.nodeName) || (Ct.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    pe.optSelected ||
      (ge.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ge.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ge.propFix[this.toLowerCase()] = this;
      }
    ),
    ge.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          u = 0;
        if (ge.isFunction(e))
          return this.each(function (t) {
            ge(this).addClass(e.call(this, t, G(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match(qe) || []; (n = this[u++]); )
            if (((r = G(n)), (i = 1 === n.nodeType && " " + V(r) + " "))) {
              for (a = 0; (o = t[a++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              (s = V(i)), r !== s && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          u = 0;
        if (ge.isFunction(e))
          return this.each(function (t) {
            ge(this).removeClass(e.call(this, t, G(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(qe) || []; (n = this[u++]); )
            if (((r = G(n)), (i = 1 === n.nodeType && " " + V(r) + " "))) {
              for (a = 0; (o = t[a++]); )
                for (; i.indexOf(" " + o + " ") > -1; )
                  i = i.replace(" " + o + " ", " ");
              (s = V(i)), r !== s && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ge.isFunction(e)
          ? this.each(function (n) {
              ge(this).toggleClass(e.call(this, n, G(this), t), t);
            })
          : this.each(function () {
              var t, i, r, o;
              if ("string" === n)
                for (i = 0, r = ge(this), o = e.match(qe) || []; (t = o[i++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = G(this)),
                  t && Oe.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || e === !1 ? "" : Oe.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + V(G(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var Tt = /\r/g;
  ge.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      {
        if (arguments.length)
          return (
            (i = ge.isFunction(e)),
            this.each(function (n) {
              var r;
              1 === this.nodeType &&
                ((r = i ? e.call(this, n, ge(this).val()) : e),
                null == r
                  ? (r = "")
                  : "number" == typeof r
                  ? (r += "")
                  : Array.isArray(r) &&
                    (r = ge.map(r, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (t =
                  ge.valHooks[this.type] ||
                  ge.valHooks[this.nodeName.toLowerCase()]),
                (t && "set" in t && void 0 !== t.set(this, r, "value")) ||
                  (this.value = r));
            })
          );
        if (r)
          return (
            (t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(r, "value"))
              ? n
              : ((n = r.value),
                "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)
          );
      }
    },
  }),
    ge.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ge.find.attr(e, "value");
            return null != t ? t : V(ge.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              u = s ? null : [],
              c = s ? a + 1 : o.length;
            for (i = a < 0 ? c : s ? a : 0; i < c; i++)
              if (
                ((n = o[i]),
                (n.selected || i === a) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !r(n.parentNode, "optgroup")))
              ) {
                if (((t = ge(n).val()), s)) return t;
                u.push(t);
              }
            return u;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = ge.makeArray(t), a = r.length;
              a--;

            )
              (i = r[a]),
                (i.selected = ge.inArray(ge.valHooks.option.get(i), o) > -1) &&
                  (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ge.each(["radio", "checkbox"], function () {
      (ge.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = ge.inArray(ge(e).val(), t) > -1);
        },
      }),
        pe.checkOn ||
          (ge.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var kt = /^(?:focusinfocus|focusoutblur)$/;
  ge.extend(ge.event, {
    trigger: function (t, n, i, r) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        d = [i || ne],
        p = le.call(t, "type") ? t.type : t,
        h = le.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = s = i = i || ne),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !kt.test(p + ge.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((h = p.split(".")), (p = h.shift()), h.sort()),
          (c = p.indexOf(":") < 0 && "on" + p),
          (t = t[ge.expando] ? t : new ge.Event(p, "object" == typeof t && t)),
          (t.isTrigger = r ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : ge.makeArray(n, [t])),
          (f = ge.event.special[p] || {}),
          r || !f.trigger || f.trigger.apply(i, n) !== !1))
      ) {
        if (!r && !f.noBubble && !ge.isWindow(i)) {
          for (
            u = f.delegateType || p, kt.test(u + p) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (s = a);
          s === (i.ownerDocument || ne) &&
            d.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? u : f.bindType || p),
            (l = (Oe.get(a, "events") || {})[t.type] && Oe.get(a, "handle")),
            l && l.apply(a, n),
            (l = c && a[c]),
            l &&
              l.apply &&
              Fe(a) &&
              ((t.result = l.apply(a, n)),
              t.result === !1 && t.preventDefault());
        return (
          (t.type = p),
          r ||
            t.isDefaultPrevented() ||
            (f._default && f._default.apply(d.pop(), n) !== !1) ||
            !Fe(i) ||
            (c &&
              ge.isFunction(i[p]) &&
              !ge.isWindow(i) &&
              ((s = i[c]),
              s && (i[c] = null),
              (ge.event.triggered = p),
              i[p](),
              (ge.event.triggered = void 0),
              s && (i[c] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = ge.extend(new ge.Event(), n, { type: e, isSimulated: !0 });
      ge.event.trigger(i, null, t);
    },
  }),
    ge.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ge.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ge.event.trigger(e, t, n, !0);
      },
    }),
    ge.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        ge.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    ge.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (pe.focusin = "onfocusin" in e),
    pe.focusin ||
      ge.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          ge.event.simulate(t, e.target, ge.event.fix(e));
        };
        ge.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              r = Oe.access(i, t);
            r || i.addEventListener(e, n, !0), Oe.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              r = Oe.access(i, t) - 1;
            r
              ? Oe.access(i, t, r)
              : (i.removeEventListener(e, n, !0), Oe.remove(i, t));
          },
        };
      });
  var Et = e.location,
    At = ge.now(),
    St = /\?/;
  ge.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (i) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        ge.error("Invalid XML: " + t),
      n
    );
  };
  var Nt = /\[\]$/,
    Dt = /\r?\n/g,
    jt = /^(?:submit|button|image|reset|file)$/i,
    qt = /^(?:input|select|textarea|keygen)/i;
  (ge.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = ge.isFunction(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !ge.isPlainObject(e)))
      ge.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Y(n, e[n], t, r);
    return i.join("&");
  }),
    ge.fn.extend({
      serialize: function () {
        return ge.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ge.prop(this, "elements");
          return e ? ge.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ge(this).is(":disabled") &&
              qt.test(this.nodeName) &&
              !jt.test(e) &&
              (this.checked || !Ue.test(e))
            );
          })
          .map(function (e, t) {
            var n = ge(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ge.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var $t = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Pt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    Rt = {},
    It = {},
    Wt = "*/".concat("*"),
    Bt = ne.createElement("a");
  (Bt.href = Et.href),
    ge.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal: Ot.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Wt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ge.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e);
      },
      ajaxPrefilter: K(Rt),
      ajaxTransport: K(It),
      ajax: function (t, n) {
        function i(t, n, i, s) {
          var c,
            d,
            p,
            b,
            w,
            C = n;
          l ||
            ((l = !0),
            u && e.clearTimeout(u),
            (r = void 0),
            (a = s || ""),
            (T.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            i && (b = Z(h, T, i)),
            (b = ee(h, b, T, c)),
            c
              ? (h.ifModified &&
                  ((w = T.getResponseHeader("Last-Modified")),
                  w && (ge.lastModified[o] = w),
                  (w = T.getResponseHeader("etag")),
                  w && (ge.etag[o] = w)),
                204 === t || "HEAD" === h.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = b.state), (d = b.data), (p = b.error), (c = !p)))
              : ((p = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || C) + ""),
            c ? y.resolveWith(g, [d, C, T]) : y.rejectWith(g, [T, C, p]),
            T.statusCode(x),
            (x = void 0),
            f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? d : p]),
            v.fireWith(g, [T, C]),
            f &&
              (m.trigger("ajaxComplete", [T, h]),
              --ge.active || ge.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var r,
          o,
          a,
          s,
          u,
          c,
          l,
          f,
          d,
          p,
          h = ge.ajaxSetup({}, n),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
          y = ge.Deferred(),
          v = ge.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          w = {},
          C = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (l) {
                if (!s)
                  for (s = {}; (t = Ft.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return l ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == l &&
                  ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == l && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (l) T.always(e[T.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return r && r.abort(t), i(0, t), this;
            },
          };
        if (
          (y.promise(T),
          (h.url = ((t || h.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(qe) || [""]),
          null == h.crossDomain)
        ) {
          c = ne.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host);
          } catch (k) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = ge.param(h.data, h.traditional)),
          Q(Rt, h, n, T),
          l)
        )
          return T;
        (f = ge.event && h.global),
          f && 0 === ge.active++ && ge.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Pt.test(h.type)),
          (o = h.url.replace(Lt, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (h.data = h.data.replace($t, "+"))
            : ((p = h.url.slice(o.length)),
              h.data &&
                ((o += (St.test(o) ? "&" : "?") + h.data), delete h.data),
              h.cache === !1 &&
                ((o = o.replace(Ht, "$1")),
                (p = (St.test(o) ? "&" : "?") + "_=" + At++ + p)),
              (h.url = o + p)),
          h.ifModified &&
            (ge.lastModified[o] &&
              T.setRequestHeader("If-Modified-Since", ge.lastModified[o]),
            ge.etag[o] && T.setRequestHeader("If-None-Match", ge.etag[o])),
          ((h.data && h.hasContent && h.contentType !== !1) || n.contentType) &&
            T.setRequestHeader("Content-Type", h.contentType),
          T.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
              : h.accepts["*"]
          );
        for (d in h.headers) T.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (h.beforeSend.call(g, T, h) === !1 || l))
          return T.abort();
        if (
          ((C = "abort"),
          v.add(h.complete),
          T.done(h.success),
          T.fail(h.error),
          (r = Q(It, h, n, T)))
        ) {
          if (((T.readyState = 1), f && m.trigger("ajaxSend", [T, h]), l))
            return T;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              T.abort("timeout");
            }, h.timeout));
          try {
            (l = !1), r.send(b, i);
          } catch (k) {
            if (l) throw k;
            i(-1, k);
          }
        } else i(-1, "No Transport");
        return T;
      },
      getJSON: function (e, t, n) {
        return ge.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ge.get(e, void 0, t, "script");
      },
    }),
    ge.each(["get", "post"], function (e, t) {
      ge[t] = function (e, n, i, r) {
        return (
          ge.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
          ge.ajax(
            ge.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              ge.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (ge._evalUrl = function (e) {
      return ge.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    ge.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (ge.isFunction(e) && (e = e.call(this[0])),
            (t = ge(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return ge.isFunction(e)
          ? this.each(function (t) {
              ge(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = ge(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ge.isFunction(e);
        return this.each(function (n) {
          ge(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ge(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ge.expr.pseudos.hidden = function (e) {
      return !ge.expr.pseudos.visible(e);
    }),
    (ge.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ge.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var zt = { 0: 200, 1223: 204 },
    _t = ge.ajaxSettings.xhr();
  (pe.cors = !!_t && "withCredentials" in _t),
    (pe.ajax = _t = !!_t),
    ge.ajaxTransport(function (t) {
      var n, i;
      if (pe.cors || (_t && !t.crossDomain))
        return {
          send: function (r, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                r["X-Requested-With"] ||
                (r["X-Requested-With"] = "XMLHttpRequest");
            for (a in r) s.setRequestHeader(a, r[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        zt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (u) {
              if (n) throw u;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    ge.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ge.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ge.globalEval(e), e;
        },
      },
    }),
    ge.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ge.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, r) {
            (t = ge("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              ne.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Xt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  ge.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || ge.expando + "_" + At++;
      return (this[e] = !0), e;
    },
  }),
    ge.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        a,
        s =
          t.jsonp !== !1 &&
          (Ut.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            ge.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Ut, "$1" + r))
            : t.jsonp !== !1 &&
              (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return a || ge.error(r + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            a = arguments;
          }),
          i.always(function () {
            void 0 === o ? ge(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(r)),
              a && ge.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (pe.createHTMLDocument = (function () {
      var e = ne.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (ge.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, r, o;
      return (
        t ||
          (pe.createHTMLDocument
            ? ((t = ne.implementation.createHTMLDocument("")),
              (i = t.createElement("base")),
              (i.href = ne.location.href),
              t.head.appendChild(i))
            : (t = ne)),
        (r = ke.exec(e)),
        (o = !n && []),
        r
          ? [t.createElement(r[1])]
          : ((r = b([e], t, o)),
            o && o.length && ge(o).remove(),
            ge.merge([], r.childNodes))
      );
    }),
    (ge.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((i = V(e.slice(s))), (e = e.slice(0, s))),
        ge.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        a.length > 0 &&
          ge
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    ge.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ge.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (ge.expr.pseudos.animated = function (e) {
      return ge.grep(ge.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (ge.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          u,
          c,
          l = ge.css(e, "position"),
          f = ge(e),
          d = {};
        "static" === l && (e.style.position = "relative"),
          (s = f.offset()),
          (o = ge.css(e, "top")),
          (u = ge.css(e, "left")),
          (c =
            ("absolute" === l || "fixed" === l) &&
            (o + u).indexOf("auto") > -1),
          c
            ? ((i = f.position()), (a = i.top), (r = i.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(u) || 0)),
          ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + r),
          "using" in t ? t.using.call(e, d) : f.css(d);
      },
    }),
    ge.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                ge.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i,
          r,
          o = this[0];
        if (o)
          return o.getClientRects().length
            ? ((i = o.getBoundingClientRect()),
              (t = o.ownerDocument),
              (n = t.documentElement),
              (r = t.defaultView),
              {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft,
              })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === ge.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                r(e[0], "html") || (i = e.offset()),
                (i = {
                  top: i.top + ge.css(e[0], "borderTopWidth", !0),
                  left: i.left + ge.css(e[0], "borderLeftWidth", !0),
                })),
            {
              top: t.top - i.top - ge.css(n, "marginTop", !0),
              left: t.left - i.left - ge.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === ge.css(e, "position");

          )
            e = e.offsetParent;
          return e || Qe;
        });
      },
    }),
    ge.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        ge.fn[e] = function (i) {
          return He(
            this,
            function (e, i, r) {
              var o;
              return (
                ge.isWindow(e)
                  ? (o = e)
                  : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r
                  ? o
                    ? o[t]
                    : e[i]
                  : void (o
                      ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                      : (e[i] = r))
              );
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    ge.each(["top", "left"], function (e, t) {
      ge.cssHooks[t] = L(pe.pixelPosition, function (e, n) {
        if (n)
          return (n = $(e, t)), st.test(n) ? ge(e).position()[t] + "px" : n;
      });
    }),
    ge.each({ Height: "height", Width: "width" }, function (e, t) {
      ge.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          ge.fn[i] = function (r, o) {
            var a = arguments.length && (n || "boolean" != typeof r),
              s = n || (r === !0 || o === !0 ? "margin" : "border");
            return He(
              this,
              function (t, n, r) {
                var o;
                return ge.isWindow(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === r
                  ? ge.css(t, n, s)
                  : ge.style(t, n, r, s);
              },
              t,
              a ? r : void 0,
              a
            );
          };
        }
      );
    }),
    ge.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (ge.holdReady = function (e) {
      e ? ge.readyWait++ : ge.ready(!0);
    }),
    (ge.isArray = Array.isArray),
    (ge.parseJSON = JSON.parse),
    (ge.nodeName = r),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ge;
      });
  var Vt = e.jQuery,
    Gt = e.$;
  return (
    (ge.noConflict = function (t) {
      return (
        e.$ === ge && (e.$ = Gt), t && e.jQuery === ge && (e.jQuery = Vt), ge
      );
    }),
    t || (e.jQuery = e.$ = ge),
    ge
  );
}),
  (function (e, t) {
    if (!((window && window.document) || (e && e.document)))
      throw new Error("ImageMap requires a window with a document");
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports && "string" != typeof exports.nodeName
      ? (module.exports = t(require("jquery")))
      : (e.ImageMap = t(e.jQuery));
  })(this || window, function (e) {
    "use strict";
    var t = function (e) {
      var n = this;
      return n
        ? ((n.selector =
            e instanceof Array
              ? e
              : [].slice.call(document.querySelectorAll(e))),
          (n.update = function () {
            n.selector.forEach(function (e) {
              var t = e,
                n = document.createElement("img");
              "undefined" != typeof t.getAttribute("usemap") &&
                (n.addEventListener("load", function () {
                  var e = new Image();
                  e.src = t.getAttribute("src");
                  var n = t.getAttribute("width") || e.width,
                    i = t.getAttribute("height") || e.height,
                    r = t.offsetWidth / 100,
                    o = t.offsetHeight / 100,
                    a = t.getAttribute("usemap").replace("#", ""),
                    s = "coords";
                  [].forEach.call(
                    document.querySelectorAll('map[name="' + a + '"] area'),
                    function (e) {
                      var t = e,
                        a = (t.dataset[s] = t.dataset[s] || t.getAttribute(s)),
                        u = a.split(","),
                        c = Array.apply(null, Array(u.length));
                      c.forEach(function (e, t) {
                        c[t] =
                          t % 2 === 0
                            ? Number((u[t] / n) * 100 * r)
                            : Number((u[t] / i) * 100 * o);
                      }),
                        t.setAttribute(s, c.toString());
                    }
                  );
                }),
                n.setAttribute("src", t.getAttribute("src")));
            });
          })(),
          window.addEventListener("resize", n.update),
          n)
        : new t(e);
    };
    return (
      e &&
        e.fn &&
        (e.fn.imageMap = function () {
          var e = this;
          return new t(e.toArray());
        }),
      (t.ImageMap = t),
      t
    );
  });
var ua = navigator.userAgent,
  mywindow = $(window),
  basewidth = 1200,
  baseh1 = 110,
  audioon = !0,
  wwidth = 1200,
  wheight = 800;
$(document).ready(function () {
  $(window).width() <= 600 && $(".background.video video").remove();
}),
  $(window).on("load", function () {
    windowSize(),
      initDynamicBackgrounds(),
      retrieveAudio(),
      ("undefined" == typeof $(".zoom-image").first().magnificPopup &&
        "undefined" == typeof $(".popup-video").first().magnificPopup) ||
        ($(".zoom-image").magnificPopup({
          type: "image",
          mainClass: "mfp-with-zoom",
          zoom: {
            enabled: !0,
            duration: 200,
            easing: "ease-in-out",
            opener: function (e) {
              return e.is("img") ? e : e.find("img");
            },
          },
        }),
        $(".popup-video").magnificPopup({
          type: "iframe",
          mainClass: "mfp-with-zoom",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
          callbacks: {
            open: function () {
              $("video, audio").trigger("pause");
            },
          },
        })),
      checkHash(),
      $(window).resize(function () {
        windowSize();
      });
  }),
  "undefined" != typeof Pace &&
    Pace.on("hide", function () {
      animateHomeDictionary();
    }),
  $("div[data-image-src], section[data-image-src]").each(function () {
    var e = $(this).attr("data-image-src");
    "undefined" != typeof e &&
      e !== !1 &&
      $(this).css("background-image", "url(" + e + ")");
  }),
  $("button.godown").bind(
    "click keypress",
    handleClickKeyboard(function (e) {
      var t = e.closest("section").next("section"),
        n = ($(t), $(t).offset().top);
      $("body, html").animate({ scrollTop: n }, 600);
    })
  ),
  $("header button.menusidebar").bind(
    "click keypress",
    handleClickKeyboard(function (e) {
      var t = $("header nav.main");
      $("body").hasClass("menusidebar")
        ? ($("body").removeClass("menusidebar"), t.attr("aria-hidden", "true"))
        : ($("body").addClass("menusidebar"), t.attr("aria-hidden", "false"));
    })
  ),
  $(document).bind("click", function (e) {
    if (
      !$(e.target).closest("header").length &&
      $("body").hasClass("menusidebar")
    ) {
      var t = $("header.main-header .nav-drawer");
      $("body").removeClass("menusidebar"), t.attr("aria-hidden", "true");
    }
  }),
  $("button.action-audio").bind(
    "click keypress",
    handleClickKeyboard(function (e) {
      e.hasClass("icon-audio-on")
        ? (e.removeClass("icon-audio-on").addClass("icon-audio-off"),
          e.find("span").text("Activar sonido"))
        : (e.removeClass("icon-audio-off").addClass("icon-audio-on"),
          e.find("span").text("Desactivar sonido")),
        toggleAudio();
    })
  ),
  $("section.home button.skip").bind(
    "click keypress",
    handleClickKeyboard(function (e) {
      e.hide(), $("section.home .definition").hide();
      var t = $("section.home .welcome");
      t.removeClass("a-hidden"),
        t
          .find("a.logo, h1, .item .img, .item p, .item h2")
          .css("transition", "all 0s ease 0s")
          .addClass("done"),
        $("audio").trigger("pause"),
        $("audio").remove();
    })
  ),
  $(window).scroll(function () {
    if ($("body").hasClass("dynamic")) {
      var e = $(window).scrollTop() + wheight - wheight / 4;
      $("section.content").each(function () {
        var t = $(this).offset().top,
          n = t + $(this)[0].offsetHeight;
        if (e >= t && e <= n && "false" === $(this).data("is-active")) {
          var i = $("section.content").filter(function () {
            return "true" === $(this).data("is-active");
          });
          i.data("is-active", "false"),
            i.find("div.background").removeClass("active"),
            i.find("video").trigger("pause"),
            i.find("audio").trigger("pause"),
            $(this).data("is-active", "true"),
            $(this).hasClass("dynamic-background") &&
              ($(this).find("div.background").addClass("active"),
              $(this)
                .delay(150)
                .find("div.background.video video")
                .first()
                .trigger("play")),
            $(this)
              .delay(150)
              .find("audio:eq(0)")
              .prop("currentTime", 0)
              .trigger("play");
        }
      });
    }
  });
