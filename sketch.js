//Variables <3
var show = 0;
var creatureType, creatureSize;
var body = 250;
var head = 100;

function setup(){
    let cvn = createCanvas(500, 500);
    cvn.mousePressed(canvasPressed);


}

function draw(){
    background(161, 181, 201);
    if (show === 1){
        noLoop();
        let colors = [
            color(161, 56, 56),
            color(39, 145, 68),
            color(41, 43, 97),
            color(41, 97, 90),
            color(147, 194, 188),
            color(97, 32, 75),
            color(242, 220, 274),
        ];
    
        let randomColor = random(colors);
        fill(randomColor);

        let strokes = [
            color(30, 37, 43),
            color(59, 12, 30),
            color(14, 59, 12),
            color(59, 22, 12),
            color(39, 12, 59),
        ];
        let randomStroke = random(strokes);
        strokeWeight(5);
        stroke(randomStroke);

        creature(creatureSize, creatureType);
        
    }

}

function canvasPressed(){
    
    creatureType = int(random(3));
    creatureSize = int(random(3));

    show = 1;
}

function keyPressed(){
    clear();
    background(150);
}
function creature(size, type){
    rectMode(CENTER);
    ellipseMode(CENTER);

    //Creature size (scale drawing??)
    if (size == 0){
        rect(width/2, height/2, body - 100, body/3);
        ellipse(width/2, (height/2)-(body/3), head + 10 , head + 30);
    }
    if (size == 1){
        rect(width/2, height/2, body, body/2);
        ellipse(width/2, (height/2)-(body/3), head);

    }
    if (size == 2){
        rect(width/2, height/2, body/2 , body + 50);
        ellipse(width/2, (height/2)-(body/3), head + 20, head);

    }

    //Creature Shape or Type
    if (type == 0){
       beginShape();
       fill(255);
       strokeWeight(2);
        rect(212, 150, 5, 15);
        rect(282, 150, 5, 15);
        rect(250, 165, 50, 3);
        endshape();
        
    }
    if (type == 1){
        beginShape();
        fill(0);
        strokeWeight(2);
        rect(212, 150, 15, 10);
        rect(282, 150, 15, 10);
        rect(210, 180, 50, 2)
        endShape();
    }
    if (type == 2){
        beginShape();
        fill(219, 9, 9);
        strokeWeight(3);
        ellipse(212, 150, 8);
        ellipse(282, 150, 12);
        rect(295, 180, 20, 10)
        endShape();
    }
}