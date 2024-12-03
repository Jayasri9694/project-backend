const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');
const authRoutes = require('./routes/authRoutes');
dotenv.config();
connectDB();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Routes
app.use('/api', authRoutes);
app.use('/api', petRoutes);
app.use('/api/auth', require('./routes/authRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;