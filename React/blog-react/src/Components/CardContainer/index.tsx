/* eslint-disable react/jsx-key */
import React from 'react';
import Card from '../CardComponent';
import data from '../../assets/mockData/index.json';

const CardContainer = (): JSX.Element => {
    return (
        <div className="flex flex-row flex-wrap gap-x-24 ml-32">
            {data.map((card,idx) => {
                return (
                    <Card
                        date={card.date}
                        readingTime={card.readingTime}
                        title={card.title}
                        description={card.description}
                        claps={card.claps}
                        liked={card.liked}
                        image={card.image}
                        id={idx}
                    />
                );
            })}
        </div>
    );
};

export default CardContainer;
