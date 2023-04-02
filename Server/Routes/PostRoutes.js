import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

import Post from '../MongoDB/Models/Post.js'

dotenv.config();

// Creating Routes
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Creating Routes
// 1. Get All Posts
router.route("/").get(async (request, response, next) => {
    try {
        const post = await Post.find({});
        response.status(200).json({success: true, data: post});
    } catch (error) {
        response.status(500).json({success: false, message: error});
    }
})

// 1. Post a New Post
router.route("/").post(async (request, response, next) => {
    try {
        const { name, prompt, photo } = request.body;
        const photoURL = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoURL.url
        })

        response.status(200).json({ success: true, data: newPost }) 
    } catch (error) {
        console.log("Error Posting Image to Cloudinary: " + error);
        response.status(500).json({success: false, message: error});
    }
})

export default router;