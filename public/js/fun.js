// Array of emojis
const emojis = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍍", "🥭", "🍎", "🍏", "🍐",
 "🍒", "🍓", "🥝", "🍅", "🥔", "🥕", "🌽", "🌶️", "🥒", "🥬", "🥦",  "🧄", 
 "🧅", "🍄", "🌰", "🍞", "🥐", "🥖", "🥨", "🥯", "🥞", "🧇", "🧀", "🍔", 
 "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🥚", "🍳", "🥘", "🍲", "🥗", 
 "🍿", "🧈", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣",
 "🍥", "🥮", "🍡", "🥟", "🥠", "🍦", "🍧", "🍨", "🍩", "🍪", "🍰", "🧁", 
 "🥧", "🍮", "🍑", "✨", "❤️", "🌈", "🎉", "🐱"]

//  Get the body element and button
const body = document.querySelector("body");
const clickHere = document.getElementById("clickHere");

// Get a random emoji from the emoji array
function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Create an emoji and append it
function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "cute-emojis";
  const random_emoji = getRandomEmoji();
  emoji.innerHTML = random_emoji;
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 5 + 2 + "s";
  body.appendChild(emoji);
}

// Handle the click event
function handleClick(event) {
  event.preventDefault();
  
  // Generate a random number between 1 and 10 to determine the number of emojis to create
  const numOfEmojis = Math.floor(Math.random() * 10) + 1;
  
  // Create multiple emojis based on the random number
  for (let i = 0; i < numOfEmojis; i++) {
    createEmoji();
  }
}

// Add event listener to the button
clickHere.addEventListener("click", handleClick);
