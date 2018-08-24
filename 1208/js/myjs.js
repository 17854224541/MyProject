$(document).ready(function() {
	//left
	$(".menu ul li").click(function() {
		$(".menu ul li").css("background-color", "Transparent");
		$(this).css("background-color", "#41567A");
	})
	//会客
	$(".huike").click(function() {
		//投影仪关
		projectoroff($(".projector"));
		//灯开
		lighton($(".light"))
		//窗帘
	})
	//会议
	$(".huiyi").click(function() {
		//投影仪关
		projectoroff($(".projector"));
		//灯开
		lighton($(".light"))
		//窗帘开
	})
	//投影
	$(".touying").click(function() {
		//投影仪开
		projectoron($(".projector"));
		//灯
		lightoff($(".light"))
		lighton($(".part-4 .light"))
		//窗帘关
	})
	//娱乐
	$(".yule").click(function() {
		//投影仪开
		projectoron($(".projector"));
		//灯
		lightoff($(".light"))
		lighton($(".part-4 .light"))
		//窗帘关
	})
	//right
	//所有开关
	var oSwitch = document.getElementsByClassName("switch");
	for(i = 0; i < oSwitch.length; i++) {
		oSwitch[i].ontouchstart = function() {
			$(this).addClass("down")
			$(this).removeClass("up")
		}
		oSwitch[i].ontouchend = function() {
			$(this).addClass("up")
			$(this).removeClass("down")
		}
	}
	//开灯function
	function lighton(light) {
		light.parent(".light-box").removeClass("light-off");
		light.parent(".light-box").addClass("light-on");
		light.siblings("input").val("on")
	}
	//关灯function
	function lightoff(light) {
		light.parent(".light-box").removeClass("light-on");
		light.parent(".light-box").addClass("light-off");
		light.siblings("input").val("off")
	}
	//灯开关function
	function lightswitch(light) {
		var la = light.siblings("input").val();
		if(la == "off") {
			lighton(light);
		} else {
			lightoff(light);
		}
	}
	//点击灯开关
	$(".light").click(function() {
		lightswitch($(this));
	})
	//投影仪开function
	function projectoron(projector) {
		projector.removeClass("projector-off");
		projector.addClass("projector-on");
		projector.find("input").val("on")
	}
	//投影仪关function
	function projectoroff(projector) {
		projector.removeClass("projector-on");
		projector.addClass("projector-off");
		projector.find("input").val("off")
	}
	//投影仪开关function
	function projectorswitch(projector) {
		var la = projector.find("input").val();
		if(la == "off") {
			projectoron(projector);
		} else {
			projectoroff(projector)
		}
	}
	//点击投影仪开关
	$(".projector").click(function() {
		projectorswitch($(this));
	})
	//窗帘开关
	function curtainswitch(curtain) {
		var ca = curtain.find("input").val();
		ca = parseInt(ca);
		k = 1;
		//百分比
		$(".kuang").html(ca + "%");
		//进度条
		$(".progress-bar").css("width", ca / 100 * 400 + "px");
		//窗帘
		$(".popup1 .icon-curtain img").css("height", (1 - ca / 100) * 50 + "px")
		//开
		$(".c-btn-on").click(function() {
			//该按钮禁用，其他按钮启用
			$(".c-btn-stop")[0].disabled = false;
			$(".c-btn-off")[0].disabled = false;
			$(this)[0].disabled = true;
			$(this).siblings("button").removeClass("button");
			$(this).addClass("button");
			//
			var cb = $(".progress-bar").css("width");
			cb = parseInt(cb);
			//循环执行，每隔100ms执行一次 
			var t1 = window.setInterval(refreshCount1, 100);

			function refreshCount1() {
				if(ca >= 0 && ca < 100) {
					cb = cb + 4;
					//进度条
					$(".progress-bar").css("width", cb + "px");
					ca = ca + 1;
					//百分比 
					$(".kuang").html(ca + "%");
					//窗帘
					$(".popup1 .icon-curtain img").css("height", (1 - ca / 100) * 50 + "px")
				} else {
					window.clearInterval(t1);
				}
			}
			//暂停
			$(".c-btn-stop").click(function() {
				window.clearInterval(t1);
				curtain.find("input").val(ca);
				//该按钮禁用，其他按钮启用
				$(".c-btn-on")[0].disabled = false;
				$(".c-btn-off")[0].disabled = false;
				$(this)[0].disabled = true;
				$(this).siblings("button").removeClass("button");
				$(this).addClass("button");
			})
		})
		//关
		$(".c-btn-off").click(function() {
			//该按钮禁用，其他按钮启用
			$(".c-btn-on")[0].disabled = false;
			$(".c-btn-stop")[0].disabled = false;
			$(this)[0].disabled = true;
			$(this).siblings("button").removeClass("button");
			$(this).addClass("button");
			var cb = $(".progress-bar").css("width");
			cb = parseInt(cb);
			//循环执行，每隔100ms执行一次
			var t1 = window.setInterval(refreshCount2, 100);

			function refreshCount2() {
				if(ca > 0 && ca <= 100) {
					cb = cb - 4;
					//进度条
					$(".progress-bar").css("width", cb + "px");
					ca = ca - 1;
					//百分比 
					$(".kuang").html(ca + "%");
					//窗帘
					$(".popup1 .icon-curtain img").css("height", (1 - ca / 100) * 50 + "px")
				} else {
					window.clearInterval(t1);
				}
			}
			//暂停
			$(".c-btn-stop").click(function() {
				window.clearInterval(t1);
				curtain.find("input").val(ca);
				//该按钮禁用，其他按钮启用
				$(".c-btn-on")[0].disabled = false;
				$(".c-btn-off")[0].disabled = false;
				$(this)[0].disabled = true;
			})
		})
		//点击空白处关闭
		$(".zhezhao1").mouseup(function(e) {
			var pop1 = $('.popup1');
			if(!pop1.is(e.target) && pop1.has(e.target).length === 0) {
				// 可以在这里关闭弹窗
				$(".zhezhao1").css("display", "none");
				$(".popup1").css("display", "none");
				$(".c-btn-on")[0].disabled = false;
				$(".c-btn-off")[0].disabled = false;
				$(".c-btn-stop")[0].disabled = false;
				if(ca == 0) {
					curtain.removeClass("curtain-off");
					curtain.removeClass("curtain-on");
					curtain.removeClass("curtain-stop");
					curtain.addClass("curtain-off")
				} else if(ca == 100) {
					curtain.removeClass("curtain-off");
					curtain.removeClass("curtain-on");
					curtain.removeClass("curtain-stop");
					curtain.addClass("curtain-on")
				} else {
					curtain.removeClass("curtain-off");
					curtain.removeClass("curtain-on");
					curtain.removeClass("curtain-stop");
					curtain.addClass("curtain-stop")
				}
				//百分比
				$(".kuang").html("0%");
				//进度条
				$(".progress-bar").css("width", "0px");
				//窗帘
				$(".popup1 .icon-curtain img").css("height", "50px")
			}
		});

	}
	//点击窗帘开关
	$(".curtain").click(function() {
		$(".zhezhao1").css("display", "block");
		$(".popup1").css("display", "block");
		k = 1;
		curtainswitch($(this));
	})
	//点击空调开关
	$(".btn-kongtiao").click(function() {
		$(".zhezhao2").css("display", "block");
		$(".popup2").css("display", "block");
		//点击空白处关闭
		$(".zhezhao2").mouseup(function(e) {
			var pop2 = $('.popup2');
			if(!pop2.is(e.target) && pop2.has(e.target).length === 0) {
				// 可以在这里关闭弹窗
				$(".zhezhao2").css("display", "none");
				$(".popup2").css("display", "none");
				$(".btn-kongtiao").css("background-color", "transparent")
			}
		});
	})
	//按钮动态效果
	$(".popup2 .btn-box .icon-btn").click(function() {
		$(this).animate({
			paddingTop: "10px"
		}, 100, function() {
			$(this).animate({
				paddingTop: "0px"
			}, 100)
		})
	})
	//调节温度
	$(".a-btn-jian").click(function() {
		var t = $("#t-num").html();
		t--;
		$("#t-num").html(t)
	})
	$(".a-btn-jia").click(function() {
		var t = $("#t-num").html();
		t++;
		$("#t-num").html(t)
	})
	//锁屏
	$(".a-btn-ls").click(function() {
		if($(this).find("input").val() == "off") {
			$(this).find("img").attr("src", "img/icon-ls-on.png");
			$(this).find("input").val("on");
			$(".icon-btn").each(function () {
				this.disabled=false;
			})
		} else {
			$(this).find("img").attr("src", "img/icon-ls-off.png");
			$(this).find("input").val("off");
			$(".icon-btn").each(function () {
				this.disabled=true;
			})
			$(".a-btn-ls")[0].disabled=false;
		}
	})
	//空调开关
	$(".a-btn-power").click(function() {
		if($(this).find("input").val() == "off") {
			//关→开
			$(this).siblings("h1").html("开")
			$(this).find("input").val("on")
		} else {
			//开→关
			$(this).siblings("h1").html("关")
			$(this).find("input").val("off")
		}
	})
	//空调模式
	$(".a-btn-moshi").click(function() {
		if ($(this).find("input").val()=="制冷") {
			//切换到制热
			$(this).find("img").attr("src","img/icon-zhire.png");
			$(this).find("input").val("制热");
			$(".moshi-img").attr("src","img/icon-zhire-s.png");
		} else if ($(this).find("input").val()=="制热") {
			//切换到除湿
			$(this).find("img").attr("src","img/icon-chushi.png");
			$(this).find("input").val("除湿");
			$(".moshi-img").attr("src","img/icon-chushi-s.png");
		} else if ($(this).find("input").val()=="除湿") {
			//切换到通风
			$(this).find("img").attr("src","img/icon-tongfeng.png");
			$(this).find("input").val("通风");
			$(".moshi-img").attr("src","img/icon-tongfeng-s.png");
		} else if ($(this).find("input").val()=="通风") {
			//切换到制冷
			$(this).find("img").attr("src","img/icon-zhileng.png");
			$(this).find("input").val("制冷");
			$(".moshi-img").attr("src","img/icon-zhileng-s.png");
		}
	})
	//空调风速
	$(".a-btn-fengsu").click(function() {
		if ($(this).find("input").val()=="小风") {
			//切换到中风
			$(this).find("img").attr("src","img/icon-fengsu-zhongfeng.png");
			$(this).find("input").val("中风");
			$(".fengsu-text").text("中风");
		} else if ($(this).find("input").val()=="中风") {
			//切换到大风
			$(this).find("img").attr("src","img/icon-fengsu-dafeng.png");
			$(this).find("input").val("大风");
			$(".fengsu-text").text("大风");
		} else if ($(this).find("input").val()=="大风") {
			//切换到小风
			$(this).find("img").attr("src","img/icon-fengsu-xiaofeng.png");
			$(this).find("input").val("小风");
			$(".fengsu-text").text("小风");
		}
	})
})