/** @format */

import React from "react";
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
	return (
		<nav className="bg-white">
			<div className="flex justify-between items-center m-auto w-[920px] min-w-64">
				<img
					className="w-28 h-20"
					src={Logo}
					alt="Phibest global company logo"
				/>
				<div className="text-[18px]">
					<a href="#Home">Home</a>
					<a href="#Service" className="ml-20">
						Services
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
