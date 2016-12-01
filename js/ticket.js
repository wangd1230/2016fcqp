function showdiv(div){
	//document.getElementById(div).style.display="block";
	var procbg = document.createElement("div"); //首先创建一个div
procbg.setAttribute("id","mybg"); //定义该div的id
procbg.style.background = "black";
procbg.style.width = "100%";
procbg.style.height = "100%";
procbg.style.position = "fixed";
procbg.style.top = "0";
procbg.style.left = "0";
procbg.style.zIndex = "500";
procbg.style.opacity = "0.9";
procbg.style.filter = "Alpha(opacity=70)";
//背景层加入页面
document.body.appendChild(procbg);
// document.body.style.overflow = "hidden"; //取消滚动条  
}
function hidediv(div){
	//document.getElementById(div).style.display="none";
	document.body.style.overflow = "auto"; //恢复页面滚动条
var body = document.getElementsByTagName("body");
var mybg = document.getElementById("mybg");
body[0].removeChild(mybg);
}
$(document).ready(function(){
	var ticket;
	var sum;
	//
	ticket = AV.Object.createWithoutData('Ticket', '583e382aa22b9d006a97595e');
        ticket.fetch().then(function () {
        sum = ticket.get('number');// 读取 title
         if (sum>0) {
	$('.start').click(function(){
		var x;		
		x = Math.round(Math.random()*10);
		console.log(x);
		if (x==2||x==4||x==6||x==8) {
			$('.success').css("display","block");
			sum -=1;
			update();
		}
		else{
			
			$('.failed').css("display","block");
		}
	})
    }
    else{
    	// alert('票抢完了');
    	showdiv();
    	$('.end').css("display","block");
    }
  }, function (error) {
    // 异常处理
  });
	//
	function update() {
                var tic = AV.Object.createWithoutData('Ticket', '583e382aa22b9d006a97595e');
                // 修改属性
                tic.set('number', sum);
                // 保存到云端
                tic.save();
                }
         //
		
    //
     

 //    if (sum>0) {
	// $('.start').click(function(){
	// 	var x;		
	// 	x = Math.round(Math.random()*10);
	// 	console.log(x);
	// 	if (x==3||x==6||x==9) {
	// 		$('.success').css("display","block");
	// 		sum -=1;
	// 		update();
	// 	}
	// 	else{
			
	// 		$('.failed').css("display","block");
	// 	}
	// })
 //    }
 //    else{
 //    	// alert('票抢完了');
 //    	showdiv();
 //    	$('.end').css("display","block");
 //    }
})
