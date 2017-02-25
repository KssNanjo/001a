// JavaScript Document
window.onload=function(){
	
//----------------------------------------------------------------------------侧边栏选项卡
	var oMenu=document.getElementsByClassName('left_nav')[0];
	var aLi=oMenu.getElementsByTagName('li');
	var oMenuCont=document.getElementsByClassName('popup')[0];
	var aDl=oMenuCont.getElementsByClassName('section');
	var leave_menu=null;//离开右侧 回到左侧
	//删除所有li上的ac
	function del_li_ac(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].className="";
		};
	};
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;//发牌照
		
		aLi[i].onmouseover=function(){
			clearTimeout(leave_menu);
			oMenuCont.style.display="block";
			del_li_ac();//删除所有li上的ac  
			this.className="ac";//自己增加ac
			//显示相对应的内容(就是选项卡的原理)
			for(var i=0; i<aDl.length; i++){
				//alert(i)
				aDl[i].style.display="none";
			};
			aDl[this.index].style.display="block";
		};
		aLi[i].onmouseout=function(){
			clearTimeout(leave_menu);
			leave_menu=setTimeout(function(){
				oMenuCont.style.display="none";
				del_li_ac();//删除所有li上的ac  
			},100)
		};
	};
	oMenuCont.onmouseenter=function(ev){
		clearTimeout(leave_menu);
		this.style.display="block";
	};
	oMenuCont.onmouseleave=function(){
			del_li_ac();//删除所有li上的ac  
			this.style.display="none";
	};
//------------------------------------------------------banner区轮番图

var hxsd_widget={
	//选项卡
"myTab":function (id,auto){
	//点击li 切换ac
	var tab=document.getElementById(id);
	var tabList=tab.getElementsByTagName('ul')[0];
	var aLi=tabList.getElementsByTagName('li');
	var aTabItem=tab.getElementsByClassName('tabItem');
	var n=0;//自动运行用的计数器
	var timer;  //定时器对象
	function changeTab(){//切换标签
		for(var j=0; j<aLi.length; j++){
			aLi[j].className='';
			aTabItem[j].style.display='none';
		};
		//指定n显示
		aLi[n].className='ac';
		aTabItem[n].style.display='block';
	};
	//点击切换---------------------------------------
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;//发牌照
		aLi[i].onclick=function(){
			n=this.index;//调整计数器
			//所有的li去掉ac
			changeTab();
			/*for(var j=0; j<aLi.length; j++){
				aLi[j].className='';
				aTabItem[j].style.display='none';
			};
			//this加上ac
			
			this.className='ac';
			aTabItem[this.index].style.display='block';*/
		};
	};
	if(auto){
		//自动切换---------------------------------
		function autoRun(){
			timer=setInterval(function(){
				//计数器自动累加
				n++;
				//当n>aLi.length n=0
				if(n==aLi.length){
					n=0;
				};
				changeTab();
			},1000);
		};
		autoRun();
		//鼠标进入tab，暂定自动运行-------------------------
		tab.onmouseover=function(){
			clearInterval(timer);
		};
		//鼠标离开tab，重新开始自动运行-------------------------
		tab.onmouseout=function(){
			//重新启动定时器
			autoRun();
		};
	};
},
//幻灯片
"slide":function (id,showNum){
	var oDiv=document.getElementById(id);
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	var pBtn=oDiv.children[0];
	var nBtn=oDiv.children[1];
	var iNow=0;
	//图片宽度
	var li_w=hxsd_tools.getStyle(aLi[0],"width");
	//设置ul宽度
	oUl.style.width=li_w*aLi.length+'px';
	//页面内插入按钮-------------------------------------
	var ol=document.createElement('ol');
	for(var i=0; i<aLi.length; i++){
		ol.innerHTML+='<li>'+ (showNum ? i+1 :"")+'</li>';
	};
	oDiv.appendChild(ol);
	var aBtn=ol.children;
	aBtn[0].className="ac";
	
	//切换按钮--------------------------------------------
	function change(n){
		//改变按钮
		for(var k=0; k<aBtn.length; k++){
			aBtn[k].className='';
		};
		aBtn[n].className="ac";
		
		//移动ul
		hxsd_tools.move(oUl,{"left":-li_w*iNow});
	};
	
	for(var i=0; i<aBtn.length; i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			iNow=this.index;
			change(iNow);
		};
	};
	//左右切换-----------------------------------------	
	pBtn.onclick=function(){
		iNow--;
		if(iNow<0){
			iNow=0;
		};
		change(iNow);
	};
	nBtn.onclick=function(){
		iNow++;
		if(iNow>=aLi.length-1){
			iNow=aLi.length-1
		};
		change(iNow);
	};
	//自动运行-----------------------------------------
	function autorun(){
		oDiv.timer=setInterval(function(){
			iNow++;
			if(iNow==aLi.length){
				iNow=0
			};
			change(iNow);
		},3000);
	};
	autorun();
	oDiv.onmouseover=function(){
		clearInterval(oDiv.timer);
	};
	oDiv.onmouseout=function(){
		autorun();
	};
}
};
hxsd_widget.slide("banner",true);

//----------------------------------------------------------楼层选项卡区
	function Tab(id1,nav){
	  this.oParent = document.getElementById(id1);
	  this.ali = this.oParent.getElementsByTagName("li");
	  this.tabItem = document.getElementsByClassName(nav);
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
	var t4 = new Tab("tab4","right4");
	t4.init();
	var t5 = new Tab("tab5","right5");
	t5.init();
	var t6 = new Tab("tab6","right6");
	t6.init();
	
};
//-------------------------------------------------------------------------------------------------floor滚动条
