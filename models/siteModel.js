import { Schema, model } from "mongoose";

const siteSchema = new Schema({
  homeImage: { type: String, required: "Cannot be empty" },
  aboutImage: { type: String, required: "Cannot be empty" },
  aboutText: { type: String, required: "Cannot be empty" },
  contactImage: { type: String, required: "Cannot be empty" },
  contactText: { type: String, required: "Cannot be empty" },
});

const Site = model("Site", siteSchema);
export default Site;
