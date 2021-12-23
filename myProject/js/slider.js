/* 中央大图片的轮播点击切换 */
var arr = new Array()
arr[0] = "img/big01.jpg";
arr[1] = "img/big02.jpg";
arr[2] = "img/big03.jpg";
arr[3] = "img/big04.jpg";
arr[4] = "img/big05.jpg";
arr[5] = "img/big06.jpg";
//var arr = ["img/food01.jpg","img/food02.jpg","img/food03.jpg","img/food04.jpg"];
var prev = document.getElementById("bigImg-prev");
var next = document.getElementById("bigImg-next");
var i = 0;
/* 点击左右来切换中央大图片 */
function btnPrev() {
	var navDiv = document.querySelector("navDiv");
	if (i < 0) {
		i = arr.length - 1;
	}
	i--;
	document.getElementById("image").src = arr[i];
};
function btnNext() {
	//var navDiv = document.getElementsByClassName("navDiv-a");  // "img/big0" + (i + 1) + ".jpg"
	//navDiv[i].style.background="red";
	if (i >= 5) {
		i = 0;
	}
	i++;
	document.getElementById("image").src = arr[i];
};
// prev.onclick = btnPrev();
// next.onclick = btnNext();
var time = setInterval(btnNext, 2000);
/* setInterval(function () {
	img();
}, 2000); */

/* var swipe = document.querySelector(".center_bigimg");
	swipe.onmouseover = function(){
	clearInterval(time);
	}
	swipe.onmouseout = function(){
	  time = setInterval("img()", 2000);
	}
 */


/* 秒杀列表右侧自动轮播图 */
var arrImg = new Array()
arrImg[0] = "img/haigou1.jpg";
arrImg[1] = "img/haigou2.jpg";
arrImg[2] = "img/haigou3.jpg";
var n=0;
//每2秒自动切换
function img() {
	var image = document.querySelector(".brand-sliderImg");
  n++;
	if (n >arrImg.length-1) { n = 0 };
	image.src = arrImg[n];
  var circle = document.querySelectorAll(".circle");
  for (var m = 0; m < circle.length;m++) {
    if(m==n){
      circle[m].style.color="red";
    }else{
      circle[m].style.color="rgba(153, 153, 153, 0.6)";
    }
  }
};
var timeout = setInterval(img,2000);

/* var ul = document.getElementById("find-list-ul");
var num = 0;
var time=setInterval(function(){
    num--;
    ul[0].style.marginLeft = num+"px";
    if(num<= -1000){
      num=0;
    }
},10); */

/* 发现好货的走马灯效果 */
var millisec = 15;     //滚动间隔时间（毫秒）
var intervalId;
var left2 = 0;
// var ul;
// window.onload = function(){
    var ul = document.getElementById("find-list-ul");
    ul.innerHTML += ul.innerHTML;   //复制一份相同的li
    var lis = ul.getElementsByTagName("li");
    //ul.style.width = (lis[0].offsetWidth * lis.length) + "px";  //重新设置宽度
    intervalId = setInterval("scroll()", millisec);
    var swiper = document.querySelector(".find-list");
	//鼠标移动暂停
    swiper.onmouseover = function(){
      clearInterval(intervalId);
    }
    swiper.onmouseout = function(){
      intervalId = setInterval("scroll()", millisec);
    }
// }
function scroll(){
     left2 -= 1;
     //定位小于等于总宽度的二分之一时，则left设置为0
     if(left2 <= -ul.offsetWidth / 2)
        left2 = 0;
    ul.style.left = left2 + "px";
}

/* 秒杀倒计时 */
var hh = document.querySelector('.seckill-hh');
var mm = document.querySelector('.seckill-mm');
var ss = document.querySelector('.seckill-ss');
//计算倒计时的时间
var inputTime =+new Date('2021-12-20 18:00:00');//倒计时的结束时间，自己设置时间
var nowTime=+new Date();   //当前时间
var times=(inputTime-nowTime)/1000; //剩余时间的总的毫秒数
var second = parseInt(times%60);
var minute = parseInt(times/60%60);
var hour = parseInt(times/60/60%24);
//保持两位显示——id=操作的标签，num=对应的时间数字
function inner(id,num){
	if(num < 10){
		id.innerHTML = '0'+num;
	}else{
		id.innerHTML = num;
	}
}
//先回显一次，防止第一次刷新页面有空白
timer();
setInterval(timer,1000);
function timer(){
  inner(hh,hour);
	inner(mm,minute);
	//1.第三位数字的显示
  inner(ss,second);
	second--;
	//2、第三位归零后判断第二位数字的值来确定是否将值变为60继续下一轮
	if(second == 0){
		if(minute != 0){
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
		inner(hh,hour);
		inner(mm,minute);
		inner(ss,second);
	}
}


var clock = document.querySelector('.seckill-clock');



/* 新品首发轮播效果 */
var new_num = 0;
var left3 = 0;
var left4 = 0;
var imgs = document.querySelector('.new-good-imgs');
imgs.innerHTML += imgs.innerHTML;  //复制一份
var new_cons = document.querySelector('.new-good-cons');
new_cons.innerHTML += new_cons.innerHTML;
var allNGimg = document.querySelectorAll('.new-good-item img');
newNext();
newPrev();
function newPrev() {
	new_num--;
	if (new_num < 0) {
		new_num = 5;
	}
	left3 = -120 * new_num - 60;
	left4 = -246 * new_num;
	for(var i=0;i<allNGimg.length-1;i++){
		if((new_num+1)==i){
			allNGimg[i].classList.add('img2');
		}else{
			allNGimg[i].classList.remove('img2');
		}
	}
	document.querySelector(".new-good-imgs").style.left = left3 + "px";
	document.querySelector(".new-good-cons").style.left = left4 + "px";
};
function newNext() {
	/* if (new_num >= 8) {
		new_num = -1;
	} */
	new_num++;
	//偏移量
	left3 = -120 * new_num - 60;   
	left4 = -246 * new_num;
	//定位小于等于图片总宽度的二分之一时，则left设置为0
	if(left3 <= -imgs.offsetWidth / 2 ){
		left3 = -60;
		new_num = 0;
	}
	//定位<=介绍总宽度的二分之一时，left设为0
	if(left4 <= -new_cons.offsetWidth / 2 ){
		left4 = 0;
		new_num = 0;
	}
	for(var i=0; i<allNGimg.length; i++){
		if((new_num+1) == i){
			allNGimg[i].classList.add('img2');
		}else{
			allNGimg[i].classList.remove('img2');
		}
	}
	document.querySelector(".new-good-imgs").style.left = left3 + "px";
	document.querySelector(".new-good-cons").style.left = left4 + "px";
};
setInterval(newNext,2000);

/* var rightImg = document.querySelectorAll(".r-icon");
for(var i=0;i<rightImg.length-1;i++){
	rightImg[i].onmouseover = function(){
		rightImg[i].src = "img/right2.png";
    }
}
console.log(rightImg[i].src); */
	
/* 	rightImg.onmouseout = function(){
		rightImg.src = "img/right.png";
	}
     */