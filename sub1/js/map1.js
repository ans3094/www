function initialize() {
    var myLatlng = new google.maps.LatLng(37.478785, 126.915353);
    var myOptions = {
     zoom: 15,
     center: myLatlng
  
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   
    var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     title:"(주)우리집~"
    });  
    
   
    var infowindow = new google.maps.InfoWindow({
     content: "서울시 관악구 난곡로 278 삼화빌"
    });
   
    infowindow.open(map,marker);
   }
   
   
   window.onload=function(){
    initialize();
   }