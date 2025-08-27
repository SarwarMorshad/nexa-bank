// console.log("connected");
document.getElementById("btn-add-money").addEventListener("click", function (e) {
  e.preventDefault();

  const validPin = 1234;
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const addAmount = parseInt(document.getElementById("add-amount").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);

  const mainAccountBalance = parseInt(document.getElementById("main-account-balance").innerText);

  //   Validation
  if (bank === "") {
    alert("Please select a bank");
    return;
  }
  if (accountNumber.length !== 11 || isNaN(accountNumber)) {
    alert("Please enter a valid 11 digit account number");
    return;
  }
  if (isNaN(addAmount) || addAmount <= 0) {
    alert("Please enter a valid amount to add");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Incorrect pin number");
    return;
  }
  if (isNaN(pinNumber) || pinNumber.toString().length !== 4) {
    alert("Please enter a valid 4 digit pin number");
    return;
  }

  //   Update main account balance
  const newBalance = mainAccountBalance + addAmount;
  document.getElementById("main-account-balance").innerText = newBalance;

  //   Show success message
  alert(`Successfully added $${addAmount} to your account from ${bank}. Your new balance is $${newBalance}.`);

  //   clear form
  document.getElementById("bank").value = "";
  document.getElementById("account-number").value = "";
  document.getElementById("add-amount").value = "";
  document.getElementById("pin-number").value = "";
});
