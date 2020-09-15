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
        var fingers = hand.fingers;
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
    xt = bone.nextJoint[0];
    zt = bone.nextJoint[1];
    yt = bone.nextJoint[2];

    xb = bone.prevJoint[0];
    zb = bone.prevJoint[1];
    yb = bone.prevJoint[2];

    [xt,zt] = TransformCoordinates(xt,zt);
    [xb,zb] = TransformCoordinates(xb,zb);

    zt = -zt + (window.innerHeight);
    zb = -zb + (window.innerHeight);

    if (bone.type == 0) {
        strokeWeight(10);
        stroke(24);
        line(xt,zt,xb,zb);
    }

    if (bone.type == 1){
        strokeWeight(9);
        stroke(24);
        line(xt,zt,xb,zb);
    }
    if (bone.type == 2){
        strokeWeight(8);
        stroke(24);
        line(xt,zt,xb,zb);
    }

    else if (bone.type == 3){
        strokeWeight(7);
        stroke(24);
        line(xt,zt,xb,zb);
    }
}

function TransformCoordinates(x,z){
    if ( x < rawXMin){
        rawXMin = x;
    }

    if (x > rawXMax){
        rawXMax = x;
    }

    if (z < rawYMin){
        rawYMin = z;
    }

    if (z > rawYMax){
        rawYMax = z;
    }

    previousXRange = (rawXMax - rawXMin);
    previousYRange = (rawYMax - rawYMin);
    var windowX  = (((x - rawXMin) * window.innerWidth) / previousXRange) + 0;
    var windowY  = (((z - rawYMin) * window.innerHeight) / previousYRange) + 0;
    return[windowX, windowY]
    //circle(windowX, window.innerHeight - windowY, 100);

}
