$('#exampleModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus');
});

$(function() {
    $('#datepicker').datepicker();
});

function insertNewReservation() {
    var xhttp;
    xhttp = new XMLHttpRequest();

    console.log('USAOOO');

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("txtHint").innerHTML = this.responseText;
        }
    };

    xhttp.open('GET', 'rezervisi.php');
    xhttp.send();
}

$('#newReservationForm').submit(function(e) {
    $('#errorIme').remove();
    $('#errorDatum').remove();
    $('#errorBrojOsoba').remove();
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'rezervisi.php',
        data: $(this).serialize(),
        success: function(response) {
            var jsonData = JSON.parse(response);

            // let's redirect
            if (jsonData.success == '1') {
                $('#formBtns').prepend(
                    "<span class='text-success font-weight-bold'> Uspesno ste rezervisali mesto! </span>"
                );
            } else {
                if (jsonData.success == '100') {
                    $('#formBtns').prepend(
                        "<span id='errorIme' class='text-danger font-weight-bold'> Unesite ime! </span>"
                    );
                }
                if (jsonData.success == '200') {
                    $('#formBtns').prepend(
                        "<span id='errorDatum' class='text-danger font-weight-bold'> Unesite datum! </span>"
                    );
                }
                if (jsonData.success == '300') {
                    $('#formBtns').prepend(
                        "<span id='errorBrojOsoba' class='text-danger font-weight-bold'> Izaberite broj osoba! </span>"
                    );
                }
            }
        }
    });
});

$(document).ready(function() {
    $('#reservationTable').DataTable({
        processing: true,
        serverSide: true,
        ajax: './vratiRezervacije.php',
        columns: [
            { title: '#' },
            { title: 'Ime' },
            { title: 'Datum' },
            { title: 'Broj ljudi' },
            { title: 'Napomena' }
        ]
    });
});

$('#loginBtn').click(function(e) {
    var username = $('#txt_uname')
        .val()
        .trim();
    var password = $('#txt_pwd')
        .val()
        .trim();

    e.preventDefault();
    if (username != '' && password != '') {
        $.ajax({
            url: 'checkUser.php',
            type: 'post',
            data: { username: username, password: password },
            success: function(response) {
                var jsonData = JSON.parse(response);

                // let's redirect
                if (jsonData.success == '1') {
                    $('#message').html('Uspesno Logovanje ');
                    setTimeout(() => {
                        window.location.replace("./rezervacije.php");
                    }, 1500)
                } else {
                    $('#message').html('Neuspesno Logovanje ');
                }
            }
        });
    }
});


$('#logoutDiv').click(function() {
    console.log("LOGOUT");

    $.ajax({
        url: 'returnUname.php',
        data: { function2call: 'logout' },
        type: 'post',
        success: function() {
            console.log('User nije vise ulogovan');
            location.reload();
        }
    });
})



$(document).ready(function() {
    $.ajax({
        url: 'returnUname.php',
        data: { function2call: 'getUname' },
        type: 'post',
        success: function(response) {
            if (response == 0) {
                console.log("Nema ulogovanog korisnika");
            } else {
                $('#logoutDiv').html(` <button class="btn btn-outline-danger" name="logout" id="logout">Logout</button>`)
                var but = $('#logout');


            }
        }
    });

});