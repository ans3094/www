//애니
$(document).ready(function () {
    //$('#content section:eq(0)').addClass('boxMove');
   
   //첫번째 내용글 애니메이션 처리
        //var smh= $('.main').height();
        var h1= $('#content div:eq(1)').offset().top-500 ;
        var h2= $('#content div:eq(2)').offset().top-500 ;
        var h3= $('#content div:eq(3)').offset().top-500 ;
        var h4= $('#content div:eq(4)').offset().top-500 ;
        var h5= $('#content div:eq(5)').offset().top-500 ;

    //스크롤의 좌표가 변하면.. 스크롤 이벤트
   $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
       //스크롤top의 좌표를 담는다
      
       $('.text').text(scroll);
       
       //스크롤 좌표의 값을 찍는다.
       
        //스크롤의 거리의 범위를 처리
    // if(scroll>=0 && scroll<h1){   
    //     $('#content section:eq(0)').addClass('boxMove');
        //泥ル쾲吏� �댁슜 肄섑뀗痢� �좊땲硫붿씠
     if(scroll>=h1 && scroll<h2){           
        $('#content section:eq(1)').addClass('boxMove');
    }else if(scroll>=1600 && scroll<2100){          
        $('#content section:eq(2)').addClass('boxMove1');
    }else if(scroll>=2100 && scroll<2800){                   
        $('#content section:eq(3)').addClass('boxMove2');
    }
    else if(scroll>=3500){                    
        $('#content section:eq(5)').addClass('boxMove');
    }
    
});
});
