<? 
	session_start(); 
	$table = "concert";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>동아제약:제품소개</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub2common.css">
    <link rel="stylesheet" href="./css/list.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>

    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->

    <?
    @extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	include "../lib/dbconn.php";

	if (!$scale){
       $scale=9; 			// 한 화면에 표시되는 글 수
	}

    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
</head>
<body>
    

    <div class="wrap">
        <!-- 서브헤더영역 -->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="./common/images/sub2mainimg.jpg" alt="제품소개이미지">
        </div>

        <div class="sub_menu">
            <div class="sub1">
                <h3>제품소개</h3>
                <p>PRODUCT DESCRIPTIONS</p>
            </div>
            <ul>
                <li class="current"><a href="./list.php">제품검색</a></li>
                <li><a href="../sub2/sub2_2.html">제품FAQ</a></li>
                
            </ul>
        </div>

        <article id="content">
            <div class="title_area">
                <div class="line_map">
                   <span class="hidden">home</span><i class="fas fa-home"></i> &gt; 제품소개 &gt; <strong>제품검색</strong> 
                </div>  
                <h2>제품검색</h2>  
				<p>국민 건강 증진에 기여하는 <span>동아제약</span>의 제품을 소개합니다.</p>
            </div>

            <div class="content_area">
                
			

		<form  name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search"> 
		<ul id="list_search">
			<li id="list_search3">
				<select name="find">
                    <option value='subject'>제목</option>
                    <option value='content'>내용</option>
                    <option value='nick'>별명</option>
                    <option value='name'>이름</option>
				</select></li>
			<li id="list_search4"><input type="text" name="search" placeholder="제품명을 입력해 주시기 바랍니다."></li>
			<li id="list_search5"><input type="submit" value="검색"></li>
		</ul>
		</form>
		<div class="total">
				<div id="list_search1">검색결과 (총 <?= $total_record ?> 건) </div>
						<div class="scale_count">
							<select name="scale" onchange="location.href='list.php?scale='+this.value">
								 <option value=''>보기</option>
								 <option value='9'>9</option>
								 <option value='18'>18</option>
								 <option value='27'>27</option>
								 <option value='36'>36</option>
					  		</select>
						</div>
			</div>

        <div id="list_content">
<?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
      mysql_data_seek($result, $i);       
      // 가져올 레코드로 위치(포인터) 이동  
      $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	  $item_num     = $row[num];
	  $item_id      = $row[id];
	  $item_name    = $row[name];
  	  $item_nick    = $row[nick];
	  $item_hit     = $row[hit];
      $item_date    = $row[regist_day];
	  $item_date = substr($item_date, 0, 10);  
	  $item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	  

	  if(!$row[file_copied_0]){
        $thum_img = './data/default.jpg'; 
	  }else{
	  	$thum_img =$row[file_copied_0];  //첫번째 업로드된 이미지 파일  2021_07_22_11_00_35_0.jpg
	  	$thum_img = './data/'.$thum_img;  //   ./data/2021_07_22_11_00_35_0.jpg
	  }
?>
			<ul class="list_item">
				<!-- <div id="list_item1"><?= $number ?></div> -->
				<li class="list_item2">
				   <a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>">
				       <img src="<?=$thum_img?>" alt="" >
				       <span><?= $item_subject ?></span>
				  </a>
				</li>
				
				<li class="list_item3"><?= $item_nick ?></li>
				<li class="list_item4"><?= $item_date ?></li>
				<li class="list_item5"><?= $item_hit ?></li>
			</ul>
<?
   	   $number--;
   }
?>
			<div id="page_button">
				<div id="page_num"> 
<?
   // 게시판 목록 하단에 페이지 링크 번호 출력
   for ($i=1; $i<=$total_page; $i++)
   {
		if ($page == $i)     // 현재 페이지 번호 링크 안함
		{
			echo "<b> $i </b>";
		}
		else
		{ 
			echo "<a href='list.php?table=$table&page=$i&scale=$scale'> $i </a>";
		}      
   }
?>			
			
				</div>
				<div id="button">
					<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
<? 
	if($userid)
	{
?>
		<a href="write_form.php?table=<?=$table?>">글쓰기</a>
<?
	}
?>
				</div>
			</div> <!-- end of page_button -->		
        </div> <!-- end of list content -->



                                                             
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