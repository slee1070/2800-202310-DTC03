const emojis = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍍", "🥭", "🍎", "🍏", "🍐",
 "🍒", "🍓", "🥝", "🍅", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶️", "🥒", "🥬", "🥦", 
 "🧄", "🧅", "🍄", "🌰", "🍞", "🥐", "🥖", "🥨", "🥯", "🥞", "🧇", "🧀", "🍔", 
 "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🥚", "🍳", "🥘", "🍲", "🥗", "🍿", 
 "🧈", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍥", "🥮", 
 "🍡", "🥟", "🥠", "🍦", "🍧", "🍨", "🍩", "🍪", "🍰", "🧁", "🥧", "🍮", "🍑", 
 "✨", "❤️", "🌈", "🎉", "🐱"]

const body = document.querySelector("body");
const clickHere = document.getElementById("clickHere");

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function updateEmoji() {
  var emojiElement = document.getElementById("emoji");
  emojiElement.innerHTML = getRandomEmoji();
}

function createEmoji() {
  const icon = document.createElement("div");
  icon.className = "cute-emojis";
  const emoji = getRandomEmoji();
  icon.innerHTML = emoji;
  icon.style.left = Math.random() * 100 + "vw";
  icon.style.animationDuration = Math.random() * 5 + 2 + "s";
  body.appendChild(icon);
}

function handleClick(event) {
  event.preventDefault();
  
  // Generate a random number between 1 and 10 to determine the number of emojis to create
  const numOfEmojis = Math.floor(Math.random() * 10) + 1;
  
  // Create multiple emojis based on the random number
  for (let i = 0; i < numOfEmojis; i++) {
    createEmoji();
  }
}

clickHere.addEventListener("click", handleClick);
