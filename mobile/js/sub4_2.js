
//sticky
$(document).ready(function () {
        
   $('.slideMenu li:eq(0)').find('a').addClass('spy');
   //첫번째 서브메뉴 활성화
   
   //$('#content div:eq(0)').addClass('boxMove');
   //첫번째 내용글 애니메이션 처리
   var smh= $('.main').offset().top+80;
   var h1= $('.content_area section:eq(1)').offset().top-300;
  
    //스크롤의 좌표가 변하면.. 스크롤 이벤트
   $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
       //스크롤top의 좌표를 담는다
      
       $('.text').text(scroll);
       //스크롤 좌표의 값을 찍는다.
       
       //sticky menu 처리
       if(scroll>smh){ 
           $('.navBox').addClass('navOn');
          
           $('header').hide();
       }else{
           $('.navBox').removeClass('navOn');
          
           $('header').show();
       }
       
       
       
       $('.slideMenu li').find('a').removeClass('spy');
       //모든 서브메뉴 비활성화~ 불꺼!!!
       
       
        //스크롤의 거리의 범위를 처리
       if(scroll>=0 && scroll<h1){
           $('.slideMenu li:eq(0)').find('a').addClass('spy');
           //첫번째 서브메뉴 활성화

       }else if(scroll>=h1){
           $('.slideMenu li:eq(1)').find('a').addClass('spy');
           //두번째 서브메뉴 활성화
           
       } 
       
   });


});

