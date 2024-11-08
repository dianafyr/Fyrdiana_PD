const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// enable form processing 
app.use(express.urlencoded({
    extended: false
}));

//------------------ROUTES----------------------//
app.get('/', function(req, res) {
    // Render the "home" view
    res.render('home');
});

app.get('/about', function(req, res) {
    // Render the "about" view
    res.render('about');
});

app.get('/development', function(req, res) {
    res.render('development');
});

app.get('/design', function(req, res) {
    res.render('design');
});

app.get('/portfolio', function(req, res) {
    res.render('portfolio');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    // Handle contact form submission
    const { senderName, email, message } = req.body;
    // For now, we just send a success message without storing data
    res.send("Message sent successfully! We will get back to you soon.");
});

app.listen(3009, () => {
    console.log("Server is running on port 3009");
});
