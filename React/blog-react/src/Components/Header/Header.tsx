import React from "react";


const Header = (): JSX.Element => {
    return (
        <div>
            <div className="flex flex-col bg-black justify-center">
                <h1 className="text-white text-lg ml-32">The Artifact</h1>
                <p className="italic text-white text-sm ml-32">Culture & Art Blog</p>
            </div>
            <div className="bg-black">
                <div className="flex flex-row items-center justify-end mr-20 space-x-10">
                    <a href="" className="italic text-sm text-white">Blog</a>
                    <a href="" className="italic text-sm text-white">About us</a>
                    <a href="" className="italic text-sm text-white">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
