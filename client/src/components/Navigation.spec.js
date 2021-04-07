import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";

describe("Navigation component", () => {
    it("should render menu links", () => {
        render(<Navigation />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Home/)).toBeInTheDocument();
        expect(screen.getByText(/Newsfeed/)).toBeInTheDocument();
        expect(screen.getByText(/Brofile/)).toBeInTheDocument();
        expect(screen.getByText(/YoEvents/)).toBeInTheDocument();
        expect(screen.getByText(/Brotags/)).toBeInTheDocument();
    });
});