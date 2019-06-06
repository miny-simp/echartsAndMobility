//方法封装
var x = 0,y = 0,a = 60,n = 0;
function circleMore(x,y,a,n,child,line,lf,tp,wd,he) {
	child.animate({
		left: (x += a * Math.cos((n++) / 10)) + 'px',
		top: (y += a * Math.sin((n++) / 10)) + 'px'
	}, 1000);
	line.animate({
		left: lf + 'px',
		top: tp + 'px',
		width: wd + 'px',
		height: he + 'px'
	}, 1000);
}
function circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas) {
	child.animate({
		left: (x += a * Math.cos((n++) / 10)) + 'px',
		top: (y += a * Math.sin((n++) / 10)) + 'px'
	}, 1000);
	line.animate({
		left: lf + 'px',
		top: tp + 'px',
		width: wd + 'px',
		height: he + 'px'
	}, 1000);
	setTimeout(function() {
		line.css('-webkit-transform','rotate('+tas+'deg)');
		line.css('-ms-transform','rotate('+tas+'deg)');
		line.css('-moz-transform','rotate('+tas+'deg)');
		line.css('-o-transform','rotate('+tas+'deg)');
		line.css('-transform','rotate('+tas+'deg)');
	}, 600);
}
function circleMore3(x,y,a,n,child,line,lf,tp,wd,he,tas) {
	child.animate({  
		left: (x += a * Math.cos((n++) / 10)) + 'px',
		top: (y += a * Math.sin((n++) / 10)) + 'px'
	}, 1000);
	line.animate({
	left: lf + 'px',
	top: tp + 'px',
	width: wd + 'px',
	height: he + 'px'
	},{
		step: function(){
			line.css('-webkit-transform','rotate('+tas+'deg)');
			line.css('-ms-transform','rotate('+tas+'deg)');
			line.css('-moz-transform','rotate('+tas+'deg)');
			line.css('-o-transform','rotate('+tas+'deg)');
			line.css('-transform','rotate('+tas+'deg)');
		},}, 100);
}
// 选中项的切换设置
function centerSide(n) {
	$("#floatBtn-list>li .floatBtnBg").removeClass("on");
	$("#floatBtn-list>li:eq("+n+") .floatBtnBg").addClass("on");
}
//第一次转圈
function step11() {
	var x = -600,y = 100;
	var lf = 478,tp = -125,wd = 4,he = 160;
	var tas = 90;
	var child = $(".child1");
	var line = $(".child1 .line-box .line");
	$('.child1 .floatBtnBg').addClass('floatBtnBg2');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step12() {
	var x = 0,y = 440;
	var lf = 130,tp = -192,wd = 200,he = 4;
	var tas = -90;
	var child = $(".child2");
	var line = $(".child2 .line-box .line");
	$('.child2 .floatBtnBg').removeClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step13() {
	var x = 623,y = 100;
	var lf = -140,tp = -45,wd = 160,he = 4;
	var tas = 180;
	var child = $(".child3");
	var line = $(".child3 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step14() {
	var x = 500,y = -121;
	var lf = -125,tp = -0,wd = 160,he = 4;
	var tas = 140;
	var child = $(".child4");
	var line = $(".child4 .line-box .line");
	$('.child4 .floatBtnBg').removeClass('floatBtnBg2').addClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step15() {
	var x = -522,y = -121;
	var lf = 390,tp = 10,wd = 160,he = 4;
	var tas = 40;
	var child = $(".child5");
	var line = $(".child5 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}

//第二次转圈
function step22() {
	var x = -600,y = 100;
	var lf = 470,tp = -55,wd = 160,he = 4;
	var tas = 0;
	var child = $(".child2");
	var line = $(".child2 .line-box .line");
	$('.child2 .floatBtnBg').addClass('floatBtnBg2');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step23() {
	var x = 0,y = 432;
	var lf = 130,tp = -192,wd = 200,he = 4;
	var tas = -90;
	var child = $(".child3");
	var line = $(".child3 .line-box .line");
	$('.child3 .floatBtnBg').removeClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step24() {
	var x = 623,y = 100;
	var lf = -145,tp = -45,wd = 160,he = 4;
	var tas = 180;
	var child = $(".child4");
	var line = $(".child4 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step25() {
	var x = 500,y = -121;
	var lf = -125,tp = -0,wd = 160,he = 4;
	var tas = 140;
	var child = $(".child5");
	var line = $(".child5 .line-box .line");
	$('.child5 .floatBtnBg').removeClass('floatBtnBg2').addClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step21() {
	var x = -503,y = -121;
	var lf = 475,tp = -90,wd = 4,he = 160;
	var tas = 120;
	var child = $(".child1");
	var line = $(".child1 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}

//第三次转圈
function step33() {
	var x = -560,y = 100;
	var lf = 405,tp = -55,wd = 160,he = 4;
	var tas = 0;
	var child = $(".child3");
	var line = $(".child3 .line-box .line");
	$('.child3 .floatBtnBg').addClass('floatBtnBg2');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step34() {
	var x = 0,y = 432;
	var lf = 130,tp = -192,wd = 200,he = 4;
	var tas = -90;
	var child = $(".child4");
	var line = $(".child4 .line-box .line");
	$('.child4 .floatBtnBg').removeClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step35() {
	var x = 623,y = 100;
	var lf = -145,tp = -45,wd = 160,he = 4;
	var tas = 180;
	var child = $(".child5");
	var line = $(".child5 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step31() {
	var x = 500,y = -121;
	var lf = -55,tp = -90,wd = 4,he = 160;
	var tas = -120;
	var child = $(".child1");
	var line = $(".child1 .line-box .line");
	$('.child1 .floatBtnBg').removeClass('floatBtnBg2').addClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step32() {
	var x = -503,y = -121;
	var lf = 410,tp = 0,wd = 160,he = 4;
	var tas = 40;
	var child = $(".child2");
	var line = $(".child2 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}

//第四次转圈
function step44() {
	var x = -600,y = 100;
	var lf = 400,tp = -55,wd = 160,he = 4;
	var tas = 0;
	var child = $(".child4");
	var line = $(".child4 .line-box .line");
	$('.child4 .floatBtnBg').addClass('floatBtnBg2');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step45() {
	var x = 0,y = 432;
	var lf = 130,tp = -192,wd = 200,he = 4;
	var tas = -90;
	var child = $(".child5");
	var line = $(".child5 .line-box .line");
	$('.child5 .floatBtnBg').removeClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step41() {
	var x = 640,y = 100;
	var lf = -62,tp = -125,wd = 4,he = 160;
	var tas = -90;
	var child = $(".child1");
	var line = $(".child1 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step42() {
	var x = 500,y = -121;
	var lf = -125,tp = -0,wd = 160,he = 4;
	var tas = 140;
	var child = $(".child2");
	var line = $(".child2 .line-box .line");
	$('.child2 .floatBtnBg').removeClass('floatBtnBg2').addClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step43() {
	var x = -503,y = -121;
	var lf = 390,tp = 0,wd = 160,he = 4;
	var tas = 40;
	var child = $(".child3");
	var line = $(".child3 .line-box .line");
	$('.child3 .floatBtnBg').removeClass('floatBtnBg1').addClass('floatBtnBg2');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}

//第五次转圈 ---复位
function step55() {
	var x = -580,y = 100;
	var lf = 405,tp = -55,wd = 160,he = 4;
	var tas = 0;
	var child = $(".child5");
	var line = $(".child5 .line-box .line");
	$('.child5 .floatBtnBg').addClass('floatBtnBg2');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step51() {
	var x = 0,y = 432;
	var lf = 225,tp = -290,wd = 4,he = 200;
	var tas = 0;
	var child = $(".child1");
	var line = $(".child1 .line-box .line");
	$('.child1 .floatBtnBg').removeClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step52() {
	var x = 623,y = 100;
	var lf = -145,tp = -45,wd = 160,he = 4;
	var tas = 180;
	var child = $(".child2");
	var line = $(".child2 .line-box .line");
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step53() {
	var x = 500,y = -121;
	var lf = -125,tp = -0,wd = 160,he = 4;
	var tas = 140;
	var child = $(".child3");
	var line = $(".child3 .line-box .line");
	$('.child3 .floatBtnBg').removeClass('floatBtnBg2').addClass('floatBtnBg1');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}
function step54() {
	var x = -503,y = -121;
	var lf = 390,tp = 0,wd = 160,he = 4;
	var tas = 40;
	var child = $(".child4");
	var line = $(".child4 .line-box .line");
	$('.child4 .floatBtnBg').removeClass('floatBtnBg1').addClass('floatBtnBg2');
	circleMore1(x,y,a,n,child,line,lf,tp,wd,he,tas);
}

function circleLoop() {
	var timer1 = setTimeout(function() {
		firstLap();
		$('.child1 .text').text('网吧');
		$('.child1 .num').text('06');
	}, 2000);
	var timer2 = setTimeout(function() {
		secondLap();
		$('.child2 .text').text('卡口抓拍');
		$('.child2 .num').text('07');
	}, 4000);
	var timer3 = setTimeout(function() {
		thirdLap();
		$('.child3 .text').text('旅馆');
		$('.child3 .num').text('08');
	}, 6000);
	var timer4 = setTimeout(function() {
		fourthLap();
		$('.child4 .text').text('全部');
		$('.child4 .num').text('01');
	}, 8000);
	var timer5 = setTimeout(function() {
		fifthLap();
		$('.child5 .text').text('民航');
		$('.child5 .num').text('02');
	}, 10000);

	setTimeout(function() {
		firstLap();
		$('.child1 .text').text('客运');
		$('.child1 .num').text('03');
	}, 12000);
	setTimeout(function() {
		secondLap();
		$('.child2 .text').text('铁路');
		$('.child2 .num').text('04');
	}, 14000);
	setTimeout(function() {
		thirdLap();
		$('.child3 .text').text('人脸识别');
		$('.child3 .num').text('05');
	}, 16000);
	setTimeout(function() {
		fourthLap();
		$('.child4 .text').text('网吧');
		$('.child4 .num').text('06');
	}, 18000);
	setTimeout(function() {
		fifthLap();
		$('.child5 .text').text('卡口抓拍');
		$('.child5 .num').text('07');
	}, 20000);

	setTimeout(function() {
		firstLap();
		$('.child1 .text').text('旅馆');
		$('.child1 .num').text('08');
	}, 22000);
	setTimeout(function() {
		secondLap();
		$('.child2 .text').text('全部');
		$('.child2 .num').text('01');
	}, 24000);
	setTimeout(function() {
		thirdLap();
		$('.child3 .text').text('民航');
		$('.child3 .num').text('02');
	}, 26000);
	setTimeout(function() {
		fourthLap();
		$('.child4 .text').text('客运');
		$('.child4 .num').text('03');
	}, 28000);
	setTimeout(function() {
		fifthLap();
		$('.child5 .text').text('铁路');
		$('.child5 .num').text('04');
	}, 30000);

	setTimeout(function() {
		firstLap();
		$('.child1 .text').text('人脸识别');
		$('.child1 .num').text('05');
	}, 32000);
	setTimeout(function() {
		secondLap();
		$('.child2 .text').text('网吧');
		$('.child2 .num').text('06');
	}, 34000);
	setTimeout(function() {
		thirdLap();
		$('.child3 .text').text('卡口抓拍');
		$('.child3 .num').text('07');
	}, 36000);
	setTimeout(function() {
		fourthLap();
		$('.child4 .text').text('旅馆');
		$('.child4 .num').text('08');
	}, 38000);
	setTimeout(function() {
		fifthLap();
		$('.child5 .text').text('全部');
		$('.child5 .num').text('01');
	}, 40000);
}
function firstLap() {
	var n = 1;
	centerSide(n);
	hsyjShowInit();
	step11();
	step12();
	step13();
	step14();
	step15();
}
function secondLap() {
	var n = 2;
	centerSide(n);
	hsyjShowInit();
	step22();
	step23();
	step24();
	step25();
	step21();
}
function thirdLap() {
	var n = 3;
	centerSide(n);
	hsyjShowInit();
	step33();
	step34();
	step35();
	step31();
	step32();
}
function fourthLap() {
	var n = 4;
	centerSide(n);
	hsyjShowInit();
	step44();
	step45();
	step41();
	step42();
	step43();
}
function fifthLap() {
	var n = 0;
	centerSide(n);
	hsyjShowInit();
	step55();
	step51();
	step52();
	step53();
	step54();
}
// $('#child1 .text').text('客运');
// $('#child2 .text').text('铁路');
// $('#child3 .text').text('人脸识别');
// $('#child4 .text').text('网吧');
// $('#child5 .text').text('卡口抓拍');
circleLoop();
var timer0 = setInterval(function(){
	circleLoop();
},42000);

function hsyjShowInit() {}