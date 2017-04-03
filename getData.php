<?php
class GetData{
	public function test(){
		echo "zhihudaily/getdata.php";
	}

	public function getNewsList(){
		$type = $_GET['type'];
		if($type == 'latest'){
			$url = "http://news-at.zhihu.com/api/4/news/latest";
		}
		else if($type == "before"){
			$url = "http://news.at.zhihu.com/api/4/news/before/".$_GET['date'];
		}

		$handle = fopen($url,"rb");
		$content = "";
		while (!feof($handle)) {
			$content .= fread($handle, 10000);
		}
		fclose($handle);
		echo $content;
	}

	public function getImageUrl(){
		$id = $_GET['id'];
		$url = "http://news-at.zhihu.com/api/4/news/".$id;
		$handle = fopen($url,"rb");
		$content = "";
		while (!feof($handle)) {
			$content .= fread($handle, 10000);
		}
		fclose($handle);
		echo  $content;
	}

	public function getNews(){
		$id = $_GET['id'];
		$url = "http://news-at.zhihu.com/api/4/news/".$id;
		$handle = fopen($url,"rb");
		$content = "";
		while (!feof($handle)) {
			$content .= fread($handle, 10000);
		}
		fclose($handle);
		echo  $content;
	}
	public function getThemeList(){
		$url = "http://news-at.zhihu.com/api/4/themes";
		$handle = fopen($url,"rb");
		$content = "";
		while (!feof($handle)) {
			$content .= fread($handle, 10000);
		}
		fclose($handle);
		echo  $content;
	}

	public function getTheme(){
		$id = $_GET['id'];
		$url = "http://news-at.zhihu.com/api/4/theme/".$id;
		$handle = fopen($url,"rb");
		$content = "";
		while (!feof($handle)) {
			$content .= fread($handle, 10000);
		}
		fclose($handle);
		echo  $content;
	}

	public function getPostAnswers(){
		$date = $_GET['date'];
		$type = $_GET['type'];
		$url = "http://api.kanzhihu.com/getpostanswers/".$date.'/'.$type;
		$handle = fopen($url,"rb");
		$content = "";
		while (!feof($handle)) {
			$content .= fread($handle, 10000);
		}
		fclose($handle);
		echo  $content;
	}
}

$a = new GetData();
$method = $_GET['method'];
$a->$method();
