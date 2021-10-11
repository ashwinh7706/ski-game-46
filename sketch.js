var person;
var tree1;

function preload(){
   bg =loadImage("background.png");
   personImg =loadImage("skiperson.png"); 
   treeImg = loadImage("skitree.png")
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);
   

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  person = createSprite(750,600,30,50);
  tree1 = new Tree(800, 200);
  // tree1.addImage("tree1", treeImg)
  // person.addImage("person", personImg);
  if(keyDown("UP_ARROW")){
    person.velocityY = person.velocityY -.8
    console.log(person);
  }


  
  drawSprites();
}

// function updateHeight(x,y){
//   database.ref('balloon/height').set({
//     'x': height.x + x,
//     'y': height.y + y,
//   })
// }

// function readHeight(data){
//   height = data.val();
//   balloon.x = height.x;
//   balloon.y = height.y;
// }

// function showError(){
//   console.log("Error in writing to the database");
// }