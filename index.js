const form = document.querySelector("form");
let input = form[0];
let result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let str = input.value;
  str = str
    .match(/[a-zA-Z0-9\s]/g)
    .join("")
    .toLowerCase();
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    result.textContent = `"${input.value}" is a palindrome`;
  } else {
    result.textContent = `"${input.value}" is not a palindrome`;
  }

  input.value = "";
});
