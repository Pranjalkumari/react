
import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to] );
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Background Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >

        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-5xl font-bold text-white relative z-10 text-center  h-10cm">
    Currency Converter
  </h1>
      </div>

      {/* Right Side - Currency Converter */}
      <div className="w-1/2 h-full flex justify-center items-center bg-gray-300">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* Input Box - From */}
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(curreny)=> setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="flex justify-center my-2">
              <button
                type="button"
                className="border border-gray-400 px-3 py-1 rounded bg-blue-500 text-white"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* Input Box - To */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
