function addition(num1, num2) {
  return num1 + num2;
}
function substruct(num1, num2) {
  return num1 - num2;
}
function multyply(num1, num2) {
  return num1 * num2;
}
function devide(num1, num2) {
  return num1 / num2;
}

export function checkActions(i, arr, action) {
  let num1 = Number(arr[i - 1]),
    num2 = Number(arr[i + 1]);
  arr.splice(i - 1, 3, String(calculits[action](num1, num2)));
  console.log(arr);
}
export function cutDecimal4(num) {
  num = String(num);
  if (num.indexOf(".") !== -1) {
    let numArr = num.split(".");
    if (numArr.length === 1) {
      return Number(num);
    } else {
      return Number(
        numArr[0] +
          "." +
          numArr[1].charAt(0) +
          numArr[1].charAt(1) +
          numArr[1].charAt(2) +
          numArr[1].charAt(3)
      );
    }
  } else {
    return Number(num);
  }
}

export function checkForDecimal(value) {
  const val = String(value);
  for (let i = val.length - 1; i >= 0; i--) {
    if (val[i] === ".") {
      return true;
    } else if (val[i] === " " || i === 0) {
      return false;
    }
  }
}
export const deleteLast = (formula) => {
  const value = String(formula);
  const lastValue = value.slice(value.length - 1);
  let newValue = value.slice(0, value.length - 1);

  if (lastValue === " ") newValue = newValue.slice(0, newValue.length - 2);
  if (newValue === "") newValue = 0;
  console.log("new Value :", newValue);
  return newValue;
};

// clean dubble operators
export const cleanSplitFormula = (formula) => {
  console.log(formula);
  for (let i in formula) {
    let j = i - 1,
      k = i - 2;
    if (i > 1) {
      console.log(Number(formula[i]));
      console.log(formula[i], formula[j], formula[k]);

      if (!Number(formula[i]) && !Number(formula[j]) && !Number(formula[k])) {
        console.log("yesss");
        console.log("i", i);
        formula.splice(k, 2);
        console.log(formula);
      }
    }
  }
  return formula;
};

const calculits = {
  addition,
  substruct,
  multyply,
  devide,
  cleanSplitFormula,
  // checkActions,
};
export default calculits;
