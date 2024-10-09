export default function CashBarGraph({ amount, totalAmount }) {
  const percentage = (amount / 250000) * 100;
const total = new Intl.NumberFormat('en-US').format(totalAmount)
  return (<>
  <h1 className="text-center text-customBGColor mb-2 font-bold ">&#8369;{total}</h1>
  <div
    className="bg-customCashGreen rounded-t-md rounded-tr-md"
    style={{ height: `${percentage}%` }}
  ></div>
  
  </>
  );
}
