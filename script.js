let qtdCartas
do {
  qtdCartas = Number(prompt('Olá, você quer jogar com quantas cartas?'))

  if (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 == 1) {
    alert(' Você deve digitar um número par de cartas, entre 4 e 14.')
  }
} while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 == 1)

// function makerCard() {
//   let front = document.querySelector('.front')
//   console.log(front)
// }

function distribuirCards() {
  let board = document.querySelector('.game-board')
  let contador = 0
  while (contador < qtdCartas) {
    board.innerHTML += `
    <div class="card">
      <div class="card-front"></div>
      <div class="card-back"></div>
    </div>`
    contador++
  }
}
distribuirCards()
// makerCard()
// console.log(typeOf(contador))
