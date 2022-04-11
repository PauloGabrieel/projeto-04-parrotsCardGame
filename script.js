let parrots = ["bobrossparrot", "explodyparrot","fiestaparrot", 
"metalparrot","revertitparrot","tripletsparrot","unicornparrot"]
let cards =[]
let numberOfCards = 0
let condition = (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 == 1)
let cardsToplay =[]




starGame()

function starGame(){
  do{
  
    numberOfCards = Number(prompt('Olá, você quer jogar com quantas cartas?'))
    condition = (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 == 1)
    if (condition) {
      alert(' Você deve digitar um número par de cartas, entre 4 e 14.')
    }
  }while(condition)
  
  cards = createCards(parrots)
  
  for( let index = 0;index < numberOfCards;index++ ){
    cardsToplay.push(cards[index])  
  }
  cardsToplay.sort(shuffleCards)
  console.log(cardsToplay)
  dealTheCards()
}
function shuffleCards(){
  return Math.random() - 0.5
}

function createCards(parrots){
  for( let parrot of parrots ){
    cards.push(createPair(parrot))  
  }

  return cards.flatMap(pair => pair)
}

function createPair(parrot){
  
  return  [{ 
            id: createId(parrot),
            nome: parrot,
            flipped : false  },
{
            id: createId(parrot),
            nome: parrot,
            flipped : false
            
            }
]

}
function createId(parrot){

  return parrot + parseInt(Math.random()* 1000)
}
function dealTheCards() {
  const board = document.querySelector('.game-board')
  let contador = 0
  let cardsFront
  
  while (contador < numberOfCards) {
    board.innerHTML += `
        <div class="card" onclick="turnTheCard(this)">
          <div class="card-front"></div>
          <div class="card-back"></div>
      
        `
    cardsFront = document.querySelectorAll(".card .card-front")
    cardsFront[contador].style.backgroundImage = `url(./images/${cardsToplay[contador].nome}.gif)`
    contador++

  }
}


function turnTheCard(element){
  element.classList.add("flip")
}
