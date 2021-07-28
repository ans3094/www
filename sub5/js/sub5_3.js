
//sticky
$(document).ready(function () {
        
   $('.slideMenu li:eq(0)').find('a').addClass('spy');
   //첫번째 서브메뉴 활성화
   
   //$('#content div:eq(0)').addClass('boxMove');
   //첫번째 내용글 애니메이션 처리
   var smh= $('.visual').height()+400;
   var h1= $('.content_area div:eq(1)').offset().top+1000 ;
   var h2= $('.content_area div:eq(2)').offset().top+2500 ;
   //var h3= $('.content_area div:eq(3)').offset().top+2000 ;

    //스크롤의 좌표가 변하면.. 스크롤 이벤트
   $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
       //스크롤top의 좌표를 담는다
      
       $('.text').text(scroll);
       //스크롤 좌표의 값을 찍는다.
       
       //sticky menu 처리
       if(scroll>smh){ 
           $('.navBox').addClass('navOn');
           //스크롤의 거리가 350px 이상이면 서브메뉴 고정
           $('header').hide();
       }else{
           $('.navBox').removeClass('navOn');
           //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
           $('header').show();
       }
       
       
       
       $('.slideMenu li').find('a').removeClass('spy');
       //모든 서브메뉴 비활성화~ 불꺼!!!
       
       
        //스크롤의 거리의 범위를 처리
       if(scroll>=0 && scroll<h1){
           $('.slideMenu li:eq(0)').find('a').addClass('spy');
           //첫번째 서브메뉴 활성화
           
           //$('#content div:eq(0)').addClass('boxMove');
           //첫번째 내용 콘텐츠 애니메이
       }else if(scroll>=h1 && scroll<h2){
           $('.slideMenu li:eq(1)').find('a').addClass('spy');
           //두번째 서브메뉴 활성화
           
            //$('#content div:eq(1)').addClass('boxMove');
      //  }else if(scroll>=h2 && scroll<h3){
      //      $('.slideMenu li:eq(2)').find('a').addClass('spy');
           //세번째 서브메뉴 활성화
           
            //$('#content div:eq(2)').addClass('boxMove');
      //  }else if(scroll>=h3){
      //      $('.subNav li:eq(3)').find('a').addClass('spy');
           //네번째 서브메뉴 활성화
           
            //$('#content div:eq(3)').addClass('boxMove');
       } 
       
   });


});

