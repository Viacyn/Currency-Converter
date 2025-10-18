function SwapButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      title="Swap currencies"
    >
      🔄
    </button>
  );
}

export default SwapButton;
