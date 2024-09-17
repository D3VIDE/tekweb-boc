function addCard() {
  // Get the name from the input field
  var name = document.getElementById('nameInput').value;

  // Check if name is not empty
  if (name.trim() !== "") {
    var cardId = 'card-' + Date.now();

    // Create a card to display the name
    var card = `
      <div id="${cardId}" class="card custom-card mt-3">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder image">
        <div class="card-body">
          <h5 class="card-title">Hello, ${name}!</h5>
          <p class="card-text">This is a card for ${name}, customized using Bootstrap card layout.</p>
          <button type="button" class="btn-close" aria-label="Close" onclick="deleteCard('${cardId}')"></button>
        </div>
      </div>
    `;

    // Append the new card to the container
    document.getElementById('cardContainer').innerHTML += card;

    // Clear the input field after adding the card
    document.getElementById('nameInput').value = "";
  }
}

function deleteCard(cardId) {
  // Find the card by its ID and remove it
  var cardElement = document.getElementById(cardId);
  if (cardElement) {
    cardElement.remove();
  }
}