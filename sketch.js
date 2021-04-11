var ball;
var database;
var pos;
var lol;
var hot;
var air
var balloon;

function preload(){
lol=loadImage("Hot Air Ballon-01.png")
balloon=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}

function setup(){
    database=firebase.database();
    createCanvas(windowWidth,800);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.scale=0.6
    ball.addAnimation("movingBalloon",balloon)
    var ballref = database.ref("ball/position")
    ballref.on("value",readposition,showerror)
}

function draw(){
    background(lol);
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
        }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
     }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
       ball.scale=ball.scale+0.01
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
        ball.scale=ball.scale-0.01
    }
    drawSprites();
}

function changePosition(a,b){
 database.ref("ball/position").set({
     x:pos.x+a ,
     y:pos.y+b
 })

}
function showerror(){
    console.log("unable to read the values from  the database")
}
  
function readposition(data){
 pos=data.val()
 ball.x=pos.x;
 ball.y=pos.y;
}