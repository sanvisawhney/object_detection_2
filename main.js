status = "";

function preload(){
    img = loadImage("download.jpeg");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    objectDetector =  ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    status = "true";
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img, 0, 0 , 600, 500);
}
