function display(){
    
}

const but = document.getElementById("i-button");
but.addEventListener("mouseover", e =>{
    let i = document.getElementById("i-button");
    // console.log(i);
    // i.insertAdjacentHTML('afterend', '<p class="int">При наличии свободных мест</p>');
    // console.log(i); 
    var alert = document.createElement("div");
    alert.className = "int";
    alert.innerHTML = "При наличии свободных мест" ;
    i.appendChild(alert);
    
})
const slider = document.querySelector('.slider-container');
const cardsContainer = document.querySelector('.cards1');
const cards = document.querySelectorAll('.teacher');
let cardIndex = 0;

function slideTo(index) {
  if (index < 0 || index >= cards.length) {
    return;
  }
  
  cards[cardIndex].classList.remove('active');
  cards[index].classList.add('active');
  
  const cardWidth = cards[0].offsetWidth;
  const offset = -1 * cardWidth * index;
  
  cardsContainer.style.transform = `translateX(${offset}px)`;
  cardIndex = index;
}

function next() {
  slideTo(cardIndex + 1);
}

function prev() {
  slideTo(cardIndex - 1);
}

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);
if(cards >= cards[5]){
    nextButton.disabled = true;
}
