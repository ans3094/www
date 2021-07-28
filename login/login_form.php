<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <header>
        <h1><a href="../" class="logo">동아제약</a></h1>
    </header>
    <h2>로그인</h2>
    <p>가입 시 입력하신 아이디와 비밀번호로 로그인이 가능합니다</p>
    <form  name="member_form" method="post" action="login.php"> 

        <div id="id_pw_input">
            <ul>
                <li><input type="text" name="id" class="login_input" placeholder="아이디" required></li>
                <li><input type="password" name="pass" class="login_input"  placeholder="비밀번호" required></li>
            </ul>						
        </div>
        <div id="login_button">
			<button type="submit">로그인</button>
		</div>
        <ul class="find">
            <!-- <li><i class="fas fa-lock"></i>보안접속</li> -->
            <li>
                <a href="id_find.php">아이디 찾기</a>
               <a href="pw_find.php">비밀번호 찾기</a>
            </li>
	    </ul> 
        <div id="join_button">
            <p>아직 회원이 아니신가요?</p>
            <a href="../member/member_check.html">회원가입</a>
        </div>
        


    </form>
</body>
</html>