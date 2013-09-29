$(function(){
	$(".fleft li a").not($("#thisA")).addClass("Aclass");
	$(".skin-wrapper li").not($("#first")).addClass("Normalpa");
	$("#first").addClass("Specialpa");

	$(".news-menu li").not($(".news-menu li").first()).addClass("NormalLi");
	$(".news-menu li").first().addClass("SpecialLi");
	ChangeSkin();
	DropDown();
	txtEnter();
	huadong();
	Choose();

	EveHover();
	MenuClick();
});

var IsClick=0;
function MenuClick(){
	$(".tab-menu span").click(function(){
		if (IsClick==0) {
			$(".tab-menu span").css({
			"color":"#777",
			"border-top":"1px solid transparent"
			});
			$(this).css({
			"color":"#ff9500",
			"border-top":"1px solid #ff9500"
			});
			IsClick=1;
		}
		else{
			$(this).css({
			"color":"#777",
			"border-top":"1px solid transparent"
			});
			IsClick=0;
		}
		
	});
}


function EveHover(){
	$(".last").hover(function(){
		
		$(this).css({
			"color":"#ff9500"
		});
	},function(){
		$(this).css({
			"color":"#858891"
		});	
	});

	$(".firstA").hover(function(){
		$(this).css({
			"color":"#ff9500"
		});
	},function(){
		$(this).css({
			"color":"#333"
		});	
	});
	$(".foot-layout a").hover(function(){
		$(this).css({
			"text-decoration": "underline"
		});
	},function(){
		$(this).css({
			"text-decoration": "none"
		});	
	});
	$(".fleft span,.fleft a").hover(function(){
		
		$(this).css({
			"color":"#ff9500",
			"text-decoration": "underline"
		});
	},function(){
		$(this).css({
			"color":"#c9c9c9",
			"text-decoration": "none"
		});	
	});


	$(".fright a").not($(".skin")).hover(function(){
		
		$(this).css({
			"color":"#ff9500",
			"text-decoration": "underline"
		});
	},function(){
		$(this).css({
			"color":"#fff",
			"text-decoration": "none"
		});	
	});

	$(".cont-engine a,.site-my-list a,.site-sys-1 a,.nd-major a,.main-mod a,.lastA,.side-recomend a,.first,.mid,.sideA").not($(".last")).hover(function(){
		
		$(this).css({
			"color":"#ff9500",
			"text-decoration": "underline"
		});
	},function(){
		$(this).css({
			"color":"#333",
			"text-decoration": "none"
		});	
	});

	$(".news-menu li").hover(function(){
		$(".news-menu li").css({
			"color":"#333",
			"font-weight": "normal",
			"background-color":"#fbfbfb",
			"border-bottom":"1px solid #dedede"
		});
		$(this).css({
			"color":"#ff9500",
			"font-weight": "bold",
			"background-color":"#fff",
			"border-bottom":"1px solid transparent"
			
		});
	},function(){
		$(this).css({
			"color":"#333",
			"font-weight": "normal",
			"background-color":"#fbfbfb",
			"border-bottom":"1px solid #dedede"
		});	
	});
}


var IsCh=0;
function Choose(){
	$(".moz-radio").click(function(){
		if (IsCh==0) {
			$(".moz-radio").removeClass("select");
			$(this).addClass("select");

			IsCh=1;
		}
		else
		{
			$(this).removeClass("select");
			IsCh=0;
		}
		
	});
}


function huadong(){
	
}




var IsDrop=0;
function DropDown(){
	$("#thisA").click(function(){
		if (IsDrop==0) {
			$(".drop").show();
			$(".drop a").css("color","#000");
			$("#guanfangA").css("background-color","#fff");
			$("#guanfangA").css("background-position","100% -486px");
			IsDrop=1;
		}
		else{
			$(".drop").hide();
			$("#guanfangA").css("background-color","#000");
			$("#guanfangA").css("background-position","100% -466px");
			IsDrop=0;
		}
		
	});
}


var flag=0;
function ChangeSkin(){
	$(".huanfu").click(function(){
		$("#panel-system-set").slideToggle("slow");
		if (flag==0) {
			$(".huanfu").addClass("colorChange");
			flag=1;
		}
		else{
			$(".huanfu").removeClass("colorChange");
			flag=0;
		}

	});
}

function txtEnter(){
	$(".ipt-email").keydown(function(){
		var x=$(".ipt-email").val();
		if (x=="") {
			$("#Num").show();
		}
		else{
			$("#Num").hide();
		}
	});

	$(".email-password").keydown(function(){
		var y=$(".email-password").val();
		if (y=="") {
			$("#passWD").show();
		}
		else{
			$("#passWD").hide();
		}
	});
}