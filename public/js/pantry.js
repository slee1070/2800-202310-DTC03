let selectedIngredients = [];
let selectedItemsToRemove = [];

// Function to toggle selection of ingredients and items to remove
function toggleSelection(element) {
  if (element.classList.contains('custom-ingredient-button')) {
    element.classList.remove('custom-ingredient-button');
    element.classList.add('btn-success');
    selectedIngredients.push(element.id);
  } else if (element.classList.contains('btn-success')) {
    element.classList.remove('btn-success');
    element.classList.add('custom-ingredient-button');
    const index = selectedIngredients.indexOf(element.id);
    if (index > -1) {
      selectedIngredients.splice(index, 1);
    }
  } else if (element.classList.contains('custom-remove-button')) {
    element.classList.remove('custom-remove-button');
    element.classList.add('btn-danger');
    selectedItemsToRemove.push(element.getAttribute('data-itemid'));
  } else if (element.classList.contains('btn-danger')) {
    element.classList.remove('btn-danger');
    element.classList.add('custom-remove-button');
    const index = selectedItemsToRemove.indexOf(
      element.getAttribute('data-itemid')
    );
    if (index > -1) {
      selectedItemsToRemove.splice(index, 1);
    }
  }
  console.log(selectedItemsToRemove);
}

$(function () {
  // Initialize datepicker for best before dates
  $("input[id^='date-']").datepicker({
    minDate: 0,
    dateFormat: 'mm/dd/yy',
    onSelect: function (dateText) {
      updateBestBeforeDate(this.id.substring(5), { value: dateText }); // Call update function with selected date
    },
  });
});

// Function to update the best before date
function updateBestBeforeDate(foodName, dateInput) {
  // Convert the selected date to the format MM-DD-YYYY
  var dateParts = dateInput.value.split('-');
  var formattedDate = dateParts[1] + '/' + dateParts[2] + '/' + dateParts[0];

  // Send an AJAX request to the server to update the best before date
  $.ajax({
    url: '/update-best-before-date',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      username: username,
      foodName: foodName,
      bestBeforeDate: formattedDate,
    }),
    success: function (response) {
      console.log('Successfully updated best before date');
    },
    error: function (error) {
      console.log('Error updating best before date', error);
    },
  });
}

// Function to save selected ingredients to the pantry
function saveToPantry() {
  console.log(username);
  console.log(selectedIngredients);

  // Send an AJAX request to the server to update the pantry
  $.ajax({
    url: '/update-pantry',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      username: username,
      pantryItems: selectedIngredients.map((ingredient) => ({
        food: ingredient,
      })),
    }),
    success: function (response) {
      console.log(response);
      console.log('Success updating pantry');
      window.location.href = '/pantry';
    },
    error: function (error) {
      console.log(error);
      console.log('Error updating pantry');
    },
  });
}

// Function to remove selected items from the pantry
function removeFromPantry() {
  console.log(selectedItemsToRemove);
  // Send an AJAX request to the server to remove items from the pantry
  $.ajax({
    url: '/remove-from-pantry',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      username: username,
      itemsToRemove: selectedItemsToRemove,
    }),
    success: function (response) {
      console.log(response);
      console.log('Success removing from pantry');
      window.location.href = '/pantry';
    },
    error: function (error) {
      console.log(error);
      console.log('Error removing from pantry');
    },
  });
}

$(document).ready(function () {
  $('#modal-button').click(function () {
    $('#myModal').modal('show');
  });

  const showMoreButtons = document.querySelectorAll('.show-more-btn');

  showMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const hiddenIngredients = button.nextElementSibling;
      hiddenIngredients.style.display = 'block';
      button.style.display = 'none';
    });
  });
});
