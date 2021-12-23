/* 头部广告关闭按钮 */
function btnClose() {
	document.getElementById("head-ad").style.display = "none";
	document.getElementById("two-D-code").style.top = "30px";
}

/* 定位 */
/* alert(navigator.geolocation); */
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		document.getElementById("adr1").innerHTML = "抱歉，该浏览器不支持获取地理位置";
	}
};
function showPosition(position) {
	document.getElementById("adr1").innerHTML = "纬度：" + position.coords.latitude
		+ "<br>经度：" + position.coords.longtitude;
};

/* 点击切换秒杀列表 */
var j = 0;
var left = 0;
function prevBtn() {
	j--;
	if (j < 0) {
		j = 6;
		// left = -1040;
	}
	left = -177 * j;
	document.querySelector(".page-list-all").style.left = left + "px";
};
function nextBtn() {
	//document.getElementById("slider-list1").style.display= "none";
	//document.getElementById("slider-list2").style.display= "block";
	if (j >= 6) {
		j = -1;
		//left = 0;
	}
	j++;
	left = -177 * j;   //偏移量
	document.querySelector(".page-list-all").style.left = left + "px";
};

/* 为你推荐 */
$(function () {
	$(".recommend-con").hide();
	$(".recommend-tit div").click(function () {
		$(this).addClass("divChange").siblings().removeClass("divChange");
		var id = $(this).attr('id');//获取所点击元素的id
		id = id.slice(3, 4);//获取所点击元素的id的序号
		//alert(id);
		var showId = ".recommend-con" + id;
		//alert(showId);
		$(".recommend-con").addClass(showId);
		$(showId).show();
		$(showId).siblings().hide();
	})
});

/* 
alert(id);
	var showId = $(".recommend-cons").find("div").eq((id-1)).attr('class');
	showId = "."+showId;
	$(showId).show();
	$(showId).siblings().hide();
 */
/* var allTit = document.querySelectorAll(".recommend-tit div");
for (var i = 0; i < allTit.length;i++) {

		allTit[i].num = i;
		alert(i);
 allTit[i].click = function(){
	allTit[i].addClass('divChange');
		if(allTit[i].classList=='divChange'){
			allTit[i].addClass('recommend-tit-con');
		}else{
			allTit[i].addClass('divChange');
		}
	};
} */


/* 鼠标滚轮事件 wheelDelta*/
/* let scroll = 0;
window.onwheel = function (ev) {
	scroll += ev.deltaY;
	console.log(ev);
	console.log(scroll);
} */

/* 顶部导航栏固定*/
$(function () {
	var nav = $(".fixedSearch"); //导航对象
	nav.hide();
	$(".fixedRecommend").hide();
	var win = $(window); //窗口对象  
	var sc = $(document);//document文档对象。
	//获取窗口滚动操作
	win.scroll(function () {
		//滚动条离顶部的高度
		if (sc.scrollTop() >= 680) {
			nav.fadeIn();
			$(".fixedNav").css("position","fixed");
			$(".fixedNav").css("top",80+'px');
		} else {
		$(".fixedNav").css("position","absolute");
		/* 固定侧边栏的位置——与秒杀并排 */
		var offset =$("#seckill").offset();
		let top = offset['top'];
		//console.log(top+"px");
		$(".fixedNav").css("top",top);
		nav.fadeOut();
		}
		/* 为你推荐置顶固定 */
		if (sc.scrollTop() >= 2800) {
			$(".fixedRecommend").fadeIn();
			$(".fixedNav").css("top",140+'px');
		} else {
			$(".fixedRecommend").fadeOut();
		}
		/* 侧边固定栏 */
		if (sc.scrollTop() >= 600 && sc.scrollTop() < 900){
			$(".fixedNav .fixN1 a").css("color","red");
		}else{
			$(".fixedNav .fixN1 a").css("color","black");
		}
		if(sc.scrollTop() >= 900 && sc.scrollTop() < 1800){
			$(".fixedNav .fixN2 a").css("color","red");
		}else{
			$(".fixedNav .fixN2 a").css("color","black");
		} 
		if(sc.scrollTop() >= 1800 && sc.scrollTop() < 2490){
			$(".fixedNav .fixN3 a").css("color","red");
		}else{
			$(".fixedNav .fixN3 a").css("color","black");
		}
		if (sc.scrollTop() >= 2490) {
			$(".fixedNav .fixN4 a").css("color","red");
		}else{
			$(".fixedNav .fixN4 a").css("color","black");
		}
	})
}) 
/* 
//获取滚动条高度
$(function () {
	var nav = $(".fixedRecommend"); //得到导航对象  
	var win = $(window); //得到窗口对象  
	var sc = $(document);//得到document文档对象
	//获取窗口滚动操作
	win.scroll(function () {
		//滚动条离顶部的高度
		console.log(sc.scrollTop());
	})
})
 */
