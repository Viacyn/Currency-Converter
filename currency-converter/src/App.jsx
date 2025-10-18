import CurrencyConverter from "./components/CurrencyConverter";

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

      <CurrencyConverter />
    </div>
  );
}

export default App;
