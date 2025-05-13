/** @format */

import React from "react";
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import HeroServices from "./components/HeroServices";
import WhyChooseUs from "./components/WhyChooseUs";
import RatingServices from "./components/RatingServices";

const Service_page = () => {
	return (
		<div>
			<Navheader />
			<Navbar />
			<HeroServices />
			<RatingServices />
			<WhyChooseUs />
		</div>
	);
};

export default Service_page;
