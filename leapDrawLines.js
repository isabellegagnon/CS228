var controllerOptions = {};
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

function HandleHand(hand){
    var fingers = hand.fingers;
    for (i=0; i<fingers.length; i++){
        HandleFinger(fingers[i])
    }
}

function HandleFinger(finger) {
    var bones = finger.bones;
    for (var i = 0; i < bones.length; i++) {
        HandleBone(finger.bones[i]);
    }
}

function HandleBone(bone){
  var tipPosition;
  var basePosition;
  var x, y;

  basePosition = bone.prevJoint;
  tipPosition = bone.nextJoint;
  x = tipPosition[0];
  y = tipPosition[1];

    if (x < rawXMin) {
        rawXMin = x;
    }

    if (x > rawXMax) {
        rawXMax = x;
    }

    if (y < rawYMin) {
        rawYMin = y;
    }

    if (y > rawYMax) {
        rawYMax = y;
    }


    var windowX  = ((x - rawXMin)/(rawXMax - rawXMin)) * window.innerWidth ;
    var windowY  = ((y - rawYMin)/(rawYMax - rawYMin)) * window.innerHeight;
    circle(windowX, window.innerHeight - windowY, 100);

}
