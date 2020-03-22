import { handle } from "./day-1";
import { assert } from "../utils";

const caseOne = ["12", 2];
const caseTwo = ["14", 2];
const caseThree = ["1969", 654];
const caseFour = ["100756", 33583];

[caseOne, caseTwo, caseThree, caseFour].forEach(
  ([input, expectedResult], index) => {
    const actualResult = handle(input);
    assert(
      actualResult === expectedResult,
      `assertion ${index + 1} should pass for input "${input}"`,
      `expected "${expectedResult}", got "${actualResult}"`
    );
  }
);
