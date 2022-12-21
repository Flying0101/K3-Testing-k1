import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BtnDecrease from "../BtnDecrease";

test("test if counter decrease value by one", () => {
render(<BtnDecrease />);

const counter = screen.getByTestId("minus-counter");
const DecrementBtn = screen.getByTestId("Decrement");
  
fireEvent.click(DecrementBtn);

expect(counter).toHaveTextContent("-1");
});