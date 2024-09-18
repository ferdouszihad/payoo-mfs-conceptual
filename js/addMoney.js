/**
 * 1. add event listener to the add Money button ( form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 2. get the money user wants to add
 * also, get the pin number provided
 * 3. verify the pin number. for, wrong pin number ==> failed to add
 * for right pin number, allow to add the number to the account balance
 *
 * 4. get the current balance
 *
 * 5. add money to be added with the current balance
 *
 * 6. display/update the balance in the DOM/UI
 *
 */

getElement("btn-add-money").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("added the event handler");

  // get money and the pin number
  //   const addMoney = document.getElementById("input-add-money").value;
  //   const addMoneyNumber = parseFloat(addMoney);
  //   const pinNumber = document.getElementById("input-pin-number").value;
  const addMoneyNumber = getInputNumber("input-add-money");
  if (isNaN(addMoneyNumber)) {
    return alert("Your Input is not a Number");
  }
  const pinNumber = getInputString("input-pin-number");

  // console.log(addMoney, pinNumber)

  if (pinNumber === "1234") {
    // add money to the account
    // const balance = document.getElementById("account-balance").innerText;
    // const balanceNumber = parseFloat(balance);
    const balanceNumber = getElementNumber("account-balance");

    // new balance
    const newBalance = balanceNumber + addMoneyNumber;
    // update the DOM with updated balance
    document.getElementById("account-balance").innerText = newBalance;

    const transactionContainer = getElement("transactions");
    // const p = document.createElement("p");
    // p.style.background = "white";
    // p.style.color = "black";
    // p.style.padding = "20px";
    // p.innerHTML =
    //   addMoneyNumber +
    //   " Tk Added to your Account at " +
    //   new Date() +
    //   " current Balance is " +
    //   newBalance +
    //   " Tk";
    // //এখানে সব কিছু কনসোল করে দেখাতে হবে।
    const div = document.createElement("div");
    div.innerHTML = `<p class="bg-white p-5 text-black">
    ${addMoneyNumber} Tk Added to your Account at ${new Date()}. current Balance is ${newBalance} Tk.
    </p>`;
    transactionContainer.append(div);
  } else {
    alert("Failed to add money. Please try again later.");
  }
});
