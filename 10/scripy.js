const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const btnNew = document.querySelector(".btn__new");

let randomNum = Math.floor(Math.random() * 100);
let clickBtn = 0;

btn.addEventListener("click", () => {
  clickBtn++;
  count.innerHTML = `Количество попыток: ${clickBtn} из 5`;
  if (Number(input.value) > randomNum) {
    result.innerHTML = "Меньше";
  } else if (Number(input.value) < randomNum) {
    result.innerHTML = "Больше";
  } else if (Number(input.value) === randomNum) {
    result.innerHTML = "Угадал";
  }

  if (clickBtn >= 5) {
    result.innerHTML = "Проиграл";
    btn.classList.add("hidden");
    btnNew.classList.remove("hidden");
  }
});

btnNew.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 100);
  result.innerHTML = "";
  count.innerHTML = "";
  clickBtn = 0;
  input.value = "";
  btn.classList.remove("hidden");
  btnNew.classList.add("hidden");
});
