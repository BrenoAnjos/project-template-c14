var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  //carregue a imagem do balão verde
green_balloonImage = loadImage("green_balloon0.png")
  //carregue a imagem do balão rosa
pink_balloonImage = loadImage("pink_balloon0.png")
  //carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: //chamar o balãovermelho
    redBalloon()
    break;
    case 2://chamar o balãoazul
    blueBalloon()
    break;
    case 3://chamar o balãoverde
    greenBalloon()
    break;
    case 4://chamar o balãorosa
    pinkBalloon()
break;

  }}
  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //crieSprite para o balão
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10); 
  //adicioneImagem para o balão
  azul.addImage(blue_balloonImage);
  //adicione velocidade para fazer o balão se mover
  azul.velocityX = 3;
  //mudar a dimensão do balão
  azul.scale = 0.1
  //atribua tempo de vida ao balão
  azul.lifetime = 150;
}
function greenBalloon() {
  //crieSprite para o balão
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  verde.addImage(green_balloonImage);
  //adicione velocidade para fazer o balão se mover
  verde.velocityX = 3;
  //mudar a dimensão do balão
  verde.scale = 0.1
  //atribua tempo de vida ao balão
  verde.lifetime = 150;
}
function pinkBalloon() {
  //crieSprite para o balão
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  rosa.addImage(pink_balloonImage);
  //adicione velocidade para fazer o balão se mover
  rosa.velocityX = 3;
  //mudar a dimensão do balão
  rosa.scale = 0.8
  //atribua tempo de vida ao balão
  rosa.lifetime = 150;
}