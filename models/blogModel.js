import { Schema, model } from "mongoose";

var blogSchema = new Schema({
  title: { type: String, required: "Cannot be empty" },
  comSentence: { type: String, required: "Cannot be empty" },
  comImage: { type: String, required: "Cannot be empty" },
  blog: { type: String, required: "Cannot be empty" },
  date: { type: Date, default: Date.now },
});

const Blog = model("Blog", blogSchema);
export default Blog;
