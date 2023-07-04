async function sendChatMessage(event) {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  const res = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: input.value,
    }),
  });
  input.value = "";
}

function displayChatMessage(message) {
  const ul = document.querySelector("#chat-ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

async function getChatMessages() {
  const res = await fetch("/chat");
  const messages = await res.json();
  const ul = document.querySelector("#chat-ul");
  ul.innerHTML = "";
  messages.forEach(displayChatMessage);
}

function goToChatPage() {
  window.location.href = "chat.html";
}

const chatIcon = document.querySelector("#chat-link");
chatIcon.addEventListener("click", goToChatPage);
const form = document.querySelector("#chat-form");
form.addEventListener("submit", sendChatMessage);

getChatMessages();
