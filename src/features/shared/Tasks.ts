import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const TasksSchema = Schema({
    bikeId:{
        type: String,
        required : true
    },
    policerId:{
        type: String,
        required : true
    },
    beginDate:{
        type: Date,
        required : true
    },
    isDone : {
        type: Boolean,
        required : true
    },
    endDate:{
        type: Date,
        required : true
    }
});

export default mongoose.model("Tasks",TasksSchema);