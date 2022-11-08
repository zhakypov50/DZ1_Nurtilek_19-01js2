////////////////// task 1
const numberInput = document.querySelector("#numberInput");
const numberCheck = document.querySelector(".numberCheck");
const numberResult = document.querySelector(".numberResult");

const numberRegExp = /^\1\d{13}$/;

numberCheck.addEventListener("click", () => {
    if (numberRegExp.test(numberInput.value)) {
        numberResult.innerText = "ok";
        numberResult.style.color = "green";
    } else {
        numberResult.innerText = "not ok";
        numberResult.style.color = "red";
    }
});

///////////////// task 2
const blockSmall = document.querySelector(".blockSmall");

blockSmall.addEventListener.style.left = '30px';