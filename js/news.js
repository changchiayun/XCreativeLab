Parse.initialize("kc3NvzE6o7SOUiMq5cO6i9z8JdZK2PhLphs40S6W", "b7bYbBATk7eX9GSo3UjqesG0zx0HCQEHayW7DoyJ");

var Title = Parse.Object.extend("Xnews");
var Now = Parse.Object.extend("Xnow");
var nowId = new Parse.Query(Now);

var printing = function(){
	$(".newsroom").empty();

	var query = new Parse.Query(Title)
	var collection = query.collection();
	var collections = nowId.collection();
	var inbox;

	nowId.count({
	  success: function(count) {
	    //alert("Sean has played " + count + " games");
	    if (count > 0) {

	nowId.limit(1);
	nowId.descending("createdAt")

	collections.fetch({
	  success: function(collection){
	    collection.each(function(object){

	    	var hotNews = object.get("nowNews")
	    	query.equalTo("objectId", hotNews);
			query.first({
			success: function(object) {
			$(".newsroom").append("<div><img class='bigNail img-circle' src="+object.get("photo")+"><h5 id= 'date' class='span12'>"+object.get("datepicker")+"</h5><h4  id= 'title' class='span12'>"+object.get("title")+"</h4><pre class='span10 offset1'>"+object.get("content")+"</pre></div>");
			$(".newsroom").append("<a class='btn moreNews' href='javascript:printing()'>更多消息</a>");
			},
			error: function(error) {
			alert("Error: " + error.code + " " + error.message);
			}
			});
			object.destroy();
	    });


	  },
	  error: function(collection, error) {}
	});

	}else{


	query.descending("createdAt")

	collection.fetch({
	  success: function(collection){
	    collection.each(function(object){

	      $(".newsroom").append("<div id="+object.id+" class='span3 newsSpace'><img class='img-circle nail' src="+object.get("photo")+"><h5 id='newsdate'>"+object.get("datepicker")+"</h5><h4 id='newstitle'>"+object.get("title")+"</h4></div>");
	      $("#"+object.id).on("click", removeCell);
	    });
	  },
	  error: function(collection, error) {}
	});

	};

	  },
	  error: function(error) {
	    // The request failed
	  }
	});

	
};



var removeCell = function(){
	var oid = this.id;
	console.log(oid);
	$(".newsroom").empty();

	var Title = Parse.Object.extend("Xnews");
	var query = new Parse.Query(Title);
	query.equalTo("objectId", oid);
	query.first({
	success: function(object) {
	$(".newsroom").append("<div><img class='bigNail img-circle' src="+object.get("photo")+"><h5 id= 'date' class='span12'>"+object.get("datepicker")+"</h5><h4  id= 'title' class='span12'>"+object.get("title")+"</h4><pre class='span10 offset1'>"+object.get("content")+"</pre></div>");
	$(".newsroom").append("<a class='btn moreNews' href='javascript:printing()'>更多消息</a>");
	},
	error: function(error) {
	alert("Error: " + error.code + " " + error.message);
	}
	});

}
	


