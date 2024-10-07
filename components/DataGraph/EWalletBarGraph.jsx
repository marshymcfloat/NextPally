export default function EWalletBarGraph({ amount }) {
  const percentage = (amount / 250000) * 100;

  return (
    <div
      className="bg-customEWalletGreen "
      style={{ height: `${percentage}%` }}
    ></div>
  );
}
