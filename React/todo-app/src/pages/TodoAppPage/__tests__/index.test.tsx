import { render } from '@testing-library/react';
import { TodoAppPage } from '..';
import React from 'react';


describe('TodoAppPage', () => {

    it('should render the todo app page', () => {

        const { getByText } = render(<TodoAppPage />);
        expect(getByText('To Do APP')).toBeInTheDocument();
    });

    it('should match the snapshot when rendered for the first time', () => {

        const { asFragment } = render(<TodoAppPage />);
        expect(asFragment()).toMatchSnapshot();
    });

});