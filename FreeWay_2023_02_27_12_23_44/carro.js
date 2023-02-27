//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [32, 87, 143, 202, 253, 305];
let velocidadeCarros = [7, 4, 3.5, 5, 3.3, 2.3];
let larguraCarros = [100, 100, 90, 100, 100, 90];
let alturaCarros = [60, 60, 55, 60, 60, 55];


//mostra o carro
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros[i], alturaCarros[i]);
  }
}

//movimenta o carro
function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
    }
  }
  


function voltaPosicaoInicialDoCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i] )) {
    xCarros[i] = 600;
    }
  }
}

function passouTodaATela(){
  if (xCarros[0] < -100){
    xCarros[0] = 600
  }
  if (xCarros[1] < -100){
    xCarros[1] = 600
  }
  if (xCarros[2] < -100){
    xCarros[2] = 600
  }
  if (xCarros[3] < -100){
    xCarros[3] = 600
  }
  if (xCarros[4] < -100){
    xCarros[4] = 600
  }
  if (xCarros[5] < -100){
    xCarros[5] = 600
  }
}