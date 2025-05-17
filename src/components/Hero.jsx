/** @format */

import React from "react";
import "animate.css";
import bg from "../assets/Images/header.png";

const Hero = () => {
	return (
		<div className="relative overflow-hidden text-white bg-black/65 mt-3">
			<section className=" md:m-auto md:max-w-[920px] m-auto max-w-[540px]">
				<img
					src={bg}
					alt="bg"
					className="absolute top-0 left-0 w-full h-full object-cover -z-10"
				/>
				{/* w-full max-w-6xl mx-auto sm:max-w-[1040px] sm:my-auto sm:mx-5  */}
				<div className="h-[80vh] flex flex-col justify-center md:items-center md:gap-6 gap-3 md:text-center pl-3">
					<h1 className="md:text-5xl text-3xl animate__animated animate__slideInLeft md:animate__fadeInDown">
						Bitumen Cleaning and Oil-Based Mud (OBM).
					</h1>
					<h3 className="md:text-4xl text-[#b0b0fd] animate__animated animate__slideInLeft md:animate__fadeInDown text-2xl ">
						Quality You Can Trust
					</h3>
					<p className="md:text-3xl text-xl animate__animated md:animate__fadeInDown animate__slideInLeft ">
						We deliver Solutions that meets your Expectation
					</p>

					<a href="/Service" target="_blank" className="font-medium">
						<button className="bg-[#eb1e23] w-fit justify-self-center text-white p-3 px-10 md:text-2xl text-xl md:rounded-xl rounded-full animate__animated animate__slideInLeft">
							Services
						</button>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Hero;
