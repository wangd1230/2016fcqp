$(document).ready(function(){
	var ticket;
	var sum;
	//
	function update() {
                var tic = AV.Object.createWithoutData('Ticket', '583d7133128fe1006bf395f4');
                // 修改属性
                tic.set('number', sum);
                // 保存到云端
                tic.save();
            }
		ticket = AV.Object.createWithoutData('Ticket', '583d7133128fe1006bf395f4');
        ticket.fetch().then(function () {
        sum = ticket.get('number');// 读取 title
 
  }, function (error) {
    // 异常处理
  });
    //
	$('.start').click(function(){
		var x;		
		x = Math.round(Math.random()*10);
		console.log(x);
		if (x==5) {
			$('.success').css("display","block");
			sum -=1;
			update();
		}
		else{
			
			$('.failed').css("display","block");
		}
	})
})
