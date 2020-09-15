var controllerOptions = {};
var randx;
var randy;
var x = window.innerWidth/2;
var y = window.innerHeight/2;
var rawXMin = 650;
var rawXMax = -650;
var rawYMin = 650;
var rawYMax = -650;

Leap.loop(controllerOptions, function(frame){
    clear();
    HandleFrame(frame);
});

function HandleFrame(frame){
    if (frame.hands.length == 1){
        var hand = frame.hands[0];
        HandleHand(hand);
    }
}

function HandleHand(hand) {
    var finger;
    for (i=0; i<fingers.length; i++){
        HandleFinger(fingers[i])
}

function HandleFinger(finger) {
    var x;
    var y;
    var z;
    [x, y, z] = finger.tipPosition;

    if (x < rawXMin) {
        rawXMin = x;
        console.log("rawYMin:" + rawYMin);
    }

    if (x > rawXMax) {
        rawXMax = x;
        console.log("rawyMax:" + rawYMax);
    }

    if (y < rawYMin) {
        rawYMin = y;
        console.log("rawXMin:" + rawXMin);
    }

    if (y > rawYMax) {
        rawYMax = y;
        console.log("rawXMax:" + rawXMax);
    }


    var windowX  = ((x - rawXMin)/(rawXMax - rawXMin)) * window.innerWidth ;
    var windowY  = ((y - rawYMin)/(rawYMax - rawYMin)) * window.innerHeight;
    circle(windowX, window.innerHeight - windowY, 100);

}
