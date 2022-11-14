const mongoose=require("mongoose")

const cart_schema=new mongoose.Schema({
    "img_url": {type:String},
    "price":{type:Number},
    "category":{type:String},
    "type":{type:String},
    "brand":{type:String},
    "size":{type:Array},
    "name": {type:String},
    "quantity":{type:Number},
    "user_id":{type:String,required:true},
    "product_id":{type:String}
})

const cart_product=mongoose.model("cart_product",cart_schema)

module.exports=cart_product