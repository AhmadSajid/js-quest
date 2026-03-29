const gameBoard = document.getElementById("game-board");
const attemptsDisplay = document.getElementById("attempts");

let attempts = 0;
let firstCard = null;
let secondCard = null;

// Cards: 4 pairs
const cards = ["A", "A", "B", "B", "C", "C", "D", "D"];

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledCards = shuffle(cards);

// Create cards in DOM
shuffledCards.forEach(value => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = value;
  card.textContent = "";
  gameBoard.appendChild(card);

  card.addEventListener("click", () => {
    if (card.textContent !== "" || secondCard) return; // already flipped / 2 cards flipped

    card.textContent = card.dataset.value;

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      attempts++;
      attemptsDisplay.textContent = attempts;

      if (firstCard.dataset.value === secondCard.dataset.value) {
        // Match
        firstCard = null;
        secondCard = null;
      } else {
        // No match → flip back after 1 sec
        setTimeout(() => {
          firstCard.textContent = "";
          secondCard.textContent = "";
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  });
});