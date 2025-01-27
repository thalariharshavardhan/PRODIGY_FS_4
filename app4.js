const socket = io();

// Handle room and username setup
let username = "";
let currentRoom = "";

function joinRoom() {
  username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a username");
    return;
  }

  // Send request to join a room
  socket.emit("joinRoom", "General", username);
  currentRoom = "General";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("chat-room").style.display = "block";
}

// Send message to the chat
function sendMessage() {
  const message = document.getElementById("chat-input").value;
  if (message) {
    socket.emit("chatMessage", message);
    document.getElementById("chat-input").value = "";
  }
}

// Listen for messages
socket.on("message", (msg) => {
  const messageElement = document.createElement("p");
  messageElement.innerText = msg;
  document.getElementById("chat-messages").appendChild(messageElement);
});

// Listen for private messages
socket.on("privateMessage", (message) => {
  const messageElement = document.createElement("p");
  messageElement.innerText = `[Private] ${message}`;
  document.getElementById("chat-messages").appendChild(messageElement);
});
