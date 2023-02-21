import React from "react";
import { render } from '@testing-library/react';
import Footer from '..';

describe('Footer', () => {

    it('should render the footer correctly when rendered ', () => {
        const {getByText} = render(<Footer />);
        expect(getByText('@artifact 2019')).toBeInTheDocument;
    });

    it('should match with snapshots when rendered for first time', () => {
        const {asFragment} = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });

});
