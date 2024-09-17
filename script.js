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


let rowCount = 0;

function addTable() {
  // Get input value
  var inputValue = document.getElementById("tableInput").value;
  if (inputValue.trim() === "") {
    alert("Please enter a value");
    return;
  }

  // Create a new row and cells
  rowCount++;
  var table = document.getElementById("tableBody");
  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  // Insert No, Value, and Delete Button into the row
  cell1.innerHTML = rowCount;
  cell2.innerHTML = inputValue;
  cell3.innerHTML = '<button class="btn btn-danger" onclick="deleteRow(this)">Delete</button>';

  // Clear input field
  document.getElementById("tableInput").value = "";
}

function deleteRow(button) {
  // Delete the row
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  // Adjust row numbers after deleting a row
  rowCount--;
  updateRowNumbers();
}

function updateRowNumbers() {
  // Recalculate the "No" column numbers after a row is deleted
  var table = document.getElementById("tableBody");
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = i + 1;
  }
}