const form = document.getElementById("form");
const inputField = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultField = document.getElementById("result");

function result() {
    if (inputField.value === "") {
        alert("Please input a value");
    }
    const str = inputField.value;
    const newArray = str
        .toLowerCase()
        .match(/[a-z0-9]/g)
        .join("");
    const reverseArray = newArray.split("").reverse().join("");

    if (newArray != reverseArray) {
        resultField.textContent = `${str} is not a palindrome`;
    } else {
        resultField.textContent = `${str} is a palindrome`;
    }
}

checkBtn.addEventListener("click", result);
