
const express = require('express');
const app = express();

const sequelize = require('./db');
const Ticket = require('./models/tickets');
const User =  require('./models/user')

const PORT = process.env.PORT || 3001;


const cors = require('cors');
app.use(cors());  // 🔥 allow frontend to access backend

app.use(express.json());

app.post('/tickets', async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.json(ticket);
});

app.get('/tickets', async (req, res) => {
  const tickets = await Ticket.findAll();
  res.json(tickets);
});

app.post('/userdetails', async (req, res)=>{
  const users = await User.create(req.body);
  res.json(users);
});





app.listen(PORT, async () => {

  try {
    await sequelize.sync(); // ensures DB tables are created
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error('DB error:', err);
  }
});











// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("ITSM Ticketing API is running!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// /////
// const users = [
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
//   ];
  
//   // Get all users
//   app.get('/users', (req, res) => {
//     res.json(users);
//   });
  
//   // Get a single user by ID
//   app.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     user ? res.json(user) : res.status(404).json({ message: 'User not found' });
//   });
  
//   // Add a new user
//   app.post('/users', (req, res) => {
//     const newUser = { id: users.length + 1, ...req.body };
//     users.push(newUser);
//     res.status(201).json(newUser);
//   });
  
//   // Delete a user
//   app.delete('/users/:id', (req, res) => {
//     const index = users.findIndex(u => u.id === parseInt(req.params.id));
//     if (index !== -1) {
//       users.splice(index, 1);
//       res.json({ message: 'User deleted' });
//     } else {
//       res.status(404).json({ message: 'User del not found' });
//     }
//   });

  
//   app.get('/users/id', (req, res) => {
//     res.json({ message: "You're looking for users by ID. Use /users/{number}." });
// });

  