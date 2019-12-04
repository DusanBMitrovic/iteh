$(document).ready(function() {
    $.ajax({
        url: 'returnUname.php',
        data: { function2call: 'getUname' },
        type: 'post',
        success: function(response) {
            if (response == 0) {
                console.log("Nema ulogovanog korisnika");

            } else {
                $('#loginDiv').html("<p>Vec ste ulogovani<p>");
                console.log("Korisnik: ", response)
            }
        }
    });


});