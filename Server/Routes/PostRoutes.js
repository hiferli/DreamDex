import express from 'express'
import * as dotenv from 'dotenv'
import  {v2 as cloudinary } from 'cloudinary'

import Post from '../MongoDB/Models/Post.js'

dotenv.config();

// Creating Routes
const router = express.Router();