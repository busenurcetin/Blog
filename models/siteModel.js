var mongoose= require("mongoose");

const siteSchema = new mongoose.Schema(
    {
        homeImage : {type:String, required: "Cannot be empty"},
        aboutImage : {type:String, required: "Cannot be empty"},
        aboutText : {type:String, required: "Cannot be empty"},
        contactImage : {type:String, required: "Cannot be empty"},
        contactText : {type:String, required: "Cannot be empty"},
        homeImage : {type:String, required: "Cannot be empty"},
    }
);

module.exports = mongoose.model("Site", siteSchema )