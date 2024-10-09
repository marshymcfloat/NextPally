import BankBarGraph from "./BankBarGraph";
import CashBarGraph from "./CashBarGraph";
import EWalletBarGraph from "./EWalletBarGraph";

export default function BarGraphGroup({ data }) {
  const cash = data * 0.25;
  const bank = data * 0.25;
  const ewallet = data * 0.5;

  return (
    <div className="h-[250px] flex items-end  ">
      <div className="h-[220px]  flex flex-col justify-end mb-[-5px]">
        <CashBarGraph amount={cash} totalAmount= {data} />
        <BankBarGraph amount={bank} />
        <EWalletBarGraph amount={ewallet} />
      </div>
    </div>
  );
}
