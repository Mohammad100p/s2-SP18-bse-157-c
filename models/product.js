var mongoose = require("mongoose");
var productschema = mongoose.Schema({
    name:String,
    id:String,
    duration:Number,
    fee:Number,
});
const productmodel = mongoose.model("courses",productschema);

module.exports=productmodel;