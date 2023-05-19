function filterRecipes() {
  const europeanCheckbox = document.getElementById('europeanCheckbox');
  const mexicanCheckbox = document.getElementById('mexicanCheckbox');
  const koreanCheckbox = document.getElementById('koreanCheckbox');
  const chineseCheckbox = document.getElementById('chineseCheckbox');
  const japaneseCheckbox = document.getElementById('japaneseCheckbox');
  const indianCheckbox = document.getElementById('indianCheckbox');
  const greekCheckbox = document.getElementById('greekCheckbox');
  const brazilianCheckbox = document.getElementById('brazilianCheckbox');
  const thaiCheckbox = document.getElementById('thaiCheckbox');
  const cards = document.getElementsByClassName('card');

  // Show all cards by default
  Array.from(cards).forEach((card) => {
    card.style.display = 'none';
  });

  const selectedCuisines = []; // Array to store selected cuisine values

  // Check which checkboxes are selected
  if (europeanCheckbox.checked) {
    selectedCuisines.push('European');
  }
  if (mexicanCheckbox.checked) {
    selectedCuisines.push('Mexican');
  }
  if (koreanCheckbox.checked) {
    selectedCuisines.push('Korean');
  }
  if (chineseCheckbox.checked) {
    selectedCuisines.push('Chinese');
  }
  if (japaneseCheckbox.checked) {
    selectedCuisines.push('Japanese');
  }
  if (indianCheckbox.checked) {
    selectedCuisines.push('Indian');
  }
  if (greekCheckbox.checked) {
    selectedCuisines.push('Greek');
  }
  if (brazilianCheckbox.checked) {
    selectedCuisines.push('Brazilian');
  }
  if (thaiCheckbox.checked) {
    selectedCuisines.push('Thai');
  }

  Array.from(cards).forEach((card) => {
    const recipeKeywords = card.getAttribute('data-keywords');
    let displayCard = false;

    // Check if the card matches any selected cuisine
    if (
      selectedCuisines.length === 0 || // Display all cards if no cuisine preferences selected
      selectedCuisines.some((cuisine) => recipeKeywords.includes(cuisine)) // Display card if it matches any selected cuisine
    ) {
      displayCard = true;
    }

    if (displayCard) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Call the filterRecipes function initially to prefilter the recipes based on user's cuisine preferences
filterRecipes();

const modals = document.querySelectorAll('.modal');
modals.forEach((modalElement) => {
  const modal = modalElement;
  const closeBtn = modal.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
