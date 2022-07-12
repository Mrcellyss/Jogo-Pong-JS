//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let raio = dBolinha / 2;

//velocidade da bolinha;
let velocidadexB = 6;
let velocidadeyB = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente ;

//placar
let meuspontos = 0;
let pontosoponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  mostraRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete ();
  movimentaRaqueteOponente();
  incluiPlacar ();
  marcarPonto();
  
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, dBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadexB;
  yBolinha += velocidadeyB;
}

function verificaColisaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexB *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyB *= -1;
  }
}

function mostraRaquete (x, y){
  rect (x, y, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexB *= -1;
  }
}


function movimentaRaqueteOponente (){
  velocidadeyOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeyOponente;
}

function incluiPlacar (){
  textAlign (CENTER);
  textSize (20);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosoponente,470,26);
}

function marcarPonto(){
  if(xBolinha > 590){
    meuspontos +=1;
  }
  if(xBolinha < 10){
    pontosoponente += 1;
  }
}

