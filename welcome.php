<?php
if(isset($_POST['code']) && isset($_POST['file_name']))
{
	$time = date("h:i:sa");
	$data = $_POST['code'];
    $filename = $time . "_" . $_POST['file_name'];
    $ret = file_put_contents('/home/epsilon/swig/code_data/' . $filename, $data, FILE_APPEND);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
}
else
{
   die('no post data to process');
}
?>