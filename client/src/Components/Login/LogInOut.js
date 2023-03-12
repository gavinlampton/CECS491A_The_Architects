const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up session middleware
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
}));

// test
const users = [
    { id: 1, email: 'testuser@test.com', password: '$2a$10$z8KvYX9S/nS19QCMV7CHzebF2QEs/EllsJKtTnTtYsBtC9Xl3q3qK' } // password is 'password'
];

// Middleware to check if user is authenticated
function checkAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

// Middleware to check if user is not authenticated
function checkNotAuthenticated(req, res, next) {
    if (req.session.user) {
        res.status(400).send('Already logged in');
    } else {
        next();
    }
}

// Login route
app.post('/login', checkNotAuthenticated, (req, res) => {
    const { email, password } = req.body;

    // Find user by email in the mock database
    const user = users.find(u => u.email === email);

    // If user not found, return error message
    if (!user) {
        return res.status(400).send('Invalid email or password');
    }

    // Compare password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }

        // If passwords match, store the user in session and return success message
        if (result) {
            req.session.user = user;
            return res.send('Login successful');
        }

        // Otherwise, return error message
        return res.status(400).send('Invalid email or password');
    });
});

// Logout route
app.post('/logout', checkAuthenticated, (req, res) => {
    // Destroy session and redirect to login page
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        res.redirect('/login');
    });
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));