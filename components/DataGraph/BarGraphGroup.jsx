import BankBarGraph from "./BankBarGraph";
import CashBarGraph from "./CashBarGraph";
import EWalletBarGraph from "./EWalletBarGraph";

export default function BarGraphGroup() {
  return (
    <div className="h-[250px] flex items-end">
      <div className="h-[220px]  flex flex-col justify-end mb-[-5px]">
        <CashBarGraph amount={120000} />
        <BankBarGraph amount={14000} />
        <EWalletBarGraph amount={26000} />
      </div>
    </div>
  );
}
