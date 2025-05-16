/** @format */

import React from "react";
import "animate.css";
import bg from "../assets/Images/header.png";

const Hero = () => {
	return (
		<section className="relative overflow-hidden text-white bg-black/35 ">
			<img
				src={bg}
				alt="bg"
				className="absolute top-0 left-0 w-full h-full object-cover -z-10"
			/>
			{/* w-full max-w-6xl mx-auto sm:max-w-[1040px] sm:my-auto sm:mx-5  */}
			<div className="h-[80vh] flex flex-col justify-center items-center md:gap-6 md:text-center text-left">
				<h1 className="md:text-5xl animate__animated animate__fadeInDown">
					Bitumen Cleaning and Oil-Based Mud (OBM).
				</h1>
				<h3 className="md:text-3xl text-[#b0b0fd] animate__animated animate__fadeInDown text-2xl">
					Quality you can trust
				</h3>
				<p className="md:text-2xl animate__animated  animate__fadeInDown ">
					We deliver Solutions that meets your Expectation
				</p>

				<button className="bg-[#eb1e23] text-white p-3 px-10 md:text-2xl text-xl md:rounded-xl rounded-full">
					Our Services
				</button>
			</div>
		</section>
	);
};

export default Hero;
