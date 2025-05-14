/** @format */

import React from "react";
import Logo from "../assets/Images/logo.png";
import Hamburger from "../assets/Images/bars-solid.svg";

const Navbar = () => {
	return (
		<nav className="bg-white relative " id="Home ">
			{/* w-full max-w-5xl mx-auto  */}
			{/* w-[920px] min-w-80 md:m-auto */}
			<div className="flex justify-between items-center  w-full max-w-5xl mx-auto  ">
				<img
					className="md:w-28 md:h-20"
					src={Logo}
					alt="Phibest global company logo"
				/>
				<div className="text-[18px] hidden md:block">
					<ul className="flex">
						<li className="hover:border-black hover:border-3">
							<a href="/">Home</a>
						</li>
						<li>
							<a href="#About" className="ml-20">
								About
							</a>
						</li>
						<li>
							<a href="#Policy" className="ml-20">
								Policy
							</a>
						</li>
						<li>
							<a href="/Service" target="_blank" className="ml-20">
								Services
							</a>
						</li>
					</ul>
				</div>
				<div className="md:hidden">
					<img className="w-32 h-16" src={Hamburger} alt="Menu icon" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
