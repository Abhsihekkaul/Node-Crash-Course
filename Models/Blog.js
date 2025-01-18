const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating a schema for the blog
const BlogSchema = new Schema({
    Title : {
        type:String,
        required:true
    },
    Snippet : {
        type:String,
        required:true
    },
    Body : {
        type:String,
        required:true
    }
},{timestamps:true});


// creating a model for the blog
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;