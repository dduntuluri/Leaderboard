
const express = require('express');
const path = require('path');

const app = express();
const port = 3004;

// Serve static files from the root directory and 'images' directory
app.use(express.static(__dirname));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to serve the home.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'prac.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


