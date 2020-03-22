import { handle } from "./day-1-part-2";
import { readFile } from "../utils";

readFile("day_1_part_2/input.txt").then(input => {
  console.log("The answer is :", handle(input));
});
