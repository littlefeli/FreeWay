//código do Ator


//variáveis do ator
let xAtor = 250;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

//mostra o ator
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 30);
  
}

//movimenta o ator
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }
  }
  //Movimenta o persnoagem para direita
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  //Movimenta o persnoagem para esquerda
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros [i], larguraCarros[i], alturaCarros[i], xAtor, yAtor, 15);
    if (colisao){
            

      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      
        }  
      }
    }
 }

function voltaAtorParaPosicaoInicial(){
  yAtor = 370;
  xAtor = 250;
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(255,240,60))
  textSize(25)
  text(meusPontos, width / 5, 27)
  
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
    }
  }
  
function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 370;
}