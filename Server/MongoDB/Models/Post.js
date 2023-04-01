import mongoose from "mongoose";

const post = new mongoose.Schema({
    name : {
        type: String,
        require: true
    } ,
    
    prompt : {
        type: String,
        require: true
    } ,
    
    photo : {
        type: String,
        require: true
    } ,
})

// Creates the model out of the schema
const PostSchema = mongoose.model("Post" , post);
export default PostSchema