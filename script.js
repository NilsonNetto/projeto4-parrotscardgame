let arrayInicial = [
  'unicornparrot.gif',
  'unicornparrot.gif',
  'metalparrot.gif',
  'metalparrot.gif',
  'fiestaparrot.gif',
  'fiestaparrot.gif',
  'revertitparrot.gif',
  'revertitparrot.gif',
  'explodyparrot.gif',
  'explodyparrot.gif',
  'tripletsparrot.gif',
  'tripletsparrot.gif',
  'bobrossparrot.gif',
  'bobrossparrot.gif'
];

let arrayJogo = [];
let jogadas = 0;

let qtdadecards = prompt('Com quantas cartas quer jogar?');

while (
  qtdadecards < 4 ||
  qtdadecards > 14 ||
  isNaN(qtdadecards) ||
  qtdadecards % 2 === 1
) {
  qtdadecards = prompt('Com quantas cartas quer jogar?');
}

for (let i = 0; arrayJogo.length < qtdadecards; i++) {
  arrayJogo.push(arrayInicial[i]);
}

arrayJogo.sort(comparador); // Embaralhar Array

let deck = document.querySelector('.deck');

for (let i = 0; i < qtdadecards; i++) {
  deck.innerHTML =
    deck.innerHTML +
    ` <div class="card" onclick="clickcard(this)">
        <div class="front-face face">
          <img src="imagens/front.png" alt="parrot" />
        </div>
        <div class="back-face face">
          <img src="imagens/${arrayJogo[i]}" alt="parrotgif" />
        </div>
      </div>`;
}

function clickcard(element) {
  let front = element.querySelector('.front-face');
  let back = element.querySelector('.back-face');
  front.classList.add('front-face-turn');
  back.classList.add('back-face-turn');
  element.classList.add('clicado');
  let cardClicado = document.querySelectorAll('.card.clicado');
  if (cardClicado.length === 2) {
    setTimeout(verificaClicado, 1000);
  }
  jogadas++;
}

function verificaClicado() {
  let cardClicado = document.querySelectorAll('.card.clicado');
  if (cardClicado.length === 2) {
    if (cardClicado[0].innerHTML === cardClicado[1].innerHTML) {
      cardClicado[0].classList.remove('clicado');
      cardClicado[1].classList.remove('clicado');
      cardClicado[0].classList.add('right');
      cardClicado[1].classList.add('right');
      verificaFinal();
    } else {
      let = frontTurned = document.querySelectorAll(
        '.clicado .front-face-turn'
      );
      let = backTurned = document.querySelectorAll('.clicado .back-face-turn');
      frontTurned[0].classList.remove('front-face-turn');
      frontTurned[1].classList.remove('front-face-turn');
      backTurned[0].classList.remove('back-face-turn');
      backTurned[1].classList.remove('back-face-turn');
      cardClicado[0].classList.remove('clicado');
      cardClicado[1].classList.remove('clicado');
    }
  }
}

function verificaFinal() {
  console.log('executando');
  let cardsRight = document.querySelectorAll('.right');
  if (cardsRight.length === Number(qtdadecards)) {
    document.querySelector('.fireworks').classList.add('show');
    alert(`Você ganhou em ${jogadas} jogadas!`);
    let newGame = prompt('Deseja iniciar um novo jogo?');
    if (newGame === 'sim') {
      //iniciar novo jogo
    }
  }
}

// Função para embaralhar Array do jogo
function comparador() {
  return Math.random() - 0.5;
}
