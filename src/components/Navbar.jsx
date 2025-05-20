/** @format */
// import "./App.js";

import React, { useEffect, useState } from "react";
import Envelop from "/Images/ic_baseline-email.png";
import Location from "/Images/gridicons_location.png";
import Phone from "/Images/material-symbols_call.png";
// import "./App.css";
import Logo from "/Images/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import Open from "../assets/Images/bars-solid.svg";
// import Close from "../assets/Images/circle-xmark-regular.svg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [isOpen]);
	return (
		<nav className="fixed-nav">
			<div className="bg-[#0000FA] hidden md:block">
				<div className="md:m-auto md:max-w-[920px] ">
					<ul className="flex justify-between text-white py-4 text-sm ">
						<li className=" flex items-center">
							<img className="w-6 h-7" src={Phone} alt="message icon" />
							+234 (0) 803 677 6697
						</li>
						<li className="hover:underline flex items-center">
							<img
								className="w-7 h-7"
								src={Envelop}
								alt="message icon"
							/>
							<a href="mailto:phizek4life@gmail.com">
								phizek4life@gmail.com
							</a>
						</li>
						<li className=" flex items-center hover:underline">
							<img
								className="w-7 h-7"
								src={Envelop}
								alt="message icon"
							/>
							<a href="mailto:phizek4life@yahoo.com">
								phizek4life@yahoo.com
							</a>
						</li>

						<li className="flex items-center">
							<span>
								<img
									className="w-6 h-7"
									src={Location}
									alt="message icon"
								/>
							</span>
							KM.3 Harbour Road <br /> Davo Plaza, By Njinna Hotel
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-white shadow-nav " id="Home ">
				<div className="flex items-center justify-between py-1 md:m-auto md:max-w-[920px] m-auto max-w-[540px] ">
					<img
						className="w-28 h-16 md:w-28 md:h-16 ml-1 md:pl-0 z-20"
						src={Logo}
						alt="Phibest global company logo"
					/>
					{!isOpen && (
						<div
							onClick={toggleMenu}
							className="md:hidden cursor pointer mr-2"
						>
							<HiMenu size={30} />
						</div>
					)}

					{isOpen && (
						<div
							onClick={toggleMenu}
							className="md:hidden cursor pointer z-20 mr-4"
						>
							<IoClose size={30} />
						</div>
					)}

					{isOpen ? (
						<div className=" bg-white overflow-y-hidden fixed z-10 top-0 left-0 right-0 shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b] w-screen min-h-52 pt-20 duration-300 ease-in-out text-xl">
							<ul className="flex items-center flex-col">
								<li>
									<a
										href="/"
										className="hover:text-[#EB1E23] font-medium active:underline"
										target="_blank"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#About"
										className="hover:text-[#EB1E23] font-medium"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#Policy"
										className=" hover:text-[#EB1E23] font-medium"
									>
										Policy
									</a>
								</li>
								<li>
									<a
										href="/Service"
										target="_blank"
										className=" hover:text-[#EB1E23] font-medium active:underline"
									>
										Services
									</a>
								</li>
							</ul>
						</div>
					) : (
						<div className="bg-white overflow-y-hidden fixed z-10 top-0 right-[-150%] shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b] w-[250px] min-h-96 pt-3 pl-8 flex flex-col gap-12 duration-300 ease-in text-xl"></div>
					)}

					<div className="text-[18px] hidden md:block">
						<ul className="md:flex">
							<li>
								<a
									href="/"
									className="hover:text-[#EB1E23] font-medium"
									target="_blank"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#About"
									className="ml-20 hover:text-[#EB1E23] font-medium"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#Policy"
									className="ml-20 hover:text-[#EB1E23] font-medium"
								>
									Policy
								</a>
							</li>
							<li>
								<a
									href="/Service"
									target="_blank"
									className="ml-20 hover:text-[#EB1E23] font-medium active:underline"
								>
									Services
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
