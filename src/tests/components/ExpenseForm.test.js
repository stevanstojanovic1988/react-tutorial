import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expences from "../fixtures/expenses";

test("sh render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("sh render Expense correctlywith data 1u", () => {
  const wrapper = shallow(<ExpenseForm expences={expences[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("sh render error", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("sh set description in iput change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
});
