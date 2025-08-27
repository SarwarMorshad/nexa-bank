// console.log("Connected");
document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 17634363483;
  const pin = 1234;

  const mobileNumberInput = document.getElementById("mobile-number");
  const pinInput = document.getElementById("pin-number");

  const parsedMobileNumberValue = parseInt(mobileNumberInput.value);
  const parsedPinValue = parseInt(pinInput.value);

  if (parsedMobileNumberValue === mobileNumber && parsedPinValue === pin) {
    window.location.href = "/home.html";
  } else {
    alert("Invalid Credentials");
  }

  // Clear input fields
  mobileNumberInput.value = "";
  pinInput.value = "";
});
