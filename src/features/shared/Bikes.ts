import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const BikesSchema = Schema({
    userId : {
        type: Number,
        required : true
    },
    model : {
        type: String,
        required: true,
    },
    color : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    }, 
    description : {
        type: String,
        required: true
    }
});

export default mongoose.model("Bikes",BikesSchema);