from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chatbot import chat_bot

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
    query = request.json['query']
    response = chat_bot(query)
    return jsonify({'response': response})


if __name__ == '__main__':
    app.run(debug=True)
