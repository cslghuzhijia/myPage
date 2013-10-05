$(function(){

	$(".home a").addClass("NormalA");
	$(".header a").not($(".home a")).addClass("SpecialA");
	$(".nickname,chat").val($(".nickname,.chat").attr("value"));


	Titlecolor();

	
	TimeStart();

	AClick();

	Move();
	
	Focus();

	clickcolor();
	
	shiyan();
	master();
});
var had;
function shiyan(){
	
	had=setInterval("Move()",2000);

}



function clickcolor(){
	$(".a_last").hover(function(){
		$(this).css("background-position","0px -20px");
	},
	function(){
		$(this).css("background-position","0px 0px");
	});

	$(".a_next").hover(function(){
		$(this).css("background-position","-20px -20px");
	},
	function(){
		$(this).css("background-position","-20px 0px");
	});
}


function Focus(){
	$(".nickname,.chat").focus(function(){
		
		$(this).val("");
		
	});
	$(".nickname,.chat").blur(function(){
		$(this).val($(this).attr("value"));
	});
}







var L=62;
var i=0;
function Move(){
	var inImg=i%7;
	var img;
	if (inImg==0) {
		img="qq.jpg";
	}
	else if (inImg==1) {
		img="sougo.jpg";
	}
	else if (inImg==2) {
		img="ting.jpg";
	}
	else if (inImg==3) {
		img="lis.jpg";
	}
	else if (inImg==4) {
		img="kugou.jpg";
	}
	else if (inImg==5) {
		img="moon.png";
	}
	else if (inImg==6) {
		img="apple.jpg";
	}
	$(".marqueeCon #ul1").animate({left:'-'+L+'px'}, "slow");
	$(".marqueeCon #ul1").append('<li class="hide0"><a class="hideA"><img src="Image/'+img+'" width="54px" class="Img"></a></li>');
	$(".hide").css("left","372px");
	$(".hide").css("top","0px");
	var x=$(".marqueeCon #ul1").width();
	$(".marqueeCon #ul1").css("width",(x+L)+"px");
	L=L+62;
	i++;

	
}
function master(){
	$(".goLeft").click(function(){
		clearInterval(had);
		Move();
		had=setInterval("Move()",2000);
	});
	$(".goRight").click(function(){
		clearInterval(had);
		L=L-124;
		Move();
		had=setInterval("Move()",2000);
	});
}







var Isfont=1;
function AClick(){
	$(".a_last").click(function(){
		clearInterval(handle);
			Index=Index-2;
			Isfont=0;
			SlowShow();
			Isfont=1;
			handle=setInterval("SlowShow()",3000);
			
	});
	$(".a_next").click(function(){
			clearInterval(handle);
			Isfont=1;
			SlowShow();
			handle=setInterval("SlowShow()",3000);
	});
}
	







var d=1;
var Index=0;
var handle;
function TimeStart(){
	handle=setInterval("SlowShow()",3000);
}

function Titlecolor(){
	$(".header a").hover(function(){

		$(this).addClass("hoverA");
	},function(){
		$(this).removeClass("hoverA");
	});
}

var curr;
var pre;
function SlowShow(){
	
	curr=Index%6;

	if (curr==0) {
		if (Isfont==1) {
			pre=5;
		}
		else
		{
			pre=1;
		}
		
	}
	else if (curr==5) {
		if (Isfont==1) {
			pre=4;
		}
		else
		{
			pre=0;
		}
	}
	else
	{
		if (Isfont==1) {
			pre=curr-1;
		}
		else{
			pre=curr+1;
		}
		
	}
	
	var s="#div"+curr;	
	var f="#div"+pre;
	var w=s+","+f;
	
	$(f).animate({opacity: 'toggle'}, 1000);
	
	$(s).animate({opacity: 'toggle'}, 1000);
	
	Index++;
	
}