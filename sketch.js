//Variables <3
var show = 0;
var creatureType, creatureColor, creatureSize;
var body = 250;
var head = 100;

function setup(){
    let cvn = createCanvas(500, 500);
    cvn.mousePressed(canvasPressed);


}

function draw(){
    background(150);
    
    if (show === 1){
    creature(creatureSize, creatureType, creatureColor);
    }
}

function canvasPressed(){
    
    creatureType = int(random(3));
    creatureColor = int(random(3));
    creatureSize = int(random(3));

    show = 1;
}

function keyPressed(){
    clear();
    background(150);
}
function creature(size, type, color){
    rectMode(CENTER);
    ellipseMode(CENTER);

    //Creature size (scale drawing??)
    if (size == 0){
        rect(width/2, height/2, body/3);
        ellipse(width/2, (height/2)-(body/5), head/3);

    }
    if (size == 1){
        rect(width/2, height/2, body, body/2);
        ellipse(width/2, (height/2)-(body/3), head);

    }
    if (size == 2){
        rect(width/2, height/2, body * 1.3);
        ellipse(width/2, (height/2) - (body/2), head * 1.3);
    }

    //Creature Shape or Type
    if (type == 0){
        beginShape();



        endShape();
    }
    if (type == 1){
        beginShape();



        endShape();
    }
    if (type == 2){
        beginShape();



        endShape();
    }

    //Creature color!!
    if (color == 0){
        strokeFill(32, 45, 37);
        fill(35, 29, 32);
    }
    if (color == 1){
        strokeFill(211, 152, 84);
        fill(112, 114, 114);
    }
    if (color == 2){
        strokeFill(140, 221, 73);
        fill(24, 57, 63);
    }
    

}