!function(t) {
    "use strict";
    var s = function(s, e) {
        this.el = t(s),
        this.options = t.extend({}, t.fn.typed.defaults, e),
        this.baseText = void 0 !== this.options.baseText ? this.options.baseText : this.el.text() || this.el.attr("placeholder") || "",
        this.replaceBaseText = this.options.replaceBaseText,
        this.typeSpeed = this.options.typeSpeed,
        this.startDelay = this.options.startDelay,
        this.backSpeed = this.options.backSpeed,
        this.backDelay = this.options.backDelay,
        this.strings = this.options.strings,
        this.strPos = this.replaceBaseText ? this.baseText.length : 0,
        this.arrayPos = 0,
        this.stopNum = 0,
        this.loop = this.options.loop,
        this.loopCount = this.options.loopCount,
        this.curLoop = 0,
        this.stop = !1,
        this.showCursor = !this.isInput && this.options.showCursor,
        this.cursorChar = this.options.cursorChar,
        this.isInput = this.el.is("input"),
        this.attr = this.options.attr || (this.isInput ? "placeholder" : null),
        this.build()
    };
    s.prototype = {
        constructor: s,
        init: function() {
            var t = this;
            this.replaceBaseText && this.strings.unshift(t.baseText),
            t.timeout = setTimeout(function() {
                var s = 0 === t.arrayPos && t.replaceBaseText ? t.baseText : t.strings[t.arrayPos];
                t.typewrite(s, t.strPos)
            }, t.startDelay)
        },
        build: function() {
            !0 === this.showCursor && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"),
            this.el.after(this.cursor)),
            this.init()
        },
        typewrite: function(t, s) {
            if (!0 !== this.stop) {
                var e = Math.round(70 * Math.random()) + this.typeSpeed
                  , i = this;
                i.timeout = setTimeout(function() {
                    var e = 0
                      , o = t.substr(s);
                    if ("^" === o.charAt(0)) {
                        var r = 1;
                        /^\^\d+/.test(o) && (o = /\d+/.exec(o)[0],
                        r += o.length,
                        e = parseInt(o)),
                        t = t.substring(0, s) + t.substring(s + r)
                    }
                    i.timeout = setTimeout(function() {
                        if (s === t.length) {
                            if (i.options.onStringTyped(i.arrayPos),
                            i.arrayPos === i.strings.length - 1 && (i.options.callback(),
                            i.curLoop++,
                            !1 === i.loop || i.curLoop === i.loopCount))
                                return;
                            i.timeout = setTimeout(function() {
                                i.backspace(t, s)
                            }, i.backDelay)
                        } else {
                            0 === s && i.options.preStringTyped(i.arrayPos);
                            var e = t.substr(0, s + 1)
                              , o = i.replaceBaseText ? e : i.baseText + e;
                            i.attr ? i.el.attr(i.attr, o) : i.el.text(o),
                            s++,
                            i.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function(t, s) {
            if (!0 !== this.stop) {
                var e = Math.round(70 * Math.random()) + this.backSpeed
                  , i = this;
                i.timeout = setTimeout(function() {
                    var e = t.substr(0, s + 1)
                      , o = i.replaceBaseText ? e : i.baseText + e;
                    i.attr ? i.el.attr(i.attr, o) : i.el.text(o),
                    s > i.stopNum ? (s--,
                    i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++,
                    i.arrayPos === i.strings.length ? (i.arrayPos = 0,
                    i.init()) : i.typewrite(i.strings[i.arrayPos], s))
                }, e)
            }
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            var s = this.el.attr("id");
            this.el.after('<span id="' + s + '"/>'),
            this.el.remove(),
            this.cursor.remove(),
            t.options.resetCallback()
        }
    },
    t.fn.typed = function(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("typed")
              , r = "object" == typeof e && e;
            o || i.data("typed", o = new s(this,r)),
            "string" == typeof e && o[e]()
        })
    }
    ,
    t.fn.typed.defaults = {
        replaceBaseText: !1,
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery);
