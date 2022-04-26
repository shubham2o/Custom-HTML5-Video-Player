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