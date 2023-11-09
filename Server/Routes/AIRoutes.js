import express, { request, response } from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

// Creating Routes
const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openAI = new OpenAIApi(configuration);


// router.route("/").get((request , response , next) => {
//     // response.send("")
//     response.status(200).json({ "text" : "Hello From OpenAI"});
// })

router.route("/").post(async (request , response , next) => {
    try {
        const { prompt } = request.body;
        console.log(prompt)
        console.log("Line 25")
        
        // NOT WORKING... Since the API is a Paid one and I don't have that much to pay to the samey
        // LOL MFS I BOUGHT THE API 
        const AIResponse = await openAI.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        })

        // const response = await openAI.createImage({
        //     prompt: "a white siamese cat",
        //     n: 1,
        //     size: "1024x1024",
        //   });

        const image_url = AIResponse.data.data[0].b64_json;

        console.log("Line 32")

        // const image = AIResponse.data.data[0].b64_json;
        response.status(200).json({ photo: image_url });

    } catch (error) {
        console.log("Error in Fetching Data from AI: " + error);
        response.status(500).send('Something went wrong');
    }
})

export default router;