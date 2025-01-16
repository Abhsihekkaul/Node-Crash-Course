// As we are creating a blogging application and we do not want the html to be coming statically from the server
// rather we want the data to be coming dynamically from the server so for that we are going to use the ejs template engine
// react or ejs or handlebars are the template engines that we can use to render the data dynamically from the server


const express = require('express');
const app = express();


// setting the view engine to ejs
app.set('view engine', 'ejs');

// Q : how is it able to find and render the index.ejs wihtout me giving it the file name 
// A : because we have set the view engine to ejs and it automatically looks for the ejs file in the views folder (So we have to create a folder callled Views and put the ejs files in it)

// getting the index.html file
app.get('/', (req, res) => {
    res.render("index")
});


app.get('/about', (req, res) => {
    res.render("about")
});
// added the redirect for the search mapping to the about page
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get("/Blogs", (req,res)=>{
    const Blogs = [
        {
            Title : "Blog 1",
            Snippet : "This is the First blog"
        },
        {
            Title : "Blog 2",
            Snippet : "This is the Second blog"
        },
        {
            Title : "Blog 3",
            Snippet : "This is the Third blog"
        }
    ]
    res.render("AllBlogs", {Blogs})
})


app.get("/Blogs/create", (req,res)=>{
    res.render("CreateBlogs")
})



// using a middleware for the errors
app.use((req, res) => {
    res.render("404")
});




// Listening to the port 8000
app.listen(8000, () => {
    console.log("The server is running on port 8000");
});
