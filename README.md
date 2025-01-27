# Real-Time Chat Application

This project is a real-time chat application built using Node.js, Express, and Socket.IO. It allows users to create accounts, join chat rooms, and send instant messages to others in the same room or privately.

---

## Features
- Users can join predefined chat rooms (e.g., General, Sports, Technology).
- Real-time messaging between users in the same room.
- Private messaging functionality.
- Notifications when users join or leave a room.
- Simple and clean front-end interface served through Express.

---

## Requirements
- [Node.js](https://nodejs.org/) (v14.x or higher)
- npm (Node Package Manager)

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Server:**
   ```bash
   node server.js
   ```

4. **Access the Application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## File Structure
```
chat-app/
├── public/
│   └── index.html      # Front-end HTML file
├── server.js           # Main server file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## How It Works

### **Backend**
- The server is powered by Express and Socket.IO.
- Static files (e.g., `index.html`) are served from the `public` folder.
- Socket.IO handles real-time communication between the server and clients.

### **Frontend**
- A simple interface where users can:
  - Enter their username.
  - Select a room to join.
  - Send and receive messages in real time.

---

## Usage

1. Open the application in your browser.
2. Enter your username and select a chat room.
3. Start chatting! Messages will be broadcast to all users in the same room.
4. Private messages can be sent using the private messaging feature.

---

## Example Commands

### Broadcast Message
Messages sent via the input field are visible to all users in the same room.

### Private Message
Use the private message functionality by selecting a user’s ID (not currently implemented in the basic front-end, but available in the backend).

---

## Deployment
To deploy the application online, you can use services like:

### **Render**
1. Create a new Web Service in [Render](https://render.com/).
2. Connect your GitHub repository and deploy.

### **Heroku**
1. Create a new Heroku app.
2. Push your code to Heroku:
   ```bash
   git push heroku main
   ```

### **AWS or DigitalOcean**
1. Set up a virtual machine instance.
2. Install Node.js and run the server as described in the installation steps.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)


