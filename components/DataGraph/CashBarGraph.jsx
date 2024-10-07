export default function CashBarGraph({ amount }) {
  const percentage = (amount / 250000) * 100;

  return (
    <div
      className="bg-customCashGreen rounded-t-md rounded-tr-md"
      style={{ height: `${percentage}%` }}
    ></div>
  );
}
