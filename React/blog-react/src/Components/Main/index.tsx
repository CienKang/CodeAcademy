import React, { useEffect, useState } from 'react';
import { GET_BLOG_DATA } from '../../constants/EndPoints';
import { BlogData } from '../../types';
import makeRequest from '../../utils/makeRequest';
import Card from '../Card';
import './Main.css';
import '../Card/Card.css';

const Main = (): JSX.Element => {
    const [data, setData] = useState<BlogData[]>();

    useEffect(() => {

        makeRequest(GET_BLOG_DATA, {})
            .then(resp => {
                setData(resp);
            });

    }, []);
    return data ? (
        <main>
            <div className="cards outer-margin-left-15">
                {data.map((item: BlogData) => {
                    return <Card key={item.id} item={item} />;
                })}

            </div>
        </main>
    ) : (
        <div>
            Loading...
        </div>
    );
};

export default Main;