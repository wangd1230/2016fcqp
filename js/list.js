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
            window.location.href = "../index.html";
            }, function(error) {
            alert(JSON.stringify(error));
        });
    }
    $(function() {
    $(".btn").click( function(e) {
      e.preventDefault();
      releaseNewProduct();
    });
});
})