<?php
session_start();
if(!isset( $_SESSION['LoggedIn']) || $_SESSION['LoggedIn'] == false)
{
    echo "-1";
    session_destroy();
}
else
{
    echo "1";
}
?>
