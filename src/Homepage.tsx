"use client";

import React, { useState } from "react";
// import { Link } from 'react-router-dom'

export default function Homepage(props: any) {
    const divStyle: React.CSSProperties = {
        backgroundImage: "url('https://images.pexels.com/photos/59989/elephant-herd-of-elephants-african-bush-elephant-africa-59989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'green', // Fallback color if the image fails to load
        color: 'white',
        padding: '10px',
      };

    return (
        <>

			<div className="container mx-auto py-12">
        <div className="flex items-center">
            <div className="w-1/3 mr-6">
                <img src="https://via.placeholder.com/150" alt="Placeholder Image"/>
            </div>
            <div className="w-2/3">
                <h1 className="text-2xl font-semibold mb-4">What is your favorite color?</h1>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input type="radio" name="color" value="red" className="mr-2"/>
                        Red
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="color" value="blue" className="mr-2"/>
                        Blue
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="color" value="green" className="mr-2"/>
                        Green
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="color" value="yellow" className="mr-2"/>
                        Yellow
                    </label>
                </div>
            </div>
        </div>
    </div>




			{/* <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
				<img src="https://picsum.photos/seed/picsum/1900/850" className="absolute top-0 left-0 min-h-full ob" alt=""/>
				<div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
    				<div className="col-span-6">
      					<span className="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span>
      						<h1 className="text-white font-extrabold text-5xl mb-8">Alberta Biodiversity Monitoring Institute</h1>
      						<p className="text-stone-100 text-base">
        						We offer you <span className="text-gray-300 font-bold"> Remote Camera Decision Support Tool: </span>  an innovative study design and analysis decision support system for users of remote cameras
      						</p>
      					<button className="mt-8 text-white uppercase py-4 text-base font-light px-10 bg-transparent border border-white hover:bg-gray-200 hover:bg-opacity-10">Get started</button>
    				</div>
  				</div>
			</div> */}
        </>
    );
}

