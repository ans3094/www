var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    for (var i = 0; i < responseObject.rewards.length; i++) { 
      newContent += '<div class="rewards">';
      newContent += '<img src="' + responseObject.rewards[i].image + '" ';
      newContent += 'alt="' + responseObject.rewards[i].title + '" >';
      newContent += '<dl><dt>' + responseObject.rewards[i].title + '</dt>';
      newContent += '<dd>' + responseObject.rewards[i].text1 + '</dd>';
      newContent += '<dd>' + responseObject.rewards[i].text2 + '</dd></dl>';
      newContent += '</div>';
    }

 
    document.getElementById('first').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다
