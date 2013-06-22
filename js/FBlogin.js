      var defaultPath = "http://changchiayun.github.io/Xacademy/news.html";
      var successPath = "http://changchiayun.github.io/Xacademy/newsEdit.html";
      var uid;
      var Access_Token;
      var GroupID = new Array;
      var GroupMember = new Array;
      
      window.fbAsyncInit = function() {
        FB.Flash.hasMinVersion = function () { return false; };
        FB.init({
          appId: "565761823469794", // Your facebook app id
          status: true,
          cookie: true,
          xfbml: true,
        });
      }
      
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1&appId=565761823469794";
      fjs.parentNode.insertBefore(js, fjs);

      
      function loginDialog(){
        
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
          
            uid = response.authResponse.userID;
            Access_Token = response.authResponse.accessToken;
            //authResponse returns the list such as below
            //If you store these informations, you can further use them to promote your website
            /* the form returned
            {
              status: 'connected',
              authResponse: {
                accessToken: '...',
                expiresIn:'...',
                signedRequest:'...',
                userID:'...'
              }
            }
            */
  
            if (uid == '100001224735120'|| uid == '100000115607073') {
              $(".newsroom").append("
      <form class="form-horizontal content" action="javascript:saveFunc()"><fieldset><h2 id="greeting">新增消息</h2><div class="control-group"><label class="control-label" for="title">標題</label><div class="controls">                     
            <input class="input-xxlarge" type="text" id="title" name="title" placeholder="">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="datepicker">日期</label>
          <div class="controls">
             <input class="input-xxlarge" type="text" name="datepicker" id="datepicker" />
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="photo">照片</label>
          <div class="controls">
              <input class="input-xxlarge" type="text" id="photo" name="photo" placeholder="http:">
          </div></div><div class="control-group">
          <label class="control-label" for="content">內文</label>
          <div class="controls">
             <textarea class="input-xxlarge" id="content" name="content" placeholder="" rows="15" ></textarea>
          </div>
        </div>
        <div class="control-group">
          <div class="controls">
            <button type="submit" class="btn btn-primary">發佈</button>
          </div>
        </div>           
      </fieldset>
    </form>");

              
            }else{
              alert("你沒有編輯的權限！");
              window.location = defaultPath;
            };
          } else if (response.status === 'not_authorized') {
          // the user is logged in to Facebook, but not connected to the app
            alert("Please authorize this app!");
            window.location = defaultPath;
          } else {
          // the user isn't even logged in to Facebook.
            alert("請登入Facebook帳號");
            window.location = defaultPath;
          }
        });
        
      }