import GraphSideLabel from "./GraphSidelabel";
import GraphContainer from "./GraphContainer";
import BarGraphGroup from "./BarGraphGroup";
export default function GraphGroup() {
  return (
    <div className="rounded-xl px-4 py-6   inline-block">
      <h1 className="text-center text-4xl font-bold mb-4 ">Monthy Sales</h1>
      <div className="flex ">
        <GraphSideLabel
          label={["250,000", "200,000", "150,000", "100,000", "50,000"]}
        />
        <GraphContainer>
          <BarGraphGroup />
        </GraphContainer>
      </div>
    </div>
  );
}
