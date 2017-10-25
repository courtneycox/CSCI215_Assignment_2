window.onload =  choosePic;

var images = ['../images/img1.jpg', '../images/img2.jpg', '../images/img3.jpg', '../images/img4.jpg', '../images/img5.jpg'];

function choosePic() {
    var randNum = Math.floor(Math.random() * images.length);
    document.getElementById('randomPic').src = images[randNum];
}

