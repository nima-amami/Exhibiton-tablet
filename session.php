<?php
session_start();
if(!isset( $_SESSION['LoggedIn']) || $_SESSION['LoggedIn'] == false)
{
    //expired
    echo "-1";
    session_destroy();
}
else
{
    //not expired
    echo "1";
}
?>
