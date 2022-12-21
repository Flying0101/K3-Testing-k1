import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BtnIncrease from "../BtnIncrease";

test("test if counter increases by one", () => {
    render(<BtnIncrease />);

    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("1");
});