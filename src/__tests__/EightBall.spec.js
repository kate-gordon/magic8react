import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EightBall from '../components/eight-ball'; 

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders ball data", async () => {
  const fakeResponse = {
    answer: "It is certain",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<EightBall id="123" />, container);
  });

  expect(container.querySelector("form").textContent).toBe(fakeResponse.answer);


  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});