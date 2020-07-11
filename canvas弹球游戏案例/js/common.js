// 全局变量
var height,width,canvas;
var ctx;
var oBrick,oBall,oPadd;
var iStart = iGameTime = null; //定时器变量
var LeftBtn = RightBtn = false; // 键盘
var boxnum = 0; //砖块个数
var iELapsed = 0; //时间
var levelnum = 0; //0：第一关

// 获取可视化屏幕高度和宽度
height = document.body.clientHeight;
width = document.body.clientWidth;

// 创建画布
canvas = document.getElementById("mycanvas");
canvas.height = height -40;
canvas.width = width;

// 画布创建
ctx = canvas.getContext("2d");

// 画球
function Ball(x,y,dx,dy,r){
	this.x = x; //圆x轴
	this.y = y; //圆y轴
	this.dx = dx; //球x轴移动距离
	this.dy = dy; //球y轴移动距离
	this.r = r; //圆r半径
	
	this.init = function(obj){
		obj.beginPath();
		obj.arc(this.x,this.y,this.r,0,2*Math.PI);
		obj.fillStyle = "#f66";
		obj.fill(); 
	}
}

// 画砖块
function Bricks(w,h,r,c,p){
	this.w = w; // 宽度
	this.h = h; // 高度
	this.r = r; // 行数
	this.c = c; // 列数
	this.p = p; // 右边下边空白部分
	this.objs = [];//存放数据 跟一样数据
	
	this.init = function(obj){
		for(var i = 0;i < this.c;i++){
			for(var j = 0;j < this.r;j++){
				// 判断数据为空,不显示砖块
				if(this.objs[j][i] != "  "){
					obj.beginPath();
					obj.rect(this.w * i,this.h *j,this.w-this.p,this.h-this.p);
					obj.fillStyle= boxColor[oBrick.objs[j][i]];
					obj.fill();
				}
			}
		}
	}
}

// 画滑块
function Padd(x,y,w,h){
	this.x = x; // x轴
	this.y = y; // y轴
	this.w = w; // 宽度
	this.h = h; // 高度
	this.img; // 图片对象
	
	this.init = function(obj){
		obj.drawImage(this.img,this.x -this.w/2,this.y - 60);
	}
	// 让页面加载时候,先实例化图片对象
	this.newImg = function(){
		var img = new Image();
		img.src = "image/padd.png";
		img.onload = function(){}
		this.img = img;
	}
}

// 初始化方法
function init(){
	// 重新开始,初始化基本参数
	boxnum = iELapsed = 0;
	LeftBtn = RightBtn = false;
	
	// 获取当前关卡
	if(!sessionStorage.levels){
		sessionStorage.levels = 0;
	}else{
		levelnum = sessionStorage.levels;
	}
	
	// 实例化砖块,球,滑块对象
	oBrick = new Bricks(width/8,20,6,8,1);
	oBall = new Ball(width/2,height-70,0.5,-5,10);
	oPadd = new Padd(width/2,height,120,20);
	
	// 优先加载图片
	oPadd.newImg();
	
	// 图形化数据模型
	// 数组嵌套
	oBrick.objs = [];
	for(var i = 0;i < oBrick.r;i++){
		oBrick.objs[i] = [];
		for(var j = 0;j < oBrick.c;j++){
			oBrick.objs[i][j] = boxLevel[levelnum][i].substr(j*2,2);
			if(boxLevel[levelnum][i].substr(j*2,2) != "  "){
				boxnum++;
			}
		}
	}
	
}

// 清除界面
function clear(){
	ctx.clearRect(0,0,width,height);
	ctx.fillStyle = "#BDDCDD";
	ctx.fillRect(0,0,width,height);
}

// 绘制画布
function DrawScene(){
	// 调用清除屏幕函数
	clear();
	// 调用对象自身绘制方法
	oBrick.init(ctx);
	oBall.init(ctx)
	oPadd.init(ctx);
	
	// 修改滑块移动规则
	if(LeftBtn && oPadd.x > 60){
		oPadd.x -= 8;
	}else if(RightBtn && oPadd.x < (width - oPadd.w/2)){
		oPadd.x += 8;
	}
	
	// 游戏规则
	// 计算小球位置
	var iRow = Math.floor(oBall.y / oBrick.h);
	var iCol = Math.floor(oBall.x / oBrick.w);
	// console.log(iRow + "--" + iCol);
	
	// 判断碰撞时砖块破砖和小球反弹
	if(iRow < oBrick.r && oBrick.objs[iRow][iCol] != "  "){
		oBrick.objs[iRow][iCol] = "  ";
		oBall.dy = -oBall.dy;
		boxnum--; //砖块减一
	}
	
	// 判断是否游戏结束
	if(boxnum == 0){
		onplays(1);
		levelnum = Number(levelnum) + 1;
		if(boxLevel.length == levelnum){
			alert("恭喜你已经打通关。。。");
			// 存储区
			sessionStorage.levels = 0;
			levelnum = 0;
		}else{
			alert("你获得胜利！！！");
			sessionStorage.levels = levelnum;
		}
	}
	
	// 判断小球与滑块反弹
	if(oBall.y+oBall.r+oBall.dy > height-60){
		if(oBall.x+oBall.r > oPadd.x-60 && oBall.x-oBall.r < oPadd.x+60){
			oBall.dy= -oBall.dy;
			oBall.dx = ((oBall.x - oPadd.x)/oPadd.w) *10;
		}else if(oBall.y + oBall.dy + oBall.r > height - 20){
			alert("游戏结束");
			onplays(1); //暂停游戏
		}
	}
	
	// 判断小球顶部反弹
		
	if(oBall.y + oBall.dy - oBall.r < 0){
		oBall.dy = -oBall.dy;
	}
	
	// 判断小球左右两边反弹
	// || shift+ |
	if(oBall.x+oBall.dx-oBall.r < 0 || oBall.x+oBall.r+oBall.dx > width){
		oBall.dx = -oBall.dx;
	}
	
	// 小球移动
	oBall.x += oBall.dx; // 0.5
	oBall.y += oBall.dy; // -5
	
	
	Texts();
}

// 游戏开关
function onplays(i){
	if(i == 0 && iStart == null){
		// 开始游戏
		//初始化屏幕绘制
		init();
		// 定时器
		iStart = setInterval(DrawScene,10);
		iGameTime = setInterval(countTime,1000); //时间计算
	}else{
		// 暂停游戏
		clearInterval(iStart);//清除定时器
		clearInterval(iGameTime);
		iStart = null;
	}
}

// 时间计算 一千毫秒加一
function countTime(){
	iELapsed++;
}

// 添加文字 1.关卡 2.时间 3.砖块
function Texts(){
	// 添加文字
	ctx.font = "14px Verdana";
	ctx.fillStyle = "#000";
	// 1.关卡
	ctx.fillText("第一关",width-100,height-130);
	// 2.时间--得到秒数
	var iMin = Math.floor(iELapsed / 60);  // 71 / 60
	var iSec = iELapsed % 60;  // 71 % 60
	// 00:01
	if(iMin < 10) iMin = "0" + iMin;  
	if(iSec < 10) iSec = "0" + iSec;
	ctx.fillText("时间: " + iMin + ":" + iSec,width-100,height-100);
	// 3.砖块
	ctx.fillText("砖块: " + boxnum,width-100,height-70);
}

// 键盘事件
window.onkeydown = function(event){
	// console.log("按下");
	switch(event.keyCode){
		case 37:
			// console.log("左键");
			LeftBtn = true;
			break;
		case 39:
			// console.log("右键");
			RightBtn = true;
			break;
	}
}
// 键盘离开
window.onkeyup = function(event){
	// console.log("离开");
	switch(event.keyCode){
		case 37:
			// console.log("左键");
			LeftBtn = false;
			break;
		case 39:
			// console.log("右键");
			RightBtn = false;
			break;
	}
}