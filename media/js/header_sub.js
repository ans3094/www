$(document).ready(function(){
    //헤더 열리기(태블릿 이하 해상도)
    var screenHeight = $(window).height();
    
    $('.menuOpen').toggle(function(){
        $('#headerArea').addClass('top0');
        $('#headerArea ul').slideDown();
        $('.menuOpen').addClass('open');
        
    },function(){
        $('#headerArea').removeClass('top0');
        $('#headerArea ul').slideUp();
        $('.menuOpen').removeClass('open');
        
    });
    
        
    var current=0;
    
    $(window).resize(function(){
       var screenSize= $(window).width(); 
       if( screenSize > 1024){  
        $('#headerArea ul').show();
        $('#headerArea').removeClass('top0');
        $('.menuOpen').removeClass('open');
         current=1;
    }
    if(current==1 && screenSize <= 1024){
        $('#headerArea').removeClass('top0');
        $('#headerArea ul').hide();
        current=0;
    }
       
    });

    
});
var op = false;  //�ㅻ퉬媛� �대젮�덉쑝硫�(true) , �ロ��덉쑝硫�(false)
var scroll_onoff=0;
var mouse_onoff=0;
var screenSize= $(window).width(); 
$(document).ready(function(){
    $(window).on('scroll',function(e){
        e.preventDefault();

        $('#headerArea').hover(
            function(){
                mouse_onoff=1;
                if(scroll_onoff==0){
                    $('#headerArea').css('background','rgba(0,0,0,.9)');
                }
            }, function(){
                mouse_onoff=0;
                if(scroll_onoff==0){
                    $('#headerArea').css('background','rgba(0,0,0,0)');
                }
        });
        var scroll = $(window).scrollTop();
           
        if(scroll>700){
            scroll_onoff=1;
            $('#headerArea').css('background','rgba(0,0,0,.9)');
           

        }else{
            scroll_onoff=0;
            if(mouse_onoff==0){
                $('#headerArea').css('background','rgba(0,0,0,0)');
            }
          
        }
        if(screenSize<=1024){
        $('#headerArea').css('background','rgba(0,0,0,.9)');
        }
    });

});






// if(current==1 && screenSize <= 1024){
//     $('#headerArea').addClass('top0');
//     $('#headerArea ul').hide();
    
//      current=0;
// }
// if( screenSize > 1024){
//     $('#headerArea').removeClass('top0');
//     $('#headerArea ul').show();
//     $('.menuOpen').removeClass('open');
//     current=1;
// }

 //Sticky Header
    
//  var screenSize = $(window).width(); 
//  var winHeight = $(window).height();
//  var headHeight = $('#headerArea').height();

//  if(screenSize > 1024){
//      $(window).on("scroll", function(){
//          var headerH = $(this).scrollTop();
//          if(headerH > winHeight - headHeight){
//              $('#headerArea').css({ top: 0 });
//          }else{
//              $('#headerArea').css({ top: -100 });
//          }
//      });
//  }else{
//      $('#headerArea').css({ top: 0 });
//  }

 //scroll 다운	
     $('.down').click(function(){
           screenHeight = $(window).height();
           $('html,body').animate({'scrollTop':screenHeight}, 1000);
     });
