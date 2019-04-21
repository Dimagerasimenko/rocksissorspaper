import {assert} from 'chai';
import {getComputerChoise, choices} from "./util";
describe(`getComputerChoise function check`, () => {
  it(`return value must be string`, () => {
    assert.isNotString(getComputerChoise() === `string`);
  });
  it(`array have to have 3 elem`, () => {
    assert.lengthOf(choices, 3, `array has 3 elem`);
  });
});

/*
myProgect на git
*/