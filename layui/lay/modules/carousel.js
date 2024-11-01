layui.define("jquery",
function(eIcDeZ) {
    "use strict";
    var efeJeL = layui.$,
    eHejbB = (layui.hint(), layui.device(), {
        config: {},
        set: function(eIcDeZ) {
            var eHejbB = this;
            return eHejbB.config = efeJeL.extend({},
            eHejbB.config, eIcDeZ),
            eHejbB
        },
        on: function(eIcDeZ, efeJeL) {
            return layui.onevent.call(this, dSebfN, eIcDeZ, efeJeL)
        }
    }),
    dSebfN = "carousel",
    cEdLaI = "layui-this",
    fOdjdV = ">*[carousel-item]>*",
    gOgbfQ = "layui-carousel-left",
    cjfKcB = "layui-carousel-right",
    bTbEdY = "layui-carousel-prev",
    fjbLgP = "layui-carousel-next",
    eIcDeZeIcDeZ = "layui-carousel-arrow",
    efeJeLeIcDeZ = "layui-carousel-ind",
    eHejbBeIcDeZ = function(eIcDeZ) {
        var dSebfN = this;
        dSebfN.config = efeJeL.extend({},
        dSebfN.config, eHejbB.config, eIcDeZ),
        dSebfN.render()
    };
    eHejbBeIcDeZ.prototype.config = {
        width: "600px",
        height: "280px",
        full: !1,
        arrow: "hover",
        indicator: "inside",
        autoplay: !0,
        interval: 3e3,
        anim: "",
        trigger: "click",
        index: 0
    },
    eHejbBeIcDeZ.prototype.render = function() {
        var eIcDeZ = this,
        eHejbB = eIcDeZ.config;
        eHejbB.elem = efeJeL(eHejbB.elem),
        eHejbB.elem[0] && (eIcDeZ.elemItem = eHejbB.elem.find(fOdjdV), eHejbB.index < 0 && (eHejbB.index = 0), eHejbB.index >= eIcDeZ.elemItem.length && (eHejbB.index = eIcDeZ.elemItem.length - 1), eHejbB.interval < 800 && (eHejbB.interval = 800), eHejbB.full ? eHejbB.elem.css({
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 9999
        }) : eHejbB.elem.css({
            width: eHejbB.width,
            height: eHejbB.height
        }), eHejbB.elem.attr("lay-anim", eHejbB.anim), eIcDeZ.elemItem.eq(eHejbB.index).addClass(cEdLaI), eIcDeZ.elemItem.length <= 1 || (eIcDeZ.indicator(), eIcDeZ.arrow(), eIcDeZ.autoplay(), eIcDeZ.events()))
    },
    eHejbBeIcDeZ.prototype.reload = function(eIcDeZ) {
        var eHejbB = this;
        clearInterval(eHejbB.timer),
        eHejbB.config = efeJeL.extend({},
        eHejbB.config, eIcDeZ),
        eHejbB.render()
    },
    eHejbBeIcDeZ.prototype.prevIndex = function() {
        var eIcDeZ = this,
        efeJeL = eIcDeZ.config,
        eHejbB = efeJeL.index - 1;
        return eHejbB < 0 && (eHejbB = eIcDeZ.elemItem.length - 1),
        eHejbB
    },
    eHejbBeIcDeZ.prototype.nextIndex = function() {
        var eIcDeZ = this,
        efeJeL = eIcDeZ.config,
        eHejbB = efeJeL.index + 1;
        return eHejbB >= eIcDeZ.elemItem.length && (eHejbB = 0),
        eHejbB
    },
    eHejbBeIcDeZ.prototype.addIndex = function(eIcDeZ) {
        var efeJeL = this,
        eHejbB = efeJeL.config;
        eIcDeZ = eIcDeZ || 1,
        eHejbB.index = eHejbB.index + eIcDeZ,
        eHejbB.index >= efeJeL.elemItem.length && (eHejbB.index = 0)
    },
    eHejbBeIcDeZ.prototype.subIndex = function(eIcDeZ) {
        var efeJeL = this,
        eHejbB = efeJeL.config;
        eIcDeZ = eIcDeZ || 1,
        eHejbB.index = eHejbB.index - eIcDeZ,
        eHejbB.index < 0 && (eHejbB.index = efeJeL.elemItem.length - 1)
    },
    eHejbBeIcDeZ.prototype.autoplay = function() {
        var eIcDeZ = this,
        efeJeL = eIcDeZ.config;
        efeJeL.autoplay && (clearInterval(eIcDeZ.timer), eIcDeZ.timer = setInterval(function() {
            eIcDeZ.slide()
        },
        efeJeL.interval))
    },
    eHejbBeIcDeZ.prototype.arrow = function() {
        var eIcDeZ = this,
        eHejbB = eIcDeZ.config,
        dSebfN = efeJeL(['<button class="layui-icon ' + eIcDeZeIcDeZ + '" lay-type="sub">' + ("updown" === eHejbB.anim ? "&#xe619;": "&#xe603;") + "</button>", '<button class="layui-icon ' + eIcDeZeIcDeZ + '" lay-type="add">' + ("updown" === eHejbB.anim ? "&#xe61a;": "&#xe602;") + "</button>"].join(""));
        eHejbB.elem.attr("lay-arrow", eHejbB.arrow),
        eHejbB.elem.find("." + eIcDeZeIcDeZ)[0] && eHejbB.elem.find("." + eIcDeZeIcDeZ).remove(),
        eHejbB.elem.append(dSebfN),
        dSebfN.on("click",
        function() {
            var eHejbB = efeJeL(this),
            dSebfN = eHejbB.attr("lay-type");
            eIcDeZ.slide(dSebfN)
        })
    },
    eHejbBeIcDeZ.prototype.indicator = function() {
        var eIcDeZ = this,
        eHejbB = eIcDeZ.config,
        dSebfN = eIcDeZ.elemInd = efeJeL(['<div class="' + efeJeLeIcDeZ + '"><ul>',
        function() {
            var efeJeL = [];
            return layui.each(eIcDeZ.elemItem,
            function(eIcDeZ) {
                efeJeL.push("<li" + (eHejbB.index === eIcDeZ ? ' class="layui-this"': "") + "></li>")
            }),
            efeJeL.join("")
        } (), "</ul></div>"].join(""));
        eHejbB.elem.attr("lay-indicator", eHejbB.indicator),
        eHejbB.elem.find("." + efeJeLeIcDeZ)[0] && eHejbB.elem.find("." + efeJeLeIcDeZ).remove(),
        eHejbB.elem.append(dSebfN),
        "updown" === eHejbB.anim && dSebfN.css("margin-top", -(dSebfN.height() / 2)),
        dSebfN.find("li").on("hover" === eHejbB.trigger ? "mouseover": eHejbB.trigger,
        function() {
            var dSebfN = efeJeL(this),
            cEdLaI = dSebfN.index();
            cEdLaI > eHejbB.index ? eIcDeZ.slide("add", cEdLaI - eHejbB.index) : cEdLaI < eHejbB.index && eIcDeZ.slide("sub", eHejbB.index - cEdLaI)
        })
    },
    eHejbBeIcDeZ.prototype.slide = function(eIcDeZ, efeJeL) {
        var eHejbB = this,
        fOdjdV = eHejbB.elemItem,
        eIcDeZeIcDeZ = eHejbB.config,
        efeJeLeIcDeZ = eIcDeZeIcDeZ.index,
        eHejbBeIcDeZ = eIcDeZeIcDeZ.elem.attr("lay-filter");
        eHejbB.haveSlide || ("sub" === eIcDeZ ? (eHejbB.subIndex(efeJeL), fOdjdV.eq(eIcDeZeIcDeZ.index).addClass(bTbEdY), setTimeout(function() {
            fOdjdV.eq(efeJeLeIcDeZ).addClass(cjfKcB),
            fOdjdV.eq(eIcDeZeIcDeZ.index).addClass(cjfKcB)
        },
        50)) : (eHejbB.addIndex(efeJeL), fOdjdV.eq(eIcDeZeIcDeZ.index).addClass(fjbLgP), setTimeout(function() {
            fOdjdV.eq(efeJeLeIcDeZ).addClass(gOgbfQ),
            fOdjdV.eq(eIcDeZeIcDeZ.index).addClass(gOgbfQ)
        },
        50)), setTimeout(function() {
            fOdjdV.removeClass(cEdLaI + " " + bTbEdY + " " + fjbLgP + " " + gOgbfQ + " " + cjfKcB),
            fOdjdV.eq(eIcDeZeIcDeZ.index).addClass(cEdLaI),
            eHejbB.haveSlide = !1
        },
        300), eHejbB.elemInd.find("li").eq(eIcDeZeIcDeZ.index).addClass(cEdLaI).siblings().removeClass(cEdLaI), eHejbB.haveSlide = !0, layui.event.call(this, dSebfN, "change(" + eHejbBeIcDeZ + ")", {
            index: eIcDeZeIcDeZ.index,
            prevIndex: efeJeLeIcDeZ,
            item: fOdjdV.eq(eIcDeZeIcDeZ.index)
        }))
    },
    eHejbBeIcDeZ.prototype.events = function() {
        var eIcDeZ = this,
        efeJeL = eIcDeZ.config;
        efeJeL.elem.data("haveEvents") || (efeJeL.elem.on("mouseenter",
        function() {
            clearInterval(eIcDeZ.timer)
        }).on("mouseleave",
        function() {
            eIcDeZ.autoplay()
        }), efeJeL.elem.data("haveEvents", !0))
    },
    eHejbB.render = function(eIcDeZ) {
        var efeJeL = new eHejbBeIcDeZ(eIcDeZ);
        return efeJeL
    },
    eIcDeZ(dSebfN, eHejbB)
});