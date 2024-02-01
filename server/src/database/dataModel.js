const  mongoose = require("mongoose");

const  DataSchema = mongoose.Schema({
    title:{ type: String , required: true},
    imageUrl:{type:String, required: true},
    price:{type:Number, required: true}

});

const DataModel = mongoose.model("Data",DataSchema);

module.exports  = DataModel;