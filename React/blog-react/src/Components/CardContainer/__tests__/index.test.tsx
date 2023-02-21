import React from "react";
import { render } from "@testing-library/react";
import data from '../../../assets/mockData/index.json';
import CardContainer from "..";
describe("CardContainer", () => {

    it("should render the card container correctly with correct number of cards when rendered ", () => {
        
        const {getAllByTestId} = render(<CardContainer />);
        const cards = getAllByTestId("card");
        expect(cards.length).toEqual(data.length);

    });

    it('should match the previous snapshot', () => {
        const { asFragment } = render(<CardContainer />);
        expect(asFragment()).toMatchSnapshot();
    });
});