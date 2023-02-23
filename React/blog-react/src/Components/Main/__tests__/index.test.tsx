import React from 'react';
import {render,screen ,waitFor} from '@testing-library/react';

import makeRequest from '../../../utils/makeRequest';
import { mockBlogPostData } from '../../../mocks';
import Main from '..';
jest.mock('../../../utils/makeRequest');
describe('Main', () => {
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should show loading text when data is still loading', async () => {
        const mockMakeRequest = makeRequest as jest.MockedFunction<
          typeof makeRequest
        >;
        mockMakeRequest.mockResolvedValue(mockBlogPostData);
        render(<Main />);
        expect(screen.getByText('Loading...')).toBeTruthy();
        await waitFor(() => {
            expect(screen.getByText('mock title 1')).toBeTruthy();
        });
    });

    it('should show the blog posts when data is loaded', async () => {
        const mockMakeRequest = makeRequest as jest.MockedFunction<
          typeof makeRequest
        >;
        mockMakeRequest.mockResolvedValue(mockBlogPostData);
        render(<Main />);
        await waitFor(() => {
            expect(screen.getAllByTestId('blog-post')).toHaveLength(2);
        });
    });
});