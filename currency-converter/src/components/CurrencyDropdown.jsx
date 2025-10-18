function CurrencyDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700"
    >
      <option value="USD">USD - US Dollar</option>
      <option value="EUR">EUR - Euro</option>
      <option value="GBP">GBP - British Pound</option>
      <option value="GHS">GHS - Ghana Cedi</option>
    </select>
  );
}

export default CurrencyDropdown;
