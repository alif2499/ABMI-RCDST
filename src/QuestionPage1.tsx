"use client";

import React, { useState } from "react";
// import { Link } from 'react-router-dom'

export default function Homepage(props: any) {
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
        </>
    );
}
