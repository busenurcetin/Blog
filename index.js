const mongoose = require("mongoose"),
    express= require ("express"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User= require("./models/userModel"),
    expressSession = require("express-session"),
    bodyParser = require("body-parser"),
   

    app = express();

const { application } = require("express");
const { contentType } = require("mime-types");
const { Passport } = require("passport");
    //Routes

    const indexRoutes = require("./routes/indexRoutes"),
          adminRoutes = require("./routes/adminRoutes"),
          blogRoutes = require("./routes/blogRoutes");



    //App Config

mongoose.connect("mongodb://localhost/BlogApp")
//mongo connect check
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));
//mongo connect check end
app.set('view engine' , 'ejs');
app.use(express.static('public'));
//Videoda yok
app.use(express.static('js'));
//Videoda yok
app.use(bodyParser.urlencoded({extended:true}));

//Passport Config

app.use(require("express-session")({
     secret: "bu güvenlik cümlesi",
     resave: false,
     saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Share Current User Info Within All Routes

app.use((req, res, next)=>
{
  res.locals.currentUser=req.user;
  next();
});



//Routes Using

app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);

//Server 

const server = app.listen(3000, (err)=> {
    if(err){
      console.log(err);
    }

      console.log('App Started. Port number  : %d ', server.address().port);

})





