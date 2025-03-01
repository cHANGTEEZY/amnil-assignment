function getCurrentDate() {
  const targetDate = new Date(2025, 2, 1);
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, "0");
  const day = String(targetDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const BASE_URL = "https://www.nrb.org.np/api/forex/v1/rates";

const params = new URLSearchParams({
  page: 1,
  per_page: 10,
  from: getCurrentDate(),
  to: getCurrentDate(),
});

console.log("params are", params.toString());

const API_URL = `${BASE_URL}?${params.toString()}`;
console.log(API_URL);

const getExchangeRates = async () => {
  try {
    if (!API_URL) {
      throw new Error("No API SET");
    }
    const response = await fetch(API_URL);

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Error is", responseData.errors || responseData.payload);
    } else {
      console.log("response data", responseData);
      console.log("data is", responseData.data.payload.rates);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};

getExchangeRates();
