// 设置导航按钮默认显示
var index = 4;
var allA = document.querySelectorAll(".aDiv a");
//设置默认选中的效果
//allA[index].style.backgroundColor = "black";

for (var i = 0; i < allA.length; i++) {
	allA[i].onclick = function () {
		//获取点击超链接的索引
		alert(i);
	}
}



var seckill_brand = document.querySelector(".seckill-brand");
var ul = seckill_brand.querySelector("ul");
var li_img = ul.querySelector("li");
var circle = document.querySelector(".current");  //获取小圆圈的class

// circle控制小圆圈的播放
var c = 0;
//播放次数
var num = 0;
function brand_img() {
	
	//改变ul偏移量
	ul.style.left = "-178px";
}
setInterval(brand_img, 2000);
/* setInterval(function(){
	img();
},2000);
 */


//轮播图自动播放图片
var timer = setInterval(function () {
	// 手动调用右边按钮点击事件
	arrow_right.click();
}, 2000);
/* 轮播圆点 */
/* var circleAll = document.querySelectorAll('.circle');
for (var index = 0; index < circleAll.length; index++) {
	circleAll[index].num = index;
	circleAll[index].onmouseover = function () {                   
		document.getElementById("image").src = arrImg[this.num];
		i=this.num;

    //clearTimeout(timeout); 
		//timeout=setTimeout(img,3000);
    //alert(i);                    	
	}
} */

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 2000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

/* //1、获取元素
var hour = document.querySelector('.seckill-hh');
var minute = document.querySelector('.seckill-mm');
var second = document.querySelector('.seckill-ss');
var inputTime =+new Date('2021-12-17 18:00:00');//倒计时的结束时间，自己设置时间
countDown();//先调用一次这个函数 防止第一次刷新页面有空白
//2、开启定时器
setInterval(countDown,1000);//1000毫秒，每一秒钟调用一次函数
//3、倒计时-时分秒函数
function countDown(){
	var nowTime=+new Date(); //返回的是当前时间的总的毫秒数
	var times=(inputTime-nowTime)/1000; // times是剩余时间的总的毫秒数
	var h = parseInt(times/60/60%24);
	//h=h<10?'0'+h:h;//判断数值小于10的情况 如 0-9改为 00-09
	hour.innerHTML = h;//更改div里面的内容 把h给获取元素hour的内容
	var m=parseInt(times/60%60);
	//m=m<10?'0'+m:m;
	minute.innerHTML=m;//同上
	var s=parseInt(times%60);
	//s=s<10?'0'+s:s;
	second.innerHTML=s;//同上
}  */

 /* 秒杀倒计时 */ 
 var span = document.querySelectorAll('.seckill-timmer');
var second = 0;
var minute = 0;
var hour = 0;
//保持两位显示
//id=操作的标签，num=对应的时间数字
function inner(id,num){
	if(num<10){
		id.innerHTML='0'+num;
	}else{
		id.innerHTML=num;
	}
}
var timer = setInterval(function(){
	second = parseInt(span[2].innerHTML);
	minute = parseInt(span[1].innerHTML);
	hour = parseInt(span[0].innerHTML);

	//1.第三位数字的显示
	second--;
	inner(span[2],second);
	//2、第三位归零后判断第二位数字的值来确定是否将值变为60继续下一轮
	if(second==0){
		if(minute !=0){
			minute--;
			second=59;
		}
		//3、判断第二位和第一位的值
		if(minute == 0){
			if(hour != 0){
				minute=59;
				hour--;
			}
		}
		//4、若三个值都为0，清除定时器
		if(hour==0 && minute==0 && second==0){
			clearInterval(timer);
		}
		//5、调用函数回显
		inner(span[0],hour);
		inner(span[1],minute);
		inner(span[2],second);
	}
},1000);