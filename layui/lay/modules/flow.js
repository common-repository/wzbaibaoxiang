layui.define("jquery",
function(dSgj) {
    "use strict";
    var gUai = layui.$,
    eYdM = function(dSgj) {},
    dEfg = '<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>';
    eYdM.prototype.load = function(dSgj) {
        var eYdM, gbed, aZgV, dFeW, cNeB = this,
        ebeT = 0;
        dSgj = dSgj || {};
        var eMeh = gUai(dSgj.elem);
        if (eMeh[0]) {
            var eWgV = gUai(dSgj.scrollElem || document),
            aIaj = dSgj.mb || 50,
            cjdI = !("isAuto" in dSgj) || dSgj.isAuto,
            bJde = dSgj.end || "没有更多了",
            gGfD = dSgj.scrollElem && dSgj.scrollElem !== document,
            dSgjdSgj = "<cite>加载更多</cite>",
            gUaidSgj = gUai('<div class="layui-flow-more"><a href="javascript:;">' + dSgjdSgj + "</a></div>");
            eMeh.find(".layui-flow-more")[0] || eMeh.append(gUaidSgj);
            var eYdMdSgj = function(dSgj, dEfg) {
                dSgj = gUai(dSgj),
                gUaidSgj.before(dSgj),
                dEfg = 0 == dEfg || null,
                dEfg ? gUaidSgj.html(bJde) : gUaidSgj.find("a").html(dSgjdSgj),
                gbed = dEfg,
                eYdM = null,
                aZgV && aZgV()
            },
            dEfgdSgj = function() {
                eYdM = !0,
                gUaidSgj.find("a").html(dEfg),
                "function" == typeof dSgj.done && dSgj.done(++ebeT, eYdMdSgj)
            };
            if (dEfgdSgj(), gUaidSgj.find("a").on("click",
            function() {
                gUai(this);
                gbed || eYdM || dEfgdSgj()
            }), dSgj.isLazyimg) var aZgV = cNeB.lazyimg({
                elem: dSgj.elem + " img",
                scrollElem: dSgj.scrollElem
            });
            return cjdI ? (eWgV.on("scroll",
            function() {
                var dSgj = gUai(this),
                dEfg = dSgj.scrollTop();
                dFeW && clearTimeout(dFeW),
                !gbed && eMeh.width() && (dFeW = setTimeout(function() {
                    var gbed = gGfD ? dSgj.height() : gUai(window).height(),
                    aZgV = gGfD ? dSgj.prop("scrollHeight") : document.documentElement.scrollHeight;
                    aZgV - dEfg - gbed <= aIaj && (eYdM || dEfgdSgj())
                },
                100))
            }), cNeB) : cNeB
        }
    },
    eYdM.prototype.lazyimg = function(dSgj) {
        var eYdM, dEfg = this,
        gbed = 0;
        dSgj = dSgj || {};
        var aZgV = gUai(dSgj.scrollElem || document),
        dFeW = dSgj.elem || "img",
        cNeB = dSgj.scrollElem && dSgj.scrollElem !== document,
        ebeT = function(dSgj, gUai) {
            var eYdM = aZgV.scrollTop(),
            dFeW = eYdM + gUai,
            ebeT = cNeB ?
            function() {
                return dSgj.offset().top - aZgV.offset().top + eYdM
            } () : dSgj.offset().top;
            if (ebeT >= eYdM && ebeT <= dFeW && !dSgj.attr("src")) {
                var eWgV = dSgj.attr("lay-src");
                layui.img(eWgV,
                function() {
                    var gUai = dEfg.lazyimg.elem.eq(gbed);
                    dSgj.attr("src", eWgV).removeAttr("lay-src"),
                    gUai[0] && eMeh(gUai),
                    gbed++
                })
            }
        },
        eMeh = function(dSgj, eYdM) {
            var eMeh = cNeB ? (eYdM || aZgV).height() : gUai(window).height(),
            eWgV = aZgV.scrollTop(),
            aIaj = eWgV + eMeh;
            if (dEfg.lazyimg.elem = gUai(dFeW), dSgj) ebeT(dSgj, eMeh);
            else for (var cjdI = 0; cjdI < dEfg.lazyimg.elem.length; cjdI++) {
                var bJde = dEfg.lazyimg.elem.eq(cjdI),
                gGfD = cNeB ?
                function() {
                    return bJde.offset().top - aZgV.offset().top + eWgV
                } () : bJde.offset().top;
                if (ebeT(bJde, eMeh), gbed = cjdI, gGfD > aIaj) break
            }
        };
        if (eMeh(), !eYdM) {
            var eWgV;
            aZgV.on("scroll",
            function() {
                var dSgj = gUai(this);
                eWgV && clearTimeout(eWgV),
                eWgV = setTimeout(function() {
                    eMeh(null, dSgj)
                },
                50)
            }),
            eYdM = !0
        }
        return eMeh
    },
    dSgj("flow", new eYdM)
});