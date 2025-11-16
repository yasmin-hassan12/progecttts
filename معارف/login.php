<?php
if ($_POST['username'] == 'feryal' && $_POST['password'] == '123456') {
    header('Location: index.html');
    exit();
}else{
    header('Location: error.html');
    exit();  
}
?>
