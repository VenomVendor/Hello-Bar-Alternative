    var stub_showing = false;
 
    function TopSlider_show() { 
        if(stub_showing) {
          $('.TopSlider-stub').slideUp('fast', function() {
            $('.TopSlider').show('bounce', { times:3, distance:15 }, 100); 
            $('body').animate({"marginTop": "2.4em"}, 250);
          }); 
        }
        else {
          $('.TopSlider').show('bounce', { times:3, distance:15 }, 100); 
          $('body').animate({"marginTop": "2.4em"}, 250);
        }
    }
 
    function TopSlider_hide() { 
        $('.TopSlider').slideUp('fast', function() {
          $('.TopSlider-stub').show('bounce', { times:3, distance:15 }, 100);  
          stub_showing = true;
        }); 
 
        if( $(window).width() > 1024 ) {
          $('body').animate({"marginTop": "0px"}, 250); // if width greater than 1024 pull up the body
        }
    }
 
    $().ready(function() {
        window.setTimeout(function() {
        TopSlider_show();
     }, 0);
    });
