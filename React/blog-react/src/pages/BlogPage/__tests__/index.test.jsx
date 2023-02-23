import React from 'react';

import { render, screen } from '@testing-library/react';

import BlogPage from '../index';

describe('BlogPage', () => {
    
    it('should render without crashing', () => {
        render(<BlogPage />);
        expect(screen.getByRole('banner')).toBeTruthy();
        expect(screen.getByRole('contentinfo')).toBeTruthy();
        expect(screen.getByRole('main')).toBeTruthy();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<BlogPage />);
        expect(asFragment()).toMatchSnapshot();
    });
    
});
    