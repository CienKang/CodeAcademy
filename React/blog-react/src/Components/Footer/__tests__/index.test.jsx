import React from 'react';

import { render } from '@testing-library/react';

import Footer from '../index';

describe('Footer', () => {
    it('renders without crashing and shows name and nav links when rendered', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('©artifact.com 2019')).toBeTruthy();
    });
});