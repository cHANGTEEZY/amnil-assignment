import getCurrentDate from "./getDate";

const BASE_URL = "https://www.nrb.org.np/api/forex/v1/rates";

const params = new URLSearchParams({
  page: 1,
  per_page: 10,
  from: getCurrentDate(),
  to: getCurrentDate(),
});

const API_URL = `${BASE_URL}?${params.toString()}`;

const getExchangeRates = async () => {
  const currencyData = [];
  try {
    if (!API_URL) {
      throw new Error("No API SET");
    }
    const response = await fetch(API_URL);

    const { data, errors, status } = await response.json();
    console.log("Status is", status);

    if (!response.ok) {
      console.error("Error is", errors);
    } else {
      currencyData.push(data);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
  return data;
};

export default getExchangeRates;
