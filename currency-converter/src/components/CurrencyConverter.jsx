import { useState, useEffect } from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import ConversionResult from "./ConversionResult";
import SwapButton from "./SwapButton";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GHS");
  const [result, setResult] = useState(null);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/a8f34dda636780e12bb0a660/latest/${fromCurrency}`
        );
        const data = await res.json();
        const newRate = data.conversion_rates[toCurrency];
        setRate(newRate);
        setResult(amount * newRate);
      } catch (error) {
        console.error("Error fetching rate:", error);
      }
    };

    if (amount && fromCurrency && toCurrency) {
      fetchRate();
    }
  }, [fromCurrency, toCurrency, amount]);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">QuickFX Converter</h2>

      <div className="flex flex-col gap-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-xl p-2 text-center"
          placeholder="Enter amount"
        />

        <div className="flex items-center justify-between">
          <CurrencyDropdown value={fromCurrency} onChange={setFromCurrency} />
          <SwapButton onClick={handleSwap} />
          <CurrencyDropdown value={toCurrency} onChange={setToCurrency} />
        </div>

        {result !== null && (
          <ConversionResult
            amount={amount}
            from={fromCurrency}
            to={toCurrency}
            result={result}
          />
        )}

        {rate && !isNaN(rate) && (
          <p className="text-sm text-gray-500 mt-2">
            1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
