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
  $(".form-signup").on('submit', function(e) {
    e.preventDefault();
    signup();
  });
});