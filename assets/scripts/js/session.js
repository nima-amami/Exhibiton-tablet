// Session timeout


function session_checking()
{
    $.post("../session.php", function(data) {
        if(data == "-1")
        {

            window.location = "../";
        }
    });

}
var validateSession = setInterval(session_checking, 120000);
