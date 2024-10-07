export default function BankBarGraph({ amount }) {
  const percentage = (amount / 250000) * 100;

  return (
    <div
      className="bg-customBankGreen w-14"
      style={{ height: `${percentage}%` }}
    ></div>
  );
}
