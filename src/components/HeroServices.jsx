/** @format */

import React from "react";
// import Image8 from "../assets/Images/image-8.png";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const HeroServices = () => {
	const [currentImages, setCurrentImage] = useState(0);
	const images = [
		{
			index: 0,
			url: "/Images/image-8.png",
		},
		{
			index: 1,
			url: "/Images/image-7.png",
		},
		{
			index: 2,
			url: "/Images/image (50).png",
		},
		{
			index: 3,
			url: "/Images/image (44).png",
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
		<div>
			<div className=" relative overflow-hidden text-white bg-black/65">
				<section className="md:m-auto md:max-w-[920px] m-auto max-w-[540px] mx-4">
					<img
						src={images[currentImages].url}
						alt="bg"
						loading="lazy"
						className="absolute top-0 left-0 w-full h-full object-cover -z-10"
					/>
					<div className="h-[80vh] flex flex-col justify-center items-center gap-10 text-center w-full max-w-6xl mx-auto">
						<p className="md:text-5xl text-2xl text-white animate__animated animate__fadeInDown">
							Reliable Industrial Cleaning & Maintenance Services
						</p>

						<p className="text-lg md:text-3xl font-light text-white text-center animate__animated animate__fadeInDown">
							We specialize in safe, efficient, and professional services
							including tank maintenance, Bitumen cleaning, and waste
							management, tailored to meet the needs of the oil, gas, and
							energy sectors.
						</p>
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
		</div>
	);
};

export default HeroServices;
