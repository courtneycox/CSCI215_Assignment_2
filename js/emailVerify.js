function validEmail() {
    var email = document.getElementById("input").value;
    var atSign = email.indexOf("@");
    var period = email.indexOf(".");

    if (atSign < 1 || period< atSign + 2 || period+2>=email.length) {
        var image = "../images/sad.jpg";
        document.getElementById("output").style.backgroundImage= image;
    }
    else {
        var image = "../images/happy.jpg";
        document.getElementById("output").style.backgroundImage = image;
    }
}
