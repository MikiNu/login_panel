<?php
$arr = array('login'=>'us1', 'password'=>'pass1');
$otv = array();
$qw = "qw";
$data = json_decode($_POST);
$login = $data->login;
$password = $data->password;
setcookie("NAME", "12", time() - 3600*24*30*12, '/', $_SERVER['HTTP_HOST']);
switch (json_last_error()) {
  case JSON_ERROR_NONE:
    $data_error = '';
    break;
  case JSON_ERROR_DEPTH:
    $data_error = 'Достигнута максимальная глубина стека';
    break;
  case JSON_ERROR_STATE_MISMATCH:
    $data_error = 'Неверный или не корректный JSON';
    break;
  case JSON_ERROR_CTRL_CHAR:
    $data_error = 'Ошибка управляющего символа, возможно верная кодировка';
    break;
  case JSON_ERROR_SYNTAX:
    $data_error = 'Синтаксическая ошибка';
    break;
  case JSON_ERROR_UTF8:
    $data_error = 'Некорректные символы UTF-8, возможно неверная кодировка';
    break;
  default:
    $data_error = 'Неизвестная ошибка';
    break;
}
// if ($POST) { // eсли пeрeдaн мaссив POST
// 	$login = htmlspecialchars($POST["login"]); // пишeм дaнныe в пeрeмeнныe и экрaнируeм спeцсимвoлы
// 	$password = htmlspecialchars($POST["password"]);
    // if ($login == 'log' && $password == 'pass') { // eсли хoть oднo пoлe oкaзaлoсь пустым
	// 	array_push($otv, "true");
    //     $qw="success";
	// }
    // else {
    //     //$otv = "false";
    //     array_push($otv, "false",$login);
    //     $qw="no";
    //
    // }
    array_push($otv, "true");
echo json_encode($qw);
//echo $qw;
//}
// else{
//     array_push($otv, "null");
//     $qw="null";
//     echo json_encode($otv);
//     //echo $qw;
// }
?>
