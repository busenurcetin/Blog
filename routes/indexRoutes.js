import { Router } from "express";
const router = Router();
import Blog from "../models/blogModel";

/*let data= [
    {
        postTitle: "Blog Denemesi",
        postSubtitle: "Bu ilk blog denemesi ve video çok sıkıcı.",
        image: "https://images.unsplash.com/photo-1564177611049-76e2933c6017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"

    },

    {
        postTitle: "Testing a blog",
        postSubtitle: "This is a blog testing",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    },

    {
        postTitle: "Test Test",
        postSubtitle: "Lets see whats gonna happen",
        image: "https://images.unsplash.com/photo-1562762394-3acfba62a48e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

    },




]
*/
//yukarıdaki kodlar eskiden çektiğim veriler için kullandığım kodlardır.
//The code above is the code I used for the data I fetched before.

router.get("/", async (req, res) => {
  try {
    const foundBlogs = await Blog.find({});
    console.log("========= ALL BLOGS ============");
    console.log(foundBlogs);
    res.render("home", { foundBlogs: foundBlogs });
  } catch (err) {
    console.log("========= ERROR =========");
    console.log(err);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

export default router;
