/** @format */

import React from "react";
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import HeroServices from "./components/HeroServices";
import WhyChooseUs from "./components/WhyChooseUs";
import RatingServices from "./components/RatingServices";
import WorkServices from "./components/WorkServices";
import WS1 from "./components/WS1";
import WS2 from "./components/WS2";
import WS3 from "./components/WS3";

const Service_page = () => {
	return (
		<div>
			<Navheader />
			<Navbar />
			<HeroServices />
			<RatingServices />
			<WhyChooseUs />
			<WorkServices />
			<WS1 />
			<WS2 />
			<WS3 />
		</div>
	);
};

export default Service_page;
