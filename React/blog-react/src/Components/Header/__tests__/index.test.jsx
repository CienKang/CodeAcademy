import React from 'react';

import { render } from '@testing-library/react';

import Header from '../index';

describe('Header', () => {
    it('renders without crashing and shows name and nav links when rendered' , () => {
        const  {getByText} = render(<Header />);
        expect(getByText('Blog')).toBeTruthy();
        expect(getByText('About')).toBeTruthy();
        expect(getByText('Contact')).toBeTruthy();
        expect(getByText('The Artifact')).toBeTruthy();
        expect(getByText('Culture & Art Blog')).toBeTruthy();
    });
});

