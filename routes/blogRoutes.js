const express = require('express'),
Blog= require('../models/blogModel'),
router = express.Router();

router.get("/addNewBlog", isLoggedIn, (req, res)=>{
    res.render("blog/newBlog" );
 });

 router.post("/addNewBlog", isLoggedIn, (req, res)=>{
   let title = req.body.data.blogTitle;
   let comImage = req.body.data.comImage;
   let comSentence = req.body.data.comSentence;
   let blog = req.body.data.blog;
   let newBlog= { title:title, comImage:comImage, comSentence:comSentence,blog:blog };

   Blog.create(newBlog)
   .then(function(newBlog){
    console.log(newBlog);
    res.status(201).json(newBlog);
   })

   .catch(function(err){
    console.log("===============ERROR ERROR ERROR =============");
    console.log(err);
    res.send(err);
   })
 });

router.get("/blogs/:blogId", async (req,res)=>{
     try {
        const blog = await Blog.findById(req.params.blogId)
        console.log(blog);
        res.render("blog/showBlog", {foundBlog:blog});
     } catch (error) {
        console.log(error);
     }
});

 //Test Router 

 router.get("/testing", (req,res)=>
 {
Blog.find()
.then((foundBlogs)=>
{
res.json(foundBlogs);
})
.catch((err)=>{
    console.log(err);
    res.send(err);
})
 });

 function isLoggedIn(req, res, next)
{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}

module.exports = router;
