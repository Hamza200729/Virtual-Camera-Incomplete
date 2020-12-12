var ghost;
var bg;
var frame;

var SCENE_W = 1600;
var SCENE_H = 800;
var ghostImg;

function preload(){
    ghostImg = loadImage("ghost.png");
}

function setup(){
    createCanvas(800 , 400);

    ghost = createSprite(400 , 200 , 35 , 35);
    ghost.addImage(ghostImg);
    ghost.scale = 0.4;

    bg = new Group();

    for(var i=0 ; i<80; i++){
        var rock = createSprite(random(-width , SCENE_W+width) , random(-height , SCENE_H+height) ,20,20);
        bg.add(rock);
    }


}

function draw(){
    background(255 , 255 , 255);


    ghost.velocity.x = (camera.mouseX-ghost.position.x)/20;
    ghost.velocity.y = (camera.mouseY-ghost.position.y)/20;

    if (keyDown("spacebar")){
    camera.zoom = 0.5;
    }
    else{
    camera.zoom = 1;
    }

    if (ghost.position.x<0){
        ghost.position.x = 0;
    }

    if (ghost.position.y<0){
        ghost.position.y = 0;
    }

    if (ghost.position.x > SCENE_W){
        ghost.position.x = SCENE_W;
    }

    if (ghost.position.y > SCENE_H){
        ghost.position.y = SCENE_H;
    }

    drawSprites(bg);

    noStroke(0);
    fill(0 , 0 , 0 , 20);
    ellipse(ghost.position.x , ghost.position.y+90 , 80 , 30);
    drawSprite(ghost);

    // camera.off();
    // image(frame , 0 , 0);
}