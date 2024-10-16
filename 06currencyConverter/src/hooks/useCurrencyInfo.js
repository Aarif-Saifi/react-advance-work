import { useState, useEffect } from 'react';

function useCurrencyInfo() {
  const [data, setData] = useState({});


  useEffect(() => {
    // Fetch data from the API
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/eur.json`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.eur) {
          setData(res.eur);  // Access 'rates' in the API response
        } else {
          console.error("Error: Invalid API response", res);
        }
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, []);

  return data;
}

export default useCurrencyInfo;


// https://latest.currency-api.pages.dev/v1/currencies/eur.json
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json