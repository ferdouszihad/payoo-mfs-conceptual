getElement("btn-cash-out").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("cash out button clicked");

  //   const cashOut = document.getElementById("input-cash-out").value;
  //   const cashOutNumber = parseFloat(cashOut);
  //   const pinNumber = document.getElementById("input-cash-out-pin").value;
  //   console.log(cashOut, pinNumber);
  const cashOutNumber = getInputNumber("input-cash-out");
  const pinNumber = getInputString("input-cash-out-pin");

  // wrong way to verify pin number
  if (pinNumber === "1234") {
    // const balance = document.getElementById("account-balance").innerText;
    // const balanceNumber = parseFloat(balance);
    const balanceNumber = getElementNumber("account-balance");

    // reduce the balance
    const newBalance = balanceNumber - cashOutNumber;

    // update the ui
    document.getElementById("account-balance").innerText = newBalance;
  } else {
    alert("Failed to cash out. Please try again later.");
  }
});
