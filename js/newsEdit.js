$(function() {
    $( "#datepicker" ).datepicker();
  });

Parse.initialize("kc3NvzE6o7SOUiMq5cO6i9z8JdZK2PhLphs40S6W", "b7bYbBATk7eX9GSo3UjqesG0zx0HCQEHayW7DoyJ");


var Title = Parse.Object.extend("Xnews");


var saveFunc = function(){

  
  var title = new Title();
  var content = new Title();
  var date = new Title();
  var photo = new Title();
  
  var num = $("#title").val();
  title.set("title", num);

  var word = $("#content").val();
  title.set("content", word);

  var datepick = $("#datepicker").val();
  title.set("datepicker", datepick);

  var photobox = $("#photo").val();
  title.set("photo", photobox);


  title.save(null, {
    success: function(object) {
        alert("發布成功");
    },
    error: function(error) {
        alert("Uh oh :( ");
    }
  });  
};




  






