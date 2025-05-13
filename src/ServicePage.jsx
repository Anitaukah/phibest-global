/** @format */

import React from "react";
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import HeroServices from "./components/HeroServices";
import HeroIntroService from "./components/HeroIntroService";
import WhatWeDo from "./components/WhatWeDo";
import HerIntro2 from "./components/HerIntro2";

const Service_page = () => {
	return (
		<div>
			<Navheader />
			<Navbar />
			<HeroServices />
			<HeroIntroService />
			<HerIntro2 />
			<WhatWeDo />
		</div>
	);
};

export default Service_page;
