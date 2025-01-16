const express = require('express');
const app = express();

// getting the index.html file
app.get('/', (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});


app.get('/about', (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});
// added the redirect for the search mapping to the about page
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});




// using a middleware for the errors
app.use((req, res) => {
    res.sendFile("./views/404.html", { root: __dirname });
});




// Listening to the port 8000
app.listen(8000, () => {
    console.log("The server is running on port 8000");
});
