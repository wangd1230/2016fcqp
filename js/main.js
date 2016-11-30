//登陆
function signup() {
  var username = $('#inputUsername').val(); 
  var password = $('#inputPassword').val();
  // LeanCloud - 注册
  // https://leancloud.cn/docs/leanstorage_guide-js.html#注册
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.signUp().then(function (loginedUser) {
    window.location.href = "html/ticket.html";
  }, (function (error) {
  	alert(JSON.stringify(error));
  }));
};
$(function() {
  $("#btn").click( function(e) {
    // var x = String($('#inputUsername').val()).length;
    // var y = String($('#inputPassword').val()).length;
    // if (x==12&&y==4) {
    // e.preventDefault();
    // signup();}
    // else{
    //   alert('输入有误');
    // }
    alert('抢票系统暂时关闭')
  });
});