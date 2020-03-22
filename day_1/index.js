import { handle } from "./day-1";
import { readFile } from "../utils";

readFile("day_1/input.txt").then(input => {
  console.log("The answer is :", handle(input));
});
