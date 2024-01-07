const check = document.querySelector(".btn button");
const billAmountInput = document.querySelector("#billAmount");
const cashAmountInput = document.querySelector("#cashAmount");
const cash_amount = document.querySelector(".cash_amount")

billAmountInput.addEventListener("keyup", () => {
  cash_amount.style.display = "block";
});

check.addEventListener("click", () => {
  let billAmount = parseFloat(billAmountInput.value);
  let cashAmount = parseFloat(cashAmountInput.value);

  // console.log(billAmount, cashAmount);

  if (
    isNaN(billAmount) ||
    isNaN(cashAmount) ||
    billAmount < 0 ||
    cashAmount < 0
  ) {
    alert("Please enter a valid number");
    return;
  }

  let changeAmount = cashAmount - billAmount;

  let notes = [2000, 500, 100, 50, 20, 10, 5, 1];

  // for (let i = 0; i < notes.length; i++) {
  //   let note = notes[i];
  //   let countElement = document.getElementById("count" + note);
  //   let count = calculate(changeAmount, note);
  //   countElement.textContent = count;
  //   changeAmount %= note;
  // }

  for(let item of notes){
    let note = item
    let countElement = document.getElementById("count" + note);
    let count = calculate(changeAmount, note);
    countElement.textContent = count;
    changeAmount %= note;
  }
});

function calculate(amount, note) {
  let count = Math.floor(amount / note);
  return count;
}
