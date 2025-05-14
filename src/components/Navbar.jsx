/** @format */

import React from "react";
import Logo from "../assets/Images/logo.png";
import Hamburger from "../assets/Images/bars-solid.svg";

const Navbar = () => {
	return (
		<nav className="bg-white  " id="Home ">
			<div className="flex justify-between items-center my-auto mx-10 w-[920px] min-w-80 md:m-auto">
				<img
					className="md:w-28 md:h-20"
					src={Logo}
					alt="Phibest global company logo"
				/>
				<div className="text-[18px] hidden md:block">
					<a href="#Home">Home</a>
					<a href="#About" className="ml-20">
						About
					</a>

					<a href="#Policy" className="ml-20">
						Policy
					</a>
					<a href="/Service" target="_blank" className="ml-20">
						Services
					</a>
				</div>
				<div className="md:hidden">
					<img className="w-32 h-16" src={Hamburger} alt="Menu icon" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
