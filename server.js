const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
// Routes
app.get('/', (_req, res) => {
    res.send('Hello World!');
  });
  
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/pets', require('./routes/petRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;