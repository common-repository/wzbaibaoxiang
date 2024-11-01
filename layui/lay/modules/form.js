layui.define("layer",
function(eVd) {
    "use strict";
    var jdR = layui.$,
    fcc = layui.layer,
    abQ = layui.hint(),
    fBa = layui.device(),
    UgD = "form",
    eDd = ".layui-form",
    hdK = "layui-this",
    dTc = "layui-hide",
    NcQ = "layui-disabled",
    dLf = function() {
        this.config = {
            verify: {
                required: [/[\S]+/, "必填项不能为空"],
                phone: [/^1\d{10}$/, "请输入正确的手机号"],
                email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "邮箱格式不正确"],
                url: [/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/, "链接格式不正确"],
                number: function(eVd) {
                    if (!eVd || isNaN(eVd)) return "只能填写数字"
                },
                date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/, "日期格式不正确"],
                identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "请输入正确的身份证号"]
            }
        }
    };
    dLf.prototype.set = function(eVd) {
        var fcc = this;
        return jdR.extend(!0, fcc.config, eVd),
        fcc
    },
    dLf.prototype.verify = function(eVd) {
        var fcc = this;
        return jdR.extend(!0, fcc.config.verify, eVd),
        fcc
    },
    dLf.prototype.on = function(eVd, jdR) {
        return layui.onevent.call(this, UgD, eVd, jdR)
    },
    dLf.prototype.val = function(eVd, fcc) {
        var abQ = this,
        fBa = jdR(eDd + '[lay-filter="' + eVd + '"]');
        return fBa.each(function(eVd, abQ) {
            var fBa = jdR(this);
            layui.each(fcc,
            function(eVd, jdR) {
                var fcc, abQ = fBa.find('[name="' + eVd + '"]');
                abQ[0] && (fcc = abQ[0].type, "checkbox" === fcc ? abQ[0].checked = jdR: "radio" === fcc ? abQ.each(function() {
                    this.value == jdR && (this.checked = !0)
                }) : abQ.val(jdR))
            })
        }),
        aTe.render(null, eVd),
        abQ.getValue(eVd)
    },
    dLf.prototype.getValue = function(eVd, fcc) {
        fcc = fcc || jdR(eDd + '[lay-filter="' + eVd + '"]').eq(0);
        var abQ = {},
        fBa = {},
        UgD = fcc.find("input,select,textarea");
        return layui.each(UgD,
        function(eVd, jdR) {
            if (jdR.name = (jdR.name || "").replace(/^\s*|\s*&/, ""), jdR.name) {
                if (/^.*\[\]$/.test(jdR.name)) {
                    var fcc = jdR.name.match(/^(.*)\[\]$/g)[0];
                    abQ[fcc] = 0 | abQ[fcc],
                    jdR.name = jdR.name.replace(/^(.*)\[\]$/, "$1[" + abQ[fcc]+++"]")
                }
                /^checkbox|radio$/.test(jdR.type) && !jdR.checked || (fBa[jdR.name] = jdR.value)
            }
        }),
        fBa
    },
    dLf.prototype.render = function(eVd, fcc) {
        var fBa = this,
        dLf = jdR(eDd +
        function() {
            return fcc ? '[lay-filter="' + fcc + '"]': ""
        } ()),
        igP = {
            select: function() {
                var eVd, fcc = "请选择",
                abQ = "layui-form-select",
                fBa = "layui-select-title",
                eDd = "layui-select-none",
                igP = "",
                aTe = dLf.find("select"),
                QgE = function(fcc, UgD) {
                    jdR(fcc.target).parent().hasClass(fBa) && !UgD || (jdR("." + abQ).removeClass(abQ + "ed " + abQ + "up"), eVd && igP && eVd.val(igP)),
                    eVd = null
                },
                OgW = function(fcc, dLf, aTe) {
                    var OgW, cLe = jdR(this),
                    SaG = fcc.find("." + fBa),
                    dCg = SaG.find("input"),
                    icU = fcc.find("dl"),
                    eVdeVd = icU.children("dd"),
                    jdReVd = this.selectedIndex;
                    if (!dLf) {
                        var fcceVd = function() {
                            var eVd = fcc.offset().top + fcc.outerHeight() + 5 - bOe.scrollTop(),
                            jdR = icU.outerHeight();
                            jdReVd = cLe[0].selectedIndex,
                            fcc.addClass(abQ + "ed"),
                            eVdeVd.removeClass(dTc),
                            OgW = null,
                            eVdeVd.eq(jdReVd).addClass(hdK).siblings().removeClass(hdK),
                            eVd + jdR > bOe.height() && eVd >= jdR && fcc.addClass(abQ + "up"),
                            fBaeVd()
                        },
                        abQeVd = function(eVd) {
                            fcc.removeClass(abQ + "ed " + abQ + "up"),
                            dCg.blur(),
                            OgW = null,
                            eVd || UgDeVd(dCg.val(),
                            function(eVd) {
                                var fcc = cLe[0].selectedIndex;
                                eVd && (igP = jdR(cLe[0].options[fcc]).html(), 0 === fcc && igP === dCg.attr("placeholder") && (igP = ""), dCg.val(igP || ""))
                            })
                        },
                        fBaeVd = function() {
                            var eVd = icU.children("dd." + hdK);
                            if (eVd[0]) {
                                var jdR = eVd.position().top,
                                fcc = icU.height(),
                                abQ = eVd.height();
                                jdR > fcc && icU.scrollTop(jdR + icU.scrollTop() - fcc + abQ - 5),
                                jdR < 0 && icU.scrollTop(jdR + icU.scrollTop() - 5)
                            }
                        };
                        SaG.on("click",
                        function(eVd) {
                            fcc.hasClass(abQ + "ed") ? abQeVd() : (QgE(eVd, !0), fcceVd()),
                            icU.find("." + eDd).remove()
                        }),
                        SaG.find(".layui-edge").on("click",
                        function() {
                            dCg.focus()
                        }),
                        dCg.on("keyup",
                        function(eVd) {
                            var jdR = eVd.keyCode;
                            9 === jdR && fcceVd()
                        }).on("keydown",
                        function(eVd) {
                            var jdR = eVd.keyCode;
                            9 === jdR && abQeVd();
                            var fcc = function(jdR, abQ) {
                                var fBa, UgD;
                                eVd.preventDefault();
                                var eDd = function() {
                                    var eVd = icU.children("dd." + hdK);
                                    if (icU.children("dd." + dTc)[0] && "next" === jdR) {
                                        var fcc = icU.children("dd:not(." + dTc + ",." + NcQ + ")"),
                                        fBa = fcc.eq(0).index();
                                        if (fBa >= 0 && fBa < eVd.index() && !fcc.hasClass(hdK)) return fcc.eq(0).prev()[0] ? fcc.eq(0).prev() : icU.children(":last")
                                    }
                                    return abQ && abQ[0] ? abQ: OgW && OgW[0] ? OgW: eVd
                                } ();
                                return UgD = eDd[jdR](),
                                fBa = eDd[jdR]("dd:not(." + dTc + ")"),
                                UgD[0] ? (OgW = eDd[jdR](), fBa[0] && !fBa.hasClass(NcQ) || !OgW[0] ? (fBa.addClass(hdK).siblings().removeClass(hdK), void fBaeVd()) : fcc(jdR, OgW)) : OgW = null
                            };
                            38 === jdR && fcc("prev"),
                            40 === jdR && fcc("next"),
                            13 === jdR && (eVd.preventDefault(), icU.children("dd." + hdK).trigger("click"))
                        });
                        var UgDeVd = function(eVd, fcc, abQ) {
                            var fBa = 0;
                            layui.each(eVdeVd,
                            function() {
                                var fcc = jdR(this),
                                UgD = fcc.text(),
                                eDd = UgD.indexOf(eVd) === -1; ("" === eVd || "blur" === abQ ? eVd !== UgD: eDd) && fBa++,
                                "keyup" === abQ && fcc[eDd ? "addClass": "removeClass"](dTc)
                            });
                            var UgD = fBa === eVdeVd.length;
                            return fcc(UgD),
                            UgD
                        },
                        eDdeVd = function(eVd) {
                            var jdR = this.value,
                            fcc = eVd.keyCode;
                            return 9 !== fcc && 13 !== fcc && 37 !== fcc && 38 !== fcc && 39 !== fcc && 40 !== fcc && (UgDeVd(jdR,
                            function(eVd) {
                                eVd ? icU.find("." + eDd)[0] || icU.append('<p class="' + eDd + '">无匹配项</p>') : icU.find("." + eDd).remove()
                            },
                            "keyup"), "" === jdR && icU.find("." + eDd).remove(), void fBaeVd())
                        };
                        aTe && dCg.on("keyup", eDdeVd).on("blur",
                        function(fcc) {
                            var abQ = cLe[0].selectedIndex;
                            eVd = dCg,
                            igP = jdR(cLe[0].options[abQ]).html(),
                            0 === abQ && igP === dCg.attr("placeholder") && (igP = ""),
                            setTimeout(function() {
                                UgDeVd(dCg.val(),
                                function(eVd) {
                                    igP || dCg.val("")
                                },
                                "blur")
                            },
                            200)
                        }),
                        eVdeVd.on("click",
                        function() {
                            var eVd = jdR(this),
                            abQ = eVd.attr("lay-value"),
                            fBa = cLe.attr("lay-filter");
                            return ! eVd.hasClass(NcQ) && (eVd.hasClass("layui-select-tips") ? dCg.val("") : (dCg.val(eVd.text()), eVd.addClass(hdK)), eVd.siblings().removeClass(hdK), cLe.val(abQ).removeClass("layui-form-danger"), layui.event.call(this, UgD, "select(" + fBa + ")", {
                                elem: cLe[0],
                                value: abQ,
                                othis: fcc
                            }), abQeVd(!0), !1)
                        }),
                        fcc.find("dl>dt").on("click",
                        function(eVd) {
                            return ! 1
                        }),
                        jdR(document).off("click", QgE).on("click", QgE)
                    }
                };
                aTe.each(function(eVd, UgD) {
                    var eDd = jdR(this),
                    dTc = eDd.next("." + abQ),
                    dLf = this.disabled,
                    igP = UgD.value,
                    aTe = jdR(UgD.options[UgD.selectedIndex]),
                    QgE = UgD.options[0];
                    if ("string" == typeof eDd.attr("lay-ignore")) return eDd.show();
                    var bOe = "string" == typeof eDd.attr("lay-search"),
                    cLe = QgE ? QgE.value ? fcc: QgE.innerHTML || fcc: fcc,
                    SaG = jdR(['<div class="' + (bOe ? "": "layui-unselect ") + abQ, (dLf ? " layui-select-disabled": "") + '">', '<div class="' + fBa + '">', '<input type="text" placeholder="' + cLe + '" ' + ('value="' + (igP ? aTe.html() : "") + '"') + (!dLf && bOe ? "": " readonly") + ' class="layui-input' + (bOe ? "": " layui-unselect") + (dLf ? " " + NcQ: "") + '">', '<i class="layui-edge"></i></div>', '<dl class="layui-anim layui-anim-upbit' + (eDd.find("optgroup")[0] ? " layui-select-group": "") + '">',
                    function(eVd) {
                        var jdR = [];
                        return layui.each(eVd,
                        function(eVd, abQ) {
                            0 !== eVd || abQ.value ? "optgroup" === abQ.tagName.toLowerCase() ? jdR.push("<dt>" + abQ.label + "</dt>") : jdR.push('<dd lay-value="' + abQ.value + '" class="' + (igP === abQ.value ? hdK: "") + (abQ.disabled ? " " + NcQ: "") + '">' + abQ.innerHTML + "</dd>") : jdR.push('<dd lay-value="" class="layui-select-tips">' + (abQ.innerHTML || fcc) + "</dd>")
                        }),
                        0 === jdR.length && jdR.push('<dd lay-value="" class="' + NcQ + '">没有选项</dd>'),
                        jdR.join("")
                    } (eDd.find("*")) + "</dl>", "</div>"].join(""));
                    dTc[0] && dTc.remove(),
                    eDd.after(SaG),
                    OgW.call(this, SaG, dLf, bOe)
                })
            },
            checkbox: function() {
                var eVd = {
                    checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
                    _switch: ["layui-form-switch", "layui-form-onswitch", "switch"]
                },
                fcc = dLf.find("input[type=checkbox]"),
                abQ = function(eVd, fcc) {
                    var abQ = jdR(this);
                    eVd.on("click",
                    function() {
                        var jdR = abQ.attr("lay-filter"),
                        fBa = (abQ.attr("lay-text") || "").split("|");
                        abQ[0].disabled || (abQ[0].checked ? (abQ[0].checked = !1, eVd.removeClass(fcc[1]).find("em").text(fBa[1])) : (abQ[0].checked = !0, eVd.addClass(fcc[1]).find("em").text(fBa[0])), layui.event.call(abQ[0], UgD, fcc[2] + "(" + jdR + ")", {
                            elem: abQ[0],
                            value: abQ[0].value,
                            othis: eVd
                        }))
                    })
                };
                fcc.each(function(fcc, fBa) {
                    var UgD = jdR(this),
                    eDd = UgD.attr("lay-skin"),
                    hdK = (UgD.attr("lay-text") || "").split("|"),
                    dTc = this.disabled;
                    "switch" === eDd && (eDd = "_" + eDd);
                    var dLf = eVd[eDd] || eVd.checkbox;
                    if ("string" == typeof UgD.attr("lay-ignore")) return UgD.show();
                    var igP = UgD.next("." + dLf[0]),
                    aTe = jdR(['<div class="layui-unselect ' + dLf[0], fBa.checked ? " " + dLf[1] : "", dTc ? " layui-checkbox-disbaled " + NcQ: "", '"', eDd ? ' lay-skin="' + eDd + '"': "", ">",
                    function() {
                        var eVd = fBa.title.replace(/\s/g, ""),
                        jdR = {
                            checkbox: [eVd ? "<span>" + fBa.title + "</span>": "", '<i class="layui-icon layui-icon-ok"></i>'].join(""),
                            _switch: "<em>" + ((fBa.checked ? hdK[0] : hdK[1]) || "") + "</em><i></i>"
                        };
                        return jdR[eDd] || jdR.checkbox
                    } (), "</div>"].join(""));
                    igP[0] && igP.remove(),
                    UgD.after(aTe),
                    abQ.call(this, aTe, dLf)
                })
            },
            radio: function() {
                var eVd = "layui-form-radio",
                fcc = ["&#xe643;", "&#xe63f;"],
                abQ = dLf.find("input[type=radio]"),
                fBa = function(abQ) {
                    var fBa = jdR(this),
                    hdK = "layui-anim-scaleSpring";
                    abQ.on("click",
                    function() {
                        var dTc = fBa[0].name,
                        NcQ = fBa.parents(eDd),
                        dLf = fBa.attr("lay-filter"),
                        igP = NcQ.find("input[name=" + dTc.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
                        fBa[0].disabled || (layui.each(igP,
                        function() {
                            var abQ = jdR(this).next("." + eVd);
                            this.checked = !1,
                            abQ.removeClass(eVd + "ed"),
                            abQ.find(".layui-icon").removeClass(hdK).html(fcc[1])
                        }), fBa[0].checked = !0, abQ.addClass(eVd + "ed"), abQ.find(".layui-icon").addClass(hdK).html(fcc[0]), layui.event.call(fBa[0], UgD, "radio(" + dLf + ")", {
                            elem: fBa[0],
                            value: fBa[0].value,
                            othis: abQ
                        }))
                    })
                };
                abQ.each(function(abQ, UgD) {
                    var eDd = jdR(this),
                    hdK = eDd.next("." + eVd),
                    dTc = this.disabled;
                    if ("string" == typeof eDd.attr("lay-ignore")) return eDd.show();
                    hdK[0] && hdK.remove();
                    var dLf = jdR(['<div class="layui-unselect ' + eVd, UgD.checked ? " " + eVd + "ed": "", (dTc ? " layui-radio-disbaled " + NcQ: "") + '">', '<i class="layui-anim layui-icon">' + fcc[UgD.checked ? 0 : 1] + "</i>", "<div>" +
                    function() {
                        var eVd = UgD.title || "";
                        return "string" == typeof eDd.next().attr("lay-radio") && (eVd = eDd.next().html(), eDd.next().remove()),
                        eVd
                    } () + "</div>", "</div>"].join(""));
                    eDd.after(dLf),
                    fBa.call(this, dLf)
                })
            }
        };
        return eVd ? igP[eVd] ? igP[eVd]() : abQ.error("不支持的" + eVd + "表单渲染") : layui.each(igP,
        function(eVd, jdR) {
            jdR()
        }),
        fBa
    };
    var igP = function() {
        var eVd = null,
        abQ = aTe.config.verify,
        hdK = "layui-form-danger",
        dTc = {},
        NcQ = jdR(this),
        dLf = NcQ.parents(eDd),
        igP = dLf.find("*[lay-verify]"),
        QgE = NcQ.parents("form")[0],
        bOe = NcQ.attr("lay-filter");
        return layui.each(igP,
        function(UgD, eDd) {
            var dTc = jdR(this),
            NcQ = dTc.attr("lay-verify").split("|"),
            dLf = dTc.attr("lay-verType"),
            igP = dTc.val();
            if (dTc.removeClass(hdK), layui.each(NcQ,
            function(jdR, UgD) {
                var NcQ, aTe = "",
                QgE = "function" == typeof abQ[UgD];
                if (abQ[UgD]) {
                    var NcQ = QgE ? aTe = abQ[UgD](igP, eDd) : !abQ[UgD][0].test(igP);
                    if (aTe = aTe || abQ[UgD][1], "required" === UgD && (aTe = dTc.attr("lay-reqText") || aTe), NcQ) return "tips" === dLf ? fcc.tips(aTe,
                    function() {
                        return "string" == typeof dTc.attr("lay-ignore") || "select" !== eDd.tagName.toLowerCase() && !/^checkbox|radio$/.test(eDd.type) ? dTc: dTc.next()
                    } (), {
                        tips: 1
                    }) : "alert" === dLf ? fcc.alert(aTe, {
                        title: "提示",
                        shadeClose: !0
                    }) : fcc.msg(aTe, {
                        icon: 5,
                        shift: 6
                    }),
                    fBa.android || fBa.ios || setTimeout(function() {
                        eDd.focus()
                    },
                    7),
                    dTc.addClass(hdK),
                    eVd = !0
                }
            }), eVd) return eVd
        }),
        !eVd && (dTc = aTe.getValue(null, dLf), layui.event.call(this, UgD, "submit(" + bOe + ")", {
            elem: this,
            form: QgE,
            field: dTc
        }))
    },
    aTe = new dLf,
    QgE = jdR(document),
    bOe = jdR(window);
    aTe.render(),
    QgE.on("reset", eDd,
    function() {
        var eVd = jdR(this).attr("lay-filter");
        setTimeout(function() {
            aTe.render(null, eVd)
        },
        50)
    }),
    QgE.on("submit", eDd, igP).on("click", "*[lay-submit]", igP),
    eVd(UgD, aTe)
});