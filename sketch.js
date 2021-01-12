var G1,G2,G3,G4;
var fixrect, movingrect;

function setup() {
createCanvas(1200,800);
fixrect=createSprite(600, 400, 90, 50);
fixrect.shapeColor="green";
fixrect.debug=true;

movingrect=createSprite(400,600,50,90);
movingrect.shapeColor="green";
movingrect.debug=true;

 G1=createSprite(200,200,10,30);
 G1.shapeColor="green";

 G2=createSprite(100,150,30,10);
 G2.shapeColor="green";

 G3=createSprite(300,200,10,10);
 G3.shapeColor="green";

 G4=createSprite(300,300,30,30);
 G4.shapeColor="green";
}

function draw() {
  background(0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(Touching(movingrect,G2)){
    movingrect.shapeColor="red";
    G2.shapeColor="red";
  }else
  { movingrect.shapeColor="green";
    G2.shapeColor="green";
  }
  


  
  drawSprites();
}

function Touching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
  }else
  { 
    return false;
  }
}
