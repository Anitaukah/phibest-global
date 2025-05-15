/** @format */

import React from "react";
import "animate.css";
import bg from "../assets/Images/header.png";

const Hero = () => {
	return (
		<section className="relative overflow-hidden text-white bg-black/35 sm:mt-4">
			<img
				src={bg}
				alt="bg"
				className="absolute top-0 left-0 w-full h-full object-cover -z-10"
			/>
			<div className="h-[80vh] flex flex-col justify-center items-center gap-6 sm:gap-3 text-center sm:text-left w-full max-w-6xl mx-auto sm:max-w-[1040px] sm:my-auto sm:mx-5 ">
				<h1 className="text-5xl animate__animated animate__fadeInDown sm:text-3xl">
					Bitumen Cleaning and Oil-Based Mud (OBM).
				</h1>
				<h3 className="text-3xl text-[#b0b0fd] animate__animated animate__fadeInDown sm:text-2xl">
					Quality you can trust
				</h3>
				<p className="text-2xl animate__animated  animate__fadeInDown sm:text-xl sm:text-left">
					We deliver Solutions that meets your Expectation
				</p>

				<button className="bg-[#eb1e23] text-white p-3 px-10 text-2xl sm:text-xl rounded-xl sm:rounded-full w-max">
					Our Services
				</button>
			</div>
		</section>
	);
};

export default Hero;
