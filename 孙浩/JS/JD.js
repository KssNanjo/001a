// JavaScript Document
window.onload=function (){
//--------------------------------------------------------------------放大镜
var oDiv1=document.getElementsByClassName('big_pic')[0];
var oSpan=oDiv1.getElementsByTagName('span')[0];
var bigImg=document.getElementById('bigImg');
var oDiv2=document.getElementById('big_pic1');
var oDiv3=document.getElementsByClassName('in_bot_lt')[0];
//console.log(oDiv3);
/*document.onmousemove=function(ev){//测定鼠标坐标
	console.log(ev.clientY);
};*/
	oDiv1.onmousemove=function(ev){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;//滚动条高度
		oSpan.style.display=oDiv2.style.display="block";	
		ev=ev||event;
		//计算偏移
		var l=ev.clientX-oDiv3.offsetLeft-oDiv1.offsetLeft-oSpan.offsetWidth/2;
		//console.log(oDiv1.offsetLeft);
		var t=ev.clientY+scrollTop-oDiv3.offsetTop-oDiv1.offsetTop-oSpan.offsetHeight/2;//加上滚动条的高度
		//限制范围
		if(l<0){l=0};
		if(t<0){t=0};
		if(l>oDiv1.offsetWidth-oSpan.offsetWidth){
			l=oDiv1.offsetWidth-oSpan.offsetWidth
		};
		if(t>oDiv1.offsetHeight-oSpan.offsetHeight){
			t=oDiv1.offsetHeight-oSpan.offsetHeight
		};
		//计算移动比率
		var rate_t=t/(oDiv1.offsetHeight-oSpan.offsetHeight);
		var rate_l=l/(oDiv1.offsetWidth-oSpan.offsetWidth);
		//span定位
		oSpan.style.top=t+'px';
		oSpan.style.left=l+'px';
		//大图片定位
		bigImg.style.top=-(bigImg.offsetHeight-oDiv2.offsetHeight)*rate_t+'px';
		bigImg.style.left=-(bigImg.offsetWidth-oDiv2.offsetWidth)*rate_l+'px';
	};

	oDiv1.onmouseout=function(){
		oSpan.style.display=oDiv2.style.display="none";	
	}
//------------------------------------------------预览图选项卡
/*var roll=document.getElementsByClassName('roll_pic')[0];
var r_li=roll.getElementsByTagName("li");

for(var i=0;i<r_li.length;i++){
	//-------------------------------绑定事件：点击li时
	this.ali[i].index = i;
	this.ali[i].onclick=function(){
		for(var j=0; j<_this.ali.length;j++){
			_this.ali[j].className="";
			_this.tabItem[j].style.display="none";
		}
		this.className="ac";
		_this.tabItem[this.index].style.display="block";
	};
};*/
//-------------------------------------------商品选择
var in_bot_m_b=document.getElementsByClassName('in_bot_m_b')[0];
var oul=in_bot_m_b.getElementsByTagName("ul")[0];
var oli=in_bot_m_b.getElementsByTagName("li");

	oDiv1.onmouseout=function(){
		oSpan.style.display=oDiv2.style.display="none";	
	}
	
	for(var i=0;i<oli.length;i++){
		//绑定事件
		oli[i].onclick=function(){	
		//去掉所有li的class
			for (var i=0; i<oli.length; i++){
				oli[i].className="";
			};
			//给指定li加上CLASS
			this.className="red";
		};
	};
	
	
//-----------------------------------------------商品数量
var div3=document.getElementById("div3");
var obtn1=document.getElementById("bt1");
var obtn2=document.getElementById("bt2");
var oinput=div3.getElementsByTagName("input")[0];
	obtn1.onclick=function(){
		oinput.value++;
	};
	obtn2.onclick=function(){
		oinput.value--;
		//给值一个范围
		if(oinput.value<1){
		oinput.value=1;
		};
	};
	
//----------------------------------------------切换选项卡	
	function Tab(id){
	  this.oParent = document.getElementById(id);
	  this.ali = this.oParent.getElementsByTagName("li");
	  this.tabItem = this.oParent.getElementsByClassName("banner_in_bb_nav1");
	};
	Tab.prototype.init=function(){
		var _this = this;// Tab对象
		for(var i=0; i<this.ali.length;i++){
			this.ali[i].index = i;
			this.ali[i].onclick=function(){
				for(var j=0; j<_this.ali.length;j++){
					_this.ali[j].className="";
					_this.tabItem[j].style.display="none";
				}
				this.className="ac";
				_this.tabItem[this.index].style.display="block";
			}
		}	
	};
	var t1 = new Tab("tab1");
	t1.init();
};
























