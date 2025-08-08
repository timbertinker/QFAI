import {
  Y as cs,
  s as Tr,
  n as Et,
  d as z,
  c as Je,
  y as Sr,
  p as f,
  f as Ne,
  k as Le,
  e as W,
  Z as Fo,
  x as fs,
  H as us,
  m as ri,
  A as hi,
  G as hs,
  _ as _o,
  V as ve,
  g as J,
  W as be,
  $ as ds,
  q as mo,
  o as Yo,
  u as ot,
  j as hr,
  l as dr,
  a0 as Bo,
  C as vo,
  D as ti,
  a1 as ps,
  v as ei,
  I as Xi,
  B as gs,
  a2 as _s,
  a3 as ms,
  a4 as vs,
  a5 as bs,
  a6 as bo,
} from "../chunks/DDUrsvEp.js";
import {
  S as kr,
  i as Er,
  t as xt,
  a as ft,
  g as ni,
  e as ii,
  d as Gr,
  m as qr,
  c as sn,
  b as Wr,
  h as yo,
  j as wo,
  k as xo,
} from "../chunks/BmebJm60.js";
import { a as ys, b as ws } from "../chunks/BaOLdkrQ.js";
import {
  u as Xo,
  t as xs,
  d as Di,
  e as Co,
  f as So,
  h as Cs,
  s as To,
  i as Ss,
  j as Ts,
  k as ks,
  l as Es,
  n as Ms,
  c as ko,
  g as Un,
  m as Gi,
  H as Eo,
  a as qi,
  b as Go,
  G as qo,
  M as Wo,
  L as Uo,
} from "../chunks/CAg3U06Y.js";
import { e as Mo } from "../chunks/D8_hJZIm.js";
import { w as Ps } from "../chunks/v5_18HdE.js";
const As =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
var Ki =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Wi = { exports: {} };
(function (w, t) {
  (function (r, s) {
    s(t);
  })(Ki, function (r) {
    function s(Se, ee) {
      for (var X = 0; X < ee.length; X++) {
        var ce = ee[X];
        (ce.enumerable = ce.enumerable || !1),
          (ce.configurable = !0),
          "value" in ce && (ce.writable = !0),
          Object.defineProperty(Se, ce.key, ce);
      }
    }
    function h(Se, ee, X) {
      return ee && s(Se.prototype, ee), Se;
    }
    /*!
     * ScrollSmoother 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var c,
      d,
      p,
      T,
      H,
      I,
      V,
      U,
      O,
      oe,
      G,
      Ee,
      pe,
      ge,
      Ce,
      se = function () {
        return typeof window < "u";
      },
      Z = function () {
        return c || (se() && (c = window.gsap) && c.registerPlugin && c);
      },
      Me = function (ee) {
        return Math.round(ee * 1e5) / 1e5 || 0;
      },
      xe = function (ee) {
        return O.maxScroll(ee || p);
      },
      ue = function (ee, X) {
        var ce = ee.parentNode || H,
          Vt = ee.getBoundingClientRect(),
          Mt = ce.getBoundingClientRect(),
          Mr = Mt.top - Vt.top,
          ut = Mt.bottom - Vt.bottom,
          ze = (Math.abs(Mr) > Math.abs(ut) ? Mr : ut) / (1 - X),
          st = -ze * X,
          Ur,
          Ze;
        return (
          ze > 0 &&
            ((Ur = Mt.height / (p.innerHeight + Mt.height)),
            (Ze =
              Ur === 0.5
                ? Mt.height * 2
                : Math.min(Mt.height, Math.abs((-ze * Ur) / (2 * Ur - 1))) *
                  2 *
                  (X || 1)),
            (st += X ? -Ze * X : -Ze / 2),
            (ze += Ze)),
          { change: ze, offset: st }
        );
      },
      Ke = function (ee) {
        var X = T.querySelector(".ScrollSmoother-wrapper");
        return (
          X ||
            ((X = T.createElement("div")),
            X.classList.add("ScrollSmoother-wrapper"),
            ee.parentNode.insertBefore(X, ee),
            X.appendChild(ee)),
          X
        );
      },
      he = (function () {
        function Se(ee) {
          var X = this;
          d ||
            Se.register(c) ||
            console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
            (ee = this.vars = ee || {}),
            oe && oe.kill(),
            (oe = this),
            ge(this);
          var ce = ee,
            Vt = ce.smoothTouch,
            Mt = ce.onUpdate,
            Mr = ce.onStop,
            ut = ce.smooth,
            ze = ce.onFocusIn,
            st = ce.normalizeScroll,
            Ur = ce.wholePixels,
            Ze,
            dt,
            Lr,
            et,
            ht,
            jr,
            Ue,
            re,
            Hr,
            ae,
            Ve,
            Wt,
            Ie,
            ln,
            an = this,
            Or = ee.effectsPrefix || "",
            zr = O.getScrollFunc(p),
            It =
              O.isTouch === 1
                ? Vt === !0
                  ? 0.8
                  : parseFloat(Vt) || 0
                : ut === 0 || ut === !1
                ? 0
                : parseFloat(ut) || 0.8,
            Rt = (It && +ee.speed) || 1,
            Ge = 0,
            Kr = 0,
            Zr = 1,
            pt = Ee(0),
            pn = function () {
              return pt.update(-Ge);
            },
            Vr = { y: 0 },
            $r = function () {
              return (Ze.style.overflow = "visible");
            },
            cn,
            Qr = function (o) {
              o.update();
              var v = o.getTween();
              v && (v.pause(), (v._time = v._dur), (v._tTime = v._tDur)),
                (cn = !1),
                o.animation.progress(o.progress, !0);
            },
            gn = function (o, v) {
              ((o !== Ge && !ae) || v) &&
                (Ur && (o = Math.round(o)),
                It &&
                  ((Ze.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    o +
                    ", 0, 1)"),
                  (Ze._gsap.y = o + "px")),
                (Kr = o - Ge),
                (Ge = o),
                O.isUpdating || Se.isRefreshing || O.update());
            },
            gt = function (o) {
              return arguments.length
                ? (o < 0 && (o = 0),
                  (Vr.y = -o),
                  (cn = !0),
                  ae ? (Ge = -o) : gn(-o),
                  O.isRefreshing ? et.update() : zr(o / Rt),
                  this)
                : -Ge;
            },
            fn =
              typeof ResizeObserver < "u" &&
              ee.autoResize !== !1 &&
              new ResizeObserver(function () {
                if (!O.isRefreshing) {
                  var g = xe(dt) * Rt;
                  g < -Ge && gt(g), Ce.restart(!0);
                }
              }),
            Tn,
            Pr = function (o) {
              (dt.scrollTop = 0),
                !(
                  (o.target.contains && o.target.contains(dt)) ||
                  (ze && ze(X, o) === !1)
                ) &&
                  (O.isInViewport(o.target) ||
                    o.target === Tn ||
                    X.scrollTo(o.target, !1, "center center"),
                  (Tn = o.target));
            },
            Y = function (o, v) {
              if (o < v.start) return o;
              var F = isNaN(v.ratio) ? 1 : v.ratio,
                E = v.end - v.start,
                R = o - v.start,
                A = v.offset || 0,
                $ = v.pins || [],
                j = $.offset || 0,
                K =
                  (v._startClamp && v.start <= 0) || (v.pins && v.pins.offset)
                    ? 0
                    : v._endClamp && v.end === xe()
                    ? 1
                    : 0.5;
              return (
                $.forEach(function (le) {
                  (E -= le.distance), le.nativeStart <= o && (R -= le.distance);
                }),
                j && (R *= (E - j / F) / E),
                o + (R - A * K) / F - R
              );
            },
            l = function g(o, v, F) {
              F || (o.pins.length = o.pins.offset = 0);
              var E = o.pins,
                R = o.markers,
                A,
                $,
                j,
                K,
                le,
                ne,
                He,
                ie;
              for (He = 0; He < v.length; He++)
                if (
                  ((ie = v[He]),
                  o.trigger &&
                    ie.trigger &&
                    o !== ie &&
                    (ie.trigger === o.trigger ||
                      ie.pinnedContainer === o.trigger ||
                      o.trigger.contains(ie.trigger)) &&
                    ((le = ie._startNative || ie._startClamp || ie.start),
                    (ne = ie._endNative || ie._endClamp || ie.end),
                    (j = Y(le, o)),
                    (K = ie.pin && ne > 0 ? j + (ne - le) : Y(ne, o)),
                    ie.setPositions(
                      j,
                      K,
                      !0,
                      (ie._startClamp ? Math.max(0, j) : j) - le
                    ),
                    ie.markerStart &&
                      R.push(
                        c.quickSetter([ie.markerStart, ie.markerEnd], "y", "px")
                      ),
                    ie.pin && ie.end > 0 && !F))
                ) {
                  if (
                    ((A = ie.end - ie.start),
                    ($ = o._startClamp && ie.start < 0),
                    $)
                  ) {
                    if (o.start > 0) {
                      o.setPositions(0, o.end + (o._startNative - o.start), !0),
                        g(o, v);
                      return;
                    }
                    (A += ie.start), (E.offset = -ie.start);
                  }
                  E.push({
                    start: ie.start,
                    nativeStart: le,
                    end: ie.end,
                    distance: A,
                    trig: ie,
                  }),
                    o.setPositions(o.start, o.end + ($ ? -ie.start : A), !0);
                }
            },
            u = function (o, v) {
              ht.forEach(function (F) {
                return l(F, o, v);
              });
            },
            m = function () {
              (H = T.documentElement),
                (I = T.body),
                $r(),
                requestAnimationFrame($r),
                ht &&
                  (O.getAll().forEach(function (o) {
                    (o._startNative = o.start), (o._endNative = o.end);
                  }),
                  ht.forEach(function (o) {
                    var v = o._startClamp || o.start,
                      F = o.autoSpeed
                        ? Math.min(xe(), o.end)
                        : v + Math.abs((o.end - v) / o.ratio),
                      E = F - o.end;
                    if (((v -= E / 2), (F -= E / 2), v > F)) {
                      var R = v;
                      (v = F), (F = R);
                    }
                    o._startClamp && v < 0
                      ? ((F = o.ratio < 0 ? xe() : o.end / o.ratio),
                        (E = F - o.end),
                        (v = 0))
                      : (o.ratio < 0 || (o._endClamp && F >= xe())) &&
                        ((F = xe()),
                        (v =
                          o.ratio < 0 || o.ratio > 1
                            ? 0
                            : F - (F - o.start) / o.ratio),
                        (E = (F - v) * o.ratio - (o.end - o.start))),
                      (o.offset = E || 1e-4),
                      (o.pins.length = o.pins.offset = 0),
                      o.setPositions(v, F, !0);
                  }),
                  u(O.sort())),
                pt.reset();
            },
            C = function () {
              return O.addEventListener("refresh", m);
            },
            k = function () {
              return (
                ht &&
                ht.forEach(function (o) {
                  return o.vars.onRefresh(o);
                })
              );
            },
            y = function () {
              return (
                ht &&
                  ht.forEach(function (o) {
                    return o.vars.onRefreshInit(o);
                  }),
                k
              );
            },
            P = function (o, v, F, E) {
              return function () {
                var R = typeof v == "function" ? v(F, E) : v;
                R ||
                  R === 0 ||
                  (R =
                    E.getAttribute("data-" + Or + o) ||
                    (o === "speed" ? 1 : 0)),
                  E.setAttribute("data-" + Or + o, R);
                var A = (R + "").substr(0, 6) === "clamp(";
                return { clamp: A, value: A ? R.substr(6, R.length - 7) : R };
              };
            },
            L = function (o, v, F, E, R) {
              R = (typeof R == "function" ? R(E, o) : R) || 0;
              var A = P("speed", v, E, o),
                $ = P("lag", F, E, o),
                j = c.getProperty(o, "y"),
                K = o._gsap,
                le,
                ne,
                He,
                ie,
                Ye,
                bt,
                tt = [],
                ir = function () {
                  (v = A()),
                    (F = parseFloat($().value)),
                    (le = parseFloat(v.value) || 1),
                    (He = v.value === "auto"),
                    (Ye =
                      He || (ne && ne._startClamp && ne.start <= 0) || tt.offset
                        ? 0
                        : ne && ne._endClamp && ne.end === xe()
                        ? 1
                        : 0.5),
                    ie && ie.kill(),
                    (ie =
                      F &&
                      c.to(o, {
                        ease: G,
                        overwrite: !1,
                        y: "+=0",
                        duration: F,
                      })),
                    ne && ((ne.ratio = le), (ne.autoSpeed = He));
                },
                lt = function () {
                  (K.y = j + "px"), K.renderTransform(1), ir();
                },
                _t = [],
                at = 0,
                Nt = function (rt) {
                  if (He) {
                    lt();
                    var Ct = ue(o, U(0, 1, -rt.start / (rt.end - rt.start)));
                    (at = Ct.change), (bt = Ct.offset);
                  } else
                    (bt = tt.offset || 0),
                      (at = (rt.end - rt.start - bt) * (1 - le));
                  tt.forEach(function (Jr) {
                    return (at -= Jr.distance * (1 - le));
                  }),
                    (rt.offset = at || 0.001),
                    rt.vars.onUpdate(rt),
                    ie && ie.progress(1);
                };
              return (
                ir(),
                (le !== 1 || He || ie) &&
                  ((ne = O.create({
                    trigger: He ? o.parentNode : o,
                    start: function () {
                      return v.clamp
                        ? "clamp(top bottom+=" + R + ")"
                        : "top bottom+=" + R;
                    },
                    end: function () {
                      return v.value < 0
                        ? "max"
                        : v.clamp
                        ? "clamp(bottom top-=" + R + ")"
                        : "bottom top-=" + R;
                    },
                    scroller: dt,
                    scrub: !0,
                    refreshPriority: -999,
                    onRefreshInit: lt,
                    onRefresh: Nt,
                    onKill: function (rt) {
                      var Ct = ht.indexOf(rt);
                      Ct >= 0 && ht.splice(Ct, 1), lt();
                    },
                    onUpdate: function (rt) {
                      var Ct = j + at * (rt.progress - Ye),
                        Jr = tt.length,
                        Jt = 0,
                        er,
                        Ft,
                        or;
                      if (rt.offset) {
                        if (Jr) {
                          for (Ft = -Ge, or = rt.end; Jr--; ) {
                            if (
                              ((er = tt[Jr]),
                              er.trig.isActive ||
                                (Ft >= er.start && Ft <= er.end))
                            ) {
                              ie &&
                                ((er.trig.progress +=
                                  er.trig.direction < 0 ? 0.001 : -0.001),
                                er.trig.update(0, 0, 1),
                                ie.resetTo("y", parseFloat(K.y), -Kr, !0),
                                Zr && ie.progress(1));
                              return;
                            }
                            Ft > er.end && (Jt += er.distance),
                              (or -= er.distance);
                          }
                          Ct =
                            j +
                            Jt +
                            at *
                              ((c.utils.clamp(rt.start, rt.end, Ft) -
                                rt.start -
                                Jt) /
                                (or - rt.start) -
                                Ye);
                        }
                        _t.length &&
                          !He &&
                          _t.forEach(function (yr) {
                            return yr(Ct - Jt);
                          }),
                          (Ct = Me(Ct + bt)),
                          ie
                            ? (ie.resetTo("y", Ct, -Kr, !0),
                              Zr && ie.progress(1))
                            : ((K.y = Ct + "px"), K.renderTransform(1));
                      }
                    },
                  })),
                  Nt(ne),
                  (c.core.getCache(ne.trigger).stRevert = y),
                  (ne.startY = j),
                  (ne.pins = tt),
                  (ne.markers = _t),
                  (ne.ratio = le),
                  (ne.autoSpeed = He),
                  (o.style.willChange = "transform")),
                ne
              );
            };
          C(),
            O.addEventListener("killAll", C),
            c.delayedCall(0.5, function () {
              return (Zr = 0);
            }),
            (this.scrollTop = gt),
            (this.scrollTo = function (g, o, v) {
              var F = c.utils.clamp(
                0,
                xe(),
                isNaN(g) ? X.offset(g, v, !!o && !ae) : +g
              );
              o
                ? ae
                  ? c.to(X, {
                      duration: It,
                      scrollTop: F,
                      overwrite: "auto",
                      ease: G,
                    })
                  : zr(F)
                : gt(F);
            }),
            (this.offset = function (g, o, v) {
              g = V(g)[0];
              var F = g.style.cssText,
                E = O.create({ trigger: g, start: o || "top top" }),
                R;
              return (
                ht && (Zr ? O.refresh() : u([E], !0)),
                (R = E.start / (v ? Rt : 1)),
                E.kill(!1),
                (g.style.cssText = F),
                (c.core.getCache(g).uncache = 1),
                R
              );
            });
          function M() {
            return (
              (Lr = Ze.clientHeight),
              (Ze.style.overflow = "visible"),
              (I.style.height =
                p.innerHeight + (Lr - p.innerHeight) / Rt + "px"),
              Lr - p.innerHeight
            );
          }
          (this.content = function (g) {
            if (arguments.length) {
              var o =
                V(g || "#smooth-content")[0] ||
                console.warn("ScrollSmoother needs a valid content element.") ||
                I.children[0];
              return (
                o !== Ze &&
                  ((Ze = o),
                  (Hr = Ze.getAttribute("style") || ""),
                  fn && fn.observe(Ze),
                  c.set(Ze, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0",
                  }),
                  It || c.set(Ze, { clearProps: "transform" })),
                this
              );
            }
            return Ze;
          }),
            (this.wrapper = function (g) {
              return arguments.length
                ? ((dt = V(g || "#smooth-wrapper")[0] || Ke(Ze)),
                  (re = dt.getAttribute("style") || ""),
                  M(),
                  c.set(
                    dt,
                    It
                      ? {
                          overflow: "hidden",
                          position: "fixed",
                          height: "100%",
                          width: "100%",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                        }
                      : {
                          overflow: "visible",
                          position: "relative",
                          width: "100%",
                          height: "auto",
                          top: "auto",
                          bottom: "auto",
                          left: "auto",
                          right: "auto",
                        }
                  ),
                  this)
                : dt;
            }),
            (this.effects = function (g, o) {
              var v;
              if ((ht || (ht = []), !g)) return ht.slice(0);
              (g = V(g)),
                g.forEach(function (le) {
                  for (var ne = ht.length; ne--; )
                    ht[ne].trigger === le && ht[ne].kill();
                }),
                (o = o || {});
              var F = o,
                E = F.speed,
                R = F.lag,
                A = F.effectsPadding,
                $ = [],
                j,
                K;
              for (j = 0; j < g.length; j++)
                (K = L(g[j], E, R, j, A)), K && $.push(K);
              return (
                (v = ht).push.apply(v, $), o.refresh !== !1 && O.refresh(), $
              );
            }),
            (this.sections = function (g, o) {
              var v;
              if ((jr || (jr = []), !g)) return jr.slice(0);
              var F = V(g).map(function (E) {
                return O.create({
                  trigger: E,
                  start: "top 120%",
                  end: "bottom -20%",
                  onToggle: function (A) {
                    (E.style.opacity = A.isActive ? "1" : "0"),
                      (E.style.pointerEvents = A.isActive ? "all" : "none");
                  },
                });
              });
              return (
                o && o.add ? (v = jr).push.apply(v, F) : (jr = F.slice(0)), F
              );
            }),
            this.content(ee.content),
            this.wrapper(ee.wrapper),
            (this.render = function (g) {
              return gn(g || g === 0 ? g : Ge);
            }),
            (this.getVelocity = function () {
              return pt.getVelocity(-Ge);
            }),
            O.scrollerProxy(dt, {
              scrollTop: gt,
              scrollHeight: function () {
                return M() && I.scrollHeight;
              },
              fixedMarkers: ee.fixedMarkers !== !1 && !!It,
              content: Ze,
              getBoundingClientRect: function () {
                return {
                  top: 0,
                  left: 0,
                  width: p.innerWidth,
                  height: p.innerHeight,
                };
              },
            }),
            O.defaults({ scroller: dt });
          var q = O.getAll().filter(function (g) {
            return g.scroller === p || g.scroller === dt;
          });
          q.forEach(function (g) {
            return g.revert(!0, !0);
          }),
            (et = O.create({
              animation: c.fromTo(
                Vr,
                {
                  y: function () {
                    return (ln = 0), 0;
                  },
                },
                {
                  y: function () {
                    return (ln = 1), -M();
                  },
                  immediateRender: !1,
                  ease: "none",
                  data: "ScrollSmoother",
                  duration: 100,
                  onUpdate: function () {
                    if (ln) {
                      var o = cn;
                      o && (Qr(et), (Vr.y = Ge)),
                        gn(Vr.y, o),
                        pn(),
                        Mt && !ae && Mt(an);
                    }
                  },
                }
              ),
              onRefreshInit: function (o) {
                if (!Se.isRefreshing) {
                  if (((Se.isRefreshing = !0), ht)) {
                    var v = O.getAll().filter(function (E) {
                      return !!E.pin;
                    });
                    ht.forEach(function (E) {
                      E.vars.pinnedContainer ||
                        v.forEach(function (R) {
                          if (R.pin.contains(E.trigger)) {
                            var A = E.vars;
                            (A.pinnedContainer = R.pin),
                              (E.vars = null),
                              E.init(A, E.animation);
                          }
                        });
                    });
                  }
                  var F = o.getTween();
                  (Ie = F && F._end > F._dp._time),
                    (Wt = Ge),
                    (Vr.y = 0),
                    It &&
                      (O.isTouch === 1 && (dt.style.position = "absolute"),
                      (dt.scrollTop = 0),
                      O.isTouch === 1 && (dt.style.position = "fixed"));
                }
              },
              onRefresh: function (o) {
                o.animation.invalidate(),
                  o.setPositions(o.start, M() / Rt),
                  Ie || Qr(o),
                  (Vr.y = -zr() * Rt),
                  gn(Vr.y),
                  Zr ||
                    (Ie && (cn = !1),
                    o.animation.progress(
                      c.utils.clamp(0, 1, Wt / Rt / -o.end)
                    )),
                  Ie && ((o.progress -= 0.001), o.update()),
                  (Se.isRefreshing = !1);
              },
              id: "ScrollSmoother",
              scroller: p,
              invalidateOnRefresh: !0,
              start: 0,
              refreshPriority: -9999,
              end: function () {
                return M() / Rt;
              },
              onScrubComplete: function () {
                pt.reset(), Mr && Mr(X);
              },
              scrub: It || !0,
            })),
            (this.smooth = function (g) {
              return (
                arguments.length &&
                  ((It = g || 0),
                  (Rt = (It && +ee.speed) || 1),
                  et.scrubDuration(g)),
                et.getTween() ? et.getTween().duration() : 0
              );
            }),
            et.getTween() && (et.getTween().vars.ease = ee.ease || G),
            (this.scrollTrigger = et),
            ee.effects &&
              this.effects(
                ee.effects === !0
                  ? "[data-" + Or + "speed], [data-" + Or + "lag]"
                  : ee.effects,
                { effectsPadding: ee.effectsPadding, refresh: !1 }
              ),
            ee.sections &&
              this.sections(
                ee.sections === !0 ? "[data-section]" : ee.sections
              ),
            q.forEach(function (g) {
              (g.vars.scroller = dt),
                g.revert(!1, !0),
                g.init(g.vars, g.animation);
            }),
            (this.paused = function (g, o) {
              return arguments.length
                ? (!!ae !== g &&
                    (g
                      ? (et.getTween() && et.getTween().pause(),
                        zr(-Ge / Rt),
                        pt.reset(),
                        (Ve = O.normalizeScroll()),
                        Ve && Ve.disable(),
                        (ae = O.observe({
                          preventDefault: !0,
                          type: "wheel,touch,scroll",
                          debounce: !1,
                          allowClicks: !0,
                          onChangeY: function () {
                            return gt(-Ge);
                          },
                        })),
                        (ae.nested = pe(H, "wheel,touch,scroll", !0, o !== !1)))
                      : (ae.nested.kill(),
                        ae.kill(),
                        (ae = 0),
                        Ve && Ve.enable(),
                        (et.progress =
                          (-Ge / Rt - et.start) / (et.end - et.start)),
                        Qr(et))),
                  this)
                : !!ae;
            }),
            (this.kill = this.revert =
              function () {
                X.paused(!1), Qr(et), et.kill();
                for (var g = (ht || []).concat(jr || []), o = g.length; o--; )
                  g[o].kill();
                O.scrollerProxy(dt),
                  O.removeEventListener("killAll", C),
                  O.removeEventListener("refresh", m),
                  (dt.style.cssText = re),
                  (Ze.style.cssText = Hr);
                var v = O.defaults({});
                v && v.scroller === dt && O.defaults({ scroller: p }),
                  X.normalizer && O.normalizeScroll(!1),
                  clearInterval(Ue),
                  (oe = null),
                  fn && fn.disconnect(),
                  I.style.removeProperty("height"),
                  p.removeEventListener("focusin", Pr);
              }),
            (this.refresh = function (g, o) {
              return et.refresh(g, o);
            }),
            st &&
              (this.normalizer = O.normalizeScroll(
                st === !0 ? { debounce: !0, content: !It && Ze } : st
              )),
            O.config(ee),
            "scrollBehavior" in p.getComputedStyle(I) &&
              c.set([I, H], { scrollBehavior: "auto" }),
            p.addEventListener("focusin", Pr),
            (Ue = setInterval(pn, 250)),
            T.readyState === "loading" ||
              requestAnimationFrame(function () {
                return O.refresh();
              });
        }
        return (
          (Se.register = function (X) {
            return (
              d ||
                ((c = X || Z()),
                se() &&
                  window.document &&
                  ((p = window),
                  (T = document),
                  (H = T.documentElement),
                  (I = T.body)),
                c &&
                  ((V = c.utils.toArray),
                  (U = c.utils.clamp),
                  (G = c.parseEase("expo")),
                  (ge = c.core.context || function () {}),
                  (O = c.core.globals().ScrollTrigger),
                  c.core.globals("ScrollSmoother", Se),
                  I &&
                    O &&
                    ((Ce = c
                      .delayedCall(0.2, function () {
                        return O.isRefreshing || (oe && oe.refresh());
                      })
                      .pause()),
                    (Ee = O.core._getVelocityProp),
                    (pe = O.core._inputObserver),
                    (Se.refresh = O.refresh),
                    (d = 1)))),
              d
            );
          }),
          h(Se, [
            {
              key: "progress",
              get: function () {
                return this.scrollTrigger
                  ? this.scrollTrigger.animation._time / 100
                  : 0;
              },
            },
          ]),
          Se
        );
      })();
    (he.version = "3.13.0"),
      (he.create = function (Se) {
        return oe && Se && oe.content() === V(Se.content)[0] ? oe : new he(Se);
      }),
      (he.get = function () {
        return oe;
      }),
      Z() && c.registerPlugin(he),
      (r.ScrollSmoother = he),
      (r.default = he),
      typeof window > "u" || window !== r
        ? Object.defineProperty(r, "__esModule", { value: !0 })
        : delete window.default;
  });
})(Wi, Wi.exports);
var Ds = Wi.exports,
  Ui = { exports: {} };
(function (w, t) {
  (function (r, s) {
    s(t);
  })(Ki, function (r) {
    function s(b, e) {
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(b, n.key, n);
      }
    }
    function h(b, e, a) {
      return e && s(b.prototype, e), b;
    }
    /*!
     * Observer 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var c,
      d,
      p,
      T,
      H,
      I,
      V,
      U,
      O,
      oe,
      G,
      Ee,
      pe,
      ge = function () {
        return (
          c ||
          (typeof window < "u" && (c = window.gsap) && c.registerPlugin && c)
        );
      },
      Ce = 1,
      se = [],
      Z = [],
      Me = [],
      xe = Date.now,
      ue = function (e, a) {
        return a;
      },
      Ke = function () {
        var e = O.core,
          a = e.bridge || {},
          n = e._scrollers,
          i = e._proxies;
        n.push.apply(n, Z),
          i.push.apply(i, Me),
          (Z = n),
          (Me = i),
          (ue = function (N, S) {
            return a[N](S);
          });
      },
      he = function (e, a) {
        return ~Me.indexOf(e) && Me[Me.indexOf(e) + 1][a];
      },
      Se = function (e) {
        return !!~oe.indexOf(e);
      },
      ee = function (e, a, n, i, _) {
        return e.addEventListener(a, n, { passive: i !== !1, capture: !!_ });
      },
      X = function (e, a, n, i) {
        return e.removeEventListener(a, n, !!i);
      },
      ce = "scrollLeft",
      Vt = "scrollTop",
      Mt = function () {
        return (G && G.isPressed) || Z.cache++;
      },
      Mr = function (e, a) {
        var n = function i(_) {
          if (_ || _ === 0) {
            Ce && (p.history.scrollRestoration = "manual");
            var N = G && G.isPressed;
            (_ = i.v = Math.round(_) || (G && G.iOS ? 1 : 0)),
              e(_),
              (i.cacheID = Z.cache),
              N && ue("ss", _);
          } else
            (a || Z.cache !== i.cacheID || ue("ref")) &&
              ((i.cacheID = Z.cache), (i.v = e()));
          return i.v + i.offset;
        };
        return (n.offset = 0), e && n;
      },
      ut = {
        s: ce,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Mr(function (b) {
          return arguments.length
            ? p.scrollTo(b, ze.sc())
            : p.pageXOffset || T[ce] || H[ce] || I[ce] || 0;
        }),
      },
      ze = {
        s: Vt,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ut,
        sc: Mr(function (b) {
          return arguments.length
            ? p.scrollTo(ut.sc(), b)
            : p.pageYOffset || T[Vt] || H[Vt] || I[Vt] || 0;
        }),
      },
      st = function (e, a) {
        return (
          ((a && a._ctx && a._ctx.selector) || c.utils.toArray)(e)[0] ||
          (typeof e == "string" && c.config().nullTargetWarn !== !1
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      Ur = function (e, a) {
        for (var n = a.length; n--; )
          if (a[n] === e || a[n].contains(e)) return !0;
        return !1;
      },
      Ze = function (e, a) {
        var n = a.s,
          i = a.sc;
        Se(e) && (e = T.scrollingElement || H);
        var _ = Z.indexOf(e),
          N = i === ze.sc ? 1 : 2;
        !~_ && (_ = Z.push(e) - 1), Z[_ + N] || ee(e, "scroll", Mt);
        var S = Z[_ + N],
          te =
            S ||
            (Z[_ + N] =
              Mr(he(e, n), !0) ||
              (Se(e)
                ? i
                : Mr(function (we) {
                    return arguments.length ? (e[n] = we) : e[n];
                  })));
        return (
          (te.target = e),
          S || (te.smooth = c.getProperty(e, "scrollBehavior") === "smooth"),
          te
        );
      },
      dt = function (e, a, n) {
        var i = e,
          _ = e,
          N = xe(),
          S = N,
          te = a || 50,
          we = Math.max(500, te * 3),
          $e = function (me, St) {
            var ct = xe();
            St || ct - N > te
              ? ((_ = i), (i = me), (S = N), (N = ct))
              : n
              ? (i += me)
              : (i = _ + ((me - _) / (ct - S)) * (N - S));
          },
          Be = function () {
            (_ = i = n ? 0 : i), (S = N = 0);
          },
          de = function (me) {
            var St = S,
              ct = _,
              Bt = xe();
            return (
              (me || me === 0) && me !== i && $e(me),
              N === S || Bt - S > we
                ? 0
                : ((i + (n ? ct : -ct)) / ((n ? Bt : N) - St)) * 1e3
            );
          };
        return { update: $e, reset: Be, getVelocity: de };
      },
      Lr = function (e, a) {
        return (
          a && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      et = function (e) {
        var a = Math.max.apply(Math, e),
          n = Math.min.apply(Math, e);
        return Math.abs(a) >= Math.abs(n) ? a : n;
      },
      ht = function () {
        (O = c.core.globals().ScrollTrigger), O && O.core && Ke();
      },
      jr = function (e) {
        return (
          (c = e || ge()),
          !d &&
            c &&
            typeof document < "u" &&
            document.body &&
            ((p = window),
            (T = document),
            (H = T.documentElement),
            (I = T.body),
            (oe = [p, T, H, I]),
            c.utils.clamp,
            (pe = c.core.context || function () {}),
            (U = "onpointerenter" in I ? "pointer" : "mouse"),
            (V = Ue.isTouch =
              p.matchMedia &&
              p.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in p ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                ? 2
                : 0),
            (Ee = Ue.eventTypes =
              (
                "ontouchstart" in H
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in H
                  ? "pointerdown,pointermove,pointercancel,pointerup"
                  : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (Ce = 0);
            }, 500),
            ht(),
            (d = 1)),
          d
        );
      };
    (ut.op = ze), (Z.cache = 0);
    var Ue = (function () {
      function b(a) {
        this.init(a);
      }
      var e = b.prototype;
      return (
        (e.init = function (n) {
          d || jr(c) || console.warn("Please gsap.registerPlugin(Observer)"),
            O || ht();
          var i = n.tolerance,
            _ = n.dragMinimum,
            N = n.type,
            S = n.target,
            te = n.lineHeight,
            we = n.debounce,
            $e = n.preventDefault,
            Be = n.onStop,
            de = n.onStopDelay,
            B = n.ignore,
            me = n.wheelSpeed,
            St = n.event,
            ct = n.onDragStart,
            Bt = n.onDragEnd,
            yt = n.onDrag,
            tr = n.onPress,
            Re = n.onRelease,
            Yr = n.onRight,
            mt = n.onLeft,
            ke = n.onUp,
            gr = n.onDown,
            wr = n.onChangeX,
            fe = n.onChangeY,
            Kt = n.onChange,
            Te = n.onToggleX,
            vn = n.onToggleY,
            Xt = n.onHover,
            _r = n.onHoverEnd,
            mr = n.onMove,
            nt = n.ignoreCheck,
            Lt = n.isNormalizer,
            Ht = n.onGestureStart,
            x = n.onGestureEnd,
            Gt = n.onWheel,
            Yn = n.onEnable,
            kn = n.onDisable,
            Br = n.onClick,
            bn = n.scrollSpeed,
            sr = n.capture,
            Ot = n.allowClicks,
            vr = n.lockAxis,
            lr = n.onLockAxis;
          (this.target = S = st(S) || H),
            (this.vars = n),
            B && (B = c.utils.toArray(B)),
            (i = i || 1e-9),
            (_ = _ || 0),
            (me = me || 1),
            (bn = bn || 1),
            (N = N || "wheel,touch,pointer"),
            (we = we !== !1),
            te || (te = parseFloat(p.getComputedStyle(I).lineHeight) || 22);
          var En,
            br,
            xr,
            je,
            Pt,
            Cr,
            Dr,
            D = this,
            Rr = 0,
            yn = 0,
            Mn = n.passive || (!$e && n.passive !== !1),
            Tt = Ze(S, ut),
            wn = Ze(S, ze),
            Pn = Tt(),
            Bn = wn(),
            Zt =
              ~N.indexOf("touch") &&
              !~N.indexOf("pointer") &&
              Ee[0] === "pointerdown",
            An = Se(S),
            At = S.ownerDocument || T,
            en = [0, 0, 0],
            Xr = [0, 0, 0],
            xn = 0,
            ai = function () {
              return (xn = xe());
            },
            zt = function (ye, Qe) {
              return (
                ((D.event = ye) && B && Ur(ye.target, B)) ||
                (Qe && Zt && ye.pointerType !== "touch") ||
                (nt && nt(ye, Qe))
              );
            },
            Ei = function () {
              D._vx.reset(), D._vy.reset(), br.pause(), Be && Be(D);
            },
            Cn = function () {
              var ye = (D.deltaX = et(en)),
                Qe = (D.deltaY = et(Xr)),
                Q = Math.abs(ye) >= i,
                Pe = Math.abs(Qe) >= i;
              Kt && (Q || Pe) && Kt(D, ye, Qe, en, Xr),
                Q &&
                  (Yr && D.deltaX > 0 && Yr(D),
                  mt && D.deltaX < 0 && mt(D),
                  wr && wr(D),
                  Te && D.deltaX < 0 != Rr < 0 && Te(D),
                  (Rr = D.deltaX),
                  (en[0] = en[1] = en[2] = 0)),
                Pe &&
                  (gr && D.deltaY > 0 && gr(D),
                  ke && D.deltaY < 0 && ke(D),
                  fe && fe(D),
                  vn && D.deltaY < 0 != yn < 0 && vn(D),
                  (yn = D.deltaY),
                  (Xr[0] = Xr[1] = Xr[2] = 0)),
                (je || xr) &&
                  (mr && mr(D),
                  xr && (ct && xr === 1 && ct(D), yt && yt(D), (xr = 0)),
                  (je = !1)),
                Cr && !(Cr = !1) && lr && lr(D),
                Pt && (Gt(D), (Pt = !1)),
                (En = 0);
            },
            $n = function (ye, Qe, Q) {
              (en[Q] += ye),
                (Xr[Q] += Qe),
                D._vx.update(ye),
                D._vy.update(Qe),
                we ? En || (En = requestAnimationFrame(Cn)) : Cn();
            },
            Qn = function (ye, Qe) {
              vr &&
                !Dr &&
                ((D.axis = Dr = Math.abs(ye) > Math.abs(Qe) ? "x" : "y"),
                (Cr = !0)),
                Dr !== "y" && ((en[2] += ye), D._vx.update(ye, !0)),
                Dr !== "x" && ((Xr[2] += Qe), D._vy.update(Qe, !0)),
                we ? En || (En = requestAnimationFrame(Cn)) : Cn();
            },
            Dn = function (ye) {
              if (!zt(ye, 1)) {
                ye = Lr(ye, $e);
                var Qe = ye.clientX,
                  Q = ye.clientY,
                  Pe = Qe - D.x,
                  _e = Q - D.y,
                  Ae = D.isDragging;
                (D.x = Qe),
                  (D.y = Q),
                  (Ae ||
                    ((Pe || _e) &&
                      (Math.abs(D.startX - Qe) >= _ ||
                        Math.abs(D.startY - Q) >= _))) &&
                    ((xr = Ae ? 2 : 1), Ae || (D.isDragging = !0), Qn(Pe, _e));
              }
            },
            Xn = (D.onPress = function (De) {
              zt(De, 1) ||
                (De && De.button) ||
                ((D.axis = Dr = null),
                br.pause(),
                (D.isPressed = !0),
                (De = Lr(De)),
                (Rr = yn = 0),
                (D.startX = D.x = De.clientX),
                (D.startY = D.y = De.clientY),
                D._vx.reset(),
                D._vy.reset(),
                ee(Lt ? S : At, Ee[1], Dn, Mn, !0),
                (D.deltaX = D.deltaY = 0),
                tr && tr(D));
            }),
            Xe = (D.onRelease = function (De) {
              if (!zt(De, 1)) {
                X(Lt ? S : At, Ee[1], Dn, !0);
                var ye = !isNaN(D.y - D.startY),
                  Qe = D.isDragging,
                  Q =
                    Qe &&
                    (Math.abs(D.x - D.startX) > 3 ||
                      Math.abs(D.y - D.startY) > 3),
                  Pe = Lr(De);
                !Q &&
                  ye &&
                  (D._vx.reset(),
                  D._vy.reset(),
                  $e &&
                    Ot &&
                    c.delayedCall(0.08, function () {
                      if (xe() - xn > 300 && !De.defaultPrevented) {
                        if (De.target.click) De.target.click();
                        else if (At.createEvent) {
                          var _e = At.createEvent("MouseEvents");
                          _e.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            p,
                            1,
                            Pe.screenX,
                            Pe.screenY,
                            Pe.clientX,
                            Pe.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            De.target.dispatchEvent(_e);
                        }
                      }
                    })),
                  (D.isDragging = D.isGesturing = D.isPressed = !1),
                  Be && Qe && !Lt && br.restart(!0),
                  xr && Cn(),
                  Bt && Qe && Bt(D),
                  Re && Re(D, Q);
              }
            }),
            Gn = function (ye) {
              return (
                ye.touches &&
                ye.touches.length > 1 &&
                (D.isGesturing = !0) &&
                Ht(ye, D.isDragging)
              );
            },
            tn = function () {
              return (D.isGesturing = !1) || x(D);
            },
            rn = function (ye) {
              if (!zt(ye)) {
                var Qe = Tt(),
                  Q = wn();
                $n((Qe - Pn) * bn, (Q - Bn) * bn, 1),
                  (Pn = Qe),
                  (Bn = Q),
                  Be && br.restart(!0);
              }
            },
            nn = function (ye) {
              if (!zt(ye)) {
                (ye = Lr(ye, $e)), Gt && (Pt = !0);
                var Qe =
                  (ye.deltaMode === 1
                    ? te
                    : ye.deltaMode === 2
                    ? p.innerHeight
                    : 1) * me;
                $n(ye.deltaX * Qe, ye.deltaY * Qe, 0),
                  Be && !Lt && br.restart(!0);
              }
            },
            qn = function (ye) {
              if (!zt(ye)) {
                var Qe = ye.clientX,
                  Q = ye.clientY,
                  Pe = Qe - D.x,
                  _e = Q - D.y;
                (D.x = Qe),
                  (D.y = Q),
                  (je = !0),
                  Be && br.restart(!0),
                  (Pe || _e) && Qn(Pe, _e);
              }
            },
            Jn = function (ye) {
              (D.event = ye), Xt(D);
            },
            Sn = function (ye) {
              (D.event = ye), _r(D);
            },
            ci = function (ye) {
              return zt(ye) || (Lr(ye, $e) && Br(D));
            };
          (br = D._dc = c.delayedCall(de || 0.25, Ei).pause()),
            (D.deltaX = D.deltaY = 0),
            (D._vx = dt(0, 50, !0)),
            (D._vy = dt(0, 50, !0)),
            (D.scrollX = Tt),
            (D.scrollY = wn),
            (D.isDragging = D.isGesturing = D.isPressed = !1),
            pe(this),
            (D.enable = function (De) {
              return (
                D.isEnabled ||
                  (ee(An ? At : S, "scroll", Mt),
                  N.indexOf("scroll") >= 0 &&
                    ee(An ? At : S, "scroll", rn, Mn, sr),
                  N.indexOf("wheel") >= 0 && ee(S, "wheel", nn, Mn, sr),
                  ((N.indexOf("touch") >= 0 && V) ||
                    N.indexOf("pointer") >= 0) &&
                    (ee(S, Ee[0], Xn, Mn, sr),
                    ee(At, Ee[2], Xe),
                    ee(At, Ee[3], Xe),
                    Ot && ee(S, "click", ai, !0, !0),
                    Br && ee(S, "click", ci),
                    Ht && ee(At, "gesturestart", Gn),
                    x && ee(At, "gestureend", tn),
                    Xt && ee(S, U + "enter", Jn),
                    _r && ee(S, U + "leave", Sn),
                    mr && ee(S, U + "move", qn)),
                  (D.isEnabled = !0),
                  (D.isDragging = D.isGesturing = D.isPressed = je = xr = !1),
                  D._vx.reset(),
                  D._vy.reset(),
                  (Pn = Tt()),
                  (Bn = wn()),
                  De && De.type && Xn(De),
                  Yn && Yn(D)),
                D
              );
            }),
            (D.disable = function () {
              D.isEnabled &&
                (se.filter(function (De) {
                  return De !== D && Se(De.target);
                }).length || X(An ? At : S, "scroll", Mt),
                D.isPressed &&
                  (D._vx.reset(), D._vy.reset(), X(Lt ? S : At, Ee[1], Dn, !0)),
                X(An ? At : S, "scroll", rn, sr),
                X(S, "wheel", nn, sr),
                X(S, Ee[0], Xn, sr),
                X(At, Ee[2], Xe),
                X(At, Ee[3], Xe),
                X(S, "click", ai, !0),
                X(S, "click", ci),
                X(At, "gesturestart", Gn),
                X(At, "gestureend", tn),
                X(S, U + "enter", Jn),
                X(S, U + "leave", Sn),
                X(S, U + "move", qn),
                (D.isEnabled = D.isPressed = D.isDragging = !1),
                kn && kn(D));
            }),
            (D.kill = D.revert =
              function () {
                D.disable();
                var De = se.indexOf(D);
                De >= 0 && se.splice(De, 1), G === D && (G = 0);
              }),
            se.push(D),
            Lt && Se(S) && (G = D),
            D.enable(St);
        }),
        h(b, [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        b
      );
    })();
    (Ue.version = "3.13.0"),
      (Ue.create = function (b) {
        return new Ue(b);
      }),
      (Ue.register = jr),
      (Ue.getAll = function () {
        return se.slice();
      }),
      (Ue.getById = function (b) {
        return se.filter(function (e) {
          return e.vars.id === b;
        })[0];
      }),
      ge() && c.registerPlugin(Ue);
    /*!
     * ScrollTrigger 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var re,
      Hr,
      ae,
      Ve,
      Wt,
      Ie,
      ln,
      an,
      Or,
      zr,
      It,
      Rt,
      Ge,
      Kr,
      Zr,
      pt,
      pn,
      Vr,
      $r,
      cn,
      Qr,
      gn,
      gt,
      fn,
      Tn,
      Pr,
      Y,
      l,
      u,
      m,
      C,
      k,
      y,
      P,
      L = 1,
      M = Date.now,
      q = M(),
      g = 0,
      o = 0,
      v = function (e, a, n) {
        var i = lt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return (n["_" + a + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
      },
      F = function (e, a) {
        return a && (!lt(e) || e.substr(0, 6) !== "clamp(")
          ? "clamp(" + e + ")"
          : e;
      },
      E = function b() {
        return o && requestAnimationFrame(b);
      },
      R = function () {
        return (Kr = 1);
      },
      A = function () {
        return (Kr = 0);
      },
      $ = function (e) {
        return e;
      },
      j = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      },
      K = function () {
        return typeof window < "u";
      },
      le = function () {
        return re || (K() && (re = window.gsap) && re.registerPlugin && re);
      },
      ne = function (e) {
        return !!~ln.indexOf(e);
      },
      He = function (e) {
        return (
          (e === "Height" ? C : ae["inner" + e]) ||
          Wt["client" + e] ||
          Ie["client" + e]
        );
      },
      ie = function (e) {
        return (
          he(e, "getBoundingClientRect") ||
          (ne(e)
            ? function () {
                return (Si.width = ae.innerWidth), (Si.height = C), Si;
              }
            : function () {
                return _n(e);
              })
        );
      },
      Ye = function (e, a, n) {
        var i = n.d,
          _ = n.d2,
          N = n.a;
        return (N = he(e, "getBoundingClientRect"))
          ? function () {
              return N()[i];
            }
          : function () {
              return (a ? He(_) : e["client" + _]) || 0;
            };
      },
      bt = function (e, a) {
        return !a || ~Me.indexOf(e)
          ? ie(e)
          : function () {
              return Si;
            };
      },
      tt = function (e, a) {
        var n = a.s,
          i = a.d2,
          _ = a.d,
          N = a.a;
        return Math.max(
          0,
          (n = "scroll" + i) && (N = he(e, n))
            ? N() - ie(e)()[_]
            : ne(e)
            ? (Wt[n] || Ie[n]) - He(i)
            : e[n] - e["offset" + i]
        );
      },
      ir = function (e, a) {
        for (var n = 0; n < $r.length; n += 3)
          (!a || ~a.indexOf($r[n + 1])) && e($r[n], $r[n + 1], $r[n + 2]);
      },
      lt = function (e) {
        return typeof e == "string";
      },
      _t = function (e) {
        return typeof e == "function";
      },
      at = function (e) {
        return typeof e == "number";
      },
      Nt = function (e) {
        return typeof e == "object";
      },
      Qt = function (e, a, n) {
        return e && e.progress(a ? 0 : 1) && n && e.pause();
      },
      rt = function (e, a) {
        if (e.enabled) {
          var n = e._ctx
            ? e._ctx.add(function () {
                return a(e);
              })
            : a(e);
          n && n.totalTime && (e.callbackAnimation = n);
        }
      },
      Ct = Math.abs,
      Jr = "left",
      Jt = "top",
      er = "right",
      Ft = "bottom",
      or = "width",
      yr = "height",
      Nn = "Right",
      Ln = "Left",
      Hn = "Top",
      On = "Bottom",
      We = "padding",
      Ir = "margin",
      jn = "Width",
      Ni = "Height",
      Yt = "px",
      Fr = function (e) {
        return ae.getComputedStyle(e);
      },
      $o = function (e) {
        var a = Fr(e).position;
        e.style.position = a === "absolute" || a === "fixed" ? a : "relative";
      },
      Zi = function (e, a) {
        for (var n in a) n in e || (e[n] = a[n]);
        return e;
      },
      _n = function (e, a) {
        var n =
            a &&
            Fr(e)[Zr] !== "matrix(1, 0, 0, 1, 0, 0)" &&
            re
              .to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          i = e.getBoundingClientRect();
        return n && n.progress(0).kill(), i;
      },
      di = function (e, a) {
        var n = a.d2;
        return e["offset" + n] || e["client" + n] || 0;
      },
      $i = function (e) {
        var a = [],
          n = e.labels,
          i = e.duration(),
          _;
        for (_ in n) a.push(n[_] / i);
        return a;
      },
      Qo = function (e) {
        return function (a) {
          return re.utils.snap($i(e), a);
        };
      },
      Li = function (e) {
        var a = re.utils.snap(e),
          n =
            Array.isArray(e) &&
            e.slice(0).sort(function (i, _) {
              return i - _;
            });
        return n
          ? function (i, _, N) {
              N === void 0 && (N = 0.001);
              var S;
              if (!_) return a(i);
              if (_ > 0) {
                for (i -= N, S = 0; S < n.length; S++)
                  if (n[S] >= i) return n[S];
                return n[S - 1];
              } else
                for (S = n.length, i += N; S--; ) if (n[S] <= i) return n[S];
              return n[0];
            }
          : function (i, _, N) {
              N === void 0 && (N = 0.001);
              var S = a(i);
              return !_ || Math.abs(S - i) < N || S - i < 0 == _ < 0
                ? S
                : a(_ < 0 ? i - e : i + e);
            };
      },
      Jo = function (e) {
        return function (a, n) {
          return Li($i(e))(a, n.direction);
        };
      },
      pi = function (e, a, n, i) {
        return n.split(",").forEach(function (_) {
          return e(a, _, i);
        });
      },
      Ut = function (e, a, n, i, _) {
        return e.addEventListener(a, n, { passive: !i, capture: !!_ });
      },
      jt = function (e, a, n, i) {
        return e.removeEventListener(a, n, !!i);
      },
      gi = function (e, a, n) {
        (n = n && n.wheelHandler),
          n && (e(a, "wheel", n), e(a, "touchmove", n));
      },
      Qi = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      _i = { toggleActions: "play", anticipatePin: 0 },
      mi = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      vi = function (e, a) {
        if (lt(e)) {
          var n = e.indexOf("="),
            i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          ~n &&
            (e.indexOf("%") > n && (i *= a / 100), (e = e.substr(0, n - 1))),
            (e =
              i +
              (e in mi
                ? mi[e] * a
                : ~e.indexOf("%")
                ? (parseFloat(e) * a) / 100
                : parseFloat(e) || 0));
        }
        return e;
      },
      bi = function (e, a, n, i, _, N, S, te) {
        var we = _.startColor,
          $e = _.endColor,
          Be = _.fontSize,
          de = _.indent,
          B = _.fontWeight,
          me = Ve.createElement("div"),
          St = ne(n) || he(n, "pinType") === "fixed",
          ct = e.indexOf("scroller") !== -1,
          Bt = St ? Ie : n,
          yt = e.indexOf("start") !== -1,
          tr = yt ? we : $e,
          Re =
            "border-color:" +
            tr +
            ";font-size:" +
            Be +
            ";color:" +
            tr +
            ";font-weight:" +
            B +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (Re += "position:" + ((ct || te) && St ? "fixed;" : "absolute;")),
          (ct || te || !St) &&
            (Re += (i === ze ? er : Ft) + ":" + (N + parseFloat(de)) + "px;"),
          S &&
            (Re +=
              "box-sizing:border-box;text-align:left;width:" +
              S.offsetWidth +
              "px;"),
          (me._isStart = yt),
          me.setAttribute(
            "class",
            "gsap-marker-" + e + (a ? " marker-" + a : "")
          ),
          (me.style.cssText = Re),
          (me.innerText = a || a === 0 ? e + "-" + a : e),
          Bt.children[0]
            ? Bt.insertBefore(me, Bt.children[0])
            : Bt.appendChild(me),
          (me._offset = me["offset" + i.op.d2]),
          yi(me, 0, i, yt),
          me
        );
      },
      yi = function (e, a, n, i) {
        var _ = { display: "block" },
          N = n[i ? "os2" : "p2"],
          S = n[i ? "p2" : "os2"];
        (e._isFlipped = i),
          (_[n.a + "Percent"] = i ? -100 : 0),
          (_[n.a] = i ? "1px" : 0),
          (_["border" + N + jn] = 1),
          (_["border" + S + jn] = 0),
          (_[n.p] = a + "px"),
          re.set(e, _);
      },
      Oe = [],
      Hi = {},
      oi,
      Ji = function () {
        return M() - g > 34 && (oi || (oi = requestAnimationFrame(mn)));
      },
      Kn = function () {
        (!gt || !gt.isPressed || gt.startX > Ie.clientWidth) &&
          (Z.cache++,
          gt ? oi || (oi = requestAnimationFrame(mn)) : mn(),
          g || Vn("scrollStart"),
          (g = M()));
      },
      Oi = function () {
        (Pr = ae.innerWidth), (Tn = ae.innerHeight);
      },
      si = function (e) {
        Z.cache++,
          (e === !0 ||
            (!Ge &&
              !gn &&
              !Ve.fullscreenElement &&
              !Ve.webkitFullscreenElement &&
              (!fn ||
                Pr !== ae.innerWidth ||
                Math.abs(ae.innerHeight - Tn) > ae.innerHeight * 0.25))) &&
            an.restart(!0);
      },
      zn = {},
      es = [],
      eo = function b() {
        return jt(Fe, "scrollEnd", b) || Fn(!0);
      },
      Vn = function (e) {
        return (
          (zn[e] &&
            zn[e].map(function (a) {
              return a();
            })) ||
          es
        );
      },
      Ar = [],
      to = function (e) {
        for (var a = 0; a < Ar.length; a += 5)
          (!e || (Ar[a + 4] && Ar[a + 4].query === e)) &&
            ((Ar[a].style.cssText = Ar[a + 1]),
            Ar[a].getBBox && Ar[a].setAttribute("transform", Ar[a + 2] || ""),
            (Ar[a + 3].uncache = 1));
      },
      zi = function (e, a) {
        var n;
        for (pt = 0; pt < Oe.length; pt++)
          (n = Oe[pt]),
            n && (!a || n._ctx === a) && (e ? n.kill(1) : n.revert(!0, !0));
        (k = !0), a && to(a), a || Vn("revert");
      },
      ro = function (e, a) {
        Z.cache++,
          (a || !pr) &&
            Z.forEach(function (n) {
              return _t(n) && n.cacheID++ && (n.rec = 0);
            }),
          lt(e) && (ae.history.scrollRestoration = u = e);
      },
      pr,
      In = 0,
      no,
      ts = function () {
        if (no !== In) {
          var e = (no = In);
          requestAnimationFrame(function () {
            return e === In && Fn(!0);
          });
        }
      },
      io = function () {
        Ie.appendChild(m),
          (C = (!gt && m.offsetHeight) || ae.innerHeight),
          Ie.removeChild(m);
      },
      oo = function (e) {
        return Or(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
        ).forEach(function (a) {
          return (a.style.display = e ? "none" : "block");
        });
      },
      Fn = function (e, a) {
        if (
          ((Wt = Ve.documentElement),
          (Ie = Ve.body),
          (ln = [ae, Ve, Wt, Ie]),
          g && !e && !k)
        ) {
          Ut(Fe, "scrollEnd", eo);
          return;
        }
        io(),
          (pr = Fe.isRefreshing = !0),
          Z.forEach(function (i) {
            return _t(i) && ++i.cacheID && (i.rec = i());
          });
        var n = Vn("refreshInit");
        cn && Fe.sort(),
          a || zi(),
          Z.forEach(function (i) {
            _t(i) &&
              (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
          }),
          Oe.slice(0).forEach(function (i) {
            return i.refresh();
          }),
          (k = !1),
          Oe.forEach(function (i) {
            if (i._subPinOffset && i.pin) {
              var _ = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                N = i.pin[_];
              i.revert(!0, 1), i.adjustPinSpacing(i.pin[_] - N), i.refresh();
            }
          }),
          (y = 1),
          oo(!0),
          Oe.forEach(function (i) {
            var _ = tt(i.scroller, i._dir),
              N = i.vars.end === "max" || (i._endClamp && i.end > _),
              S = i._startClamp && i.start >= _;
            (N || S) &&
              i.setPositions(
                S ? _ - 1 : i.start,
                N ? Math.max(S ? _ : i.start + 1, _) : i.end,
                !0
              );
          }),
          oo(!1),
          (y = 0),
          n.forEach(function (i) {
            return i && i.render && i.render(-1);
          }),
          Z.forEach(function (i) {
            _t(i) &&
              (i.smooth &&
                requestAnimationFrame(function () {
                  return (i.target.style.scrollBehavior = "smooth");
                }),
              i.rec && i(i.rec));
          }),
          ro(u, 1),
          an.pause(),
          In++,
          (pr = 2),
          mn(2),
          Oe.forEach(function (i) {
            return _t(i.vars.onRefresh) && i.vars.onRefresh(i);
          }),
          (pr = Fe.isRefreshing = !1),
          Vn("refresh");
      },
      Vi = 0,
      wi = 1,
      li,
      mn = function (e) {
        if (e === 2 || (!pr && !k)) {
          (Fe.isUpdating = !0), li && li.update(0);
          var a = Oe.length,
            n = M(),
            i = n - q >= 50,
            _ = a && Oe[0].scroll();
          if (
            ((wi = Vi > _ ? -1 : 1),
            pr || (Vi = _),
            i &&
              (g && !Kr && n - g > 200 && ((g = 0), Vn("scrollEnd")),
              (It = q),
              (q = n)),
            wi < 0)
          ) {
            for (pt = a; pt-- > 0; ) Oe[pt] && Oe[pt].update(0, i);
            wi = 1;
          } else for (pt = 0; pt < a; pt++) Oe[pt] && Oe[pt].update(0, i);
          Fe.isUpdating = !1;
        }
        oi = 0;
      },
      Ii = [
        Jr,
        Jt,
        Ft,
        er,
        Ir + On,
        Ir + Nn,
        Ir + Hn,
        Ir + Ln,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      xi = Ii.concat([
        or,
        yr,
        "boxSizing",
        "max" + jn,
        "max" + Ni,
        "position",
        Ir,
        We,
        We + Hn,
        We + Nn,
        We + On,
        We + Ln,
      ]),
      rs = function (e, a, n) {
        Zn(n);
        var i = e._gsap;
        if (i.spacerIsNative) Zn(i.spacerState);
        else if (e._gsap.swappedIn) {
          var _ = a.parentNode;
          _ && (_.insertBefore(e, a), _.removeChild(a));
        }
        e._gsap.swappedIn = !1;
      },
      Fi = function (e, a, n, i) {
        if (!e._gsap.swappedIn) {
          for (var _ = Ii.length, N = a.style, S = e.style, te; _--; )
            (te = Ii[_]), (N[te] = n[te]);
          (N.position = n.position === "absolute" ? "absolute" : "relative"),
            n.display === "inline" && (N.display = "inline-block"),
            (S[Ft] = S[er] = "auto"),
            (N.flexBasis = n.flexBasis || "auto"),
            (N.overflow = "visible"),
            (N.boxSizing = "border-box"),
            (N[or] = di(e, ut) + Yt),
            (N[yr] = di(e, ze) + Yt),
            (N[We] = S[Ir] = S[Jt] = S[Jr] = "0"),
            Zn(i),
            (S[or] = S["max" + jn] = n[or]),
            (S[yr] = S["max" + Ni] = n[yr]),
            (S[We] = n[We]),
            e.parentNode !== a &&
              (e.parentNode.insertBefore(a, e), a.appendChild(e)),
            (e._gsap.swappedIn = !0);
        }
      },
      ns = /([A-Z])/g,
      Zn = function (e) {
        if (e) {
          var a = e.t.style,
            n = e.length,
            i = 0,
            _,
            N;
          for ((e.t._gsap || re.core.getCache(e.t)).uncache = 1; i < n; i += 2)
            (N = e[i + 1]),
              (_ = e[i]),
              N
                ? (a[_] = N)
                : a[_] && a.removeProperty(_.replace(ns, "-$1").toLowerCase());
        }
      },
      Ci = function (e) {
        for (var a = xi.length, n = e.style, i = [], _ = 0; _ < a; _++)
          i.push(xi[_], n[xi[_]]);
        return (i.t = e), i;
      },
      is = function (e, a, n) {
        for (var i = [], _ = e.length, N = n ? 8 : 0, S; N < _; N += 2)
          (S = e[N]), i.push(S, S in a ? a[S] : e[N + 1]);
        return (i.t = e.t), i;
      },
      Si = { left: 0, top: 0 },
      so = function (e, a, n, i, _, N, S, te, we, $e, Be, de, B, me) {
        _t(e) && (e = e(te)),
          lt(e) &&
            e.substr(0, 3) === "max" &&
            (e = de + (e.charAt(4) === "=" ? vi("0" + e.substr(3), n) : 0));
        var St = B ? B.time() : 0,
          ct,
          Bt,
          yt;
        if ((B && B.seek(0), isNaN(e) || (e = +e), at(e)))
          B &&
            (e = re.utils.mapRange(
              B.scrollTrigger.start,
              B.scrollTrigger.end,
              0,
              de,
              e
            )),
            S && yi(S, n, i, !0);
        else {
          _t(a) && (a = a(te));
          var tr = (e || "0").split(" "),
            Re,
            Yr,
            mt,
            ke;
          (yt = st(a, te) || Ie),
            (Re = _n(yt) || {}),
            (!Re || (!Re.left && !Re.top)) &&
              Fr(yt).display === "none" &&
              ((ke = yt.style.display),
              (yt.style.display = "block"),
              (Re = _n(yt)),
              ke
                ? (yt.style.display = ke)
                : yt.style.removeProperty("display")),
            (Yr = vi(tr[0], Re[i.d])),
            (mt = vi(tr[1] || "0", n)),
            (e = Re[i.p] - we[i.p] - $e + Yr + _ - mt),
            S && yi(S, mt, i, n - mt < 20 || (S._isStart && mt > 20)),
            (n -= n - mt);
        }
        if ((me && ((te[me] = e || -0.001), e < 0 && (e = 0)), N)) {
          var gr = e + n,
            wr = N._isStart;
          (ct = "scroll" + i.d2),
            yi(
              N,
              gr,
              i,
              (wr && gr > 20) ||
                (!wr &&
                  (Be ? Math.max(Ie[ct], Wt[ct]) : N.parentNode[ct]) <= gr + 1)
            ),
            Be &&
              ((we = _n(S)),
              Be && (N.style[i.op.p] = we[i.op.p] - i.op.m - N._offset + Yt));
        }
        return (
          B &&
            yt &&
            ((ct = _n(yt)),
            B.seek(de),
            (Bt = _n(yt)),
            (B._caScrollDist = ct[i.p] - Bt[i.p]),
            (e = (e / B._caScrollDist) * de)),
          B && B.seek(St),
          B ? e : Math.round(e)
        );
      },
      os = /(webkit|moz|length|cssText|inset)/i,
      lo = function (e, a, n, i) {
        if (e.parentNode !== a) {
          var _ = e.style,
            N,
            S;
          if (a === Ie) {
            (e._stOrig = _.cssText), (S = Fr(e));
            for (N in S)
              !+N &&
                !os.test(N) &&
                S[N] &&
                typeof _[N] == "string" &&
                N !== "0" &&
                (_[N] = S[N]);
            (_.top = n), (_.left = i);
          } else _.cssText = e._stOrig;
          (re.core.getCache(e).uncache = 1), a.appendChild(e);
        }
      },
      ao = function (e, a, n) {
        var i = a,
          _ = i;
        return function (N) {
          var S = Math.round(e());
          return (
            S !== i &&
              S !== _ &&
              Math.abs(S - i) > 3 &&
              Math.abs(S - _) > 3 &&
              ((N = S), n && n()),
            (_ = i),
            (i = Math.round(N)),
            i
          );
        };
      },
      Ti = function (e, a, n) {
        var i = {};
        (i[a.p] = "+=" + n), re.set(e, i);
      },
      co = function (e, a) {
        var n = Ze(e, a),
          i = "_scroll" + a.p2,
          _ = function N(S, te, we, $e, Be) {
            var de = N.tween,
              B = te.onComplete,
              me = {};
            we = we || n();
            var St = ao(n, we, function () {
              de.kill(), (N.tween = 0);
            });
            return (
              (Be = ($e && Be) || 0),
              ($e = $e || S - we),
              de && de.kill(),
              (te[i] = S),
              (te.inherit = !1),
              (te.modifiers = me),
              (me[i] = function () {
                return St(we + $e * de.ratio + Be * de.ratio * de.ratio);
              }),
              (te.onUpdate = function () {
                Z.cache++, N.tween && mn();
              }),
              (te.onComplete = function () {
                (N.tween = 0), B && B.call(de);
              }),
              (de = N.tween = re.to(e, te)),
              de
            );
          };
        return (
          (e[i] = n),
          (n.wheelHandler = function () {
            return _.tween && _.tween.kill() && (_.tween = 0);
          }),
          Ut(e, "wheel", n.wheelHandler),
          Fe.isTouch && Ut(e, "touchmove", n.wheelHandler),
          _
        );
      },
      Fe = (function () {
        function b(a, n) {
          Hr ||
            b.register(re) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            l(this),
            this.init(a, n);
        }
        var e = b.prototype;
        return (
          (e.init = function (n, i) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              !o)
            ) {
              this.update = this.refresh = this.kill = $;
              return;
            }
            n = Zi(lt(n) || at(n) || n.nodeType ? { trigger: n } : n, _i);
            var _ = n,
              N = _.onUpdate,
              S = _.toggleClass,
              te = _.id,
              we = _.onToggle,
              $e = _.onRefresh,
              Be = _.scrub,
              de = _.trigger,
              B = _.pin,
              me = _.pinSpacing,
              St = _.invalidateOnRefresh,
              ct = _.anticipatePin,
              Bt = _.onScrubComplete,
              yt = _.onSnapComplete,
              tr = _.once,
              Re = _.snap,
              Yr = _.pinReparent,
              mt = _.pinSpacer,
              ke = _.containerAnimation,
              gr = _.fastScrollEnd,
              wr = _.preventOverlaps,
              fe =
                n.horizontal || (n.containerAnimation && n.horizontal !== !1)
                  ? ut
                  : ze,
              Kt = !Be && Be !== 0,
              Te = st(n.scroller || ae),
              vn = re.core.getCache(Te),
              Xt = ne(Te),
              _r =
                ("pinType" in n
                  ? n.pinType
                  : he(Te, "pinType") || (Xt && "fixed")) === "fixed",
              mr = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
              nt = Kt && n.toggleActions.split(" "),
              Lt = "markers" in n ? n.markers : _i.markers,
              Ht = Xt ? 0 : parseFloat(Fr(Te)["border" + fe.p2 + jn]) || 0,
              x = this,
              Gt =
                n.onRefreshInit &&
                function () {
                  return n.onRefreshInit(x);
                },
              Yn = Ye(Te, Xt, fe),
              kn = bt(Te, Xt),
              Br = 0,
              bn = 0,
              sr = 0,
              Ot = Ze(Te, fe),
              vr,
              lr,
              En,
              br,
              xr,
              je,
              Pt,
              Cr,
              Dr,
              D,
              Rr,
              yn,
              Mn,
              Tt,
              wn,
              Pn,
              Bn,
              Zt,
              An,
              At,
              en,
              Xr,
              xn,
              ai,
              zt,
              Ei,
              Cn,
              $n,
              Qn,
              Dn,
              Xn,
              Xe,
              Gn,
              tn,
              rn,
              nn,
              qn,
              Jn,
              Sn;
            if (
              ((x._startClamp = x._endClamp = !1),
              (x._dir = fe),
              (ct *= 45),
              (x.scroller = Te),
              (x.scroll = ke ? ke.time.bind(ke) : Ot),
              (br = Ot()),
              (x.vars = n),
              (i = i || n.animation),
              "refreshPriority" in n &&
                ((cn = 1), n.refreshPriority === -9999 && (li = x)),
              (vn.tweenScroll = vn.tweenScroll || {
                top: co(Te, ze),
                left: co(Te, ut),
              }),
              (x.tweenTo = vr = vn.tweenScroll[fe.p]),
              (x.scrubDuration = function (Q) {
                (Gn = at(Q) && Q),
                  Gn
                    ? Xe
                      ? Xe.duration(Q)
                      : (Xe = re.to(i, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: Gn,
                          paused: !0,
                          onComplete: function () {
                            return Bt && Bt(x);
                          },
                        }))
                    : (Xe && Xe.progress(1).kill(), (Xe = 0));
              }),
              i &&
                ((i.vars.lazy = !1),
                (i._initted && !x.isReverted) ||
                  (i.vars.immediateRender !== !1 &&
                    n.immediateRender !== !1 &&
                    i.duration() &&
                    i.render(0, !0, !0)),
                (x.animation = i.pause()),
                (i.scrollTrigger = x),
                x.scrubDuration(Be),
                (Dn = 0),
                te || (te = i.vars.id)),
              Re &&
                ((!Nt(Re) || Re.push) && (Re = { snapTo: Re }),
                "scrollBehavior" in Ie.style &&
                  re.set(Xt ? [Ie, Wt] : Te, { scrollBehavior: "auto" }),
                Z.forEach(function (Q) {
                  return (
                    _t(Q) &&
                    Q.target === (Xt ? Ve.scrollingElement || Wt : Te) &&
                    (Q.smooth = !1)
                  );
                }),
                (En = _t(Re.snapTo)
                  ? Re.snapTo
                  : Re.snapTo === "labels"
                  ? Qo(i)
                  : Re.snapTo === "labelsDirectional"
                  ? Jo(i)
                  : Re.directional !== !1
                  ? function (Q, Pe) {
                      return Li(Re.snapTo)(
                        Q,
                        M() - bn < 500 ? 0 : Pe.direction
                      );
                    }
                  : re.utils.snap(Re.snapTo)),
                (tn = Re.duration || { min: 0.1, max: 2 }),
                (tn = Nt(tn) ? zr(tn.min, tn.max) : zr(tn, tn)),
                (rn = re
                  .delayedCall(Re.delay || Gn / 2 || 0.1, function () {
                    var Q = Ot(),
                      Pe = M() - bn < 500,
                      _e = vr.tween;
                    if (
                      (Pe || Math.abs(x.getVelocity()) < 10) &&
                      !_e &&
                      !Kr &&
                      Br !== Q
                    ) {
                      var Ae = (Q - je) / Tt,
                        $t = i && !Kt ? i.totalProgress() : Ae,
                        qe = Pe ? 0 : (($t - Xn) / (M() - It)) * 1e3 || 0,
                        Dt = re.utils.clamp(
                          -Ae,
                          1 - Ae,
                          (Ct(qe / 2) * qe) / 0.185
                        ),
                        ar = Ae + (Re.inertia === !1 ? 0 : Dt),
                        kt,
                        vt,
                        it = Re,
                        on = it.onStart,
                        wt = it.onInterrupt,
                        Nr = it.onComplete;
                      if (
                        ((kt = En(ar, x)),
                        at(kt) || (kt = ar),
                        (vt = Math.max(0, Math.round(je + kt * Tt))),
                        Q <= Pt && Q >= je && vt !== Q)
                      ) {
                        if (_e && !_e._initted && _e.data <= Ct(vt - Q)) return;
                        Re.inertia === !1 && (Dt = kt - Ae),
                          vr(
                            vt,
                            {
                              duration: tn(
                                Ct(
                                  (Math.max(Ct(ar - $t), Ct(kt - $t)) * 0.185) /
                                    qe /
                                    0.05 || 0
                                )
                              ),
                              ease: Re.ease || "power3",
                              data: Ct(vt - Q),
                              onInterrupt: function () {
                                return rn.restart(!0) && wt && wt(x);
                              },
                              onComplete: function () {
                                x.update(),
                                  (Br = Ot()),
                                  i &&
                                    !Kt &&
                                    (Xe
                                      ? Xe.resetTo(
                                          "totalProgress",
                                          kt,
                                          i._tTime / i._tDur
                                        )
                                      : i.progress(kt)),
                                  (Dn = Xn =
                                    i && !Kt ? i.totalProgress() : x.progress),
                                  yt && yt(x),
                                  Nr && Nr(x);
                              },
                            },
                            Q,
                            Dt * Tt,
                            vt - Q - Dt * Tt
                          ),
                          on && on(x, vr.tween);
                      }
                    } else x.isActive && Br !== Q && rn.restart(!0);
                  })
                  .pause())),
              te && (Hi[te] = x),
              (de = x.trigger = st(de || (B !== !0 && B))),
              (Sn = de && de._gsap && de._gsap.stRevert),
              Sn && (Sn = Sn(x)),
              (B = B === !0 ? de : st(B)),
              lt(S) && (S = { targets: de, className: S }),
              B &&
                (me === !1 ||
                  me === Ir ||
                  (me =
                    !me &&
                    B.parentNode &&
                    B.parentNode.style &&
                    Fr(B.parentNode).display === "flex"
                      ? !1
                      : We),
                (x.pin = B),
                (lr = re.core.getCache(B)),
                lr.spacer
                  ? (wn = lr.pinState)
                  : (mt &&
                      ((mt = st(mt)),
                      mt &&
                        !mt.nodeType &&
                        (mt = mt.current || mt.nativeElement),
                      (lr.spacerIsNative = !!mt),
                      mt && (lr.spacerState = Ci(mt))),
                    (lr.spacer = Zt = mt || Ve.createElement("div")),
                    Zt.classList.add("pin-spacer"),
                    te && Zt.classList.add("pin-spacer-" + te),
                    (lr.pinState = wn = Ci(B))),
                n.force3D !== !1 && re.set(B, { force3D: !0 }),
                (x.spacer = Zt = lr.spacer),
                (Qn = Fr(B)),
                (ai = Qn[me + fe.os2]),
                (At = re.getProperty(B)),
                (en = re.quickSetter(B, fe.a, Yt)),
                Fi(B, Zt, Qn),
                (Bn = Ci(B))),
              Lt)
            ) {
              (yn = Nt(Lt) ? Zi(Lt, Qi) : Qi),
                (D = bi("scroller-start", te, Te, fe, yn, 0)),
                (Rr = bi("scroller-end", te, Te, fe, yn, 0, D)),
                (An = D["offset" + fe.op.d2]);
              var ci = st(he(Te, "content") || Te);
              (Cr = this.markerStart = bi("start", te, ci, fe, yn, An, 0, ke)),
                (Dr = this.markerEnd = bi("end", te, ci, fe, yn, An, 0, ke)),
                ke && (Jn = re.quickSetter([Cr, Dr], fe.a, Yt)),
                !_r &&
                  !(Me.length && he(Te, "fixedMarkers") === !0) &&
                  ($o(Xt ? Ie : Te),
                  re.set([D, Rr], { force3D: !0 }),
                  (Ei = re.quickSetter(D, fe.a, Yt)),
                  ($n = re.quickSetter(Rr, fe.a, Yt)));
            }
            if (ke) {
              var De = ke.vars.onUpdate,
                ye = ke.vars.onUpdateParams;
              ke.eventCallback("onUpdate", function () {
                x.update(0, 0, 1), De && De.apply(ke, ye || []);
              });
            }
            if (
              ((x.previous = function () {
                return Oe[Oe.indexOf(x) - 1];
              }),
              (x.next = function () {
                return Oe[Oe.indexOf(x) + 1];
              }),
              (x.revert = function (Q, Pe) {
                if (!Pe) return x.kill(!0);
                var _e = Q !== !1 || !x.enabled,
                  Ae = Ge;
                _e !== x.isReverted &&
                  (_e &&
                    ((nn = Math.max(Ot(), x.scroll.rec || 0)),
                    (sr = x.progress),
                    (qn = i && i.progress())),
                  Cr &&
                    [Cr, Dr, D, Rr].forEach(function ($t) {
                      return ($t.style.display = _e ? "none" : "block");
                    }),
                  _e && ((Ge = x), x.update(_e)),
                  B &&
                    (!Yr || !x.isActive) &&
                    (_e ? rs(B, Zt, wn) : Fi(B, Zt, Fr(B), zt)),
                  _e || x.update(_e),
                  (Ge = Ae),
                  (x.isReverted = _e));
              }),
              (x.refresh = function (Q, Pe, _e, Ae) {
                if (!((Ge || !x.enabled) && !Pe)) {
                  if (B && Q && g) {
                    Ut(b, "scrollEnd", eo);
                    return;
                  }
                  !pr && Gt && Gt(x),
                    (Ge = x),
                    vr.tween && !_e && (vr.tween.kill(), (vr.tween = 0)),
                    Xe && Xe.pause(),
                    St &&
                      i &&
                      (i.revert({ kill: !1 }).invalidate(),
                      i.getChildren &&
                        i.getChildren(!0, !0, !1).forEach(function (Rn) {
                          return (
                            Rn.vars.immediateRender && Rn.render(0, !0, !0)
                          );
                        })),
                    x.isReverted || x.revert(!0, !0),
                    (x._subPinOffset = !1);
                  var $t = Yn(),
                    qe = kn(),
                    Dt = ke ? ke.duration() : tt(Te, fe),
                    ar = Tt <= 0.01 || !Tt,
                    kt = 0,
                    vt = Ae || 0,
                    it = Nt(_e) ? _e.end : n.end,
                    on = n.endTrigger || de,
                    wt = Nt(_e)
                      ? _e.start
                      : n.start ||
                        (n.start === 0 || !de ? 0 : B ? "0 0" : "0 100%"),
                    Nr = (x.pinnedContainer =
                      n.pinnedContainer && st(n.pinnedContainer, x)),
                    un = (de && Math.max(0, Oe.indexOf(x))) || 0,
                    rr = un,
                    nr,
                    cr,
                    Wn,
                    Mi,
                    fr,
                    qt,
                    hn,
                    Bi,
                    go,
                    fi,
                    dn,
                    ui,
                    Pi;
                  for (
                    Lt &&
                    Nt(_e) &&
                    ((ui = re.getProperty(D, fe.p)),
                    (Pi = re.getProperty(Rr, fe.p)));
                    rr-- > 0;

                  )
                    (qt = Oe[rr]),
                      qt.end || qt.refresh(0, 1) || (Ge = x),
                      (hn = qt.pin),
                      hn &&
                        (hn === de || hn === B || hn === Nr) &&
                        !qt.isReverted &&
                        (fi || (fi = []), fi.unshift(qt), qt.revert(!0, !0)),
                      qt !== Oe[rr] && (un--, rr--);
                  for (
                    _t(wt) && (wt = wt(x)),
                      wt = v(wt, "start", x),
                      je =
                        so(
                          wt,
                          de,
                          $t,
                          fe,
                          Ot(),
                          Cr,
                          D,
                          x,
                          qe,
                          Ht,
                          _r,
                          Dt,
                          ke,
                          x._startClamp && "_startClamp"
                        ) || (B ? -0.001 : 0),
                      _t(it) && (it = it(x)),
                      lt(it) &&
                        !it.indexOf("+=") &&
                        (~it.indexOf(" ")
                          ? (it = (lt(wt) ? wt.split(" ")[0] : "") + it)
                          : ((kt = vi(it.substr(2), $t)),
                            (it = lt(wt)
                              ? wt
                              : (ke
                                  ? re.utils.mapRange(
                                      0,
                                      ke.duration(),
                                      ke.scrollTrigger.start,
                                      ke.scrollTrigger.end,
                                      je
                                    )
                                  : je) + kt),
                            (on = de))),
                      it = v(it, "end", x),
                      Pt =
                        Math.max(
                          je,
                          so(
                            it || (on ? "100% 0" : Dt),
                            on,
                            $t,
                            fe,
                            Ot() + kt,
                            Dr,
                            Rr,
                            x,
                            qe,
                            Ht,
                            _r,
                            Dt,
                            ke,
                            x._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      kt = 0,
                      rr = un;
                    rr--;

                  )
                    (qt = Oe[rr]),
                      (hn = qt.pin),
                      hn &&
                        qt.start - qt._pinPush <= je &&
                        !ke &&
                        qt.end > 0 &&
                        ((nr =
                          qt.end -
                          (x._startClamp ? Math.max(0, qt.start) : qt.start)),
                        ((hn === de && qt.start - qt._pinPush < je) ||
                          hn === Nr) &&
                          isNaN(wt) &&
                          (kt += nr * (1 - qt.progress)),
                        hn === B && (vt += nr));
                  if (
                    ((je += kt),
                    (Pt += kt),
                    x._startClamp && (x._startClamp += kt),
                    x._endClamp &&
                      !pr &&
                      ((x._endClamp = Pt || -0.001),
                      (Pt = Math.min(Pt, tt(Te, fe)))),
                    (Tt = Pt - je || ((je -= 0.01) && 0.001)),
                    ar &&
                      (sr = re.utils.clamp(
                        0,
                        1,
                        re.utils.normalize(je, Pt, nn)
                      )),
                    (x._pinPush = vt),
                    Cr &&
                      kt &&
                      ((nr = {}),
                      (nr[fe.a] = "+=" + kt),
                      Nr && (nr[fe.p] = "-=" + Ot()),
                      re.set([Cr, Dr], nr)),
                    B && !(y && x.end >= tt(Te, fe)))
                  )
                    (nr = Fr(B)),
                      (Mi = fe === ze),
                      (Wn = Ot()),
                      (Xr = parseFloat(At(fe.a)) + vt),
                      !Dt &&
                        Pt > 1 &&
                        ((dn = (Xt ? Ve.scrollingElement || Wt : Te).style),
                        (dn = {
                          style: dn,
                          value: dn["overflow" + fe.a.toUpperCase()],
                        }),
                        Xt &&
                          Fr(Ie)["overflow" + fe.a.toUpperCase()] !==
                            "scroll" &&
                          (dn.style["overflow" + fe.a.toUpperCase()] =
                            "scroll")),
                      Fi(B, Zt, nr),
                      (Bn = Ci(B)),
                      (cr = _n(B, !0)),
                      (Bi = _r && Ze(Te, Mi ? ut : ze)()),
                      me
                        ? ((zt = [me + fe.os2, Tt + vt + Yt]),
                          (zt.t = Zt),
                          (rr = me === We ? di(B, fe) + Tt + vt : 0),
                          rr &&
                            (zt.push(fe.d, rr + Yt),
                            Zt.style.flexBasis !== "auto" &&
                              (Zt.style.flexBasis = rr + Yt)),
                          Zn(zt),
                          Nr &&
                            Oe.forEach(function (Rn) {
                              Rn.pin === Nr &&
                                Rn.vars.pinSpacing !== !1 &&
                                (Rn._subPinOffset = !0);
                            }),
                          _r && Ot(nn))
                        : ((rr = di(B, fe)),
                          rr &&
                            Zt.style.flexBasis !== "auto" &&
                            (Zt.style.flexBasis = rr + Yt)),
                      _r &&
                        ((fr = {
                          top: cr.top + (Mi ? Wn - je : Bi) + Yt,
                          left: cr.left + (Mi ? Bi : Wn - je) + Yt,
                          boxSizing: "border-box",
                          position: "fixed",
                        }),
                        (fr[or] = fr["max" + jn] = Math.ceil(cr.width) + Yt),
                        (fr[yr] = fr["max" + Ni] = Math.ceil(cr.height) + Yt),
                        (fr[Ir] =
                          fr[Ir + Hn] =
                          fr[Ir + Nn] =
                          fr[Ir + On] =
                          fr[Ir + Ln] =
                            "0"),
                        (fr[We] = nr[We]),
                        (fr[We + Hn] = nr[We + Hn]),
                        (fr[We + Nn] = nr[We + Nn]),
                        (fr[We + On] = nr[We + On]),
                        (fr[We + Ln] = nr[We + Ln]),
                        (Pn = is(wn, fr, Yr)),
                        pr && Ot(0)),
                      i
                        ? ((go = i._initted),
                          Qr(1),
                          i.render(i.duration(), !0, !0),
                          (xn = At(fe.a) - Xr + Tt + vt),
                          (Cn = Math.abs(Tt - xn) > 1),
                          _r && Cn && Pn.splice(Pn.length - 2, 2),
                          i.render(0, !0, !0),
                          go || i.invalidate(!0),
                          i.parent || i.totalTime(i.totalTime()),
                          Qr(0))
                        : (xn = Tt),
                      dn &&
                        (dn.value
                          ? (dn.style["overflow" + fe.a.toUpperCase()] =
                              dn.value)
                          : dn.style.removeProperty("overflow-" + fe.a));
                  else if (de && Ot() && !ke)
                    for (cr = de.parentNode; cr && cr !== Ie; )
                      cr._pinOffset &&
                        ((je -= cr._pinOffset), (Pt -= cr._pinOffset)),
                        (cr = cr.parentNode);
                  fi &&
                    fi.forEach(function (Rn) {
                      return Rn.revert(!1, !0);
                    }),
                    (x.start = je),
                    (x.end = Pt),
                    (br = xr = pr ? nn : Ot()),
                    !ke && !pr && (br < nn && Ot(nn), (x.scroll.rec = 0)),
                    x.revert(!1, !0),
                    (bn = M()),
                    rn && ((Br = -1), rn.restart(!0)),
                    (Ge = 0),
                    i &&
                      Kt &&
                      (i._initted || qn) &&
                      i.progress() !== qn &&
                      i.progress(qn || 0, !0).render(i.time(), !0, !0),
                    (ar ||
                      sr !== x.progress ||
                      ke ||
                      St ||
                      (i && !i._initted)) &&
                      (i &&
                        !Kt &&
                        (i._initted || sr || i.vars.immediateRender !== !1) &&
                        i.totalProgress(
                          ke && je < -0.001 && !sr
                            ? re.utils.normalize(je, Pt, 0)
                            : sr,
                          !0
                        ),
                      (x.progress = ar || (br - je) / Tt === sr ? 0 : sr)),
                    B && me && (Zt._pinOffset = Math.round(x.progress * xn)),
                    Xe && Xe.invalidate(),
                    isNaN(ui) ||
                      ((ui -= re.getProperty(D, fe.p)),
                      (Pi -= re.getProperty(Rr, fe.p)),
                      Ti(D, fe, ui),
                      Ti(Cr, fe, ui - (Ae || 0)),
                      Ti(Rr, fe, Pi),
                      Ti(Dr, fe, Pi - (Ae || 0))),
                    ar && !pr && x.update(),
                    $e && !pr && !Mn && ((Mn = !0), $e(x), (Mn = !1));
                }
              }),
              (x.getVelocity = function () {
                return ((Ot() - xr) / (M() - It)) * 1e3 || 0;
              }),
              (x.endAnimation = function () {
                Qt(x.callbackAnimation),
                  i &&
                    (Xe
                      ? Xe.progress(1)
                      : i.paused()
                      ? Kt || Qt(i, x.direction < 0, 1)
                      : Qt(i, i.reversed()));
              }),
              (x.labelToScroll = function (Q) {
                return (
                  (i &&
                    i.labels &&
                    (je || x.refresh() || je) +
                      (i.labels[Q] / i.duration()) * Tt) ||
                  0
                );
              }),
              (x.getTrailing = function (Q) {
                var Pe = Oe.indexOf(x),
                  _e =
                    x.direction > 0
                      ? Oe.slice(0, Pe).reverse()
                      : Oe.slice(Pe + 1);
                return (
                  lt(Q)
                    ? _e.filter(function (Ae) {
                        return Ae.vars.preventOverlaps === Q;
                      })
                    : _e
                ).filter(function (Ae) {
                  return x.direction > 0 ? Ae.end <= je : Ae.start >= Pt;
                });
              }),
              (x.update = function (Q, Pe, _e) {
                if (!(ke && !_e && !Q)) {
                  var Ae = pr === !0 ? nn : x.scroll(),
                    $t = Q ? 0 : (Ae - je) / Tt,
                    qe = $t < 0 ? 0 : $t > 1 ? 1 : $t || 0,
                    Dt = x.progress,
                    ar,
                    kt,
                    vt,
                    it,
                    on,
                    wt,
                    Nr,
                    un;
                  if (
                    (Pe &&
                      ((xr = br),
                      (br = ke ? Ot() : Ae),
                      Re &&
                        ((Xn = Dn), (Dn = i && !Kt ? i.totalProgress() : qe))),
                    ct &&
                      B &&
                      !Ge &&
                      !L &&
                      g &&
                      (!qe && je < Ae + ((Ae - xr) / (M() - It)) * ct
                        ? (qe = 1e-4)
                        : qe === 1 &&
                          Pt > Ae + ((Ae - xr) / (M() - It)) * ct &&
                          (qe = 0.9999)),
                    qe !== Dt && x.enabled)
                  ) {
                    if (
                      ((ar = x.isActive = !!qe && qe < 1),
                      (kt = !!Dt && Dt < 1),
                      (wt = ar !== kt),
                      (on = wt || !!qe != !!Dt),
                      (x.direction = qe > Dt ? 1 : -1),
                      (x.progress = qe),
                      on &&
                        !Ge &&
                        ((vt = qe && !Dt ? 0 : qe === 1 ? 1 : Dt === 1 ? 2 : 3),
                        Kt &&
                          ((it =
                            (!wt && nt[vt + 1] !== "none" && nt[vt + 1]) ||
                            nt[vt]),
                          (un =
                            i &&
                            (it === "complete" || it === "reset" || it in i)))),
                      wr &&
                        (wt || un) &&
                        (un || Be || !i) &&
                        (_t(wr)
                          ? wr(x)
                          : x.getTrailing(wr).forEach(function (Wn) {
                              return Wn.endAnimation();
                            })),
                      Kt ||
                        (Xe && !Ge && !L
                          ? (Xe._dp._time - Xe._start !== Xe._time &&
                              Xe.render(Xe._dp._time - Xe._start),
                            Xe.resetTo
                              ? Xe.resetTo(
                                  "totalProgress",
                                  qe,
                                  i._tTime / i._tDur
                                )
                              : ((Xe.vars.totalProgress = qe),
                                Xe.invalidate().restart()))
                          : i && i.totalProgress(qe, !!(Ge && (bn || Q)))),
                      B)
                    ) {
                      if ((Q && me && (Zt.style[me + fe.os2] = ai), !_r))
                        en(j(Xr + xn * qe));
                      else if (on) {
                        if (
                          ((Nr =
                            !Q &&
                            qe > Dt &&
                            Pt + 1 > Ae &&
                            Ae + 1 >= tt(Te, fe)),
                          Yr)
                        )
                          if (!Q && (ar || Nr)) {
                            var rr = _n(B, !0),
                              nr = Ae - je;
                            lo(
                              B,
                              Ie,
                              rr.top + (fe === ze ? nr : 0) + Yt,
                              rr.left + (fe === ze ? 0 : nr) + Yt
                            );
                          } else lo(B, Zt);
                        Zn(ar || Nr ? Pn : Bn),
                          (Cn && qe < 1 && ar) ||
                            en(Xr + (qe === 1 && !Nr ? xn : 0));
                      }
                    }
                    Re && !vr.tween && !Ge && !L && rn.restart(!0),
                      S &&
                        (wt || (tr && qe && (qe < 1 || !P))) &&
                        Or(S.targets).forEach(function (Wn) {
                          return Wn.classList[ar || tr ? "add" : "remove"](
                            S.className
                          );
                        }),
                      N && !Kt && !Q && N(x),
                      on && !Ge
                        ? (Kt &&
                            (un &&
                              (it === "complete"
                                ? i.pause().totalProgress(1)
                                : it === "reset"
                                ? i.restart(!0).pause()
                                : it === "restart"
                                ? i.restart(!0)
                                : i[it]()),
                            N && N(x)),
                          (wt || !P) &&
                            (we && wt && rt(x, we),
                            mr[vt] && rt(x, mr[vt]),
                            tr && (qe === 1 ? x.kill(!1, 1) : (mr[vt] = 0)),
                            wt ||
                              ((vt = qe === 1 ? 1 : 3),
                              mr[vt] && rt(x, mr[vt]))),
                          gr &&
                            !ar &&
                            Math.abs(x.getVelocity()) > (at(gr) ? gr : 2500) &&
                            (Qt(x.callbackAnimation),
                            Xe
                              ? Xe.progress(1)
                              : Qt(i, it === "reverse" ? 1 : !qe, 1)))
                        : Kt && N && !Ge && N(x);
                  }
                  if ($n) {
                    var cr = ke
                      ? (Ae / ke.duration()) * (ke._caScrollDist || 0)
                      : Ae;
                    Ei(cr + (D._isFlipped ? 1 : 0)), $n(cr);
                  }
                  Jn && Jn((-Ae / ke.duration()) * (ke._caScrollDist || 0));
                }
              }),
              (x.enable = function (Q, Pe) {
                x.enabled ||
                  ((x.enabled = !0),
                  Ut(Te, "resize", si),
                  Xt || Ut(Te, "scroll", Kn),
                  Gt && Ut(b, "refreshInit", Gt),
                  Q !== !1 && ((x.progress = sr = 0), (br = xr = Br = Ot())),
                  Pe !== !1 && x.refresh());
              }),
              (x.getTween = function (Q) {
                return Q && vr ? vr.tween : Xe;
              }),
              (x.setPositions = function (Q, Pe, _e, Ae) {
                if (ke) {
                  var $t = ke.scrollTrigger,
                    qe = ke.duration(),
                    Dt = $t.end - $t.start;
                  (Q = $t.start + (Dt * Q) / qe),
                    (Pe = $t.start + (Dt * Pe) / qe);
                }
                x.refresh(
                  !1,
                  !1,
                  {
                    start: F(Q, _e && !!x._startClamp),
                    end: F(Pe, _e && !!x._endClamp),
                  },
                  Ae
                ),
                  x.update();
              }),
              (x.adjustPinSpacing = function (Q) {
                if (zt && Q) {
                  var Pe = zt.indexOf(fe.d) + 1;
                  (zt[Pe] = parseFloat(zt[Pe]) + Q + Yt),
                    (zt[1] = parseFloat(zt[1]) + Q + Yt),
                    Zn(zt);
                }
              }),
              (x.disable = function (Q, Pe) {
                if (
                  x.enabled &&
                  (Q !== !1 && x.revert(!0, !0),
                  (x.enabled = x.isActive = !1),
                  Pe || (Xe && Xe.pause()),
                  (nn = 0),
                  lr && (lr.uncache = 1),
                  Gt && jt(b, "refreshInit", Gt),
                  rn &&
                    (rn.pause(), vr.tween && vr.tween.kill() && (vr.tween = 0)),
                  !Xt)
                ) {
                  for (var _e = Oe.length; _e--; )
                    if (Oe[_e].scroller === Te && Oe[_e] !== x) return;
                  jt(Te, "resize", si), Xt || jt(Te, "scroll", Kn);
                }
              }),
              (x.kill = function (Q, Pe) {
                x.disable(Q, Pe), Xe && !Pe && Xe.kill(), te && delete Hi[te];
                var _e = Oe.indexOf(x);
                _e >= 0 && Oe.splice(_e, 1),
                  _e === pt && wi > 0 && pt--,
                  (_e = 0),
                  Oe.forEach(function (Ae) {
                    return Ae.scroller === x.scroller && (_e = 1);
                  }),
                  _e || pr || (x.scroll.rec = 0),
                  i &&
                    ((i.scrollTrigger = null),
                    Q && i.revert({ kill: !1 }),
                    Pe || i.kill()),
                  Cr &&
                    [Cr, Dr, D, Rr].forEach(function (Ae) {
                      return Ae.parentNode && Ae.parentNode.removeChild(Ae);
                    }),
                  li === x && (li = 0),
                  B &&
                    (lr && (lr.uncache = 1),
                    (_e = 0),
                    Oe.forEach(function (Ae) {
                      return Ae.pin === B && _e++;
                    }),
                    _e || (lr.spacer = 0)),
                  n.onKill && n.onKill(x);
              }),
              Oe.push(x),
              x.enable(!1, !1),
              Sn && Sn(x),
              i && i.add && !Tt)
            ) {
              var Qe = x.update;
              (x.update = function () {
                (x.update = Qe), Z.cache++, je || Pt || x.refresh();
              }),
                re.delayedCall(0.01, x.update),
                (Tt = 0.01),
                (je = Pt = 0);
            } else x.refresh();
            B && ts();
          }),
          (b.register = function (n) {
            return (
              Hr ||
                ((re = n || le()),
                K() && window.document && b.enable(),
                (Hr = o)),
              Hr
            );
          }),
          (b.defaults = function (n) {
            if (n) for (var i in n) _i[i] = n[i];
            return _i;
          }),
          (b.disable = function (n, i) {
            (o = 0),
              Oe.forEach(function (N) {
                return N[i ? "kill" : "disable"](n);
              }),
              jt(ae, "wheel", Kn),
              jt(Ve, "scroll", Kn),
              clearInterval(Rt),
              jt(Ve, "touchcancel", $),
              jt(Ie, "touchstart", $),
              pi(jt, Ve, "pointerdown,touchstart,mousedown", R),
              pi(jt, Ve, "pointerup,touchend,mouseup", A),
              an.kill(),
              ir(jt);
            for (var _ = 0; _ < Z.length; _ += 3)
              gi(jt, Z[_], Z[_ + 1]), gi(jt, Z[_], Z[_ + 2]);
          }),
          (b.enable = function () {
            if (
              ((ae = window),
              (Ve = document),
              (Wt = Ve.documentElement),
              (Ie = Ve.body),
              re &&
                ((Or = re.utils.toArray),
                (zr = re.utils.clamp),
                (l = re.core.context || $),
                (Qr = re.core.suppressOverwrites || $),
                (u = ae.history.scrollRestoration || "auto"),
                (Vi = ae.pageYOffset || 0),
                re.core.globals("ScrollTrigger", b),
                Ie))
            ) {
              (o = 1),
                (m = document.createElement("div")),
                (m.style.height = "100vh"),
                (m.style.position = "absolute"),
                io(),
                E(),
                Ue.register(re),
                (b.isTouch = Ue.isTouch),
                (Y =
                  Ue.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (fn = Ue.isTouch === 1),
                Ut(ae, "wheel", Kn),
                (ln = [ae, Ve, Wt, Ie]),
                re.matchMedia
                  ? ((b.matchMedia = function (we) {
                      var $e = re.matchMedia(),
                        Be;
                      for (Be in we) $e.add(Be, we[Be]);
                      return $e;
                    }),
                    re.addEventListener("matchMediaInit", function () {
                      return zi();
                    }),
                    re.addEventListener("matchMediaRevert", function () {
                      return to();
                    }),
                    re.addEventListener("matchMedia", function () {
                      Fn(0, 1), Vn("matchMedia");
                    }),
                    re.matchMedia().add("(orientation: portrait)", function () {
                      return Oi(), Oi;
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                Oi(),
                Ut(Ve, "scroll", Kn);
              var n = Ie.hasAttribute("style"),
                i = Ie.style,
                _ = i.borderTopStyle,
                N = re.core.Animation.prototype,
                S,
                te;
              for (
                N.revert ||
                  Object.defineProperty(N, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  i.borderTopStyle = "solid",
                  S = _n(Ie),
                  ze.m = Math.round(S.top + ze.sc()) || 0,
                  ut.m = Math.round(S.left + ut.sc()) || 0,
                  _
                    ? (i.borderTopStyle = _)
                    : i.removeProperty("border-top-style"),
                  n ||
                    (Ie.setAttribute("style", ""), Ie.removeAttribute("style")),
                  Rt = setInterval(Ji, 250),
                  re.delayedCall(0.5, function () {
                    return (L = 0);
                  }),
                  Ut(Ve, "touchcancel", $),
                  Ut(Ie, "touchstart", $),
                  pi(Ut, Ve, "pointerdown,touchstart,mousedown", R),
                  pi(Ut, Ve, "pointerup,touchend,mouseup", A),
                  Zr = re.utils.checkPrefix("transform"),
                  xi.push(Zr),
                  Hr = M(),
                  an = re.delayedCall(0.2, Fn).pause(),
                  $r = [
                    Ve,
                    "visibilitychange",
                    function () {
                      var we = ae.innerWidth,
                        $e = ae.innerHeight;
                      Ve.hidden
                        ? ((pn = we), (Vr = $e))
                        : (pn !== we || Vr !== $e) && si();
                    },
                    Ve,
                    "DOMContentLoaded",
                    Fn,
                    ae,
                    "load",
                    Fn,
                    ae,
                    "resize",
                    si,
                  ],
                  ir(Ut),
                  Oe.forEach(function (we) {
                    return we.enable(0, 1);
                  }),
                  te = 0;
                te < Z.length;
                te += 3
              )
                gi(jt, Z[te], Z[te + 1]), gi(jt, Z[te], Z[te + 2]);
            }
          }),
          (b.config = function (n) {
            "limitCallbacks" in n && (P = !!n.limitCallbacks);
            var i = n.syncInterval;
            (i && clearInterval(Rt)) || ((Rt = i) && setInterval(Ji, i)),
              "ignoreMobileResize" in n &&
                (fn = b.isTouch === 1 && n.ignoreMobileResize),
              "autoRefreshEvents" in n &&
                (ir(jt) || ir(Ut, n.autoRefreshEvents || "none"),
                (gn = (n.autoRefreshEvents + "").indexOf("resize") === -1));
          }),
          (b.scrollerProxy = function (n, i) {
            var _ = st(n),
              N = Z.indexOf(_),
              S = ne(_);
            ~N && Z.splice(N, S ? 6 : 2),
              i && (S ? Me.unshift(ae, i, Ie, i, Wt, i) : Me.unshift(_, i));
          }),
          (b.clearMatchMedia = function (n) {
            Oe.forEach(function (i) {
              return i._ctx && i._ctx.query === n && i._ctx.kill(!0, !0);
            });
          }),
          (b.isInViewport = function (n, i, _) {
            var N = (lt(n) ? st(n) : n).getBoundingClientRect(),
              S = N[_ ? or : yr] * i || 0;
            return _
              ? N.right - S > 0 && N.left + S < ae.innerWidth
              : N.bottom - S > 0 && N.top + S < ae.innerHeight;
          }),
          (b.positionInViewport = function (n, i, _) {
            lt(n) && (n = st(n));
            var N = n.getBoundingClientRect(),
              S = N[_ ? or : yr],
              te =
                i == null
                  ? S / 2
                  : i in mi
                  ? mi[i] * S
                  : ~i.indexOf("%")
                  ? (parseFloat(i) * S) / 100
                  : parseFloat(i) || 0;
            return _
              ? (N.left + te) / ae.innerWidth
              : (N.top + te) / ae.innerHeight;
          }),
          (b.killAll = function (n) {
            if (
              (Oe.slice(0).forEach(function (_) {
                return _.vars.id !== "ScrollSmoother" && _.kill();
              }),
              n !== !0)
            ) {
              var i = zn.killAll || [];
              (zn = {}),
                i.forEach(function (_) {
                  return _();
                });
            }
          }),
          b
        );
      })();
    (Fe.version = "3.13.0"),
      (Fe.saveStyles = function (b) {
        return b
          ? Or(b).forEach(function (e) {
              if (e && e.style) {
                var a = Ar.indexOf(e);
                a >= 0 && Ar.splice(a, 5),
                  Ar.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    re.core.getCache(e),
                    l()
                  );
              }
            })
          : Ar;
      }),
      (Fe.revert = function (b, e) {
        return zi(!b, e);
      }),
      (Fe.create = function (b, e) {
        return new Fe(b, e);
      }),
      (Fe.refresh = function (b) {
        return b ? si(!0) : (Hr || Fe.register()) && Fn(!0);
      }),
      (Fe.update = function (b) {
        return ++Z.cache && mn(b === !0 ? 2 : 0);
      }),
      (Fe.clearScrollMemory = ro),
      (Fe.maxScroll = function (b, e) {
        return tt(b, e ? ut : ze);
      }),
      (Fe.getScrollFunc = function (b, e) {
        return Ze(st(b), e ? ut : ze);
      }),
      (Fe.getById = function (b) {
        return Hi[b];
      }),
      (Fe.getAll = function () {
        return Oe.filter(function (b) {
          return b.vars.id !== "ScrollSmoother";
        });
      }),
      (Fe.isScrolling = function () {
        return !!g;
      }),
      (Fe.snapDirectional = Li),
      (Fe.addEventListener = function (b, e) {
        var a = zn[b] || (zn[b] = []);
        ~a.indexOf(e) || a.push(e);
      }),
      (Fe.removeEventListener = function (b, e) {
        var a = zn[b],
          n = a && a.indexOf(e);
        n >= 0 && a.splice(n, 1);
      }),
      (Fe.batch = function (b, e) {
        var a = [],
          n = {},
          i = e.interval || 0.016,
          _ = e.batchMax || 1e9,
          N = function (we, $e) {
            var Be = [],
              de = [],
              B = re
                .delayedCall(i, function () {
                  $e(Be, de), (Be = []), (de = []);
                })
                .pause();
            return function (me) {
              Be.length || B.restart(!0),
                Be.push(me.trigger),
                de.push(me),
                _ <= Be.length && B.progress(1);
            };
          },
          S;
        for (S in e)
          n[S] =
            S.substr(0, 2) === "on" && _t(e[S]) && S !== "onRefreshInit"
              ? N(S, e[S])
              : e[S];
        return (
          _t(_) &&
            ((_ = _()),
            Ut(Fe, "refresh", function () {
              return (_ = e.batchMax());
            })),
          Or(b).forEach(function (te) {
            var we = {};
            for (S in n) we[S] = n[S];
            (we.trigger = te), a.push(Fe.create(we));
          }),
          a
        );
      });
    var fo = function (e, a, n, i) {
        return (
          a > i ? e(i) : a < 0 && e(0),
          n > i ? (i - a) / (n - a) : n < 0 ? a / (a - n) : 1
        );
      },
      Yi = function b(e, a) {
        a === !0
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
              a === !0
                ? "auto"
                : a
                ? "pan-" + a + (Ue.isTouch ? " pinch-zoom" : "")
                : "none"),
          e === Wt && b(Ie, a);
      },
      ki = { auto: 1, scroll: 1 },
      ss = function (e) {
        var a = e.event,
          n = e.target,
          i = e.axis,
          _ = (a.changedTouches ? a.changedTouches[0] : a).target,
          N = _._gsap || re.core.getCache(_),
          S = M(),
          te;
        if (!N._isScrollT || S - N._isScrollT > 2e3) {
          for (
            ;
            _ &&
            _ !== Ie &&
            ((_.scrollHeight <= _.clientHeight &&
              _.scrollWidth <= _.clientWidth) ||
              !(ki[(te = Fr(_)).overflowY] || ki[te.overflowX]));

          )
            _ = _.parentNode;
          (N._isScroll =
            _ &&
            _ !== n &&
            !ne(_) &&
            (ki[(te = Fr(_)).overflowY] || ki[te.overflowX])),
            (N._isScrollT = S);
        }
        (N._isScroll || i === "x") &&
          (a.stopPropagation(), (a._gsapAllow = !0));
      },
      uo = function (e, a, n, i) {
        return Ue.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: (i = i && ss),
          onPress: i,
          onDrag: i,
          onScroll: i,
          onEnable: function () {
            return n && Ut(Ve, Ue.eventTypes[0], po, !1, !0);
          },
          onDisable: function () {
            return jt(Ve, Ue.eventTypes[0], po, !0);
          },
        });
      },
      ls = /(input|label|select|textarea)/i,
      ho,
      po = function (e) {
        var a = ls.test(e.target.tagName);
        (a || ho) && ((e._gsapAllow = !0), (ho = a));
      },
      as = function (e) {
        Nt(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer");
        var a = e,
          n = a.normalizeScrollX,
          i = a.momentum,
          _ = a.allowNestedScroll,
          N = a.onRelease,
          S,
          te,
          we = st(e.target) || Wt,
          $e = re.core.globals().ScrollSmoother,
          Be = $e && $e.get(),
          de =
            Y &&
            ((e.content && st(e.content)) ||
              (Be && e.content !== !1 && !Be.smooth() && Be.content())),
          B = Ze(we, ze),
          me = Ze(we, ut),
          St = 1,
          ct =
            (Ue.isTouch && ae.visualViewport
              ? ae.visualViewport.scale * ae.visualViewport.width
              : ae.outerWidth) / ae.innerWidth,
          Bt = 0,
          yt = _t(i)
            ? function () {
                return i(S);
              }
            : function () {
                return i || 2.8;
              },
          tr,
          Re,
          Yr = uo(we, e.type, !0, _),
          mt = function () {
            return (Re = !1);
          },
          ke = $,
          gr = $,
          wr = function () {
            (te = tt(we, ze)),
              (gr = zr(Y ? 1 : 0, te)),
              n && (ke = zr(0, tt(we, ut))),
              (tr = In);
          },
          fe = function () {
            (de._gsap.y = j(parseFloat(de._gsap.y) + B.offset) + "px"),
              (de.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(de._gsap.y) +
                ", 0, 1)"),
              (B.offset = B.cacheID = 0);
          },
          Kt = function () {
            if (Re) {
              requestAnimationFrame(mt);
              var Lt = j(S.deltaY / 2),
                Ht = gr(B.v - Lt);
              if (de && Ht !== B.v + B.offset) {
                B.offset = Ht - B.v;
                var x = j((parseFloat(de && de._gsap.y) || 0) - B.offset);
                (de.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  x +
                  ", 0, 1)"),
                  (de._gsap.y = x + "px"),
                  (B.cacheID = Z.cache),
                  mn();
              }
              return !0;
            }
            B.offset && fe(), (Re = !0);
          },
          Te,
          vn,
          Xt,
          _r,
          mr = function () {
            wr(),
              Te.isActive() &&
                Te.vars.scrollY > te &&
                (B() > te
                  ? Te.progress(1) && B(te)
                  : Te.resetTo("scrollY", te));
          };
        return (
          de && re.set(de, { y: "+=0" }),
          (e.ignoreCheck = function (nt) {
            return (
              (Y && nt.type === "touchmove" && Kt()) ||
              (St > 1.05 && nt.type !== "touchstart") ||
              S.isGesturing ||
              (nt.touches && nt.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            Re = !1;
            var nt = St;
            (St = j(
              ((ae.visualViewport && ae.visualViewport.scale) || 1) / ct
            )),
              Te.pause(),
              nt !== St && Yi(we, St > 1.01 ? !0 : n ? !1 : "x"),
              (vn = me()),
              (Xt = B()),
              wr(),
              (tr = In);
          }),
          (e.onRelease = e.onGestureStart =
            function (nt, Lt) {
              if ((B.offset && fe(), !Lt)) _r.restart(!0);
              else {
                Z.cache++;
                var Ht = yt(),
                  x,
                  Gt;
                n &&
                  ((x = me()),
                  (Gt = x + (Ht * 0.05 * -nt.velocityX) / 0.227),
                  (Ht *= fo(me, x, Gt, tt(we, ut))),
                  (Te.vars.scrollX = ke(Gt))),
                  (x = B()),
                  (Gt = x + (Ht * 0.05 * -nt.velocityY) / 0.227),
                  (Ht *= fo(B, x, Gt, tt(we, ze))),
                  (Te.vars.scrollY = gr(Gt)),
                  Te.invalidate().duration(Ht).play(0.01),
                  ((Y && Te.vars.scrollY >= te) || x >= te - 1) &&
                    re.to({}, { onUpdate: mr, duration: Ht });
              }
              N && N(nt);
            }),
          (e.onWheel = function () {
            Te._ts && Te.pause(), M() - Bt > 1e3 && ((tr = 0), (Bt = M()));
          }),
          (e.onChange = function (nt, Lt, Ht, x, Gt) {
            if (
              (In !== tr && wr(),
              Lt &&
                n &&
                me(
                  ke(x[2] === Lt ? vn + (nt.startX - nt.x) : me() + Lt - x[1])
                ),
              Ht)
            ) {
              B.offset && fe();
              var Yn = Gt[2] === Ht,
                kn = Yn ? Xt + nt.startY - nt.y : B() + Ht - Gt[1],
                Br = gr(kn);
              Yn && kn !== Br && (Xt += Br - kn), B(Br);
            }
            (Ht || Lt) && mn();
          }),
          (e.onEnable = function () {
            Yi(we, n ? !1 : "x"),
              Fe.addEventListener("refresh", mr),
              Ut(ae, "resize", mr),
              B.smooth &&
                ((B.target.style.scrollBehavior = "auto"),
                (B.smooth = me.smooth = !1)),
              Yr.enable();
          }),
          (e.onDisable = function () {
            Yi(we, !0),
              jt(ae, "resize", mr),
              Fe.removeEventListener("refresh", mr),
              Yr.kill();
          }),
          (e.lockAxis = e.lockAxis !== !1),
          (S = new Ue(e)),
          (S.iOS = Y),
          Y && !B() && B(1),
          Y && re.ticker.add($),
          (_r = S._dc),
          (Te = re.to(S, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: n ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ao(B, B(), function () {
                return Te.pause();
              }),
            },
            onUpdate: mn,
            onComplete: _r.vars.onComplete,
          })),
          S
        );
      };
    (Fe.sort = function (b) {
      if (_t(b)) return Oe.sort(b);
      var e = ae.pageYOffset || 0;
      return (
        Fe.getAll().forEach(function (a) {
          return (a._sortY = a.trigger
            ? e + a.trigger.getBoundingClientRect().top
            : a.start + ae.innerHeight);
        }),
        Oe.sort(
          b ||
            function (a, n) {
              return (
                (a.vars.refreshPriority || 0) * -1e6 +
                (a.vars.containerAnimation ? 1e6 : a._sortY) -
                ((n.vars.containerAnimation ? 1e6 : n._sortY) +
                  (n.vars.refreshPriority || 0) * -1e6)
              );
            }
        )
      );
    }),
      (Fe.observe = function (b) {
        return new Ue(b);
      }),
      (Fe.normalizeScroll = function (b) {
        if (typeof b > "u") return gt;
        if (b === !0 && gt) return gt.enable();
        if (b === !1) {
          gt && gt.kill(), (gt = b);
          return;
        }
        var e = b instanceof Ue ? b : as(b);
        return (
          gt && gt.target === e.target && gt.kill(), ne(e.target) && (gt = e), e
        );
      }),
      (Fe.core = {
        _getVelocityProp: dt,
        _inputObserver: uo,
        _scrollers: Z,
        _proxies: Me,
        bridge: {
          ss: function () {
            g || Vn("scrollStart"), (g = M());
          },
          ref: function () {
            return Ge;
          },
        },
      }),
      le() && re.registerPlugin(Fe),
      (r.ScrollTrigger = Fe),
      (r.default = Fe),
      typeof window > "u" || window !== r
        ? Object.defineProperty(r, "__esModule", { value: !0 })
        : delete window.default;
  });
})(Ui, Ui.exports);
var Po = Ui.exports;
function jo() {
  Xo.set(cs(Di) === "dark" ? "light" : "dark");
}
function Ko(w) {
  Xo.set(w);
}
function Rs(w) {
  xs.set(w);
}
function Ao({
  defaultMode: w = "system",
  themeColors: t,
  darkClassNames: r = ["dark"],
  lightClassNames: s = [],
  defaultTheme: h = "",
  modeStorageKey: c = "mode-watcher-mode",
  themeStorageKey: d = "mode-watcher-theme",
}) {
  const p = document.documentElement,
    T = localStorage.getItem(c) || w,
    H = localStorage.getItem(d) || h,
    I =
      T === "light" ||
      (T === "system" &&
        window.matchMedia("(prefers-color-scheme: light)").matches);
  if (
    (I
      ? (r.length && p.classList.remove(...r),
        s.length && p.classList.add(...s))
      : (s.length && p.classList.remove(...s),
        r.length && p.classList.add(...r)),
    (p.style.colorScheme = I ? "light" : "dark"),
    t)
  ) {
    const V = document.querySelector('meta[name="theme-color"]');
    V && V.setAttribute("content", T === "light" ? t.light : t.dark);
  }
  H && (p.setAttribute("data-theme", H), localStorage.setItem(d, H)),
    localStorage.setItem(c, T);
}
function Do(w) {
  let t, r;
  return {
    c() {
      (t = Le("meta")), this.h();
    },
    l(s) {
      (t = Ne(s, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      f(t, "name", "theme-color"), f(t, "content", (r = w[0].dark));
    },
    m(s, h) {
      Je(s, t, h);
    },
    p(s, h) {
      h & 1 && r !== (r = s[0].dark) && f(t, "content", r);
    },
    d(s) {
      s && z(t);
    },
  };
}
function Ns(w) {
  let t,
    r = w[0] && Do(w);
  return {
    c() {
      r && r.c(), (t = Sr());
    },
    l(s) {
      r && r.l(s), (t = Sr());
    },
    m(s, h) {
      r && r.m(s, h), Je(s, t, h);
    },
    p(s, [h]) {
      s[0]
        ? r
          ? r.p(s, h)
          : ((r = Do(s)), r.c(), r.m(t.parentNode, t))
        : r && (r.d(1), (r = null));
    },
    i: Et,
    o: Et,
    d(s) {
      s && z(t), r && r.d(s);
    },
  };
}
function Ls(w, t, r) {
  let { themeColors: s = void 0 } = t;
  return (
    (w.$$set = (h) => {
      "themeColors" in h && r(0, (s = h.themeColors));
    }),
    [s]
  );
}
class Hs extends kr {
  constructor(t) {
    super(), Er(this, t, Ls, Ns, Tr, { themeColors: 0 });
  }
}
function Ro(w) {
  let t, r;
  return {
    c() {
      (t = Le("meta")), this.h();
    },
    l(s) {
      (t = Ne(s, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      f(t, "name", "theme-color"), f(t, "content", (r = w[2].dark));
    },
    m(s, h) {
      Je(s, t, h);
    },
    p(s, h) {
      h & 4 && r !== (r = s[2].dark) && f(t, "content", r);
    },
    d(s) {
      s && z(t);
    },
  };
}
function Os(w) {
  let t,
    r,
    s =
      `<script${w[0] ? ` nonce=${w[0]}` : ""}>(` +
      Ao.toString() +
      ")(" +
      JSON.stringify(w[1]) +
      ");</script>",
    h,
    c = w[2] && Ro(w);
  return {
    c() {
      c && c.c(), (t = Sr()), (r = new us(!1)), (h = Sr()), this.h();
    },
    l(d) {
      const p = Fo("svelte-i9hz7e", document.head);
      c && c.l(p),
        (t = Sr()),
        (r = fs(p, !1)),
        (h = Sr()),
        p.forEach(z),
        this.h();
    },
    h() {
      r.a = h;
    },
    m(d, p) {
      c && c.m(document.head, null),
        W(document.head, t),
        r.m(s, document.head),
        W(document.head, h);
    },
    p(d, [p]) {
      d[2]
        ? c
          ? c.p(d, p)
          : ((c = Ro(d)), c.c(), c.m(t.parentNode, t))
        : c && (c.d(1), (c = null)),
        p & 3 &&
          s !==
            (s =
              `<script${d[0] ? ` nonce=${d[0]}` : ""}>(` +
              Ao.toString() +
              ")(" +
              JSON.stringify(d[1]) +
              ");</script>") &&
          r.p(s);
    },
    i: Et,
    o: Et,
    d(d) {
      d && r.d(), c && c.d(d), z(t), z(h);
    },
  };
}
function zs(w, t, r) {
  let { trueNonce: s = "" } = t,
    { initConfig: h } = t,
    { themeColors: c = void 0 } = t;
  return (
    (w.$$set = (d) => {
      "trueNonce" in d && r(0, (s = d.trueNonce)),
        "initConfig" in d && r(1, (h = d.initConfig)),
        "themeColors" in d && r(2, (c = d.themeColors));
    }),
    [s, h, c]
  );
}
class Vs extends kr {
  constructor(t) {
    super(),
      Er(this, t, zs, Os, Tr, { trueNonce: 0, initConfig: 1, themeColors: 2 });
  }
}
function Is(w) {
  let t, r;
  return (
    (t = new Vs({
      props: { trueNonce: w[2], initConfig: w[3], themeColors: w[0] },
    })),
    {
      c() {
        Wr(t.$$.fragment);
      },
      l(s) {
        sn(t.$$.fragment, s);
      },
      m(s, h) {
        qr(t, s, h), (r = !0);
      },
      p(s, h) {
        const c = {};
        h & 4 && (c.trueNonce = s[2]),
          h & 1 && (c.themeColors = s[0]),
          t.$set(c);
      },
      i(s) {
        r || (ft(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        xt(t.$$.fragment, s), (r = !1);
      },
      d(s) {
        Gr(t, s);
      },
    }
  );
}
function Fs(w) {
  let t, r;
  return (
    (t = new Hs({ props: { themeColors: w[0] } })),
    {
      c() {
        Wr(t.$$.fragment);
      },
      l(s) {
        sn(t.$$.fragment, s);
      },
      m(s, h) {
        qr(t, s, h), (r = !0);
      },
      p(s, h) {
        const c = {};
        h & 1 && (c.themeColors = s[0]), t.$set(c);
      },
      i(s) {
        r || (ft(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        xt(t.$$.fragment, s), (r = !1);
      },
      d(s) {
        Gr(t, s);
      },
    }
  );
}
function Ys(w) {
  let t, r, s, h;
  const c = [Fs, Is],
    d = [];
  function p(T, H) {
    return T[1] ? 0 : 1;
  }
  return (
    (t = p(w)),
    (r = d[t] = c[t](w)),
    {
      c() {
        r.c(), (s = Sr());
      },
      l(T) {
        r.l(T), (s = Sr());
      },
      m(T, H) {
        d[t].m(T, H), Je(T, s, H), (h = !0);
      },
      p(T, [H]) {
        let I = t;
        (t = p(T)),
          t === I
            ? d[t].p(T, H)
            : (ni(),
              xt(d[I], 1, 1, () => {
                d[I] = null;
              }),
              ii(),
              (r = d[t]),
              r ? r.p(T, H) : ((r = d[t] = c[t](T)), r.c()),
              ft(r, 1),
              r.m(s.parentNode, s));
      },
      i(T) {
        h || (ft(r), (h = !0));
      },
      o(T) {
        xt(r), (h = !1);
      },
      d(T) {
        T && z(s), d[t].d(T);
      },
    }
  );
}
function Bs(w, t, r) {
  let s, h, c;
  ri(w, Co, (ge) => r(13, (h = ge))), ri(w, So, (ge) => r(14, (c = ge)));
  let { track: d = !0 } = t,
    { defaultMode: p = "system" } = t,
    { themeColors: T = void 0 } = t,
    { disableTransitions: H = !0 } = t,
    { darkClassNames: I = ["dark"] } = t,
    { lightClassNames: V = [] } = t,
    { defaultTheme: U = "" } = t,
    { nonce: O = "" } = t,
    { themeStorageKey: oe = "mode-watcher-theme" } = t,
    { modeStorageKey: G = "mode-watcher-mode" } = t,
    { disableHeadScriptInjection: Ee = !1 } = t;
  hi(() => {
    const ge = Di.subscribe(() => {}),
      Ce = Cs.subscribe(() => {});
    To.tracking(d), To.query();
    const se = localStorage.getItem(c);
    Ko(Ss(se) ? se : p);
    const Z = localStorage.getItem(h);
    return (
      Rs(Z || U),
      () => {
        ge(), Ce();
      }
    );
  });
  const pe = {
    defaultMode: p,
    themeColors: T,
    darkClassNames: I,
    lightClassNames: V,
    defaultTheme: U,
    modeStorageKey: G,
    themeStorageKey: oe,
  };
  return (
    (w.$$set = (ge) => {
      "track" in ge && r(4, (d = ge.track)),
        "defaultMode" in ge && r(5, (p = ge.defaultMode)),
        "themeColors" in ge && r(0, (T = ge.themeColors)),
        "disableTransitions" in ge && r(6, (H = ge.disableTransitions)),
        "darkClassNames" in ge && r(7, (I = ge.darkClassNames)),
        "lightClassNames" in ge && r(8, (V = ge.lightClassNames)),
        "defaultTheme" in ge && r(9, (U = ge.defaultTheme)),
        "nonce" in ge && r(10, (O = ge.nonce)),
        "themeStorageKey" in ge && r(11, (oe = ge.themeStorageKey)),
        "modeStorageKey" in ge && r(12, (G = ge.modeStorageKey)),
        "disableHeadScriptInjection" in ge &&
          r(1, (Ee = ge.disableHeadScriptInjection));
    }),
    (w.$$.update = () => {
      w.$$.dirty & 64 && Ts.set(H),
        w.$$.dirty & 1 && ks.set(T),
        w.$$.dirty & 128 && Es.set(I),
        w.$$.dirty & 256 && Ms.set(V),
        w.$$.dirty & 4096 && So.set(G),
        w.$$.dirty & 2048 && Co.set(oe),
        w.$$.dirty & 1024 && r(2, (s = typeof window > "u" ? O : ""));
    }),
    [T, Ee, s, pe, d, p, H, I, V, U, O, oe, G]
  );
}
class Xs extends kr {
  constructor(t) {
    super(),
      Er(this, t, Bs, Ys, Tr, {
        track: 4,
        defaultMode: 5,
        themeColors: 0,
        disableTransitions: 6,
        darkClassNames: 7,
        lightClassNames: 8,
        defaultTheme: 9,
        nonce: 10,
        themeStorageKey: 11,
        modeStorageKey: 12,
        disableHeadScriptInjection: 1,
      });
  }
}
var ji = { exports: {} };
(function (w, t) {
  (function (r, s) {
    s(t);
  })(Ki, function (r) {
    var s = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      h = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      c = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      d = /(^[#\.][a-z]|[a-y][a-z])/i,
      p = Math.PI / 180,
      T = Math.sin,
      H = Math.cos,
      I = Math.abs,
      V = Math.sqrt,
      U = function (l) {
        return typeof l == "string";
      },
      O = function (l) {
        return typeof l == "number";
      },
      oe = 1e5,
      G = function (l) {
        return Math.round(l * oe) / oe || 0;
      };
    function Ee(Y) {
      Y = (U(Y) && d.test(Y) && document.querySelector(Y)) || Y;
      var l = Y.getAttribute ? Y : 0,
        u;
      return l && (Y = Y.getAttribute("d"))
        ? (l._gsPath || (l._gsPath = {}),
          (u = l._gsPath[Y]),
          u && !u._dirty ? u : (l._gsPath[Y] = xe(Y)))
        : Y
        ? U(Y)
          ? xe(Y)
          : O(Y[0])
          ? [Y]
          : Y
        : console.warn("Expecting a <path> element or an SVG path data string");
    }
    function pe(Y) {
      var l = 0,
        u;
      for (Y.reverse(); l < Y.length; l += 2)
        (u = Y[l]), (Y[l] = Y[l + 1]), (Y[l + 1] = u);
      Y.reversed = !Y.reversed;
    }
    var ge = function (l, u) {
        var m = document.createElementNS("http://www.w3.org/2000/svg", "path"),
          C = [].slice.call(l.attributes),
          k = C.length,
          y;
        for (u = "," + u + ","; --k > -1; )
          (y = C[k].nodeName.toLowerCase()),
            u.indexOf("," + y + ",") < 0 &&
              m.setAttributeNS(null, y, C[k].nodeValue);
        return m;
      },
      Ce = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2",
      },
      se = function (l, u) {
        for (var m = u ? u.split(",") : [], C = {}, k = m.length; --k > -1; )
          C[m[k]] = +l.getAttribute(m[k]) || 0;
        return C;
      };
    function Z(Y, l) {
      var u = Y.tagName.toLowerCase(),
        m = 0.552284749831,
        C,
        k,
        y,
        P,
        L,
        M,
        q,
        g,
        o,
        v,
        F,
        E,
        R,
        A,
        $,
        j,
        K,
        le,
        ne,
        He,
        ie,
        Ye;
      return u === "path" || !Y.getBBox
        ? Y
        : ((M = ge(Y, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
          (Ye = se(Y, Ce[u])),
          u === "rect"
            ? ((P = Ye.rx),
              (L = Ye.ry || P),
              (k = Ye.x),
              (y = Ye.y),
              (v = Ye.width - P * 2),
              (F = Ye.height - L * 2),
              P || L
                ? ((E = k + P * (1 - m)),
                  (R = k + P),
                  (A = R + v),
                  ($ = A + P * m),
                  (j = A + P),
                  (K = y + L * (1 - m)),
                  (le = y + L),
                  (ne = le + F),
                  (He = ne + L * m),
                  (ie = ne + L),
                  (C =
                    "M" +
                    j +
                    "," +
                    le +
                    " V" +
                    ne +
                    " C" +
                    [
                      j,
                      He,
                      $,
                      ie,
                      A,
                      ie,
                      A - (A - R) / 3,
                      ie,
                      R + (A - R) / 3,
                      ie,
                      R,
                      ie,
                      E,
                      ie,
                      k,
                      He,
                      k,
                      ne,
                      k,
                      ne - (ne - le) / 3,
                      k,
                      le + (ne - le) / 3,
                      k,
                      le,
                      k,
                      K,
                      E,
                      y,
                      R,
                      y,
                      R + (A - R) / 3,
                      y,
                      A - (A - R) / 3,
                      y,
                      A,
                      y,
                      $,
                      y,
                      j,
                      K,
                      j,
                      le,
                    ].join(",") +
                    "z"))
                : (C =
                    "M" +
                    (k + v) +
                    "," +
                    y +
                    " v" +
                    F +
                    " h" +
                    -v +
                    " v" +
                    -F +
                    " h" +
                    v +
                    "z"))
            : u === "circle" || u === "ellipse"
            ? (u === "circle"
                ? ((P = L = Ye.r), (g = P * m))
                : ((P = Ye.rx), (L = Ye.ry), (g = L * m)),
              (k = Ye.cx),
              (y = Ye.cy),
              (q = P * m),
              (C =
                "M" +
                (k + P) +
                "," +
                y +
                " C" +
                [
                  k + P,
                  y + g,
                  k + q,
                  y + L,
                  k,
                  y + L,
                  k - q,
                  y + L,
                  k - P,
                  y + g,
                  k - P,
                  y,
                  k - P,
                  y - g,
                  k - q,
                  y - L,
                  k,
                  y - L,
                  k + q,
                  y - L,
                  k + P,
                  y - g,
                  k + P,
                  y,
                ].join(",") +
                "z"))
            : u === "line"
            ? (C = "M" + Ye.x1 + "," + Ye.y1 + " L" + Ye.x2 + "," + Ye.y2)
            : (u === "polyline" || u === "polygon") &&
              ((o = (Y.getAttribute("points") + "").match(h) || []),
              (k = o.shift()),
              (y = o.shift()),
              (C = "M" + k + "," + y + " L" + o.join(",")),
              u === "polygon" && (C += "," + k + "," + y + "z")),
          M.setAttribute("d", ue((M._gsRawPath = xe(C)))),
          l &&
            Y.parentNode &&
            (Y.parentNode.insertBefore(M, Y), Y.parentNode.removeChild(Y)),
          M);
    }
    function Me(Y, l, u, m, C, k, y, P, L) {
      if (!(Y === P && l === L)) {
        (u = I(u)), (m = I(m));
        var M = (C % 360) * p,
          q = H(M),
          g = T(M),
          o = Math.PI,
          v = o * 2,
          F = (Y - P) / 2,
          E = (l - L) / 2,
          R = q * F + g * E,
          A = -g * F + q * E,
          $ = R * R,
          j = A * A,
          K = $ / (u * u) + j / (m * m);
        K > 1 && ((u = V(K) * u), (m = V(K) * m));
        var le = u * u,
          ne = m * m,
          He = (le * ne - le * j - ne * $) / (le * j + ne * $);
        He < 0 && (He = 0);
        var ie = (k === y ? -1 : 1) * V(He),
          Ye = ie * ((u * A) / m),
          bt = ie * -((m * R) / u),
          tt = (Y + P) / 2,
          ir = (l + L) / 2,
          lt = tt + (q * Ye - g * bt),
          _t = ir + (g * Ye + q * bt),
          at = (R - Ye) / u,
          Nt = (A - bt) / m,
          Qt = (-R - Ye) / u,
          rt = (-A - bt) / m,
          Ct = at * at + Nt * Nt,
          Jr = (Nt < 0 ? -1 : 1) * Math.acos(at / V(Ct)),
          Jt =
            (at * rt - Nt * Qt < 0 ? -1 : 1) *
            Math.acos((at * Qt + Nt * rt) / V(Ct * (Qt * Qt + rt * rt)));
        isNaN(Jt) && (Jt = o),
          !y && Jt > 0 ? (Jt -= v) : y && Jt < 0 && (Jt += v),
          (Jr %= v),
          (Jt %= v);
        var er = Math.ceil(I(Jt) / (v / 4)),
          Ft = [],
          or = Jt / er,
          yr = ((4 / 3) * T(or / 2)) / (1 + H(or / 2)),
          Nn = q * u,
          Ln = g * u,
          Hn = g * -m,
          On = q * m,
          We;
        for (We = 0; We < er; We++)
          (C = Jr + We * or),
            (R = H(C)),
            (A = T(C)),
            (at = H((C += or))),
            (Nt = T(C)),
            Ft.push(R - yr * A, A + yr * R, at + yr * Nt, Nt - yr * at, at, Nt);
        for (We = 0; We < Ft.length; We += 2)
          (R = Ft[We]),
            (A = Ft[We + 1]),
            (Ft[We] = R * Nn + A * Hn + lt),
            (Ft[We + 1] = R * Ln + A * On + _t);
        return (Ft[We - 2] = P), (Ft[We - 1] = L), Ft;
      }
    }
    function xe(Y) {
      var l =
          (Y + "")
            .replace(c, function (Ye) {
              var bt = +Ye;
              return bt < 1e-4 && bt > -1e-4 ? 0 : bt;
            })
            .match(s) || [],
        u = [],
        m = 0,
        C = 0,
        k = 2 / 3,
        y = l.length,
        P = 0,
        L = "ERROR: malformed path: " + Y,
        M,
        q,
        g,
        o,
        v,
        F,
        E,
        R,
        A,
        $,
        j,
        K,
        le,
        ne,
        He,
        ie = function (bt, tt, ir, lt) {
          ($ = (ir - bt) / 3),
            (j = (lt - tt) / 3),
            E.push(bt + $, tt + j, ir - $, lt - j, ir, lt);
        };
      if (!Y || !isNaN(l[0]) || isNaN(l[1])) return console.log(L), u;
      for (M = 0; M < y; M++)
        if (
          ((le = v),
          isNaN(l[M]) ? ((v = l[M].toUpperCase()), (F = v !== l[M])) : M--,
          (g = +l[M + 1]),
          (o = +l[M + 2]),
          F && ((g += m), (o += C)),
          M || ((R = g), (A = o)),
          v === "M")
        )
          E && (E.length < 8 ? (u.length -= 1) : (P += E.length)),
            (m = R = g),
            (C = A = o),
            (E = [g, o]),
            u.push(E),
            (M += 2),
            (v = "L");
        else if (v === "C")
          E || (E = [0, 0]),
            F || (m = C = 0),
            E.push(
              g,
              o,
              m + l[M + 3] * 1,
              C + l[M + 4] * 1,
              (m += l[M + 5] * 1),
              (C += l[M + 6] * 1)
            ),
            (M += 6);
        else if (v === "S")
          ($ = m),
            (j = C),
            (le === "C" || le === "S") &&
              (($ += m - E[E.length - 4]), (j += C - E[E.length - 3])),
            F || (m = C = 0),
            E.push($, j, g, o, (m += l[M + 3] * 1), (C += l[M + 4] * 1)),
            (M += 4);
        else if (v === "Q")
          ($ = m + (g - m) * k),
            (j = C + (o - C) * k),
            F || (m = C = 0),
            (m += l[M + 3] * 1),
            (C += l[M + 4] * 1),
            E.push($, j, m + (g - m) * k, C + (o - C) * k, m, C),
            (M += 4);
        else if (v === "T")
          ($ = m - E[E.length - 4]),
            (j = C - E[E.length - 3]),
            E.push(
              m + $,
              C + j,
              g + (m + $ * 1.5 - g) * k,
              o + (C + j * 1.5 - o) * k,
              (m = g),
              (C = o)
            ),
            (M += 2);
        else if (v === "H") ie(m, C, (m = g), C), (M += 1);
        else if (v === "V") ie(m, C, m, (C = g + (F ? C - m : 0))), (M += 1);
        else if (v === "L" || v === "Z")
          v === "Z" && ((g = R), (o = A), (E.closed = !0)),
            (v === "L" || I(m - g) > 0.5 || I(C - o) > 0.5) &&
              (ie(m, C, g, o), v === "L" && (M += 2)),
            (m = g),
            (C = o);
        else if (v === "A") {
          if (
            ((ne = l[M + 4]),
            (He = l[M + 5]),
            ($ = l[M + 6]),
            (j = l[M + 7]),
            (q = 7),
            ne.length > 1 &&
              (ne.length < 3
                ? ((j = $), ($ = He), q--)
                : ((j = He), ($ = ne.substr(2)), (q -= 2)),
              (He = ne.charAt(1)),
              (ne = ne.charAt(0))),
            (K = Me(
              m,
              C,
              +l[M + 1],
              +l[M + 2],
              +l[M + 3],
              +ne,
              +He,
              (F ? m : 0) + $ * 1,
              (F ? C : 0) + j * 1
            )),
            (M += q),
            K)
          )
            for (q = 0; q < K.length; q++) E.push(K[q]);
          (m = E[E.length - 2]), (C = E[E.length - 1]);
        } else console.log(L);
      return (
        (M = E.length),
        M < 6
          ? (u.pop(), (M = 0))
          : E[0] === E[M - 2] && E[1] === E[M - 1] && (E.closed = !0),
        (u.totalPoints = P + M),
        u
      );
    }
    function ue(Y) {
      O(Y[0]) && (Y = [Y]);
      var l = "",
        u = Y.length,
        m,
        C,
        k,
        y;
      for (C = 0; C < u; C++) {
        for (
          y = Y[C],
            l += "M" + G(y[0]) + "," + G(y[1]) + " C",
            m = y.length,
            k = 2;
          k < m;
          k++
        )
          l +=
            G(y[k++]) +
            "," +
            G(y[k++]) +
            " " +
            G(y[k++]) +
            "," +
            G(y[k++]) +
            " " +
            G(y[k++]) +
            "," +
            G(y[k]) +
            " ";
        y.closed && (l += "z");
      }
      return l;
    }
    /*!
     * MorphSVGPlugin 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var Ke,
      he,
      Se,
      ee,
      X,
      ce = function () {
        return (
          Ke ||
          (typeof window < "u" && (Ke = window.gsap) && Ke.registerPlugin && Ke)
        );
      },
      Vt = function (l) {
        return typeof l == "function";
      },
      Mt = Math.atan2,
      Mr = Math.cos,
      ut = Math.sin,
      ze = Math.sqrt,
      st = Math.PI,
      Ur = st * 2,
      Ze = st * 0.3,
      dt = st * 0.7,
      Lr = 1e20,
      et = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      ht = /(^[#\.][a-z]|[a-y][a-z])/i,
      jr = /[achlmqstvz]/i,
      Ue = function (l) {
        return console && console.warn(l);
      },
      re = 1,
      Hr = function (l) {
        var u = l.length,
          m = 0,
          C = 0,
          k;
        for (k = 0; k < u; k++) (m += l[k++]), (C += l[k]);
        return [m / (u / 2), C / (u / 2)];
      },
      ae = function (l) {
        var u = l.length,
          m = l[0],
          C = m,
          k = l[1],
          y = k,
          P,
          L,
          M;
        for (M = 6; M < u; M += 6)
          (P = l[M]),
            (L = l[M + 1]),
            P > m ? (m = P) : P < C && (C = P),
            L > k ? (k = L) : L < y && (y = L);
        return (
          (l.centerX = (m + C) / 2),
          (l.centerY = (k + y) / 2),
          (l.size = (m - C) * (k - y))
        );
      },
      Ve = function (l, u) {
        u === void 0 && (u = 3);
        for (
          var m = l.length,
            C = l[0][0],
            k = C,
            y = l[0][1],
            P = y,
            L = 1 / u,
            M,
            q,
            g,
            o,
            v,
            F,
            E,
            R,
            A,
            $,
            j,
            K,
            le,
            ne,
            He,
            ie;
          --m > -1;

        )
          for (v = l[m], M = v.length, o = 6; o < M; o += 6)
            for (
              A = v[o],
                $ = v[o + 1],
                j = v[o + 2] - A,
                ne = v[o + 3] - $,
                K = v[o + 4] - A,
                He = v[o + 5] - $,
                le = v[o + 6] - A,
                ie = v[o + 7] - $,
                F = u;
              --F > -1;

            )
              (E = L * F),
                (R = 1 - E),
                (q = (E * E * le + 3 * R * (E * K + R * j)) * E + A),
                (g = (E * E * ie + 3 * R * (E * He + R * ne)) * E + $),
                q > C ? (C = q) : q < k && (k = q),
                g > y ? (y = g) : g < P && (P = g);
        return (
          (l.centerX = (C + k) / 2),
          (l.centerY = (y + P) / 2),
          (l.left = k),
          (l.width = C - k),
          (l.top = P),
          (l.height = y - P),
          (l.size = (C - k) * (y - P))
        );
      },
      Wt = function (l, u) {
        return u.length - l.length;
      },
      Ie = function (l, u) {
        var m = l.size || ae(l),
          C = u.size || ae(u);
        return Math.abs(C - m) < (m + C) / 20
          ? u.centerX - l.centerX || u.centerY - l.centerY
          : C - m;
      },
      ln = function (l, u) {
        var m = l.slice(0),
          C = l.length,
          k = C - 2,
          y,
          P;
        for (u = u | 0, y = 0; y < C; y++)
          (P = (y + u) % k), (l[y++] = m[P]), (l[y] = m[P + 1]);
      },
      an = function (l, u, m, C, k) {
        var y = l.length,
          P = 0,
          L = y - 2,
          M,
          q,
          g,
          o;
        for (m *= 6, q = 0; q < y; q += 6)
          (M = (q + m) % L),
            (o = l[M] - (u[q] - C)),
            (g = l[M + 1] - (u[q + 1] - k)),
            (P += ze(g * g + o * o));
        return P;
      },
      Or = function (l, u, m) {
        var C = l.length,
          k = Hr(l),
          y = Hr(u),
          P = y[0] - k[0],
          L = y[1] - k[1],
          M = an(l, u, 0, P, L),
          q = 0,
          g,
          o,
          v;
        for (v = 6; v < C; v += 6)
          (o = an(l, u, v / 6, P, L)), o < M && ((M = o), (q = v));
        if (m)
          for (g = l.slice(0), pe(g), v = 6; v < C; v += 6)
            (o = an(g, u, v / 6, P, L)), o < M && ((M = o), (q = -v));
        return q / 6;
      },
      zr = function (l, u, m) {
        for (
          var C = l.length, k = Lr, y = 0, P = 0, L, M, q, g, o, v;
          --C > -1;

        )
          for (L = l[C], v = L.length, o = 0; o < v; o += 6)
            (M = L[o] - u),
              (q = L[o + 1] - m),
              (g = ze(M * M + q * q)),
              g < k && ((k = g), (y = L[o]), (P = L[o + 1]));
        return [y, P];
      },
      It = function (l, u, m, C, k, y) {
        var P = u.length,
          L = 0,
          M = Math.min(l.size || ae(l), u[m].size || ae(u[m])) * C,
          q = Lr,
          g = l.centerX + k,
          o = l.centerY + y,
          v,
          F,
          E,
          R,
          A;
        for (F = m; F < P && ((v = u[F].size || ae(u[F])), !(v < M)); F++)
          (E = u[F].centerX - g),
            (R = u[F].centerY - o),
            (A = ze(E * E + R * R)),
            A < q && ((L = F), (q = A));
        return (A = u[L]), u.splice(L, 1), A;
      },
      Rt = function (l, u) {
        var m = 0,
          C = 0.999999,
          k = l.length,
          y = u / ((k - 2) / 6),
          P,
          L,
          M,
          q,
          g,
          o,
          v,
          F,
          E,
          R,
          A,
          $,
          j,
          K;
        for (j = 2; j < k; j += 6)
          for (m += y; m > C; )
            (P = l[j - 2]),
              (L = l[j - 1]),
              (M = l[j]),
              (q = l[j + 1]),
              (g = l[j + 2]),
              (o = l[j + 3]),
              (v = l[j + 4]),
              (F = l[j + 5]),
              (K = 1 / ((Math.floor(m) || 1) + 1)),
              (E = P + (M - P) * K),
              (A = M + (g - M) * K),
              (E += (A - E) * K),
              (A += (g + (v - g) * K - A) * K),
              (R = L + (q - L) * K),
              ($ = q + (o - q) * K),
              (R += ($ - R) * K),
              ($ += (o + (F - o) * K - $) * K),
              l.splice(
                j,
                4,
                P + (M - P) * K,
                L + (q - L) * K,
                E,
                R,
                E + (A - E) * K,
                R + ($ - R) * K,
                A,
                $,
                g + (v - g) * K,
                o + (F - o) * K
              ),
              (j += 6),
              (k += 6),
              m--;
        return l;
      },
      Ge = function (l, u, m, C, k) {
        var y = u.length - l.length,
          P = y > 0 ? u : l,
          L = y > 0 ? l : u,
          M = 0,
          q = C === "complexity" ? Wt : Ie,
          g = C === "position" ? 0 : typeof C == "number" ? C : 0.8,
          o = L.length,
          v = typeof m == "object" && m.push ? m.slice(0) : [m],
          F = v[0] === "reverse" || v[0] < 0,
          E = m === "log",
          R,
          A,
          $,
          j,
          K,
          le,
          ne;
        if (L[0]) {
          if (
            P.length > 1 &&
            (l.sort(q),
            u.sort(q),
            (le = P.size || Ve(P)),
            (le = L.size || Ve(L)),
            (le = P.centerX - L.centerX),
            (ne = P.centerY - L.centerY),
            q === Ie)
          )
            for (o = 0; o < L.length; o++)
              P.splice(o, 0, It(L[o], P, o, g, le, ne));
          if (y)
            for (
              y < 0 && (y = -y),
                P[0].length > L[0].length &&
                  Rt(L[0], ((P[0].length - L[0].length) / 6) | 0),
                o = L.length;
              M < y;

            )
              (j = P[o].size || ae(P[o])),
                ($ = zr(L, P[o].centerX, P[o].centerY)),
                (j = $[0]),
                (K = $[1]),
                (L[o++] = [j, K, j, K, j, K, j, K]),
                (L.totalPoints += 8),
                M++;
          for (o = 0; o < l.length; o++)
            (R = u[o]),
              (A = l[o]),
              (y = R.length - A.length),
              y < 0 ? Rt(R, (-y / 6) | 0) : y > 0 && Rt(A, (y / 6) | 0),
              F && k !== !1 && !A.reversed && pe(A),
              (m = v[o] || v[o] === 0 ? v[o] : "auto"),
              m &&
                (A.closed ||
                (Math.abs(A[0] - A[A.length - 2]) < 0.5 &&
                  Math.abs(A[1] - A[A.length - 1]) < 0.5)
                  ? m === "auto" || m === "log"
                    ? ((v[o] = m = Or(A, R, !o || k === !1)),
                      m < 0 && ((F = !0), pe(A), (m = -m)),
                      ln(A, m * 6))
                    : m !== "reverse" &&
                      (o && m < 0 && pe(A), ln(A, (m < 0 ? -m : m) * 6))
                  : !F &&
                    ((m === "auto" &&
                      Math.abs(R[0] - A[0]) +
                        Math.abs(R[1] - A[1]) +
                        Math.abs(R[R.length - 2] - A[A.length - 2]) +
                        Math.abs(R[R.length - 1] - A[A.length - 1]) >
                        Math.abs(R[0] - A[A.length - 2]) +
                          Math.abs(R[1] - A[A.length - 1]) +
                          Math.abs(R[R.length - 2] - A[0]) +
                          Math.abs(R[R.length - 1] - A[1])) ||
                      m % 2)
                  ? (pe(A), (v[o] = -1), (F = !0))
                  : m === "auto"
                  ? (v[o] = 0)
                  : m === "reverse" && (v[o] = -1),
                A.closed !== R.closed && (A.closed = R.closed = !1));
          return (
            E && Ue("shapeIndex:[" + v.join(",") + "]"), (l.shapeIndex = v), v
          );
        }
      },
      Kr = function (l, u, m, C, k) {
        var y = xe(l[0]),
          P = xe(l[1]);
        Ge(y, P, u || u === 0 ? u : "auto", m, k) &&
          ((l[0] = ue(y)),
          (l[1] = ue(P)),
          (C === "log" || C === !0) &&
            Ue('precompile:["' + l[0] + '","' + l[1] + '"]'));
      },
      Zr = function (l, u) {
        if (!u) return l;
        var m = l.match(et) || [],
          C = m.length,
          k = "",
          y,
          P,
          L;
        for (
          u === "reverse"
            ? ((P = C - 1), (y = -2))
            : ((P = ((parseInt(u, 10) || 0) * 2 + 1 + C * 100) % C), (y = 2)),
            L = 0;
          L < C;
          L += 2
        )
          (k += m[P - 1] + "," + m[P] + " "), (P = (P + y) % C);
        return k;
      },
      pt = function (l, u) {
        var m = 0,
          C = parseFloat(l[0]),
          k = parseFloat(l[1]),
          y = C + "," + k + " ",
          P = 0.999999,
          L,
          M,
          q,
          g,
          o,
          v,
          F;
        for (
          q = l.length, L = (u * 0.5) / (q * 0.5 - 1), M = 0;
          M < q - 2;
          M += 2
        ) {
          if (
            ((m += L),
            (v = parseFloat(l[M + 2])),
            (F = parseFloat(l[M + 3])),
            m > P)
          )
            for (o = 1 / (Math.floor(m) + 1), g = 1; m > P; )
              (y +=
                (C + (v - C) * o * g).toFixed(2) +
                "," +
                (k + (F - k) * o * g).toFixed(2) +
                " "),
                m--,
                g++;
          (y += v + "," + F + " "), (C = v), (k = F);
        }
        return y;
      },
      pn = function (l) {
        var u = l[0].match(et) || [],
          m = l[1].match(et) || [],
          C = m.length - u.length;
        C > 0 ? (l[0] = pt(u, C)) : (l[1] = pt(m, -C));
      },
      Vr = function (l) {
        return isNaN(l)
          ? pn
          : function (u) {
              pn(u), (u[1] = Zr(u[1], parseInt(l, 10)));
            };
      },
      $r = function (l, u, m) {
        var C = typeof l == "string",
          k,
          y;
        return (
          (!C || ht.test(l) || (l.match(et) || []).length < 3) &&
            ((k = he(l)[0]),
            k
              ? ((y = (k.nodeName + "").toUpperCase()),
                u && y !== "PATH" && ((k = Z(k, !1)), (y = "PATH")),
                (l = k.getAttribute(y === "PATH" ? "d" : "points") || ""),
                k === m && (l = k.getAttributeNS(null, "data-original") || l))
              : (Ue("WARNING: invalid morph to: " + l), (l = !1))),
          l
        );
      },
      cn = function (l, u) {
        for (
          var m = l.length,
            C = 0.2 * (u || 1),
            k,
            y,
            P,
            L,
            M,
            q,
            g,
            o,
            v,
            F,
            E,
            R;
          --m > -1;

        ) {
          for (
            y = l[m],
              E = y.isSmooth = y.isSmooth || [0, 0, 0, 0],
              R = y.smoothData = y.smoothData || [0, 0, 0, 0],
              E.length = 4,
              o = y.length - 2,
              g = 6;
            g < o;
            g += 6
          )
            (P = y[g] - y[g - 2]),
              (L = y[g + 1] - y[g - 1]),
              (M = y[g + 2] - y[g]),
              (q = y[g + 3] - y[g + 1]),
              (v = Mt(L, P)),
              (F = Mt(q, M)),
              (k = Math.abs(v - F) < C),
              k &&
                ((R[g - 2] = v),
                (R[g + 2] = F),
                (R[g - 1] = ze(P * P + L * L)),
                (R[g + 3] = ze(M * M + q * q))),
              E.push(k, k, 0, 0, k, k);
          y[o] === y[0] &&
            y[o + 1] === y[1] &&
            ((P = y[0] - y[o - 2]),
            (L = y[1] - y[o - 1]),
            (M = y[2] - y[0]),
            (q = y[3] - y[1]),
            (v = Mt(L, P)),
            (F = Mt(q, M)),
            Math.abs(v - F) < C &&
              ((R[o - 2] = v),
              (R[2] = F),
              (R[o - 1] = ze(P * P + L * L)),
              (R[3] = ze(M * M + q * q)),
              (E[o - 2] = E[o - 1] = !0)));
        }
        return l;
      },
      Qr = function (l) {
        var u = l.trim().split(" "),
          m = ~l.indexOf("left")
            ? 0
            : ~l.indexOf("right")
            ? 100
            : isNaN(parseFloat(u[0]))
            ? 50
            : parseFloat(u[0]),
          C = ~l.indexOf("top")
            ? 0
            : ~l.indexOf("bottom")
            ? 100
            : isNaN(parseFloat(u[1]))
            ? 50
            : parseFloat(u[1]);
        return { x: m / 100, y: C / 100 };
      },
      gn = function (l) {
        return l !== l % st ? l + (l < 0 ? Ur : -Ur) : l;
      },
      gt =
        "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
      fn = function (l, u, m, C) {
        var k = this._origin,
          y = this._eOrigin,
          P = l[m] - k.x,
          L = l[m + 1] - k.y,
          M = ze(P * P + L * L),
          q = Mt(L, P),
          g,
          o;
        return (
          (P = u[m] - y.x),
          (L = u[m + 1] - y.y),
          (g = Mt(L, P) - q),
          (o = gn(g)),
          !C && Se && Math.abs(o + Se.ca) < Ze && (C = Se),
          (this._anchorPT = Se =
            {
              _next: this._anchorPT,
              t: l,
              sa: q,
              ca: C && o * C.ca < 0 && Math.abs(o) > dt ? g : o,
              sl: M,
              cl: ze(P * P + L * L) - M,
              i: m,
            })
        );
      },
      Tn = function (l) {
        (Ke = ce()),
          (X = X || (Ke && Ke.plugins.morphSVG)),
          Ke && X
            ? ((he = Ke.utils.toArray),
              (X.prototype._tweenRotation = fn),
              (ee = 1))
            : l && Ue("Please gsap.registerPlugin(MorphSVGPlugin)");
      },
      Pr = {
        version: "3.13.0",
        name: "morphSVG",
        rawVars: 1,
        register: function (l, u) {
          (Ke = l), (X = u), Tn();
        },
        init: function (l, u, m, C, k) {
          if ((ee || Tn(1), !u)) return Ue("invalid shape"), !1;
          Vt(u) && (u = u.call(m, C, l, k));
          var y,
            P,
            L,
            M,
            q,
            g,
            o,
            v,
            F,
            E,
            R,
            A,
            $,
            j,
            K,
            le,
            ne,
            He,
            ie,
            Ye,
            bt,
            tt;
          if (typeof u == "string" || u.getBBox || u[0]) u = { shape: u };
          else if (typeof u == "object") {
            y = {};
            for (P in u)
              y[P] = Vt(u[P]) && P !== "render" ? u[P].call(m, C, l, k) : u[P];
            u = y;
          }
          var ir = l.nodeType ? window.getComputedStyle(l) : {},
            lt = ir.fill + "",
            _t = !(
              lt === "none" ||
              (lt.match(et) || [])[3] === "0" ||
              ir.fillRule === "evenodd"
            ),
            at = (u.origin || "50 50").split(",");
          if (
            ((y = (l.nodeName + "").toUpperCase()),
            (q = y === "POLYLINE" || y === "POLYGON"),
            y !== "PATH" && !q && !u.prop)
          )
            return Ue("Cannot morph a <" + y + "> element. " + gt), !1;
          if (
            ((P = y === "PATH" ? "d" : "points"),
            !u.prop && !Vt(l.setAttribute))
          )
            return !1;
          if (
            ((M = $r(u.shape || u.d || u.points || "", P === "d", l)),
            q && jr.test(M))
          )
            return Ue("A <" + y + "> cannot accept path data. " + gt), !1;
          if (
            ((g = u.shapeIndex || u.shapeIndex === 0 ? u.shapeIndex : "auto"),
            (o = u.map || Pr.defaultMap),
            (this._prop = u.prop),
            (this._render = u.render || Pr.defaultRender),
            (this._apply =
              "updateTarget" in u ? u.updateTarget : Pr.defaultUpdateTarget),
            (this._rnd = Math.pow(10, isNaN(u.precision) ? 2 : +u.precision)),
            (this._tween = m),
            M)
          ) {
            if (
              ((this._target = l),
              (ne = typeof u.precompile == "object"),
              (E = this._prop ? l[this._prop] : l.getAttribute(P)),
              !this._prop &&
                !l.getAttributeNS(null, "data-original") &&
                l.setAttributeNS(null, "data-original", E),
              P === "d" || this._prop)
            ) {
              if (
                ((E = xe(ne ? u.precompile[0] : E)),
                (R = xe(ne ? u.precompile[1] : M)),
                !ne && !Ge(E, R, g, o, _t))
              )
                return !1;
              for (
                (u.precompile === "log" || u.precompile === !0) &&
                  Ue('precompile:["' + ue(E) + '","' + ue(R) + '"]'),
                  bt = (u.type || Pr.defaultType) !== "linear",
                  bt &&
                    ((E = cn(E, u.smoothTolerance)),
                    (R = cn(R, u.smoothTolerance)),
                    E.size || Ve(E),
                    R.size || Ve(R),
                    (Ye = Qr(at[0])),
                    (this._origin = E.origin =
                      {
                        x: E.left + Ye.x * E.width,
                        y: E.top + Ye.y * E.height,
                      }),
                    at[1] && (Ye = Qr(at[1])),
                    (this._eOrigin = {
                      x: R.left + Ye.x * R.width,
                      y: R.top + Ye.y * R.height,
                    })),
                  this._rawPath = l._gsRawPath = E,
                  $ = E.length;
                --$ > -1;

              )
                for (
                  K = E[$],
                    le = R[$],
                    v = K.isSmooth || [],
                    F = le.isSmooth || [],
                    j = K.length,
                    Se = 0,
                    A = 0;
                  A < j;
                  A += 2
                )
                  (le[A] !== K[A] || le[A + 1] !== K[A + 1]) &&
                    (bt
                      ? v[A] && F[A]
                        ? ((He = K.smoothData),
                          (ie = le.smoothData),
                          (tt = A + (A === j - 4 ? 7 - j : 5)),
                          (this._controlPT = {
                            _next: this._controlPT,
                            i: A,
                            j: $,
                            l1s: He[A + 1],
                            l1c: ie[A + 1] - He[A + 1],
                            l2s: He[tt],
                            l2c: ie[tt] - He[tt],
                          }),
                          (L = this._tweenRotation(K, le, A + 2)),
                          this._tweenRotation(K, le, A, L),
                          this._tweenRotation(K, le, tt - 1, L),
                          (A += 4))
                        : this._tweenRotation(K, le, A)
                      : ((L = this.add(K, A, K[A], le[A], 0, 0, 0, 0, 0, 1)),
                        (L =
                          this.add(
                            K,
                            A + 1,
                            K[A + 1],
                            le[A + 1],
                            0,
                            0,
                            0,
                            0,
                            0,
                            1
                          ) || L)));
            } else
              L = this.add(
                l,
                "setAttribute",
                l.getAttribute(P) + "",
                M + "",
                C,
                k,
                0,
                Vr(g),
                P
              );
            bt &&
              (this.add(
                this._origin,
                "x",
                this._origin.x,
                this._eOrigin.x,
                0,
                0,
                0,
                0,
                0,
                1
              ),
              (L = this.add(
                this._origin,
                "y",
                this._origin.y,
                this._eOrigin.y,
                0,
                0,
                0,
                0,
                0,
                1
              ))),
              L && (this._props.push("morphSVG"), (L.end = M), (L.endProp = P));
          }
          return re;
        },
        render: function (l, u) {
          for (
            var m = u._rawPath,
              C = u._controlPT,
              k = u._anchorPT,
              y = u._rnd,
              P = u._target,
              L = u._pt,
              M,
              q,
              g,
              o,
              v,
              F,
              E,
              R,
              A,
              $,
              j,
              K,
              le;
            L;

          )
            L.r(l, L.d), (L = L._next);
          if (l === 1 && u._apply)
            for (L = u._pt; L; )
              L.end &&
                (u._prop
                  ? (P[u._prop] = L.end)
                  : P.setAttribute(L.endProp, L.end)),
                (L = L._next);
          else if (m) {
            for (; k; )
              (F = k.sa + l * k.ca),
                (v = k.sl + l * k.cl),
                (k.t[k.i] = u._origin.x + Mr(F) * v),
                (k.t[k.i + 1] = u._origin.y + ut(F) * v),
                (k = k._next);
            for (g = l < 0.5 ? 2 * l * l : (4 - 2 * l) * l - 1; C; )
              (E = C.i),
                (o = m[C.j]),
                (le = E + (E === o.length - 4 ? 7 - o.length : 5)),
                (F = Mt(o[le] - o[E + 1], o[le - 1] - o[E])),
                (j = ut(F)),
                (K = Mr(F)),
                (A = o[E + 2]),
                ($ = o[E + 3]),
                (v = C.l1s + g * C.l1c),
                (o[E] = A - K * v),
                (o[E + 1] = $ - j * v),
                (v = C.l2s + g * C.l2c),
                (o[le - 1] = A + K * v),
                (o[le] = $ + j * v),
                (C = C._next);
            if (((P._gsRawPath = m), u._apply)) {
              for (M = "", q = " ", R = 0; R < m.length; R++)
                for (
                  o = m[R],
                    v = o.length,
                    M +=
                      "M" +
                      ((o[0] * y) | 0) / y +
                      q +
                      ((o[1] * y) | 0) / y +
                      " C",
                    E = 2;
                  E < v;
                  E++
                )
                  M += ((o[E] * y) | 0) / y + q;
              u._prop ? (P[u._prop] = M) : P.setAttribute("d", M);
            }
          }
          u._render && m && u._render.call(u._tween, m, P);
        },
        kill: function (l) {
          this._pt = this._rawPath = 0;
        },
        getRawPath: Ee,
        stringToRawPath: xe,
        rawPathToString: ue,
        normalizeStrings: function (l, u, m) {
          var C = m.shapeIndex,
            k = m.map,
            y = [l, u];
          return Kr(y, C, k), y;
        },
        pathFilter: Kr,
        pointsFilter: pn,
        getTotalSize: Ve,
        equalizeSegmentQuantity: Ge,
        convertToPath: function (l, u) {
          return he(l).map(function (m) {
            return Z(m, u !== !1);
          });
        },
        defaultType: "linear",
        defaultUpdateTarget: !0,
        defaultMap: "size",
      };
    ce() && Ke.registerPlugin(Pr),
      (r.MorphSVGPlugin = Pr),
      (r.default = Pr),
      Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(ji, ji.exports);
var Gs = ji.exports;
function qs(w) {
  const t = w - 1;
  return t * t * t + 1;
}
function Ai(w, { delay: t = 0, duration: r = 400, easing: s = hs } = {}) {
  const h = +getComputedStyle(w).opacity;
  return { delay: t, duration: r, easing: s, css: (c) => `opacity: ${c * h}` };
}
function No(
  w,
  {
    delay: t = 0,
    duration: r = 400,
    easing: s = qs,
    x: h = 0,
    y: c = 0,
    opacity: d = 0,
  } = {}
) {
  const p = getComputedStyle(w),
    T = +p.opacity,
    H = p.transform === "none" ? "" : p.transform,
    I = T * (1 - d),
    [V, U] = _o(h),
    [O, oe] = _o(c);
  return {
    delay: t,
    duration: r,
    easing: s,
    css: (G, Ee) => `
			transform: ${H} translate(${(1 - G) * V}${U}, ${(1 - G) * O}${oe});
			opacity: ${T - I * Ee}`,
  };
}
function Ws(w) {
  let t, r, s, h, c, d, p, T, H, I;
  return {
    c() {
      (t = be("svg")),
        (r = be("path")),
        (s = be("path")),
        (h = be("path")),
        (c = be("path")),
        (d = be("path")),
        (p = be("path")),
        (T = be("path")),
        (H = be("path")),
        (I = be("path")),
        this.h();
    },
    l(V) {
      t = ve(V, "svg", {
        viewBox: !0,
        class: !0,
        fill: !0,
        preserveAspectRatio: !0,
        xmlns: !0,
      });
      var U = J(t);
      (r = ve(U, "path", { d: !0, fill: !0 })),
        J(r).forEach(z),
        (s = ve(U, "path", { d: !0, fill: !0 })),
        J(s).forEach(z),
        (h = ve(U, "path", { d: !0, fill: !0 })),
        J(h).forEach(z),
        (c = ve(U, "path", { d: !0, fill: !0 })),
        J(c).forEach(z),
        (d = ve(U, "path", { d: !0, fill: !0 })),
        J(d).forEach(z),
        (p = ve(U, "path", { d: !0, fill: !0 })),
        J(p).forEach(z),
        (T = ve(U, "path", { d: !0, fill: !0 })),
        J(T).forEach(z),
        (H = ve(U, "path", { d: !0, fill: !0 })),
        J(H).forEach(z),
        (I = ve(U, "path", { d: !0, fill: !0 })),
        J(I).forEach(z),
        U.forEach(z),
        this.h();
    },
    h() {
      f(
        r,
        "d",
        "M403.162 38V0H410.182V15.4639H419.101L432.084 0H439.684V2.00555L425.434 19L439.737 35.9944V38H432.084L419.101 22.5361H410.182V38H403.162Z"
      ),
        f(r, "fill", "var(--line-color)"),
        f(
          s,
          "d",
          "M384.046 37.9999L372.594 24.3305H381.724L391.646 36.0472V37.9999H384.046ZM353.752 37.9999V0.0527344H384.363C385.7 0.0527344 386.932 0.386994 388.058 1.05551C389.183 1.72403 390.081 2.62125 390.749 3.74718C391.418 4.83792 391.752 6.05181 391.752 7.38884V17.6277C391.752 18.9648 391.418 20.1962 390.749 21.3222C390.081 22.4481 389.183 23.3453 388.058 24.0138C386.932 24.6472 385.7 24.9638 384.363 24.9638L360.719 25.0166V37.9999H353.752ZM361.352 17.9444H384.046C384.222 17.9444 384.381 17.8916 384.521 17.7861C384.662 17.6805 384.733 17.5398 384.733 17.3638V7.65273C384.733 7.47681 384.662 7.33606 384.521 7.23051C384.381 7.08977 384.222 7.0194 384.046 7.0194H361.352C361.176 7.0194 361.018 7.08977 360.877 7.23051C360.771 7.33606 360.719 7.47681 360.719 7.65273V17.3638C360.719 17.5398 360.771 17.6805 360.877 17.7861C361.018 17.8916 361.176 17.9444 361.352 17.9444Z"
        ),
        f(s, "fill", "var(--line-color)"),
        f(
          h,
          "d",
          "M311.47 38C310.133 38 308.901 37.6657 307.775 36.9972C306.685 36.3287 305.805 35.4491 305.137 34.3583C304.468 33.2324 304.134 32.0009 304.134 30.6639V7.33611C304.134 5.99907 304.468 4.78518 305.137 3.69444C305.805 2.56852 306.685 1.6713 307.775 1.00278C308.901 0.334259 310.133 0 311.47 0H334.798C336.135 0 337.349 0.334259 338.439 1.00278C339.565 1.6713 340.462 2.56852 341.131 3.69444C341.8 4.78518 342.134 5.99907 342.134 7.33611V30.6639C342.134 32.0009 341.8 33.2324 341.131 34.3583C340.462 35.4491 339.565 36.3287 338.439 36.9972C337.349 37.6657 336.135 38 334.798 38H311.47ZM311.734 30.9805H334.428C334.604 30.9805 334.762 30.9278 334.903 30.8222C335.044 30.6815 335.114 30.5231 335.114 30.3472V7.65277C335.114 7.47685 335.044 7.33611 334.903 7.23055C334.762 7.08981 334.604 7.01944 334.428 7.01944H311.734C311.558 7.01944 311.4 7.08981 311.259 7.23055C311.153 7.33611 311.1 7.47685 311.1 7.65277V30.3472C311.1 30.5231 311.153 30.6815 311.259 30.8222C311.4 30.9278 311.558 30.9805 311.734 30.9805Z"
        ),
        f(h, "fill", "var(--line-color)"),
        f(
          c,
          "d",
          "M251.005 38L237.178 0H244.567L253.75 25.0694L262.933 0H269.742L278.925 25.0694L288.055 0H295.497L281.669 38H276.181L266.311 11.0833L256.494 38H251.005Z"
        ),
        f(c, "fill", "var(--line-color)"),
        f(
          d,
          "d",
          "M206.05 38V7.01944H190.533V0H228.533V7.01944H213.069V38H206.05Z"
        ),
        f(d, "fill", "var(--line-color)"),
        f(
          p,
          "d",
          "M146.325 38V0H181.317V7.01944H153.345V15.4639H175.828V22.5361H153.345V30.9805H181.317V38H146.325Z"
        ),
        f(p, "fill", "var(--line-color)"),
        f(
          T,
          "d",
          "M96.501 38V0H104.154L127.482 27.7611V0H134.501V38H126.848L103.468 10.1861V38H96.501Z"
        ),
        f(T, "fill", "var(--line-color)"),
        f(
          H,
          "d",
          "M52.6611 38V0H87.6528V7.01944H59.6806V15.4639H82.1639V22.5361H59.6806V38H52.6611Z"
        ),
        f(H, "fill", "var(--line-color)"),
        f(
          I,
          "d",
          "M30.2944 38V32.1944L38 30.2944V30.9805H42.5389V38H30.2944ZM7.33611 38C5.99907 38 4.76759 37.6657 3.64167 36.9972C2.55093 36.3287 1.6713 35.4491 1.00278 34.3583C0.334259 33.2324 0 32.0009 0 30.6639V7.33611C0 5.99907 0.334259 4.78518 1.00278 3.69444C1.6713 2.56852 2.55093 1.6713 3.64167 1.00278C4.76759 0.334259 5.99907 0 7.33611 0H30.6639C32.0009 0 33.2148 0.334259 34.3055 1.00278C35.4315 1.6713 36.3287 2.56852 36.9972 3.69444C37.6657 4.78518 38 5.99907 38 7.33611V30.6639C38 32.0009 37.6657 33.2324 36.9972 34.3583C36.3287 35.4491 35.4315 36.3287 34.3055 36.9972C33.2148 37.6657 32.0009 38 30.6639 38H7.33611ZM7.6 30.9805H30.2944C30.4704 30.9805 30.6287 30.9278 30.7694 30.8222C30.9102 30.6815 30.9805 30.5231 30.9805 30.3472V7.65277C30.9805 7.47685 30.9102 7.33611 30.7694 7.23055C30.6287 7.08981 30.4704 7.01944 30.2944 7.01944H7.6C7.42407 7.01944 7.26574 7.08981 7.125 7.23055C7.01944 7.33611 6.96666 7.47685 6.96666 7.65277V30.3472C6.96666 30.5231 7.01944 30.6815 7.125 30.8222C7.26574 30.9278 7.42407 30.9805 7.6 30.9805Z"
        ),
        f(I, "fill", "var(--line-color)"),
        f(t, "viewBox", "0 0 440 38"),
        f(t, "class", w[0]),
        f(t, "fill", "none"),
        f(t, "preserveAspectRatio", "xMidYMid meet"),
        f(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(V, U) {
      Je(V, t, U),
        W(t, r),
        W(t, s),
        W(t, h),
        W(t, c),
        W(t, d),
        W(t, p),
        W(t, T),
        W(t, H),
        W(t, I);
    },
    p(V, [U]) {
      U & 1 && f(t, "class", V[0]);
    },
    i: Et,
    o: Et,
    d(V) {
      V && z(t);
    },
  };
}
function Us(w, t, r) {
  let { className: s = "" } = t;
  return (
    (w.$$set = (h) => {
      "className" in h && r(0, (s = h.className));
    }),
    [s]
  );
}
class js extends kr {
  constructor(t) {
    super(), Er(this, t, Us, Ws, Tr, { className: 0 });
  }
}
function Ks(w) {
  let t, r, s, h, c, d, p;
  return {
    c() {
      (t = be("svg")),
        (r = be("g")),
        (s = be("rect")),
        (h = be("rect")),
        (c = be("defs")),
        (d = be("clipPath")),
        (p = be("rect")),
        this.h();
    },
    l(T) {
      t = ve(T, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var H = J(t);
      r = ve(H, "g", { "clip-path": !0 });
      var I = J(r);
      (s = ve(I, "rect", { width: !0, height: !0, fill: !0 })),
        J(s).forEach(z),
        (h = ve(I, "rect", { x: !0, y: !0, width: !0, height: !0, fill: !0 })),
        J(h).forEach(z),
        I.forEach(z),
        (c = ve(H, "defs", {}));
      var V = J(c);
      d = ve(V, "clipPath", { id: !0 });
      var U = J(d);
      (p = ve(U, "rect", { width: !0, height: !0, fill: !0 })),
        J(p).forEach(z),
        U.forEach(z),
        V.forEach(z),
        H.forEach(z),
        this.h();
    },
    h() {
      f(s, "width", "88"),
        f(s, "height", "88"),
        f(s, "fill", "#161616"),
        f(h, "x", "-7"),
        f(h, "y", "-6"),
        f(h, "width", "101"),
        f(h, "height", "101"),
        f(h, "fill", "#D9D9D9"),
        f(r, "clip-path", "url(#clip0_2937_8959)"),
        f(p, "width", "88"),
        f(p, "height", "88"),
        f(p, "fill", "white"),
        f(d, "id", "clip0_2937_8959"),
        f(t, "viewBox", "0 0 88 88"),
        f(t, "fill", "none"),
        f(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(T, H) {
      Je(T, t, H), W(t, r), W(r, s), W(r, h), W(t, c), W(c, d), W(d, p);
    },
    p: Et,
    i: Et,
    o: Et,
    d(T) {
      T && z(t);
    },
  };
}
class Zs extends kr {
  constructor(t) {
    super(), Er(this, t, null, Ks, Tr, {});
  }
}
function $s(w) {
  let t, r, s, h, c, d, p;
  return {
    c() {
      (t = be("svg")),
        (r = be("g")),
        (s = be("rect")),
        (h = be("rect")),
        (c = be("defs")),
        (d = be("clipPath")),
        (p = be("rect")),
        this.h();
    },
    l(T) {
      t = ve(T, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var H = J(t);
      r = ve(H, "g", { "clip-path": !0 });
      var I = J(r);
      (s = ve(I, "rect", { width: !0, height: !0, fill: !0 })),
        J(s).forEach(z),
        (h = ve(I, "rect", { x: !0, y: !0, width: !0, height: !0, fill: !0 })),
        J(h).forEach(z),
        I.forEach(z),
        (c = ve(H, "defs", {}));
      var V = J(c);
      d = ve(V, "clipPath", { id: !0 });
      var U = J(d);
      (p = ve(U, "rect", { width: !0, height: !0, fill: !0 })),
        J(p).forEach(z),
        U.forEach(z),
        V.forEach(z),
        H.forEach(z),
        this.h();
    },
    h() {
      f(s, "width", "88"),
        f(s, "height", "88"),
        f(s, "fill", "#161616"),
        f(h, "x", "-57"),
        f(h, "y", "-6"),
        f(h, "width", "101"),
        f(h, "height", "101"),
        f(h, "fill", "#D9D9D9"),
        f(r, "clip-path", "url(#clip0_2937_8957)"),
        f(p, "width", "88"),
        f(p, "height", "88"),
        f(p, "fill", "white"),
        f(d, "id", "clip0_2937_8957"),
        f(t, "viewBox", "0 0 88 88"),
        f(t, "fill", "none"),
        f(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(T, H) {
      Je(T, t, H), W(t, r), W(r, s), W(r, h), W(t, c), W(c, d), W(d, p);
    },
    p: Et,
    i: Et,
    o: Et,
    d(T) {
      T && z(t);
    },
  };
}
class Qs extends kr {
  constructor(t) {
    super(), Er(this, t, null, $s, Tr, {});
  }
}
function Js(w) {
  let t, r, s, h, c, d, p;
  return {
    c() {
      (t = be("svg")),
        (r = be("g")),
        (s = be("rect")),
        (h = be("rect")),
        (c = be("defs")),
        (d = be("clipPath")),
        (p = be("rect")),
        this.h();
    },
    l(T) {
      t = ve(T, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var H = J(t);
      r = ve(H, "g", { "clip-path": !0 });
      var I = J(r);
      (s = ve(I, "rect", { width: !0, height: !0, fill: !0 })),
        J(s).forEach(z),
        (h = ve(I, "rect", { x: !0, y: !0, width: !0, height: !0, fill: !0 })),
        J(h).forEach(z),
        I.forEach(z),
        (c = ve(H, "defs", {}));
      var V = J(c);
      d = ve(V, "clipPath", { id: !0 });
      var U = J(d);
      (p = ve(U, "rect", { width: !0, height: !0, fill: !0 })),
        J(p).forEach(z),
        U.forEach(z),
        V.forEach(z),
        H.forEach(z),
        this.h();
    },
    h() {
      f(s, "width", "88"),
        f(s, "height", "88"),
        f(s, "fill", "#161616"),
        f(h, "x", "44"),
        f(h, "y", "-6"),
        f(h, "width", "101"),
        f(h, "height", "101"),
        f(h, "fill", "#D9D9D9"),
        f(r, "clip-path", "url(#clip0_2937_8961)"),
        f(p, "width", "88"),
        f(p, "height", "88"),
        f(p, "fill", "white"),
        f(d, "id", "clip0_2937_8961"),
        f(t, "viewBox", "0 0 88 88"),
        f(t, "fill", "none"),
        f(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(T, H) {
      Je(T, t, H), W(t, r), W(r, s), W(r, h), W(t, c), W(c, d), W(d, p);
    },
    p: Et,
    i: Et,
    o: Et,
    d(T) {
      T && z(t);
    },
  };
}
class el extends kr {
  constructor(t) {
    super(), Er(this, t, null, Js, Tr, {});
  }
}
function tl(w) {
  let t, r, s, h, c, d;
  return {
    c() {
      (t = be("svg")),
        (r = be("g")),
        (s = be("rect")),
        (h = be("defs")),
        (c = be("clipPath")),
        (d = be("rect")),
        this.h();
    },
    l(p) {
      t = ve(p, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var T = J(t);
      r = ve(T, "g", { "clip-path": !0 });
      var H = J(r);
      (s = ve(H, "rect", { width: !0, height: !0, fill: !0 })),
        J(s).forEach(z),
        H.forEach(z),
        (h = ve(T, "defs", {}));
      var I = J(h);
      c = ve(I, "clipPath", { id: !0 });
      var V = J(c);
      (d = ve(V, "rect", { width: !0, height: !0, fill: !0 })),
        J(d).forEach(z),
        V.forEach(z),
        I.forEach(z),
        T.forEach(z),
        this.h();
    },
    h() {
      f(s, "width", "88"),
        f(s, "height", "88"),
        f(s, "fill", "#161616"),
        f(r, "clip-path", "url(#clip0_2937_8963)"),
        f(d, "width", "88"),
        f(d, "height", "88"),
        f(d, "fill", "white"),
        f(c, "id", "clip0_2937_8963"),
        f(t, "viewBox", "0 0 88 88"),
        f(t, "fill", "none"),
        f(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(p, T) {
      Je(p, t, T), W(t, r), W(r, s), W(t, h), W(h, c), W(c, d);
    },
    p: Et,
    i: Et,
    o: Et,
    d(p) {
      p && z(t);
    },
  };
}
class rl extends kr {
  constructor(t) {
    super(), Er(this, t, null, tl, Tr, {});
  }
}
function Lo(w, t, r) {
  const s = w.slice();
  return (s[10] = t[r]), (s[12] = r), s;
}
function Ho(w) {
  let t, r, s;
  var h = w[10];
  function c(d, p) {
    return {};
  }
  return (
    h && (r = vo(h, c())),
    {
      c() {
        (t = Le("div")), r && Wr(r.$$.fragment), this.h();
      },
      l(d) {
        t = Ne(d, "DIV", { class: !0, style: !0 });
        var p = J(t);
        r && sn(r.$$.fragment, p), p.forEach(z), this.h();
      },
      h() {
        f(
          t,
          "class",
          "icon-wrapper transition-opacity transition-transform duration-300 duration-300 svelte-xmkv7t"
        ),
          ot(t, "position", "absolute"),
          ot(t, "top", "0"),
          ot(t, "left", "0"),
          ot(t, "width", "100%"),
          ot(t, "height", "100%"),
          ot(t, "opacity", w[12] === w[2] ? 1 : 0);
      },
      m(d, p) {
        Je(d, t, p), r && qr(r, t, null), (s = !0);
      },
      p(d, p) {
        if (h !== (h = d[10])) {
          if (r) {
            ni();
            const T = r;
            xt(T.$$.fragment, 1, 0, () => {
              Gr(T, 1);
            }),
              ii();
          }
          h
            ? ((r = vo(h, c())),
              Wr(r.$$.fragment),
              ft(r.$$.fragment, 1),
              qr(r, t, null))
            : (r = null);
        }
        (!s || p & 4) && ot(t, "opacity", d[12] === d[2] ? 1 : 0);
      },
      i(d) {
        s || (r && ft(r.$$.fragment, d), (s = !0));
      },
      o(d) {
        r && xt(r.$$.fragment, d), (s = !1);
      },
      d(d) {
        d && z(t), r && Gr(r);
      },
    }
  );
}
function nl(w) {
  let t,
    r,
    s,
    h,
    c,
    d,
    p,
    T,
    H,
    I = Mo(w[3]),
    V = [];
  for (let O = 0; O < I.length; O += 1) V[O] = Ho(Lo(w, I, O));
  const U = (O) =>
    xt(V[O], 1, 1, () => {
      V[O] = null;
    });
  return {
    c() {
      t = Le("button");
      for (let O = 0; O < V.length; O += 1) V[O].c();
      (r = dr()), (s = Le("div")), (h = dr()), (c = Le("div")), this.h();
    },
    l(O) {
      t = Ne(O, "BUTTON", { class: !0, "aria-label": !0, type: !0 });
      var oe = J(t);
      for (let G = 0; G < V.length; G += 1) V[G].l(oe);
      (r = hr(oe)),
        (s = Ne(oe, "DIV", { class: !0, style: !0 })),
        J(s).forEach(z),
        (h = hr(oe)),
        (c = Ne(oe, "DIV", { class: !0, style: !0 })),
        J(c).forEach(z),
        oe.forEach(z),
        this.h();
    },
    h() {
      f(
        s,
        "class",
        "background-overlay absolute left-0 top-0 h-full w-full -translate-x-[50%] transition-transform duration-300 svelte-xmkv7t"
      ),
        ot(s, "background", "var(--line-color)"),
        f(
          c,
          "class",
          "absolute left-0 top-0 h-full w-full rounded-full border"
        ),
        ot(c, "border-color", "var(--line-color)"),
        f(
          t,
          "class",
          (d =
            mo(
              ko(
                "group relative cursor-pointer overflow-hidden rounded-full bg-transparent p-0",
                w[0]
              )
            ) + " svelte-xmkv7t")
        ),
        f(t, "aria-label", "Toggle theme"),
        f(t, "type", "button");
    },
    m(O, oe) {
      Je(O, t, oe);
      for (let G = 0; G < V.length; G += 1) V[G] && V[G].m(t, null);
      W(t, r),
        W(t, s),
        W(t, h),
        W(t, c),
        w[6](t),
        (p = !0),
        T || ((H = Yo(t, "click", w[4])), (T = !0));
    },
    p(O, [oe]) {
      if (oe & 12) {
        I = Mo(O[3]);
        let G;
        for (G = 0; G < I.length; G += 1) {
          const Ee = Lo(O, I, G);
          V[G]
            ? (V[G].p(Ee, oe), ft(V[G], 1))
            : ((V[G] = Ho(Ee)), V[G].c(), ft(V[G], 1), V[G].m(t, r));
        }
        for (ni(), G = I.length; G < V.length; G += 1) U(G);
        ii();
      }
      (!p ||
        (oe & 1 &&
          d !==
            (d =
              mo(
                ko(
                  "group relative cursor-pointer overflow-hidden rounded-full bg-transparent p-0",
                  O[0]
                )
              ) + " svelte-xmkv7t"))) &&
        f(t, "class", d);
    },
    i(O) {
      if (!p) {
        for (let oe = 0; oe < I.length; oe += 1) ft(V[oe]);
        p = !0;
      }
    },
    o(O) {
      V = V.filter(Boolean);
      for (let oe = 0; oe < V.length; oe += 1) xt(V[oe]);
      p = !1;
    },
    d(O) {
      O && z(t), ds(V, O), w[6](null), (T = !1), H();
    },
  };
}
function il(w, t, r) {
  let s;
  ri(w, Di, (O) => r(5, (s = O)));
  let { className: h = "" } = t;
  const c = Bo();
  let d,
    p = 0,
    T = !1;
  const H = [Qs, Zs, el, rl];
  async function I() {
    if (T) return;
    T = !0;
    const O = (p + 1) % H.length;
    r(2, (p = O)),
      r(2, (p = (p + 1) % H.length)),
      c("click", { currentIconIndex: p }),
      setTimeout(() => {
        T = !1;
      }, 300);
  }
  hi(() => {
    V();
  });
  function V() {
    s === "dark" ? r(2, (p = 0)) : r(2, (p = 2));
  }
  function U(O) {
    ti[O ? "unshift" : "push"](() => {
      (d = O), r(1, d);
    });
  }
  return (
    (w.$$set = (O) => {
      "className" in O && r(0, (h = O.className));
    }),
    (w.$$.update = () => {
      w.$$.dirty & 32 && s && V();
    }),
    [h, d, p, H, I, s, U]
  );
}
class Zo extends kr {
  constructor(t) {
    super(), Er(this, t, il, nl, Tr, { className: 0 });
  }
}
const Ri = Ps(!1);
function ol() {
  Ri.update((w) => !w);
}
function sl() {
  Ri.set(!1);
}
function ll(w) {
  let t, r, s, h, c, d, p, T;
  return {
    c() {
      (t = Le("button")),
        (r = be("svg")),
        (s = be("path")),
        (h = be("path")),
        (c = be("path")),
        this.h();
    },
    l(H) {
      t = Ne(H, "BUTTON", { class: !0, "aria-label": !0 });
      var I = J(t);
      r = ve(I, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var V = J(r);
      (s = ve(V, "path", {
        d: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
      })),
        J(s).forEach(z),
        (h = ve(V, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
        })),
        J(h).forEach(z),
        (c = ve(V, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
        })),
        J(c).forEach(z),
        V.forEach(z),
        I.forEach(z),
        this.h();
    },
    h() {
      f(s, "d", w[3][0]),
        f(s, "stroke", "var(--line-color, #D9D9D9)"),
        f(s, "stroke-width", "4"),
        f(s, "stroke-linecap", "round"),
        f(h, "d", w[3][1]),
        f(h, "stroke", "var(--line-color, #D9D9D9)"),
        f(h, "stroke-width", "4"),
        f(h, "stroke-linecap", "round"),
        f(c, "d", w[3][2]),
        f(c, "stroke", "var(--line-color, #D9D9D9)"),
        f(c, "stroke-width", "4"),
        f(c, "stroke-linecap", "round"),
        f(r, "width", "65"),
        f(r, "height", "63"),
        f(r, "viewBox", "0 0 65 63"),
        f(r, "fill", "none"),
        f(r, "xmlns", "http://www.w3.org/2000/svg"),
        f(t, "class", w[0]),
        f(t, "aria-label", (d = w[1] ? "Close menu" : "Open menu"));
    },
    m(H, I) {
      Je(H, t, I),
        W(t, r),
        W(r, s),
        w[5](s),
        W(r, h),
        w[6](h),
        W(r, c),
        w[7](c),
        p || ((T = Yo(t, "click", w[4])), (p = !0));
    },
    p(H, [I]) {
      I & 1 && f(t, "class", H[0]),
        I & 2 &&
          d !== (d = H[1] ? "Close menu" : "Open menu") &&
          f(t, "aria-label", d);
    },
    i: Et,
    o: Et,
    d(H) {
      H && z(t), w[5](null), w[6](null), w[7](null), (p = !1), T();
    },
  };
}
function al(w, t, r) {
  let { className: s = "" } = t;
  const h = Bo();
  let c = !1,
    d = [null, null, null];
  const p = ["M18 22 L48 22", "M18 32 L48 32", "M18 42 L48 42"],
    T = ["M23 42 L43 22", "M23 22 L43 42"];
  let H;
  hi(() => {
    H = Ri.subscribe((G) => {
      G !== c && (r(1, (c = G)), V());
    });
  }),
    ps(() => {
      H && H();
    });
  function I() {
    r(1, (c = !c)), V(), h("click", { isOpen: c });
  }
  function V() {
    c
      ? (Un.to(d[0], { attr: { d: T[0] }, duration: 0.3, ease: "power2.out" }),
        Un.to(d[2], { attr: { d: T[1] }, duration: 0.3, ease: "power2.out" }),
        Un.to(d[1], { opacity: 0, duration: 0.2, ease: "power2.out" }))
      : (Un.to(d[0], { attr: { d: p[0] }, duration: 0.3, ease: "power2.out" }),
        Un.to(d[2], { attr: { d: p[2] }, duration: 0.3, ease: "power2.out" }),
        Un.to(d[1], { opacity: 1, duration: 0.2, ease: "power2.out" }));
  }
  function U(G) {
    ti[G ? "unshift" : "push"](() => {
      (d[0] = G), r(2, d);
    });
  }
  function O(G) {
    ti[G ? "unshift" : "push"](() => {
      (d[1] = G), r(2, d);
    });
  }
  function oe(G) {
    ti[G ? "unshift" : "push"](() => {
      (d[2] = G), r(2, d);
    });
  }
  return (
    (w.$$set = (G) => {
      "className" in G && r(0, (s = G.className));
    }),
    [s, c, d, p, I, U, O, oe]
  );
}
class cl extends kr {
  constructor(t) {
    super(), Er(this, t, al, ll, Tr, { className: 0 });
  }
}
function fl(w) {
  let t, r, s, h, c, d, p, T, H, I;
  return {
    c() {
      (t = be("svg")),
        (r = be("g")),
        (s = be("path")),
        (h = be("path")),
        (c = be("path")),
        (d = be("path")),
        (p = be("path")),
        (T = be("defs")),
        (H = be("clipPath")),
        (I = be("rect")),
        this.h();
    },
    l(V) {
      t = ve(V, "svg", {
        width: !0,
        height: !0,
        class: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var U = J(t);
      r = ve(U, "g", { "clip-path": !0 });
      var O = J(r);
      (s = ve(O, "path", {
        "fill-rule": !0,
        "clip-rule": !0,
        d: !0,
        fill: !0,
        "fill-opacity": !0,
      })),
        J(s).forEach(z),
        (h = ve(O, "path", {
          "fill-rule": !0,
          "clip-rule": !0,
          d: !0,
          fill: !0,
          "fill-opacity": !0,
        })),
        J(h).forEach(z),
        (c = ve(O, "path", {
          "fill-rule": !0,
          "clip-rule": !0,
          d: !0,
          fill: !0,
          "fill-opacity": !0,
        })),
        J(c).forEach(z),
        (d = ve(O, "path", {
          "fill-rule": !0,
          "clip-rule": !0,
          d: !0,
          fill: !0,
          "fill-opacity": !0,
        })),
        J(d).forEach(z),
        (p = ve(O, "path", {
          "fill-rule": !0,
          "clip-rule": !0,
          d: !0,
          fill: !0,
          "fill-opacity": !0,
        })),
        J(p).forEach(z),
        O.forEach(z),
        (T = ve(U, "defs", {}));
      var oe = J(T);
      H = ve(oe, "clipPath", { id: !0 });
      var G = J(H);
      (I = ve(G, "rect", { width: !0, height: !0, fill: !0 })),
        J(I).forEach(z),
        G.forEach(z),
        oe.forEach(z),
        U.forEach(z),
        this.h();
    },
    h() {
      f(s, "fill-rule", "evenodd"),
        f(s, "clip-rule", "evenodd"),
        f(
          s,
          "d",
          "M50.1577 1.40557C27.1637 6.66957 8.60966 24.6316 2.17266 47.8576C-5.75034 76.4516 8.61866 108.649 35.1387 121.725C46.3367 127.247 55.8617 129.213 68.1047 128.531C84.1327 127.638 98.6727 121.251 109.64 110.284L115.062 104.862H263.192H411.322L416.871 110.411C427.882 121.421 442.022 127.635 458.105 128.531C477.164 129.593 493.614 123.368 507.123 109.983C519.652 97.5666 526.105 82.0656 526.105 64.3816C526.105 46.7606 519.72 31.4626 507.048 18.7236C481.588 -6.87143 439.954 -6.13043 414.965 20.3636L411.665 23.8616L263.135 23.8456L114.605 23.8306L109.846 18.9376C98.5527 7.32557 83.5967 0.864571 66.6547 0.277571C60.1697 0.0525712 54.3177 0.45257 50.1577 1.40557Z"
        ),
        f(s, "fill", "var(--line-color)"),
        f(s, "fill-opacity", "0.987"),
        f(h, "fill-rule", "evenodd"),
        f(h, "clip-rule", "evenodd"),
        f(
          h,
          "d",
          "M50.7802 174.489C32.2772 178.459 15.4542 191.322 7.08515 207.901C-3.20085 228.278 -2.00785 253.064 10.1872 272.375C17.7112 284.287 31.0612 294.365 46.1052 299.489C54.5752 302.373 75.2982 302.115 84.1052 299.015C100.111 293.381 113.699 281.991 120.856 268.21C126.319 257.692 128.377 249.467 128.451 237.862C128.525 226.197 127.085 219.856 121.864 208.862C118.615 202.021 116.244 198.782 109.716 192.265C93.5842 176.161 72.5542 169.818 50.7802 174.489Z"
        ),
        f(h, "fill", "var(--line-color)"),
        f(h, "fill-opacity", "0.987"),
        f(c, "fill-rule", "evenodd"),
        f(c, "clip-rule", "evenodd"),
        f(
          c,
          "d",
          "M251.103 173.815C227.976 178.202 208.122 195.296 201.043 216.912C198.91 223.423 198.61 226.126 198.661 238.362C198.714 251.052 198.967 252.993 201.362 259.099C209.348 279.464 223.572 292.812 244.603 299.679C248.128 300.83 253.29 301.317 262.103 301.329C272.679 301.344 275.744 300.972 282.018 298.913C302.396 292.224 319.273 274.045 324.769 252.862C326.953 244.446 326.956 230.297 324.775 221.862C319.192 200.262 301.385 181.749 280.103 175.419C273.624 173.492 257.504 172.6 251.103 173.815Z"
        ),
        f(c, "fill", "var(--line-color)"),
        f(c, "fill-opacity", "0.987"),
        f(d, "fill-rule", "evenodd"),
        f(d, "clip-rule", "evenodd"),
        f(
          d,
          "d",
          "M448.107 174.417C430.049 178.295 412.186 192.356 404.347 208.862C399.126 219.856 397.686 226.197 397.76 237.862C397.87 255.16 404.229 270.874 415.805 282.45C427.731 294.376 441.684 300.68 458.194 301.6C486.191 303.161 511.7 286.848 521.897 260.862C525.105 252.686 526.054 247.352 526.082 237.342C526.165 206.703 504.92 180.655 474.767 174.427C465.639 172.541 456.855 172.538 448.107 174.417Z"
        ),
        f(d, "fill", "var(--line-color)"),
        f(d, "fill-opacity", "0.987"),
        f(p, "fill-rule", "evenodd"),
        f(p, "clip-rule", "evenodd"),
        f(
          p,
          "d",
          "M50.2735 347.395C21.3785 353.667 0.105469 380.367 0.105469 410.362C0.105469 428.027 6.51648 443.393 19.1385 455.983C32.3545 469.165 48.9395 475.536 67.6055 474.601C83.6225 473.799 98.9815 466.958 109.847 455.786L114.606 450.893H263.106H411.606L416.365 455.786C427.23 466.958 442.589 473.799 458.606 474.601C477.236 475.534 493.787 469.185 507.141 455.983C513.509 449.688 515.64 446.709 519.394 438.862C524.751 427.662 526.106 421.844 526.106 410.043C526.106 392.786 519.62 377.361 507.049 364.724C482.112 339.655 441.431 339.682 416.606 364.783L411.606 369.839L263.222 369.85L114.839 369.862L110.089 365.036C94.8555 349.562 71.7235 342.739 50.2735 347.395Z"
        ),
        f(p, "fill", "var(--line-color)"),
        f(p, "fill-opacity", "0.987"),
        f(r, "clip-path", "url(#clip0_2967_1780)"),
        f(I, "width", "527"),
        f(I, "height", "475"),
        f(I, "fill", "var(--line-color)"),
        f(H, "id", "clip0_2967_1780"),
        f(t, "width", "527"),
        f(t, "height", "475"),
        f(t, "class", w[0]),
        f(t, "viewBox", "0 0 527 475"),
        f(t, "fill", "none"),
        f(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(V, U) {
      Je(V, t, U),
        W(t, r),
        W(r, s),
        W(r, h),
        W(r, c),
        W(r, d),
        W(r, p),
        W(t, T),
        W(T, H),
        W(H, I);
    },
    p(V, [U]) {
      U & 1 && f(t, "class", V[0]);
    },
    i: Et,
    o: Et,
    d(V) {
      V && z(t);
    },
  };
}
function ul(w, t, r) {
  let { className: s = "" } = t;
  return (
    (w.$$set = (h) => {
      "className" in h && r(0, (s = h.className));
    }),
    [s]
  );
}
class hl extends kr {
  constructor(t) {
    super(), Er(this, t, ul, fl, Tr, { className: 0 });
  }
}
function dl(w) {
  let t, r;
  return (
    (t = new cl({ props: { className: "border-border border-l" } })),
    t.$on("click", ol),
    {
      c() {
        Wr(t.$$.fragment);
      },
      l(s) {
        sn(t.$$.fragment, s);
      },
      m(s, h) {
        qr(t, s, h), (r = !0);
      },
      i(s) {
        r || (ft(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        xt(t.$$.fragment, s), (r = !1);
      },
      d(s) {
        Gr(t, s);
      },
    }
  );
}
function pl(w) {
  let t,
    r = `<div class="grid h-full grid-rows-2 border-x" style="border-color: var(--line-color);">
    <a></a> 
    <a href="${qo}" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-center overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0"><span class="relative z-10 transition-colors duration-300 group-hover:text-[var(--border-color)]"></span></a></div> 
    <a href="${Wo}" class="group relative flex h-full items-center justify-center overflow-hidden border-r px-6 before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0" style="border-color: var(--line-color);"><span class="relative z-10 transition-colors duration-300 group-hover:text-[var(--border-color)]">Manifesto</span></a> 
    <a href="${Uo}" class="group relative flex h-full items-center justify-center overflow-hidden border-r px-6 before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0" style="border-color: var(--line-color);"><span class="relative z-10 transition-colors duration-300 group-hover:text-[var(--border-color)]">Docs</span></a>`,
    s,
    h,
    c,
    d;
  return (
    (c = new Zo({ props: { className: "w-[88px] h-[88px]" } })),
    c.$on("click", jo),
    {
      c() {
        (t = Le("div")),
          (t.innerHTML = r),
          (s = dr()),
          (h = Le("div")),
          Wr(c.$$.fragment),
          this.h();
      },
      l(p) {
        (t = Ne(p, "DIV", { class: !0, "data-svelte-h": !0 })),
          ei(t) !== "svelte-1cz5m59" && (t.innerHTML = r),
          (s = hr(p)),
          (h = Ne(p, "DIV", { class: !0 }));
        var T = J(h);
        sn(c.$$.fragment, T), T.forEach(z), this.h();
      },
      h() {
        f(t, "class", "flex"),
          f(h, "class", "flex items-center justify-center");
      },
      m(p, T) {
        Je(p, t, T), Je(p, s, T), Je(p, h, T), qr(c, h, null), (d = !0);
      },
      i(p) {
        d || (ft(c.$$.fragment, p), (d = !0));
      },
      o(p) {
        xt(c.$$.fragment, p), (d = !1);
      },
      d(p) {
        p && (z(t), z(s), z(h)), Gr(c);
      },
    }
  );
}
function Oo(w) {
  let t,
    r,
    s,
    h,
    c,
    d,
    p,
    T =
      '',
    H,
    I,
    V =
      '',
    U,
    O,
    oe =
      '<span class="relative z-10 transition-colors duration-300 group-hover:text-[var(--border-color)]">Manifesto</span>',
    G,
    Ee,
    pe =
      '<span class="relative z-10 transition-colors duration-300 group-hover:text-[var(--border-color)]">Docs</span>',
    ge,
    Ce,
    se,
    Z,
    Me,
    xe;
  return (
    (se = new Zo({ props: { className: "w-10 h-10 mr-4 ml-auto block  " } })),
    se.$on("click", jo),
    {
      c() {
        (t = Le("div")),
          (r = Le("div")),
          (c = dr()),
          (d = Le("div")),
          (p = Le("a")),
          (p.innerHTML = T),
          (H = dr()),
          (I = Le("a")),
          (I.innerHTML = V),
          (U = dr()),
          (O = Le("a")),
          (O.innerHTML = oe),
          (G = dr()),
          (Ee = Le("a")),
          (Ee.innerHTML = pe),
          (ge = dr()),
          (Ce = Le("div")),
          Wr(se.$$.fragment),
          this.h();
      },
      l(ue) {
        t = Ne(ue, "DIV", { class: !0, style: !0 });
        var Ke = J(t);
        (r = Ne(Ke, "DIV", { class: !0, style: !0 })),
          J(r).forEach(z),
          (c = hr(Ke)),
          (d = Ne(Ke, "DIV", { class: !0 }));
        var he = J(d);
        (p = Ne(he, "A", {
          href: !0,
          target: !0,
          rel: !0,
          class: !0,
          style: !0,
          "data-svelte-h": !0,
        })),
          ei(p) !== "svelte-17p3vml" && (p.innerHTML = T),
          (H = hr(he)),
          (I = Ne(he, "A", {
            href: !0,
            target: !0,
            rel: !0,
            class: !0,
            "data-svelte-h": !0,
          })),
          ei(I) !== "svelte-198j9og" && (I.innerHTML = V),
          (U = hr(he)),
          (O = Ne(he, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
          ei(O) !== "svelte-yn89q9" && (O.innerHTML = oe),
          (G = hr(he)),
          (Ee = Ne(he, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
          ei(Ee) !== "svelte-183n34u" && (Ee.innerHTML = pe),
          (ge = hr(he)),
          (Ce = Ne(he, "DIV", { class: !0 }));
        var Se = J(Ce);
        sn(se.$$.fragment, Se),
          Se.forEach(z),
          he.forEach(z),
          Ke.forEach(z),
          this.h();
      },
      h() {
        f(r, "class", "absolute inset-0"),
          ot(r, "background-color", "var(--border-color)"),
          f(p, "href", Go),
          f(p, "target", "_blank"),
          f(p, "rel", "noopener noreferrer"),
          f(
            p,
            "class",
            "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0"
          ),
          ot(p, "border-color", "var(--line-color)"),
          f(I, "href", qo),
          f(I, "target", "_blank"),
          f(I, "rel", "noopener noreferrer"),
          f(
            I,
            "class",
            "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0"
          ),
          f(O, "href", Wo),
          f(
            O,
            "class",
            "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0"
          ),
          f(Ee, "href", Uo),
          f(
            Ee,
            "class",
            "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden px-4 before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0"
          ),
          f(Ce, "class", "border-border flex-grow pb-4 pt-9"),
          f(
            d,
            "class",
            "border-border relative z-[1] mb-4 flex flex-grow flex-col overflow-y-scroll border-x border-b"
          ),
          f(t, "class", "fixed bottom-0 z-[10000] flex flex-col px-4"),
          ot(t, "top", qi + "px"),
          ot(t, "width", w[0]),
          ot(t, "left", w[1]);
      },
      m(ue, Ke) {
        Je(ue, t, Ke),
          W(t, r),
          W(t, c),
          W(t, d),
          W(d, p),
          W(d, H),
          W(d, I),
          W(d, U),
          W(d, O),
          W(d, G),
          W(d, Ee),
          W(d, ge),
          W(d, Ce),
          qr(se, Ce, null),
          (xe = !0);
      },
      p(ue, Ke) {
        (!xe || Ke & 1) && ot(t, "width", ue[0]),
          (!xe || Ke & 2) && ot(t, "left", ue[1]);
      },
      i(ue) {
        xe ||
          (ue &&
            Xi(() => {
              xe &&
                (h && h.end(1), (s = wo(r, Ai, { duration: 400 })), s.start());
            }),
          ft(se.$$.fragment, ue),
          ue &&
            Xi(() => {
              xe &&
                (Me && Me.end(1),
                (Z = wo(d, No, { y: "-100%", duration: 500, opacity: 1 })),
                Z.start());
            }),
          (xe = !0));
      },
      o(ue) {
        s && s.invalidate(),
          ue && (h = yo(r, Ai, { duration: 400 })),
          xt(se.$$.fragment, ue),
          Z && Z.invalidate(),
          ue && (Me = yo(d, No, { y: "-100%", duration: 500, opacity: 1 })),
          (xe = !1);
      },
      d(ue) {
        ue && z(t), ue && h && h.end(), Gr(se), ue && Me && Me.end();
      },
    }
  );
}
function gl(w) {
  let t, r, s, h, c, d, p, T, H, I, V, U, O, oe, G;
  (c = new hl({ props: { className: "h-9 w-9 md:h-10 md:w-10" } })),
    (H = new js({
      props: { className: "w-full h-4 md:h-auto object-contain" },
    }));
  const Ee = [pl, dl],
    pe = [];
  function ge(se, Z) {
    return se[2].md ? 0 : 1;
  }
  (V = ge(w)), (U = pe[V] = Ee[V](w));
  let Ce = w[3] && !Gi.md && Oo(w);
  return {
    c() {
      (t = Le("header")),
        (r = Le("div")),
        (s = Le("div")),
        (h = Le("a")),
        Wr(c.$$.fragment),
        (d = dr()),
        (p = Le("div")),
        (T = Le("a")),
        Wr(H.$$.fragment),
        (I = dr()),
        U.c(),
        (O = dr()),
        Ce && Ce.c(),
        (oe = Sr()),
        this.h();
    },
    l(se) {
      t = Ne(se, "HEADER", { class: !0, style: !0 });
      var Z = J(t);
      r = Ne(Z, "DIV", { class: !0 });
      var Me = J(r);
      s = Ne(Me, "DIV", { class: !0 });
      var xe = J(s);
      h = Ne(xe, "A", { href: !0 });
      var ue = J(h);
      sn(c.$$.fragment, ue),
        ue.forEach(z),
        xe.forEach(z),
        (d = hr(Me)),
        (p = Ne(Me, "DIV", { class: !0 }));
      var Ke = J(p);
      T = Ne(Ke, "A", { href: !0, class: !0 });
      var he = J(T);
      sn(H.$$.fragment, he),
        he.forEach(z),
        Ke.forEach(z),
        (I = hr(Me)),
        U.l(Me),
        Me.forEach(z),
        Z.forEach(z),
        (O = hr(se)),
        Ce && Ce.l(se),
        (oe = Sr()),
        this.h();
    },
    h() {
      f(h, "href", "/"),
        f(
          s,
          "class",
          "border-border relative flex h-full w-[76px] items-center justify-center border-r md:w-[90px]"
        ),
        f(T, "href", "/index.html"),
        f(T, "class", "block"),
        f(p, "class", "flex h-full items-center px-4"),
        f(
          r,
          "class",
          "border-border grid h-full grid-cols-[76px_minmax(0,auto)_65px] border md:grid-cols-[90px_1fr_auto_90px]"
        ),
        f(t, "class", "fixed top-0 z-[10001] px-4 pt-4"),
        ot(t, "background-color", "var(--border-color)"),
        ot(t, "height", (w[2].md ? Eo : qi) + "px"),
        ot(t, "width", w[0]),
        ot(t, "left", w[1]);
    },
    m(se, Z) {
      Je(se, t, Z),
        W(t, r),
        W(r, s),
        W(s, h),
        qr(c, h, null),
        W(r, d),
        W(r, p),
        W(p, T),
        qr(H, T, null),
        W(r, I),
        pe[V].m(r, null),
        Je(se, O, Z),
        Ce && Ce.m(se, Z),
        Je(se, oe, Z),
        (G = !0);
    },
    p(se, [Z]) {
      let Me = V;
      (V = ge(se)),
        V !== Me &&
          (ni(),
          xt(pe[Me], 1, 1, () => {
            pe[Me] = null;
          }),
          ii(),
          (U = pe[V]),
          U || ((U = pe[V] = Ee[V](se)), U.c()),
          ft(U, 1),
          U.m(r, null)),
        (!G || Z & 4) && ot(t, "height", (se[2].md ? Eo : qi) + "px"),
        (!G || Z & 1) && ot(t, "width", se[0]),
        (!G || Z & 2) && ot(t, "left", se[1]),
        se[3] && !Gi.md
          ? Ce
            ? (Ce.p(se, Z), Z & 8 && ft(Ce, 1))
            : ((Ce = Oo(se)), Ce.c(), ft(Ce, 1), Ce.m(oe.parentNode, oe))
          : Ce &&
            (ni(),
            xt(Ce, 1, 1, () => {
              Ce = null;
            }),
            ii());
    },
    i(se) {
      G ||
        (ft(c.$$.fragment, se), ft(H.$$.fragment, se), ft(U), ft(Ce), (G = !0));
    },
    o(se) {
      xt(c.$$.fragment, se), xt(H.$$.fragment, se), xt(U), xt(Ce), (G = !1);
    },
    d(se) {
      se && (z(t), z(O), z(oe)), Gr(c), Gr(H), pe[V].d(), Ce && Ce.d(se);
    },
  };
}
function _l(w, t, r) {
  let s, h;
  ri(w, Gi, (T) => r(2, (s = T))), ri(w, Ri, (T) => r(3, (h = T)));
  let c = "100%",
    d = "0px";
  const p = () => {
    const T = document.querySelector(".content-div");
    if (T) {
      const H = T.getBoundingClientRect();
      r(0, (c = `${H.width}px`)), r(1, (d = `${H.left}px`));
    }
  };
  return (
    hi(
      () => (
        p(),
        window.addEventListener("resize", p),
        () => {
          window.removeEventListener("resize", p);
        }
      )
    ),
    [c, d, s, h]
  );
}
class ml extends kr {
  constructor(t) {
    super(), Er(this, t, _l, gl, Tr, {});
  }
}
function zo(w) {
  let t, r, s, h;
  return {
    c() {
      (t = Le("div")), (r = Le("div")), this.h();
    },
    l(c) {
      t = Ne(c, "DIV", { class: !0 });
      var d = J(t);
      (r = Ne(d, "DIV", { class: !0, style: !0 })),
        J(r).forEach(z),
        d.forEach(z),
        this.h();
    },
    h() {
      f(
        r,
        "class",
        "bg-primary h-full transition-all duration-300 ease-out svelte-1pycs78"
      ),
        ot(r, "width", w[0] + "%"),
        f(
          t,
          "class",
          "fixed left-0 top-0 z-[999999] h-1 w-full bg-transparent"
        );
    },
    m(c, d) {
      Je(c, t, d), W(t, r), (h = !0);
    },
    p(c, d) {
      (!h || d & 1) && ot(r, "width", c[0] + "%");
    },
    i(c) {
      h ||
        (c &&
          Xi(() => {
            h && (s || (s = xo(t, Ai, {}, !0)), s.run(1));
          }),
        (h = !0));
    },
    o(c) {
      c && (s || (s = xo(t, Ai, {}, !1)), s.run(0)), (h = !1);
    },
    d(c) {
      c && z(t), c && s && s.end();
    },
  };
}
function vl(w) {
  let t,
    r = w[1] && zo(w);
  return {
    c() {
      r && r.c(), (t = Sr());
    },
    l(s) {
      r && r.l(s), (t = Sr());
    },
    m(s, h) {
      r && r.m(s, h), Je(s, t, h);
    },
    p(s, [h]) {
      s[1]
        ? r
          ? (r.p(s, h), h & 2 && ft(r, 1))
          : ((r = zo(s)), r.c(), ft(r, 1), r.m(t.parentNode, t))
        : r &&
          (ni(),
          xt(r, 1, 1, () => {
            r = null;
          }),
          ii());
    },
    i(s) {
      ft(r);
    },
    o(s) {
      xt(r);
    },
    d(s) {
      s && z(t), r && r.d(s);
    },
  };
}
function bl(w, t, r) {
  let s = 0,
    h = !1,
    c;
  return [
    s,
    h,
    async () => {
      r(1, (h = !0)),
        r(0, (s = 0)),
        await gs(),
        r(0, (s = 20)),
        (c = setInterval(() => {
          s < 90 && (r(0, (s += Math.random() * 15)), s > 90 && r(0, (s = 90)));
        }, 400));
    },
    () => {
      c && clearInterval(c),
        r(0, (s = 100)),
        setTimeout(() => {
          r(1, (h = !1)), r(0, (s = 0));
        }, 300);
    },
  ];
}
class yl extends kr {
  constructor(t) {
    super(), Er(this, t, bl, vl, Tr, { start: 2, complete: 3 });
  }
  get start() {
    return this.$$.ctx[2];
  }
  get complete() {
    return this.$$.ctx[3];
  }
}
const { document: ur } = As;
function Vo(w) {
  let t, r;
  return {
    c() {
      (t = Le("meta")), this.h();
    },
    l(s) {
      (t = Ne(s, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      f(t, "name", "theme-color"),
        f(t, "content", (r = w[5] === "dark" ? "#161616" : "#dadada"));
    },
    m(s, h) {
      Je(s, t, h);
    },
    p(s, h) {
      h & 32 &&
        r !== (r = s[5] === "dark" ? "#161616" : "#dadada") &&
        f(t, "content", r);
    },
    d(s) {
      s && z(t);
    },
  };
}
function Io(w) {
  let t,
    r,
    s,
    h =
      '<source src="/loading.webm" type="video/webm"/><source src="/loading.mp4" type="video/mp4"/>';
  return {
    c() {
      (t = Le("div")),
        (r = Le("div")),
        (s = Le("video")),
        (s.innerHTML = h),
        this.h();
    },
    l(c) {
      t = Ne(c, "DIV", { class: !0 });
      var d = J(t);
      r = Ne(d, "DIV", { class: !0 });
      var p = J(r);
      (s = Ne(p, "VIDEO", {
        alt: !0,
        class: !0,
        preload: !0,
        "data-svelte-h": !0,
      })),
        ei(s) !== "svelte-rwmny8" && (s.innerHTML = h),
        p.forEach(z),
        d.forEach(z),
        this.h();
    },
    h() {
      f(s, "alt", "Loading animation"),
        f(s, "class", "relative z-[1] h-20 w-20"),
        (s.autoplay = !0),
        (s.muted = !0),
        (s.loop = !0),
        (s.playsInline = !0),
        f(s, "preload", "auto"),
        f(r, "class", "flex max-w-xs flex-col items-center px-5 sm:max-w-sm"),
        f(
          t,
          "class",
          "loading-state fixed left-0 top-0 z-[1000000] flex min-h-screen w-full flex-col items-center justify-center gap-10 svelte-1ed5k0u"
        ),
        bo(t, "fade-out", w[1]);
    },
    m(c, d) {
      Je(c, t, d), W(t, r), W(r, s), w[10](s);
    },
    p(c, d) {
      d & 2 && bo(t, "fade-out", c[1]);
    },
    d(c) {
      c && z(t), w[10](null);
    },
  };
}
function wl(w) {
  let t,
    r,
    s,
    h,
    c,
    d,
    p,
    T,
    H,
    I,
    V,
    U,
    O,
    oe,
    G,
    Ee,
    pe,
    ge,
    Ce,
    se,
    Z,
    Me,
    xe;
  ur.title = t = w[6].title;
  let ue = w[5] && Vo(w);
  G = new Xs({});
  let Ke = {};
  (pe = new yl({ props: Ke })), w[9](pe);
  let he = !w[0] && Io(w);
  se = new ml({});
  const Se = w[8].default,
    ee = _s(Se, w, w[7], null);
  return {
    c() {
      (r = Le("meta")),
        (s = Le("meta")),
        (h = Le("meta")),
        (c = Le("meta")),
        (d = Le("meta")),
        (p = Le("meta")),
        (T = Le("meta")),
        (H = Le("meta")),
        (I = Le("meta")),
        (V = Le("meta")),
        (U = Le("meta")),
        ue && ue.c(),
        (O = Sr()),
        (oe = dr()),
        Wr(G.$$.fragment),
        (Ee = dr()),
        Wr(pe.$$.fragment),
        (ge = dr()),
        he && he.c(),
        (Ce = dr()),
        Wr(se.$$.fragment),
        (Z = dr()),
        (Me = Le("div")),
        ee && ee.c(),
        this.h();
    },
    l(X) {
      const ce = Fo("svelte-t32v3x", ur.head);
      (r = Ne(ce, "META", { name: !0, content: !0 })),
        (s = Ne(ce, "META", { property: !0, content: !0 })),
        (h = Ne(ce, "META", { property: !0, content: !0 })),
        (c = Ne(ce, "META", { property: !0, content: !0 })),
        (d = Ne(ce, "META", { property: !0, content: !0 })),
        (p = Ne(ce, "META", { property: !0, content: !0 })),
        (T = Ne(ce, "META", { property: !0, content: !0 })),
        (H = Ne(ce, "META", { property: !0, content: !0 })),
        (I = Ne(ce, "META", { property: !0, content: !0 })),
        (V = Ne(ce, "META", { property: !0, content: !0 })),
        (U = Ne(ce, "META", { property: !0, content: !0 })),
        ue && ue.l(ce),
        (O = Sr()),
        ce.forEach(z),
        (oe = hr(X)),
        sn(G.$$.fragment, X),
        (Ee = hr(X)),
        sn(pe.$$.fragment, X),
        (ge = hr(X)),
        he && he.l(X),
        (Ce = hr(X)),
        sn(se.$$.fragment, X),
        (Z = hr(X)),
        (Me = Ne(X, "DIV", { class: !0, style: !0 }));
      var Vt = J(Me);
      ee && ee.l(Vt), Vt.forEach(z), this.h();
    },
    h() {
      f(r, "name", "description"),
        f(r, "content", w[6].description),
        f(s, "property", "og:url"),
        f(s, "content", "https://qfnetwork.xyz"),
        f(h, "property", "og:title"),
        f(h, "content", w[6].title),
        f(c, "property", "og:description"),
        f(c, "content", w[6].description),
        f(d, "property", "og:image:url"),
        f(d, "content", w[6].thumbnail),
        f(p, "property", "twitter:domain"),
        f(p, "content", "qfnetwork.xyz"),
        f(T, "property", "twitter:url"),
        f(T, "content", "https://qfnetwork.xyz"),
        f(H, "property", "twitter:card"),
        f(H, "content", "summary_large_image"),
        f(I, "property", "twitter:image"),
        f(I, "content", w[6].thumbnail),
        f(V, "property", "twitter:title"),
        f(V, "content", w[6].title),
        f(U, "property", "twitter:description"),
        f(U, "content", w[6].description),
        f(Me, "class", "content-div mx-auto max-w-[1440px] overflow-hidden"),
        ot(Me, "--min-section-height", w[4] + "px");
    },
    m(X, ce) {
      W(ur.head, r),
        W(ur.head, s),
        W(ur.head, h),
        W(ur.head, c),
        W(ur.head, d),
        W(ur.head, p),
        W(ur.head, T),
        W(ur.head, H),
        W(ur.head, I),
        W(ur.head, V),
        W(ur.head, U),
        ue && ue.m(ur.head, null),
        W(ur.head, O),
        Je(X, oe, ce),
        qr(G, X, ce),
        Je(X, Ee, ce),
        qr(pe, X, ce),
        Je(X, ge, ce),
        he && he.m(X, ce),
        Je(X, Ce, ce),
        qr(se, X, ce),
        Je(X, Z, ce),
        Je(X, Me, ce),
        ee && ee.m(Me, null),
        (xe = !0);
    },
    p(X, [ce]) {
      (!xe || ce & 64) && t !== (t = X[6].title) && (ur.title = t),
        X[5]
          ? ue
            ? ue.p(X, ce)
            : ((ue = Vo(X)), ue.c(), ue.m(O.parentNode, O))
          : ue && (ue.d(1), (ue = null));
      const Vt = {};
      pe.$set(Vt),
        X[0]
          ? he && (he.d(1), (he = null))
          : he
          ? he.p(X, ce)
          : ((he = Io(X)), he.c(), he.m(Ce.parentNode, Ce)),
        ee &&
          ee.p &&
          (!xe || ce & 128) &&
          ms(ee, Se, X, X[7], xe ? bs(Se, X[7], ce, null) : vs(X[7]), null),
        (!xe || ce & 16) && ot(Me, "--min-section-height", X[4] + "px");
    },
    i(X) {
      xe ||
        (ft(G.$$.fragment, X),
        ft(pe.$$.fragment, X),
        ft(se.$$.fragment, X),
        ft(ee, X),
        (xe = !0));
    },
    o(X) {
      xt(G.$$.fragment, X),
        xt(pe.$$.fragment, X),
        xt(se.$$.fragment, X),
        xt(ee, X),
        (xe = !1);
    },
    d(X) {
      X && (z(oe), z(Ee), z(ge), z(Ce), z(Z), z(Me)),
        z(r),
        z(s),
        z(h),
        z(c),
        z(d),
        z(p),
        z(T),
        z(H),
        z(I),
        z(V),
        z(U),
        ue && ue.d(X),
        z(O),
        Gr(G, X),
        w[9](null),
        Gr(pe, X),
        he && he.d(X),
        Gr(se, X),
        ee && ee.d(X);
    },
  };
}
function xl(w, t, r) {
  let s;
  ri(w, Di, (pe) => r(5, (s = pe)));
  let { $$slots: h = {}, $$scope: c } = t,
    d = !1,
    p = !1,
    T,
    H,
    I = 0,
    V = 0,
    U,
    O;
  const oe = {
    title: "QF AI Network — Start where freedom is engineerd.",
    description:
      "QF is a Layer-1 blockchain for the foundation of digital life—giving builders speed, security, and scale to safeguard freedom for all.",
    thumbnail: "/thumbnail.webp",
  };
  Un.registerPlugin(Po.ScrollTrigger, Gs.MorphSVGPlugin, Ds.ScrollSmoother),
    Po.ScrollTrigger.defaults({
      scroller: ".content-wrapper",
      ignoreMobileResize: !0,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    }),
    hi(() => {
      Ko("dark"),
        H &&
          (H.addEventListener("ended", () => {
            r(3, (H.currentTime = 0), H),
              H.play().catch(() => {
                console.log("Video autoplay failed, will retry");
              });
          }),
          H.addEventListener("canplay", () => {
            H.play().catch(() => {
              console.log("Initial video play failed");
            });
          })),
        setTimeout(() => {
          r(1, (p = !0)),
            setTimeout(() => {
              r(0, (d = !0));
            }, 300);
        }, 300);
      let pe = !1,
        ge;
      const Ce = () => {
          window.location.pathname === "/" &&
            (r(0, (d = !1)), r(1, (p = !1)), window.location.reload());
        },
        se = document.querySelector("body");
      se &&
        ((I = se.offsetWidth),
        (V = se.offsetHeight),
        (O = new ResizeObserver((Me) => {
          const xe = Me[0],
            ue = xe.contentRect.width,
            Ke = xe.contentRect.height;
          if (!pe) {
            pe = !0;
            return;
          }
          const he = Math.abs(ue - I),
            Se = Math.abs(Ke - V);
          (he > 10 || Se > 10) &&
            (clearTimeout(ge),
            (ge = setTimeout(() => {
              Ce();
            }, 100)));
        })),
        O.observe(se));
      const Z = () => {
        r(4, (U = window.innerHeight));
      };
      return (
        Z(),
        window.addEventListener("resize", Z),
        () => {
          se && O && O.disconnect(),
            H &&
              (H.removeEventListener("ended", () => {}),
              H.removeEventListener("canplay", () => {})),
            clearTimeout(ge),
            window.removeEventListener("resize", Z);
        }
      );
    }),
    ys(() => {
      T == null || T.complete(),
        sl(),
        setTimeout(() => {
          const pe = document.querySelector(".content-wrapper");
          pe && pe.scrollTop !== 0 && pe.scrollTo({ top: 0 });
        }, 0);
    }),
    ws(() => {
      T == null || T.start();
    });
  function G(pe) {
    ti[pe ? "unshift" : "push"](() => {
      (T = pe), r(2, T);
    });
  }
  function Ee(pe) {
    ti[pe ? "unshift" : "push"](() => {
      (H = pe), r(3, H);
    });
  }
  return (
    (w.$$set = (pe) => {
      "$$scope" in pe && r(7, (c = pe.$$scope));
    }),
    [d, p, T, H, U, s, oe, c, h, G, Ee]
  );
}
class Pl extends kr {
  constructor(t) {
    super(), Er(this, t, xl, wl, Tr, {});
  }
}
export { Pl as component };
