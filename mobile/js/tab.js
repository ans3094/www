//탭
$(document).ready(function(){
    var cnt=2;  //탭메뉴 개수 ***
    $('.contlist:eq(0)').show(); 
    $('.tab1').addClass('current').css('color','#333');
    //자바스크립트의 상대 경로의 기준은 스크립트 파일을 불러들인 html파일이 저장된 경로가 기준임
        
      $('.tab').click(function(e){   
        e.preventDefault();  // <a> 값을 강제로 막는다
        
        var ind = $(this).index('.tab');
 
        $(".contlist").hide(); 
        $(".contlist:eq("+ind+")").fadeIn('fast');
        
        $('.tab').removeClass('current').css('color','#999');
       
        $(this).addClass('current').css('color','#333');
     });
  });