import React from "react";
import Appartments from "../components/Appartments";
import { render, screen, waitFor, act } from "@testing-library/react";
jest.mock("../hooks/useFetchData");
describe("Appartments Component", () => {
  it("renders a loading skeleton when isLoading is true", () => {
    // Mock isLoading to be true
    useFetchInfiniteQueriesPage.mockReturnValue({
      data: null,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isLoading: true,
    });

    render(<Appartments />);

    // Assert that the loading skeleton is rendered
    const loadingSkeleton = screen.getByTestId("loading-skeleton");
    expect(loadingSkeleton).toBeInTheDocument();
  });

  it("renders fetched data when isLoading is false", async () => {
    // Mock fetched data
    const mockData = {
      pages: [
        [
          {
            id: 1,
            location: "Sample Location",
            country: "Sample Country",
            stars: 4.5,
            availability: "Available",
            cost: 100,
            images: ["image1.jpg", "image2.jpg"],
          },
        ],
      ],
    };

    useFetchInfiniteQueriesPage.mockReturnValue({
      data: mockData,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isLoading: false,
    });

    render(<Appartments />);

    // Assert that the data is rendered
    const locationText = screen.getByText("Sample Location, Sample Country");
    const starsText = screen.getByText("4.5");
    const availabilityText = screen.getByText("Available");
    const costText = screen.getByText("$100 night");
    const image1 = screen.getByAltText("image-1");
    const image2 = screen.getByAltText("image-2");

    expect(locationText).toBeInTheDocument();
    expect(starsText).toBeInTheDocument();
    expect(availabilityText).toBeInTheDocument();
    expect(costText).toBeInTheDocument();
    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});