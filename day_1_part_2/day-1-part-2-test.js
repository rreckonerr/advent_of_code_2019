import { handle } from "./day-2";
import { assert } from "../utils";

const caseOne = ["14", 2];
const caseTwo = ["1969", 966];
const caseThree = ["100756", 50346];

[caseOne, caseTwo, caseThree].forEach(([input, expectedResult], index) => {
  const actualResult = handle(input);
  assert(
    actualResult === expectedResult,
    `assertion ${index + 1} should pass for input "${input}"`,
    `expected "${expectedResult}", got "${actualResult}"`
  );
});
