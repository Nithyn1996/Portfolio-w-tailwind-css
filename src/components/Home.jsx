import React from "react";
import heroImage from "../assets/heroImage.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            in cupiditate soluta nam earum porro quasi tenetur eum nesciunt quia
            reprehenderit quam neque corporis, aspernatur ipsum repellat,
            repudiandae est, recusandae fuga tempora commodi minus reiciendis
            ab. Qui dolorum sint error odit vero, quis praesentium minima
            exercitationem aliquid, voluptatibus, commodi eveniet.
          </p>
          <div>
            <Link to={'portfolio'} smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Portfolio 
                
                    <span className="group-hover:rotate-90 duration-500">
                        <FaArrowRightLong className="ml-3" />
                    </span>
               
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
