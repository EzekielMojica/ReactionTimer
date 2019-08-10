var timeStart = "";
var ctr = 0;
var target = document.getElementById("target");
var average = 0;
var total = 0;
var start = document.getElementById("start");

start.onclick = function(){
    start.style.display = "none";
    appearRandom();
}

function appearRandom(){
    ctr++;
    timeStart = performance.now();
    var randTop = Math.floor(Math.random()*340)+1;
    var randLeft = Math.floor(Math.random()*580)+1;
    target.style.display = "block";
    target.style.top = randTop + "px";
    target.style.left = randLeft + "px";
}

target.onclick = function(){
    target.style.display = "none";
    setTimeout(appearRandom, Math.floor(Math.random()*1700)+300);
    var timeStop = performance.now();
    time = Math.floor(timeStop - timeStart)/1000;
    total = total + time;
    average = total/ctr;
    document.getElementById("time").innerHTML = time.toFixed(3);
    document.getElementById("average").innerHTML = average.toFixed(3);
}
