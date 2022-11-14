const mongoose=require("mongoose")

const product_schema=new mongoose.Schema({
    "img_url": {type:String},
    "price":{type:Number},
    "category":{type:String},
    "type":{type:String},
    "brand":{type:String},
    "size":{type:Array},
    "name": {type:String}
})

const allProducts=mongoose.model("allproduct",product_schema)

module.exports=allProducts