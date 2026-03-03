require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Always serve index.html for any route (SPA-like or just backup)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Personax is live!`);
    console.log(`🌐 Application running at http://localhost:${PORT}`);
    console.log(`✨ Environment: ${process.env.NODE_ENV || 'development'}`);
});
