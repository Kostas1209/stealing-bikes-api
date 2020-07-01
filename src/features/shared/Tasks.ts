import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const TasksSchema = Schema({
    bikeId:{
        type: String,
        required : true
    },
    pollicerId:{
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
        type: Date
    }
});

export default mongoose.model("Tasks",TasksSchema);