$(document).ready(function() {
    var position=0;  //최초위치
    var movesize=350; //이미지 하나의 너비
    
     $('.product .slide_gallery ul').after($('.product .slide_gallery ul').clone());
        //슬라이드 겔러리를 한번 복제
 
      $('.button').click(function(event){
     var $target=$(event.target);
     
     if($target.is('.m1')){
          if(position==-2450){
              $('.product .slide_gallery').css('left',0);
               position=0;
           }
         
          position-=movesize;  // 150씩 감소
              $('.product .slide_gallery').stop().animate({left:position}, 'fast',
           function(){							
             if(position==-2450){
                $('.product .slide_gallery').css('left',0);
                position=0;
             }
           });
     }else if($target.is('.m2')){
           if(position==0){
                $('.product .slide_gallery').css('left',-2450);
                position=-2450;
                    }
 
                    position+=movesize; // 150씩 증가
               $('.product .slide_gallery').stop().animate({left:position}, 'fast',
           function(){							
             if(position==0){
                $('.product .slide_gallery').css('left',-2450);
                position=-2450;
             }
            });
     }
        });
     });