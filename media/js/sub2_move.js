$(document).ready(function(){

    $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
        if(scroll>600){
            $('.aladdin img').css('right','10%');
        }
        else{
            $('.aladdin img').css('right',-500);
        }
    });
    $('.top_btn').click(function(e){
        e.preventDefault();
      
        $("html,body").stop().animate({"scrollTop":0},1500); 
    });
});




$(document).ready(function(){
   
    $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
        if(scroll>1200){
            $('.jasmine img').css('left','10%');
        }
        else{
            $('.jasmine img').css('left',-500);
        }
    });

});

$(document).ready(function(){
   
    $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
        if(scroll>2085){
            $('.genie img').css('right','10%');
        }
        else{
            $('.genie img').css('right',-500);
        }
    });

});