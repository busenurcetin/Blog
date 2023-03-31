const express = require('express'),
passport = require("passport"),
User= require('../models/userModel'),
router = express.Router();
const app = express();

//ARRAY

let adminActions =[

    {
        actionId:1,
        actionName: "changeHomeImage",
        displayName: "Change Home Image"
    },
    {
        actionId:2,
        actionName: "changeAboutImage",
        displayName: "Change About Image"
    },
    {
        actionId:3,
        actionName: "changeAboutText",
        displayName: "Change About Text"
    },
    {
        actionId:4,
        actionName: "addNewBlog",
        displayName: "Add New Blog"
    },
    {
        actionId:5,
        actionName: "listAllBlogs",
        displayName: "List All Blogs"
    }
];

//ARRAY Bitiş

router.get("/admin", isLoggedIn, (req, res)=>{
    res.render("admin/admin",{adminActions:adminActions});
 }) ;

 router.get("/signin", (req,res)=>{
    res.render("admin/signin");
 }) ;

 router.post("/signin", passport.authenticate("local",
     {
        successRedirect: "/",
        failureRedirect: "/signin"
     }),(req, res)=>{

     });

 router.get("/signup", isLoggedIn, (req,res)=>{
    res.render('admin/signup');
 }) ;

 router.post("/signup", isLoggedIn, (req,res)=>{
    let newUser = new User({username:req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if (err){
            console.log(err);
            res.redirect("/");
        }
        passport.authenticate("local")(req, res, ()=>{
            res.redirect("/");
        });
    });
}) ;

 //Sign Out
     
 app.post('/signout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

  router.get('/signout', function(req, res) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });
 //Sign Out Bitiş

function isLoggedIn(req, res, next)
{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}
module.exports = router;

