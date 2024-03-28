const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
    credentials: true,
    origin: ['https://localhost:3000', 'http://localhost:3000', 'https://accounts.google.com'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));

// In-memory data store
let transactions = [];

// API Endpoints
// Fetch all transactions
app.get('/api/transactions', (req, res) => {
    res.json(transactions);
});

// Add a new transaction
app.post('/api/transactions', (req, res) => {
    const transaction = req.body;
    // Optionally, add validation or manipulation here
    transactions.push(transaction);
    res.status(201).json(transactions); // Return the updated list of transactions
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
