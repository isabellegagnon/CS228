var controllerOptions = {};
var x = window.innerWidth/2;
var y = window.innerHeight/2;
var randx;
var randy;

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
        x = finger.TipPosition.[0];
        y = finger.TipPosition.[1];
        z = finger.TipPosition[2];
    }

}


