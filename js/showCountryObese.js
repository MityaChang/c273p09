$(document).ready(function () {
    $("#idCountry").change(function () {
        var id = $("#idCountry").val();
        $.ajax({
            type: "GET",
            url: "http://localhost/C273/C273_L09CloudNine/getCountryDetails.php",
            cache: false,
            dataType: "JSON",
            data: "id=" + id,
            success: function (response) {
                var message = "<tr><th>Population</th><th>Obese</th></tr>";
                for (i = 0; i < response.length; i++) {
                    message += "<tr><td>" + response[i].population + "</td>"
                            + "<td>" + response[i].obese + "</td></tr>";
                }
                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });

});
