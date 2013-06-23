

      var defaultPath = "http://changchiayun.github.io/XCreativeLab/news.html";
      var successPath = "http://changchiayun.github.io/XCreativeLab/newsEdit.html";
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
          xfbml: true
        });
      }
      
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1&appId=565761823469794";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      
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
              window.reload();
              $(".submit").append("<button type='submit' class='btn btn-primary'>發佈</button>");
            }else{
              alert("你沒有編輯的權限！<br>請等待自動跳轉");
              window.location = defaultPath;
            };
          } else if (response.status === 'not_authorized') {
          // the user is logged in to Facebook, but not connected to the app
            alert("Please authorize this app!");
          } else {
          // the user isn't even logged in to Facebook.
            alert("請登入Facebook帳號");
          }
        });
        
      }
