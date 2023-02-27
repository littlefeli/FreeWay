//imagens e sons do jogo


//variáveis de imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;


//carrega as imagens 
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/preto.png")
  imagemCarro2 = loadImage("imagens/lambo.png")
  imagemCarro3 = loadImage("imagens/azul.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound ("sons/colidiu.mp3");
  somDoPonto = loadSound ("sons/pontos.wav");
}

