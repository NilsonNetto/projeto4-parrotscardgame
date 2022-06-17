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

let jogadas = 0;

let qtdadecards = prompt('Com quantas cartas quer jogar?');
startGame();

function startGame() {
  let deck = document.querySelector('.deck');
  deck.innerHTML = '';
  jogadas = 0;
  let arrayJogo = [];
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
}

function clickcard(element) {
  jogadas++;
  let front = element.querySelector('.front-face');
  let back = element.querySelector('.back-face');
  front.classList.add('front-face-turn');
  back.classList.add('back-face-turn');
  element.classList.add('click');
  let cardClicado = document.querySelectorAll('.card.click');
  if (cardClicado.length >= 2) {
    if (cardClicado[0].innerHTML === cardClicado[1].innerHTML) {
      match();
    } else {
      setTimeout(notMatch, 1000);
    }
  }
}

function match() {
  let cardClicado = document.querySelectorAll('.card.click');
  cardClicado[0].classList.remove('click');
  cardClicado[1].classList.remove('click');
  cardClicado[0].classList.add('match');
  cardClicado[1].classList.add('match');
  verificaFinal();
}

function notMatch() {
  let cardClicado = document.querySelectorAll('.card.click');
  let = frontTurned = document.querySelectorAll('.click .front-face-turn');
  let = backTurned = document.querySelectorAll('.click .back-face-turn');
  frontTurned[0].classList.remove('front-face-turn');
  frontTurned[1].classList.remove('front-face-turn');
  backTurned[0].classList.remove('back-face-turn');
  backTurned[1].classList.remove('back-face-turn');
  cardClicado[0].classList.remove('click');
  cardClicado[1].classList.remove('click');
}

function verificaFinal() {
  let cardsRight = document.querySelectorAll('.match');
  if (cardsRight.length === Number(qtdadecards)) {
    document.querySelector('.fireworks').classList.add('show');
    alert(`Você ganhou em ${jogadas} jogadas!`);
    newGame();
  }
}

function newGame() {
  let startAgain = prompt('Deseja iniciar um novo jogo?');
  while (startAgain !== 'sim' && startAgain !== 'não') {
    startAgain = prompt('Deseja iniciar um novo jogo?');
  }
  if (startAgain === 'sim') {
    document.querySelector('.fireworks').classList.remove('show');
    qtdadecards = 0;
    startGame();
  }
}

// Função para embaralhar Array do jogo
function comparador() {
  return Math.random() - 0.5;
}
