let photos = [
    "url(./images/slide-bar/sl1.jpg", 
    "url(./images/slide-bar/sl2.jpg)", 
    "url(./images/slide-bar/sl3.jpg)",
    "url(./images/slide-bar/sl4.jpg)",
    "url(./images/slide-bar/sl5.jpg)"
];

let next = document.getElementById("next");
let slider = document.getElementById("slider");
let a = 0;

next.onclick = function() {
    a++;
    console.log(a);
    if (a !== photos.length) {
        document.getElementById("slider").style.backgroundImage = photos[a];
    } else {
        a = 0;
        console.log(a);
        document.getElementById("slider").style.backgroundImage = photos[a];
    }
}

let back = document.getElementById("back");

back.onclick = function() {
    if (a > 0) {
        a--;
        console.log(a);
        document.getElementById("slider").style.backgroundImage = photos[a];
    } else {
        a = (photos.length - 1);
        console.log(a);
        document.getElementById("slider").style.backgroundImage = photos[a];
    }
    // if (a !== 0) {
    //     document.getElementById("slider").style.backgroundImage = photos[a];
    // } else {
    //     a = (photos.length);
    //     document.getElementById("slider").style.backgroundImage = photos[a];
    // }
}