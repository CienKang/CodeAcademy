/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from "react";

interface props {
  date: string
  readingTime: string
  title: string
  description: string
  claps: number
  liked: boolean
  image: string
}

const card = ({
    date,
    readingTime,
    title,
    description,
    claps,
    liked,
    image,
}: props): JSX.Element => {

    const [clap,setClap] = useState(claps);
    const [isClaped, setIsClaped] = useState(false);
    const [like,setLike] = useState(liked);

    const handleClap = () => {
        if(isClaped){
            setClap(clap-1);
        }
        else{
            setClap(clap+1);
        }
        setIsClaped(!isClaped);
    };
    const handleLikes = () => {
        setLike(!like);
    };
    return (
        <div className="max-w-xs flex flex-col border-solid border-2 my-3">
            <img className="w-full h-3/6" src={require(`../../assets/Images/${image}`)} alt=""></img>
            <div className="flex flex-row justify-between align-center">
                <p className="pl-1 text-grey">{date}</p>
                <p className="pr-1 text-grey">{readingTime}</p>
            </div> 
            <p className="text-xl font-bold bold px-3">{title}</p>
            <p className="text-lg px-3">{description}</p>
            <hr className="h-px w-11/12 mx-auto my-2 bg-gray-200 border-0 dark:bg-gray-700 px-3" ></hr>
            <div className="flex flex-row justify-between align-center">
                <div className="flex flex-row justify-around">
                    <button onClick={handleClap}>
                        <img src={require("../../assets/Icons/clapping.svg").default} alt="img" className=" w-12 px-3"></img>
                    </button>
                    <p>{clap}</p>
                </div>
                <button onClick={handleLikes}>
                    {like?<img src={require("../../assets/Icons/heart-red.svg").default} alt="img" className="w-12 px-3"></img>
                        :<img src={require("../../assets/Icons/heart-black.svg").default} alt="img" className="w-12 px-3"></img>}
                </button>
            </div>
        </div>
    );
};

export default card;
