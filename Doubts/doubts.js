// HTML Audio/Video DOM paused Property
// EXAMPLE
var vid = document.getElementById("myVideo1");

function myFunction1() {
    alert(vid.paused);
}


// Video played Property
// EXAMPLE
function myFunction2() {
    var a = document.getElementById("myVideo2");
    document.getElementById("demo2").innerHTML = "Start : " + a.played.start(0) + " End : " + a.played.end(0);
}


// HTML Audio/Video DOM pause() Method
// EXAMPLE
var vid3 = document.getElementById("myVideo3");

function playVid() {
    vid3.play();
}

function pauseVid() {
    vid3.pause();
}