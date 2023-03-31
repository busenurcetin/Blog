const mongoose= require("mongoose");

var blogSchema = new mongoose.Schema({
    title : {type: String, required: 'Cannot be empty'},
    comSentence : {type: String, required: 'Cannot be empty'},
    comImage : {type: String, required: 'Cannot be empty'},
    blog: {type: String, required: 'Cannot be empty'},
    date: {type: Date, default: Date.now},
    



});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;