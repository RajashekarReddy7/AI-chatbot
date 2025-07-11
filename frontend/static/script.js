async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // Append user message with emoji
  chatBox.innerHTML += `<div class="message user-msg">🧑‍💻 You: ${message}</div>`;
  input.value = "";
    const nameRegex = /(your name|who are you|what(?:'s| is) your name)/i;
  if (nameRegex.test(message)) {
    appendMessage("🤖 Gemini: My friend, developer Rajashekar, named me Chitti.", "bot");
    chatBox.scrollTop = chatBox.scrollHeight;
    return;                         
  }
  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    // Append bot message with emoji
    if (data.response) {
      chatBox.innerHTML += `<div class="message bot-msg">🤖 Chitti: ${data.response}</div>`;
    } else {
      chatBox.innerHTML += `<div class="message bot-msg error-msg">⚠️ Oops! ${data.error || "Something went wrong."}</div>`;
    }
  } catch (error) {
    chatBox.innerHTML += `<div class="message bot-msg error-msg">⚠️ Network Error. Please try again later.</div>`;
    console.error("Client error:", error);
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}
