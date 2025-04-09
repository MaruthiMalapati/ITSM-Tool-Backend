
// const express = require('express');
// const app = express();

// const sequelize = require('./db');
// const Ticket = require('./models/tickets');
// const User =  require('./models/user')

// const PORT = process.env.PORT || 3001;


// const cors = require('cors');
// app.use(cors());  // 🔥 allow frontend to access backend

// app.use(express.json());

// // in dev invi *
// app.use(cors({
//   origin: 'https://itsm-tool-frontend.vercel.app'
// }));

// app.post('/tickets', async (req, res) => {
//   const ticket = await Ticket.create(req.body);
//   res.json(ticket);
// });

// app.get('/tickets', async (req, res) => {
//   const tickets = await Ticket.findAll();
//   res.json(tickets);
// });

// app.post('/userdetails', async (req, res)=>{
//   const users = await User.create(req.body);
//   res.json(users);
// });





// app.listen(PORT, async () => {

//   try {
//     await sequelize.sync(); // ensures DB tables are created
//     console.log(`Server running on http://localhost:${PORT}`);
//   } catch (err) {
//     console.error('DB error:', err);
//   }
// });




const express = require('express');
const app = express();

const sequelize = require('./db');
const Ticket = require('./models/tickets');
const User = require('./models/user');

const PORT = process.env.PORT || 3001;

const cors = require('cors');

// ✅ Allow requests only from your frontend domain
app.use(cors({
  origin: 'https://itsm-tool-frontend.vercel.app'
}));

app.use(express.json());

app.post('/tickets', async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.json(ticket);
});

app.get('/tickets', async (req, res) => {
  const tickets = await Ticket.findAll();
  res.json(tickets);
});

app.post('/userdetails', async (req, res) => {
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






