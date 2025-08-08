import { w as St, d as ei, r as Er } from "./v5_18HdE.js";
import { Y as ri } from "./DDUrsvEp.js";
function vt(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function ii(a, t) {
  (a.prototype = Object.create(t.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = t);
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var at = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  ie = { duration: 0.5, overwrite: !1, delay: 0 },
  fr,
  q,
  I,
  gt = 1e8,
  K = 1 / gt,
  Qe = Math.PI * 2,
  dn = Qe / 4,
  hn = 0,
  ni = Math.sqrt,
  _n = Math.cos,
  pn = Math.sin,
  Y = function (t) {
    return typeof t == "string";
  },
  X = function (t) {
    return typeof t == "function";
  },
  Tt = function (t) {
    return typeof t == "number";
  },
  dr = function (t) {
    return typeof t > "u";
  },
  bt = function (t) {
    return typeof t == "object";
  },
  J = function (t) {
    return t !== !1;
  },
  hr = function () {
    return typeof window < "u";
  },
  Ce = function (t) {
    return X(t) || Y(t);
  },
  si =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Q = Array.isArray,
  $e = /(?:-?\.?\d|\.)+/gi,
  oi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Ht = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ve = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ai = /[+-]=-?[.\d]+/,
  li = /[^,'"\[\]\s]+/gi,
  mn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  L,
  _t,
  He,
  _r,
  lt = {},
  Ae = {},
  ui,
  ci = function (t) {
    return (Ae = ne(t, lt)) && it;
  },
  pr = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  be = function (t, e) {
    return !e && console.warn(t);
  },
  fi = function (t, e) {
    return (t && (lt[t] = e) && Ae && (Ae[t] = e)) || lt;
  },
  ye = function () {
    return 0;
  },
  gn = { suppressEvents: !0, isStart: !0, kill: !1 },
  Pe = { suppressEvents: !0, kill: !1 },
  bn = { suppressEvents: !0 },
  mr = {},
  Rt = [],
  Ze = {},
  di,
  nt = {},
  Be = {},
  Rr = 30,
  Oe = [],
  gr = "",
  br = function (t) {
    var e = t[0],
      r,
      i;
    if ((bt(e) || X(e) || (t = [t]), !(r = (e._gsap || {}).harness))) {
      for (i = Oe.length; i-- && !Oe[i].targetTest(e); );
      r = Oe[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new Li(t[i], r)))) ||
        t.splice(i, 1);
    return t;
  },
  Wt = function (t) {
    return t._gsap || br(ft(t))[0]._gsap;
  },
  hi = function (t, e, r) {
    return (r = t[e]) && X(r)
      ? t[e]()
      : (dr(r) && t.getAttribute && t.getAttribute(e)) || r;
  },
  tt = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  G = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  W = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  Jt = function (t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
    );
  },
  yn = function (t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  },
  Ee = function () {
    var t = Rt.length,
      e = Rt.slice(0),
      r,
      i;
    for (Ze = {}, Rt.length = 0, r = 0; r < t; r++)
      (i = e[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  yr = function (t) {
    return !!(t._initted || t._startAt || t.add);
  },
  _i = function (t, e, r, i) {
    Rt.length && !q && Ee(),
      t.render(e, r, !!(q && e < 0 && yr(t))),
      Rt.length && !q && Ee();
  },
  pi = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(li).length < 2
      ? e
      : Y(t)
      ? t.trim()
      : t;
  },
  mi = function (t) {
    return t;
  },
  ut = function (t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  },
  xn = function (t) {
    return function (e, r) {
      for (var i in r)
        i in e || (i === "duration" && t) || i === "ease" || (e[i] = r[i]);
    };
  },
  ne = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  },
  zr = function a(t, e) {
    for (var r in e)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (t[r] = bt(e[r]) ? a(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  },
  Re = function (t, e) {
    var r = {},
      i;
    for (i in t) i in e || (r[i] = t[i]);
    return r;
  },
  pe = function (t) {
    var e = t.parent || L,
      r = t.keyframes ? xn(Q(t.keyframes)) : ut;
    if (J(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  vn = function (t, e) {
    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
    return r < 0;
  },
  gi = function (t, e, r, i, n) {
    var s = t[i],
      o;
    if (n) for (o = e[n]; s && s[n] > o; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)),
      e._next ? (e._next._prev = e) : (t[i] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  },
  Fe = function (t, e, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[r] === e && (t[r] = s),
      s ? (s._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  },
  Dt = function (t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  },
  Yt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  },
  wn = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  Je = function (t, e, r, i) {
    return (
      t._startAt &&
      (q
        ? t._startAt.revert(Pe)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, i))
    );
  },
  Tn = function a(t) {
    return !t || (t._ts && a(t.parent));
  },
  Dr = function (t) {
    return t._repeat ? se(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  se = function (t, e) {
    var r = Math.floor((t = W(t / e)));
    return t && r === t ? r - 1 : r;
  },
  ze = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Ne = function (t) {
    return (t._end = W(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || K) || 0)
    ));
  },
  Xe = function (t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = W(
          r._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Ne(t),
        r._dirty || Yt(r, t)),
      t
    );
  },
  bi = function (t, e) {
    var r;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((r = ze(t.rawTime(), e)),
        (!e._dur || Se(0, e.totalDuration(), r) - e._tTime > K) &&
          e.render(r, !0)),
      Yt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -1e-8;
    }
  },
  pt = function (t, e, r, i) {
    return (
      e.parent && Dt(e),
      (e._start = W(
        (Tt(r) ? r : r || t !== L ? ct(t, r, e) : t._time) + e._delay
      )),
      (e._end = W(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      gi(t, e, "_first", "_last", t._sort ? "_start" : 0),
      tr(e) || (t._recent = e),
      i || bi(t, e),
      t._ts < 0 && Xe(t, t._tTime),
      t
    );
  },
  yi = function (t, e) {
    return (
      (lt.ScrollTrigger || pr("scrollTrigger", e)) &&
      lt.ScrollTrigger.create(e, t)
    );
  },
  xi = function (t, e, r, i, n) {
    if ((vr(t, e, n), !t._initted)) return 1;
    if (
      !r &&
      t._pt &&
      !q &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      di !== st.frame
    )
      return Rt.push(t), (t._lazy = [n, i]), 1;
  },
  kn = function a(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
  },
  tr = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  Sn = function (t, e, r, i) {
    var n = t.ratio,
      s =
        e < 0 ||
        (!e &&
          ((!t._start && kn(t) && !(!t._initted && tr(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !tr(t))))
          ? 0
          : 1,
      o = t._rDelay,
      l = 0,
      u,
      c,
      d;
    if (
      (o &&
        t._repeat &&
        ((l = Se(0, t._tDur, e)),
        (c = se(l, o)),
        t._yoyo && c & 1 && (s = 1 - s),
        c !== se(t._tTime, o) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || q || i || t._zTime === K || (!e && t._zTime))
    ) {
      if (!t._initted && xi(t, e, i, r, l)) return;
      for (
        d = t._zTime,
          t._zTime = e || (r ? K : 0),
          r || (r = e && !d),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = l,
          u = t._pt;
        u;

      )
        u.r(s, u.d), (u = u._next);
      e < 0 && Je(t, e, r, !0),
        t._onUpdate && !r && ot(t, "onUpdate"),
        l && t._repeat && !r && t.parent && ot(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === s &&
          (s && Dt(t, 1),
          !r &&
            !q &&
            (ot(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  },
  Cn = function (t, e, r) {
    var i;
    if (r > e)
      for (i = t._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > e) return i;
        i = i._next;
      }
    else
      for (i = t._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < e) return i;
        i = i._prev;
      }
  },
  oe = function (t, e, r, i) {
    var n = t._repeat,
      s = W(e) || 0,
      o = t._tTime / t._tDur;
    return (
      o && !i && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : W(s * (n + 1) + t._rDelay * n)) : s),
      o > 0 && !i && Xe(t, (t._tTime = t._tDur * o)),
      t.parent && Ne(t),
      r || Yt(t.parent, t),
      t
    );
  },
  Ir = function (t) {
    return t instanceof Z ? Yt(t) : oe(t, t._dur);
  },
  Pn = { _start: 0, endTime: ye, totalDuration: ye },
  ct = function a(t, e, r) {
    var i = t.labels,
      n = t._recent || Pn,
      s = t.duration() >= gt ? n.endTime(!1) : t._dur,
      o,
      l,
      u;
    return Y(e) && (isNaN(e) || e in i)
      ? ((l = e.charAt(0)),
        (u = e.substr(-1) === "%"),
        (o = e.indexOf("=")),
        l === "<" || l === ">"
          ? (o >= 0 && (e = e.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (u ? (o < 0 ? n : r).totalDuration() / 100 : 1))
          : o < 0
          ? (e in i || (i[e] = s), i[e])
          : ((l = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
            u && r && (l = (l / 100) * (Q(r) ? r[0] : r).totalDuration()),
            o > 1 ? a(t, e.substr(0, o - 1), r) + l : s + l))
      : e == null
      ? s
      : +e;
  },
  me = function (t, e, r) {
    var i = Tt(e[1]),
      n = (i ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[n],
      o,
      l;
    if ((i && (s.duration = e[1]), (s.parent = r), t)) {
      for (o = s, l = r; l && !("immediateRender" in o); )
        (o = l.vars.defaults || {}), (l = J(l.vars.inherit) && l.parent);
      (s.immediateRender = J(o.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]);
    }
    return new U(e[0], s, e[n + 1]);
  },
  Ft = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  Se = function (t, e, r) {
    return r < t ? t : r > e ? e : r;
  },
  j = function (t, e) {
    return !Y(t) || !(e = mn.exec(t)) ? "" : e[1];
  },
  On = function (t, e, r) {
    return Ft(r, function (i) {
      return Se(t, e, i);
    });
  },
  er = [].slice,
  vi = function (t, e) {
    return (
      t &&
      bt(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && bt(t[0]))) &&
      !t.nodeType &&
      t !== _t
    );
  },
  Mn = function (t, e, r) {
    return (
      r === void 0 && (r = []),
      t.forEach(function (i) {
        var n;
        return (Y(i) && !e) || vi(i, 1)
          ? (n = r).push.apply(n, ft(i))
          : r.push(i);
      }) || r
    );
  },
  ft = function (t, e, r) {
    return I && !e && I.selector
      ? I.selector(t)
      : Y(t) && !r && (He || !ae())
      ? er.call((e || _r).querySelectorAll(t), 0)
      : Q(t)
      ? Mn(t, r)
      : vi(t)
      ? er.call(t, 0)
      : t
      ? [t]
      : [];
  },
  rr = function (t) {
    return (
      (t = ft(t)[0] || be("Invalid scope") || {}),
      function (e) {
        var r = t.current || t.nativeElement || t;
        return ft(
          e,
          r.querySelectorAll
            ? r
            : r === t
            ? be("Invalid scope") || _r.createElement("div")
            : t
        );
      }
    );
  },
  wi = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ti = function (t) {
    if (X(t)) return t;
    var e = bt(t) ? t : { each: t },
      r = qt(e.ease),
      i = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      o = i > 0 && i < 1,
      l = isNaN(i) || o,
      u = e.axis,
      c = i,
      d = i;
    return (
      Y(i)
        ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !o && l && ((c = i[0]), (d = i[1])),
      function (h, _, m) {
        var f = (m || e).length,
          p = s[f],
          g,
          b,
          v,
          x,
          y,
          T,
          k,
          S,
          w;
        if (!p) {
          if (((w = e.grid === "auto" ? 0 : (e.grid || [1, gt])[1]), !w)) {
            for (
              k = -1e8;
              k < (k = m[w++].getBoundingClientRect().left) && w < f;

            );
            w < f && w--;
          }
          for (
            p = s[f] = [],
              g = l ? Math.min(w, f) * c - 0.5 : i % w,
              b = w === gt ? 0 : l ? (f * d) / w - 0.5 : (i / w) | 0,
              k = 0,
              S = gt,
              T = 0;
            T < f;
            T++
          )
            (v = (T % w) - g),
              (x = b - ((T / w) | 0)),
              (p[T] = y = u ? Math.abs(u === "y" ? x : v) : ni(v * v + x * x)),
              y > k && (k = y),
              y < S && (S = y);
          i === "random" && wi(p),
            (p.max = k - S),
            (p.min = S),
            (p.v = f =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (w > f
                    ? f - 1
                    : u
                    ? u === "y"
                      ? f / w
                      : w
                    : Math.max(w, f / w)) ||
                0) * (i === "edges" ? -1 : 1)),
            (p.b = f < 0 ? n - f : n),
            (p.u = j(e.amount || e.each) || 0),
            (r = r && f < 0 ? zi(r) : r);
        }
        return (
          (f = (p[h] - p.min) / p.max || 0), W(p.b + (r ? r(f) : f) * p.v) + p.u
        );
      }
    );
  },
  ir = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (r) {
      var i = W(Math.round(parseFloat(r) / t) * t * e);
      return (i - (i % 1)) / e + (Tt(r) ? 0 : j(r));
    };
  },
  ki = function (t, e) {
    var r = Q(t),
      i,
      n;
    return (
      !r &&
        bt(t) &&
        ((i = r = t.radius || gt),
        t.values
          ? ((t = ft(t.values)), (n = !Tt(t[0])) && (i *= i))
          : (t = ir(t.increment))),
      Ft(
        e,
        r
          ? X(t)
            ? function (s) {
                return (n = t(s)), Math.abs(n - s) <= i ? n : s;
              }
            : function (s) {
                for (
                  var o = parseFloat(n ? s.x : s),
                    l = parseFloat(n ? s.y : 0),
                    u = gt,
                    c = 0,
                    d = t.length,
                    h,
                    _;
                  d--;

                )
                  n
                    ? ((h = t[d].x - o), (_ = t[d].y - l), (h = h * h + _ * _))
                    : (h = Math.abs(t[d] - o)),
                    h < u && ((u = h), (c = d));
                return (
                  (c = !i || u <= i ? t[c] : s),
                  n || c === s || Tt(s) ? c : c + j(s)
                );
              }
          : ir(t)
      )
    );
  },
  Si = function (t, e, r, i) {
    return Ft(Q(t) ? !e : r === !0 ? !!(r = 0) : !i, function () {
      return Q(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) *
                r *
                i
            ) / i;
    });
  },
  An = function () {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return function (i) {
      return e.reduce(function (n, s) {
        return s(n);
      }, i);
    };
  },
  En = function (t, e) {
    return function (r) {
      return t(parseFloat(r)) + (e || j(r));
    };
  },
  Rn = function (t, e, r) {
    return Pi(t, e, 0, 1, r);
  },
  Ci = function (t, e, r) {
    return Ft(r, function (i) {
      return t[~~e(i)];
    });
  },
  zn = function a(t, e, r) {
    var i = e - t;
    return Q(t)
      ? Ci(t, a(0, t.length), e)
      : Ft(r, function (n) {
          return ((i + ((n - t) % i)) % i) + t;
        });
  },
  Dn = function a(t, e, r) {
    var i = e - t,
      n = i * 2;
    return Q(t)
      ? Ci(t, a(0, t.length - 1), e)
      : Ft(r, function (s) {
          return (s = (n + ((s - t) % n)) % n || 0), t + (s > i ? n - s : s);
        });
  },
  xe = function (t) {
    for (var e = 0, r = "", i, n, s, o; ~(i = t.indexOf("random(", e)); )
      (s = t.indexOf(")", i)),
        (o = t.charAt(i + 7) === "["),
        (n = t.substr(i + 7, s - i - 7).match(o ? li : $e)),
        (r +=
          t.substr(e, i - e) + Si(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (e = s + 1);
    return r + t.substr(e, t.length - e);
  },
  Pi = function (t, e, r, i, n) {
    var s = e - t,
      o = i - r;
    return Ft(n, function (l) {
      return r + (((l - t) / s) * o || 0);
    });
  },
  In = function a(t, e, r, i) {
    var n = isNaN(t + e)
      ? 0
      : function (_) {
          return (1 - _) * t + _ * e;
        };
    if (!n) {
      var s = Y(t),
        o = {},
        l,
        u,
        c,
        d,
        h;
      if ((r === !0 && (i = 1) && (r = null), s))
        (t = { p: t }), (e = { p: e });
      else if (Q(t) && !Q(e)) {
        for (c = [], d = t.length, h = d - 2, u = 1; u < d; u++)
          c.push(a(t[u - 1], t[u]));
        d--,
          (n = function (m) {
            m *= d;
            var f = Math.min(h, ~~m);
            return c[f](m - f);
          }),
          (r = e);
      } else i || (t = ne(Q(t) ? [] : {}, t));
      if (!c) {
        for (l in e) xr.call(o, t, l, "get", e[l]);
        n = function (m) {
          return kr(m, o) || (s ? t.p : t);
        };
      }
    }
    return Ft(r, n);
  },
  Lr = function (t, e, r) {
    var i = t.labels,
      n = gt,
      s,
      o,
      l;
    for (s in i)
      (o = i[s] - e),
        o < 0 == !!r && o && n > (o = Math.abs(o)) && ((l = s), (n = o));
    return l;
  },
  ot = function (t, e, r) {
    var i = t.vars,
      n = i[e],
      s = I,
      o = t._ctx,
      l,
      u,
      c;
    if (n)
      return (
        (l = i[e + "Params"]),
        (u = i.callbackScope || t),
        r && Rt.length && Ee(),
        o && (I = o),
        (c = l ? n.apply(u, l) : n.call(u)),
        (I = s),
        c
      );
  },
  he = function (t) {
    return (
      Dt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!q),
      t.progress() < 1 && ot(t, "onInterrupt"),
      t
    );
  },
  Zt,
  Oi = [],
  Mi = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), hr() || t.headless)) {
        var e = t.name,
          r = X(t),
          i =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: ye,
            render: kr,
            add: xr,
            kill: Hn,
            modifier: $n,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: Tr,
            aliases: {},
            register: 0,
          };
        if ((ae(), t !== i)) {
          if (nt[e]) return;
          ut(i, ut(Re(t, n), s)),
            ne(i.prototype, ne(n, Re(t, s))),
            (nt[(i.prop = e)] = i),
            t.targetTest && (Oe.push(i), (mr[e] = 1)),
            (e =
              (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        fi(e, i), t.register && t.register(it, i, et);
      } else Oi.push(t);
  },
  R = 255,
  _e = {
    aqua: [0, R, R],
    lime: [0, R, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, R],
    navy: [0, 0, 128],
    white: [R, R, R],
    olive: [128, 128, 0],
    yellow: [R, R, 0],
    orange: [R, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [R, 0, 0],
    pink: [R, 192, 203],
    cyan: [0, R, R],
    transparent: [R, R, R, 0],
  },
  Ge = function (t, e, r) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : t * 3 < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        R +
        0.5) |
        0
    );
  },
  Ai = function (t, e, r) {
    var i = t ? (Tt(t) ? [t >> 16, (t >> 8) & R, t & R] : 0) : _e.black,
      n,
      s,
      o,
      l,
      u,
      c,
      d,
      h,
      _,
      m;
    if (!i) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), _e[t]))
        i = _e[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (o = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              o +
              o +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (i = parseInt(t.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & R, i & R, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (i = [t >> 16, (t >> 8) & R, t & R]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((i = m = t.match($e)), !e))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (n = c * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = Ge(l + 1 / 3, n, s)),
            (i[1] = Ge(l, n, s)),
            (i[2] = Ge(l - 1 / 3, n, s));
        else if (~t.indexOf("="))
          return (i = t.match(oi)), r && i.length < 4 && (i[3] = 1), i;
      } else i = t.match($e) || _e.transparent;
      i = i.map(Number);
    }
    return (
      e &&
        !m &&
        ((n = i[0] / R),
        (s = i[1] / R),
        (o = i[2] / R),
        (d = Math.max(n, s, o)),
        (h = Math.min(n, s, o)),
        (c = (d + h) / 2),
        d === h
          ? (l = u = 0)
          : ((_ = d - h),
            (u = c > 0.5 ? _ / (2 - d - h) : _ / (d + h)),
            (l =
              d === n
                ? (s - o) / _ + (s < o ? 6 : 0)
                : d === s
                ? (o - n) / _ + 2
                : (n - s) / _ + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  Ei = function (t) {
    var e = [],
      r = [],
      i = -1;
    return (
      t.split(zt).forEach(function (n) {
        var s = n.match(Ht) || [];
        e.push.apply(e, s), r.push((i += s.length + 1));
      }),
      (e.c = r),
      e
    );
  },
  Fr = function (t, e, r) {
    var i = "",
      n = (t + i).match(zt),
      s = e ? "hsla(" : "rgba(",
      o = 0,
      l,
      u,
      c,
      d;
    if (!n) return t;
    if (
      ((n = n.map(function (h) {
        return (
          (h = Ai(h, e, 1)) &&
          s +
            (e ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      r && ((c = Ei(t)), (l = r.c), l.join(i) !== c.c.join(i)))
    )
      for (u = t.replace(zt, "1").split(Ht), d = u.length - 1; o < d; o++)
        i +=
          u[o] +
          (~l.indexOf(o)
            ? n.shift() || s + "0,0,0,0)"
            : (c.length ? c : n.length ? n : r).shift());
    if (!u)
      for (u = t.split(zt), d = u.length - 1; o < d; o++) i += u[o] + n[o];
    return i + u[d];
  },
  zt = (function () {
    var a =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in _e) a += "|" + t + "\\b";
    return new RegExp(a + ")", "gi");
  })(),
  Ln = /hsl[a]?\(/,
  Ri = function (t) {
    var e = t.join(" "),
      r;
    if (((zt.lastIndex = 0), zt.test(e)))
      return (
        (r = Ln.test(e)),
        (t[1] = Fr(t[1], r)),
        (t[0] = Fr(t[0], r, Ei(t[1]))),
        !0
      );
  },
  ve,
  st = (function () {
    var a = Date.now,
      t = 500,
      e = 33,
      r = a(),
      i = r,
      n = 1e3 / 240,
      s = n,
      o = [],
      l,
      u,
      c,
      d,
      h,
      _,
      m = function f(p) {
        var g = a() - i,
          b = p === !0,
          v,
          x,
          y,
          T;
        if (
          ((g > t || g < 0) && (r += g - e),
          (i += g),
          (y = i - r),
          (v = y - s),
          (v > 0 || b) &&
            ((T = ++d.frame),
            (h = y - d.time * 1e3),
            (d.time = y = y / 1e3),
            (s += v + (v >= n ? 4 : n - v)),
            (x = 1)),
          b || (l = u(f)),
          x)
        )
          for (_ = 0; _ < o.length; _++) o[_](y, h, T, p);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (p) {
          return h / (1e3 / (p || 60));
        },
        wake: function () {
          ui &&
            (!He &&
              hr() &&
              ((_t = He = window),
              (_r = _t.document || {}),
              (lt.gsap = it),
              (_t.gsapVersions || (_t.gsapVersions = [])).push(it.version),
              ci(Ae || _t.GreenSockGlobals || (!_t.gsap && _t) || {}),
              Oi.forEach(Mi)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && d.sleep(),
            (u =
              c ||
              function (p) {
                return setTimeout(p, (s - d.time * 1e3 + 1) | 0);
              }),
            (ve = 1),
            m(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(l), (ve = 0), (u = ye);
        },
        lagSmoothing: function (p, g) {
          (t = p || 1 / 0), (e = Math.min(g || 33, t));
        },
        fps: function (p) {
          (n = 1e3 / (p || 240)), (s = d.time * 1e3 + n);
        },
        add: function (p, g, b) {
          var v = g
            ? function (x, y, T, k) {
                p(x, y, T, k), d.remove(v);
              }
            : p;
          return d.remove(p), o[b ? "unshift" : "push"](v), ae(), v;
        },
        remove: function (p, g) {
          ~(g = o.indexOf(p)) && o.splice(g, 1) && _ >= g && _--;
        },
        _listeners: o,
      }),
      d
    );
  })(),
  ae = function () {
    return !ve && st.wake();
  },
  M = {},
  Fn = /^[\d.\-M][\d.\-,\s]/,
  Nn = /["']/g,
  Xn = function (t) {
    for (
      var e = {},
        r = t.substr(1, t.length - 3).split(":"),
        i = r[0],
        n = 1,
        s = r.length,
        o,
        l,
        u;
      n < s;
      n++
    )
      (l = r[n]),
        (o = n !== s - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, o)),
        (e[i] = isNaN(u) ? u.replace(Nn, "").trim() : +u),
        (i = l.substr(o + 1).trim());
    return e;
  },
  Vn = function (t) {
    var e = t.indexOf("(") + 1,
      r = t.indexOf(")"),
      i = t.indexOf("(", e);
    return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
  },
  Bn = function (t) {
    var e = (t + "").split("("),
      r = M[e[0]];
    return r && e.length > 1 && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{") ? [Xn(e[1])] : Vn(t).split(",").map(pi)
        )
      : M._CE && Fn.test(t)
      ? M._CE("", t)
      : r;
  },
  zi = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  Di = function a(t, e) {
    for (var r = t._first, i; r; )
      r instanceof Z
        ? a(r, e)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== e &&
          (r.timeline
            ? a(r.timeline, e)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = e))),
        (r = r._next);
  },
  qt = function (t, e) {
    return (t && (X(t) ? t : M[t] || Bn(t))) || e;
  },
  Qt = function (t, e, r, i) {
    r === void 0 &&
      (r = function (l) {
        return 1 - e(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
        });
    var n = { easeIn: e, easeOut: r, easeInOut: i },
      s;
    return (
      tt(t, function (o) {
        (M[o] = lt[o] = n), (M[(s = o.toLowerCase())] = r);
        for (var l in n)
          M[
            s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = M[o + "." + l] = n[l];
      }),
      n
    );
  },
  Ii = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  Ue = function a(t, e, r) {
    var i = e >= 1 ? e : 1,
      n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      s = (n / Qe) * (Math.asin(1 / i) || 0),
      o = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * pn((c - s) * n) + 1;
      },
      l =
        t === "out"
          ? o
          : t === "in"
          ? function (u) {
              return 1 - o(1 - u);
            }
          : Ii(o);
    return (
      (n = Qe / n),
      (l.config = function (u, c) {
        return a(t, u, c);
      }),
      l
    );
  },
  We = function a(t, e) {
    e === void 0 && (e = 1.70158);
    var r = function (s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
      },
      i =
        t === "out"
          ? r
          : t === "in"
          ? function (n) {
              return 1 - r(1 - n);
            }
          : Ii(r);
    return (
      (i.config = function (n) {
        return a(t, n);
      }),
      i
    );
  };
tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
  var e = t < 5 ? t + 1 : t;
  Qt(
    a + ",Power" + (e - 1),
    t
      ? function (r) {
          return Math.pow(r, e);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, e);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, e) / 2
        : 1 - Math.pow((1 - r) * 2, e) / 2;
    }
  );
});
M.Linear.easeNone = M.none = M.Linear.easeIn;
Qt("Elastic", Ue("in"), Ue("out"), Ue());
(function (a, t) {
  var e = 1 / t,
    r = 2 * e,
    i = 2.5 * e,
    n = function (o) {
      return o < e
        ? a * o * o
        : o < r
        ? a * Math.pow(o - 1.5 / t, 2) + 0.75
        : o < i
        ? a * (o -= 2.25 / t) * o + 0.9375
        : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
    };
  Qt(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
Qt("Expo", function (a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
Qt("Circ", function (a) {
  return -(ni(1 - a * a) - 1);
});
Qt("Sine", function (a) {
  return a === 1 ? 1 : -_n(a * dn) + 1;
});
Qt("Back", We("in"), We("out"), We());
M.SteppedEase =
  M.steps =
  lt.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0,
          s = 1 - K;
        return function (o) {
          return (((i * Se(0, s, o)) | 0) + n) * r;
        };
      },
    };
ie.ease = M["quad.out"];
tt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (a) {
    return (gr += a + "," + a + "Params,");
  }
);
var Li = function (t, e) {
    (this.id = hn++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : hi),
      (this.set = e ? e.getSetter : Tr);
  },
  we = (function () {
    function a(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        oe(this, +e.duration, 1, 1),
        (this.data = e.data),
        I && ((this._ctx = I), I.data.push(this)),
        ve || st.wake();
    }
    var t = a.prototype;
    return (
      (t.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (t.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            oe(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (r, i) {
        if ((ae(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Xe(this, r), !n._dp || n.parent || bi(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            pt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === K) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), _i(this, r, i)),
          this
        );
      }),
      (t.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + Dr(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (t.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (t.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                Dr(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.iteration = function (r, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * n, i)
          : this._repeat
          ? se(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (r, i) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === r) return this;
        var n =
          this.parent && this._ts ? ze(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
          this.totalTime(
            Se(-Math.abs(this._delay), this.totalDuration(), n),
            i !== !1
          ),
          Ne(this),
          wn(this)
        );
      }),
      (t.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ae(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== K &&
                      (this._tTime -= K)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && pt(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (r) {
        return (
          this._start +
          (J(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ze(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (r) {
        r === void 0 && (r = bn);
        var i = q;
        return (
          (q = r),
          yr(this) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (q = i),
          this
        );
      }),
      (t.globalTime = function (r) {
        for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
          (n = i._start + n / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(r) : n;
      }),
      (t.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), Ir(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), Ir(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (t.seek = function (r, i) {
        return this.totalTime(ct(this, r), J(i));
      }),
      (t.restart = function (r, i) {
        return (
          this.play().totalTime(r ? -this._delay : 0, J(i)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }),
      (t.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (t.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          n;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (n = r.rawTime(!0)) >= i &&
            n < this.endTime(!0) - K)
        );
      }),
      (t.eventCallback = function (r, i, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
              ? ((s[r] = i),
                n && (s[r + "Params"] = n),
                r === "onUpdate" && (this._onUpdate = i))
              : delete s[r],
            this)
          : s[r];
      }),
      (t.then = function (r) {
        var i = this;
        return new Promise(function (n) {
          var s = X(r) ? r : mi,
            o = function () {
              var u = i.then;
              (i.then = null),
                X(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                n(s),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? o()
            : (i._prom = o);
        });
      }),
      (t.kill = function () {
        he(this);
      }),
      a
    );
  })();
ut(we.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Z = (function (a) {
  ii(t, a);
  function t(r, i) {
    var n;
    return (
      r === void 0 && (r = {}),
      (n = a.call(this, r) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!r.smoothChildTiming),
      (n.autoRemoveChildren = !!r.autoRemoveChildren),
      (n._sort = J(r.sortChildren)),
      L && pt(r.parent || L, vt(n), i),
      r.reversed && n.reverse(),
      r.paused && n.paused(!0),
      r.scrollTrigger && yi(vt(n), r.scrollTrigger),
      n
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (i, n, s) {
      return me(0, arguments, this), this;
    }),
    (e.from = function (i, n, s) {
      return me(1, arguments, this), this;
    }),
    (e.fromTo = function (i, n, s, o) {
      return me(2, arguments, this), this;
    }),
    (e.set = function (i, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        pe(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new U(i, n, ct(this, s), 1),
        this
      );
    }),
    (e.call = function (i, n, s) {
      return pt(this, U.delayedCall(0, i, n), s);
    }),
    (e.staggerTo = function (i, n, s, o, l, u, c) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || o),
        (s.onComplete = u),
        (s.onCompleteParams = c),
        (s.parent = this),
        new U(i, s, ct(this, l)),
        this
      );
    }),
    (e.staggerFrom = function (i, n, s, o, l, u, c) {
      return (
        (s.runBackwards = 1),
        (pe(s).immediateRender = J(s.immediateRender)),
        this.staggerTo(i, n, s, o, l, u, c)
      );
    }),
    (e.staggerFromTo = function (i, n, s, o, l, u, c, d) {
      return (
        (o.startAt = s),
        (pe(o).immediateRender = J(o.immediateRender)),
        this.staggerTo(i, n, o, l, u, c, d)
      );
    }),
    (e.render = function (i, n, s) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : W(i),
        d = this._zTime < 0 != i < 0 && (this._initted || !u),
        h,
        _,
        m,
        f,
        p,
        g,
        b,
        v,
        x,
        y,
        T,
        k;
      if (
        (this !== L && c > l && i >= 0 && (c = l), c !== this._tTime || s || d)
      ) {
        if (
          (o !== this._time &&
            u &&
            ((c += this._time - o), (i += this._time - o)),
          (h = c),
          (x = this._start),
          (v = this._ts),
          (g = !v),
          d && (u || (o = this._zTime), (i || !n) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((T = this._yoyo),
            (p = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(p * 100 + i, n, s);
          if (
            ((h = W(c % p)),
            c === l
              ? ((f = this._repeat), (h = u))
              : ((y = W(c / p)),
                (f = ~~y),
                f && f === y && ((h = u), f--),
                h > u && (h = u)),
            (y = se(this._tTime, p)),
            !o &&
              this._tTime &&
              y !== f &&
              this._tTime - y * p - this._dur <= 0 &&
              (y = f),
            T && f & 1 && ((h = u - h), (k = 1)),
            f !== y && !this._lock)
          ) {
            var S = T && y & 1,
              w = S === (T && f & 1);
            if (
              (f < y && (S = !S),
              (o = S ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(o || (k ? 0 : W(f * p)), n, !u)._lock = 0),
              (this._tTime = c),
              !n && this.parent && ot(this, "onRepeat"),
              this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                g !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              w &&
                ((this._lock = 2),
                (o = S ? u : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !k && this.invalidate()),
              (this._lock = 0),
              !this._ts && !g)
            )
              return this;
            Di(this, k);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((b = Cn(this, W(o), W(h))), b && (c -= h - (h = b._start))),
          (this._tTime = c),
          (this._time = h),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (o = 0)),
          !o && c && !n && !y && (ot(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (h >= o && i >= 0)
          for (_ = this._first; _; ) {
            if (
              ((m = _._next), (_._act || h >= _._start) && _._ts && b !== _)
            ) {
              if (_.parent !== this) return this.render(i, n, s);
              if (
                (_.render(
                  _._ts > 0
                    ? (h - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (h - _._start) * _._ts,
                  n,
                  s
                ),
                h !== this._time || (!this._ts && !g))
              ) {
                (b = 0), m && (c += this._zTime = -1e-8);
                break;
              }
            }
            _ = m;
          }
        else {
          _ = this._last;
          for (var O = i < 0 ? i : h; _; ) {
            if (((m = _._prev), (_._act || O <= _._end) && _._ts && b !== _)) {
              if (_.parent !== this) return this.render(i, n, s);
              if (
                (_.render(
                  _._ts > 0
                    ? (O - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (O - _._start) * _._ts,
                  n,
                  s || (q && yr(_))
                ),
                h !== this._time || (!this._ts && !g))
              ) {
                (b = 0), m && (c += this._zTime = O ? -1e-8 : K);
                break;
              }
            }
            _ = m;
          }
        }
        if (
          b &&
          !n &&
          (this.pause(),
          (b.render(h >= o ? 0 : -1e-8)._zTime = h >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = x), Ne(this), this.render(i, n, s);
        this._onUpdate && !n && ot(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && o)) &&
            (x === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Dt(this, 1),
              !n &&
                !(i < 0 && !o) &&
                (c || o || !l) &&
                (ot(
                  this,
                  c === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (e.add = function (i, n) {
      var s = this;
      if ((Tt(n) || (n = ct(this, n, i)), !(i instanceof we))) {
        if (Q(i))
          return (
            i.forEach(function (o) {
              return s.add(o, n);
            }),
            this
          );
        if (Y(i)) return this.addLabel(i, n);
        if (X(i)) i = U.delayedCall(0, i);
        else return this;
      }
      return this !== i ? pt(this, i, n) : this;
    }),
    (e.getChildren = function (i, n, s, o) {
      i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -1e8);
      for (var l = [], u = this._first; u; )
        u._start >= o &&
          (u instanceof U
            ? n && l.push(u)
            : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, s)))),
          (u = u._next);
      return l;
    }),
    (e.getById = function (i) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === i) return n[s];
    }),
    (e.remove = function (i) {
      return Y(i)
        ? this.removeLabel(i)
        : X(i)
        ? this.killTweensOf(i)
        : (i.parent === this && Fe(this, i),
          i === this._recent && (this._recent = this._last),
          Yt(this));
    }),
    (e.totalTime = function (i, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = W(
              st.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          a.prototype.totalTime.call(this, i, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (i, n) {
      return (this.labels[i] = ct(this, n)), this;
    }),
    (e.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (e.addPause = function (i, n, s) {
      var o = U.delayedCall(0, n || ye, s);
      return (
        (o.data = "isPause"), (this._hasPause = 1), pt(this, o, ct(this, i))
      );
    }),
    (e.removePause = function (i) {
      var n = this._first;
      for (i = ct(this, i); n; )
        n._start === i && n.data === "isPause" && Dt(n), (n = n._next);
    }),
    (e.killTweensOf = function (i, n, s) {
      for (var o = this.getTweensOf(i, s), l = o.length; l--; )
        Mt !== o[l] && o[l].kill(i, n);
      return this;
    }),
    (e.getTweensOf = function (i, n) {
      for (var s = [], o = ft(i), l = this._first, u = Tt(n), c; l; )
        l instanceof U
          ? yn(l._targets, o) &&
            (u
              ? (!Mt || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            s.push(l)
          : (c = l.getTweensOf(o, n)).length && s.push.apply(s, c),
          (l = l._next);
      return s;
    }),
    (e.tweenTo = function (i, n) {
      n = n || {};
      var s = this,
        o = ct(s, i),
        l = n,
        u = l.startAt,
        c = l.onStart,
        d = l.onStartParams,
        h = l.immediateRender,
        _,
        m = U.to(
          s,
          ut(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                ) ||
                K,
              onStart: function () {
                if ((s.pause(), !_)) {
                  var p =
                    n.duration ||
                    Math.abs(
                      (o - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale()
                    );
                  m._dur !== p && oe(m, p, 0, 1).render(m._time, !0, !0),
                    (_ = 1);
                }
                c && c.apply(m, d || []);
              },
            },
            n
          )
        );
      return h ? m.render(0) : m;
    }),
    (e.tweenFromTo = function (i, n, s) {
      return this.tweenTo(n, ut({ startAt: { time: ct(this, i) } }, s));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Lr(this, ct(this, i));
    }),
    (e.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Lr(this, ct(this, i), 1);
    }),
    (e.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + K);
    }),
    (e.shiftChildren = function (i, n, s) {
      s === void 0 && (s = 0);
      for (var o = this._first, l = this.labels, u; o; )
        o._start >= s && ((o._start += i), (o._end += i)), (o = o._next);
      if (n) for (u in l) l[u] >= s && (l[u] += i);
      return Yt(this);
    }),
    (e.invalidate = function (i) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
      return a.prototype.invalidate.call(this, i);
    }),
    (e.clear = function (i) {
      i === void 0 && (i = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Yt(this)
      );
    }),
    (e.totalDuration = function (i) {
      var n = 0,
        s = this,
        o = s._last,
        l = gt,
        u,
        c,
        d;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (d = s.parent; o; )
          (u = o._prev),
            o._dirty && o.totalDuration(),
            (c = o._start),
            c > l && s._sort && o._ts && !s._lock
              ? ((s._lock = 1), (pt(s, o, c - o._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              o._ts &&
              ((n -= c),
              ((!d && !s._dp) || (d && d.smoothChildTiming)) &&
                ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
              s.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = u);
        oe(s, s === L && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (t.updateRoot = function (i) {
      if ((L._ts && (_i(L, ze(i, L)), (di = st.frame)), st.frame >= Rr)) {
        Rr += at.autoSleep || 120;
        var n = L._first;
        if ((!n || !n._ts) && at.autoSleep && st._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || st.sleep();
        }
      }
    }),
    t
  );
})(we);
ut(Z.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Gn = function (t, e, r, i, n, s, o) {
    var l = new et(this._pt, t, e, 0, 1, Gi, null, n),
      u = 0,
      c = 0,
      d,
      h,
      _,
      m,
      f,
      p,
      g,
      b;
    for (
      l.b = r,
        l.e = i,
        r += "",
        i += "",
        (g = ~i.indexOf("random(")) && (i = xe(i)),
        s && ((b = [r, i]), s(b, t, e), (r = b[0]), (i = b[1])),
        h = r.match(Ve) || [];
      (d = Ve.exec(i));

    )
      (m = d[0]),
        (f = i.substring(u, d.index)),
        _ ? (_ = (_ + 1) % 5) : f.substr(-5) === "rgba(" && (_ = 1),
        m !== h[c++] &&
          ((p = parseFloat(h[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: f || c === 1 ? f : ",",
            s: p,
            c: m.charAt(1) === "=" ? Jt(p, m) - p : parseFloat(m) - p,
            m: _ && _ < 4 ? Math.round : 0,
          }),
          (u = Ve.lastIndex));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = o),
      (ai.test(i) || g) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  xr = function (t, e, r, i, n, s, o, l, u, c) {
    X(i) && (i = i(n || 0, t, s));
    var d = t[e],
      h =
        r !== "get"
          ? r
          : X(d)
          ? u
            ? t[
                e.indexOf("set") || !X(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](u)
            : t[e]()
          : d,
      _ = X(d) ? (u ? jn : Vi) : wr,
      m;
    if (
      (Y(i) &&
        (~i.indexOf("random(") && (i = xe(i)),
        i.charAt(1) === "=" &&
          ((m = Jt(h, i) + (j(h) || 0)), (m || m === 0) && (i = m))),
      !c || h !== i || nr)
    )
      return !isNaN(h * i) && i !== ""
        ? ((m = new et(
            this._pt,
            t,
            e,
            +h || 0,
            i - (h || 0),
            typeof d == "boolean" ? Qn : Bi,
            0,
            _
          )),
          u && (m.fp = u),
          o && m.modifier(o, this, t),
          (this._pt = m))
        : (!d && !(e in t) && pr(e, i),
          Gn.call(this, t, e, h, i, _, l || at.stringFilter, u));
  },
  Un = function (t, e, r, i, n) {
    if (
      (X(t) && (t = ge(t, n, e, r, i)),
      !bt(t) || (t.style && t.nodeType) || Q(t) || si(t))
    )
      return Y(t) ? ge(t, n, e, r, i) : t;
    var s = {},
      o;
    for (o in t) s[o] = ge(t[o], n, e, r, i);
    return s;
  },
  Fi = function (t, e, r, i, n, s) {
    var o, l, u, c;
    if (
      nt[t] &&
      (o = new nt[t]()).init(
        n,
        o.rawVars ? e[t] : Un(e[t], i, n, s, r),
        r,
        i,
        s
      ) !== !1 &&
      ((r._pt = l = new et(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
      r !== Zt)
    )
      for (u = r._ptLookup[r._targets.indexOf(n)], c = o._props.length; c--; )
        u[o._props[c]] = l;
    return o;
  },
  Mt,
  nr,
  vr = function a(t, e, r) {
    var i = t.vars,
      n = i.ease,
      s = i.startAt,
      o = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      c = i.runBackwards,
      d = i.yoyoEase,
      h = i.keyframes,
      _ = i.autoRevert,
      m = t._dur,
      f = t._startAt,
      p = t._targets,
      g = t.parent,
      b = g && g.data === "nested" ? g.vars.targets : p,
      v = t._overwrite === "auto" && !fr,
      x = t.timeline,
      y,
      T,
      k,
      S,
      w,
      O,
      E,
      C,
      A,
      N,
      V,
      z,
      B;
    if (
      (x && (!h || !n) && (n = "none"),
      (t._ease = qt(n, ie.ease)),
      (t._yEase = d ? zi(qt(d === !0 ? n : d, ie.ease)) : 0),
      d &&
        t._yoyo &&
        !t._repeat &&
        ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
      (t._from = !x && !!i.runBackwards),
      !x || (h && !i.stagger))
    ) {
      if (
        ((C = p[0] ? Wt(p[0]).harness : 0),
        (z = C && i[C.prop]),
        (y = Re(i, mr)),
        f &&
          (f._zTime < 0 && f.progress(1),
          e < 0 && c && o && !_ ? f.render(-1, !0) : f.revert(c && m ? Pe : gn),
          (f._lazy = 0)),
        s)
      ) {
        if (
          (Dt(
            (t._startAt = U.set(
              p,
              ut(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: g,
                  immediateRender: !0,
                  lazy: !f && J(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return ot(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (q || (!o && !_)) && t._startAt.revert(Pe),
          o && m && e <= 0 && r <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (c && m && !f) {
        if (
          (e && (o = !1),
          (k = ut(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !f && J(l),
              immediateRender: o,
              stagger: 0,
              parent: g,
            },
            y
          )),
          z && (k[C.prop] = z),
          Dt((t._startAt = U.set(p, k))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (q ? t._startAt.revert(Pe) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !o)
        )
          a(t._startAt, K, K);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, l = (m && J(l)) || (l && !m), T = 0;
        T < p.length;
        T++
      ) {
        if (
          ((w = p[T]),
          (E = w._gsap || br(p)[T]._gsap),
          (t._ptLookup[T] = N = {}),
          Ze[E.id] && Rt.length && Ee(),
          (V = b === p ? T : b.indexOf(w)),
          C &&
            (A = new C()).init(w, z || y, t, V, b) !== !1 &&
            ((t._pt = S =
              new et(t._pt, w, A.name, 0, 1, A.render, A, 0, A.priority)),
            A._props.forEach(function ($) {
              N[$] = S;
            }),
            A.priority && (O = 1)),
          !C || z)
        )
          for (k in y)
            nt[k] && (A = Fi(k, y, t, V, w, b))
              ? A.priority && (O = 1)
              : (N[k] = S =
                  xr.call(t, w, k, "get", y[k], V, b, 0, i.stringFilter));
        t._op && t._op[T] && t.kill(w, t._op[T]),
          v &&
            t._pt &&
            ((Mt = t),
            L.killTweensOf(w, N, t.globalTime(e)),
            (B = !t.parent),
            (Mt = 0)),
          t._pt && l && (Ze[E.id] = 1);
      }
      O && Ui(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = u),
      (t._initted = (!t._op || t._pt) && !B),
      h && e <= 0 && x.render(gt, !0, !0);
  },
  Wn = function (t, e, r, i, n, s, o, l) {
    var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      c,
      d,
      h,
      _;
    if (!u)
      for (
        u = t._ptCache[e] = [], h = t._ptLookup, _ = t._targets.length;
        _--;

      ) {
        if (((c = h[_][e]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== e && c.fp !== e; ) c = c._next;
        if (!c)
          return (
            (nr = 1),
            (t.vars[e] = "+=0"),
            vr(t, o),
            (nr = 0),
            l ? be(e + " not eligible for reset") : 1
          );
        u.push(c);
      }
    for (_ = u.length; _--; )
      (d = u[_]),
        (c = d._pt || d),
        (c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + s * c.c),
        (c.c = r - c.s),
        d.e && (d.e = G(r) + j(d.e)),
        d.b && (d.b = c.s + j(d.b));
  },
  Yn = function (t, e) {
    var r = t[0] ? Wt(t[0]).harness : 0,
      i = r && r.aliases,
      n,
      s,
      o,
      l;
    if (!i) return e;
    n = ne({}, e);
    for (s in i)
      if (s in n) for (l = i[s].split(","), o = l.length; o--; ) n[l[o]] = n[s];
    return n;
  },
  qn = function (t, e, r, i) {
    var n = e.ease || i || "power1.inOut",
      s,
      o;
    if (Q(e))
      (o = r[t] || (r[t] = [])),
        e.forEach(function (l, u) {
          return o.push({ t: (u / (e.length - 1)) * 100, v: l, e: n });
        });
    else
      for (s in e)
        (o = r[s] || (r[s] = [])),
          s === "ease" || o.push({ t: parseFloat(t), v: e[s], e: n });
  },
  ge = function (t, e, r, i, n) {
    return X(t)
      ? t.call(e, r, i, n)
      : Y(t) && ~t.indexOf("random(")
      ? xe(t)
      : t;
  },
  Ni = gr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Xi = {};
tt(Ni + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
  return (Xi[a] = 1);
});
var U = (function (a) {
  ii(t, a);
  function t(r, i, n, s) {
    var o;
    typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
      (o = a.call(this, s ? i : pe(i)) || this);
    var l = o.vars,
      u = l.duration,
      c = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      _ = l.overwrite,
      m = l.keyframes,
      f = l.defaults,
      p = l.scrollTrigger,
      g = l.yoyoEase,
      b = i.parent || L,
      v = (Q(r) || si(r) ? Tt(r[0]) : "length" in i) ? [r] : ft(r),
      x,
      y,
      T,
      k,
      S,
      w,
      O,
      E;
    if (
      ((o._targets = v.length
        ? br(v)
        : be(
            "GSAP target " + r + " not found. https://gsap.com",
            !at.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = _),
      m || h || Ce(u) || Ce(c))
    ) {
      if (
        ((i = o.vars),
        (x = o.timeline =
          new Z({
            data: "nested",
            defaults: f || {},
            targets: b && b.data === "nested" ? b.vars.targets : v,
          })),
        x.kill(),
        (x.parent = x._dp = vt(o)),
        (x._start = 0),
        h || Ce(u) || Ce(c))
      ) {
        if (((k = v.length), (O = h && Ti(h)), bt(h)))
          for (S in h) ~Ni.indexOf(S) && (E || (E = {}), (E[S] = h[S]));
        for (y = 0; y < k; y++)
          (T = Re(i, Xi)),
            (T.stagger = 0),
            g && (T.yoyoEase = g),
            E && ne(T, E),
            (w = v[y]),
            (T.duration = +ge(u, vt(o), y, w, v)),
            (T.delay = (+ge(c, vt(o), y, w, v) || 0) - o._delay),
            !h &&
              k === 1 &&
              T.delay &&
              ((o._delay = c = T.delay), (o._start += c), (T.delay = 0)),
            x.to(w, T, O ? O(y, w, v) : 0),
            (x._ease = M.none);
        x.duration() ? (u = c = 0) : (o.timeline = 0);
      } else if (m) {
        pe(ut(x.vars.defaults, { ease: "none" })),
          (x._ease = qt(m.ease || i.ease || "none"));
        var C = 0,
          A,
          N,
          V;
        if (Q(m))
          m.forEach(function (z) {
            return x.to(v, z, ">");
          }),
            x.duration();
        else {
          T = {};
          for (S in m)
            S === "ease" || S === "easeEach" || qn(S, m[S], T, m.easeEach);
          for (S in T)
            for (
              A = T[S].sort(function (z, B) {
                return z.t - B.t;
              }),
                C = 0,
                y = 0;
              y < A.length;
              y++
            )
              (N = A[y]),
                (V = {
                  ease: N.e,
                  duration: ((N.t - (y ? A[y - 1].t : 0)) / 100) * u,
                }),
                (V[S] = N.v),
                x.to(v, V, C),
                (C += V.duration);
          x.duration() < u && x.to({}, { duration: u - x.duration() });
        }
      }
      u || o.duration((u = x.duration()));
    } else o.timeline = 0;
    return (
      _ === !0 && !fr && ((Mt = vt(o)), L.killTweensOf(v), (Mt = 0)),
      pt(b, vt(o), n),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      (d ||
        (!u &&
          !m &&
          o._start === W(b._time) &&
          J(d) &&
          Tn(vt(o)) &&
          b.data !== "nested")) &&
        ((o._tTime = -1e-8), o.render(Math.max(0, -c) || 0)),
      p && yi(vt(o), p),
      o
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (i, n, s) {
      var o = this._time,
        l = this._tDur,
        u = this._dur,
        c = i < 0,
        d = i > l - K && !c ? l : i < K ? 0 : i,
        h,
        _,
        m,
        f,
        p,
        g,
        b,
        v,
        x;
      if (!u) Sn(this, i, n, s);
      else if (
        d !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((h = d), (v = this.timeline), this._repeat)) {
          if (((f = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(f * 100 + i, n, s);
          if (
            ((h = W(d % f)),
            d === l
              ? ((m = this._repeat), (h = u))
              : ((p = W(d / f)),
                (m = ~~p),
                m && m === p ? ((h = u), m--) : h > u && (h = u)),
            (g = this._yoyo && m & 1),
            g && ((x = this._yEase), (h = u - h)),
            (p = se(this._tTime, f)),
            h === o && !s && this._initted && m === p)
          )
            return (this._tTime = d), this;
          m !== p &&
            (v && this._yEase && Di(v, g),
            this.vars.repeatRefresh &&
              !g &&
              !this._lock &&
              h !== f &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(W(f * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (xi(this, c ? i : h, s, n, d)) return (this._tTime = 0), this;
          if (o !== this._time && !(s && this.vars.repeatRefresh && m !== p))
            return this;
          if (u !== this._dur) return this.render(i, n, s);
        }
        if (
          ((this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = b = (x || this._ease)(h / u)),
          this._from && (this.ratio = b = 1 - b),
          !o && d && !n && !p && (ot(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (_ = this._pt; _; ) _.r(b, _.d), (_ = _._next);
        (v && v.render(i < 0 ? i : v._dur * v._ease(h / this._dur), n, s)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !n &&
            (c && Je(this, i, n, s), ot(this, "onUpdate")),
          this._repeat &&
            m !== p &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            ot(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && Je(this, i, !0, !0),
            (i || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Dt(this, 1),
            !n &&
              !(c && !o) &&
              (d || o || g) &&
              (ot(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        a.prototype.invalidate.call(this, i)
      );
    }),
    (e.resetTo = function (i, n, s, o, l) {
      ve || st.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || vr(this, u),
        (c = this._ease(u / this._dur)),
        Wn(this, i, n, s, o, c, u, l)
          ? this.resetTo(i, n, s, o, 1)
          : (Xe(this, 0),
            this.parent ||
              gi(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (i, n) {
      if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? he(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!q),
          this
        );
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, n, Mt && Mt.vars.overwrite !== !0)
            ._first || he(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            oe(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = i ? ft(i) : o,
        u = this._ptLookup,
        c = this._pt,
        d,
        h,
        _,
        m,
        f,
        p,
        g;
      if ((!n || n === "all") && vn(o, l))
        return n === "all" && (this._pt = 0), he(this);
      for (
        d = this._op = this._op || [],
          n !== "all" &&
            (Y(n) &&
              ((f = {}),
              tt(n, function (b) {
                return (f[b] = 1);
              }),
              (n = f)),
            (n = Yn(o, n))),
          g = o.length;
        g--;

      )
        if (~l.indexOf(o[g])) {
          (h = u[g]),
            n === "all"
              ? ((d[g] = n), (m = h), (_ = {}))
              : ((_ = d[g] = d[g] || {}), (m = n));
          for (f in m)
            (p = h && h[f]),
              p &&
                ((!("kill" in p.d) || p.d.kill(f) === !0) && Fe(this, p, "_pt"),
                delete h[f]),
              _ !== "all" && (_[f] = 1);
        }
      return this._initted && !this._pt && c && he(this), this;
    }),
    (t.to = function (i, n) {
      return new t(i, n, arguments[2]);
    }),
    (t.from = function (i, n) {
      return me(1, arguments);
    }),
    (t.delayedCall = function (i, n, s, o) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: o,
      });
    }),
    (t.fromTo = function (i, n, s) {
      return me(2, arguments);
    }),
    (t.set = function (i, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(i, n);
    }),
    (t.killTweensOf = function (i, n, s) {
      return L.killTweensOf(i, n, s);
    }),
    t
  );
})(we);
ut(U.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
tt("staggerTo,staggerFrom,staggerFromTo", function (a) {
  U[a] = function () {
    var t = new Z(),
      e = er.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var wr = function (t, e, r) {
    return (t[e] = r);
  },
  Vi = function (t, e, r) {
    return t[e](r);
  },
  jn = function (t, e, r, i) {
    return t[e](i.fp, r);
  },
  Kn = function (t, e, r) {
    return t.setAttribute(e, r);
  },
  Tr = function (t, e) {
    return X(t[e]) ? Vi : dr(t[e]) && t.setAttribute ? Kn : wr;
  },
  Bi = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  Qn = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  Gi = function (t, e) {
    var r = e._pt,
      i = "";
    if (!t && e.b) i = e.b;
    else if (t === 1 && e.e) i = e.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
  kr = function (t, e) {
    for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
  },
  $n = function (t, e, r, i) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === i && n.modifier(t, e, r), (n = s);
  },
  Hn = function (t) {
    for (var e = this._pt, r, i; e; )
      (i = e._next),
        (e.p === t && !e.op) || e.op === t
          ? Fe(this, e, "_pt")
          : e.dep || (r = 1),
        (e = i);
    return !r;
  },
  Zn = function (t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  },
  Ui = function (t) {
    for (var e = t._pt, r, i, n, s; e; ) {
      for (r = e._next, i = n; i && i.pr > e.pr; ) i = i._next;
      (e._prev = i ? i._prev : s) ? (e._prev._next = e) : (n = e),
        (e._next = i) ? (i._prev = e) : (s = e),
        (e = r);
    }
    t._pt = n;
  },
  et = (function () {
    function a(e, r, i, n, s, o, l, u, c) {
      (this.t = r),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = o || Bi),
        (this.d = l || this),
        (this.set = u || wr),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = a.prototype;
    return (
      (t.modifier = function (r, i, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Zn),
          (this.m = r),
          (this.mt = n),
          (this.tween = i);
      }),
      a
    );
  })();
tt(
  gr +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (a) {
    return (mr[a] = 1);
  }
);
lt.TweenMax = lt.TweenLite = U;
lt.TimelineLite = lt.TimelineMax = Z;
L = new Z({
  sortChildren: !1,
  defaults: ie,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
at.stringFilter = Ri;
var jt = [],
  Me = {},
  Jn = [],
  Nr = 0,
  ts = 0,
  Ye = function (t) {
    return (Me[t] || Jn).map(function (e) {
      return e();
    });
  },
  sr = function () {
    var t = Date.now(),
      e = [];
    t - Nr > 2 &&
      (Ye("matchMediaInit"),
      jt.forEach(function (r) {
        var i = r.queries,
          n = r.conditions,
          s,
          o,
          l,
          u;
        for (o in i)
          (s = _t.matchMedia(i[o]).matches),
            s && (l = 1),
            s !== n[o] && ((n[o] = s), (u = 1));
        u && (r.revert(), l && e.push(r));
      }),
      Ye("matchMediaRevert"),
      e.forEach(function (r) {
        return r.onMatch(r, function (i) {
          return r.add(null, i);
        });
      }),
      (Nr = t),
      Ye("matchMedia"));
  },
  Wi = (function () {
    function a(e, r) {
      (this.selector = r && rr(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = ts++),
        e && this.add(e);
    }
    var t = a.prototype;
    return (
      (t.add = function (r, i, n) {
        X(r) && ((n = i), (i = r), (r = X));
        var s = this,
          o = function () {
            var u = I,
              c = s.selector,
              d;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = rr(n)),
              (I = s),
              (d = i.apply(s, arguments)),
              X(d) && s._r.push(d),
              (I = u),
              (s.selector = c),
              (s.isReverted = !1),
              d
            );
          };
        return (
          (s.last = o),
          r === X
            ? o(s, function (l) {
                return s.add(null, l);
              })
            : r
            ? (s[r] = o)
            : o
        );
      }),
      (t.ignore = function (r) {
        var i = I;
        (I = null), r(this), (I = i);
      }),
      (t.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof a
              ? r.push.apply(r, i.getTweens())
              : i instanceof U &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (r, i) {
        var n = this;
        if (
          (r
            ? (function () {
                for (var o = n.getTweens(), l = n.data.length, u; l--; )
                  (u = n.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return o.splice(o.indexOf(c), 1);
                      }));
                for (
                  o
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, d) {
                      return d.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(r);
                    }),
                    l = n.data.length;
                  l--;

                )
                  (u = n.data[l]),
                    u instanceof Z
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof U) && u.revert && u.revert(r);
                n._r.forEach(function (c) {
                  return c(r, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          i)
        )
          for (var s = jt.length; s--; )
            jt[s].id === this.id && jt.splice(s, 1);
      }),
      (t.revert = function (r) {
        this.kill(r || {});
      }),
      a
    );
  })(),
  es = (function () {
    function a(e) {
      (this.contexts = []), (this.scope = e), I && I.data.push(this);
    }
    var t = a.prototype;
    return (
      (t.add = function (r, i, n) {
        bt(r) || (r = { matches: r });
        var s = new Wi(0, n || this.scope),
          o = (s.conditions = {}),
          l,
          u,
          c;
        I && !s.selector && (s.selector = I.selector),
          this.contexts.push(s),
          (i = s.add("onMatch", i)),
          (s.queries = r);
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((l = _t.matchMedia(r[u])),
              l &&
                (jt.indexOf(s) < 0 && jt.push(s),
                (o[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(sr)
                  : l.addEventListener("change", sr)));
        return (
          c &&
            i(s, function (d) {
              return s.add(null, d);
            }),
          this
        );
      }),
      (t.revert = function (r) {
        this.kill(r || {});
      }),
      (t.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      a
    );
  })(),
  De = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (i) {
        return Mi(i);
      });
    },
    timeline: function (t) {
      return new Z(t);
    },
    getTweensOf: function (t, e) {
      return L.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, i) {
      Y(t) && (t = ft(t)[0]);
      var n = Wt(t || {}).get,
        s = r ? mi : pi;
      return (
        r === "native" && (r = ""),
        t &&
          (e
            ? s(((nt[e] && nt[e].get) || n)(t, e, r, i))
            : function (o, l, u) {
                return s(((nt[o] && nt[o].get) || n)(t, o, l, u));
              })
      );
    },
    quickSetter: function (t, e, r) {
      if (((t = ft(t)), t.length > 1)) {
        var i = t.map(function (c) {
            return it.quickSetter(c, e, r);
          }),
          n = i.length;
        return function (c) {
          for (var d = n; d--; ) i[d](c);
        };
      }
      t = t[0] || {};
      var s = nt[e],
        o = Wt(t),
        l = (o.harness && (o.harness.aliases || {})[e]) || e,
        u = s
          ? function (c) {
              var d = new s();
              (Zt._pt = 0),
                d.init(t, r ? c + r : c, Zt, 0, [t]),
                d.render(1, d),
                Zt._pt && kr(1, Zt);
            }
          : o.set(t, l);
      return s
        ? u
        : function (c) {
            return u(t, l, r ? c + r : c, o, 1);
          };
    },
    quickTo: function (t, e, r) {
      var i,
        n = it.to(
          t,
          ut(
            ((i = {}), (i[e] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
            r || {}
          )
        ),
        s = function (l, u, c) {
          return n.resetTo(e, l, u, c);
        };
      return (s.tween = n), s;
    },
    isTweening: function (t) {
      return L.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = qt(t.ease, ie.ease)), zr(ie, t || {});
    },
    config: function (t) {
      return zr(at, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        i = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (i || "").split(",").forEach(function (o) {
        return (
          o && !nt[o] && !lt[o] && be(e + " effect requires " + o + " plugin.")
        );
      }),
        (Be[e] = function (o, l, u) {
          return r(ft(o), ut(l || {}, n), u);
        }),
        s &&
          (Z.prototype[e] = function (o, l, u) {
            return this.add(Be[e](o, bt(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (t, e) {
      M[t] = qt(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? qt(t, e) : M;
    },
    getById: function (t) {
      return L.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var r = new Z(t),
        i,
        n;
      for (
        r.smoothChildTiming = J(t.smoothChildTiming),
          L.remove(r),
          r._dp = 0,
          r._time = r._tTime = L._time,
          i = L._first;
        i;

      )
        (n = i._next),
          (e ||
            !(
              !i._dur &&
              i instanceof U &&
              i.vars.onComplete === i._targets[0]
            )) &&
            pt(r, i, i._start - i._delay),
          (i = n);
      return pt(L, r, 0), r;
    },
    context: function (t, e) {
      return t ? new Wi(t, e) : I;
    },
    matchMedia: function (t) {
      return new es(t);
    },
    matchMediaRefresh: function () {
      return (
        jt.forEach(function (t) {
          var e = t.conditions,
            r,
            i;
          for (i in e) e[i] && ((e[i] = !1), (r = 1));
          r && t.revert();
        }) || sr()
      );
    },
    addEventListener: function (t, e) {
      var r = Me[t] || (Me[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function (t, e) {
      var r = Me[t],
        i = r && r.indexOf(e);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: zn,
      wrapYoyo: Dn,
      distribute: Ti,
      random: Si,
      snap: ki,
      normalize: Rn,
      getUnit: j,
      clamp: On,
      splitColor: Ai,
      toArray: ft,
      selector: rr,
      mapRange: Pi,
      pipe: An,
      unitize: En,
      interpolate: In,
      shuffle: wi,
    },
    install: ci,
    effects: Be,
    ticker: st,
    updateRoot: Z.updateRoot,
    plugins: nt,
    globalTimeline: L,
    core: {
      PropTween: et,
      globals: fi,
      Tween: U,
      Timeline: Z,
      Animation: we,
      getCache: Wt,
      _removeLinkedListItem: Fe,
      reverting: function () {
        return q;
      },
      context: function (t) {
        return t && I && (I.data.push(t), (t._ctx = I)), I;
      },
      suppressOverwrites: function (t) {
        return (fr = t);
      },
    },
  };
tt("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
  return (De[a] = U[a]);
});
st.add(Z.updateRoot);
Zt = De.to({}, { duration: 0 });
var rs = function (t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  },
  is = function (t, e) {
    var r = t._targets,
      i,
      n,
      s;
    for (i in e)
      for (n = r.length; n--; )
        (s = t._ptLookup[n][i]),
          s &&
            (s = s.d) &&
            (s._pt && (s = rs(s, i)),
            s && s.modifier && s.modifier(e[i], t, r[n], i));
  },
  qe = function (t, e) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (i, n, s) {
        s._onInit = function (o) {
          var l, u;
          if (
            (Y(n) &&
              ((l = {}),
              tt(n, function (c) {
                return (l[c] = 1);
              }),
              (n = l)),
            e)
          ) {
            l = {};
            for (u in n) l[u] = e(n[u]);
            n = l;
          }
          is(o, n);
        };
      },
    };
  },
  it =
    De.registerPlugin(
      {
        name: "attr",
        init: function (t, e, r, i, n) {
          var s, o, l;
          this.tween = r;
          for (s in e)
            (l = t.getAttribute(s) || ""),
              (o = this.add(
                t,
                "setAttribute",
                (l || 0) + "",
                e[s],
                i,
                n,
                0,
                0,
                s
              )),
              (o.op = s),
              (o.b = l),
              this._props.push(s);
        },
        render: function (t, e) {
          for (var r = e._pt; r; )
            q ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (t, e) {
          for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      qe("roundProps", ir),
      qe("modifiers"),
      qe("snap", ki)
    ) || De;
U.version = Z.version = it.version = "3.13.0";
ui = 1;
hr() && ae();
M.Power0;
M.Power1;
M.Power2;
M.Power3;
M.Power4;
M.Linear;
M.Quad;
M.Cubic;
M.Quart;
M.Quint;
M.Strong;
M.Elastic;
M.Back;
M.SteppedEase;
M.Bounce;
M.Sine;
M.Expo;
M.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Xr,
  At,
  te,
  Sr,
  Ut,
  Vr,
  Cr,
  ns = function () {
    return typeof window < "u";
  },
  kt = {},
  Gt = 180 / Math.PI,
  ee = Math.PI / 180,
  $t = Math.atan2,
  Br = 1e8,
  Pr = /([A-Z])/g,
  ss = /(left|right|width|margin|padding|x)/i,
  os = /[\s,\(]\S/,
  mt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  or = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  as = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  ls = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  us = function (t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Yi = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  qi = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  cs = function (t, e, r) {
    return (t.style[e] = r);
  },
  fs = function (t, e, r) {
    return t.style.setProperty(e, r);
  },
  ds = function (t, e, r) {
    return (t._gsap[e] = r);
  },
  hs = function (t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  },
  _s = function (t, e, r, i, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
  },
  ps = function (t, e, r, i, n) {
    var s = t._gsap;
    (s[e] = r), s.renderTransform(n, s);
  },
  F = "transform",
  rt = F + "Origin",
  ms = function a(t, e) {
    var r = this,
      i = this.target,
      n = i.style,
      s = i._gsap;
    if (t in kt && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        (t = mt[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (o) {
                return (r.tfm[o] = wt(i, o));
              })
            : (this.tfm[t] = s.x ? s[t] : wt(i, t)),
          t === rt && (this.tfm.zOrigin = s.zOrigin);
      else
        return mt.transform.split(",").forEach(function (o) {
          return a.call(r, o, e);
        });
      if (this.props.indexOf(F) >= 0) return;
      s.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(rt, e, "")),
        (t = F);
    }
    (n || e) && this.props.push(t, e, n[t]);
  },
  ji = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  gs = function () {
    var t = this.props,
      e = this.target,
      r = e.style,
      i = e._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? t[n + 1] === 2
          ? e[t[n]](t[n + 2])
          : (e[t[n]] = t[n + 2])
        : t[n + 2]
        ? (r[t[n]] = t[n + 2])
        : r.removeProperty(
            t[n].substr(0, 2) === "--"
              ? t[n]
              : t[n].replace(Pr, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (n = Cr()),
        (!n || !n.isStart) &&
          !r[F] &&
          (ji(r),
          i.zOrigin &&
            r[rt] &&
            ((r[rt] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  Ki = function (t, e) {
    var r = { target: t, props: [], revert: gs, save: ms };
    return (
      t._gsap || it.core.getCache(t),
      e &&
        t.style &&
        t.nodeType &&
        e.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  Qi,
  ar = function (t, e) {
    var r = At.createElementNS
      ? At.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : At.createElement(t);
    return r && r.style ? r : At.createElement(t);
  },
  dt = function a(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(Pr, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && a(t, le(e) || e, 1)) ||
      ""
    );
  },
  Gr = "O,Moz,ms,Ms,Webkit".split(","),
  le = function (t, e, r) {
    var i = e || Ut,
      n = i.style,
      s = 5;
    if (t in n && !r) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(Gr[s] + t in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Gr[s] : "") + t;
  },
  lr = function () {
    ns() &&
      window.document &&
      ((Xr = window),
      (At = Xr.document),
      (te = At.documentElement),
      (Ut = ar("div") || { style: {} }),
      ar("div"),
      (F = le(F)),
      (rt = F + "Origin"),
      (Ut.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Qi = !!le("perspective")),
      (Cr = it.core.reverting),
      (Sr = 1));
  },
  Ur = function (t) {
    var e = t.ownerSVGElement,
      r = ar(
        "svg",
        (e && e.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      i = t.cloneNode(!0),
      n;
    (i.style.display = "block"), r.appendChild(i), te.appendChild(r);
    try {
      n = i.getBBox();
    } catch {}
    return r.removeChild(i), te.removeChild(r), n;
  },
  Wr = function (t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  },
  $i = function (t) {
    var e, r;
    try {
      e = t.getBBox();
    } catch {
      (e = Ur(t)), (r = 1);
    }
    return (
      (e && (e.width || e.height)) || r || (e = Ur(t)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +Wr(t, ["x", "cx", "x1"]) || 0,
            y: +Wr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : e
    );
  },
  Hi = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && $i(t));
  },
  Kt = function (t, e) {
    if (e) {
      var r = t.style,
        i;
      e in kt && e !== rt && (e = F),
        r.removeProperty
          ? ((i = e.substr(0, 2)),
            (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
            r.removeProperty(
              i === "--" ? e : e.replace(Pr, "-$1").toLowerCase()
            ))
          : r.removeAttribute(e);
    }
  },
  Et = function (t, e, r, i, n, s) {
    var o = new et(t._pt, e, r, 0, 1, s ? qi : Yi);
    return (t._pt = o), (o.b = i), (o.e = n), t._props.push(r), o;
  },
  Yr = { deg: 1, rad: 1, turn: 1 },
  bs = { grid: 1, flex: 1 },
  It = function a(t, e, r, i) {
    var n = parseFloat(r) || 0,
      s = (r + "").trim().substr((n + "").length) || "px",
      o = Ut.style,
      l = ss.test(e),
      u = t.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = i === "px",
      _ = i === "%",
      m,
      f,
      p,
      g;
    if (i === s || !n || Yr[i] || Yr[s]) return n;
    if (
      (s !== "px" && !h && (n = a(t, e, r, "px")),
      (g = t.getCTM && Hi(t)),
      (_ || s === "%") && (kt[e] || ~e.indexOf("adius")))
    )
      return (
        (m = g ? t.getBBox()[l ? "width" : "height"] : t[c]),
        G(_ ? (n / m) * d : (n / 100) * m)
      );
    if (
      ((o[l ? "width" : "height"] = d + (h ? s : i)),
      (f =
        (i !== "rem" && ~e.indexOf("adius")) ||
        (i === "em" && t.appendChild && !u)
          ? t
          : t.parentNode),
      g && (f = (t.ownerSVGElement || {}).parentNode),
      (!f || f === At || !f.appendChild) && (f = At.body),
      (p = f._gsap),
      p && _ && p.width && l && p.time === st.time && !p.uncache)
    )
      return G((n / p.width) * d);
    if (_ && (e === "height" || e === "width")) {
      var b = t.style[e];
      (t.style[e] = d + i), (m = t[c]), b ? (t.style[e] = b) : Kt(t, e);
    } else
      (_ || s === "%") &&
        !bs[dt(f, "display")] &&
        (o.position = dt(t, "position")),
        f === t && (o.position = "static"),
        f.appendChild(Ut),
        (m = Ut[c]),
        f.removeChild(Ut),
        (o.position = "absolute");
    return (
      l && _ && ((p = Wt(f)), (p.time = st.time), (p.width = f[c])),
      G(h ? (m * n) / d : m && n ? (d / m) * n : 0)
    );
  },
  wt = function (t, e, r, i) {
    var n;
    return (
      Sr || lr(),
      e in mt &&
        e !== "transform" &&
        ((e = mt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      kt[e] && e !== "transform"
        ? ((n = ke(t, i)),
          (n =
            e !== "transformOrigin"
              ? n[e]
              : n.svg
              ? n.origin
              : Le(dt(t, rt)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]),
          (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
            (n =
              (Ie[e] && Ie[e](t, e, r)) ||
              dt(t, e) ||
              hi(t, e) ||
              (e === "opacity" ? 1 : 0))),
      r && !~(n + "").trim().indexOf(" ") ? It(t, e, n, r) + r : n
    );
  },
  ys = function (t, e, r, i) {
    if (!r || r === "none") {
      var n = le(e, t, 1),
        s = n && dt(t, n, 1);
      s && s !== r
        ? ((e = n), (r = s))
        : e === "borderColor" && (r = dt(t, "borderTopColor"));
    }
    var o = new et(this._pt, t.style, e, 0, 1, Gi),
      l = 0,
      u = 0,
      c,
      d,
      h,
      _,
      m,
      f,
      p,
      g,
      b,
      v,
      x,
      y;
    if (
      ((o.b = r),
      (o.e = i),
      (r += ""),
      (i += ""),
      i.substring(0, 6) === "var(--" &&
        (i = dt(t, i.substring(4, i.indexOf(")")))),
      i === "auto" &&
        ((f = t.style[e]),
        (t.style[e] = i),
        (i = dt(t, e) || i),
        f ? (t.style[e] = f) : Kt(t, e)),
      (c = [r, i]),
      Ri(c),
      (r = c[0]),
      (i = c[1]),
      (h = r.match(Ht) || []),
      (y = i.match(Ht) || []),
      y.length)
    ) {
      for (; (d = Ht.exec(i)); )
        (p = d[0]),
          (b = i.substring(l, d.index)),
          m
            ? (m = (m + 1) % 5)
            : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (m = 1),
          p !== (f = h[u++] || "") &&
            ((_ = parseFloat(f) || 0),
            (x = f.substr((_ + "").length)),
            p.charAt(1) === "=" && (p = Jt(_, p) + x),
            (g = parseFloat(p)),
            (v = p.substr((g + "").length)),
            (l = Ht.lastIndex - v.length),
            v ||
              ((v = v || at.units[e] || x),
              l === i.length && ((i += v), (o.e += v))),
            x !== v && (_ = It(t, e, f, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: b || u === 1 ? b : ",",
              s: _,
              c: g - _,
              m: (m && m < 4) || e === "zIndex" ? Math.round : 0,
            }));
      o.c = l < i.length ? i.substring(l, i.length) : "";
    } else o.r = e === "display" && i === "none" ? qi : Yi;
    return ai.test(i) && (o.e = 0), (this._pt = o), o;
  },
  qr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  xs = function (t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((t = r), (r = i), (i = t)),
      (e[0] = qr[r] || r),
      (e[1] = qr[i] || i),
      e.join(" ")
    );
  },
  vs = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r = e.t,
        i = r.style,
        n = e.u,
        s = r._gsap,
        o,
        l,
        u;
      if (n === "all" || n === !0) (i.cssText = ""), (l = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (o = n[u]),
            kt[o] && ((l = 1), (o = o === "transformOrigin" ? rt : F)),
            Kt(r, o);
      l &&
        (Kt(r, F),
        s &&
          (s.svg && r.removeAttribute("transform"),
          (i.scale = i.rotate = i.translate = "none"),
          ke(r, 1),
          (s.uncache = 1),
          ji(i)));
    }
  },
  Ie = {
    clearProps: function (t, e, r, i, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new et(t._pt, e, r, 0, 0, vs));
        return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1;
      }
    },
  },
  Te = [1, 0, 0, 1, 0, 0],
  Zi = {},
  Ji = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  jr = function (t) {
    var e = dt(t, F);
    return Ji(e) ? Te : e.substr(7).match(oi).map(G);
  },
  Or = function (t, e) {
    var r = t._gsap || Wt(t),
      i = t.style,
      n = jr(t),
      s,
      o,
      l,
      u;
    return r.svg && t.getAttribute("transform")
      ? ((l = t.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? Te : n)
      : (n === Te &&
          !t.offsetParent &&
          t !== te &&
          !r.svg &&
          ((l = i.display),
          (i.display = "block"),
          (s = t.parentNode),
          (!s || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
            ((u = 1), (o = t.nextElementSibling), te.appendChild(t)),
          (n = jr(t)),
          l ? (i.display = l) : Kt(t, "display"),
          u &&
            (o
              ? s.insertBefore(t, o)
              : s
              ? s.appendChild(t)
              : te.removeChild(t))),
        e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  ur = function (t, e, r, i, n, s) {
    var o = t._gsap,
      l = n || Or(t, !0),
      u = o.xOrigin || 0,
      c = o.yOrigin || 0,
      d = o.xOffset || 0,
      h = o.yOffset || 0,
      _ = l[0],
      m = l[1],
      f = l[2],
      p = l[3],
      g = l[4],
      b = l[5],
      v = e.split(" "),
      x = parseFloat(v[0]) || 0,
      y = parseFloat(v[1]) || 0,
      T,
      k,
      S,
      w;
    r
      ? l !== Te &&
        (k = _ * p - m * f) &&
        ((S = x * (p / k) + y * (-f / k) + (f * b - p * g) / k),
        (w = x * (-m / k) + y * (_ / k) - (_ * b - m * g) / k),
        (x = S),
        (y = w))
      : ((T = $i(t)),
        (x = T.x + (~v[0].indexOf("%") ? (x / 100) * T.width : x)),
        (y = T.y + (~(v[1] || v[0]).indexOf("%") ? (y / 100) * T.height : y))),
      i || (i !== !1 && o.smooth)
        ? ((g = x - u),
          (b = y - c),
          (o.xOffset = d + (g * _ + b * f) - g),
          (o.yOffset = h + (g * m + b * p) - b))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = x),
      (o.yOrigin = y),
      (o.smooth = !!i),
      (o.origin = e),
      (o.originIsAbsolute = !!r),
      (t.style[rt] = "0px 0px"),
      s &&
        (Et(s, o, "xOrigin", u, x),
        Et(s, o, "yOrigin", c, y),
        Et(s, o, "xOffset", d, o.xOffset),
        Et(s, o, "yOffset", h, o.yOffset)),
      t.setAttribute("data-svg-origin", x + " " + y);
  },
  ke = function (t, e) {
    var r = t._gsap || new Li(t);
    if ("x" in r && !e && !r.uncache) return r;
    var i = t.style,
      n = r.scaleX < 0,
      s = "px",
      o = "deg",
      l = getComputedStyle(t),
      u = dt(t, rt) || "0",
      c,
      d,
      h,
      _,
      m,
      f,
      p,
      g,
      b,
      v,
      x,
      y,
      T,
      k,
      S,
      w,
      O,
      E,
      C,
      A,
      N,
      V,
      z,
      B,
      $,
      ht,
      Ct,
      H,
      Nt,
      Ar,
      yt,
      Xt;
    return (
      (c = d = h = f = p = g = b = v = x = 0),
      (_ = m = 1),
      (r.svg = !!(t.getCTM && Hi(t))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[F] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[F] !== "none" ? l[F] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (k = Or(t, r.svg)),
      r.svg &&
        (r.uncache
          ? (($ = t.getBBox()),
            (u = r.xOrigin - $.x + "px " + (r.yOrigin - $.y) + "px"),
            (B = ""))
          : (B = !e && t.getAttribute("data-svg-origin")),
        ur(t, B || u, !!B || r.originIsAbsolute, r.smooth !== !1, k)),
      (y = r.xOrigin || 0),
      (T = r.yOrigin || 0),
      k !== Te &&
        ((E = k[0]),
        (C = k[1]),
        (A = k[2]),
        (N = k[3]),
        (c = V = k[4]),
        (d = z = k[5]),
        k.length === 6
          ? ((_ = Math.sqrt(E * E + C * C)),
            (m = Math.sqrt(N * N + A * A)),
            (f = E || C ? $t(C, E) * Gt : 0),
            (b = A || N ? $t(A, N) * Gt + f : 0),
            b && (m *= Math.abs(Math.cos(b * ee))),
            r.svg && ((c -= y - (y * E + T * A)), (d -= T - (y * C + T * N))))
          : ((Xt = k[6]),
            (Ar = k[7]),
            (Ct = k[8]),
            (H = k[9]),
            (Nt = k[10]),
            (yt = k[11]),
            (c = k[12]),
            (d = k[13]),
            (h = k[14]),
            (S = $t(Xt, Nt)),
            (p = S * Gt),
            S &&
              ((w = Math.cos(-S)),
              (O = Math.sin(-S)),
              (B = V * w + Ct * O),
              ($ = z * w + H * O),
              (ht = Xt * w + Nt * O),
              (Ct = V * -O + Ct * w),
              (H = z * -O + H * w),
              (Nt = Xt * -O + Nt * w),
              (yt = Ar * -O + yt * w),
              (V = B),
              (z = $),
              (Xt = ht)),
            (S = $t(-A, Nt)),
            (g = S * Gt),
            S &&
              ((w = Math.cos(-S)),
              (O = Math.sin(-S)),
              (B = E * w - Ct * O),
              ($ = C * w - H * O),
              (ht = A * w - Nt * O),
              (yt = N * O + yt * w),
              (E = B),
              (C = $),
              (A = ht)),
            (S = $t(C, E)),
            (f = S * Gt),
            S &&
              ((w = Math.cos(S)),
              (O = Math.sin(S)),
              (B = E * w + C * O),
              ($ = V * w + z * O),
              (C = C * w - E * O),
              (z = z * w - V * O),
              (E = B),
              (V = $)),
            p &&
              Math.abs(p) + Math.abs(f) > 359.9 &&
              ((p = f = 0), (g = 180 - g)),
            (_ = G(Math.sqrt(E * E + C * C + A * A))),
            (m = G(Math.sqrt(z * z + Xt * Xt))),
            (S = $t(V, z)),
            (b = Math.abs(S) > 2e-4 ? S * Gt : 0),
            (x = yt ? 1 / (yt < 0 ? -yt : yt) : 0)),
        r.svg &&
          ((B = t.getAttribute("transform")),
          (r.forceCSS = t.setAttribute("transform", "") || !Ji(dt(t, F))),
          B && t.setAttribute("transform", B))),
      Math.abs(b) > 90 &&
        Math.abs(b) < 270 &&
        (n
          ? ((_ *= -1), (b += f <= 0 ? 180 : -180), (f += f <= 0 ? 180 : -180))
          : ((m *= -1), (b += b <= 0 ? 180 : -180))),
      (e = e || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!e && r.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (t.offsetWidth * r.xPercent) / 100
          : 0) +
        s),
      (r.y =
        d -
        ((r.yPercent =
          d &&
          ((!e && r.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (t.offsetHeight * r.yPercent) / 100
          : 0) +
        s),
      (r.z = h + s),
      (r.scaleX = G(_)),
      (r.scaleY = G(m)),
      (r.rotation = G(f) + o),
      (r.rotationX = G(p) + o),
      (r.rotationY = G(g) + o),
      (r.skewX = b + o),
      (r.skewY = v + o),
      (r.transformPerspective = x + s),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
        (i[rt] = Le(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = at.force3D),
      (r.renderTransform = r.svg ? Ts : Qi ? tn : ws),
      (r.uncache = 0),
      r
    );
  },
  Le = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  je = function (t, e, r) {
    var i = j(e);
    return G(parseFloat(e) + parseFloat(It(t, "x", r + "px", i))) + i;
  },
  ws = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      tn(t, e);
  },
  Vt = "0deg",
  ce = "0px",
  Bt = ") ",
  tn = function (t, e) {
    var r = e || this,
      i = r.xPercent,
      n = r.yPercent,
      s = r.x,
      o = r.y,
      l = r.z,
      u = r.rotation,
      c = r.rotationY,
      d = r.rotationX,
      h = r.skewX,
      _ = r.skewY,
      m = r.scaleX,
      f = r.scaleY,
      p = r.transformPerspective,
      g = r.force3D,
      b = r.target,
      v = r.zOrigin,
      x = "",
      y = (g === "auto" && t && t !== 1) || g === !0;
    if (v && (d !== Vt || c !== Vt)) {
      var T = parseFloat(c) * ee,
        k = Math.sin(T),
        S = Math.cos(T),
        w;
      (T = parseFloat(d) * ee),
        (w = Math.cos(T)),
        (s = je(b, s, k * w * -v)),
        (o = je(b, o, -Math.sin(T) * -v)),
        (l = je(b, l, S * w * -v + v));
    }
    p !== ce && (x += "perspective(" + p + Bt),
      (i || n) && (x += "translate(" + i + "%, " + n + "%) "),
      (y || s !== ce || o !== ce || l !== ce) &&
        (x +=
          l !== ce || y
            ? "translate3d(" + s + ", " + o + ", " + l + ") "
            : "translate(" + s + ", " + o + Bt),
      u !== Vt && (x += "rotate(" + u + Bt),
      c !== Vt && (x += "rotateY(" + c + Bt),
      d !== Vt && (x += "rotateX(" + d + Bt),
      (h !== Vt || _ !== Vt) && (x += "skew(" + h + ", " + _ + Bt),
      (m !== 1 || f !== 1) && (x += "scale(" + m + ", " + f + Bt),
      (b.style[F] = x || "translate(0, 0)");
  },
  Ts = function (t, e) {
    var r = e || this,
      i = r.xPercent,
      n = r.yPercent,
      s = r.x,
      o = r.y,
      l = r.rotation,
      u = r.skewX,
      c = r.skewY,
      d = r.scaleX,
      h = r.scaleY,
      _ = r.target,
      m = r.xOrigin,
      f = r.yOrigin,
      p = r.xOffset,
      g = r.yOffset,
      b = r.forceCSS,
      v = parseFloat(s),
      x = parseFloat(o),
      y,
      T,
      k,
      S,
      w;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= ee),
          (u *= ee),
          (y = Math.cos(l) * d),
          (T = Math.sin(l) * d),
          (k = Math.sin(l - u) * -h),
          (S = Math.cos(l - u) * h),
          u &&
            ((c *= ee),
            (w = Math.tan(u - c)),
            (w = Math.sqrt(1 + w * w)),
            (k *= w),
            (S *= w),
            c &&
              ((w = Math.tan(c)),
              (w = Math.sqrt(1 + w * w)),
              (y *= w),
              (T *= w))),
          (y = G(y)),
          (T = G(T)),
          (k = G(k)),
          (S = G(S)))
        : ((y = d), (S = h), (T = k = 0)),
      ((v && !~(s + "").indexOf("px")) || (x && !~(o + "").indexOf("px"))) &&
        ((v = It(_, "x", s, "px")), (x = It(_, "y", o, "px"))),
      (m || f || p || g) &&
        ((v = G(v + m - (m * y + f * k) + p)),
        (x = G(x + f - (m * T + f * S) + g))),
      (i || n) &&
        ((w = _.getBBox()),
        (v = G(v + (i / 100) * w.width)),
        (x = G(x + (n / 100) * w.height))),
      (w =
        "matrix(" + y + "," + T + "," + k + "," + S + "," + v + "," + x + ")"),
      _.setAttribute("transform", w),
      b && (_.style[F] = w);
  },
  ks = function (t, e, r, i, n) {
    var s = 360,
      o = Y(n),
      l = parseFloat(n) * (o && ~n.indexOf("rad") ? Gt : 1),
      u = l - i,
      c = i + u + "deg",
      d,
      h;
    return (
      o &&
        ((d = n.split("_")[1]),
        d === "short" &&
          ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -360)),
        d === "cw" && u < 0
          ? (u = ((u + s * Br) % s) - ~~(u / s) * s)
          : d === "ccw" && u > 0 && (u = ((u - s * Br) % s) - ~~(u / s) * s)),
      (t._pt = h = new et(t._pt, e, r, i, u, as)),
      (h.e = c),
      (h.u = "deg"),
      t._props.push(r),
      h
    );
  },
  Kr = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  },
  Ss = function (t, e, r) {
    var i = Kr({}, r._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = r.style,
      o,
      l,
      u,
      c,
      d,
      h,
      _,
      m;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (s[F] = e),
        (o = ke(r, 1)),
        Kt(r, F),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[F]), (s[F] = e), (o = ke(r, 1)), (s[F] = u));
    for (l in kt)
      (u = i[l]),
        (c = o[l]),
        u !== c &&
          n.indexOf(l) < 0 &&
          ((_ = j(u)),
          (m = j(c)),
          (d = _ !== m ? It(r, l, u, m) : parseFloat(u)),
          (h = parseFloat(c)),
          (t._pt = new et(t._pt, o, l, d, h - d, or)),
          (t._pt.u = m || 0),
          t._props.push(l));
    Kr(o, i);
  };
tt("padding,margin,Width,Radius", function (a, t) {
  var e = "Top",
    r = "Right",
    i = "Bottom",
    n = "Left",
    s = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function (o) {
      return t < 2 ? a + o : "border" + o + a;
    });
  Ie[t > 1 ? "border" + a : a] = function (o, l, u, c, d) {
    var h, _;
    if (arguments.length < 4)
      return (
        (h = s.map(function (m) {
          return wt(o, m, u);
        })),
        (_ = h.join(" ")),
        _.split(h[0]).length === 5 ? h[0] : _
      );
    (h = (c + "").split(" ")),
      (_ = {}),
      s.forEach(function (m, f) {
        return (_[m] = h[f] = h[f] || h[((f - 1) / 2) | 0]);
      }),
      o.init(l, _, d);
  };
});
var en = {
  name: "css",
  register: lr,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, r, i, n) {
    var s = this._props,
      o = t.style,
      l = r.vars.startAt,
      u,
      c,
      d,
      h,
      _,
      m,
      f,
      p,
      g,
      b,
      v,
      x,
      y,
      T,
      k,
      S;
    Sr || lr(),
      (this.styles = this.styles || Ki(t)),
      (S = this.styles.props),
      (this.tween = r);
    for (f in e)
      if (f !== "autoRound" && ((c = e[f]), !(nt[f] && Fi(f, e, r, i, t, n)))) {
        if (
          ((_ = typeof c),
          (m = Ie[f]),
          _ === "function" && ((c = c.call(r, i, t, n)), (_ = typeof c)),
          _ === "string" && ~c.indexOf("random(") && (c = xe(c)),
          m)
        )
          m(this, t, f, c, r) && (k = 1);
        else if (f.substr(0, 2) === "--")
          (u = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
            (c += ""),
            (zt.lastIndex = 0),
            zt.test(u) || ((p = j(u)), (g = j(c))),
            g ? p !== g && (u = It(t, f, u, g) + g) : p && (c += p),
            this.add(o, "setProperty", u, c, i, n, 0, 0, f),
            s.push(f),
            S.push(f, 0, o[f]);
        else if (_ !== "undefined") {
          if (
            (l && f in l
              ? ((u = typeof l[f] == "function" ? l[f].call(r, i, t, n) : l[f]),
                Y(u) && ~u.indexOf("random(") && (u = xe(u)),
                j(u + "") ||
                  u === "auto" ||
                  (u += at.units[f] || j(wt(t, f)) || ""),
                (u + "").charAt(1) === "=" && (u = wt(t, f)))
              : (u = wt(t, f)),
            (h = parseFloat(u)),
            (b = _ === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            b && (c = c.substr(2)),
            (d = parseFloat(c)),
            f in mt &&
              (f === "autoAlpha" &&
                (h === 1 && wt(t, "visibility") === "hidden" && d && (h = 0),
                S.push("visibility", 0, o.visibility),
                Et(
                  this,
                  o,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              f !== "scale" &&
                f !== "transform" &&
                ((f = mt[f]), ~f.indexOf(",") && (f = f.split(",")[0]))),
            (v = f in kt),
            v)
          ) {
            if (
              (this.styles.save(f),
              _ === "string" &&
                c.substring(0, 6) === "var(--" &&
                ((c = dt(t, c.substring(4, c.indexOf(")")))),
                (d = parseFloat(c))),
              x ||
                ((y = t._gsap),
                (y.renderTransform && !e.parseTransform) ||
                  ke(t, e.parseTransform),
                (T = e.smoothOrigin !== !1 && y.smooth),
                (x = this._pt =
                  new et(this._pt, o, F, 0, 1, y.renderTransform, y, 0, -1)),
                (x.dep = 1)),
              f === "scale")
            )
              (this._pt = new et(
                this._pt,
                y,
                "scaleY",
                y.scaleY,
                (b ? Jt(y.scaleY, b + d) : d) - y.scaleY || 0,
                or
              )),
                (this._pt.u = 0),
                s.push("scaleY", f),
                (f += "X");
            else if (f === "transformOrigin") {
              S.push(rt, 0, o[rt]),
                (c = xs(c)),
                y.svg
                  ? ur(t, c, 0, T, 0, this)
                  : ((g = parseFloat(c.split(" ")[2]) || 0),
                    g !== y.zOrigin && Et(this, y, "zOrigin", y.zOrigin, g),
                    Et(this, o, f, Le(u), Le(c)));
              continue;
            } else if (f === "svgOrigin") {
              ur(t, c, 1, T, 0, this);
              continue;
            } else if (f in Zi) {
              ks(this, y, f, h, b ? Jt(h, b + c) : c);
              continue;
            } else if (f === "smoothOrigin") {
              Et(this, y, "smooth", y.smooth, c);
              continue;
            } else if (f === "force3D") {
              y[f] = c;
              continue;
            } else if (f === "transform") {
              Ss(this, c, t);
              continue;
            }
          } else f in o || (f = le(f) || f);
          if (v || ((d || d === 0) && (h || h === 0) && !os.test(c) && f in o))
            (p = (u + "").substr((h + "").length)),
              d || (d = 0),
              (g = j(c) || (f in at.units ? at.units[f] : p)),
              p !== g && (h = It(t, f, u, g)),
              (this._pt = new et(
                this._pt,
                v ? y : o,
                f,
                h,
                (b ? Jt(h, b + d) : d) - h,
                !v && (g === "px" || f === "zIndex") && e.autoRound !== !1
                  ? us
                  : or
              )),
              (this._pt.u = g || 0),
              p !== g && g !== "%" && ((this._pt.b = u), (this._pt.r = ls));
          else if (f in o) ys.call(this, t, f, u, b ? b + c : c);
          else if (f in t) this.add(t, f, u || t[f], b ? b + c : c, i, n);
          else if (f !== "parseTransform") {
            pr(f, c);
            continue;
          }
          v ||
            (f in o
              ? S.push(f, 0, o[f])
              : typeof t[f] == "function"
              ? S.push(f, 2, t[f]())
              : S.push(f, 1, u || t[f])),
            s.push(f);
        }
      }
    k && Ui(this);
  },
  render: function (t, e) {
    if (e.tween._time || !Cr())
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    else e.styles.revert();
  },
  get: wt,
  aliases: mt,
  getSetter: function (t, e, r) {
    var i = mt[e];
    return (
      i && i.indexOf(",") < 0 && (e = i),
      e in kt && e !== rt && (t._gsap.x || wt(t, "x"))
        ? r && Vr === r
          ? e === "scale"
            ? hs
            : ds
          : (Vr = r || {}) && (e === "scale" ? _s : ps)
        : t.style && !dr(t.style[e])
        ? cs
        : ~e.indexOf("-")
        ? fs
        : Tr(t, e)
    );
  },
  core: { _removeProperty: Kt, _getMatrix: Or },
};
it.utils.checkPrefix = le;
it.core.getStyleSaver = Ki;
(function (a, t, e, r) {
  var i = tt(a + "," + t + "," + e, function (n) {
    kt[n] = 1;
  });
  tt(t, function (n) {
    (at.units[n] = "deg"), (Zi[n] = 1);
  }),
    (mt[i[13]] = a + "," + t),
    tt(r, function (n) {
      var s = n.split(":");
      mt[s[1]] = i[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
tt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (a) {
    at.units[a] = "px";
  }
);
it.registerPlugin(en);
var Cs = it.registerPlugin(en) || it;
Cs.core.Tween;
let Qr, $r;
function rn(a) {
  if (typeof document > "u") return;
  clearTimeout(Qr), clearTimeout($r);
  const t = document.createElement("style"),
    e = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  t.appendChild(e);
  const r = () => document.head.appendChild(t),
    i = () => document.head.removeChild(t);
  if (typeof window.getComputedStyle < "u") {
    r(), a(), window.getComputedStyle(t).opacity, i();
    return;
  }
  if (typeof window.requestAnimationFrame < "u") {
    r(), a(), window.requestAnimationFrame(i);
    return;
  }
  r(),
    (Qr = window.setTimeout(() => {
      a(), ($r = window.setTimeout(i, 120));
    }, 120));
}
function Hr(a) {
  return a.filter((t) => t.length > 0);
}
const nn = { getItem: (a) => null, setItem: (a, t) => {} },
  Lt = typeof document < "u",
  Ps = ["dark", "light", "system"],
  Os = St("mode-watcher-mode"),
  Ms = St("mode-watcher-theme"),
  As = Ls(),
  Es = Ns(),
  Rs = St(void 0),
  zs = Fs(),
  sn = St(!0),
  Ds = St([]),
  Is = St([]),
  So = Xs(),
  Co = Vs();
function Ls() {
  const a = "system",
    t = Lt ? localStorage : nn,
    e = t.getItem(i());
  let r = Zr(e) ? e : a;
  function i() {
    return ri(Os);
  }
  const { subscribe: n, set: s } = St(r, () => {
    if (!Lt) return;
    const l = (u) => {
      if (u.key !== i()) return;
      const c = u.newValue;
      Zr(c) ? s((r = c)) : s((r = a));
    };
    return (
      addEventListener("storage", l), () => removeEventListener("storage", l)
    );
  });
  function o(l) {
    s((r = l)), t.setItem(i(), r);
  }
  return { subscribe: n, set: o };
}
function Fs() {
  const a = Lt ? localStorage : nn,
    t = a.getItem(r());
  let e = t ?? "";
  function r() {
    return ri(Ms);
  }
  const { subscribe: i, set: n } = St(e, () => {
    if (!Lt) return;
    const o = (l) => {
      if (l.key !== r()) return;
      const u = l.newValue;
      n(u === null ? (e = "") : (e = u));
    };
    return (
      addEventListener("storage", o), () => removeEventListener("storage", o)
    );
  });
  function s(o) {
    n((e = o)), a.setItem(r(), e);
  }
  return { subscribe: i, set: s };
}
function Ns() {
  let t = !0;
  const { subscribe: e, set: r } = St(void 0, () => {
    if (!Lt) return;
    const s = (l) => {
        t && r(l.matches ? "light" : "dark");
      },
      o = window.matchMedia("(prefers-color-scheme: light)");
    return (
      o.addEventListener("change", s), () => o.removeEventListener("change", s)
    );
  });
  function i() {
    if (!Lt) return;
    const s = window.matchMedia("(prefers-color-scheme: light)");
    r(s.matches ? "light" : "dark");
  }
  function n(s) {
    t = s;
  }
  return { subscribe: e, query: i, tracking: n };
}
function Xs() {
  const { subscribe: a } = ei(
    [As, Es, Rs, sn, Ds, Is],
    ([t, e, r, i, n, s]) => {
      if (!Lt) return;
      const o = t === "system" ? e : t,
        l = Hr(n),
        u = Hr(s);
      function c() {
        const d = document.documentElement,
          h = document.querySelector('meta[name="theme-color"]');
        o === "light"
          ? (l.length && d.classList.remove(...l),
            u.length && d.classList.add(...u),
            (d.style.colorScheme = "light"),
            h && r && h.setAttribute("content", r.light))
          : (u.length && d.classList.remove(...u),
            l.length && d.classList.add(...l),
            (d.style.colorScheme = "dark"),
            h && r && h.setAttribute("content", r.dark));
      }
      return i ? rn(c) : c(), o;
    }
  );
  return { subscribe: a };
}
function Vs() {
  const { subscribe: a } = ei([zs, sn], ([t, e]) => {
    if (!Lt) return;
    function r() {
      document.documentElement.setAttribute("data-theme", t);
    }
    return e ? rn(r) : r(), t;
  });
  return { subscribe: a };
}
function Zr(a) {
  return typeof a != "string" ? !1 : Ps.includes(a);
}
const Po = "/manifesto.html",
  Oo = "/litepaper.html",
  Mo = "https://portal.qfnetwork.xyz/#/explorer",
  Ao = "mailto:admin@qfnetwork.xyz",
  Eo = "https://github.com/QuantumFusion-network/",
  Ro = "https://t.me/",
  zo = "https://x.com",
  Do = 106,
  Io = 80,
  Lo = [
    `
        <strong>As Life Moves Online</strong> <span style="word-break: break-all;">XXXXXXXXXXXXXXXXXXXXXXXXX</span> <strong>What Matters Most Must Be Protected.</strong> <span style="word-break: break-all;">XXXXXXXXXXXXX</span> <br/><br/>
        
        QF AI Network safeguards the five most important pillars of life so you can live freely, without interference.
        `,
    `
       <strong>Identity</strong> <br/><br/>
        
        Own your credentials, your reputation, and your name, so that no one can erase you.
        `,
    `
        <strong>Money</strong><br/><br/>
        
        Move and store value without permission, interference, or restrictions.
        `,
    `
        <strong>Work</strong><br/><br/>
        
        Earn, build, and participate in networks that can't lock you out.
        `,
    `
        <strong>Community</strong><br/><br/>
        
        Connect, coordinate, and govern without fear of censorship or collapse.
        `,
    `
        <strong>Data</strong><br/><br/>
        
        What you create is yours. Always. Secure, portable, and provable.
        `,
  ],
  Fo = [
    {
      title: "SPIN Consensus",
      description: "Flexible, instant, or secure finality for any use case",
    },
    {
      title: "RISC-V VM",
      description: "EVM-compatible smart contracts for easy migration",
    },
    {
      title: "Verifiable Off-Chain Workers",
      description: "Efficient computation with on-chain proof",
    },
    {
      title: "zkTLS + WebRTC",
      description: "Secure bridges to Web2 data + peer-to-peer performance",
    },
    {
      title: "Substrate Core",
      description: "Modular, upgradeable, secure architecture",
    },
  ],
  Mr = "-",
  Bs = (a) => {
    const t = Us(a),
      { conflictingClassGroups: e, conflictingClassGroupModifiers: r } = a;
    return {
      getClassGroupId: (s) => {
        const o = s.split(Mr);
        return o[0] === "" && o.length !== 1 && o.shift(), on(o, t) || Gs(s);
      },
      getConflictingClassGroupIds: (s, o) => {
        const l = e[s] || [];
        return o && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  on = (a, t) => {
    var s;
    if (a.length === 0) return t.classGroupId;
    const e = a[0],
      r = t.nextPart.get(e),
      i = r ? on(a.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const n = a.join(Mr);
    return (s = t.validators.find(({ validator: o }) => o(n))) == null
      ? void 0
      : s.classGroupId;
  },
  Jr = /^\[(.+)\]$/,
  Gs = (a) => {
    if (Jr.test(a)) {
      const t = Jr.exec(a)[1],
        e = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (e) return "arbitrary.." + e;
    }
  },
  Us = (a) => {
    const { theme: t, prefix: e } = a,
      r = { nextPart: new Map(), validators: [] };
    return (
      Ys(Object.entries(a.classGroups), e).forEach(([n, s]) => {
        cr(s, r, n, t);
      }),
      r
    );
  },
  cr = (a, t, e, r) => {
    a.forEach((i) => {
      if (typeof i == "string") {
        const n = i === "" ? t : ti(t, i);
        n.classGroupId = e;
        return;
      }
      if (typeof i == "function") {
        if (Ws(i)) {
          cr(i(r), t, e, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: e });
        return;
      }
      Object.entries(i).forEach(([n, s]) => {
        cr(s, ti(t, n), e, r);
      });
    });
  },
  ti = (a, t) => {
    let e = a;
    return (
      t.split(Mr).forEach((r) => {
        e.nextPart.has(r) ||
          e.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (e = e.nextPart.get(r));
      }),
      e
    );
  },
  Ws = (a) => a.isThemeGetter,
  Ys = (a, t) =>
    t
      ? a.map(([e, r]) => {
          const i = r.map((n) =>
            typeof n == "string"
              ? t + n
              : typeof n == "object"
              ? Object.fromEntries(
                  Object.entries(n).map(([s, o]) => [t + s, o])
                )
              : n
          );
          return [e, i];
        })
      : a,
  qs = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      e = new Map(),
      r = new Map();
    const i = (n, s) => {
      e.set(n, s), t++, t > a && ((t = 0), (r = e), (e = new Map()));
    };
    return {
      get(n) {
        let s = e.get(n);
        if (s !== void 0) return s;
        if ((s = r.get(n)) !== void 0) return i(n, s), s;
      },
      set(n, s) {
        e.has(n) ? e.set(n, s) : i(n, s);
      },
    };
  },
  an = "!",
  js = (a) => {
    const { separator: t, experimentalParseClassName: e } = a,
      r = t.length === 1,
      i = t[0],
      n = t.length,
      s = (o) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let p = 0; p < o.length; p++) {
          let g = o[p];
          if (u === 0) {
            if (g === i && (r || o.slice(p, p + n) === t)) {
              l.push(o.slice(c, p)), (c = p + n);
              continue;
            }
            if (g === "/") {
              d = p;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const h = l.length === 0 ? o : o.substring(c),
          _ = h.startsWith(an),
          m = _ ? h.substring(1) : h,
          f = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: _,
          baseClassName: m,
          maybePostfixModifierPosition: f,
        };
      };
    return e ? (o) => e({ className: o, parseClassName: s }) : s;
  },
  Ks = (a) => {
    if (a.length <= 1) return a;
    const t = [];
    let e = [];
    return (
      a.forEach((r) => {
        r[0] === "[" ? (t.push(...e.sort(), r), (e = [])) : e.push(r);
      }),
      t.push(...e.sort()),
      t
    );
  },
  Qs = (a) => ({ cache: qs(a.cacheSize), parseClassName: js(a), ...Bs(a) }),
  $s = /\s+/,
  Hs = (a, t) => {
    const {
        parseClassName: e,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      n = [],
      s = a.trim().split($s);
    let o = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: h,
          maybePostfixModifierPosition: _,
        } = e(u);
      let m = !!_,
        f = r(m ? h.substring(0, _) : h);
      if (!f) {
        if (!m) {
          o = u + (o.length > 0 ? " " + o : o);
          continue;
        }
        if (((f = r(h)), !f)) {
          o = u + (o.length > 0 ? " " + o : o);
          continue;
        }
        m = !1;
      }
      const p = Ks(c).join(":"),
        g = d ? p + an : p,
        b = g + f;
      if (n.includes(b)) continue;
      n.push(b);
      const v = i(f, m);
      for (let x = 0; x < v.length; ++x) {
        const y = v[x];
        n.push(g + y);
      }
      o = u + (o.length > 0 ? " " + o : o);
    }
    return o;
  };
function Zs() {
  let a = 0,
    t,
    e,
    r = "";
  for (; a < arguments.length; )
    (t = arguments[a++]) && (e = ln(t)) && (r && (r += " "), (r += e));
  return r;
}
const ln = (a) => {
  if (typeof a == "string") return a;
  let t,
    e = "";
  for (let r = 0; r < a.length; r++)
    a[r] && (t = ln(a[r])) && (e && (e += " "), (e += t));
  return e;
};
function Js(a, ...t) {
  let e,
    r,
    i,
    n = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), a());
    return (e = Qs(u)), (r = e.cache.get), (i = e.cache.set), (n = o), o(l);
  }
  function o(l) {
    const u = r(l);
    if (u) return u;
    const c = Hs(l, e);
    return i(l, c), c;
  }
  return function () {
    return n(Zs.apply(null, arguments));
  };
}
const D = (a) => {
    const t = (e) => e[a] || [];
    return (t.isThemeGetter = !0), t;
  },
  un = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  to = /^\d+\/\d+$/,
  eo = new Set(["px", "full", "screen"]),
  ro = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  io =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  no = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  so = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  oo =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  xt = (a) => re(a) || eo.has(a) || to.test(a),
  Pt = (a) => ue(a, "length", po),
  re = (a) => !!a && !Number.isNaN(Number(a)),
  Ke = (a) => ue(a, "number", re),
  fe = (a) => !!a && Number.isInteger(Number(a)),
  ao = (a) => a.endsWith("%") && re(a.slice(0, -1)),
  P = (a) => un.test(a),
  Ot = (a) => ro.test(a),
  lo = new Set(["length", "size", "percentage"]),
  uo = (a) => ue(a, lo, cn),
  co = (a) => ue(a, "position", cn),
  fo = new Set(["image", "url"]),
  ho = (a) => ue(a, fo, go),
  _o = (a) => ue(a, "", mo),
  de = () => !0,
  ue = (a, t, e) => {
    const r = un.exec(a);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : e(r[2])
      : !1;
  },
  po = (a) => io.test(a) && !no.test(a),
  cn = () => !1,
  mo = (a) => so.test(a),
  go = (a) => oo.test(a),
  bo = () => {
    const a = D("colors"),
      t = D("spacing"),
      e = D("blur"),
      r = D("brightness"),
      i = D("borderColor"),
      n = D("borderRadius"),
      s = D("borderSpacing"),
      o = D("borderWidth"),
      l = D("contrast"),
      u = D("grayscale"),
      c = D("hueRotate"),
      d = D("invert"),
      h = D("gap"),
      _ = D("gradientColorStops"),
      m = D("gradientColorStopPositions"),
      f = D("inset"),
      p = D("margin"),
      g = D("opacity"),
      b = D("padding"),
      v = D("saturate"),
      x = D("scale"),
      y = D("sepia"),
      T = D("skew"),
      k = D("space"),
      S = D("translate"),
      w = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      E = () => ["auto", P, t],
      C = () => [P, t],
      A = () => ["", xt, Pt],
      N = () => ["auto", re, P],
      V = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      B = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      $ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      ht = () => ["", "0", P],
      Ct = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      H = () => [re, P];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [de],
        spacing: [xt, Pt],
        blur: ["none", "", Ot, P],
        brightness: H(),
        borderColor: [a],
        borderRadius: ["none", "", "full", Ot, P],
        borderSpacing: C(),
        borderWidth: A(),
        contrast: H(),
        grayscale: ht(),
        hueRotate: H(),
        invert: ht(),
        gap: C(),
        gradientColorStops: [a],
        gradientColorStopPositions: [ao, Pt],
        inset: E(),
        margin: E(),
        opacity: H(),
        padding: C(),
        saturate: H(),
        scale: H(),
        sepia: ht(),
        skew: H(),
        space: C(),
        translate: C(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", P] }],
        container: ["container"],
        columns: [{ columns: [Ot] }],
        "break-after": [{ "break-after": Ct() }],
        "break-before": [{ "break-before": Ct() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...V(), P] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: w() }],
        "overscroll-x": [{ "overscroll-x": w() }],
        "overscroll-y": [{ "overscroll-y": w() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [f] }],
        "inset-x": [{ "inset-x": [f] }],
        "inset-y": [{ "inset-y": [f] }],
        start: [{ start: [f] }],
        end: [{ end: [f] }],
        top: [{ top: [f] }],
        right: [{ right: [f] }],
        bottom: [{ bottom: [f] }],
        left: [{ left: [f] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", fe, P] }],
        basis: [{ basis: E() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", P] }],
        grow: [{ grow: ht() }],
        shrink: [{ shrink: ht() }],
        order: [{ order: ["first", "last", "none", fe, P] }],
        "grid-cols": [{ "grid-cols": [de] }],
        "col-start-end": [{ col: ["auto", { span: ["full", fe, P] }, P] }],
        "col-start": [{ "col-start": N() }],
        "col-end": [{ "col-end": N() }],
        "grid-rows": [{ "grid-rows": [de] }],
        "row-start-end": [{ row: ["auto", { span: [fe, P] }, P] }],
        "row-start": [{ "row-start": N() }],
        "row-end": [{ "row-end": N() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", P] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", P] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...$()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...$(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...$(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [p] }],
        mx: [{ mx: [p] }],
        my: [{ my: [p] }],
        ms: [{ ms: [p] }],
        me: [{ me: [p] }],
        mt: [{ mt: [p] }],
        mr: [{ mr: [p] }],
        mb: [{ mb: [p] }],
        ml: [{ ml: [p] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, t] }],
        "min-w": [{ "min-w": [P, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              P,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Ot] },
              Ot,
            ],
          },
        ],
        h: [{ h: [P, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [P, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Ot, Pt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ke,
            ],
          },
        ],
        "font-family": [{ font: [de] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              P,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", re, Ke] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              xt,
              P,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", P] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", P] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [a] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [a] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", xt, Pt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", xt, P] }],
        "text-decoration-color": [{ decoration: [a] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: C() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              P,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", P] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...V(), co] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", uo] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              ho,
            ],
          },
        ],
        "bg-color": [{ bg: [a] }],
        "gradient-from-pos": [{ from: [m] }],
        "gradient-via-pos": [{ via: [m] }],
        "gradient-to-pos": [{ to: [m] }],
        "gradient-from": [{ from: [_] }],
        "gradient-via": [{ via: [_] }],
        "gradient-to": [{ to: [_] }],
        rounded: [{ rounded: [n] }],
        "rounded-s": [{ "rounded-s": [n] }],
        "rounded-e": [{ "rounded-e": [n] }],
        "rounded-t": [{ "rounded-t": [n] }],
        "rounded-r": [{ "rounded-r": [n] }],
        "rounded-b": [{ "rounded-b": [n] }],
        "rounded-l": [{ "rounded-l": [n] }],
        "rounded-ss": [{ "rounded-ss": [n] }],
        "rounded-se": [{ "rounded-se": [n] }],
        "rounded-ee": [{ "rounded-ee": [n] }],
        "rounded-es": [{ "rounded-es": [n] }],
        "rounded-tl": [{ "rounded-tl": [n] }],
        "rounded-tr": [{ "rounded-tr": [n] }],
        "rounded-br": [{ "rounded-br": [n] }],
        "rounded-bl": [{ "rounded-bl": [n] }],
        "border-w": [{ border: [o] }],
        "border-w-x": [{ "border-x": [o] }],
        "border-w-y": [{ "border-y": [o] }],
        "border-w-s": [{ "border-s": [o] }],
        "border-w-e": [{ "border-e": [o] }],
        "border-w-t": [{ "border-t": [o] }],
        "border-w-r": [{ "border-r": [o] }],
        "border-w-b": [{ "border-b": [o] }],
        "border-w-l": [{ "border-l": [o] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [o] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [o] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [xt, P] }],
        "outline-w": [{ outline: [xt, Pt] }],
        "outline-color": [{ outline: [a] }],
        "ring-w": [{ ring: A() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [a] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [xt, Pt] }],
        "ring-offset-color": [{ "ring-offset": [a] }],
        shadow: [{ shadow: ["", "inner", "none", Ot, _o] }],
        "shadow-color": [{ shadow: [de] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...B(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": B() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [e] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Ot, P] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [y] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [e] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [y] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              P,
            ],
          },
        ],
        duration: [{ duration: H() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", P] }],
        delay: [{ delay: H() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", P] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [x] }],
        "scale-x": [{ "scale-x": [x] }],
        "scale-y": [{ "scale-y": [x] }],
        rotate: [{ rotate: [fe, P] }],
        "translate-x": [{ "translate-x": [S] }],
        "translate-y": [{ "translate-y": [S] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              P,
            ],
          },
        ],
        accent: [{ accent: ["auto", a] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              P,
            ],
          },
        ],
        "caret-color": [{ caret: [a] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", P] },
        ],
        fill: [{ fill: [a, "none"] }],
        "stroke-w": [{ stroke: [xt, Pt, Ke] }],
        stroke: [{ stroke: [a, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  yo = Js(bo);
function fn(a) {
  var t,
    e,
    r = "";
  if (typeof a == "string" || typeof a == "number") r += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var i = a.length;
      for (t = 0; t < i; t++)
        a[t] && (e = fn(a[t])) && (r && (r += " "), (r += e));
    } else for (e in a) a[e] && (r && (r += " "), (r += e));
  return r;
}
function xo() {
  for (var a, t, e = 0, r = "", i = arguments.length; e < i; e++)
    (a = arguments[e]) && (t = fn(a)) && (r && (r += " "), (r += t));
  return r;
}
function No(...a) {
  return yo(xo(a));
}
const vo = {
  s: "550px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
function wo() {
  if (typeof window > "u") return Er({});
  const a = Object.entries(vo).reduce(
    (t, [e, r]) => ((t[e] = window.matchMedia(`(min-width: ${r})`)), t),
    {}
  );
  return Er(
    Object.entries(a).reduce((t, [e, r]) => ((t[e] = r.matches), t), {}),
    (t) => {
      const e = Object.entries(a).reduce((r, [i, n]) => {
        const s = (o) => {
          t(
            Object.entries(a).reduce((l, [u, c]) => ((l[u] = c.matches), l), {})
          );
        };
        return n.addListener(s), r.push(() => n.removeListener(s)), r;
      }, []);
      return () => {
        e.forEach((r) => r());
      };
    }
  );
}
const Xo = wo();
export {
  Ao as B,
  Lo as D,
  Eo as G,
  Do as H,
  Oo as L,
  Po as M,
  Ro as T,
  zo as X,
  Io as a,
  Mo as b,
  No as c,
  So as d,
  Ms as e,
  Os as f,
  Cs as g,
  Co as h,
  Zr as i,
  sn as j,
  Rs as k,
  Ds as l,
  Xo as m,
  Is as n,
  Fo as o,
  Es as s,
  zs as t,
  As as u,
};
