'use strict';

// ページ上の要素(Element)を参照
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");

// 計算処理（3か所にコピペで繰り返す）
elementSelect.addEventListener("change", function () {
  let num1 = Number(elementNum1.value);
  let num2 = Number(elementNum2.value);
  let calcType = elementSelect.value;
  let result;

  switch (calcType) {
    case "type-add":
      result = num1 + num2;
      break;
    case "type-substract":
      result = num1 - num2;
      break;
    case "type-multiply":
      result = num1 * num2;
      break;
    case "type-divide":
      result = num2 !== 0 ? num1 / num2 : "Error: divide by zero";
      break;
  }

  elementResult.innerHTML = result;
}, false);

elementNum1.addEventListener("change", function () {
  let num1 = Number(elementNum1.value);
  let num2 = Number(elementNum2.value);
  let calcType = elementSelect.value;
  let result;

  switch (calcType) {
    case "type-add":
      result = num1 + num2;
      break;
    case "type-substract":
      result = num1 - num2;
      break;
    case "type-multiply":
      result = num1 * num2;
      break;
    case "type-divide":
      result = num2 !== 0 ? num1 / num2 : "Error: divide by zero";
      break;
  }

  elementResult.innerHTML = result;
}, false);

elementNum2.addEventListener("change", function () {
  let num1 = Number(elementNum1.value);
  let num2 = Number(elementNum2.value);
  let calcType = elementSelect.value;
  let result;

  switch (calcType) {
    case "type-add":
      result = num1 + num2;
      break;
    case "type-substract":
      result = num1 - num2;
      break;
    case "type-multiply":
      result = num1 * num2;
      break;
    case "type-divide":
      result = num2 !== 0 ? num1 / num2 : "Error: divide by zero";
      break;
  }

  elementResult.innerHTML = result;
}, false);
