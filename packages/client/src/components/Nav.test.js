import "jest-styled-components";

import React from "react";
import { MemoryRouter } from "react-router-dom";

import Context from "../__mocks__/context";
import { findTopicBySlug } from "../utils";
import { NEXT_BUTTON, PREV_BUTTON } from "../utils/test-ids";
import { fireEvent, render } from "../utils/test-utils";
import Form from "./Form";
import Nav from "./Nav";

const onSubmitMock = jest.fn();
const onPrevClickMock = jest.fn();

const Wrapper = ({ children }) => {
  const topicMock = "dakraam-plaatsen";
  const topicUrlMock = `/${topicMock}`;
  const topic = findTopicBySlug(topicMock);

  return (
    <Context topicMock={topic}>
      <MemoryRouter initialEntries={[topicUrlMock]}>
        <Form onSubmit={onSubmitMock}>{children}</Form>
      </MemoryRouter>
    </Context>
  );
};

it("Nav should render with no props", () => {
  const { queryByTestId } = render(
    <Wrapper>
      <Nav />
    </Wrapper>
  );

  expect(queryByTestId(NEXT_BUTTON)).not.toBeInTheDocument();
  expect(queryByTestId(PREV_BUTTON)).not.toBeInTheDocument();
});

it("Nav should render default values", () => {
  const { queryByTestId } = render(
    <Wrapper>
      <Nav noMarginBottom showNext showPrev />
    </Wrapper>
  );

  expect(queryByTestId(PREV_BUTTON)).toBeInTheDocument();

  const nextButton = queryByTestId(NEXT_BUTTON);
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveStyleRule("margin-right", "10px");
});

it("Nav should render with prop values and should fire events", () => {
  const { getByText } = render(
    <Wrapper>
      <Nav
        formEnds
        nextText="Next"
        onGoToPrev={onPrevClickMock}
        prevText="Prev"
        showNext
        showPrev
      />
    </Wrapper>
  );

  const prevButton = getByText("Prev");
  const nextButton = getByText("Next");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveStyleRule("margin-right", "10px");

  fireEvent.click(prevButton);
  expect(onPrevClickMock).toHaveBeenCalledTimes(1);

  fireEvent.click(nextButton);
  expect(onSubmitMock).toHaveBeenCalledTimes(1);
});