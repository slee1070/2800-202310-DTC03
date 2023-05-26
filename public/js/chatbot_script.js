document.addEventListener('DOMContentLoaded', () => {
  const chatLog = document.getElementById('chat-log');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const fileInput = document.getElementById('file-input');

  sendBtn.addEventListener('click', () => {
    const query = userInput.value.trim();

    if (query !== '') {
      addMessage('You', query);

      // Show loading indication
      addMessage(persona, 'Typing...', true);

      sendQuery(query);
    }
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const contents = event.target.result;
        const words = contents.trim().split(/\s+/g);
        const lastWord = words.pop();
        const formattedContents = `Suggest me recipes with what I have: ${words.join(', ')}, and ${lastWord}.`; // Format the file contents with commas and a period for the last word
        userInput.value = formattedContents; // Set the formatted file contents as user input
      };
      reader.readAsText(file);
    } else {
      userInput.value = ''; // Clear the user input if no file is selected
    }
  });

  function sendQuery(query) {
    fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        persona: persona,
        query: query,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Remove the loading indication
        removeLoadingMessage();

        addMessage(persona, data.response);
      })
      .catch((error) => {
        // Remove the loading indication
        removeLoadingMessage();

        console.error('Error:', error);
      });

    userInput.value = '';
  }

  function addMessage(sender, message, isLoading = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;

    if (isLoading) {
      messageElement.classList.add('loading');
    }

    if (sender === persona) {
      messageElement.classList.add('bot-message'); // Add 'bot-message' class for assistant messages
    } else {
      messageElement.classList.add('user-message');
    }

    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function removeLoadingMessage() {
    const loadingMessage = chatLog.querySelector('.message.loading');
    if (loadingMessage) {
      loadingMessage.remove();
    }
  }
});

var input = document.getElementById("user-input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-btn").click();
  }
});

