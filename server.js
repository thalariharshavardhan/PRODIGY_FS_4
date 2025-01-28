let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    // Add product to cart
    cart.push({ name: productName, price: productPrice });
    total += productPrice;

    // Update Cart count in header
    document.getElementById('cart-link').innerText = `Cart (${cart.length})`;

    // Update Cart items in modal
    updateCartModal();
}

function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(listItem);
    });

    // Update total price
    document.getElementById('total-price').innerText = total.toFixed(2);
}

function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    alert('Proceeding to checkout...');
    // Here you can add actual checkout functionality
    // For now, just clear the cart and reset the total
    cart = [];
    total = 0;
    updateCartModal();
    document.getElementById('cart-link').innerText = `Cart (0)`;
    closeCart();
}

// Open the cart modal when the cart link is clicked
document.getElementById('cart-link').addEventListener('click', openCart);
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static("public"));

// Define chat rooms and users
let users = [];
let rooms = ["General", "Sports", "Technology"];

// When a client connects
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  // Send available rooms
  socket.emit("rooms", rooms);

  // Listen for joining a room
  socket.on("joinRoom", (room, username) => {
    socket.join(room);
    users.push({ id: socket.id, username, room });
    io.to(room).emit("message", `${username} has joined ${room}`);
  });

  // Listen for chat messages
  socket.on("chatMessage", (message) => {
    const user = users.find((user) => user.id === socket.id);
    if (user) {
      io.to(user.room).emit("message", `${user.username}: ${message}`);
    }
  });

  // Listen for private messages
  socket.on("privateMessage", (receiverId, message) => {
    io.to(receiverId).emit("privateMessage", message);
  });

  // Disconnect
  socket.on("disconnect", () => {
    const index = users.findIndex((user) => user.id === socket.id);
    if (index !== -1) {
      const user = users[index];
      users.splice(index, 1);
      io.to(user.room).emit("message", `${user.username} has left the chat`);
    }
  });
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
