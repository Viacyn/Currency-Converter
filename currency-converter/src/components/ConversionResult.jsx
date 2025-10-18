function ConversionResult({ result }) {
  if (!result) return null;
  return (
    <div className="mt-4 text-center text-lg font-semibold text-green-600 dark:text-green-400">
      {result}
    </div>
  );
}

export default ConversionResult;
