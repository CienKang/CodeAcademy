import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
    it('should render without crashing', () => {
        render(<App />);
        expect(screen.getByText('The Artifact')).toBeInTheDocument;
    });

});