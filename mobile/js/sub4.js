$(document).ready(function () {
        
 
   

    //한페이지에서 메뉴 클릭 시 원하는 위치로 스무스하게 이동시키는 코드
    $('.slideMenu a').click(function(e){
     e.preventDefault();
        var value=0;
        if($(this).hasClass('link1')){ //첫번째 메뉴 버튼을 클릭하면
           value= $('.slide_con:eq(0)').offset().top-80;   //해당 요소의 상단까지의 거리 계산  
        }else if($(this).hasClass('link2')){
           value= $('.slide_con:eq(1)').offset().top-80; 
        
        }
        
      $("html,body").stop().animate({"scrollTop":value},1000);
    });
});


