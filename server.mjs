import express from 'express';
import mysql from 'mysql2';
// require('dotenv').config();
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5173;

app.use(express.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10, // Adjust according to your needs
});

// API endpoint for login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Query the "users" table for the entered username
  const query = 'SELECT password FROM users WHERE username = ?';
  pool.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      // User does not exist
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const storedPassword = results[0].password;

    if (password !== storedPassword) {
      // Incorrect password
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
