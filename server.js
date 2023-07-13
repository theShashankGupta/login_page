const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;
require('dotenv').config(); 

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
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/auth
app.post('/auth', function (request, response) {
  // Capture the input fields
  let username = request.body.Username;
  let password = request.body.Password;
  // Ensure the input fields exist and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
      // If there is an issue with the query, output the error
      if (error) throw error;
      // If the account exists
      if (results.length > 0) {
        // Authenticate the user
        request.session.loggedin = true;
        request.session.username = username;
        // Redirect to home page
        response.redirect('/home');
      } else {
        response.send('Incorrect Username and/or Password!');
      }
      response.end();
    });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

// http://localhost:3000/home
app.get('/home', function (request, response) {
  // If the user is logged in
  if (request.session.loggedin) {
    // Output username
    response.send('Welcome back, ' + request.session.username + '!');
  } else {
    // Not logged in
    response.send('Please login to view this page!');
  }
  response.end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
