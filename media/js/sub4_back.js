  $(document).ready(function() {
  	var screenSize = $(window).width();
	var screenHeight = $(window).height();
  
	$("#content").css('margin-top',screenHeight);
	if( screenSize > 768){
		$('.videoBox img').attr('src','./images/sub4/sub4main2.jpg');
   }
   if(screenSize <= 768){
		$('.videoBox img').attr('src','./images/sub4/sub4main768.jpg');
   }	

  	
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
		  
	  $("#content").css('margin-top',screenHeight);
	  if( screenSize > 768){
		$('.videoBox img').attr('src','./images/sub4/sub4main2.jpg');
	 }
	 if(screenSize <= 768){
		$('.videoBox img').attr('src','./images/sub4/sub4main768.jpg');
	 }
    }); 
		
		
	$('.down').click(function(){
		screenHeight = $(window).height();
		$('html,body').animate({'scrollTop':screenHeight}, 1000);
	});
		
		
  });