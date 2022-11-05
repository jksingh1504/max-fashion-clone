const mongoose=require("mongoose")

const product_schema=new mongoose.Schema({
    "jss17661 href": {type:String},
    "jss17662 src": {type:String},
    "MuiBox-root": {type:String},
    "MuiBox-root 2": {type:String},
    "MuiBox-root 3": {type:String},
    "price":{type:Number},
    "category":{type:String},
    "type":{type:String},
    "brand":{type:String},
    "size":{type:Array},
    "jss17663": {type:String}
})

const allProducts=mongoose.model("allproduct",product_schema)

module.exports=allProducts