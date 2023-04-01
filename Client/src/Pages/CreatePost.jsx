import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { preview } from '../Assets'
import { getRandomPrompt } from '../Utils'
import { FormField, Loader } from '../Components'

const CreatePost = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: '',
		prompt: '',
		photo: ''
	});

	const [generateImage, setGenerateImage] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {

	}

	const handleChange = () => {

	}

	const handleSurpriseMe = () => {

	}

	return (
		<section className='max-w-7xl mx-auto'>
			<div className="">
				<h1 className="font-extrabold text-[#22328] text-[32px]">Create</h1>
				<p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create imaginative and visually stunning images through DALL-E AI and share them to the community </p>
			</div>

			<form action="" onSubmit={handleSubmit} className='mt-16 max-wt-3xl '>
				<div className="flex flex-col gap-5">
					<FormField 
						labelName="Your Name" 
						type="text" 
						name="name" 
						placeholder="Your Name Here" 
						value={form.name} 
						handleChange={handleChange} />
				</div>

				<div className="flex flex-col gap-5">
					<FormField 
						labelName="Your Prompt"
						type="text" 
						name="prompt" 
						placeholder="Alex and Marty partying in LA" 
						value={form.prompt} 
						handleChange={handleChange} 
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe} />
				</div>
			</form>

		</section>
	)
}

export default CreatePost
