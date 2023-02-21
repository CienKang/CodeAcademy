import React from 'react';
import {render} from '@testing-library/react';
import Header from '..';


describe('Header', () => {

    it('should render the header correctly when rendered for first time', () => {
        const {getByText} = render(<Header />);
        expect(getByText('The Artifact')).toBeTruthy();
        expect(getByText('Culture & Art Blog')).toBeTruthy();
        expect(getByText('Blog')).toBeTruthy();
        expect(getByText('About us')).toBeTruthy();
        expect(getByText('Contact')).toBeTruthy();
    });

    it('should match the snapshot ', () => {
        const {asFragment} = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});