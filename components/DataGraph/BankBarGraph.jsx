export default function BankBarGraph({ amount }) {
  const percentage = (amount / 250000) * 100;

  return (
    <div
      className="bg-customBankGreen   "
      style={{ height: `${percentage}%` }}
    ></div>
  );
}
