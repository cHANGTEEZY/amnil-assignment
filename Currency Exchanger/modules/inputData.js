export default function getAllInputData() {
  const date = document.getElementById("date-selector").value;
  const countryFromSelected =
    document.getElementById("select-country-to").value;
  const countryToSelected = document.getElementById(
    "select-country-from"
  ).value;
  const price = document.getElementById("amount").value;

  return { date, countryFromSelected, countryToSelected, price };
}
