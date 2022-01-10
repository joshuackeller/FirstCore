//document.getElementById('submitButton').addEventListener("click",
//    (e) => {
//        e.preventDefault();
//        alert("From: " + document.getElementById("textFrom").value +
//            " Subject: " + document.getElementById("textSubject").value +
//            " Message: " + document.getElementById("textMessage").value);
//    });

$('#submitButton').click(
    (e) => {
        (e).preventDefault();
        alert("From: " + $("#textFrom").val() +
            " Subject: " + $("#textSubject").val() +
            " Message: " + $("#textMessage").val());
        $("#picAnderson").fadeToggle('slow');
    });