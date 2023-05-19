function filterRecipes() {
  const veganCheckbox = document.getElementById('veganCheckbox');
  const lactoseFreeCheckbox = document.getElementById('lactoseFreeCheckbox');
  const yeastFreeCheckbox = document.getElementById('yeastFreeCheckbox');
  const nutFreeCheckbox = document.getElementById('nutFreeCheckbox');
  const cards = document.getElementsByClassName('card');

  // Show all cards by default
  Array.from(cards).forEach((card) => {
    card.style.display = 'block';
  });

  // Check if Vegan checkbox is selected
  if (veganCheckbox.checked) {
    Array.from(cards).forEach((card) => {
      const recipeKeywords = card.getAttribute('data-keywords');
      if (!recipeKeywords.includes('Vegan')) {
        card.style.display = 'none';
      }
    });
  }

  // Check if Lactose Free checkbox is selected
  if (lactoseFreeCheckbox.checked) {
    Array.from(cards).forEach((card) => {
      const recipeKeywords = card.getAttribute('data-keywords');
      if (!recipeKeywords.includes('Lactose Free')) {
        card.style.display = 'none';
      }
    });
  }

  // Check if Yeast Free checkbox is selected
  if (yeastFreeCheckbox.checked) {
    Array.from(cards).forEach((card) => {
      const recipeKeywords = card.getAttribute('data-keywords');
      if (recipeKeywords.includes('Yeast Breads')) {
        card.style.display = 'none';
      }
    });
  }

  // Check if Nut Free checkbox is selected
  if (nutFreeCheckbox.checked) {
    Array.from(cards).forEach((card) => {
      const recipeKeywords = card.getAttribute('data-keywords');
      if (recipeKeywords.includes('Nuts')) {
        card.style.display = 'none';
      }
    });
  }
}

// Call the filterRecipes function initially to prefilter the recipes based on user's dietary restrictions
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
