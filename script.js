function isValidCard(cardNum) {
  const digitCount = {};
  for (const digit of cardNum) {
    digitCount[digit] = (digitCount[digit] || 0) + 1;
    if (digitCount[digit] > 2) {
      return false;
    }
  }
  return true;
}

function checkStatus() {
  const cardNum = document.getElementById("cardNumber").value.trim();
  const resultCard = document.getElementById("result");
  const cardOut = document.getElementById("cardOut");
  const balanceOut = document.getElementById("balance");
  const statusOut = document.getElementById("syncStatus");
  const warningText = document.getElementById("warning");

  if (cardNum.length !== 9) {
    alert("9-digit card number is only acceptable!");
    return;
  }

  if (!isValidCard(cardNum)) {
    resultCard.classList.remove("hidden");
    cardOut.textContent = cardNum;
    balanceOut.textContent = "0";
    statusOut.textContent = "❌ Invalid Card";
    warningText.textContent = "Card number has repeated digits more than twice.";
    return;
  }

  const lastDigit = parseInt(cardNum.charAt(8));
  let balance = 0;
  let status = "";
  let warning = "";

  if ([0, 2, 4, 6, 8].includes(lastDigit)) {
    status = "✅ Recharge Successful";
    balance = Math.floor(Math.random() * 101) + 100;
    warning = "Good to go!";
  } else if ([1, 3, 5].includes(lastDigit)) {
    status = "⏳ Recharge Pending";
    balance = 0;
    warning = "Please recharge.";
  } else if ([7, 9].includes(lastDigit)) {
    status = "⚠️ Low Balance";
    balance = Math.floor(Math.random() * 21) + 10;
    warning = "Recharge soon to continue trips.";
  }

  cardOut.textContent = cardNum;
  balanceOut.textContent = balance;
  statusOut.textContent = status;
  warningText.textContent = warning;

  resultCard.classList.remove("hidden");
}
