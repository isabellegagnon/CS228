var controllerOptions = {};
var x = window.innerWidth/2;
var y = window.innerHeight/2;
var randx;
var randy;
var rawXMin = 250;
var rawXMax = -250;
var rawYMin = 250;
var rawYMax = -250;

Leap.loop(controllerOptions, function(frame){
    clear();
    randx = Math.floor(Math.random()*10) - 1;
    randy = Math.floor(Math.random()*10) - 1;
    circle(x + randx, y + randy, 50);
});

function HandleFrame(frame){
    var hand;
    if (frame.hands.length == 1){
        hand = frame.hands[0];
        HandleHand(hand);
    }
}

function HandleHand(hand){
    var finger;
    HandleFinger(hand.indexFinger);
}

function handleFinger(finger){
        var x;
        var y;
        var z;
        [x, y, z] = finger.tipPosition;
        
        if (x < rawXMin){
            rawXMin = x;
            console.log("rawXMin:" + rawXMin);
        }

        if (x < rawXMax){
            rawXMax = x;
            console.log("rawXMax:" + rawXMax);
        }

        if (y < rawYMin){
        rawYMin = y;
        console.log("rawYMin:" + rawYMin);
        }

        if (x < rawXMax){
            rawXMax = x;
            console.log("rawXMax:" + rawXMax);
        }

        if (y < rawYMax){
            rawYMax = Y;
            console.log("rawYMax:" + rawYMax);
        }

}
