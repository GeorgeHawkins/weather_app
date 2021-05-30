import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IndividualRoute from './../Components/IndividualRoute.js';

it("renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IndividualRoute/>, div);
})
// renders for individual route row, checking that it takes and uses its props correctly
it("renders with the correct dot image (red)", () => {
  render(<IndividualRoute isOut={true}/>);
  const imageDisplayed = document.querySelector("img");
  expect(imageDisplayed.src).toContain("red-dot.png");
})

it("renders with the correct dot image (yellow)", () => {
  render(<IndividualRoute isOut={false}/>);
  const imageDisplayed = document.querySelector("img");
  expect(imageDisplayed.src).toContain("yellow-dot.png");
})

it("renders with primary route correctly", () => {
  const {getByTestId} = render(<IndividualRoute primaryRoute="Coronation Drive"/>);
  expect(getByTestId('primaryRoute')).toHaveTextContent("Coronation Drive");
})

it("renders with secondary route correctly", () => {
  const {getByTestId} = render(<IndividualRoute secondaryRoute="Milton Road"/>);
  expect(getByTestId('secondaryRoute')).toHaveTextContent("Milton Road");
})

it("renders with additional route correctly", () => {
  const {getByTestId} = render(<IndividualRoute additionalRoute="Upper Roma St"/>);
  expect(getByTestId('additionalRoute')).toHaveTextContent("Upper Roma St");
})

it("renders with distance correctly", () => {
  const {getByTestId} = render(<IndividualRoute distance="12"/>);
  expect(getByTestId('routesDistance')).toHaveTextContent("12 km");
})

it("renders with distance correctly", () => {
  const {getByTestId} = render(<IndividualRoute time="34"/>);
  expect(getByTestId('routesTime')).toHaveTextContent("34 min");
})