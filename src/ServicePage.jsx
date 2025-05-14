/** @format */

import React from "react";
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import HeroServices from "./components/HeroServices";
import WhyChooseUs from "./components/WhyChooseUs";
import RatingServices from "./components/RatingServices";
import WorkServices from "./components/WorkServices";

const Service_page = () => {
	return (
		<div>
			<Navheader />
			<Navbar />
			<HeroServices />
			<RatingServices />
			<WhyChooseUs />
			<WorkServices />
		</div>
	);
};

export default Service_page;
