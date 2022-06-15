//let qtdadecards = prompt('Com quantas cartas quer jogar?');

let qtdadecards = 14;

while (
  qtdadecards < 4 ||
  qtdadecards > 14 ||
  isNaN(qtdadecards) ||
  qtdadecards % 2 === 1
) {
  qtdadecards = prompt('Com quantas cartas quer jogar?');
}

let contador = 0;
let deck = document.querySelector('.deck');

while (contador < qtdadecards) {
  deck.innerHTML =
    deck.innerHTML +
    `<div class="card">
        <img src="imagens/front.png" alt="parrot" />
      </div>`;
  contador++;
}
