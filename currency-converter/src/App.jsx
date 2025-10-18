function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
     
      <header className="w-full max-w-2xl mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          QuickFX Currency Converter
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Convert currencies in real-time with live exchange rates.
        </p>
      </header>

      
      <main className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">From</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700">
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="GHS">GHS - Ghana Cedi</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">To</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700">
              <option value="GHS">GHS - Ghana Cedi</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
            </select>
          </div>

          <button className="mt-2 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
            Convert
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
