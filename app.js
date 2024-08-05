// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Use employee routes
app.use(employeeRoutes);

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'prach.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
