const express = require('express');
const app = express();

// No need to require the 'fs' module here as Express handles file routing efficiently.

// Creating a route for the home page
app.get('/', (req, res) => {
    // Use sendFile to serve static HTML files. Always specify the root directory to avoid errors.
    res.sendFile("./views/index.html", { root: __dirname });
});



// Creating a route for the About page
app.get('/about', (req, res) => {
    // Similar to the home route, serve the About HTML file.
    res.sendFile("./views/about.html", { root: __dirname });
});

// using the redirect function
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// Creating a route for the Error page
// app.get('/error', (req, res) => {
//     // Fixed: Use sendFile instead of send to serve the 404 HTML file.
//     res.sendFile("./views/404.html", { root: __dirname });
// });

// Creating a route for the Error page
// but not like the way i did above what i will do i will create a middleware that will handle the error page
// everytime any user visit a page that doesn't exist it will redirect to the error page

// Middleware to handle 404 errors
app.use((req, res) => {
    // Fixed: Use sendFile instead of send to serve the 404 HTML file.
    res.sendFile("./views/404.html", { root: __dirname });
});

// Starting the server on port 8000
app.listen(8000, () => {
    console.log("The server is running on port 8000");
});
