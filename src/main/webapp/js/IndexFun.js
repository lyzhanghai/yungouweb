$(document)
		.ready(
				function() {
					var a = "http://skin.1yyg.com";
					var g = "http://goodsimg.1yyg.com/goodspic/pic-200-200/";
					var d = function() {
						$.fn.showSlide = function(V) {
							var M = {
								time : 4000,
								speed : 50
							};
							var H = $(this);
							var Q = H.find("li");
							if (Q.length <= 1) {
								return
							}
							var G = $.extend(M, V);
							var J = null;
							var N = 0;
							var P = true;
							var I = $("#handle_box");
							var K = $("#ctrl_prev");
							var U = $("#ctrl_next");
							var R = Q.eq(0).width();
							I.empty();
							Q
									.each(function(W) {
										I
												.append('<li><a href="javascript:;"></a></li>')
									});
							H.append(Q.eq(0).clone());
							H.prepend(Q.eq(Q.length - 1).clone());
							var O = I.children("li");
							O.eq(0).children("a").addClass("hover");
							O.mouseover(function(W) {
								W.preventDefault();
								N = $(this).index();
								L()
							});
							H.css({
								width : R * H.find("li").length
							});
							H.find("li").css("float", "left");
							H.css("margin-left", -1 * R);
							H.find("li").eq(1).show(0);
							var S = function(W) {
								W.hover(function() {
									if (J) {
										clearInterval(J)
									}
								}, function() {
									J = setInterval(T, G.time)
								})
							};
							S(H);
							H.parent().parent().parent().hover(function() {
								K.show();
								U.show()
							}, function() {
								K.hide();
								U.hide()
							});
							S(K);
							K.bind("click", function(W) {
								if (!P) {
									return
								}
								P = false;
								W.preventDefault();
								N--;
								L()
							});
							S(U);
							U.bind("click", function(W) {
								if (!P) {
									return
								}
								P = false;
								W.preventDefault();
								N++;
								L()
							});
							J = setInterval(T, G.time);
							function T() {
								N < Q.length ? N++ : N = 0;
								L()
							}
							function L() {
								var Y = Q.eq(0).width();
								var Z = Q.eq(0).height();
								var W = 0;
								if (N == Q.length) {
									W = 0
								} else {
									if (N == -1) {
										W = Q.length - 1
									} else {
										W = N
									}
								}
								O.eq(W).children("a").addClass("hover");
								O.eq(W).siblings().children("a").removeClass(
										"hover");
								if (N == Q.length) {
									var X = -1 * Y * (N + 1);
									H.stop(true, false).animate({
										"margin-left" : X
									}, G.speed, function() {
										H.css("margin-left", -1 * Y);
										P = true
									});
									N = 0
								} else {
									if (N == -1) {
										var X = 0;
										H.stop(true, false).animate(
												{
													"margin-left" : X
												},
												G.speed,
												function() {
													H.css("margin-left", -1 * Y
															* Q.length);
													P = true
												});
										N = Q.length - 1
									} else {
										H.stop(true, false).animate({
											"margin-left" : -1 * Y * (N + 1)
										}, G.speed, function() {
											P = true
										})
									}
								}
							}
						};
						var j = function(G) {
							if (G && G.stopPropagation) {
								G.stopPropagation()
							} else {
								window.event.cancelBubble = true
							}
						};
						var p = function(G) {
							$.PageDialog('<div class="mAltFail"><s></s>' + G
									+ "</div>", {
								W : 175,
								H : 60,
								close : false,
								autoClose : true,
								submit : function() {
									location.reload()
								}
							})
						};
						var E = function(G) {
							$.PageDialog('<div class="mAltFail"><s></s>' + G
									+ "</div>", {
								W : 210,
								H : 60,
								close : false,
								autoClose : true
							})
						};
						$.fn.addShopCart = function(K, I, J, M, H) {
							var G = "num=" + I + "&codeID=" + J;
							var L = $(this);
							GetJPData(
									"http://cart.1yyg.com",
									"shopCartNew",
									G,
									function(N) {
										if (N.code == 0) {
											_IsCartChanged = true;
											if (K == 1) {
												showParabola(L, I, M, H)
											} else {
												location.href = "http://cart.1yyg.com/CartList.do"
											}
										} else {
											if (N.code == 1) {
												p("商品已被抢光了！");
												i()
											} else {
												if (N.code == 3) {
													E("您已参与人次已达上限！")
												} else {
													p("商品添加失败！")
												}
											}
										}
									})
						};
						var B = function() {
							var H = "getbysortid";
							var G = $("#topLogoAd");
							GetJPData(
									"http://poster.1yyg.com",
									H,
									"ID=3",
									function(J) {
										if (J.state == 0) {
											var I = J.listItems[0];
											if (I.type == 0) {
												G
														.html('<a href="'
																+ I.url
																+ '" class="u-top-ad" target="_blank" title="'
																+ I.alt
																+ '"><img width="'
																+ I.width
																+ '" height="'
																+ I.height
																+ '" src="'
																+ I.src
																+ '" /></a>')
											} else {
												G
														.html('<embed src="'
																+ I.src
																+ '" wmode="Transparent" width="'
																+ I.width
																+ '" height="'
																+ I.height
																+ '" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?p1_prod_version=shockwaveflash" type="application/x-shockwave-flash"></embed>')
											}
										}
									});
							GetJPData(
									"http://poster.1yyg.com",
									H,
									"ID=2",
									function(K) {
										var L = "";
										if (K.state == 0) {
											var J = K.listItems;
											for (var I = 0; I < J.length; I++) {
												if (J[I].type == 1) {
													L += '<li><embed src="'
															+ J[I].src
															+ '" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?p1_prod_version=shockwaveflash" type="application/x-shockwave-flash" ';
													if (transparent) {
														L += ' wmode="Transparent"'
													}
													L += ' width="'
															+ J[I].width
															+ '" height="'
															+ J[I].height
															+ '"></embed></li>'
												} else {
													L += '<li><a href="'
															+ J[I].url
															+ '" target="_blank"><img src="'
															+ J[I].src
															+ '" alt="'
															+ J[I].alt
																	.reAjaxStr()
															+ '" width="'
															+ J[I].width
															+ '" height="'
															+ J[I].height
															+ '" /></a></li>'
												}
											}
										}
										$("#slideImg").html(L).showSlide({
											time : 4000,
											speed : 500
										})
									})
						};
						B();
						var h = function() {
							var L = $("#div_guide");
							var N = $("#guide_pre");
							var I = $("#guide_next");
							var R = $("#ul_guide").children("li");
							var O = $("#what_1yyg");
							var K = 0;
							var Q = 0;
							var J = false;
							var S = function() {
								L.show();
								if (R.length <= 1) {
									N.hide();
									I.hide()
								} else {
									if (Q <= 0) {
										Q = 0;
										N.hide();
										I.show()
									} else {
										if (Q >= (R.length - 1)) {
											Q = R.length - 1;
											N.show();
											I.hide()
										} else {
											N.show();
											I.show()
										}
									}
								}
								R.eq(Q).hide().fadeToggle();
								R.eq(Q).siblings().hide()
							};
							var T = function() {
								L.hide();
								N.hide();
								I.show();
								R.eq(Q).show();
								R.eq(Q).siblings().hide();
								W = 0;
								if (U != null) {
									clearInterval(U)
								}
							};
							var P = function() {
								Q++;
								S()
							};
							I.bind("click", function() {
								P()
							});
							N.bind("click", function() {
								Q--;
								S()
							});
							var M = function() {
								if (J) {
									return
								}
								J = true;
								var X = L;
								X.css({
									left : X.width()
								}).show();
								X.animate({
									left : 0
								}, {
									queue : false,
									duration : 500,
									complete : function() {
										if (R.length <= 1) {
											N.hide();
											I.hide()
										} else {
											N.hide();
											I.show()
										}
										U = setInterval(H, 1000);
										K = 1
									}
								})
							};
							var G = function() {
								if (!J) {
									return
								}
								J = false;
								var X = L;
								X.animate({
									left : X.width()
								}, {
									queue : false,
									duration : 500,
									complete : function() {
										Q = 0;
										T();
										K = 0
									}
								})
							};
							$("#guide_close").bind("click", function() {
								G()
							});
							R.each(function(X) {
								X = X + 1;
								if (X > 1) {
									$(this).hide()
								}
								if (X < R.length) {
									$(this).children("a").bind("click", P)
								} else {
									$(this).children("a").bind("click", G)
								}
							});
							var W = 0;
							var V = 60;
							var U = null;
							var H = function() {
								W++;
								if (W == V) {
									G()
								}
							};
							L.hover(function() {
								W = 0;
								if (U != null) {
									clearInterval(U)
								}
							}, function() {
								U = setInterval(H, 1000)
							});
							O.bind("click", function() {
								if (K == 0) {
									M()
								} else {
									G()
								}
							})
						};
						h();
						var u = function() {
							var I = $("#ul_Lottery");
							var G = 5;
							var J = false;
							var L = 0;
							var H = null;
							var K = function() {
								GetJPData("http://api.1yyg.com",
										"GetStartRaffleAllList", "time=" + L,
										function(N) {
											if (N.errorCode == 0) {
												M(N, I)
											}
											if (H == null) {
												H = setInterval(K, 5000)
											}
										});
								var M = function(O, P) {
									L = O.maxSeconds;
									var N = function(U, X) {
										var Q = U.length > G ? G : U.length;
										for (var S = Q - 1; S >= 0; S--) {
											var T = U[S];
											if (X.children("li[id='" + T.codeID
													+ "']").length <= 0) {
												var R = '<li id="' + T.codeID
														+ '" class="current">';
												R += '<dl class="m-in-progress">';
												R += '<dt><a href="product/'
														+ T.codeID
														+ '.html" target="_blank" title="'
														+ T.goodsSName + '">';
												R += '<img alt="'
														+ T.goodsSName
														+ '" src="' + g
														+ T.goodsPic
														+ '" /></a></dt>';
												R += '<dd class="u-name"><a href="product/'
														+ T.codeID
														+ '.html" title="(第'
														+ T.period
														+ "云)"
														+ T.goodsSName
														+ '" >(第'
														+ T.period
														+ "云)"
														+ T.goodsSName
														+ "</a></dd>";
												R += '<dd class="gray">价值：￥'
														+ formatFloat(T.price)
														+ "</dd>";
												R += '<dd class="u-time" id="dd_time"><em>揭晓倒计时</em><span><b>00</b> : <b>00</b> : <b><i>0</i><i>0</i></b></span></dd>';
												R += "</dl>";
												R += "<s class='transparent-png'></s>";
												R += "</li>";
												var V = $(R);
												X.children("li:last").remove();
												X.prepend(V);
												var W = X.children("li:last");
												if (W.attr("class") == "current") {
													W.addClass("current2")
												} else {
													W.addClass("col5")
												}
												V.StartTimeOut(T.codeID,
														parseInt(T.seconds))
											}
										}
									};
									if (J) {
										N(O.listItems, P)
									} else {
										Base
												.getScript(
														a
																+ "/JS/indexLotteryFun.js?v=150612",
														function() {
															J = true;
															N(O.listItems, P)
														})
									}
								}
							};
							K()
						};
						u();
						var D = true;
						$.fn.showGoodsBuyCount = function(K, I, G) {
							var H = $(this);
							var J = H.children("div.u_buyCount");
							H
									.hover(
											function() {
												if (!D) {
													return
												}
												var L = J.attr("codeid");
												if (J.html() == "") {
													GetJPData(
															"http://api.1yyg.com",
															"getBuyCount",
															"codeID=" + L,
															function(N) {
																if (N.code == 0) {
																	var M = parseInt(H
																			.width())
																			- G;
																	J
																			.css(
																					{
																						width : M
																								+ "px",
																						left : I
																								+ "px"
																					})
																			.html(
																					"<p></p><h3>本云您已参与<em>"
																							+ N.count
																							+ "</em>人次</h3>")
																			.show();
																	if (H
																			.hasClass(K)) {
																		J
																				.show()
																	}
																} else {
																	if (N.code == -10) {
																		D = false
																	} else {
																		J
																				.hide()
																				.html(
																						"&nbsp;")
																	}
																}
															})
												} else {
													if (J.html() != "&nbsp;") {
														J.show()
													}
												}
											}, function() {
												J.hide()
											})
						};
						var l = function(J) {
							var L = parseInt(J.codeSales);
							var K = parseInt(J.codeQuantity);
							var H = parseInt(K - L);
							var G = formatFloat((L * 100) / K);
							G = L > 0 && G < 1 ? 1 : G;
							var I = '<li class="g-progress"><dl class="m-progress"><dt title="已完成'
									+ G
									+ '%"><b style="width:'
									+ G
									+ '%;"></b></dt><dd><span class="orange fl"><em>'
									+ L
									+ '</em>已参与</span><span class="gray6 fl"><em>'
									+ K
									+ '</em>总需人次</span><span class="blue fr"><em>'
									+ H + "</em>剩余</span></dd></dl></li>";
							return I
						};
						var y = function() {
							var I = $("#divHotGoodsList");
							var H = 8;
							GetJPData("http://api.1yyg.com", "getRecGoodsList",
									"goodsLabel=12&quantity=8", function(J) {
										if (J.code == 0) {
											G(J, I, H)
										}
									});
							var G = function(N, K, T) {
								var M = N.listItems;
								K.empty();
								var R = M.length > T ? T : M.length;
								var P = $(window).width() < 1190;
								for (var O = 0; O < R; O++) {
									var J = "(第" + M[O].codePeriod + "云)&nbsp;"
											+ M[O].goodsName;
									var L = '<div class="g-hotL-list" '
											+ (O > 5 && P ? 'style="display:none;'
													: "")
											+ '><div class="g-hotL-con"><ul><li class="g-hot-pic"><a href="products/'
											+ M[O].goodsID
											+ '.html" target="_blank" title="'
											+ J
											+ '"><img alt="'
											+ J
											+ '" src="'
											+ g
											+ M[O].goodsPic
											+ '" /></a></li><li class="g-hot-name"><a href="products/'
											+ M[O].goodsID
											+ '.html" target="_blank" title="'
											+ J
											+ '">'
											+ J
											+ '</a></li><li class="gray">价值：￥'
											+ formatFloat(M[O].codePrice)
											+ "</li>"
											+ l(M[O])
											+ '<li><a href="products/'
											+ M[O].goodsID
											+ '.html" class="u-imm" target="_blank" title="立即1元云购">立即1元云购</a></li></ul></div><div class="u_buyCount" style="top:169px;" codeid="'
											+ M[O].codeID + '"></div></div>';
									var Q = $(L);
									Q.hover(function() {
										$(this).addClass("g-hotL-hover")
									}, function() {
										$(this).removeClass("g-hotL-hover")
									});
									K.append(Q)
								}
								var S = K.children("div").length;
								for (var O = 0; O < (8 - S); O++) {
									K
											.append('<div class="g-hotL-list" '
													+ (O > 5 && P ? 'style="display:none;"'
															: "")
													+ '><div class="g-hotL-con"></div></div>')
								}
								$(window).resize(function() {
									if ($(window).width() <= 1170) {
										K.children("div:gt(5)").hide()
									} else {
										K.children("div").show()
									}
								})
							}
						};
						var z = function() {
							var O = $("#UserBuyNewList");
							var P = O.children("li").length;
							var N = $("#hidBuyID").val();
							var H = 0;
							var I = 14;
							var J = 7;
							var G = 0;
							var M = function() {
								GetJPData(
										"http://api.1yyg.com",
										"GetUserBuyNewList",
										"buyID=" + N,
										function(U) {
											if (U.code == 0) {
												var T = U.listItems;
												var V = O.children("li").length
														- J;
												var Q = T.length > V ? V
														: T.length;
												for (var S = (Q - 1); S >= 0; S--) {
													var R = "<li>";
													R += '<span class="fl"><a href="http://u.1yyg.com/'
															+ T[S].userWeb
															+ '" target="_blank" title="'
															+ T[S].userName
															+ '">';
													R += '<img alt="'
															+ T[S].userName
															+ '"  width="40" height="40" src="http://faceimg.1yyg.com/UserFace/'
															+ T[S].userPhoto
															+ "\" /><i class='transparent-png'></i></a></span>";
													R += "<p>";
													R += '<a target="_blank" href="http://u.1yyg.com/'
															+ T[S].userWeb
															+ '" title="'
															+ T[S].userName
															+ '" class="blue">'
															+ T[S].userName
															+ "</a><br />";
													R += '<a target="_blank" href="products/'
															+ T[S].goodsID
															+ '.html" target="_blank" title="'
															+ T[S].goodsName
															+ '" class="u-ongoing">'
															+ T[S].goodsName
															+ "</a>";
													R += "</p>";
													R += "</li>";
													if (P >= I) {
														O.children("li").eq(
																J + 1).remove();
														P--
													}
													O.append(R);
													P++;
													if (S == 0) {
														N = T[0].buyID
													}
												}
											}
										})
							};
							var L = function() {
								if (G >= 5) {
									G = 0;
									M()
								} else {
									G++
								}
								var R = O.find("li:last");
								var Q = 89;
								O.prepend(R).css("marginTop", "-" + Q + "px");
								O.animate({
									marginTop : "0px"
								}, 800)
							};
							var K = setInterval(L, 2000);
							O.hover(function() {
								clearInterval(K);
								K = null
							}, function() {
								K = setInterval(L, 2000)
							})
						};
						var s = false;
						var i = function() {
							var H = $("#divSoonGoodsList");
							var I = 24;
							var J = function() {
								return "sortID=0&brandID=0&orderFlag=10&FIdx=1&EIdx="
										+ I + "&isCount=0"
							};
							GetJPData(
									"http://api.1yyg.com",
									"getGoodsList",
									J(),
									function(K) {
										if (K.Code == 0) {
											if (s) {
												G(K, H, I)
											} else {
												Base
														.getScript(
																a
																		+ "/JS/Parabola.js?v=150129",
																function() {
																	s = true;
																	G(K, H, I)
																})
											}
										}
									});
							var G = function(R, M, V) {
								var P = R.Data.Tables.Table1.Rows;
								M.empty();
								var U = P.length > V ? V : P.length;
								for (var S = 0; S < U; S++) {
									var L = "(第" + P[S].codePeriod + "云)&nbsp;"
											+ P[S].goodsSName;
									var K = parseInt(parseInt(P[S].codeQuantity)
											- parseInt(P[S].codeSales));
									var Q = P[S].goodsTag;
									var N = '<div class="soon-list-con" idx="'
											+ (S + 1)
											+ '"><div class="soon-list"><ul><li class="g-soon-pic"><a href="products/'
											+ P[S].goodsID
											+ '.html" target="_blank" title="'
											+ L
											+ '"><img id="img_'
											+ P[S].codeID
											+ '" alt="'
											+ L
											+ '" src="'
											+ g
											+ P[S].goodsPic
											+ '" /></a></li><li class="soon-list-name"><a href="products/'
											+ P[S].goodsID
											+ '.html" target="_blank" title="'
											+ L
											+ '">'
											+ L
											+ '</a></li><li class="gray">价值：￥'
											+ formatFloat(P[S].codePrice)
											+ "</li>"
											+ l(P[S])
											+ '<li><a href="products/'
											+ P[S].goodsID
											+ '.html" target="_blank" title="立即1元云购"  class="u-now">立即1元云购</a><a href="javascript:;"  title="加入到购物车" codeid="'
											+ P[S].codeID
											+ '" surplus="'
											+ K
											+ '" class="u-cart"><s></s></a></li></ul>';
									var O = "";
									switch (parseInt(P[S].goodsTag)) {
									case 1:
										O += '<div class="f-callout"><span class="F_goods_xp transparent-png">新品</span></div>';
										break;
									case 2:
										O += '<div class="f-callout"><span class="F_goods_tj transparent-png">推荐</span></div>';
										break;
									case 3:
										O += '<div class="f-callout"><span class="F_goods_rq transparent-png">人气</span></div>';
										break;
									case 10:
										O += '<div class="f-callout"><span class="F_goods_xg transparent-png">限购</span></div>';
										break
									}
									if (O != "") {
										N += O
									}
									N += "</div>";
									N += '<div class="u_buyCount" style="top:200px;" codeid="'
											+ P[S].codeID + '"></div></div>';
									var T = $(N);
									T
											.hover(
													function() {
														var X = $(this).attr(
																"idx");
														var W = X % 4 == 0 ? "soon-list-hover soon-list-hover2"
																: "soon-list-hover";
														$(this).addClass(W)
													},
													function() {
														var X = $(this).attr(
																"idx");
														var W = X % 4 == 0 ? "soon-list-hover soon-list-hover2"
																: "soon-list-hover";
														$(this).removeClass(W)
													});
									T
											.find("a.u-cart")
											.click(
													function(Z) {
														var ab = $(this);
														var W = ab
																.attr("codeid");
														var Y = $("#img_" + W);
														var X = Y
																.attr("src")
																.substring(
																		Y
																				.attr(
																						"src")
																				.lastIndexOf(
																						"/") + 1);
														var aa = ab
																.attr("surplus");
														ab
																.addShopCart(
																		1,
																		1,
																		W,
																		Y,
																		function() {
																			_InsertIntoCart()
																		});
														return false
													});
									M.append(T)
								}
							}
						};
						var n = function() {
							var H = 8;
							var G = $("#divNewGoodsList");
							GetJPData("http://api.1yyg.com", "getRecGoodsList",
									"goodsLabel=13&quantity=8", function(J) {
										if (J.code == 0) {
											I(J, G, H)
										}
									});
							var I = function(N, K, S) {
								var M = N.listItems;
								K.empty();
								var Q = M.length > S ? S : M.length;
								for (var O = 0; O < Q; O++) {
									var J = "(第" + M[O].codePeriod + "云)&nbsp;"
											+ M[O].goodsName;
									var L = '<div class="soon-list-con" idx="'
											+ (O + 1)
											+ '"><div class="soon-list"><ul><li class="g-soon-pic"><a href="products/'
											+ M[O].goodsID
											+ '.html" target="_blank" title="'
											+ J
											+ '"><img  alt="'
											+ J
											+ '" src="'
											+ g
											+ M[O].goodsPic
											+ '" /></a></li><li class="soon-list-name"><a href="products/'
											+ M[O].goodsID
											+ '.html" target="_blank" title="'
											+ J
											+ '">'
											+ J
											+ '</a></li><li class="gray">价值：￥'
											+ formatFloat(M[O].codePrice)
											+ '</li></ul></div><div class="u_buyCount" style="top:210px;" codeid="'
											+ M[O].codeID + '"></div></div>';
									var P = $(L);
									P
											.hover(
													function() {
														var U = $(this).attr(
																"idx");
														var T = U % 4 == 0 ? "soon-list-hover soon-list-hover2"
																: "soon-list-hover";
														$(this).addClass(T)
													},
													function() {
														var U = $(this).attr(
																"idx");
														var T = U % 4 == 0 ? "soon-list-hover soon-list-hover2"
																: "soon-list-hover";
														$(this).removeClass(T)
													});
									K.append(P)
								}
								var R = K.children("div").length;
								for (var O = 0; O < (8 - R); O++) {
									K
											.append('<div class="soon-list-con"><div class="soon-list"></div></div>')
								}
							}
						};
						var m = function() {
							var H = $("#divPostRec");
							var G = $("#ul_PostList");
							GetJPData(
									"http://api.1yyg.com",
									"getRecPostList",
									"",
									function(N) {
										if (N.code == 0) {
											var R = N.listItems;
											var O = R.length;
											var Q = "http://postimg.1yyg.com/UserPost/RecHome/";
											var J = "http://post.1yyg.com/detail-";
											var I = "http://u.1yyg.com/";
											H.empty();
											G.empty();
											if (O > 0) {
												var K = '<dl><dt><a href="'
														+ J
														+ R[0].postID
														+ '.html" target="_blank" title="'
														+ R[0].postTitle
														+ '"><img  src="'
														+ Q
														+ R[0].postImg
														+ '" /></a></dt><dd class="u-user"><p class="u-head"><a href="'
														+ I
														+ R[0].userWeb
														+ '" target="_blank" title="'
														+ R[0].userName
														+ '"><img alt="'
														+ R[0].postTitle
														+ '" src="http://faceimg.1yyg.com/UserFace/'
														+ R[0].userPhoto
														+ '" width="40" height="40" /><i class="transparent-png"></i></a></p><p class="u-info"><span><a href="'
														+ I
														+ R[0].userWeb
														+ '" target="_blank" title="'
														+ R[0].userName
														+ '">'
														+ R[0].userName
														+ "</a><em>"
														+ R[0].postTime
														+ '</em></span><cite><a href="'
														+ J
														+ R[0].postID
														+ '.html" target="_blank" title="'
														+ R[0].postTitle
														+ '">'
														+ R[0].postTitle
														+ '</a></cite></p></dd><dd class="m-summary"><cite><a href="'
														+ J
														+ R[0].postID
														+ '.html" target="_blank">'
														+ R[0].postContent
														+ "</a></cite><b><s></s></b></dd></dl>";
												var P = $(K);
												H.html(P);
												O = O >= 7 ? 7 : O;
												for (var M = 1; M < O; M++) {
													K = '<li><a href="'
															+ J
															+ R[M].postID
															+ '.html" target="_blank" title="'
															+ R[M].postTitle
															+ '"><cite><img alt="'
															+ R[M].postTitle
															+ '" src="'
															+ Q
															+ "small/"
															+ R[M].postImg
															+ '" /></cite><p title="'
															+ R[M].postTitle
															+ '">'
															+ R[M].postTitle
															+ "</p></a></li>";
													var P = $(K);
													G.append(P)
												}
												var L = G.children("li").length;
												for (var M = 0; M < (6 - L); M++) {
													G.append("<li></li>")
												}
											}
										}
									})
						};
						var F = 0;
						var A = [ 0, 0, 0, 0 ];
						var w = $("#divHotGoodsList");
						var o = $("#divSoonGoodsList");
						var x = $("#divNewGoodsList");
						var C = $("#divPostRec");
						var r = w.offset().top - $(window).height();
						var k = 0;
						var t = 0;
						var v = 0;
						$(window).scroll(function() {
							q()
						});
						var q = function() {
							F = $(window).scrollTop();
							k = o.offset().top - $(window).height();
							t = x.offset().top - $(window).height();
							v = C.offset().top - $(window).height();
							if (F >= r) {
								if (A[0] == 0) {
									A[0] = 1;
									y();
									z()
								}
							}
							if (F >= k) {
								if (A[1] == 0) {
									A[1] = 1;
									i()
								}
							}
							if (F >= t) {
								if (A[2] == 0) {
									A[2] = 1;
									n()
								}
							}
							if (F >= v) {
								if (A[3] == 0) {
									A[3] = 1;
									m()
								}
							}
						};
						if ($(window).scrollTop() > r) {
							q()
						}
					};
					if ($.browser.msie && parseInt($.browser.version) == 6) {
						if ($.cookie("_ie6Upgrade") != "0") {
							var b = ($(window).width() - 900) / 2;
							var c = '<div id="divUpgradeIE6" class="upgrade-ie6" style="left:'
									+ b
									+ 'px;"><div class="upgrade-con"><span>亲爱的用户：您的浏览器版本过低，为保证您有更好的访问效果，推荐下载</span><span><a href="http://rj.baidu.com/soft/detail/14744.html" target="_blank"><img src="http://skin.1yyg.com/images/chrome_03.jpg" /></a></span><span><a href="http://rj.baidu.com/soft/detail/14744.html" target="_blank">谷歌浏览器</a></span><span>、</span><span><a href="http://rj.baidu.com/soft/detail/11843.html" target="_blank"><img src="http://skin.1yyg.com/images/firefox_03.jpg" /></a></span><span><a href="http://rj.baidu.com/soft/detail/11843.html" target="_blank">火狐浏览器</a></span><span>、</span><span><a href="http://se.360.cn/" target="_blank"><img src="http://skin.1yyg.com/images/aqllq_03.jpg" /></a></span><span><a href="http://se.360.cn/" target="_blank">360安全浏览器</a></span><span>或</span><span><a href="http://www.microsoft.com/en-us/download/default.aspx" target="_blank">升级IE浏览器</a></span><span class="ie6_close"><a name="ie6Close" title="关闭" href="javascript:;"><img src="http://skin.1yyg.com/images/ie6_close.jpg"></a></span></div></div>';
							var f = $(c);
							f.find('a[name="ie6Close"]').click(function() {
								$.cookie("_ie6Upgrade", "0", {
									domain : "www.1yyg.com"
								});
								f.remove();
								return false
							});
							$("div.wrapper").after(f);
							$(window).resize(function() {
								var h = ($(window).width() - 900) / 2;
								f.css("left", h)
							})
						}
					}
					var e = function() {
						Base.getScript(a + "/JS/Comm.js?v=141103", d)
					};
					Base.getScript(a + "/JS/AjaxFun.js?v=141103", e)
				});