/*!
 * FullCalendar v3.0.0
 * Docs & License: http://fullcalendar.io/
 * (c) 2016 Adam Shaw
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("moment")) : t(jQuery, moment)
}(function(t, e) {
    function n(t) {
        return q(t, qt)
    }

    function i(t, e) {
        e.left && t.css({
            "border-left-width": 1,
            "margin-left": e.left - 1
        }), e.right && t.css({
            "border-right-width": 1,
            "margin-right": e.right - 1
        })
    }

    function r(t) {
        t.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }

    function s() {
        t("body").addClass("fc-not-allowed")
    }

    function o() {
        t("body").removeClass("fc-not-allowed")
    }

    function l(e, n, i) {
        var r = Math.floor(n / e.length),
            s = Math.floor(n - r * (e.length - 1)),
            o = [],
            l = [],
            u = [],
            c = 0;
        a(e), e.each(function(n, i) {
            var a = n === e.length - 1 ? s : r,
                d = t(i).outerHeight(!0);
            d < a ? (o.push(i), l.push(d), u.push(t(i).height())) : c += d
        }), i && (n -= c, r = Math.floor(n / o.length), s = Math.floor(n - r * (o.length - 1))), t(o).each(function(e, n) {
            var i = e === o.length - 1 ? s : r,
                a = l[e],
                c = u[e],
                d = i - (a - c);
            a < i && t(n).height(d)
        })
    }

    function a(t) {
        t.height("")
    }

    function u(e) {
        var n = 0;
        return e.find("> *").each(function(e, i) {
            var r = t(i).outerWidth();
            r > n && (n = r)
        }), n++, e.width(n), n
    }

    function c(t, e) {
        var n, i = t.add(e);
        return i.css({
            position: "relative",
            left: -1
        }), n = t.outerHeight() - e.outerHeight(), i.css({
            position: "",
            left: ""
        }), n
    }

    function d(e) {
        var n = e.css("position"),
            i = e.parents().filter(function() {
                var e = t(this);
                return /(auto|scroll)/.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
        return "fixed" !== n && i.length ? i : t(e[0].ownerDocument || document)
    }

    function h(t, e) {
        var n = t.offset(),
            i = n.left - (e ? e.left : 0),
            r = n.top - (e ? e.top : 0);
        return {
            left: i,
            right: i + t.outerWidth(),
            top: r,
            bottom: r + t.outerHeight()
        }
    }

    function f(t, e) {
        var n = t.offset(),
            i = p(t),
            r = n.left + y(t, "border-left-width") + i.left - (e ? e.left : 0),
            s = n.top + y(t, "border-top-width") + i.top - (e ? e.top : 0);
        return {
            left: r,
            right: r + t[0].clientWidth,
            top: s,
            bottom: s + t[0].clientHeight
        }
    }

    function g(t, e) {
        var n = t.offset(),
            i = n.left + y(t, "border-left-width") + y(t, "padding-left") - (e ? e.left : 0),
            r = n.top + y(t, "border-top-width") + y(t, "padding-top") - (e ? e.top : 0);
        return {
            left: i,
            right: i + t.width(),
            top: r,
            bottom: r + t.height()
        }
    }

    function p(t) {
        var e = t.innerWidth() - t[0].clientWidth,
            n = {
                left: 0,
                right: 0,
                top: 0,
                bottom: t.innerHeight() - t[0].clientHeight
            };
        return v() && "rtl" == t.css("direction") ? n.left = e : n.right = e, n
    }

    function v() {
        return null === Zt && (Zt = m()), Zt
    }

    function m() {
        var e = t("<div><div/></div>").css({
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }).appendTo("body"),
            n = e.children(),
            i = n.offset().left > e.offset().left;
        return e.remove(), i
    }

    function y(t, e) {
        return parseFloat(t.css(e)) || 0
    }

    function S(t) {
        return 1 == t.which && !t.ctrlKey
    }

    function w(t) {
        if (void 0 !== t.pageX) return t.pageX;
        var e = t.originalEvent.touches;
        return e ? e[0].pageX : void 0
    }

    function E(t) {
        if (void 0 !== t.pageY) return t.pageY;
        var e = t.originalEvent.touches;
        return e ? e[0].pageY : void 0
    }

    function b(t) {
        return /^touch/.test(t.type)
    }

    function D(t) {
        t.addClass("fc-unselectable").on("selectstart", C)
    }

    function C(t) {
        t.preventDefault()
    }

    function H(t) {
        return !!window.addEventListener && (window.addEventListener("scroll", t, !0), !0)
    }

    function T(t) {
        return !!window.removeEventListener && (window.removeEventListener("scroll", t, !0), !0)
    }

    function x(t, e) {
        var n = {
            left: Math.max(t.left, e.left),
            right: Math.min(t.right, e.right),
            top: Math.max(t.top, e.top),
            bottom: Math.min(t.bottom, e.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }

    function R(t, e) {
        return {
            left: Math.min(Math.max(t.left, e.left), e.right),
            top: Math.min(Math.max(t.top, e.top), e.bottom)
        }
    }

    function I(t) {
        return {
            left: (t.left + t.right) / 2,
            top: (t.top + t.bottom) / 2
        }
    }

    function k(t, e) {
        return {
            left: t.left - e.left,
            top: t.top - e.top
        }
    }

    function L(e) {
        var n, i, r = [],
            s = [];
        for ("string" == typeof e ? s = e.split(/\s*,\s*/) : "function" == typeof e ? s = [e] : t.isArray(e) && (s = e), n = 0; n < s.length; n++) i = s[n], "string" == typeof i ? r.push("-" == i.charAt(0) ? {
            field: i.substring(1),
            order: -1
        } : {
            field: i,
            order: 1
        }) : "function" == typeof i && r.push({
            func: i
        });
        return r
    }

    function M(t, e, n) {
        var i, r;
        for (i = 0; i < n.length; i++)
            if (r = z(t, e, n[i])) return r;
        return 0
    }

    function z(t, e, n) {
        return n.func ? n.func(t, e) : B(t[n.field], e[n.field]) * (n.order || 1)
    }

    function B(e, n) {
        return e || n ? null == n ? -1 : null == e ? 1 : "string" === t.type(e) || "string" === t.type(n) ? String(e).localeCompare(String(n)) : e - n : 0
    }

    function F(t, e) {
        var n, i, r, s, o = t.start,
            l = t.end,
            a = e.start,
            u = e.end;
        if (l > a && o < u) return o >= a ? (n = o.clone(), r = !0) : (n = a.clone(), r = !1), l <= u ? (i = l.clone(), s = !0) : (i = u.clone(), s = !1), {
            start: n,
            end: i,
            isStart: r,
            isEnd: s
        }
    }

    function N(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days"),
            ms: t.time() - n.time()
        })
    }

    function G(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days")
        })
    }

    function O(t, n, i) {
        return e.duration(Math.round(t.diff(n, i, !0)), i)
    }

    function A(t, e) {
        var n, i, r;
        for (n = 0; n < Xt.length && (i = Xt[n], r = V(i, t, e), !(r >= 1 && ot(r))); n++);
        return i
    }

    function V(t, n, i) {
        return null != i ? i.diff(n, t, !0) : e.isDuration(n) ? n.as(t) : n.end.diff(n.start, t, !0)
    }

    function P(t, e, n) {
        var i;
        return W(n) ? (e - t) / n : (i = n.asMonths(), Math.abs(i) >= 1 && ot(i) ? e.diff(t, "months", !0) / i : e.diff(t, "days", !0) / n.asDays())
    }

    function _(t, e) {
        var n, i;
        return W(t) || W(e) ? t / e : (n = t.asMonths(), i = e.asMonths(), Math.abs(n) >= 1 && ot(n) && Math.abs(i) >= 1 && ot(i) ? n / i : t.asDays() / e.asDays())
    }

    function Y(t, n) {
        var i;
        return W(t) ? e.duration(t * n) : (i = t.asMonths(), Math.abs(i) >= 1 && ot(i) ? e.duration({
            months: i * n
        }) : e.duration({
            days: t.asDays() * n
        }))
    }

    function W(t) {
        return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds())
    }

    function j(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function U(t) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
    }

    function q(t, e) {
        var n, i, r, s, o, l, a = {};
        if (e)
            for (n = 0; n < e.length; n++) {
                for (i = e[n], r = [], s = t.length - 1; s >= 0; s--)
                    if (o = t[s][i], "object" == typeof o) r.unshift(o);
                    else if (void 0 !== o) {
                    a[i] = o;
                    break
                }
                r.length && (a[i] = q(r))
            }
        for (n = t.length - 1; n >= 0; n--) {
            l = t[n];
            for (i in l) i in a || (a[i] = l[i])
        }
        return a
    }

    function Z(t) {
        var e = function() {};
        return e.prototype = t, new e
    }

    function $(t, e) {
        for (var n in t) X(t, n) && (e[n] = t[n])
    }

    function X(t, e) {
        return Kt.call(t, e)
    }

    function K(e) {
        return /undefined|null|boolean|number|string/.test(t.type(e))
    }

    function Q(e, n, i) {
        if (t.isFunction(e) && (e = [e]), e) {
            var r, s;
            for (r = 0; r < e.length; r++) s = e[r].apply(n, i) || s;
            return s
        }
    }

    function J() {
        for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t]
    }

    function tt(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function et(t) {
        return t.replace(/&.*?;/g, "")
    }

    function nt(e) {
        var n = [];
        return t.each(e, function(t, e) {
            null != e && n.push(t + ":" + e)
        }), n.join(";")
    }

    function it(e) {
        var n = [];
        return t.each(e, function(t, e) {
            null != e && n.push(t + '="' + tt(e) + '"')
        }), n.join(" ")
    }

    function rt(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function st(t, e) {
        return t - e
    }

    function ot(t) {
        return t % 1 === 0
    }

    function lt(t, e) {
        var n = t[e];
        return function() {
            return n.apply(t, arguments)
        }
    }

    function at(t, e, n) {
        var i, r, s, o, l, a = function() {
            var u = +new Date - o;
            u < e ? i = setTimeout(a, e - u) : (i = null, n || (l = t.apply(s, r), s = r = null))
        };
        return function() {
            s = this, r = arguments, o = +new Date;
            var u = n && !i;
            return i || (i = setTimeout(a, e)), u && (l = t.apply(s, r), s = r = null), l
        }
    }

    function ut(e, n) {
        return e && e.then && "resolved" !== e.state() ? n ? e.then(n) : void 0 : t.when(n())
    }

    function ct(n, i, r) {
        var s, o, l, a, u = n[0],
            c = 1 == n.length && "string" == typeof u;
        return e.isMoment(u) || j(u) || void 0 === u ? a = e.apply(null, n) : (s = !1, o = !1, c ? Qt.test(u) ? (u += "-01", n = [u], s = !0, o = !0) : (l = Jt.exec(u)) && (s = !l[5], o = !0) : t.isArray(u) && (o = !0), a = i || s ? e.utc.apply(e, n) : e.apply(null, n), s ? (a._ambigTime = !0, a._ambigZone = !0) : r && (o ? a._ambigZone = !0 : c && a.utcOffset(u))), a._fullCalendar = !0, a
    }

    function dt(t, e) {
        return ee.format.call(t, e)
    }

    function ht(t, e) {
        return ft(t, yt(e))
    }

    function ft(t, e) {
        var n, i = "";
        for (n = 0; n < e.length; n++) i += gt(t, e[n]);
        return i
    }

    function gt(t, e) {
        var n, i;
        return "string" == typeof e ? e : (n = e.token) ? ie[n] ? ie[n](t) : dt(t, n) : e.maybe && (i = ft(t, e.maybe), i.match(/[1-9]/)) ? i : ""
    }

    function pt(t, e, n, i, r) {
        var s;
        return t = jt.moment.parseZone(t), e = jt.moment.parseZone(e), s = t.localeData(), n = s.longDateFormat(n) || n, i = i || " - ", vt(t, e, yt(n), i, r)
    }

    function vt(t, e, n, i, r) {
        var s, o, l, a, u = t.clone().stripZone(),
            c = e.clone().stripZone(),
            d = "",
            h = "",
            f = "",
            g = "",
            p = "";
        for (o = 0; o < n.length && (s = mt(t, e, u, c, n[o]), s !== !1); o++) d += s;
        for (l = n.length - 1; l > o && (s = mt(t, e, u, c, n[l]), s !== !1); l--) h = s + h;
        for (a = o; a <= l; a++) f += gt(t, n[a]), g += gt(e, n[a]);
        return (f || g) && (p = r ? g + i + f : f + i + g), d + p + h
    }

    function mt(t, e, n, i, r) {
        var s, o;
        return "string" == typeof r ? r : !!((s = r.token) && (o = re[s.charAt(0)], o && n.isSame(i, o))) && dt(t, s)
    }

    function yt(t) {
        return t in se ? se[t] : se[t] = St(t)
    }

    function St(t) {
        for (var e, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = i.exec(t);) e[1] ? n.push(e[1]) : e[2] ? n.push({
            maybe: St(e[2])
        }) : e[3] ? n.push({
            token: e[3]
        }) : e[5] && n.push(e[5]);
        return n
    }

    function wt() {}

    function Et(t, e) {
        var n;
        return X(e, "constructor") && (n = e.constructor), "function" != typeof n && (n = e.constructor = function() {
            t.apply(this, arguments)
        }), n.prototype = Z(t.prototype), $(e, n.prototype), $(t, n), n
    }

    function bt(t, e) {
        $(e, t.prototype)
    }

    function Dt(t, e) {
        return !t && !e || !(!t || !e) && (t.component === e.component && Ct(t, e) && Ct(e, t))
    }

    function Ct(t, e) {
        for (var n in t)
            if (!/^(component|left|right|top|bottom)$/.test(n) && t[n] !== e[n]) return !1;
        return !0
    }

    function Ht(t) {
        return {
            start: t.start.clone(),
            end: t.end ? t.end.clone() : null,
            allDay: t.allDay
        }
    }

    function Tt(t) {
        var e = Rt(t);
        return "background" === e || "inverse-background" === e
    }

    function xt(t) {
        return "inverse-background" === Rt(t)
    }

    function Rt(t) {
        return J((t.source || {}).rendering, t.rendering)
    }

    function It(t) {
        var e, n, i = {};
        for (e = 0; e < t.length; e++) n = t[e], (i[n._id] || (i[n._id] = [])).push(n);
        return i
    }

    function kt(t, e) {
        return t.start - e.start
    }

    function Lt(n) {
        var i, r, s, o, l = jt.dataAttrPrefix;
        return l && (l += "-"), i = n.data(l + "event") || null, i && (i = "object" == typeof i ? t.extend({}, i) : {}, r = i.start, null == r && (r = i.time), s = i.duration, o = i.stick, delete i.start, delete i.time, delete i.duration, delete i.stick), null == r && (r = n.data(l + "start")), null == r && (r = n.data(l + "time")), null == s && (s = n.data(l + "duration")), null == o && (o = n.data(l + "stick")), r = null != r ? e.duration(r) : null, s = null != s ? e.duration(s) : null, o = Boolean(o), {
            eventProps: i,
            startTime: r,
            duration: s,
            stick: o
        }
    }

    function Mt(t, e) {
        var n, i;
        for (n = 0; n < e.length; n++)
            if (i = e[n], i.leftCol <= t.rightCol && i.rightCol >= t.leftCol) return !0;
        return !1
    }

    function zt(t, e) {
        return t.leftCol - e.leftCol
    }

    function Bt(t) {
        var e, n, i, r = [];
        for (e = 0; e < t.length; e++) {
            for (n = t[e], i = 0; i < r.length && Gt(n, r[i]).length; i++);
            n.level = i, (r[i] || (r[i] = [])).push(n)
        }
        return r
    }

    function Ft(t) {
        var e, n, i, r, s;
        for (e = 0; e < t.length; e++)
            for (n = t[e], i = 0; i < n.length; i++)
                for (r = n[i], r.forwardSegs = [], s = e + 1; s < t.length; s++) Gt(r, t[s], r.forwardSegs)
    }

    function Nt(t) {
        var e, n, i = t.forwardSegs,
            r = 0;
        if (void 0 === t.forwardPressure) {
            for (e = 0; e < i.length; e++) n = i[e], Nt(n), r = Math.max(r, 1 + n.forwardPressure);
            t.forwardPressure = r
        }
    }

    function Gt(t, e, n) {
        n = n || [];
        for (var i = 0; i < e.length; i++) Ot(t, e[i]) && n.push(e[i]);
        return n
    }

    function Ot(t, e) {
        return t.bottom > e.top && t.top < e.bottom
    }

    function At(n, i) {
        function r(t) {
            t._locale = U
        }

        function s() {
            $ ? u() && (g(), c()) : o()
        }

        function o() {
            n.addClass("fc"), n.on("click.fc", "a[data-goto]", function(e) {
                var n = t(this),
                    i = n.data("goto"),
                    r = j.moment(i.date),
                    s = i.type,
                    o = K.opt("navLink" + rt(s) + "Click");
                "function" == typeof o ? o(r, e) : ("string" == typeof o && (s = o), N(r, s))
            }), j.bindOption("theme", function(t) {
                X = t ? "ui" : "fc", n.toggleClass("ui-widget", t), n.toggleClass("fc-unthemed", !t)
            }), j.bindOptions(["isRTL", "locale"], function(t) {
                n.toggleClass("fc-ltr", !t), n.toggleClass("fc-rtl", t)
            }), $ = t("<div class='fc-view-container'/>").prependTo(n), q = j.header = new _t(j), l(), c(j.options.defaultView), j.options.handleWindowResize && (J = at(m, j.options.windowResizeDelay), t(window).resize(J))
        }

        function l() {
            q.render(), q.el && n.prepend(q.el)
        }

        function a() {
            K && K.removeElement(), q.removeElement(), $.remove(), n.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), n.off(".fc"), J && t(window).unbind("resize", J)
        }

        function u() {
            return n.is(":visible")
        }

        function c(e, n) {
            lt++, K && e && K.type !== e && (O(), d()), !K && e && (K = j.view = ot[e] || (ot[e] = j.instantiateView(e)), K.setElement(t("<div class='fc-view fc-" + e + "-view' />").appendTo($)), q.activateButton(e)), K && (tt = K.massageCurrentDate(tt), K.displaying && tt >= K.intervalStart && tt < K.intervalEnd || u() && (K.display(tt, n), A(), H(), T(), E())), A(), lt--
        }

        function d() {
            q.deactivateButton(K.type), K.removeElement(), K = j.view = null
        }

        function h() {
            lt++, O();
            var t = K.type,
                e = K.queryScroll();
            d(), c(t, e), A(), lt--
        }

        function f(t) {
            if (u()) return t && p(), lt++, K.updateSize(!0), lt--, !0
        }

        function g() {
            u() && p()
        }

        function p() {
            var t = j.options.contentHeight,
                e = j.options.height;
            Q = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - v() : "function" == typeof e ? e() - v() : "parent" === e ? n.parent().height() - v() : Math.round($.width() / Math.max(j.options.aspectRatio, .5))
        }

        function v() {
            return q.el ? q.el.outerHeight(!0) : 0
        }

        function m(t) {
            !lt && t.target === window && K.start && f(!0) && K.trigger("windowResize", st)
        }

        function y() {
            b()
        }

        function S(t) {
            it(j.getEventSourcesByMatchArray(t))
        }

        function w() {
            u() && (O(), K.displayEvents(ut), A())
        }

        function E() {
            !j.options.lazyFetching || et(K.start, K.end) ? b() : w()
        }

        function b() {
            nt(K.start, K.end)
        }

        function D(t) {
            ut = t, w()
        }

        function C() {
            w()
        }

        function H() {
            q.updateTitle(K.title)
        }

        function T() {
            var t = j.getNow();
            t >= K.intervalStart && t < K.intervalEnd ? q.disableButton("today") : q.enableButton("today")
        }

        function x(t, e) {
            K.select(j.buildSelectSpan.apply(j, arguments))
        }

        function R() {
            K && K.unselect()
        }

        function I() {
            tt = K.computePrevDate(tt), c()
        }

        function k() {
            tt = K.computeNextDate(tt), c()
        }

        function L() {
            tt.add(-1, "years"), c()
        }

        function M() {
            tt.add(1, "years"), c()
        }

        function z() {
            tt = j.getNow(), c()
        }

        function B(t) {
            tt = j.moment(t).stripZone(), c()
        }

        function F(t) {
            tt.add(e.duration(t)), c()
        }

        function N(t, e) {
            var n;
            e = e || "day", n = j.getViewSpec(e) || j.getUnitViewSpec(e), tt = t.clone(), c(n ? n.type : null)
        }

        function G() {
            return j.applyTimezone(tt)
        }

        function O() {
            $.css({
                width: "100%",
                height: $.height(),
                overflow: "hidden"
            })
        }

        function A() {
            $.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function V() {
            return j
        }

        function P() {
            return K
        }

        function _(t, e) {
            var n;
            if ("string" == typeof t) {
                if (void 0 === e) return j.options[t];
                n = {}, n[t] = e, Y(n)
            } else "object" == typeof t && Y(t)
        }

        function Y(t) {
            var e, n = 0;
            for (e in t) j.dynamicOverrides[e] = t[e];
            j.viewSpecCache = {}, j.populateOptionsHash();
            for (e in t) j.triggerOptionHandlers(e), n++;
            if (1 === n) {
                if ("height" === e || "contentHeight" === e || "aspectRatio" === e) return void f(!0);
                if ("defaultDate" === e) return;
                if ("businessHours" === e) return void(K && (K.unrenderBusinessHours(), K.renderBusinessHours()));
                if ("timezone" === e) return j.rezoneArrayEventSources(), void y()
            }
            l(), ot = {}, h()
        }

        function W(t, e) {
            var n = Array.prototype.slice.call(arguments, 2);
            if (e = e || st, this.triggerWith(t, e, n), j.options[t]) return j.options[t].apply(e, n)
        }
        var j = this;
        j.render = s, j.destroy = a, j.refetchEvents = y, j.refetchEventSources = S, j.reportEvents = D, j.reportEventChange = C, j.rerenderEvents = w, j.changeView = c, j.select = x, j.unselect = R, j.prev = I, j.next = k, j.prevYear = L, j.nextYear = M, j.today = z, j.gotoDate = B, j.incrementDate = F, j.zoomTo = N, j.getDate = G, j.getCalendar = V, j.getView = P, j.option = _, j.trigger = W, j.dynamicOverrides = {}, j.viewSpecCache = {}, j.optionHandlers = {}, j.overrides = t.extend({}, i), j.populateOptionsHash();
        var U;
        j.bindOptions(["locale", "monthNames", "monthNamesShort", "dayNames", "dayNamesShort", "firstDay", "weekNumberCalculation"], function(t, e, n, i, s, o, l) {
            if ("iso" === l && (l = "ISO"), U = Z(Pt(t)), e && (U._months = e), n && (U._monthsShort = n), i && (U._weekdays = i), s && (U._weekdaysShort = s), null == o && "ISO" === l && (o = 1), null != o) {
                var a = Z(U._week);
                a.dow = o, U._week = a
            }
            "ISO" !== l && "local" !== l && "function" != typeof l || (U._fullCalendar_weekCalc = l), tt && r(tt)
        }), j.defaultAllDayEventDuration = e.duration(j.options.defaultAllDayEventDuration), j.defaultTimedEventDuration = e.duration(j.options.defaultTimedEventDuration), j.moment = function() {
            var t;
            return "local" === j.options.timezone ? (t = jt.moment.apply(null, arguments), t.hasTime() && t.local()) : t = "UTC" === j.options.timezone ? jt.moment.utc.apply(null, arguments) : jt.moment.parseZone.apply(null, arguments), r(t), t
        }, j.localizeMoment = r, j.getIsAmbigTimezone = function() {
            return "local" !== j.options.timezone && "UTC" !== j.options.timezone
        }, j.applyTimezone = function(t) {
            if (!t.hasTime()) return t.clone();
            var e, n = j.moment(t.toArray()),
                i = t.time() - n.time();
            return i && (e = n.clone().add(i), t.time() - e.time() === 0 && (n = e)), n
        }, j.getNow = function() {
            var t = j.options.now;
            return "function" == typeof t && (t = t()), j.moment(t).stripZone()
        }, j.getEventEnd = function(t) {
            return t.end ? t.end.clone() : j.getDefaultEventEnd(t.allDay, t.start)
        }, j.getDefaultEventEnd = function(t, e) {
            var n = e.clone();
            return t ? n.stripTime().add(j.defaultAllDayEventDuration) : n.add(j.defaultTimedEventDuration), j.getIsAmbigTimezone() && n.stripZone(), n
        }, j.humanizeDuration = function(t) {
            return t.locale(j.options.locale).humanize()
        }, Yt.call(j);
        var q, $, X, K, Q, J, tt, et = j.isFetchNeeded,
            nt = j.fetchEvents,
            it = j.fetchEventSources,
            st = n[0],
            ot = {},
            lt = 0,
            ut = [];
        tt = null != j.options.defaultDate ? j.moment(j.options.defaultDate).stripZone() : j.getNow(), j.getSuggestedViewHeight = function() {
            return void 0 === Q && g(), Q
        }, j.isHeightAuto = function() {
            return "auto" === j.options.contentHeight || "auto" === j.options.height
        }, j.freezeContentHeight = O, j.unfreezeContentHeight = A, j.initialize()
    }

    function Vt(e) {
        t.each(Ce, function(t, n) {
            null == e[t] && (e[t] = n(e))
        })
    }

    function Pt(t) {
        return e.localeData(t) || e.localeData("en")
    }

    function _t(e) {
        function n() {
            var n = e.options,
                s = n.header;
            f = n.theme ? "ui" : "fc", s ? (h ? h.empty() : h = this.el = t("<div class='fc-toolbar'/>"), h.append(r("left")).append(r("right")).append(r("center")).append('<div class="fc-clear"/>')) : i()
        }

        function i() {
            h && (h.remove(), h = d.el = null)
        }

        function r(n) {
            var i = t('<div class="fc-' + n + '"/>'),
                r = e.options,
                s = r.header[n];
            return s && t.each(s.split(" "), function(n) {
                var s, o = t(),
                    l = !0;
                t.each(this.split(","), function(n, i) {
                    var s, a, u, c, d, h, p, v, m, y;
                    "title" == i ? (o = o.add(t("<h2>&nbsp;</h2>")), l = !1) : ((s = (r.customButtons || {})[i]) ? (u = function(t) {
                        s.click && s.click.call(y[0], t)
                    }, c = "", d = s.text) : (a = e.getViewSpec(i)) ? (u = function() {
                        e.changeView(i)
                    }, g.push(i), c = a.buttonTextOverride, d = a.buttonTextDefault) : e[i] && (u = function() {
                        e[i]()
                    }, c = (e.overrides.buttonText || {})[i], d = r.buttonText[i]), u && (h = s ? s.themeIcon : r.themeButtonIcons[i], p = s ? s.icon : r.buttonIcons[i], v = c ? tt(c) : h && r.theme ? "<span class='ui-icon ui-icon-" + h + "'></span>" : p && !r.theme ? "<span class='fc-icon fc-icon-" + p + "'></span>" : tt(d), m = ["fc-" + i + "-button", f + "-button", f + "-state-default"], y = t('<button type="button" class="' + m.join(" ") + '">' + v + "</button>").click(function(t) {
                        y.hasClass(f + "-state-disabled") || (u(t), (y.hasClass(f + "-state-active") || y.hasClass(f + "-state-disabled")) && y.removeClass(f + "-state-hover"))
                    }).mousedown(function() {
                        y.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-down")
                    }).mouseup(function() {
                        y.removeClass(f + "-state-down")
                    }).hover(function() {
                        y.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-hover")
                    }, function() {
                        y.removeClass(f + "-state-hover").removeClass(f + "-state-down")
                    }), o = o.add(y)))
                }), l && o.first().addClass(f + "-corner-left").end().last().addClass(f + "-corner-right").end(), o.length > 1 ? (s = t("<div/>"), l && s.addClass("fc-button-group"), s.append(o), i.append(s)) : i.append(o)
            }), i
        }

        function s(t) {
            h && h.find("h2").text(t)
        }

        function o(t) {
            h && h.find(".fc-" + t + "-button").addClass(f + "-state-active")
        }

        function l(t) {
            h && h.find(".fc-" + t + "-button").removeClass(f + "-state-active")
        }

        function a(t) {
            h && h.find(".fc-" + t + "-button").prop("disabled", !0).addClass(f + "-state-disabled")
        }

        function u(t) {
            h && h.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(f + "-state-disabled")
        }

        function c() {
            return g
        }
        var d = this;
        d.render = n, d.removeElement = i, d.updateTitle = s, d.activateButton = o, d.deactivateButton = l, d.disableButton = a, d.enableButton = u, d.getViewsWithButtons = c, d.el = null;
        var h, f, g = []
    }

    function Yt() {
        function n(t, e) {
            return !A || t < A || e > V
        }

        function i(t, e) {
            A = t, V = e, r(Y, "reset")
        }

        function r(t, e) {
            var n, i;
            for ("reset" === e ? j = [] : "add" !== e && (j = w(j, t)), n = 0; n < t.length; n++) i = t[n], "pending" !== i._status && W++, i._fetchId = (i._fetchId || 0) + 1, i._status = "pending";
            for (n = 0; n < t.length; n++) i = t[n], s(i, i._fetchId)
        }

        function s(e, n) {
            a(e, function(i) {
                var r, s, o, a = t.isArray(e.events);
                if (n === e._fetchId && "rejected" !== e._status) {
                    if (e._status = "resolved", i)
                        for (r = 0; r < i.length; r++) s = i[r], o = a ? s : R(s, e), o && j.push.apply(j, M(o));
                    l()
                }
            })
        }

        function o(t) {
            var e = "pending" === t._status;
            t._status = "rejected", e && l()
        }

        function l() {
            W--, W || P(j)
        }

        function a(e, n) {
            var i, r, s = jt.sourceFetchers;
            for (i = 0; i < s.length; i++) {
                if (r = s[i].call(F, e, A.clone(), V.clone(), F.options.timezone, n), r === !0) return;
                if ("object" == typeof r) return void a(r, n)
            }
            var o = e.events;
            if (o) t.isFunction(o) ? (F.pushLoading(), o.call(F, A.clone(), V.clone(), F.options.timezone, function(t) {
                n(t), F.popLoading()
            })) : t.isArray(o) ? n(o) : n();
            else {
                var l = e.url;
                if (l) {
                    var u, c = e.success,
                        d = e.error,
                        h = e.complete;
                    u = t.isFunction(e.data) ? e.data() : e.data;
                    var f = t.extend({}, u || {}),
                        g = J(e.startParam, F.options.startParam),
                        p = J(e.endParam, F.options.endParam),
                        v = J(e.timezoneParam, F.options.timezoneParam);
                    g && (f[g] = A.format()), p && (f[p] = V.format()), F.options.timezone && "local" != F.options.timezone && (f[v] = F.options.timezone), F.pushLoading(), t.ajax(t.extend({}, He, e, {
                        data: f,
                        success: function(e) {
                            e = e || [];
                            var i = Q(c, this, arguments);
                            t.isArray(i) && (e = i), n(e)
                        },
                        error: function() {
                            Q(d, this, arguments), n()
                        },
                        complete: function() {
                            Q(h, this, arguments), F.popLoading()
                        }
                    }))
                } else n()
            }
        }

        function u(t) {
            var e = c(t);
            e && (Y.push(e), r([e], "add"))
        }

        function c(e) {
            var n, i, r = jt.sourceNormalizers;
            if (t.isFunction(e) || t.isArray(e) ? n = {
                    events: e
                } : "string" == typeof e ? n = {
                    url: e
                } : "object" == typeof e && (n = t.extend({}, e)), n) {
                for (n.className ? "string" == typeof n.className && (n.className = n.className.split(/\s+/)) : n.className = [], t.isArray(n.events) && (n.origArray = n.events, n.events = t.map(n.events, function(t) {
                        return R(t, n)
                    })), i = 0; i < r.length; i++) r[i].call(F, n);
                return n
            }
        }

        function d(t) {
            f(m(t))
        }

        function h(t) {
            null == t ? f(Y, !0) : f(v(t))
        }

        function f(e, n) {
            var i;
            for (i = 0; i < e.length; i++) o(e[i]);
            n ? (Y = [], j = []) : (Y = t.grep(Y, function(t) {
                for (i = 0; i < e.length; i++)
                    if (t === e[i]) return !1;
                return !0
            }), j = w(j, e)), P(j)
        }

        function g() {
            return Y.slice(1)
        }

        function p(e) {
            return t.grep(Y, function(t) {
                return t.id && t.id === e
            })[0]
        }

        function v(e) {
            e ? t.isArray(e) || (e = [e]) : e = [];
            var n, i = [];
            for (n = 0; n < e.length; n++) i.push.apply(i, m(e[n]));
            return i
        }

        function m(e) {
            var n, i;
            for (n = 0; n < Y.length; n++)
                if (i = Y[n], i === e) return [i];
            return i = p(e), i ? [i] : t.grep(Y, function(t) {
                return y(e, t)
            })
        }

        function y(t, e) {
            return t && e && S(t) == S(e)
        }

        function S(t) {
            return ("object" == typeof t ? t.origArray || t.googleCalendarId || t.url || t.events : null) || t
        }

        function w(e, n) {
            return t.grep(e, function(t) {
                for (var e = 0; e < n.length; e++)
                    if (t.source === n[e]) return !1;
                return !0
            })
        }

        function E(t) {
            t.start = F.moment(t.start), t.end ? t.end = F.moment(t.end) : t.end = null, z(t, b(t)), P(j)
        }

        function b(e) {
            var n = {};
            return t.each(e, function(t, e) {
                D(t) && void 0 !== e && K(e) && (n[t] = e)
            }), n
        }

        function D(t) {
            return !/^_|^(id|allDay|start|end)$/.test(t)
        }

        function C(t, e) {
            var n, i, r, s = R(t);
            if (s) {
                for (n = M(s), i = 0; i < n.length; i++) r = n[i], r.source || (e && (_.events.push(r), r.source = _), j.push(r));
                return P(j), n
            }
            return []
        }

        function H(e) {
            var n, i;
            for (null == e ? e = function() {
                    return !0
                } : t.isFunction(e) || (n = e + "", e = function(t) {
                    return t._id == n
                }), j = t.grep(j, e, !0), i = 0; i < Y.length; i++) t.isArray(Y[i].events) && (Y[i].events = t.grep(Y[i].events, e, !0));
            P(j)
        }

        function T(e) {
            return t.isFunction(e) ? t.grep(j, e) : null != e ? (e += "", t.grep(j, function(t) {
                return t._id == e
            })) : j
        }

        function x(t) {
            t.start = F.moment(t.start), t.end && (t.end = F.moment(t.end)), Wt(t)
        }

        function R(n, i) {
            var r, s, o, l = {};
            if (F.options.eventDataTransform && (n = F.options.eventDataTransform(n)), i && i.eventDataTransform && (n = i.eventDataTransform(n)), t.extend(l, n), i && (l.source = i), l._id = n._id || (void 0 === n.id ? "_fc" + Te++ : n.id + ""), n.className ? "string" == typeof n.className ? l.className = n.className.split(/\s+/) : l.className = n.className : l.className = [], r = n.start || n.date, s = n.end, U(r) && (r = e.duration(r)), U(s) && (s = e.duration(s)), n.dow || e.isDuration(r) || e.isDuration(s)) l.start = r ? e.duration(r) : null, l.end = s ? e.duration(s) : null, l._recurring = !0;
            else {
                if (r && (r = F.moment(r), !r.isValid())) return !1;
                s && (s = F.moment(s), s.isValid() || (s = null)), o = n.allDay, void 0 === o && (o = J(i ? i.allDayDefault : void 0, F.options.allDayDefault)), I(r, s, o, l)
            }
            return F.normalizeEvent(l), l
        }

        function I(t, e, n, i) {
            i.start = t, i.end = e, i.allDay = n, k(i), Wt(i)
        }

        function k(t) {
            L(t), t.end && !t.end.isAfter(t.start) && (t.end = null), t.end || (F.options.forceEventDuration ? t.end = F.getDefaultEventEnd(t.allDay, t.start) : t.end = null)
        }

        function L(t) {
            null == t.allDay && (t.allDay = !(t.start.hasTime() || t.end && t.end.hasTime())), t.allDay ? (t.start.stripTime(), t.end && t.end.stripTime()) : (t.start.hasTime() || (t.start = F.applyTimezone(t.start.time(0))), t.end && !t.end.hasTime() && (t.end = F.applyTimezone(t.end.time(0))))
        }

        function M(e, n, i) {
            var r, s, o, l, a, u, c, d, h, f = [];
            if (n = n || A, i = i || V, e)
                if (e._recurring) {
                    if (s = e.dow)
                        for (r = {}, o = 0; o < s.length; o++) r[s[o]] = !0;
                    for (l = n.clone().stripTime(); l.isBefore(i);) r && !r[l.day()] || (a = e.start, u = e.end, c = l.clone(), d = null, a && (c = c.time(a)), u && (d = l.clone().time(u)), h = t.extend({}, e), I(c, d, !a && !u, h), f.push(h)), l.add(1, "days")
                } else f.push(e);
            return f
        }

        function z(e, n, i) {
            function r(t, e) {
                return i ? O(t, e, i) : n.allDay ? G(t, e) : N(t, e)
            }
            var s, o, l, a, u, c, d = {};
            return n = n || {}, n.start || (n.start = e.start.clone()), void 0 === n.end && (n.end = e.end ? e.end.clone() : null), null == n.allDay && (n.allDay = e.allDay), k(n), s = {
                start: e._start.clone(),
                end: e._end ? e._end.clone() : F.getDefaultEventEnd(e._allDay, e._start),
                allDay: n.allDay
            }, k(s), o = null !== e._end && null === n.end, l = r(n.start, s.start), n.end ? (a = r(n.end, s.end), u = a.subtract(l)) : u = null, t.each(n, function(t, e) {
                D(t) && void 0 !== e && (d[t] = e)
            }), c = B(T(e._id), o, n.allDay, l, u, d), {
                dateDelta: l,
                durationDelta: u,
                undo: c
            }
        }

        function B(e, n, i, r, s, o) {
            var l = F.getIsAmbigTimezone(),
                a = [];
            return r && !r.valueOf() && (r = null), s && !s.valueOf() && (s = null), t.each(e, function(e, u) {
                    var c, d;
                    c = {
                        start: u.start.clone(),
                        end: u.end ? u.end.clone() : null,
                        allDay: u.allDay
                    }, t.each(o, function(t) {
                        c[t] = u[t]
                    }), d = {
                        start: u._start,
                        end: u._end,
                        allDay: i
                    }, k(d), n ? d.end = null : s && !d.end && (d.end = F.getDefaultEventEnd(d.allDay, d.start)), r && (d.start.add(r), d.end && d.end.add(r)), s && d.end.add(s), l && !d.allDay && (r || s) && (d.start.stripZone(), d.end && d.end.stripZone()), t.extend(u, o, d), Wt(u), a.push(function() {
                        t.extend(u, c), Wt(u)
                    })
                }),
                function() {
                    for (var t = 0; t < a.length; t++) a[t]()
                }
        }
        var F = this;
        F.isFetchNeeded = n, F.fetchEvents = i, F.fetchEventSources = r, F.getEventSources = g, F.getEventSourceById = p, F.getEventSourcesByMatchArray = v, F.getEventSourcesByMatch = m, F.addEventSource = u, F.removeEventSource = d, F.removeEventSources = h, F.updateEvent = E, F.renderEvent = C, F.removeEvents = H, F.clientEvents = T, F.mutateEvent = z, F.normalizeEventDates = k, F.normalizeEventTimes = L;
        var A, V, P = F.reportEvents,
            _ = {
                events: []
            },
            Y = [_],
            W = 0,
            j = [];
        t.each((F.options.events ? [F.options.events] : []).concat(F.options.eventSources || []), function(t, e) {
            var n = c(e);
            n && Y.push(n)
        }), F.rezoneArrayEventSources = function() {
            var e, n, i;
            for (e = 0; e < Y.length; e++)
                if (n = Y[e].events, t.isArray(n))
                    for (i = 0; i < n.length; i++) x(n[i])
        }, F.buildEventFromInput = R, F.expandEvent = M, F.getEventCache = function() {
            return j
        }
    }

    function Wt(t) {
        t._allDay = t.allDay, t._start = t.start.clone(), t._end = t.end ? t.end.clone() : null
    }
    var jt = t.fullCalendar = {
            version: "3.0.0",
            internalApiVersion: 6
        },
        Ut = jt.views = {};
    t.fn.fullCalendar = function(e) {
        var n = Array.prototype.slice.call(arguments, 1),
            i = this;
        return this.each(function(r, s) {
            var o, l = t(s),
                a = l.data("fullCalendar");
            "string" == typeof e ? a && t.isFunction(a[e]) && (o = a[e].apply(a, n), r || (i = o), "destroy" === e && l.removeData("fullCalendar")) : a || (a = new we(l, e), l.data("fullCalendar", a), a.render())
        }), i
    };
    var qt = ["header", "buttonText", "buttonIcons", "themeButtonIcons"];
    jt.intersectRanges = F, jt.applyAll = Q, jt.debounce = at, jt.isInt = ot, jt.htmlEscape = tt, jt.cssToStr = nt, jt.proxy = lt, jt.capitaliseFirstLetter = rt, jt.getOuterRect = h, jt.getClientRect = f, jt.getContentRect = g, jt.getScrollbarWidths = p;
    var Zt = null;
    jt.preventDefault = C, jt.intersectRects = x, jt.parseFieldSpecs = L, jt.compareByFieldSpecs = M, jt.compareByFieldSpec = z, jt.flexibleCompare = B, jt.computeIntervalUnit = A, jt.divideRangeByDuration = P, jt.divideDurationByDuration = _, jt.multiplyDuration = Y, jt.durationHasTime = W;
    var $t = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        Xt = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    jt.log = function() {
        var t = window.console;
        if (t && t.log) return t.log.apply(t, arguments)
    }, jt.warn = function() {
        var t = window.console;
        return t && t.warn ? t.warn.apply(t, arguments) : jt.log.apply(jt, arguments)
    };
    var Kt = {}.hasOwnProperty,
        Qt = /^\s*\d{4}-\d\d$/,
        Jt = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        te = e.fn,
        ee = t.extend({}, te),
        ne = e.momentProperties;
    ne.push("_fullCalendar"), ne.push("_ambigTime"), ne.push("_ambigZone"), jt.moment = function() {
        return ct(arguments)
    }, jt.moment.utc = function() {
        var t = ct(arguments, !0);
        return t.hasTime() && t.utc(), t
    }, jt.moment.parseZone = function() {
        return ct(arguments, !0, !0)
    }, te.week = te.weeks = function(t) {
        var e = this._locale._fullCalendar_weekCalc;
        return null == t && "function" == typeof e ? e(this) : "ISO" === e ? ee.isoWeek.apply(this, arguments) : ee.week.apply(this, arguments)
    }, te.time = function(t) {
        if (!this._fullCalendar) return ee.time.apply(this, arguments);
        if (null == t) return e.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
        this._ambigTime = !1, e.isDuration(t) || e.isMoment(t) || (t = e.duration(t));
        var n = 0;
        return e.isDuration(t) && (n = 24 * Math.floor(t.asDays())), this.hours(n + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
    }, te.stripTime = function() {
        return this._ambigTime || (this.utc(!0), this.set({
            hours: 0,
            minutes: 0,
            seconds: 0,
            ms: 0
        }), this._ambigTime = !0, this._ambigZone = !0), this
    }, te.hasTime = function() {
        return !this._ambigTime
    }, te.stripZone = function() {
        var t;
        return this._ambigZone || (t = this._ambigTime, this.utc(!0), this._ambigTime = t || !1, this._ambigZone = !0), this
    }, te.hasZone = function() {
        return !this._ambigZone
    }, te.local = function(t) {
        return ee.local.call(this, this._ambigZone || t), this._ambigTime = !1, this._ambigZone = !1, this
    }, te.utc = function(t) {
        return ee.utc.call(this, t), this._ambigTime = !1, this._ambigZone = !1, this
    }, te.utcOffset = function(t) {
        return null != t && (this._ambigTime = !1, this._ambigZone = !1), ee.utcOffset.apply(this, arguments)
    }, te.format = function() {
        return this._fullCalendar && arguments[0] ? ht(this, arguments[0]) : this._ambigTime ? dt(this, "YYYY-MM-DD") : this._ambigZone ? dt(this, "YYYY-MM-DD[T]HH:mm:ss") : ee.format.apply(this, arguments)
    }, te.toISOString = function() {
        return this._ambigTime ? dt(this, "YYYY-MM-DD") : this._ambigZone ? dt(this, "YYYY-MM-DD[T]HH:mm:ss") : ee.toISOString.apply(this, arguments)
    };
    var ie = {
        t: function(t) {
            return dt(t, "a").charAt(0)
        },
        T: function(t) {
            return dt(t, "A").charAt(0)
        }
    };
    jt.formatRange = pt;
    var re = {
            Y: "year",
            M: "month",
            D: "day",
            d: "day",
            A: "second",
            a: "second",
            T: "second",
            t: "second",
            H: "second",
            h: "second",
            m: "second",
            s: "second"
        },
        se = {};
    jt.Class = wt, wt.extend = function() {
        var t, e, n = arguments.length;
        for (t = 0; t < n; t++) e = arguments[t], t < n - 1 && bt(this, e);
        return Et(this, e || {})
    }, wt.mixin = function(t) {
        bt(this, t)
    };
    var oe = jt.EmitterMixin = {
            on: function(e, n) {
                var i = function(t, e) {
                    return n.apply(e.context || this, e.args || [])
                };
                return n.guid || (n.guid = t.guid++), i.guid = n.guid, t(this).on(e, i), this
            },
            off: function(e, n) {
                return t(this).off(e, n), this
            },
            trigger: function(e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return t(this).triggerHandler(e, {
                    args: n
                }), this
            },
            triggerWith: function(e, n, i) {
                return t(this).triggerHandler(e, {
                    context: n,
                    args: i
                }), this
            }
        },
        le = jt.ListenerMixin = function() {
            var e = 0,
                n = {
                    listenerId: null,
                    listenTo: function(e, n, i) {
                        if ("object" == typeof n)
                            for (var r in n) n.hasOwnProperty(r) && this.listenTo(e, r, n[r]);
                        else "string" == typeof n && e.on(n + "." + this.getListenerNamespace(), t.proxy(i, this))
                    },
                    stopListeningTo: function(t, e) {
                        t.off((e || "") + "." + this.getListenerNamespace())
                    },
                    getListenerNamespace: function() {
                        return null == this.listenerId && (this.listenerId = e++), "_listener" + this.listenerId
                    }
                };
            return n
        }(),
        ae = {
            isIgnoringMouse: !1,
            delayUnignoreMouse: null,
            initMouseIgnoring: function(t) {
                this.delayUnignoreMouse = at(lt(this, "unignoreMouse"), t || 1e3)
            },
            tempIgnoreMouse: function() {
                this.isIgnoringMouse = !0, this.delayUnignoreMouse()
            },
            unignoreMouse: function() {
                this.isIgnoringMouse = !1
            }
        },
        ue = wt.extend(le, {
            isHidden: !0,
            options: null,
            el: null,
            margin: 10,
            constructor: function(t) {
                this.options = t || {}
            },
            show: function() {
                this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
            },
            hide: function() {
                this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
            },
            render: function() {
                var e = this,
                    n = this.options;
                this.el = t('<div class="fc-popover"/>').addClass(n.className || "").css({
                        top: 0,
                        left: 0
                    }).append(n.content).appendTo(n.parentEl),
                    this.el.on("click", ".fc-close", function() {
                        e.hide()
                    }), n.autoHide && this.listenTo(t(document), "mousedown", this.documentMousedown)
            },
            documentMousedown: function(e) {
                this.el && !t(e.target).closest(this.el).length && this.hide()
            },
            removeElement: function() {
                this.hide(), this.el && (this.el.remove(), this.el = null), this.stopListeningTo(t(document), "mousedown")
            },
            position: function() {
                var e, n, i, r, s, o = this.options,
                    l = this.el.offsetParent().offset(),
                    a = this.el.outerWidth(),
                    u = this.el.outerHeight(),
                    c = t(window),
                    h = d(this.el);
                r = o.top || 0, s = void 0 !== o.left ? o.left : void 0 !== o.right ? o.right - a : 0, h.is(window) || h.is(document) ? (h = c, e = 0, n = 0) : (i = h.offset(), e = i.top, n = i.left), e += c.scrollTop(), n += c.scrollLeft(), o.viewportConstrain !== !1 && (r = Math.min(r, e + h.outerHeight() - u - this.margin), r = Math.max(r, e + this.margin), s = Math.min(s, n + h.outerWidth() - a - this.margin), s = Math.max(s, n + this.margin)), this.el.css({
                    top: r - l.top,
                    left: s - l.left
                })
            },
            trigger: function(t) {
                this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }),
        ce = jt.CoordCache = wt.extend({
            els: null,
            forcedOffsetParentEl: null,
            origin: null,
            boundingRect: null,
            isHorizontal: !1,
            isVertical: !1,
            lefts: null,
            rights: null,
            tops: null,
            bottoms: null,
            constructor: function(e) {
                this.els = t(e.els), this.isHorizontal = e.isHorizontal, this.isVertical = e.isVertical, this.forcedOffsetParentEl = e.offsetParent ? t(e.offsetParent) : null
            },
            build: function() {
                var t = this.forcedOffsetParentEl || this.els.eq(0).offsetParent();
                this.origin = t.offset(), this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
            },
            clear: function() {
                this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
            },
            ensureBuilt: function() {
                this.origin || this.build()
            },
            buildElHorizontals: function() {
                var e = [],
                    n = [];
                this.els.each(function(i, r) {
                    var s = t(r),
                        o = s.offset().left,
                        l = s.outerWidth();
                    e.push(o), n.push(o + l)
                }), this.lefts = e, this.rights = n
            },
            buildElVerticals: function() {
                var e = [],
                    n = [];
                this.els.each(function(i, r) {
                    var s = t(r),
                        o = s.offset().top,
                        l = s.outerHeight();
                    e.push(o), n.push(o + l)
                }), this.tops = e, this.bottoms = n
            },
            getHorizontalIndex: function(t) {
                this.ensureBuilt();
                var e, n = this.lefts,
                    i = this.rights,
                    r = n.length;
                for (e = 0; e < r; e++)
                    if (t >= n[e] && t < i[e]) return e
            },
            getVerticalIndex: function(t) {
                this.ensureBuilt();
                var e, n = this.tops,
                    i = this.bottoms,
                    r = n.length;
                for (e = 0; e < r; e++)
                    if (t >= n[e] && t < i[e]) return e
            },
            getLeftOffset: function(t) {
                return this.ensureBuilt(), this.lefts[t]
            },
            getLeftPosition: function(t) {
                return this.ensureBuilt(), this.lefts[t] - this.origin.left
            },
            getRightOffset: function(t) {
                return this.ensureBuilt(), this.rights[t]
            },
            getRightPosition: function(t) {
                return this.ensureBuilt(), this.rights[t] - this.origin.left
            },
            getWidth: function(t) {
                return this.ensureBuilt(), this.rights[t] - this.lefts[t]
            },
            getTopOffset: function(t) {
                return this.ensureBuilt(), this.tops[t]
            },
            getTopPosition: function(t) {
                return this.ensureBuilt(), this.tops[t] - this.origin.top
            },
            getBottomOffset: function(t) {
                return this.ensureBuilt(), this.bottoms[t]
            },
            getBottomPosition: function(t) {
                return this.ensureBuilt(), this.bottoms[t] - this.origin.top
            },
            getHeight: function(t) {
                return this.ensureBuilt(), this.bottoms[t] - this.tops[t]
            },
            queryBoundingRect: function() {
                var t = d(this.els.eq(0));
                if (!t.is(document)) return f(t)
            },
            isPointInBounds: function(t, e) {
                return this.isLeftInBounds(t) && this.isTopInBounds(e)
            },
            isLeftInBounds: function(t) {
                return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right
            },
            isTopInBounds: function(t) {
                return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom
            }
        }),
        de = jt.DragListener = wt.extend(le, ae, {
            options: null,
            subjectEl: null,
            originX: null,
            originY: null,
            scrollEl: null,
            isInteracting: !1,
            isDistanceSurpassed: !1,
            isDelayEnded: !1,
            isDragging: !1,
            isTouch: !1,
            delay: null,
            delayTimeoutId: null,
            minDistance: null,
            handleTouchScrollProxy: null,
            constructor: function(t) {
                this.options = t || {}, this.handleTouchScrollProxy = lt(this, "handleTouchScroll"), this.initMouseIgnoring(500)
            },
            startInteraction: function(e, n) {
                var i = b(e);
                if ("mousedown" === e.type) {
                    if (this.isIgnoringMouse) return;
                    if (!S(e)) return;
                    e.preventDefault()
                }
                this.isInteracting || (n = n || {}, this.delay = J(n.delay, this.options.delay, 0), this.minDistance = J(n.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, this.isInteracting = !0, this.isTouch = i, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = w(e), this.originY = E(e), this.scrollEl = d(t(e.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(e), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e))
            },
            handleInteractionStart: function(t) {
                this.trigger("interactionStart", t)
            },
            endInteraction: function(t, e) {
                this.isInteracting && (this.endDrag(t), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(t, e), this.isTouch && this.tempIgnoreMouse())
            },
            handleInteractionEnd: function(t, e) {
                this.trigger("interactionEnd", t, e || !1)
            },
            bindHandlers: function() {
                var e = this,
                    n = 1;
                this.isTouch ? (this.listenTo(t(document), {
                    touchmove: this.handleTouchMove,
                    touchend: this.endInteraction,
                    touchcancel: this.endInteraction,
                    touchstart: function(t) {
                        n ? n-- : e.endInteraction(t, !0)
                    }
                }), !H(this.handleTouchScrollProxy) && this.scrollEl && this.listenTo(this.scrollEl, "scroll", this.handleTouchScroll)) : this.listenTo(t(document), {
                    mousemove: this.handleMouseMove,
                    mouseup: this.endInteraction
                }), this.listenTo(t(document), {
                    selectstart: C,
                    contextmenu: C
                })
            },
            unbindHandlers: function() {
                this.stopListeningTo(t(document)), T(this.handleTouchScrollProxy), this.scrollEl && this.stopListeningTo(this.scrollEl, "scroll")
            },
            startDrag: function(t, e) {
                this.startInteraction(t, e), this.isDragging || (this.isDragging = !0, this.handleDragStart(t))
            },
            handleDragStart: function(t) {
                this.trigger("dragStart", t)
            },
            handleMove: function(t) {
                var e, n = w(t) - this.originX,
                    i = E(t) - this.originY,
                    r = this.minDistance;
                this.isDistanceSurpassed || (e = n * n + i * i, e >= r * r && this.handleDistanceSurpassed(t)), this.isDragging && this.handleDrag(n, i, t)
            },
            handleDrag: function(t, e, n) {
                this.trigger("drag", t, e, n), this.updateAutoScroll(n)
            },
            endDrag: function(t) {
                this.isDragging && (this.isDragging = !1, this.handleDragEnd(t))
            },
            handleDragEnd: function(t) {
                this.trigger("dragEnd", t)
            },
            startDelay: function(t) {
                var e = this;
                this.delay ? this.delayTimeoutId = setTimeout(function() {
                    e.handleDelayEnd(t)
                }, this.delay) : this.handleDelayEnd(t)
            },
            handleDelayEnd: function(t) {
                this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(t)
            },
            handleDistanceSurpassed: function(t) {
                this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(t)
            },
            handleTouchMove: function(t) {
                this.isDragging && t.preventDefault(), this.handleMove(t)
            },
            handleMouseMove: function(t) {
                this.handleMove(t)
            },
            handleTouchScroll: function(t) {
                this.isDragging || this.endInteraction(t, !0)
            },
            trigger: function(t) {
                this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1)), this["_" + t] && this["_" + t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        });
    de.mixin({
        isAutoScroll: !1,
        scrollBounds: null,
        scrollTopVel: null,
        scrollLeftVel: null,
        scrollIntervalId: null,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        initAutoScroll: function() {
            var t = this.scrollEl;
            this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document), this.isAutoScroll && this.listenTo(t, "scroll", at(this.handleDebouncedScroll, 100))
        },
        destroyAutoScroll: function() {
            this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
        },
        computeScrollBounds: function() {
            this.isAutoScroll && (this.scrollBounds = h(this.scrollEl))
        },
        updateAutoScroll: function(t) {
            var e, n, i, r, s = this.scrollSensitivity,
                o = this.scrollBounds,
                l = 0,
                a = 0;
            o && (e = (s - (E(t) - o.top)) / s, n = (s - (o.bottom - E(t))) / s, i = (s - (w(t) - o.left)) / s, r = (s - (o.right - w(t))) / s, e >= 0 && e <= 1 ? l = e * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (l = n * this.scrollSpeed), i >= 0 && i <= 1 ? a = i * this.scrollSpeed * -1 : r >= 0 && r <= 1 && (a = r * this.scrollSpeed)), this.setScrollVel(l, a)
        },
        setScrollVel: function(t, e) {
            this.scrollTopVel = t, this.scrollLeftVel = e, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(lt(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function() {
            var t = this.scrollEl;
            this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function() {
            var t = this.scrollEl,
                e = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
        },
        endAutoScroll: function() {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
        },
        handleDebouncedScroll: function() {
            this.scrollIntervalId || this.handleScrollEnd()
        },
        handleScrollEnd: function() {}
    });
    var he = de.extend({
            component: null,
            origHit: null,
            hit: null,
            coordAdjust: null,
            constructor: function(t, e) {
                de.call(this, e), this.component = t
            },
            handleInteractionStart: function(t) {
                var e, n, i, r = this.subjectEl;
                this.computeCoords(), t ? (n = {
                    left: w(t),
                    top: E(t)
                }, i = n, r && (e = h(r), i = R(i, e)), this.origHit = this.queryHit(i.left, i.top), r && this.options.subjectCenter && (this.origHit && (e = x(this.origHit, e) || e), i = I(e)), this.coordAdjust = k(i, n)) : (this.origHit = null, this.coordAdjust = null), de.prototype.handleInteractionStart.apply(this, arguments)
            },
            computeCoords: function() {
                this.component.prepareHits(), this.computeScrollBounds()
            },
            handleDragStart: function(t) {
                var e;
                de.prototype.handleDragStart.apply(this, arguments), e = this.queryHit(w(t), E(t)), e && this.handleHitOver(e)
            },
            handleDrag: function(t, e, n) {
                var i;
                de.prototype.handleDrag.apply(this, arguments), i = this.queryHit(w(n), E(n)), Dt(i, this.hit) || (this.hit && this.handleHitOut(), i && this.handleHitOver(i))
            },
            handleDragEnd: function() {
                this.handleHitDone(), de.prototype.handleDragEnd.apply(this, arguments)
            },
            handleHitOver: function(t) {
                var e = Dt(t, this.origHit);
                this.hit = t, this.trigger("hitOver", this.hit, e, this.origHit)
            },
            handleHitOut: function() {
                this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
            },
            handleHitDone: function() {
                this.hit && this.trigger("hitDone", this.hit)
            },
            handleInteractionEnd: function() {
                de.prototype.handleInteractionEnd.apply(this, arguments), this.origHit = null, this.hit = null, this.component.releaseHits()
            },
            handleScrollEnd: function() {
                de.prototype.handleScrollEnd.apply(this, arguments), this.computeCoords()
            },
            queryHit: function(t, e) {
                return this.coordAdjust && (t += this.coordAdjust.left, e += this.coordAdjust.top), this.component.queryHit(t, e)
            }
        }),
        fe = wt.extend(le, {
            options: null,
            sourceEl: null,
            el: null,
            parentEl: null,
            top0: null,
            left0: null,
            y0: null,
            x0: null,
            topDelta: null,
            leftDelta: null,
            isFollowing: !1,
            isHidden: !1,
            isAnimating: !1,
            constructor: function(e, n) {
                this.options = n = n || {}, this.sourceEl = e, this.parentEl = n.parentEl ? t(n.parentEl) : e.parent()
            },
            start: function(e) {
                this.isFollowing || (this.isFollowing = !0, this.y0 = E(e), this.x0 = w(e), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), b(e) ? this.listenTo(t(document), "touchmove", this.handleMove) : this.listenTo(t(document), "mousemove", this.handleMove))
            },
            stop: function(e, n) {
                function i() {
                    r.isAnimating = !1, r.removeElement(), r.top0 = r.left0 = null, n && n()
                }
                var r = this,
                    s = this.options.revertDuration;
                this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(t(document)), e && s && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {
                    duration: s,
                    complete: i
                })) : i())
            },
            getEl: function() {
                var t = this.el;
                return t || (t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                    position: "absolute",
                    visibility: "",
                    display: this.isHidden ? "none" : "",
                    margin: 0,
                    right: "auto",
                    bottom: "auto",
                    width: this.sourceEl.width(),
                    height: this.sourceEl.height(),
                    opacity: this.options.opacity || "",
                    zIndex: this.options.zIndex
                }), t.addClass("fc-unselectable"), t.appendTo(this.parentEl)), t
            },
            removeElement: function() {
                this.el && (this.el.remove(), this.el = null)
            },
            updatePosition: function() {
                var t, e;
                this.getEl(), null === this.top0 && (t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({
                    top: this.top0 + this.topDelta,
                    left: this.left0 + this.leftDelta
                })
            },
            handleMove: function(t) {
                this.topDelta = E(t) - this.y0, this.leftDelta = w(t) - this.x0, this.isHidden || this.updatePosition()
            },
            hide: function() {
                this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
            },
            show: function() {
                this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
            }
        }),
        ge = jt.Grid = wt.extend(le, ae, {
            hasDayInteractions: !0,
            view: null,
            isRTL: null,
            start: null,
            end: null,
            el: null,
            elsByFill: null,
            eventTimeFormat: null,
            displayEventTime: null,
            displayEventEnd: null,
            minResizeDuration: null,
            largeUnit: null,
            dayDragListener: null,
            segDragListener: null,
            segResizeListener: null,
            externalDragListener: null,
            constructor: function(t) {
                this.view = t, this.isRTL = t.opt("isRTL"), this.elsByFill = {}, this.dayDragListener = this.buildDayDragListener(), this.initMouseIgnoring()
            },
            computeEventTimeFormat: function() {
                return this.view.opt("smallTimeFormat")
            },
            computeDisplayEventTime: function() {
                return !0
            },
            computeDisplayEventEnd: function() {
                return !0
            },
            setRange: function(t) {
                this.start = t.start.clone(), this.end = t.end.clone(), this.rangeUpdated(), this.processRangeOptions()
            },
            rangeUpdated: function() {},
            processRangeOptions: function() {
                var t, e, n = this.view;
                this.eventTimeFormat = n.opt("eventTimeFormat") || n.opt("timeFormat") || this.computeEventTimeFormat(), t = n.opt("displayEventTime"), null == t && (t = this.computeDisplayEventTime()), e = n.opt("displayEventEnd"), null == e && (e = this.computeDisplayEventEnd()), this.displayEventTime = t, this.displayEventEnd = e
            },
            spanToSegs: function(t) {},
            diffDates: function(t, e) {
                return this.largeUnit ? O(t, e, this.largeUnit) : N(t, e)
            },
            prepareHits: function() {},
            releaseHits: function() {},
            queryHit: function(t, e) {},
            getHitSpan: function(t) {},
            getHitEl: function(t) {},
            setElement: function(t) {
                this.el = t, this.hasDayInteractions && (D(t), this.bindDayHandler("touchstart", this.dayTouchStart), this.bindDayHandler("mousedown", this.dayMousedown)), this.bindSegHandlers(), this.bindGlobalHandlers()
            },
            bindDayHandler: function(e, n) {
                var i = this;
                this.el.on(e, function(e) {
                    if (!t(e.target).is(i.segSelector + "," + i.segSelector + " *,.fc-more,a[data-goto]")) return n.call(i, e)
                })
            },
            removeElement: function() {
                this.unbindGlobalHandlers(), this.clearDragListeners(), this.el.remove()
            },
            renderSkeleton: function() {},
            renderDates: function() {},
            unrenderDates: function() {},
            bindGlobalHandlers: function() {
                this.listenTo(t(document), {
                    dragstart: this.externalDragStart,
                    sortstart: this.externalDragStart
                })
            },
            unbindGlobalHandlers: function() {
                this.stopListeningTo(t(document))
            },
            dayMousedown: function(t) {
                this.isIgnoringMouse || this.dayDragListener.startInteraction(t, {})
            },
            dayTouchStart: function(t) {
                var e = this.view;
                (e.isSelected || e.selectedEvent) && this.tempIgnoreMouse(), this.dayDragListener.startInteraction(t, {
                    delay: this.view.opt("longPressDelay")
                })
            },
            buildDayDragListener: function() {
                var t, e, n = this,
                    i = this.view,
                    r = i.opt("selectable"),
                    l = new he(this, {
                        scroll: i.opt("dragScroll"),
                        interactionStart: function() {
                            t = l.origHit, e = null
                        },
                        dragStart: function() {
                            i.unselect()
                        },
                        hitOver: function(i, o, l) {
                            l && (o || (t = null), r && (e = n.computeSelection(n.getHitSpan(l), n.getHitSpan(i)), e ? n.renderSelection(e) : e === !1 && s()))
                        },
                        hitOut: function() {
                            t = null, e = null, n.unrenderSelection()
                        },
                        hitDone: function() {
                            o()
                        },
                        interactionEnd: function(r, s) {
                            s || (t && !n.isIgnoringMouse && i.triggerDayClick(n.getHitSpan(t), n.getHitEl(t), r), e && i.reportSelection(e, r))
                        }
                    });
                return l
            },
            clearDragListeners: function() {
                this.dayDragListener.endInteraction(), this.segDragListener && this.segDragListener.endInteraction(), this.segResizeListener && this.segResizeListener.endInteraction(), this.externalDragListener && this.externalDragListener.endInteraction()
            },
            renderEventLocationHelper: function(t, e) {
                var n = this.fabricateHelperEvent(t, e);
                return this.renderHelper(n, e)
            },
            fabricateHelperEvent: function(t, e) {
                var n = e ? Z(e.event) : {};
                return n.start = t.start.clone(), n.end = t.end ? t.end.clone() : null, n.allDay = null, this.view.calendar.normalizeEventDates(n), n.className = (n.className || []).concat("fc-helper"), e || (n.editable = !1), n
            },
            renderHelper: function(t, e) {},
            unrenderHelper: function() {},
            renderSelection: function(t) {
                this.renderHighlight(t)
            },
            unrenderSelection: function() {
                this.unrenderHighlight()
            },
            computeSelection: function(t, e) {
                var n = this.computeSelectionSpan(t, e);
                return !(n && !this.view.calendar.isSelectionSpanAllowed(n)) && n
            },
            computeSelectionSpan: function(t, e) {
                var n = [t.start, t.end, e.start, e.end];
                return n.sort(st), {
                    start: n[0].clone(),
                    end: n[3].clone()
                }
            },
            renderHighlight: function(t) {
                this.renderFill("highlight", this.spanToSegs(t))
            },
            unrenderHighlight: function() {
                this.unrenderFill("highlight")
            },
            highlightSegClasses: function() {
                return ["fc-highlight"]
            },
            renderBusinessHours: function() {},
            unrenderBusinessHours: function() {},
            getNowIndicatorUnit: function() {},
            renderNowIndicator: function(t) {},
            unrenderNowIndicator: function() {},
            renderFill: function(t, e) {},
            unrenderFill: function(t) {
                var e = this.elsByFill[t];
                e && (e.remove(), delete this.elsByFill[t])
            },
            renderFillSegEls: function(e, n) {
                var i, r = this,
                    s = this[e + "SegEl"],
                    o = "",
                    l = [];
                if (n.length) {
                    for (i = 0; i < n.length; i++) o += this.fillSegHtml(e, n[i]);
                    t(o).each(function(e, i) {
                        var o = n[e],
                            a = t(i);
                        s && (a = s.call(r, o, a)), a && (a = t(a), a.is(r.fillSegTag) && (o.el = a, l.push(o)))
                    })
                }
                return l
            },
            fillSegTag: "div",
            fillSegHtml: function(t, e) {
                var n = this[t + "SegClasses"],
                    i = this[t + "SegCss"],
                    r = n ? n.call(this, e) : [],
                    s = nt(i ? i.call(this, e) : {});
                return "<" + this.fillSegTag + (r.length ? ' class="' + r.join(" ") + '"' : "") + (s ? ' style="' + s + '"' : "") + " />"
            },
            getDayClasses: function(t) {
                var e = this.view,
                    n = e.calendar.getNow(),
                    i = ["fc-" + $t[t.day()]];
                return 1 == e.intervalDuration.as("months") && t.month() != e.intervalStart.month() && i.push("fc-other-month"), t.isSame(n, "day") ? i.push("fc-today", e.highlightStateClass) : t < n ? i.push("fc-past") : i.push("fc-future"), i
            }
        });
    ge.mixin({
        segSelector: ".fc-event-container > *",
        mousedOverSeg: null,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        isDraggingExternal: !1,
        segs: null,
        renderEvents: function(t) {
            var e, n = [],
                i = [];
            for (e = 0; e < t.length; e++)(Tt(t[e]) ? n : i).push(t[e]);
            this.segs = [].concat(this.renderBgEvents(n), this.renderFgEvents(i))
        },
        renderBgEvents: function(t) {
            var e = this.eventsToSegs(t);
            return this.renderBgSegs(e) || e
        },
        renderFgEvents: function(t) {
            var e = this.eventsToSegs(t);
            return this.renderFgSegs(e) || e
        },
        unrenderEvents: function() {
            this.handleSegMouseout(), this.clearDragListeners(), this.unrenderFgSegs(), this.unrenderBgSegs(), this.segs = null
        },
        getEventSegs: function() {
            return this.segs || []
        },
        renderFgSegs: function(t) {},
        unrenderFgSegs: function() {},
        renderFgSegEls: function(e, n) {
            var i, r = this.view,
                s = "",
                o = [];
            if (e.length) {
                for (i = 0; i < e.length; i++) s += this.fgSegHtml(e[i], n);
                t(s).each(function(n, i) {
                    var s = e[n],
                        l = r.resolveEventEl(s.event, t(i));
                    l && (l.data("fc-seg", s), s.el = l, o.push(s))
                })
            }
            return o
        },
        fgSegHtml: function(t, e) {},
        renderBgSegs: function(t) {
            return this.renderFill("bgEvent", t)
        },
        unrenderBgSegs: function() {
            this.unrenderFill("bgEvent")
        },
        bgEventSegEl: function(t, e) {
            return this.view.resolveEventEl(t.event, e)
        },
        bgEventSegClasses: function(t) {
            var e = t.event,
                n = e.source || {};
            return ["fc-bgevent"].concat(e.className, n.className || [])
        },
        bgEventSegCss: function(t) {
            return {
                "background-color": this.getSegSkinCss(t)["background-color"]
            }
        },
        businessHoursSegClasses: function(t) {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        buildBusinessHourSegs: function(e) {
            var n = this.view.calendar.getCurrentBusinessHourEvents(e);
            return !n.length && this.view.calendar.options.businessHours && (n = [t.extend({}, xe, {
                start: this.view.end,
                end: this.view.end,
                dow: null
            })]), this.eventsToSegs(n)
        },
        bindSegHandlers: function() {
            this.bindSegHandlersToEl(this.el)
        },
        bindSegHandlersToEl: function(t) {
            this.bindSegHandlerToEl(t, "touchstart", this.handleSegTouchStart), this.bindSegHandlerToEl(t, "touchend", this.handleSegTouchEnd), this.bindSegHandlerToEl(t, "mouseenter", this.handleSegMouseover), this.bindSegHandlerToEl(t, "mouseleave", this.handleSegMouseout), this.bindSegHandlerToEl(t, "mousedown", this.handleSegMousedown), this.bindSegHandlerToEl(t, "click", this.handleSegClick)
        },
        bindSegHandlerToEl: function(e, n, i) {
            var r = this;
            e.on(n, this.segSelector, function(e) {
                var n = t(this).data("fc-seg");
                if (n && !r.isDraggingSeg && !r.isResizingSeg) return i.call(r, n, e)
            })
        },
        handleSegClick: function(t, e) {
            var n = this.view.trigger("eventClick", t.el[0], t.event, e);
            n === !1 && e.preventDefault()
        },
        handleSegMouseover: function(t, e) {
            this.isIgnoringMouse || this.mousedOverSeg || (this.mousedOverSeg = t, this.view.isEventResizable(t.event) && t.el.addClass("fc-allow-mouse-resize"), this.view.trigger("eventMouseover", t.el[0], t.event, e))
        },
        handleSegMouseout: function(t, e) {
            e = e || {}, this.mousedOverSeg && (t = t || this.mousedOverSeg, this.mousedOverSeg = null, this.view.isEventResizable(t.event) && t.el.removeClass("fc-allow-mouse-resize"), this.view.trigger("eventMouseout", t.el[0], t.event, e))
        },
        handleSegMousedown: function(t, e) {
            var n = this.startSegResize(t, e, {
                distance: 5
            });
            !n && this.view.isEventDraggable(t.event) && this.buildSegDragListener(t).startInteraction(e, {
                distance: 5
            })
        },
        handleSegTouchStart: function(t, e) {
            var n, i = this.view,
                r = t.event,
                s = i.isEventSelected(r),
                o = i.isEventDraggable(r),
                l = i.isEventResizable(r),
                a = !1;
            s && l && (a = this.startSegResize(t, e)), a || !o && !l || (n = o ? this.buildSegDragListener(t) : this.buildSegSelectListener(t), n.startInteraction(e, {
                delay: s ? 0 : this.view.opt("longPressDelay")
            })), this.tempIgnoreMouse()
        },
        handleSegTouchEnd: function(t, e) {
            this.tempIgnoreMouse()
        },
        startSegResize: function(e, n, i) {
            return !!t(n.target).is(".fc-resizer") && (this.buildSegResizeListener(e, t(n.target).is(".fc-start-resizer")).startInteraction(n, i), !0)
        },
        buildSegDragListener: function(t) {
            var e, n, i, r = this,
                l = this.view,
                a = l.calendar,
                u = t.el,
                c = t.event;
            if (this.segDragListener) return this.segDragListener;
            var d = this.segDragListener = new he(l, {
                scroll: l.opt("dragScroll"),
                subjectEl: u,
                subjectCenter: !0,
                interactionStart: function(i) {
                    t.component = r, e = !1, n = new fe(t.el, {
                        additionalClass: "fc-dragging",
                        parentEl: l.el,
                        opacity: d.isTouch ? null : l.opt("dragOpacity"),
                        revertDuration: l.opt("dragRevertDuration"),
                        zIndex: 2
                    }), n.hide(), n.start(i)
                },
                dragStart: function(n) {
                    d.isTouch && !l.isEventSelected(c) && l.selectEvent(c), e = !0, r.handleSegMouseout(t, n), r.segDragStart(t, n), l.hideEvent(c)
                },
                hitOver: function(e, o, u) {
                    var h;
                    t.hit && (u = t.hit), i = r.computeEventDrop(u.component.getHitSpan(u), e.component.getHitSpan(e), c), i && !a.isEventSpanAllowed(r.eventToSpan(i), c) && (s(), i = null), i && (h = l.renderDrag(i, t)) ? (h.addClass("fc-dragging"), d.isTouch || r.applyDragOpacity(h), n.hide()) : n.show(), o && (i = null)
                },
                hitOut: function() {
                    l.unrenderDrag(), n.show(), i = null
                },
                hitDone: function() {
                    o()
                },
                interactionEnd: function(s) {
                    delete t.component, n.stop(!i, function() {
                        e && (l.unrenderDrag(), l.showEvent(c), r.segDragStop(t, s)), i && l.reportEventDrop(c, i, this.largeUnit, u, s)
                    }), r.segDragListener = null
                }
            });
            return d
        },
        buildSegSelectListener: function(t) {
            var e = this,
                n = this.view,
                i = t.event;
            if (this.segDragListener) return this.segDragListener;
            var r = this.segDragListener = new de({
                dragStart: function(t) {
                    r.isTouch && !n.isEventSelected(i) && n.selectEvent(i)
                },
                interactionEnd: function(t) {
                    e.segDragListener = null
                }
            });
            return r
        },
        segDragStart: function(t, e) {
            this.isDraggingSeg = !0, this.view.trigger("eventDragStart", t.el[0], t.event, e, {})
        },
        segDragStop: function(t, e) {
            this.isDraggingSeg = !1, this.view.trigger("eventDragStop", t.el[0], t.event, e, {})
        },
        computeEventDrop: function(t, e, n) {
            var i, r, s = this.view.calendar,
                o = t.start,
                l = e.start;
            return o.hasTime() === l.hasTime() ? (i = this.diffDates(l, o), n.allDay && W(i) ? (r = {
                start: n.start.clone(),
                end: s.getEventEnd(n),
                allDay: !1
            }, s.normalizeEventTimes(r)) : r = Ht(n), r.start.add(i), r.end && r.end.add(i)) : r = {
                start: l.clone(),
                end: null,
                allDay: !l.hasTime()
            }, r
        },
        applyDragOpacity: function(t) {
            var e = this.view.opt("dragOpacity");
            null != e && t.css("opacity", e)
        },
        externalDragStart: function(e, n) {
            var i, r, s = this.view;
            s.opt("droppable") && (i = t((n ? n.item : null) || e.target), r = s.opt("dropAccept"), (t.isFunction(r) ? r.call(i[0], i) : i.is(r)) && (this.isDraggingExternal || this.listenToExternalDrag(i, e, n)))
        },
        listenToExternalDrag: function(t, e, n) {
            var i, r = this,
                l = this.view.calendar,
                a = Lt(t),
                u = r.externalDragListener = new he(this, {
                    interactionStart: function() {
                        r.isDraggingExternal = !0
                    },
                    hitOver: function(t) {
                        i = r.computeExternalDrop(t.component.getHitSpan(t), a), i && !l.isExternalSpanAllowed(r.eventToSpan(i), i, a.eventProps) && (s(), i = null), i && r.renderDrag(i)
                    },
                    hitOut: function() {
                        i = null
                    },
                    hitDone: function() {
                        o(), r.unrenderDrag()
                    },
                    interactionEnd: function(e) {
                        i && r.view.reportExternalDrop(a, i, t, e, n), r.isDraggingExternal = !1, r.externalDragListener = null
                    }
                });
            u.startDrag(e)
        },
        computeExternalDrop: function(t, e) {
            var n = this.view.calendar,
                i = {
                    start: n.applyTimezone(t.start),
                    end: null
                };
            return e.startTime && !i.start.hasTime() && i.start.time(e.startTime), e.duration && (i.end = i.start.clone().add(e.duration)), i
        },
        renderDrag: function(t, e) {},
        unrenderDrag: function() {},
        buildSegResizeListener: function(t, e) {
            var n, i, r = this,
                l = this.view,
                a = l.calendar,
                u = t.el,
                c = t.event,
                d = a.getEventEnd(c),
                h = this.segResizeListener = new he(this, {
                    scroll: l.opt("dragScroll"),
                    subjectEl: u,
                    interactionStart: function() {
                        n = !1
                    },
                    dragStart: function(e) {
                        n = !0, r.handleSegMouseout(t, e), r.segResizeStart(t, e)
                    },
                    hitOver: function(n, o, u) {
                        var h = r.getHitSpan(u),
                            f = r.getHitSpan(n);
                        i = e ? r.computeEventStartResize(h, f, c) : r.computeEventEndResize(h, f, c), i && (a.isEventSpanAllowed(r.eventToSpan(i), c) ? i.start.isSame(c.start.clone().stripZone()) && i.end.isSame(d.clone().stripZone()) && (i = null) : (s(), i = null)), i && (l.hideEvent(c), r.renderEventResize(i, t))
                    },
                    hitOut: function() {
                        i = null
                    },
                    hitDone: function() {
                        r.unrenderEventResize(), l.showEvent(c), o()
                    },
                    interactionEnd: function(e) {
                        n && r.segResizeStop(t, e), i && l.reportEventResize(c, i, this.largeUnit, u, e), r.segResizeListener = null
                    }
                });
            return h
        },
        segResizeStart: function(t, e) {
            this.isResizingSeg = !0, this.view.trigger("eventResizeStart", t.el[0], t.event, e, {})
        },
        segResizeStop: function(t, e) {
            this.isResizingSeg = !1, this.view.trigger("eventResizeStop", t.el[0], t.event, e, {})
        },
        computeEventStartResize: function(t, e, n) {
            return this.computeEventResize("start", t, e, n)
        },
        computeEventEndResize: function(t, e, n) {
            return this.computeEventResize("end", t, e, n)
        },
        computeEventResize: function(t, e, n, i) {
            var r, s, o = this.view.calendar,
                l = this.diffDates(n[t], e[t]);
            return r = {
                start: i.start.clone(),
                end: o.getEventEnd(i),
                allDay: i.allDay
            }, r.allDay && W(l) && (r.allDay = !1, o.normalizeEventTimes(r)), r[t].add(l), r.start.isBefore(r.end) || (s = this.minResizeDuration || (i.allDay ? o.defaultAllDayEventDuration : o.defaultTimedEventDuration), "start" == t ? r.start = r.end.clone().subtract(s) : r.end = r.start.clone().add(s)), r
        },
        renderEventResize: function(t, e) {},
        unrenderEventResize: function() {},
        getEventTimeText: function(t, e, n) {
            return null == e && (e = this.eventTimeFormat), null == n && (n = this.displayEventEnd), this.displayEventTime && t.start.hasTime() ? n && t.end ? this.view.formatRange(t, e) : t.start.format(e) : ""
        },
        getSegClasses: function(t, e, n) {
            var i = this.view,
                r = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getSegCustomClasses(t));
            return e && r.push("fc-draggable"), n && r.push("fc-resizable"), i.isEventSelected(t.event) && r.push("fc-selected"), r
        },
        getSegCustomClasses: function(t) {
            var e = t.event;
            return [].concat(e.className, e.source ? e.source.className : [])
        },
        getSegSkinCss: function(t) {
            return {
                "background-color": this.getSegBackgroundColor(t),
                "border-color": this.getSegBorderColor(t),
                color: this.getSegTextColor(t)
            }
        },
        getSegBackgroundColor: function(t) {
            return t.event.backgroundColor || t.event.color || this.getSegDefaultBackgroundColor(t)
        },
        getSegDefaultBackgroundColor: function(t) {
            var e = t.event.source || {};
            return e.backgroundColor || e.color || this.view.opt("eventBackgroundColor") || this.view.opt("eventColor")
        },
        getSegBorderColor: function(t) {
            return t.event.borderColor || t.event.color || this.getSegDefaultBorderColor(t)
        },
        getSegDefaultBorderColor: function(t) {
            var e = t.event.source || {};
            return e.borderColor || e.color || this.view.opt("eventBorderColor") || this.view.opt("eventColor")
        },
        getSegTextColor: function(t) {
            return t.event.textColor || this.getSegDefaultTextColor(t)
        },
        getSegDefaultTextColor: function(t) {
            var e = t.event.source || {};
            return e.textColor || this.view.opt("eventTextColor")
        },
        eventToSegs: function(t) {
            return this.eventsToSegs([t])
        },
        eventToSpan: function(t) {
            return this.eventToSpans(t)[0]
        },
        eventToSpans: function(t) {
            var e = this.eventToRange(t);
            return this.eventRangeToSpans(e, t)
        },
        eventsToSegs: function(e, n) {
            var i = this,
                r = It(e),
                s = [];
            return t.each(r, function(t, e) {
                var r, o = [];
                for (r = 0; r < e.length; r++) o.push(i.eventToRange(e[r]));
                if (xt(e[0]))
                    for (o = i.invertRanges(o), r = 0; r < o.length; r++) s.push.apply(s, i.eventRangeToSegs(o[r], e[0], n));
                else
                    for (r = 0; r < o.length; r++) s.push.apply(s, i.eventRangeToSegs(o[r], e[r], n))
            }), s
        },
        eventToRange: function(t) {
            var e = this.view.calendar,
                n = t.start.clone().stripZone(),
                i = (t.end ? t.end.clone() : e.getDefaultEventEnd(null != t.allDay ? t.allDay : !t.start.hasTime(), t.start)).stripZone();
            return e.localizeMoment(n), e.localizeMoment(i), {
                start: n,
                end: i
            }
        },
        eventRangeToSegs: function(t, e, n) {
            var i, r = this.eventRangeToSpans(t, e),
                s = [];
            for (i = 0; i < r.length; i++) s.push.apply(s, this.eventSpanToSegs(r[i], e, n));
            return s
        },
        eventRangeToSpans: function(e, n) {
            return [t.extend({}, e)]
        },
        eventSpanToSegs: function(t, e, n) {
            var i, r, s = n ? n(t) : this.spanToSegs(t);
            for (i = 0; i < s.length; i++) r = s[i], r.event = e, r.eventStartMS = +t.start, r.eventDurationMS = t.end - t.start;
            return s
        },
        invertRanges: function(t) {
            var e, n, i = this.view,
                r = i.start.clone(),
                s = i.end.clone(),
                o = [],
                l = r;
            for (t.sort(kt), e = 0; e < t.length; e++) n = t[e], n.start > l && o.push({
                start: l,
                end: n.start
            }), l = n.end;
            return l < s && o.push({
                start: l,
                end: s
            }), o
        },
        sortEventSegs: function(t) {
            t.sort(lt(this, "compareEventSegs"))
        },
        compareEventSegs: function(t, e) {
            return t.eventStartMS - e.eventStartMS || e.eventDurationMS - t.eventDurationMS || e.event.allDay - t.event.allDay || M(t.event, e.event, this.view.eventOrderSpecs)
        }
    }), jt.pluckEventDateProps = Ht, jt.isBgEvent = Tt, jt.dataAttrPrefix = "";
    var pe = jt.DayTableMixin = {
            breakOnWeeks: !1,
            dayDates: null,
            dayIndices: null,
            daysPerRow: null,
            rowCnt: null,
            colCnt: null,
            colHeadFormat: null,
            updateDayTable: function() {
                for (var t, e, n, i = this.view, r = this.start.clone(), s = -1, o = [], l = []; r.isBefore(this.end);) i.isHiddenDay(r) ? o.push(s + .5) : (s++, o.push(s), l.push(r.clone())), r.add(1, "days");
                if (this.breakOnWeeks) {
                    for (e = l[0].day(), t = 1; t < l.length && l[t].day() != e; t++);
                    n = Math.ceil(l.length / t)
                } else n = 1, t = l.length;
                this.dayDates = l, this.dayIndices = o, this.daysPerRow = t, this.rowCnt = n, this.updateDayTableCols()
            },
            updateDayTableCols: function() {
                this.colCnt = this.computeColCnt(), this.colHeadFormat = this.view.opt("columnFormat") || this.computeColHeadFormat()
            },
            computeColCnt: function() {
                return this.daysPerRow
            },
            getCellDate: function(t, e) {
                return this.dayDates[this.getCellDayIndex(t, e)].clone()
            },
            getCellRange: function(t, e) {
                var n = this.getCellDate(t, e),
                    i = n.clone().add(1, "days");
                return {
                    start: n,
                    end: i
                }
            },
            getCellDayIndex: function(t, e) {
                return t * this.daysPerRow + this.getColDayIndex(e)
            },
            getColDayIndex: function(t) {
                return this.isRTL ? this.colCnt - 1 - t : t
            },
            getDateDayIndex: function(t) {
                var e = this.dayIndices,
                    n = t.diff(this.start, "days");
                return n < 0 ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n]
            },
            computeColHeadFormat: function() {
                return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
            },
            sliceRangeByRow: function(t) {
                var e, n, i, r, s, o = this.daysPerRow,
                    l = this.view.computeDayRange(t),
                    a = this.getDateDayIndex(l.start),
                    u = this.getDateDayIndex(l.end.clone().subtract(1, "days")),
                    c = [];
                for (e = 0; e < this.rowCnt; e++) n = e * o, i = n + o - 1, r = Math.max(a, n), s = Math.min(u, i), r = Math.ceil(r), s = Math.floor(s), r <= s && c.push({
                    row: e,
                    firstRowDayIndex: r - n,
                    lastRowDayIndex: s - n,
                    isStart: r === a,
                    isEnd: s === u
                });
                return c
            },
            sliceRangeByDay: function(t) {
                var e, n, i, r, s, o, l = this.daysPerRow,
                    a = this.view.computeDayRange(t),
                    u = this.getDateDayIndex(a.start),
                    c = this.getDateDayIndex(a.end.clone().subtract(1, "days")),
                    d = [];
                for (e = 0; e < this.rowCnt; e++)
                    for (n = e * l, i = n + l - 1, r = n; r <= i; r++) s = Math.max(u, r), o = Math.min(c, r), s = Math.ceil(s), o = Math.floor(o), s <= o && d.push({
                        row: e,
                        firstRowDayIndex: s - n,
                        lastRowDayIndex: o - n,
                        isStart: s === u,
                        isEnd: o === c
                    });
                return d
            },
            renderHeadHtml: function() {
                var t = this.view;
                return '<div class="fc-row ' + t.widgetHeaderClass + '"><table><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
            },
            renderHeadIntroHtml: function() {
                return this.renderIntroHtml()
            },
            renderHeadTrHtml: function() {
                return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>";
            },
            renderHeadDateCellsHtml: function() {
                var t, e, n = [];
                for (t = 0; t < this.colCnt; t++) e = this.getCellDate(0, t), n.push(this.renderHeadDateCellHtml(e));
                return n.join("")
            },
            renderHeadDateCellHtml: function(t, e, n) {
                var i = this.view;
                return '<th class="fc-day-header ' + i.widgetHeaderClass + " fc-" + $t[t.day()] + '"' + (1 === this.rowCnt ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e > 1 ? ' colspan="' + e + '"' : "") + (n ? " " + n : "") + ">" + i.buildGotoAnchorHtml({
                    date: t,
                    forceOff: this.rowCnt > 1 || 1 === this.colCnt
                }, tt(t.format(this.colHeadFormat))) + "</th>"
            },
            renderBgTrHtml: function(t) {
                return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>"
            },
            renderBgIntroHtml: function(t) {
                return this.renderIntroHtml()
            },
            renderBgCellsHtml: function(t) {
                var e, n, i = [];
                for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), i.push(this.renderBgCellHtml(n));
                return i.join("")
            },
            renderBgCellHtml: function(t, e) {
                var n = this.view,
                    i = this.getDayClasses(t);
                return i.unshift("fc-day", n.widgetContentClass), '<td class="' + i.join(" ") + '" data-date="' + t.format("YYYY-MM-DD") + '"' + (e ? " " + e : "") + "></td>"
            },
            renderIntroHtml: function() {},
            bookendCells: function(t) {
                var e = this.renderIntroHtml();
                e && (this.isRTL ? t.append(e) : t.prepend(e))
            }
        },
        ve = jt.DayGrid = ge.extend(pe, {
            numbersVisible: !1,
            bottomCoordPadding: 0,
            rowEls: null,
            cellEls: null,
            helperEls: null,
            rowCoordCache: null,
            colCoordCache: null,
            renderDates: function(t) {
                var e, n, i = this.view,
                    r = this.rowCnt,
                    s = this.colCnt,
                    o = "";
                for (e = 0; e < r; e++) o += this.renderDayRowHtml(e, t);
                for (this.el.html(o), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day"), this.rowCoordCache = new ce({
                        els: this.rowEls,
                        isVertical: !0
                    }), this.colCoordCache = new ce({
                        els: this.cellEls.slice(0, this.colCnt),
                        isHorizontal: !0
                    }), e = 0; e < r; e++)
                    for (n = 0; n < s; n++) i.trigger("dayRender", null, this.getCellDate(e, n), this.getCellEl(e, n))
            },
            unrenderDates: function() {
                this.removeSegPopover()
            },
            renderBusinessHours: function() {
                var t = this.buildBusinessHourSegs(!0);
                this.renderFill("businessHours", t, "bgevent")
            },
            unrenderBusinessHours: function() {
                this.unrenderFill("businessHours")
            },
            renderDayRowHtml: function(t, e) {
                var n = this.view,
                    i = ["fc-row", "fc-week", n.widgetContentClass];
                return e && i.push("fc-rigid"), '<div class="' + i.join(" ") + '"><div class="fc-bg"><table>' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>"
            },
            renderNumberTrHtml: function(t) {
                return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>"
            },
            renderNumberIntroHtml: function(t) {
                return this.renderIntroHtml()
            },
            renderNumberCellsHtml: function(t) {
                var e, n, i = [];
                for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), i.push(this.renderNumberCellHtml(n));
                return i.join("")
            },
            renderNumberCellHtml: function(t) {
                var e, n, i = "";
                return this.view.dayNumbersVisible || this.view.cellWeekNumbersVisible ? (e = this.getDayClasses(t), e.unshift("fc-day-top"), this.view.cellWeekNumbersVisible && (n = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()), i += '<td class="' + e.join(" ") + '" data-date="' + t.format() + '">', this.view.cellWeekNumbersVisible && t.day() == n && (i += this.view.buildGotoAnchorHtml({
                    date: t,
                    type: "week"
                }, {
                    class: "fc-week-number"
                }, t.format("w"))), this.view.dayNumbersVisible && (i += this.view.buildGotoAnchorHtml(t, {
                    class: "fc-day-number"
                }, t.date())), i += "</td>") : "<td/>"
            },
            computeEventTimeFormat: function() {
                return this.view.opt("extraSmallTimeFormat")
            },
            computeDisplayEventEnd: function() {
                return 1 == this.colCnt
            },
            rangeUpdated: function() {
                this.updateDayTable()
            },
            spanToSegs: function(t) {
                var e, n, i = this.sliceRangeByRow(t);
                for (e = 0; e < i.length; e++) n = i[e], this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex, n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex, n.rightCol = n.lastRowDayIndex);
                return i
            },
            prepareHits: function() {
                this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
            },
            releaseHits: function() {
                this.colCoordCache.clear(), this.rowCoordCache.clear()
            },
            queryHit: function(t, e) {
                if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
                    var n = this.colCoordCache.getHorizontalIndex(t),
                        i = this.rowCoordCache.getVerticalIndex(e);
                    if (null != i && null != n) return this.getCellHit(i, n)
                }
            },
            getHitSpan: function(t) {
                return this.getCellRange(t.row, t.col)
            },
            getHitEl: function(t) {
                return this.getCellEl(t.row, t.col)
            },
            getCellHit: function(t, e) {
                return {
                    row: t,
                    col: e,
                    component: this,
                    left: this.colCoordCache.getLeftOffset(e),
                    right: this.colCoordCache.getRightOffset(e),
                    top: this.rowCoordCache.getTopOffset(t),
                    bottom: this.rowCoordCache.getBottomOffset(t)
                }
            },
            getCellEl: function(t, e) {
                return this.cellEls.eq(t * this.colCnt + e)
            },
            renderDrag: function(t, e) {
                if (this.renderHighlight(this.eventToSpan(t)), e && e.component !== this) return this.renderEventLocationHelper(t, e)
            },
            unrenderDrag: function() {
                this.unrenderHighlight(), this.unrenderHelper()
            },
            renderEventResize: function(t, e) {
                return this.renderHighlight(this.eventToSpan(t)), this.renderEventLocationHelper(t, e)
            },
            unrenderEventResize: function() {
                this.unrenderHighlight(), this.unrenderHelper()
            },
            renderHelper: function(e, n) {
                var i, r = [],
                    s = this.eventToSegs(e);
                return s = this.renderFgSegEls(s), i = this.renderSegRows(s), this.rowEls.each(function(e, s) {
                    var o, l = t(s),
                        a = t('<div class="fc-helper-skeleton"><table/></div>');
                    o = n && n.row === e ? n.el.position().top : l.find(".fc-content-skeleton tbody").position().top, a.css("top", o).find("table").append(i[e].tbodyEl), l.append(a), r.push(a[0])
                }), this.helperEls = t(r)
            },
            unrenderHelper: function() {
                this.helperEls && (this.helperEls.remove(), this.helperEls = null)
            },
            fillSegTag: "td",
            renderFill: function(e, n, i) {
                var r, s, o, l = [];
                for (n = this.renderFillSegEls(e, n), r = 0; r < n.length; r++) s = n[r], o = this.renderFillRow(e, s, i), this.rowEls.eq(s.row).append(o), l.push(o[0]);
                return this.elsByFill[e] = t(l), n
            },
            renderFillRow: function(e, n, i) {
                var r, s, o = this.colCnt,
                    l = n.leftCol,
                    a = n.rightCol + 1;
                return i = i || e.toLowerCase(), r = t('<div class="fc-' + i + '-skeleton"><table><tr/></table></div>'), s = r.find("tr"), l > 0 && s.append('<td colspan="' + l + '"/>'), s.append(n.el.attr("colspan", a - l)), a < o && s.append('<td colspan="' + (o - a) + '"/>'), this.bookendCells(s), r
            }
        });
    ve.mixin({
        rowStructs: null,
        unrenderEvents: function() {
            this.removeSegPopover(), ge.prototype.unrenderEvents.apply(this, arguments)
        },
        getEventSegs: function() {
            return ge.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function(e) {
            var n = t.grep(e, function(t) {
                return t.event.allDay
            });
            return ge.prototype.renderBgSegs.call(this, n)
        },
        renderFgSegs: function(e) {
            var n;
            return e = this.renderFgSegEls(e), n = this.rowStructs = this.renderSegRows(e), this.rowEls.each(function(e, i) {
                t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)
            }), e
        },
        unrenderFgSegs: function() {
            for (var t, e = this.rowStructs || []; t = e.pop();) t.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function(t) {
            var e, n, i = [];
            for (e = this.groupSegRows(t), n = 0; n < e.length; n++) i.push(this.renderSegRow(n, e[n]));
            return i
        },
        fgSegHtml: function(t, e) {
            var n, i, r = this.view,
                s = t.event,
                o = r.isEventDraggable(s),
                l = !e && s.allDay && t.isStart && r.isEventResizableFromStart(s),
                a = !e && s.allDay && t.isEnd && r.isEventResizableFromEnd(s),
                u = this.getSegClasses(t, o, l || a),
                c = nt(this.getSegSkinCss(t)),
                d = "";
            return u.unshift("fc-day-grid-event", "fc-h-event"), t.isStart && (n = this.getEventTimeText(s), n && (d = '<span class="fc-time">' + tt(n) + "</span>")), i = '<span class="fc-title">' + (tt(s.title || "") || "&nbsp;") + "</span>", '<a class="' + u.join(" ") + '"' + (s.url ? ' href="' + tt(s.url) + '"' : "") + (c ? ' style="' + c + '"' : "") + '><div class="fc-content">' + (this.isRTL ? i + " " + d : d + " " + i) + "</div>" + (l ? '<div class="fc-resizer fc-start-resizer" />' : "") + (a ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        renderSegRow: function(e, n) {
            function i(e) {
                for (; o < e;) c = (m[r - 1] || [])[o], c ? c.attr("rowspan", parseInt(c.attr("rowspan") || 1, 10) + 1) : (c = t("<td/>"), l.append(c)), v[r][o] = c, m[r][o] = c, o++
            }
            var r, s, o, l, a, u, c, d = this.colCnt,
                h = this.buildSegLevels(n),
                f = Math.max(1, h.length),
                g = t("<tbody/>"),
                p = [],
                v = [],
                m = [];
            for (r = 0; r < f; r++) {
                if (s = h[r], o = 0, l = t("<tr/>"), p.push([]), v.push([]), m.push([]), s)
                    for (a = 0; a < s.length; a++) {
                        for (u = s[a], i(u.leftCol), c = t('<td class="fc-event-container"/>').append(u.el), u.leftCol != u.rightCol ? c.attr("colspan", u.rightCol - u.leftCol + 1) : m[r][o] = c; o <= u.rightCol;) v[r][o] = c, p[r][o] = u, o++;
                        l.append(c)
                    }
                i(d), this.bookendCells(l), g.append(l)
            }
            return {
                row: e,
                tbodyEl: g,
                cellMatrix: v,
                segMatrix: p,
                segLevels: h,
                segs: n
            }
        },
        buildSegLevels: function(t) {
            var e, n, i, r = [];
            for (this.sortEventSegs(t), e = 0; e < t.length; e++) {
                for (n = t[e], i = 0; i < r.length && Mt(n, r[i]); i++);
                n.level = i, (r[i] || (r[i] = [])).push(n)
            }
            for (i = 0; i < r.length; i++) r[i].sort(zt);
            return r
        },
        groupSegRows: function(t) {
            var e, n = [];
            for (e = 0; e < this.rowCnt; e++) n.push([]);
            for (e = 0; e < t.length; e++) n[t[e].row].push(t[e]);
            return n
        }
    }), ve.mixin({
        segPopover: null,
        popoverSegs: null,
        removeSegPopover: function() {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function(t) {
            var e, n, i = this.rowStructs || [];
            for (e = 0; e < i.length; e++) this.unlimitRow(e), n = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e)), n !== !1 && this.limitRow(e, n)
        },
        computeRowLevelLimit: function(e) {
            function n(e, n) {
                s = Math.max(s, t(n).outerHeight())
            }
            var i, r, s, o = this.rowEls.eq(e),
                l = o.height(),
                a = this.rowStructs[e].tbodyEl.children();
            for (i = 0; i < a.length; i++)
                if (r = a.eq(i).removeClass("fc-limited"), s = 0, r.find("> td > :first-child").each(n), r.position().top + s > l) return i;
            return !1
        },
        limitRow: function(e, n) {
            function i(i) {
                for (; b < i;) u = S.getCellSegs(e, b, n), u.length && (h = s[n - 1][b], y = S.renderMoreLink(e, b, u), m = t("<div/>").append(y), h.append(m), E.push(m[0])), b++
            }
            var r, s, o, l, a, u, c, d, h, f, g, p, v, m, y, S = this,
                w = this.rowStructs[e],
                E = [],
                b = 0;
            if (n && n < w.segLevels.length) {
                for (r = w.segLevels[n - 1], s = w.cellMatrix, o = w.tbodyEl.children().slice(n).addClass("fc-limited").get(), l = 0; l < r.length; l++) {
                    for (a = r[l], i(a.leftCol), d = [], c = 0; b <= a.rightCol;) u = this.getCellSegs(e, b, n), d.push(u), c += u.length, b++;
                    if (c) {
                        for (h = s[n - 1][a.leftCol], f = h.attr("rowspan") || 1, g = [], p = 0; p < d.length; p++) v = t('<td class="fc-more-cell"/>').attr("rowspan", f), u = d[p], y = this.renderMoreLink(e, a.leftCol + p, [a].concat(u)), m = t("<div/>").append(y), v.append(m), g.push(v[0]), E.push(v[0]);
                        h.addClass("fc-limited").after(t(g)), o.push(h[0])
                    }
                }
                i(this.colCnt), w.moreEls = t(E), w.limitedEls = t(o)
            }
        },
        unlimitRow: function(t) {
            var e = this.rowStructs[t];
            e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null)
        },
        renderMoreLink: function(e, n, i) {
            var r = this,
                s = this.view;
            return t('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click", function(o) {
                var l = s.opt("eventLimitClick"),
                    a = r.getCellDate(e, n),
                    u = t(this),
                    c = r.getCellEl(e, n),
                    d = r.getCellSegs(e, n),
                    h = r.resliceDaySegs(d, a),
                    f = r.resliceDaySegs(i, a);
                "function" == typeof l && (l = s.trigger("eventLimitClick", null, {
                    date: a,
                    dayEl: c,
                    moreEl: u,
                    segs: h,
                    hiddenSegs: f
                }, o)), "popover" === l ? r.showSegPopover(e, n, u, h) : "string" == typeof l && s.calendar.zoomTo(a, l)
            })
        },
        showSegPopover: function(t, e, n, i) {
            var r, s, o = this,
                l = this.view,
                a = n.parent();
            r = 1 == this.rowCnt ? l.el : this.rowEls.eq(t), s = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(t, e, i),
                parentEl: this.view.el,
                top: r.offset().top,
                autoHide: !0,
                viewportConstrain: l.opt("popoverViewportConstrain"),
                hide: function() {
                    o.segPopover.removeElement(), o.segPopover = null, o.popoverSegs = null
                }
            }, this.isRTL ? s.right = a.offset().left + a.outerWidth() + 1 : s.left = a.offset().left - 1, this.segPopover = new ue(s), this.segPopover.show(), this.bindSegHandlersToEl(this.segPopover.el)
        },
        renderSegPopoverContent: function(e, n, i) {
            var r, s = this.view,
                o = s.opt("theme"),
                l = this.getCellDate(e, n).format(s.opt("dayPopoverFormat")),
                a = t('<div class="fc-header ' + s.widgetHeaderClass + '"><span class="fc-close ' + (o ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span><span class="fc-title">' + tt(l) + '</span><div class="fc-clear"/></div><div class="fc-body ' + s.widgetContentClass + '"><div class="fc-event-container"></div></div>'),
                u = a.find(".fc-event-container");
            for (i = this.renderFgSegEls(i, !0), this.popoverSegs = i, r = 0; r < i.length; r++) this.prepareHits(), i[r].hit = this.getCellHit(e, n), this.releaseHits(), u.append(i[r].el);
            return a
        },
        resliceDaySegs: function(e, n) {
            var i = t.map(e, function(t) {
                    return t.event
                }),
                r = n.clone(),
                s = r.clone().add(1, "days"),
                o = {
                    start: r,
                    end: s
                };
            return e = this.eventsToSegs(i, function(t) {
                var e = F(t, o);
                return e ? [e] : []
            }), this.sortEventSegs(e), e
        },
        getMoreLinkText: function(t) {
            var e = this.view.opt("eventLimitText");
            return "function" == typeof e ? e(t) : "+" + t + " " + e
        },
        getCellSegs: function(t, e, n) {
            for (var i, r = this.rowStructs[t].segMatrix, s = n || 0, o = []; s < r.length;) i = r[s][e], i && o.push(i), s++;
            return o
        }
    });
    var me = jt.TimeGrid = ge.extend(pe, {
        slotDuration: null,
        snapDuration: null,
        snapsPerSlot: null,
        minTime: null,
        maxTime: null,
        labelFormat: null,
        labelInterval: null,
        colEls: null,
        slatContainerEl: null,
        slatEls: null,
        nowIndicatorEls: null,
        colCoordCache: null,
        slatCoordCache: null,
        constructor: function() {
            ge.apply(this, arguments), this.processOptions()
        },
        renderDates: function() {
            this.el.html(this.renderHtml()), this.colEls = this.el.find(".fc-day"), this.slatContainerEl = this.el.find(".fc-slats"), this.slatEls = this.slatContainerEl.find("tr"), this.colCoordCache = new ce({
                els: this.colEls,
                isHorizontal: !0
            }), this.slatCoordCache = new ce({
                els: this.slatEls,
                isVertical: !0
            }), this.renderContentSkeleton()
        },
        renderHtml: function() {
            return '<div class="fc-bg"><table>' + this.renderBgTrHtml(0) + '</table></div><div class="fc-slats"><table>' + this.renderSlatRowHtml() + "</table></div>"
        },
        renderSlatRowHtml: function() {
            for (var t, n, i, r = this.view, s = this.isRTL, o = "", l = e.duration(+this.minTime); l < this.maxTime;) t = this.start.clone().time(l), n = ot(_(l, this.labelInterval)), i = '<td class="fc-axis fc-time ' + r.widgetContentClass + '" ' + r.axisStyleAttr() + ">" + (n ? "<span>" + tt(t.format(this.labelFormat)) + "</span>" : "") + "</td>", o += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (n ? "" : ' class="fc-minor"') + ">" + (s ? "" : i) + '<td class="' + r.widgetContentClass + '"/>' + (s ? i : "") + "</tr>", l.add(this.slotDuration);
            return o
        },
        processOptions: function() {
            var n, i = this.view,
                r = i.opt("slotDuration"),
                s = i.opt("snapDuration");
            r = e.duration(r), s = s ? e.duration(s) : r, this.slotDuration = r, this.snapDuration = s, this.snapsPerSlot = r / s, this.minResizeDuration = s, this.minTime = e.duration(i.opt("minTime")), this.maxTime = e.duration(i.opt("maxTime")), n = i.opt("slotLabelFormat"), t.isArray(n) && (n = n[n.length - 1]), this.labelFormat = n || i.opt("smallTimeFormat"), n = i.opt("slotLabelInterval"), this.labelInterval = n ? e.duration(n) : this.computeLabelInterval(r)
        },
        computeLabelInterval: function(t) {
            var n, i, r;
            for (n = Fe.length - 1; n >= 0; n--)
                if (i = e.duration(Fe[n]), r = _(i, t), ot(r) && r > 1) return i;
            return e.duration(t)
        },
        computeEventTimeFormat: function() {
            return this.view.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        prepareHits: function() {
            this.colCoordCache.build(), this.slatCoordCache.build()
        },
        releaseHits: function() {
            this.colCoordCache.clear()
        },
        queryHit: function(t, e) {
            var n = this.snapsPerSlot,
                i = this.colCoordCache,
                r = this.slatCoordCache;
            if (i.isLeftInBounds(t) && r.isTopInBounds(e)) {
                var s = i.getHorizontalIndex(t),
                    o = r.getVerticalIndex(e);
                if (null != s && null != o) {
                    var l = r.getTopOffset(o),
                        a = r.getHeight(o),
                        u = (e - l) / a,
                        c = Math.floor(u * n),
                        d = o * n + c,
                        h = l + c / n * a,
                        f = l + (c + 1) / n * a;
                    return {
                        col: s,
                        snap: d,
                        component: this,
                        left: i.getLeftOffset(s),
                        right: i.getRightOffset(s),
                        top: h,
                        bottom: f
                    }
                }
            }
        },
        getHitSpan: function(t) {
            var e, n = this.getCellDate(0, t.col),
                i = this.computeSnapTime(t.snap);
            return n.time(i), e = n.clone().add(this.snapDuration), {
                start: n,
                end: e
            }
        },
        getHitEl: function(t) {
            return this.colEls.eq(t.col)
        },
        rangeUpdated: function() {
            this.updateDayTable()
        },
        computeSnapTime: function(t) {
            return e.duration(this.minTime + this.snapDuration * t)
        },
        spanToSegs: function(t) {
            var e, n = this.sliceRangeByTimes(t);
            for (e = 0; e < n.length; e++) this.isRTL ? n[e].col = this.daysPerRow - 1 - n[e].dayIndex : n[e].col = n[e].dayIndex;
            return n
        },
        sliceRangeByTimes: function(t) {
            var e, n, i, r, s = [];
            for (n = 0; n < this.daysPerRow; n++) i = this.dayDates[n].clone(), r = {
                start: i.clone().time(this.minTime),
                end: i.clone().time(this.maxTime)
            }, e = F(t, r), e && (e.dayIndex = n, s.push(e));
            return s
        },
        updateSize: function(t) {
            this.slatCoordCache.build(), t && this.updateSegVerticals([].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || []))
        },
        getTotalSlatHeight: function() {
            return this.slatContainerEl.outerHeight()
        },
        computeDateTop: function(t, n) {
            return this.computeTimeTop(e.duration(t - n.clone().stripTime()))
        },
        computeTimeTop: function(t) {
            var e, n, i = this.slatEls.length,
                r = (t - this.minTime) / this.slotDuration;
            return r = Math.max(0, r), r = Math.min(i, r), e = Math.floor(r), e = Math.min(e, i - 1), n = r - e, this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * n
        },
        renderDrag: function(t, e) {
            return e ? this.renderEventLocationHelper(t, e) : void this.renderHighlight(this.eventToSpan(t))
        },
        unrenderDrag: function() {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderEventResize: function(t, e) {
            return this.renderEventLocationHelper(t, e)
        },
        unrenderEventResize: function() {
            this.unrenderHelper()
        },
        renderHelper: function(t, e) {
            return this.renderHelperSegs(this.eventToSegs(t), e)
        },
        unrenderHelper: function() {
            this.unrenderHelperSegs()
        },
        renderBusinessHours: function() {
            this.renderBusinessSegs(this.buildBusinessHourSegs())
        },
        unrenderBusinessHours: function() {
            this.unrenderBusinessSegs()
        },
        getNowIndicatorUnit: function() {
            return "minute"
        },
        renderNowIndicator: function(e) {
            var n, i = this.spanToSegs({
                    start: e,
                    end: e
                }),
                r = this.computeDateTop(e, e),
                s = [];
            for (n = 0; n < i.length; n++) s.push(t('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", r).appendTo(this.colContainerEls.eq(i[n].col))[0]);
            i.length > 0 && s.push(t('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", r).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = t(s)
        },
        unrenderNowIndicator: function() {
            this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
        },
        renderSelection: function(t) {
            this.view.opt("selectHelper") ? this.renderEventLocationHelper(t) : this.renderHighlight(t)
        },
        unrenderSelection: function() {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderHighlight: function(t) {
            this.renderHighlightSegs(this.spanToSegs(t))
        },
        unrenderHighlight: function() {
            this.unrenderHighlightSegs()
        }
    });
    me.mixin({
        colContainerEls: null,
        fgContainerEls: null,
        bgContainerEls: null,
        helperContainerEls: null,
        highlightContainerEls: null,
        businessContainerEls: null,
        fgSegs: null,
        bgSegs: null,
        helperSegs: null,
        highlightSegs: null,
        businessSegs: null,
        renderContentSkeleton: function() {
            var e, n, i = "";
            for (e = 0; e < this.colCnt; e++) i += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
            n = t('<div class="fc-content-skeleton"><table><tr>' + i + "</tr></table></div>"), this.colContainerEls = n.find(".fc-content-col"), this.helperContainerEls = n.find(".fc-helper-container"), this.fgContainerEls = n.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = n.find(".fc-bgevent-container"), this.highlightContainerEls = n.find(".fc-highlight-container"), this.businessContainerEls = n.find(".fc-business-container"), this.bookendCells(n.find("tr")), this.el.append(n)
        },
        renderFgSegs: function(t) {
            return t = this.renderFgSegsIntoContainers(t, this.fgContainerEls), this.fgSegs = t, t
        },
        unrenderFgSegs: function() {
            this.unrenderNamedSegs("fgSegs")
        },
        renderHelperSegs: function(e, n) {
            var i, r, s, o = [];
            for (e = this.renderFgSegsIntoContainers(e, this.helperContainerEls), i = 0; i < e.length; i++) r = e[i], n && n.col === r.col && (s = n.el, r.el.css({
                left: s.css("left"),
                right: s.css("right"),
                "margin-left": s.css("margin-left"),
                "margin-right": s.css("margin-right")
            })), o.push(r.el[0]);
            return this.helperSegs = e, t(o)
        },
        unrenderHelperSegs: function() {
            this.unrenderNamedSegs("helperSegs")
        },
        renderBgSegs: function(t) {
            return t = this.renderFillSegEls("bgEvent", t), this.updateSegVerticals(t), this.attachSegsByCol(this.groupSegsByCol(t), this.bgContainerEls), this.bgSegs = t, t
        },
        unrenderBgSegs: function() {
            this.unrenderNamedSegs("bgSegs")
        },
        renderHighlightSegs: function(t) {
            t = this.renderFillSegEls("highlight", t), this.updateSegVerticals(t), this.attachSegsByCol(this.groupSegsByCol(t), this.highlightContainerEls), this.highlightSegs = t
        },
        unrenderHighlightSegs: function() {
            this.unrenderNamedSegs("highlightSegs")
        },
        renderBusinessSegs: function(t) {
            t = this.renderFillSegEls("businessHours", t), this.updateSegVerticals(t), this.attachSegsByCol(this.groupSegsByCol(t), this.businessContainerEls), this.businessSegs = t
        },
        unrenderBusinessSegs: function() {
            this.unrenderNamedSegs("businessSegs")
        },
        groupSegsByCol: function(t) {
            var e, n = [];
            for (e = 0; e < this.colCnt; e++) n.push([]);
            for (e = 0; e < t.length; e++) n[t[e].col].push(t[e]);
            return n
        },
        attachSegsByCol: function(t, e) {
            var n, i, r;
            for (n = 0; n < this.colCnt; n++)
                for (i = t[n], r = 0; r < i.length; r++) e.eq(n).append(i[r].el)
        },
        unrenderNamedSegs: function(t) {
            var e, n = this[t];
            if (n) {
                for (e = 0; e < n.length; e++) n[e].el.remove();
                this[t] = null
            }
        },
        renderFgSegsIntoContainers: function(t, e) {
            var n, i;
            for (t = this.renderFgSegEls(t), n = this.groupSegsByCol(t), i = 0; i < this.colCnt; i++) this.updateFgSegCoords(n[i]);
            return this.attachSegsByCol(n, e), t
        },
        fgSegHtml: function(t, e) {
            var n, i, r, s = this.view,
                o = t.event,
                l = s.isEventDraggable(o),
                a = !e && t.isStart && s.isEventResizableFromStart(o),
                u = !e && t.isEnd && s.isEventResizableFromEnd(o),
                c = this.getSegClasses(t, l, a || u),
                d = nt(this.getSegSkinCss(t));
            return c.unshift("fc-time-grid-event", "fc-v-event"), s.isMultiDayEvent(o) ? (t.isStart || t.isEnd) && (n = this.getEventTimeText(t), i = this.getEventTimeText(t, "LT"), r = this.getEventTimeText(t, null, !1)) : (n = this.getEventTimeText(o), i = this.getEventTimeText(o, "LT"), r = this.getEventTimeText(o, null, !1)), '<a class="' + c.join(" ") + '"' + (o.url ? ' href="' + tt(o.url) + '"' : "") + (d ? ' style="' + d + '"' : "") + '><div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + tt(r) + '" data-full="' + tt(i) + '"><span>' + tt(n) + "</span></div>" : "") + (o.title ? '<div class="fc-title">' + tt(o.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (u ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        updateSegVerticals: function(t) {
            this.computeSegVerticals(t), this.assignSegVerticals(t)
        },
        computeSegVerticals: function(t) {
            var e, n;
            for (e = 0; e < t.length; e++) n = t[e], n.top = this.computeDateTop(n.start, n.start), n.bottom = this.computeDateTop(n.end, n.start)
        },
        assignSegVerticals: function(t) {
            var e, n;
            for (e = 0; e < t.length; e++) n = t[e], n.el.css(this.generateSegVerticalCss(n))
        },
        generateSegVerticalCss: function(t) {
            return {
                top: t.top,
                bottom: -t.bottom
            }
        },
        updateFgSegCoords: function(t) {
            this.computeSegVerticals(t), this.computeFgSegHorizontals(t), this.assignSegVerticals(t), this.assignFgSegHorizontals(t)
        },
        computeFgSegHorizontals: function(t) {
            var e, n, i;
            if (this.sortEventSegs(t), e = Bt(t), Ft(e), n = e[0]) {
                for (i = 0; i < n.length; i++) Nt(n[i]);
                for (i = 0; i < n.length; i++) this.computeFgSegForwardBack(n[i], 0, 0)
            }
        },
        computeFgSegForwardBack: function(t, e, n) {
            var i, r = t.forwardSegs;
            if (void 0 === t.forwardCoord)
                for (r.length ? (this.sortForwardSegs(r), this.computeFgSegForwardBack(r[0], e + 1, n), t.forwardCoord = r[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), i = 0; i < r.length; i++) this.computeFgSegForwardBack(r[i], 0, t.forwardCoord)
        },
        sortForwardSegs: function(t) {
            t.sort(lt(this, "compareForwardSegs"))
        },
        compareForwardSegs: function(t, e) {
            return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e)
        },
        assignFgSegHorizontals: function(t) {
            var e, n;
            for (e = 0; e < t.length; e++) n = t[e], n.el.css(this.generateFgSegHorizontalCss(n)), n.bottom - n.top < 30 && n.el.addClass("fc-short")
        },
        generateFgSegHorizontalCss: function(t) {
            var e, n, i = this.view.opt("slotEventOverlap"),
                r = t.backwardCoord,
                s = t.forwardCoord,
                o = this.generateSegVerticalCss(t);
            return i && (s = Math.min(1, r + 2 * (s - r))), this.isRTL ? (e = 1 - s, n = r) : (e = r, n = 1 - s), o.zIndex = t.level + 1, o.left = 100 * e + "%", o.right = 100 * n + "%", i && t.forwardPressure && (o[this.isRTL ? "marginLeft" : "marginRight"] = 20), o
        }
    });
    var ye = jt.View = wt.extend(oe, le, {
            type: null,
            name: null,
            title: null,
            calendar: null,
            options: null,
            el: null,
            displaying: null,
            isSkeletonRendered: !1,
            isEventsRendered: !1,
            start: null,
            end: null,
            intervalStart: null,
            intervalEnd: null,
            intervalDuration: null,
            intervalUnit: null,
            isRTL: !1,
            isSelected: !1,
            selectedEvent: null,
            eventOrderSpecs: null,
            widgetHeaderClass: null,
            widgetContentClass: null,
            highlightStateClass: null,
            nextDayThreshold: null,
            isHiddenDayHash: null,
            isNowIndicatorRendered: null,
            initialNowDate: null,
            initialNowQueriedMs: null,
            nowIndicatorTimeoutID: null,
            nowIndicatorIntervalID: null,
            constructor: function(t, n, i, r) {
                this.calendar = t, this.type = this.name = n, this.options = i, this.intervalDuration = r || e.duration(1, "day"), this.nextDayThreshold = e.duration(this.opt("nextDayThreshold")), this.initThemingProps(), this.initHiddenDays(), this.isRTL = this.opt("isRTL"), this.eventOrderSpecs = L(this.opt("eventOrder")), this.initialize()
            },
            initialize: function() {},
            opt: function(t) {
                return this.options[t]
            },
            trigger: function(t, e) {
                var n = this.calendar;
                return n.trigger.apply(n, [t, e || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
            },
            setDate: function(t) {
                this.setRange(this.computeRange(t))
            },
            setRange: function(e) {
                t.extend(this, e), this.updateTitle()
            },
            computeRange: function(t) {
                var e, n, i = A(this.intervalDuration),
                    r = t.clone().startOf(i),
                    s = r.clone().add(this.intervalDuration);
                return /year|month|week|day/.test(i) ? (r.stripTime(), s.stripTime()) : (r.hasTime() || (r = this.calendar.time(0)), s.hasTime() || (s = this.calendar.time(0))), e = r.clone(), e = this.skipHiddenDays(e), n = s.clone(), n = this.skipHiddenDays(n, -1, !0), {
                    intervalUnit: i,
                    intervalStart: r,
                    intervalEnd: s,
                    start: e,
                    end: n
                }
            },
            computePrevDate: function(t) {
                return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1)
            },
            computeNextDate: function(t) {
                return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).add(this.intervalDuration))
            },
            massageCurrentDate: function(t, e) {
                return this.intervalDuration.as("days") <= 1 && this.isHiddenDay(t) && (t = this.skipHiddenDays(t, e), t.startOf("day")), t
            },
            updateTitle: function() {
                this.title = this.computeTitle()
            },
            computeTitle: function() {
                return this.formatRange({
                    start: this.calendar.applyTimezone(this.intervalStart),
                    end: this.calendar.applyTimezone(this.intervalEnd)
                }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
            },
            computeTitleFormat: function() {
                return "year" == this.intervalUnit ? "YYYY" : "month" == this.intervalUnit ? this.opt("monthYearFormat") : this.intervalDuration.as("days") > 1 ? "ll" : "LL"
            },
            formatRange: function(t, e, n) {
                var i = t.end;
                return i.hasTime() || (i = i.clone().subtract(1)), pt(t.start, i, e, n, this.opt("isRTL"))
            },
            getAllDayHtml: function() {
                return this.opt("allDayHtml") || tt(this.opt("allDayText"))
            },
            buildGotoAnchorHtml: function(e, n, i) {
                var r, s, o, l;
                return t.isPlainObject(e) ? (r = e.date, s = e.type, o = e.forceOff) : r = e, r = jt.moment(r), l = {
                    date: r.format("YYYY-MM-DD"),
                    type: s || "day"
                }, "string" == typeof n && (i = n, n = null), n = n ? " " + it(n) : "", i = i || "", !o && this.opt("navLinks") ? "<a" + n + ' data-goto="' + tt(JSON.stringify(l)) + '">' + i + "</a>" : "<span" + n + ">" + i + "</span>"
            },
            setElement: function(t) {
                this.el = t, this.bindGlobalHandlers()
            },
            removeElement: function() {
                this.clear(), this.isSkeletonRendered && (this.unrenderSkeleton(), this.isSkeletonRendered = !1), this.unbindGlobalHandlers(), this.el.remove()
            },
            display: function(t, e) {
                var n = this,
                    i = null;
                return null != e && this.displaying && (i = this.queryScroll()), this.calendar.freezeContentHeight(), ut(this.clear(), function() {
                    return n.displaying = ut(n.displayView(t), function() {
                        null != e ? n.setScroll(e) : n.forceScroll(n.computeInitialScroll(i)), n.calendar.unfreezeContentHeight(), n.triggerRender()
                    })
                })
            },
            clear: function() {
                var e = this,
                    n = this.displaying;
                return n ? ut(n, function() {
                    return e.displaying = null, e.clearEvents(), e.clearView()
                }) : t.when()
            },
            displayView: function(t) {
                this.isSkeletonRendered || (this.renderSkeleton(), this.isSkeletonRendered = !0), t && this.setDate(t), this.render && this.render(), this.renderDates(), this.updateSize(), this.renderBusinessHours(), this.startNowIndicator()
            },
            clearView: function() {
                this.unselect(), this.stopNowIndicator(), this.triggerUnrender(), this.unrenderBusinessHours(), this.unrenderDates(), this.destroy && this.destroy()
            },
            renderSkeleton: function() {},
            unrenderSkeleton: function() {},
            renderDates: function() {},
            unrenderDates: function() {},
            triggerRender: function() {
                this.trigger("viewRender", this, this, this.el)
            },
            triggerUnrender: function() {
                this.trigger("viewDestroy", this, this, this.el)
            },
            bindGlobalHandlers: function() {
                this.listenTo(t(document), "mousedown", this.handleDocumentMousedown), this.listenTo(t(document), "touchstart", this.processUnselect)
            },
            unbindGlobalHandlers: function() {
                this.stopListeningTo(t(document))
            },
            initThemingProps: function() {
                var t = this.opt("theme") ? "ui" : "fc";
                this.widgetHeaderClass = t + "-widget-header", this.widgetContentClass = t + "-widget-content", this.highlightStateClass = t + "-state-highlight"
            },
            renderBusinessHours: function() {},
            unrenderBusinessHours: function() {},
            startNowIndicator: function() {
                var t, n, i, r = this;
                this.opt("nowIndicator") && (t = this.getNowIndicatorUnit(), t && (n = lt(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = +new Date, this.renderNowIndicator(this.initialNowDate), this.isNowIndicatorRendered = !0, i = this.initialNowDate.clone().startOf(t).add(1, t) - this.initialNowDate, this.nowIndicatorTimeoutID = setTimeout(function() {
                    r.nowIndicatorTimeoutID = null, n(), i = +e.duration(1, t), i = Math.max(100, i), r.nowIndicatorIntervalID = setInterval(n, i)
                }, i)))
            },
            updateNowIndicator: function() {
                this.isNowIndicatorRendered && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add(new Date - this.initialNowQueriedMs)))
            },
            stopNowIndicator: function() {
                this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearTimeout(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
            },
            getNowIndicatorUnit: function() {},
            renderNowIndicator: function(t) {},
            unrenderNowIndicator: function() {},
            updateSize: function(t) {
                var e;
                t && (e = this.queryScroll()), this.updateHeight(t), this.updateWidth(t), this.updateNowIndicator(), t && this.setScroll(e)
            },
            updateWidth: function(t) {},
            updateHeight: function(t) {
                var e = this.calendar;
                this.setHeight(e.getSuggestedViewHeight(), e.isHeightAuto())
            },
            setHeight: function(t, e) {},
            computeInitialScroll: function(t) {
                return 0
            },
            queryScroll: function() {},
            setScroll: function(t) {},
            forceScroll: function(t) {
                var e = this;
                this.setScroll(t), setTimeout(function() {
                    e.setScroll(t)
                }, 0)
            },
            displayEvents: function(t) {
                var e = this.queryScroll();
                this.clearEvents(), this.renderEvents(t), this.isEventsRendered = !0, this.setScroll(e), this.triggerEventRender()
            },
            clearEvents: function() {
                var t;
                this.isEventsRendered && (t = this.queryScroll(), this.triggerEventUnrender(), this.destroyEvents && this.destroyEvents(), this.unrenderEvents(), this.setScroll(t), this.isEventsRendered = !1)
            },
            renderEvents: function(t) {},
            unrenderEvents: function() {},
            triggerEventRender: function() {
                this.renderedEventSegEach(function(t) {
                    this.trigger("eventAfterRender", t.event, t.event, t.el)
                }), this.trigger("eventAfterAllRender")
            },
            triggerEventUnrender: function() {
                this.renderedEventSegEach(function(t) {
                    this.trigger("eventDestroy", t.event, t.event, t.el)
                })
            },
            resolveEventEl: function(e, n) {
                var i = this.trigger("eventRender", e, e, n);
                return i === !1 ? n = null : i && i !== !0 && (n = t(i)), n
            },
            showEvent: function(t) {
                this.renderedEventSegEach(function(t) {
                    t.el.css("visibility", "")
                }, t)
            },
            hideEvent: function(t) {
                this.renderedEventSegEach(function(t) {
                    t.el.css("visibility", "hidden")
                }, t)
            },
            renderedEventSegEach: function(t, e) {
                var n, i = this.getEventSegs();
                for (n = 0; n < i.length; n++) e && i[n].event._id !== e._id || i[n].el && t.call(this, i[n])
            },
            getEventSegs: function() {
                return []
            },
            isEventDraggable: function(t) {
                return this.isEventStartEditable(t)
            },
            isEventStartEditable: function(t) {
                return J(t.startEditable, (t.source || {}).startEditable, this.opt("eventStartEditable"), this.isEventGenerallyEditable(t))
            },
            isEventGenerallyEditable: function(t) {
                return J(t.editable, (t.source || {}).editable, this.opt("editable"))
            },
            reportEventDrop: function(t, e, n, i, r) {
                var s = this.calendar,
                    o = s.mutateEvent(t, e, n),
                    l = function() {
                        o.undo(), s.reportEventChange()
                    };
                this.triggerEventDrop(t, o.dateDelta, l, i, r), s.reportEventChange()
            },
            triggerEventDrop: function(t, e, n, i, r) {
                this.trigger("eventDrop", i[0], t, e, n, r, {})
            },
            reportExternalDrop: function(e, n, i, r, s) {
                var o, l, a = e.eventProps;
                a && (o = t.extend({}, a, n), l = this.calendar.renderEvent(o, e.stick)[0]), this.triggerExternalDrop(l, n, i, r, s);
            },
            triggerExternalDrop: function(t, e, n, i, r) {
                this.trigger("drop", n[0], e.start, i, r), t && this.trigger("eventReceive", null, t)
            },
            renderDrag: function(t, e) {},
            unrenderDrag: function() {},
            isEventResizableFromStart: function(t) {
                return this.opt("eventResizableFromStart") && this.isEventResizable(t)
            },
            isEventResizableFromEnd: function(t) {
                return this.isEventResizable(t)
            },
            isEventResizable: function(t) {
                var e = t.source || {};
                return J(t.durationEditable, e.durationEditable, this.opt("eventDurationEditable"), t.editable, e.editable, this.opt("editable"))
            },
            reportEventResize: function(t, e, n, i, r) {
                var s = this.calendar,
                    o = s.mutateEvent(t, e, n),
                    l = function() {
                        o.undo(), s.reportEventChange()
                    };
                this.triggerEventResize(t, o.durationDelta, l, i, r), s.reportEventChange()
            },
            triggerEventResize: function(t, e, n, i, r) {
                this.trigger("eventResize", i[0], t, e, n, r, {})
            },
            select: function(t, e) {
                this.unselect(e), this.renderSelection(t), this.reportSelection(t, e)
            },
            renderSelection: function(t) {},
            reportSelection: function(t, e) {
                this.isSelected = !0, this.triggerSelect(t, e)
            },
            triggerSelect: function(t, e) {
                this.trigger("select", null, this.calendar.applyTimezone(t.start), this.calendar.applyTimezone(t.end), e)
            },
            unselect: function(t) {
                this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.trigger("unselect", null, t))
            },
            unrenderSelection: function() {},
            selectEvent: function(t) {
                this.selectedEvent && this.selectedEvent === t || (this.unselectEvent(), this.renderedEventSegEach(function(t) {
                    t.el.addClass("fc-selected")
                }, t), this.selectedEvent = t)
            },
            unselectEvent: function() {
                this.selectedEvent && (this.renderedEventSegEach(function(t) {
                    t.el.removeClass("fc-selected")
                }, this.selectedEvent), this.selectedEvent = null)
            },
            isEventSelected: function(t) {
                return this.selectedEvent && this.selectedEvent._id === t._id
            },
            handleDocumentMousedown: function(t) {
                S(t) && this.processUnselect(t)
            },
            processUnselect: function(t) {
                this.processRangeUnselect(t), this.processEventUnselect(t)
            },
            processRangeUnselect: function(e) {
                var n;
                this.isSelected && this.opt("unselectAuto") && (n = this.opt("unselectCancel"), n && t(e.target).closest(n).length || this.unselect(e))
            },
            processEventUnselect: function(e) {
                this.selectedEvent && (t(e.target).closest(".fc-selected").length || this.unselectEvent())
            },
            triggerDayClick: function(t, e, n) {
                this.trigger("dayClick", e, this.calendar.applyTimezone(t.start), n)
            },
            initHiddenDays: function() {
                var e, n = this.opt("hiddenDays") || [],
                    i = [],
                    r = 0;
                for (this.opt("weekends") === !1 && n.push(0, 6), e = 0; e < 7; e++)(i[e] = t.inArray(e, n) !== -1) || r++;
                if (!r) throw "invalid hiddenDays";
                this.isHiddenDayHash = i
            },
            isHiddenDay: function(t) {
                return e.isMoment(t) && (t = t.day()), this.isHiddenDayHash[t]
            },
            skipHiddenDays: function(t, e, n) {
                var i = t.clone();
                for (e = e || 1; this.isHiddenDayHash[(i.day() + (n ? e : 0) + 7) % 7];) i.add(e, "days");
                return i
            },
            computeDayRange: function(t) {
                var e, n = t.start.clone().stripTime(),
                    i = t.end,
                    r = null;
                return i && (r = i.clone().stripTime(), e = +i.time(), e && e >= this.nextDayThreshold && r.add(1, "days")), (!i || r <= n) && (r = n.clone().add(1, "days")), {
                    start: n,
                    end: r
                }
            },
            isMultiDayEvent: function(t) {
                var e = this.computeDayRange(t);
                return e.end.diff(e.start, "days") > 1
            }
        }),
        Se = jt.Scroller = wt.extend({
            el: null,
            scrollEl: null,
            overflowX: null,
            overflowY: null,
            constructor: function(t) {
                t = t || {}, this.overflowX = t.overflowX || t.overflow || "auto", this.overflowY = t.overflowY || t.overflow || "auto"
            },
            render: function() {
                this.el = this.renderEl(), this.applyOverflow()
            },
            renderEl: function() {
                return this.scrollEl = t('<div class="fc-scroller"></div>')
            },
            clear: function() {
                this.setHeight("auto"), this.applyOverflow()
            },
            destroy: function() {
                this.el.remove()
            },
            applyOverflow: function() {
                this.scrollEl.css({
                    "overflow-x": this.overflowX,
                    "overflow-y": this.overflowY
                })
            },
            lockOverflow: function(t) {
                var e = this.overflowX,
                    n = this.overflowY;
                t = t || this.getScrollbarWidths(), "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === n && (n = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({
                    "overflow-x": e,
                    "overflow-y": n
                })
            },
            setHeight: function(t) {
                this.scrollEl.height(t)
            },
            getScrollTop: function() {
                return this.scrollEl.scrollTop()
            },
            setScrollTop: function(t) {
                this.scrollEl.scrollTop(t)
            },
            getClientWidth: function() {
                return this.scrollEl[0].clientWidth
            },
            getClientHeight: function() {
                return this.scrollEl[0].clientHeight
            },
            getScrollbarWidths: function() {
                return p(this.scrollEl)
            }
        }),
        we = jt.Calendar = wt.extend({
            dirDefaults: null,
            localeDefaults: null,
            overrides: null,
            dynamicOverrides: null,
            options: null,
            viewSpecCache: null,
            view: null,
            header: null,
            loadingLevel: 0,
            constructor: At,
            initialize: function() {},
            populateOptionsHash: function() {
                var t, e, i, r;
                t = J(this.dynamicOverrides.locale, this.overrides.locale), e = Ee[t], e || (t = we.defaults.locale, e = Ee[t] || {}), i = J(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, we.defaults.isRTL), r = i ? we.rtlDefaults : {}, this.dirDefaults = r, this.localeDefaults = e, this.options = n([we.defaults, r, e, this.overrides, this.dynamicOverrides]), Vt(this.options)
            },
            getViewSpec: function(t) {
                var e = this.viewSpecCache;
                return e[t] || (e[t] = this.buildViewSpec(t))
            },
            getUnitViewSpec: function(e) {
                var n, i, r;
                if (t.inArray(e, Xt) != -1)
                    for (n = this.header.getViewsWithButtons(), t.each(jt.views, function(t) {
                            n.push(t)
                        }), i = 0; i < n.length; i++)
                        if (r = this.getViewSpec(n[i]), r && r.singleUnit == e) return r
            },
            buildViewSpec: function(t) {
                for (var i, r, s, o, l = this.overrides.views || {}, a = [], u = [], c = [], d = t; d;) i = Ut[d], r = l[d], d = null, "function" == typeof i && (i = {
                    class: i
                }), i && (a.unshift(i), u.unshift(i.defaults || {}), s = s || i.duration, d = d || i.type), r && (c.unshift(r), s = s || r.duration, d = d || r.type);
                return i = q(a), i.type = t, !!i.class && (s && (s = e.duration(s), s.valueOf() && (i.duration = s, o = A(s), 1 === s.as(o) && (i.singleUnit = o, c.unshift(l[o] || {})))), i.defaults = n(u), i.overrides = n(c), this.buildViewSpecOptions(i), this.buildViewSpecButtonText(i, t), i)
            },
            buildViewSpecOptions: function(t) {
                t.options = n([we.defaults, t.defaults, this.dirDefaults, this.localeDefaults, this.overrides, t.overrides, this.dynamicOverrides]), Vt(t.options)
            },
            buildViewSpecButtonText: function(t, e) {
                function n(n) {
                    var i = n.buttonText || {};
                    return i[e] || (t.buttonTextKey ? i[t.buttonTextKey] : null) || (t.singleUnit ? i[t.singleUnit] : null)
                }
                t.buttonTextOverride = n(this.dynamicOverrides) || n(this.overrides) || t.overrides.buttonText, t.buttonTextDefault = n(this.localeDefaults) || n(this.dirDefaults) || t.defaults.buttonText || n(we.defaults) || (t.duration ? this.humanizeDuration(t.duration) : null) || e
            },
            instantiateView: function(t) {
                var e = this.getViewSpec(t);
                return new e.class(this, t, e.options, e.duration)
            },
            isValidViewType: function(t) {
                return Boolean(this.getViewSpec(t))
            },
            pushLoading: function() {
                this.loadingLevel++ || this.trigger("loading", null, !0, this.view)
            },
            popLoading: function() {
                --this.loadingLevel || this.trigger("loading", null, !1, this.view)
            },
            buildSelectSpan: function(t, e) {
                var n, i = this.moment(t).stripZone();
                return n = e ? this.moment(e).stripZone() : i.hasTime() ? i.clone().add(this.defaultTimedEventDuration) : i.clone().add(this.defaultAllDayEventDuration), {
                    start: i,
                    end: n
                }
            }
        });
    we.mixin(oe), we.mixin({
        optionHandlers: null,
        bindOption: function(t, e) {
            this.bindOptions([t], e)
        },
        bindOptions: function(t, e) {
            var n, i = {
                func: e,
                names: t
            };
            for (n = 0; n < t.length; n++) this.registerOptionHandlerObj(t[n], i);
            this.triggerOptionHandlerObj(i)
        },
        registerOptionHandlerObj: function(t, e) {
            (this.optionHandlers[t] || (this.optionHandlers[t] = [])).push(e)
        },
        triggerOptionHandlers: function(t) {
            var e, n = this.optionHandlers[t] || [];
            for (e = 0; e < n.length; e++) this.triggerOptionHandlerObj(n[e])
        },
        triggerOptionHandlerObj: function(t) {
            var e, n = t.names,
                i = [];
            for (e = 0; e < n.length; e++) i.push(this.options[n[e]]);
            t.func.apply(this, i)
        }
    }), we.defaults = {
        titleRangeSeparator: " – ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        allDayText: "all-day",
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3
    }, we.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
    }, we.rtlDefaults = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    };
    var Ee = jt.locales = {};
    jt.datepickerLocale = function(e, n, i) {
        var r = Ee[e] || (Ee[e] = {});
        r.isRTL = i.isRTL, r.weekNumberTitle = i.weekHeader, t.each(be, function(t, e) {
            r[t] = e(i)
        }), t.datepicker && (t.datepicker.regional[n] = t.datepicker.regional[e] = i, t.datepicker.regional.en = t.datepicker.regional[""], t.datepicker.setDefaults(i))
    }, jt.locale = function(e, i) {
        var r, s;
        r = Ee[e] || (Ee[e] = {}), i && (r = Ee[e] = n([r, i])), s = Pt(e), t.each(De, function(t, e) {
            null == r[t] && (r[t] = e(s, r))
        }), we.defaults.locale = e
    };
    var be = {
            buttonText: function(t) {
                return {
                    prev: et(t.prevText),
                    next: et(t.nextText),
                    today: et(t.currentText)
                }
            },
            monthYearFormat: function(t) {
                return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
            }
        },
        De = {
            dayOfMonthFormat: function(t, e) {
                var n = t.longDateFormat("l");
                return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? n += " ddd" : n = "ddd " + n, n
            },
            mediumTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "a")
            },
            smallTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
            },
            extraSmallTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
            },
            hourFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
            },
            noMeridiemTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "")
            }
        },
        Ce = {
            smallDayDateFormat: function(t) {
                return t.isRTL ? "D dd" : "dd D"
            },
            weekFormat: function(t) {
                return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w"
            },
            smallWeekFormat: function(t) {
                return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w"
            }
        };
    jt.locale("en", we.englishDefaults), jt.sourceNormalizers = [], jt.sourceFetchers = [];
    var He = {
            dataType: "json",
            cache: !1
        },
        Te = 1;
    we.prototype.normalizeEvent = function(t) {}, we.prototype.spanContainsSpan = function(t, e) {
        var n = t.start.clone().stripZone(),
            i = this.getEventEnd(t).stripZone();
        return e.start >= n && e.end <= i
    }, we.prototype.getPeerEvents = function(t, e) {
        var n, i, r = this.getEventCache(),
            s = [];
        for (n = 0; n < r.length; n++) i = r[n], e && e._id === i._id || s.push(i);
        return s
    }, we.prototype.isEventSpanAllowed = function(t, e) {
        var n = e.source || {},
            i = J(e.constraint, n.constraint, this.options.eventConstraint),
            r = J(e.overlap, n.overlap, this.options.eventOverlap);
        return this.isSpanAllowed(t, i, r, e) && (!this.options.eventAllow || this.options.eventAllow(t, e) !== !1)
    }, we.prototype.isExternalSpanAllowed = function(e, n, i) {
        var r, s;
        return i && (r = t.extend({}, i, n), s = this.expandEvent(this.buildEventFromInput(r))[0]), s ? this.isEventSpanAllowed(e, s) : this.isSelectionSpanAllowed(e)
    }, we.prototype.isSelectionSpanAllowed = function(t) {
        return this.isSpanAllowed(t, this.options.selectConstraint, this.options.selectOverlap) && (!this.options.selectAllow || this.options.selectAllow(t) !== !1)
    }, we.prototype.isSpanAllowed = function(t, e, n, i) {
        var r, s, o, l, a, u;
        if (null != e && (r = this.constraintToEvents(e))) {
            for (s = !1, l = 0; l < r.length; l++)
                if (this.spanContainsSpan(r[l], t)) {
                    s = !0;
                    break
                }
            if (!s) return !1
        }
        for (o = this.getPeerEvents(t, i), l = 0; l < o.length; l++)
            if (a = o[l], this.eventIntersectsRange(a, t)) {
                if (n === !1) return !1;
                if ("function" == typeof n && !n(a, i)) return !1;
                if (i) {
                    if (u = J(a.overlap, (a.source || {}).overlap), u === !1) return !1;
                    if ("function" == typeof u && !u(i, a)) return !1
                }
            }
        return !0
    }, we.prototype.constraintToEvents = function(t) {
        return "businessHours" === t ? this.getCurrentBusinessHourEvents() : "object" == typeof t ? null != t.start ? this.expandEvent(this.buildEventFromInput(t)) : null : this.clientEvents(t)
    }, we.prototype.eventIntersectsRange = function(t, e) {
        var n = t.start.clone().stripZone(),
            i = this.getEventEnd(t).stripZone();
        return e.start < i && e.end > n
    };
    var xe = {
        id: "_fcBusinessHours",
        start: "09:00",
        end: "17:00",
        dow: [1, 2, 3, 4, 5],
        rendering: "inverse-background"
    };
    we.prototype.getCurrentBusinessHourEvents = function(t) {
        return this.computeBusinessHourEvents(t, this.options.businessHours)
    }, we.prototype.computeBusinessHourEvents = function(e, n) {
        return n === !0 ? this.expandBusinessHourEvents(e, [{}]) : t.isPlainObject(n) ? this.expandBusinessHourEvents(e, [n]) : t.isArray(n) ? this.expandBusinessHourEvents(e, n, !0) : []
    }, we.prototype.expandBusinessHourEvents = function(e, n, i) {
        var r, s, o = this.getView(),
            l = [];
        for (r = 0; r < n.length; r++) s = n[r], i && !s.dow || (s = t.extend({}, xe, s), e && (s.start = null, s.end = null), l.push.apply(l, this.expandEvent(this.buildEventFromInput(s), o.start, o.end)));
        return l
    };
    var Re = jt.BasicView = ye.extend({
            scroller: null,
            dayGridClass: ve,
            dayGrid: null,
            dayNumbersVisible: !1,
            colWeekNumbersVisible: !1,
            cellWeekNumbersVisible: !1,
            weekNumberWidth: null,
            headContainerEl: null,
            headRowEl: null,
            initialize: function() {
                this.dayGrid = this.instantiateDayGrid(), this.scroller = new Se({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            instantiateDayGrid: function() {
                var t = this.dayGridClass.extend(Ie);
                return new t(this)
            },
            setRange: function(t) {
                ye.prototype.setRange.call(this, t), this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit), this.dayGrid.setRange(t)
            },
            computeRange: function(t) {
                var e = ye.prototype.computeRange.call(this, t);
                return /year|month/.test(e.intervalUnit) && (e.start.startOf("week"), e.start = this.skipHiddenDays(e.start), e.end.weekday() && (e.end.add(1, "week").startOf("week"), e.end = this.skipHiddenDays(e.end, -1, !0))), e
            },
            renderDates: function() {
                this.dayNumbersVisible = this.dayGrid.rowCnt > 1, this.opt("weekNumbers") && (this.opt("weekNumbersWithinDays") ? (this.cellWeekNumbersVisible = !0, this.colWeekNumbersVisible = !1) : (this.cellWeekNumbersVisible = !1, this.colWeekNumbersVisible = !0)), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.cellWeekNumbersVisible || this.colWeekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scroller.render();
                var e = this.scroller.el.addClass("fc-day-grid-container"),
                    n = t('<div class="fc-day-grid" />').appendTo(e);
                this.el.find(".fc-body > tr > td").append(e), this.dayGrid.setElement(n), this.dayGrid.renderDates(this.hasRigidRows())
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()), this.headRowEl = this.headContainerEl.find(".fc-row")
            },
            unrenderDates: function() {
                this.dayGrid.unrenderDates(), this.dayGrid.removeElement(), this.scroller.destroy()
            },
            renderBusinessHours: function() {
                this.dayGrid.renderBusinessHours()
            },
            unrenderBusinessHours: function() {
                this.dayGrid.unrenderBusinessHours()
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '"></td></tr></tbody></table>'
            },
            weekNumberStyleAttr: function() {
                return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
            },
            hasRigidRows: function() {
                var t = this.opt("eventLimit");
                return t && "number" != typeof t
            },
            updateWidth: function() {
                this.colWeekNumbersVisible && (this.weekNumberWidth = u(this.el.find(".fc-week-number")))
            },
            setHeight: function(t, e) {
                var n, s, o = this.opt("eventLimit");
                this.scroller.clear(), r(this.headRowEl), this.dayGrid.removeSegPopover(), o && "number" == typeof o && this.dayGrid.limitRows(o), n = this.computeScrollerHeight(t), this.setGridHeight(n, e), o && "number" != typeof o && this.dayGrid.limitRows(o), e || (this.scroller.setHeight(n), s = this.scroller.getScrollbarWidths(), (s.left || s.right) && (i(this.headRowEl, s), n = this.computeScrollerHeight(t), this.scroller.setHeight(n)), this.scroller.lockOverflow(s))
            },
            computeScrollerHeight: function(t) {
                return t - c(this.el, this.scroller.el)
            },
            setGridHeight: function(t, e) {
                e ? a(this.dayGrid.rowEls) : l(this.dayGrid.rowEls, t, !0)
            },
            queryScroll: function() {
                return this.scroller.getScrollTop()
            },
            setScroll: function(t) {
                this.scroller.setScrollTop(t)
            },
            prepareHits: function() {
                this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.dayGrid.releaseHits()
            },
            queryHit: function(t, e) {
                return this.dayGrid.queryHit(t, e)
            },
            getHitSpan: function(t) {
                return this.dayGrid.getHitSpan(t)
            },
            getHitEl: function(t) {
                return this.dayGrid.getHitEl(t)
            },
            renderEvents: function(t) {
                this.dayGrid.renderEvents(t), this.updateHeight()
            },
            getEventSegs: function() {
                return this.dayGrid.getEventSegs()
            },
            unrenderEvents: function() {
                this.dayGrid.unrenderEvents()
            },
            renderDrag: function(t, e) {
                return this.dayGrid.renderDrag(t, e)
            },
            unrenderDrag: function() {
                this.dayGrid.unrenderDrag()
            },
            renderSelection: function(t) {
                this.dayGrid.renderSelection(t)
            },
            unrenderSelection: function() {
                this.dayGrid.unrenderSelection()
            }
        }),
        Ie = {
            renderHeadIntroHtml: function() {
                var t = this.view;
                return t.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.widgetHeaderClass + '" ' + t.weekNumberStyleAttr() + "><span>" + tt(t.opt("weekNumberTitle")) + "</span></th>" : ""
            },
            renderNumberIntroHtml: function(t) {
                var e = this.view,
                    n = this.getCellDate(t, 0);
                return e.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({
                    date: n,
                    type: "week",
                    forceOff: 1 === this.colCnt
                }, n.format("w")) + "</td>" : ""
            },
            renderBgIntroHtml: function() {
                var t = this.view;
                return t.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.widgetContentClass + '" ' + t.weekNumberStyleAttr() + "></td>" : ""
            },
            renderIntroHtml: function() {
                var t = this.view;
                return t.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : ""
            }
        },
        ke = jt.MonthView = Re.extend({
            computeRange: function(t) {
                var e, n = Re.prototype.computeRange.call(this, t);
                return this.isFixedWeeks() && (e = Math.ceil(n.end.diff(n.start, "weeks", !0)), n.end.add(6 - e, "weeks")), n
            },
            setGridHeight: function(t, e) {
                e && (t *= this.rowCnt / 6), l(this.dayGrid.rowEls, t, !e)
            },
            isFixedWeeks: function() {
                return this.opt("fixedWeekCount")
            }
        });
    Ut.basic = {
        class: Re
    }, Ut.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    }, Ut.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    }, Ut.month = {
        class: ke,
        duration: {
            months: 1
        },
        defaults: {
            fixedWeekCount: !0
        }
    };
    var Le = jt.AgendaView = ye.extend({
            scroller: null,
            timeGridClass: me,
            timeGrid: null,
            dayGridClass: ve,
            dayGrid: null,
            axisWidth: null,
            headContainerEl: null,
            noScrollRowEls: null,
            bottomRuleEl: null,
            initialize: function() {
                this.timeGrid = this.instantiateTimeGrid(), this.opt("allDaySlot") && (this.dayGrid = this.instantiateDayGrid()), this.scroller = new Se({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            instantiateTimeGrid: function() {
                var t = this.timeGridClass.extend(Me);
                return new t(this)
            },
            instantiateDayGrid: function() {
                var t = this.dayGridClass.extend(ze);
                return new t(this)
            },
            setRange: function(t) {
                ye.prototype.setRange.call(this, t), this.timeGrid.setRange(t), this.dayGrid && this.dayGrid.setRange(t)
            },
            renderDates: function() {
                this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scroller.render();
                var e = this.scroller.el.addClass("fc-time-grid-container"),
                    n = t('<div class="fc-time-grid" />').appendTo(e);
                this.el.find(".fc-body > tr > td").append(e), this.timeGrid.setElement(n), this.timeGrid.renderDates(), this.bottomRuleEl = t('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())
            },
            unrenderDates: function() {
                this.timeGrid.unrenderDates(), this.timeGrid.removeElement(), this.dayGrid && (this.dayGrid.unrenderDates(), this.dayGrid.removeElement()), this.scroller.destroy()
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + this.widgetHeaderClass + '"/>' : "") + "</td></tr></tbody></table>"
            },
            axisStyleAttr: function() {
                return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
            },
            renderBusinessHours: function() {
                this.timeGrid.renderBusinessHours(), this.dayGrid && this.dayGrid.renderBusinessHours()
            },
            unrenderBusinessHours: function() {
                this.timeGrid.unrenderBusinessHours(), this.dayGrid && this.dayGrid.unrenderBusinessHours()
            },
            getNowIndicatorUnit: function() {
                return this.timeGrid.getNowIndicatorUnit()
            },
            renderNowIndicator: function(t) {
                this.timeGrid.renderNowIndicator(t)
            },
            unrenderNowIndicator: function() {
                this.timeGrid.unrenderNowIndicator()
            },
            updateSize: function(t) {
                this.timeGrid.updateSize(t), ye.prototype.updateSize.call(this, t)
            },
            updateWidth: function() {
                this.axisWidth = u(this.el.find(".fc-axis"))
            },
            setHeight: function(t, e) {
                var n, s, o;
                this.bottomRuleEl.hide(), this.scroller.clear(), r(this.noScrollRowEls), this.dayGrid && (this.dayGrid.removeSegPopover(), n = this.opt("eventLimit"), n && "number" != typeof n && (n = Be), n && this.dayGrid.limitRows(n)), e || (s = this.computeScrollerHeight(t), this.scroller.setHeight(s), o = this.scroller.getScrollbarWidths(), (o.left || o.right) && (i(this.noScrollRowEls, o), s = this.computeScrollerHeight(t), this.scroller.setHeight(s)), this.scroller.lockOverflow(o), this.timeGrid.getTotalSlatHeight() < s && this.bottomRuleEl.show())
            },
            computeScrollerHeight: function(t) {
                return t - c(this.el, this.scroller.el)
            },
            computeInitialScroll: function() {
                var t = e.duration(this.opt("scrollTime")),
                    n = this.timeGrid.computeTimeTop(t);
                return n = Math.ceil(n), n && n++, n
            },
            queryScroll: function() {
                return this.scroller.getScrollTop()
            },
            setScroll: function(t) {
                this.scroller.setScrollTop(t)
            },
            prepareHits: function() {
                this.timeGrid.prepareHits(), this.dayGrid && this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.timeGrid.releaseHits(), this.dayGrid && this.dayGrid.releaseHits()
            },
            queryHit: function(t, e) {
                var n = this.timeGrid.queryHit(t, e);
                return !n && this.dayGrid && (n = this.dayGrid.queryHit(t, e)), n
            },
            getHitSpan: function(t) {
                return t.component.getHitSpan(t)
            },
            getHitEl: function(t) {
                return t.component.getHitEl(t)
            },
            renderEvents: function(t) {
                var e, n, i = [],
                    r = [],
                    s = [];
                for (n = 0; n < t.length; n++) t[n].allDay ? i.push(t[n]) : r.push(t[n]);
                e = this.timeGrid.renderEvents(r), this.dayGrid && (s = this.dayGrid.renderEvents(i)), this.updateHeight()
            },
            getEventSegs: function() {
                return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
            },
            unrenderEvents: function() {
                this.timeGrid.unrenderEvents(), this.dayGrid && this.dayGrid.unrenderEvents()
            },
            renderDrag: function(t, e) {
                return t.start.hasTime() ? this.timeGrid.renderDrag(t, e) : this.dayGrid ? this.dayGrid.renderDrag(t, e) : void 0
            },
            unrenderDrag: function() {
                this.timeGrid.unrenderDrag(), this.dayGrid && this.dayGrid.unrenderDrag()
            },
            renderSelection: function(t) {
                t.start.hasTime() || t.end.hasTime() ? this.timeGrid.renderSelection(t) : this.dayGrid && this.dayGrid.renderSelection(t)
            },
            unrenderSelection: function() {
                this.timeGrid.unrenderSelection(), this.dayGrid && this.dayGrid.unrenderSelection()
            }
        }),
        Me = {
            renderHeadIntroHtml: function() {
                var t, e = this.view;
                return e.opt("weekNumbers") ? (t = this.start.format(e.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + e.widgetHeaderClass + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({
                    date: this.start,
                    type: "week",
                    forceOff: this.colCnt > 1
                }, tt(t)) + "</th>") : '<th class="fc-axis ' + e.widgetHeaderClass + '" ' + e.axisStyleAttr() + "></th>"
            },
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.widgetContentClass + '" ' + t.axisStyleAttr() + "></td>"
            },
            renderIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis" ' + t.axisStyleAttr() + "></td>"
            }
        },
        ze = {
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.widgetContentClass + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>"
            },
            renderIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis" ' + t.axisStyleAttr() + "></td>"
            }
        },
        Be = 5,
        Fe = [{
            hours: 1
        }, {
            minutes: 30
        }, {
            minutes: 15
        }, {
            seconds: 30
        }, {
            seconds: 15
        }];
    Ut.agenda = {
        class: Le,
        defaults: {
            allDaySlot: !0,
            slotDuration: "00:30:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            slotEventOverlap: !0
        }
    }, Ut.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    }, Ut.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    };
    var Ne = ye.extend({
            grid: null,
            scroller: null,
            initialize: function() {
                this.grid = new Ge(this), this.scroller = new Se({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            setRange: function(t) {
                ye.prototype.setRange.call(this, t), this.grid.setRange(t)
            },
            renderSkeleton: function() {
                this.el.addClass("fc-list-view " + this.widgetContentClass), this.scroller.render(), this.scroller.el.appendTo(this.el), this.grid.setElement(this.scroller.scrollEl)
            },
            unrenderSkeleton: function() {
                this.scroller.destroy()
            },
            setHeight: function(t, e) {
                this.scroller.setHeight(this.computeScrollerHeight(t))
            },
            computeScrollerHeight: function(t) {
                return t - c(this.el, this.scroller.el)
            },
            renderEvents: function(t) {
                this.grid.renderEvents(t)
            },
            unrenderEvents: function() {
                this.grid.unrenderEvents()
            },
            isEventResizable: function(t) {
                return !1
            },
            isEventDraggable: function(t) {
                return !1
            }
        }),
        Ge = ge.extend({
            segSelector: ".fc-list-item",
            hasDayInteractions: !1,
            spanToSegs: function(t) {
                for (var e, n, i = this.view, r = i.start.clone(), s = []; r < i.end;) e = r.clone().add(1, "day"), n = F(t, {
                    start: r,
                    end: e
                }), n && s.push(n), r = e;
                return s
            },
            computeEventTimeFormat: function() {
                return this.view.opt("mediumTimeFormat")
            },
            handleSegClick: function(e, n) {
                var i;
                ge.prototype.handleSegClick.apply(this, arguments), t(n.target).closest("a[href]").length || (i = e.event.url, i && !n.isDefaultPrevented() && (window.location.href = i))
            },
            renderFgSegs: function(t) {
                return t = this.renderFgSegEls(t), t.length ? this.renderSegList(t) : (this.renderEmptyMessage(), t)
            },
            renderEmptyMessage: function() {
                this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + tt(this.view.opt("noEventsMessage")) + "</div></div></div>")
            },
            renderSegList: function(e) {
                var n, i, r, s = t('<table class="fc-list-table"><tbody/></table>'),
                    o = s.find("tbody");
                for (this.sortEventSegs(e), n = 0; n < e.length; n++) i = e[n], r && i.start.isSame(r, "day") || (r = i.start.clone().stripTime(), o.append(this.dayHeaderHtml(r))), o.append(i.el);
                return this.el.empty().append(s), e
            },
            dayHeaderHtml: function(t) {
                var e = this.view,
                    n = e.opt("listDayFormat"),
                    i = e.opt("listDayAltFormat");
                return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + e.widgetHeaderClass + '" colspan="3">' + (n ? e.buildGotoAnchorHtml(t, {
                    class: "fc-list-heading-main"
                }, tt(t.format(n))) : "") + (i ? e.buildGotoAnchorHtml(t, {
                    class: "fc-list-heading-alt"
                }, tt(t.format(i))) : "") + "</td></tr>"
            },
            fgSegHtml: function(t) {
                var e, n = this.view,
                    i = ["fc-list-item"].concat(this.getSegCustomClasses(t)),
                    r = this.getSegBackgroundColor(t),
                    s = t.event,
                    o = s.url;
                return t.start.hasTime() ? e = tt(this.getEventTimeText(s)) : this.displayEventTime && (e = n.getAllDayHtml()), o && i.push("fc-has-url"), '<tr class="' + i.join(" ") + '">' + (e ? '<td class="fc-list-item-time ' + n.widgetContentClass + '">' + e + "</td>" : "") + '<td class="fc-list-item-marker ' + n.widgetContentClass + '"><span class="fc-event-dot"' + (r ? ' style="background-color:' + r + '"' : "") + '></span></td><td class="fc-list-item-title ' + n.widgetContentClass + '"><a' + (o ? ' href="' + tt(o) + '"' : "") + ">" + tt(t.event.title) + "</a></td></tr>"
            }
        });
    return Ut.list = {
        class: Ne,
        buttonTextKey: "list",
        defaults: {
            buttonText: "list",
            listTime: !0,
            listDayFormat: "LL",
            noEventsMessage: "No events to display"
        }
    }, Ut.listDay = {
        type: "list",
        duration: {
            days: 1
        },
        defaults: {
            listDayFormat: "dddd"
        }
    }, Ut.listWeek = {
        type: "list",
        duration: {
            weeks: 1
        },
        defaults: {
            listDayFormat: "dddd",
            listDayAltFormat: "LL"
        }
    }, Ut.listMonth = {
        type: "list",
        duration: {
            month: 1
        },
        defaults: {
            listDayAltFormat: "dddd"
        }
    }, Ut.listYear = {
        type: "list",
        duration: {
            year: 1
        },
        defaults: {
            listDayAltFormat: "dddd"
        }
    }, jt
});