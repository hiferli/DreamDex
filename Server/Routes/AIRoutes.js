import express from 'express'
import * as dotenv from 'dotenv'
import  { Configuration , OpenAIApi } from 'cloudinary'

import Post from '../MongoDB/Models/Post.js'

dotenv.config();

// Creating Routes
const router = express.Router();