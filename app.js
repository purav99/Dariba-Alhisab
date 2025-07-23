const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views/about.html')));
app.get('/services', (req, res) => res.sendFile(path.join(__dirname, 'views/services.html')));
app.get('/clients', (req, res) => res.sendFile(path.join(__dirname, 'views/clients.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views/contact.html')));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
