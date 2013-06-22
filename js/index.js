Parse.initialize("kc3NvzE6o7SOUiMq5cO6i9z8JdZK2PhLphs40S6W", "b7bYbBATk7eX9GSo3UjqesG0zx0HCQEHayW7DoyJ");

var Title = Parse.Object.extend("Xnews");
var Now = Parse.Object.extend("Xnow");
var printing = function(){


var query = new Parse.Query(Title)
var collection = query.collection();
query.limit(3);
query.descending("createdAt")

collection.fetch({
  success: function(collection){
    collection.each(function(object){

      $(".newsroom").append("<div id="+object.id+" class='span4'><img class='img-circle nail' src="+object.get("photo")+"><h5 id='newsdate'>"+object.get("datepicker")+"</h5><h4 id='newstitle'>"+object.get("title")+"</h4></div>");
      $("#"+object.id).on("click", removeCell);
      console.log("catch"); 
    });
  },
  error: function(collection, error) {}
});


};


var removeCell = function(){
	var oid = this.id;
  var nowId = new Now();
  nowId.set("nowNews", oid);
  nowId.set("ref", "wow");
  nowId.save();

	window.location.href = "news.html";

	
};







