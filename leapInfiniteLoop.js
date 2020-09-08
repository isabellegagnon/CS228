var controllerOptions = {};
//var i = 0;
var x = window.innerWidth/2;
var y = window.innerHeight/2;

var randx;
var randy;

Leap.loop(controllerOptions, function(frame)
    {
        clear();
        randx = Math.floor(Math.random()*2) - 1;
        randy = Math.floor(Math.random()*2) - 1;
        circle(x + randx, y + randy, 50);

        //console.log(i);
        //i+=1;

    });x

