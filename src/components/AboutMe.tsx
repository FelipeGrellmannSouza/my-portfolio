import React from 'react'
import { MyPhoto } from "@/components/MyPhoto";

export const AboutMe = () => {
    return (
        <div className="container mx-auto flex justify-between items-center mt-10 max-w-300 pb-10">
            <div className='flex-1/3 w-100 pr-15'>
                <h2 className="text-5xl">
                    About Me
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='flex justify-end flex-1'>
                <MyPhoto />
            </div>
        </div>
    )
}
