import React from 'react';
import { BlogData } from '../../types';

import clap from '../../assets/Icons/clapping.svg';
import heartBlack from '../../assets/Icons/heart-black.svg';
import heartRed from '../../assets/Icons/heart-red.svg';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_BLOG_DATA } from '../../constants/EndPoints';

interface CardProps {
    item: BlogData
}


const Card = ({item}: CardProps): JSX.Element => {

    const [isLiked, setIsLiked] = React.useState(item.liked);
    const [claps, setClaps] = React.useState(item.claps);

    const handleLikeClick = async () => {
        await makeRequest(UPDATE_BLOG_DATA(item.id), {data: {liked: !isLiked}});
        setIsLiked(!isLiked);
    };

    const handleClapClick = async () => {
        await makeRequest(UPDATE_BLOG_DATA(item.id), {data: {claps: claps + 1}});
        setClaps(claps + 1);
    };

    return (
        <div className="card" data-testid='blog-post'>
            <img src={item.image} alt="Image Not Available" />
            <div className="date-time padding-10">
                <span>{ getFormattedDateFromUtcDate(item.date)}</span>
                <span>{item.readingTime}</span>
            </div>
            <h2 className="padding-10">{item.title}</h2>
            <p className="padding-10">{item.description}?</p>
            <div className="break-line padding-10"></div>
            <div className="comment-like padding-10">
                <div className="comments">
                    <img src={clap} alt="Image Not Available" onClick={handleClapClick} />
                    <span>{claps}</span>
                </div>
                <img src={isLiked ? heartRed : heartBlack} onClick={handleLikeClick}/>
            </div>
        </div>
    );
};

export default Card;