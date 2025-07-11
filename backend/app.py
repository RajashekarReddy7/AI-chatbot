from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
import os

# Configure Gemini API
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")  # Replace with your actual key
genai.configure(api_key=GOOGLE_API_KEY)

# Initialize Gemini chat model
model = genai.GenerativeModel('gemini-1.5-flash')
chat = model.start_chat(history=[])

# Set up Flask with custom template and static folder paths
app = Flask(
    __name__,
    template_folder=os.path.join('..', 'frontend', 'templates'),
    static_folder=os.path.join('..', 'frontend', 'static')
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat_response():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    try:
        response = chat.send_message(user_input).text
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
