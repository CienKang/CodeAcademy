import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

    it('should match with snapshots when rnedered for first time', () => {
        const {asFragment} = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});
