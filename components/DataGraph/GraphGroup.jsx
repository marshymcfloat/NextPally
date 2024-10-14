import GraphSideLabel from "./GraphSidelabel";
import GraphContainer from "./GraphContainer";
import BarGraphGroup from "./BarGraphGroup";
import GraphBottomLabel from "./GraphBottomLabel";
export default function GraphGroup({ title, data }) {
  const uniqueMonths = Array.from(new Set(data.map((item) => item.month)));

  const monthTotals = data.reduce((acc, item) => {
    const existingMonth = acc.find((entry) => entry.month === item.month);

    if (existingMonth) {
      existingMonth.totalAmount += item.amount;
    } else {
      acc.push({ month: item.month, totalAmount: item.amount });
    }

    return acc;
  }, []);
  console.log(uniqueMonths);
  console.log(monthTotals);

  return (
    <div className="inline-block rounded-xl px-4 py-6">
      <h1 className="mb-4 ml-28 text-center text-4xl font-bold text-customGreen01">
        {title}
      </h1>
      <div className="flex">
        <GraphSideLabel
          label={["250,000", "200,000", "150,000", "100,000", "50,000"]}
        />
        <GraphContainer>
          {monthTotals.map((month) => (
            <BarGraphGroup key={month.month} data={month.totalAmount} />
          ))}
        </GraphContainer>
      </div>
      <GraphBottomLabel label={uniqueMonths} />
    </div>
  );
}
