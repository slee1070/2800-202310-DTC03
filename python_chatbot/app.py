import os

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chatbot import chat_bot
from dotenv import load_dotenv


load_dotenv()


# Create the Flask app
app = Flask(__name__)
CORS(app)
app.static_folder = 'static'


@app.route('/', methods=['GET'])
def index():
    """
    Renders the 'index.html' template for the root URL.
    """
    return render_template('index.html')


@app.route('/chat', methods=['POST'])
def chat():
    """
    Handles the chat request and returns the chatbot response.
    """
    password = request.json['password']
    if password == os.getenv("CHATBOT_REMOTE_SERVER_PASSWORD"):
        query = request.json['query']
        persona_prompt = request.json['personaPrompt']
        example_conversation = request.json['exampleConversation']
        response = chat_bot(query, persona_prompt, example_conversation)
        return jsonify({'response': response})
    else:
        return "Forbidden", 403


if __name__ == '__main__':
    app.run(debug=True)
