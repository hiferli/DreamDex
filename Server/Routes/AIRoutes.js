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

router.route("/").post(async (request, response, next) => {
    try {
        const { key , prompt } = request.body;
        // console.log(key)
        // console.log(prompt)

        // NOT WORKING... Since the API is a Paid one and I don't have that much to pay to the samey
        // LOL MFS I BOUGHT THE API 
        // Udate: I paid for using this as a college project and hence now I have the power
        // However, I've added a Personal Access Key for no one to use it for their own good!

        if (key === "" || key === undefined || key === null || key !== process.env.PERSONAL_ACCESS_KEY) {
            // console.log("Invalid")
            return response.status(400).json({ 
                "Message": "You might have used an incorrect Personal Access Key. Please contact the Devs (joshi.ishaan.2001@gmail.com) for further assistance"
            });
        }

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

        // console.log("Line 32")

        // const image = AIResponse.data.data[0].b64_json;
        response.status(200).json({ "Message": "Success", photo: image_url });

    } catch (error) {
        console.log("Error in Fetching Data from AI: " + error);
        response.status(500).json({
            "Message":'Something went wrong'
        });
    }
})

export default router;