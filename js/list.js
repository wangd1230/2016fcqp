$(document).ready(function(){
	var List = AV.Object.extend('List');
    function releaseNewProduct() {
        var name = $('#inputName').val();
        var num = Number($('#inputNumber').val());
        //
        var list = new List();
        list.set("name",name);
        list.set("number",num);
        list.save().then(function() {
            alert('登记成功');
            window.location.href = "../index.html";
            }, function(error) {
            alert(JSON.stringify(error));
        });
    }
    $(function() {
    $(".btn").click( function(e) {
        var x = String($('#inputName').val()).length;
        var y = String($('#inputNumber').val()).length;
        if (x>0&&y>0) {
      e.preventDefault();
      releaseNewProduct();
  }
  else{
    alert("请填写完表单");
  }
    });
});
})