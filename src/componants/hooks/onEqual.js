import {
  checkActions,
  cutDecimal4,
  cleanSplitFormula,
} from "../hooks/useCalculits.js";

function onEqual(formula) {
  console.log("formula: ", formula);
  /* splits screen value to array (splits by " " seraunding actionKeys) */
  // if (!formula.includes(" ")) {
  //   console.log("indexOf");
  //   return formula;
  // }
  console.log("check", formula.split());

  let splitFormula = formula.split(" ");
  console.log(splitFormula);

  let cleansplit = cleanSplitFormula(splitFormula);
  console.log(cleansplit);

  for (let i = 0; i < cleansplit.length; i++) {
    if (cleansplit[i] === "x") {
      checkActions(i, cleansplit, "multyply");
      i--;
    }
    if (cleansplit[i] === "/") {
      checkActions(i, cleansplit, "devide");
      i--;
    }
  }
  /* after   / and x   action-Keys,   checks + and -   */
  for (let i = 0; i < cleansplit.length; i++) {
    if (cleansplit[i] === "-") {
      checkActions(i, cleansplit, "substruct");
      i--;
    }
    if (cleansplit[i] === "+") {
      checkActions(i, cleansplit, "addition");
      i--;
    }
  }

  let result = cutDecimal4(cleansplit);
  if (result === Infinity || isNaN(result)) {
    result = 0;
  }
  console.log(result);

  return result;
}

export default onEqual;
