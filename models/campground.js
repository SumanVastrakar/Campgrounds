const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CampgroundSchema = Schema({
    title : String,
    price : String,
    description : String,
    location : String
}, {
    versionKey : false,
})
module.exports = mongoose.model("Campground", CampgroundSchema)