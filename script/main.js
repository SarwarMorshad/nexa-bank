// console.log("connected");
document.getElementById("btn-add-money").addEventListener("click", function (e) {
  e.preventDefault();

  const validPin = 1234;
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const addAmount = parseInt(document.getElementById("add-amount").value);
  const pinNumber = parseInt(document.getElementById("add-money-pin-number").value);

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

// Withdraw money
document.getElementById("btn-withdraw-money").addEventListener("click", function (e) {
  e.preventDefault();

  const validPin = 1234;
  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
  const pinNumber = parseInt(document.getElementById("cashout-pin-number").value);

  const mainAccountBalance = parseInt(document.getElementById("main-account-balance").innerText);

  //   Validation
  if (agentNumber.length !== 11 || isNaN(agentNumber)) {
    alert("Please enter a valid 11 digit account number");
    return;
  }
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid amount to Withdraw");
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
  const newBalance = mainAccountBalance - withdrawAmount;
  document.getElementById("main-account-balance").innerText = newBalance;

  //   Show success message
  alert(
    `Successfully withdrew $${withdrawAmount} from your account via agent ${agentNumber}. Your new balance is $${newBalance}.`
  );

  //   clear form
  document.getElementById("agent-number").value = "";
  document.getElementById("withdraw-amount").value = "";
  document.getElementById("pin-number").value = "";
});

// toggle between add money and cash out
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("parent-add-money").classList.remove("hidden");
  document.getElementById("parent-cash-out").classList.add("hidden");
  document.getElementById("parent-transfer-money").classList.add("hidden");
});

document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("parent-cash-out").classList.remove("hidden");
  document.getElementById("parent-add-money").classList.add("hidden");
  document.getElementById("parent-transfer-money").classList.add("hidden");
});

document.getElementById("transfer-money").addEventListener("click", function () {
  document.getElementById("parent-transfer-money").classList.remove("hidden");
  document.getElementById("parent-add-money").classList.add("hidden");
  document.getElementById("parent-cash-out").classList.add("hidden");
});
