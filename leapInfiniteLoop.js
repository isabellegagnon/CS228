var controllerOptions = {};
//var i = 0;
var x = window.innerWidth/2;
var y = window.innerHeight/2;

var randx;
var randy;

Leap.loop(controllerOptions, function(frame)
    {
       //clear();
        //randx = Math.floor(Math.random()*10) - 1;
        //randy = Math.floor(Math.random()*10) - 1;
        //circle(x + randx, y + randy, 50);
        for(var h = 0; h < frame.hands.length; h++){
            if (frame.hands.length == 1){
                var hand = frame.hands[0];
            }
            var hand = frame.hands[h];
        }
        console.log(frame.hands);
        //console.log(i);
        //i+=1;

    });x



