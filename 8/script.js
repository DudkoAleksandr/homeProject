const numberOne = document.querySelector(".num__one");
const numberTwo = document.querySelector(".num__two");
const btn = document.querySelector(".click");
const result = document.querySelector(".result");

let resultNum = 0;

btn.addEventListener("click", () => {
  numOne = Number(numberOne.value);
  numTwo = Number(numberTwo.value);
  if (numOne <= 10 && numTwo <= 10) {
    resultNum = numOne * numTwo;
    result.innerHTML = resultNum;
  } else {
    result.innerHTML = "Введите число от 1-10";
  }
});
