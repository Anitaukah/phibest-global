/** @format */

import React from "react";
import "animate.css";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import {
	ParallaxBanner,
	ParallaxBannerLayer,
	ParallaxProvider,
} from "react-scroll-parallax";
// import bg from "../assets/Images/header.png";
// import Image55 from "../assets/Images/image (55).png";
// import Image37 from "../assets/Images/image (37).png";
// import Image8 from "../assets/Images/image-8.png";
// import Slide from "./src/Slide.jsx";

const Hero = () => {
	const [currentImages, setCurrentImage] = useState(0);
	const images = [
		{
			index: 0,
			url: "src/assets/Images/header.png",
		},
		{
			index: 1,
			url: "src/assets/Images/image (55).png",
		},
		{
			index: 2,
			url: "src/assets/Images/image (37).png",
		},
		{
			index: 3,
			url: "src/assets/Images/image.png",
		},
	];

	const handleNext = () => {
		if (currentImages === images.length - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage((prev) => prev + 1);
		}
	};

	const handlePrev = () => {
		if (currentImages === 0) {
			setCurrentImage(images.length - 1);
		} else {
			setCurrentImage((prev) => prev - 1);
		}
	};
	return (
		<div className="relative overflow-hidden text-white bg-black/65 mt-3">
			<section className=" md:m-auto md:max-w-[920px] m-auto max-w-[540px]">
				{/* w-full max-w-6xl mx-auto sm:max-w-[1040px] sm:my-auto sm:mx-5  */}
				<img
					src={images[currentImages].url}
					alt="bg"
					className="absolute top-0 left-0 w-full h-full object-cover -z-10"
				/>

				<div className="h-[80vh] flex flex-col justify-center md:items-center md:gap-6 gap-1 md:text-center pl-3">
					<h1 className="md:text-5xl text-3xl animate__animated animate__slideInLeft md:animate__fadeInDown">
						Bitumen Cleaning and Oil-Based Mud (OBM).
					</h1>
					<h3 className="md:text-4xl text-[#b0b0fd] animate__animated animate__slideInLeft md:animate__fadeInDown text-2xl ">
						Quality You Can Trust
					</h3>
					<p className="md:text-3xl text-xl font-light animate__animated md:animate__fadeInDown animate__slideInLeft ">
						We deliver Solutions that meets your Expectation
					</p>

					<button className="bg-[#eb1e23] w-fit justify-self-center text-white p-3 px-10 md:text-2xl text-xl md:rounded-xl rounded-full animate__animated animate__slideInLeft">
						<a href="/Service" target="_blank" className="font-medium">
							Services
						</a>
					</button>
				</div>
			</section>
			<div class>
				<div
					onClick={handlePrev}
					className="hidden md:block absolute top-[50%] left-0 md:left-2  transform -translate-y-1/2 rounded-[50%] cursor-pointer"
				>
					<IoIosArrowBack size={30} />
				</div>
				<div
					onClick={handleNext}
					className="hidden md:block absolute top-[50%] md:right-2 right-0  transform -translate-y-1/2 rounded-[50%] cursor-pointer"
				>
					<IoIosArrowForward size={30} />
				</div>
				<div className="md:flex justify-center hidden">
					{images.map((item) => (
						<div>
							{item.index === currentImages ? (
								<GoDotFill size={20} />
							) : (
								<GoDot size={20} />
							)}
						</div>
					))}
				</div>
				<div className="flex justify-center md:hidden">
					{images.map((item) => (
						<div>
							{item.index === currentImages ? (
								<GoDotFill
									onClick={() => setCurrentImage(item.index)}
									size={20}
								/>
							) : (
								<GoDot
									onClick={() => setCurrentImage(item.index)}
									size={20}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
