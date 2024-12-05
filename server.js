const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const bodyParser = require('body-parser');
  
connectDB();
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://cheerful-truffle-db6df6.netlify.app/',
}));
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('Hello World!');
});
// Routes
app.use('/api', authRoutes);
app.use('/api', petRoutes);
app.use('/api/auth', require('./routes/authRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
