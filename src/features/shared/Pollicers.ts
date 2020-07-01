import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const PollicerSchema = Schema({
    name : {
        type: String,
        required: true,
    },
    isFree : {
        type: Boolean,
        required: true
    }
});

export default mongoose.model("Pollicers",PollicerSchema);