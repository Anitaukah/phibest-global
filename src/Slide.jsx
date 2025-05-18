/** @format */

import React from "react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bg from "../assets/Images/header.png";
import Image55 from "../assets/Images/image (55).png";
import Image37 from "../assets/Images/image (37).png";
import Image8 from "../assets/Images/image-8.png";

const Slide = () => {
	return (
		<div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide>
					<img
						src={bg}
						alt="bg"
						className="absolute top-0 left-0 w-full h-full object-cover -z-10"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Image55}
						alt="bg"
						className="absolute top-0 left-0 w-full h-full object-cover -z-10"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Image37}
						alt="bg"
						className="absolute top-0 left-0 w-full h-full object-cover -z-10"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Image8}
						alt="bg"
						className="absolute top-0 left-0 w-full h-full object-cover -z-10"
					/>
				</SwiperSlide>
				...
			</Swiper>
		</div>
	);
};

export default Slide;
