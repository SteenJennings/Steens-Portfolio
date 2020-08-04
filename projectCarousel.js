var picIndex = 1;
var myVar;

automaticPics();

function nextPic(n) {
    showPics(picIndex += n);
}

function activePic(n) {
    showPics(picIndex = n);
}

function showPics(n) {
    var i;
    var pics = document.getElementsByClassName("carousel_pic");
    if (n > pics.length) { picIndex = 1 }
    if (n < 1) { picIndex = pics.length }
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    pics[picIndex - 1].style.display = "block";
    clearTimeout(myVar) // Clears the timer when we manually switch images
    myVar = setTimeout(automaticPics, 4000); // Change image every 4 seconds

}

function automaticPics() {
    var i;
    var pics = document.getElementsByClassName("carousel_pic");
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    picIndex++;
    if (picIndex > pics.length) { picIndex = 1 }
    pics[picIndex - 1].style.display = "block";
    myVar = setTimeout(automaticPics, 4000); // Change image every 4 seconds
}