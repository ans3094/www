<? 
	session_start();
	
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	/*
		$_SESSION['userid']
		$_SESSION['username']
		$_SESSION['usernick']
		$_SESSION['userlevel']

		$num=1  (나야나~~~~~)
        $page=1
	*/

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>동아제약:고객지원</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub6common.css">
    <link rel="stylesheet" href="./css/sub6_4content.css">
    <link rel="stylesheet" href="./css/view.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>

    <script>
    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href; //'delete.php?num=1'
        }
    }
    </script>
    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->


</head>
<body>
    

    <div class="wrap">
        <!-- 서브헤더영역 -->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="./common/images/sub6mainimg.jpg" alt="고객지원이미지">
        </div>

        <div class="sub_menu">
            <div class="sub1">
                <h3>고객지원</h3>
                <p>CUSTOMER SUPPORT</p>
            </div>
            <ul>
                <li><a href="../sub6/sub6_1.html">고객상담절차</a></li>
                <li><a href="../sub6/sub6_2.html">온라인상담</a></li>
                <li><a href="../sub6/sub6_3.html">CCM</a></li>
                <li class="current"><a href="./list.php">새소식</a></li>
            </ul>
        </div>

        <article id="content">
            <div class="title_area">
                <div class="line_map">
                   <span class="hidden">home</span><i class="fas fa-home"></i> &gt; 고객지원 &gt; <strong>새소식</strong> 
                </div>  
                <h2>새소식</h2>  
            </div>

            <div class="content_area">
                          
                <div id="view_title">
                    <div id="view_title1">
                        <?= $item_subject ?>
                    </div>
                    <ul id="view_title2">
                        <li><span class="hidden">관리자 아이콘</span><i class="fas fa-user" aria-hidden="true"></i>&nbsp;<?= $item_nick ?>&nbsp;&nbsp;</li> 
                        <li><?= $item_date ?></li> 
                        <li>조회 : <?= $item_hit ?>  </li> 
                    </ul>	
                </div>

                <div id="view_content">
                    <?= $item_content ?>
                </div>

                 <div id="view_button">
                    <a href="list.php?page=<?=$page?>">목록</a>&nbsp;
    <? 
        if($userid==$item_id || $userlevel==1 || $userid=="master")
        {
    ?>
                    <a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
                    <a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
    <?
        }
    ?>

    <? 
        if($userid )
        {
    ?>
                    <a href="write_form.php">글쓰기</a>
    <?
        }
    ?>
                </div>



            </div>

        </article>



        <!-- 서브푸터영역 -->
        <? include "../common/sub_foot.html" ?>

    </div>

<!-- JQuery -->
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="../common/js/fullnav.js"></script>

</body>
</html>