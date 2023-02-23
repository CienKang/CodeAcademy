import React from 'react';
import { Footer, Header, Main } from '../../components';

const BlogPage = () :JSX.Element => {
    return ( 
        <div className=''>
            <Header data-testid='header' />
            <Main data-testid='main' />
            <Footer data-testid='footer' />
        </div>
    );
};
 
export default BlogPage;