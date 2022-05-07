const mongoose=require("mongoose");

const pantsSchema=new mongoose.Schema({
    brand:{type:String, required:true},
    image:[{type:String, required:true}],
    color:[{type:String, required:true}],
    price:[{type:String, required:true}],
    size:{type:String, required:true},
})


module.exports=mongoose.model("pants",pantsSchema)
