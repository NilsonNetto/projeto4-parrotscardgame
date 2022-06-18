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

let timerOn = true;
let timerStop;
let seconds = 0;
let minutes = 0;
let clock = document.querySelector('.timer');
let jogadas = 0;
let qtdadecards = Number(prompt(
  'Com quantas cartas quer jogar? \nO número de cartas deve: \n-Ser um número par\n-Mínimo 4 cartas\n-Máximo 14 cartas'
));
startGame();

function startGame() {
  clock.innerHTML = '00:00';
  jogadas = 0;
  seconds = 0;
  minutes = 0;
  let deck = document.querySelector('.deck');
  deck.innerHTML = '';
  let arrayJogo = [];
  while (
    qtdadecards < 4 ||
    qtdadecards > 14 ||
    isNaN(qtdadecards) ||
    qtdadecards % 2 === 1
  ) {
    qtdadecards = Number(prompt(
      'Com quantas cartas quer jogar? \nO número de cartas deve: \n-Ser um número par\n-Mínimo 4 cartas\n-Máximo 14 cartas'
    ));
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
  let cardClicado = document.querySelectorAll('.card.click');
  if (cardClicado[0] === undefined) {
    let front = element.querySelector('.front-face');
    let back = element.querySelector('.back-face');
    front.classList.add('front-face-turn');
    back.classList.add('back-face-turn');
    element.classList.add('click');
    if (timerOn === true) {
      timerOn = false;
      timerStop = setInterval(timer, 1000);
    }
  } else if (cardClicado[1] === undefined) {
    let front = element.querySelector('.front-face');
    let back = element.querySelector('.back-face');
    front.classList.add('front-face-turn');
    back.classList.add('back-face-turn');
    element.classList.add('click');
    verifyMatch();
  }
}

function verifyMatch() {
  let cardClicado = document.querySelectorAll('.card.click');
  if (cardClicado.length === 2) {
    if (cardClicado[0].innerHTML === cardClicado[1].innerHTML) {
      match();
    } else {
      setTimeout(notMatch, 1000);
    }
  }
}

function match() {
  jogadas += 2;
  let cardClicado = document.querySelectorAll('.card.click');
  cardClicado[0].classList.remove('click');
  cardClicado[1].classList.remove('click');
  cardClicado[0].classList.add('match');
  cardClicado[1].classList.add('match');
  verificaFinal();
}

function notMatch() {
  jogadas += 2;
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
    timerOn = true;
    clearInterval(timerStop);
    document.querySelector('.fireworks').classList.add('show');
    alert(`Você ganhou em ${jogadas} jogadas! Tempo: ${clock.innerHTML}`);
    newGame();
  }
}

function newGame() {
  let startAgain = prompt('Deseja iniciar um novo jogo? Digite "sim" ou "não"');
  while (startAgain !== 'sim' && startAgain !== 'não' && startAgain !== 'sim ' && startAgain !== 'não ') {
    startAgain = prompt('Deseja iniciar um novo jogo? Digite "sim" ou "não"');
  }
  if (startAgain === 'sim' || startAgain === 'sim ') {
    document.querySelector('.fireworks').classList.remove('show');
    qtdadecards = 0;
    startGame();
  }
}

function timer() {
  if (seconds < 9) {
    seconds++;
    clock.innerHTML = `0${minutes}:0${seconds}`;
  } else if (seconds < 60) {
    seconds++;
    clock.innerHTML = `0${minutes}:${seconds}`;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    clock.innerHTML = `0${minutes}:0${seconds}`;
  }
  
}

// Função para embaralhar Array do jogo
function comparador() {
  return Math.random() - 0.5;
}
