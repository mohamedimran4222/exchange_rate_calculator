const currencyE1 = document.getElementById("currency");
const amountE1 = document.getElementById("amount");
const currencyE2 = document.getElementById("currency-1");
const amountE2 = document.getElementById("amount-1");
const rateE1 = document.getElementById("rate");

function calculate() {
  const currency = currencyE1.value;
  const currency1 = currencyE2.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency1];
      rateE1.innerHTML = `1${currency}=${rate}${currency1}`;
      amountE2.value = (amountE1.value * rate).toFixed(2);
    });
}

currencyE1.addEventListener("change", calculate);
amountE1.addEventListener("input", calculate);
currencyE2.addEventListener("change", calculate);
amountE2.addEventListener("input", calculate);
