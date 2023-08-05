function setup(){
    video = createCapture(VIDEO);
    video.szin(550, 500);

    canvas = createCanvas(550, 500);
    canvas.postion(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initializwed');
}
function draw(){
    background('#969A97');
}
function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}