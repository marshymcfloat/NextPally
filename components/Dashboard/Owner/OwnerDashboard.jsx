import GraphGroup from "@/components/DataGraph/GraphGroup";
import SideBar from "../SideBar/SideBar";

export default function OwnerDashboard({ id, sales }) {
  return (
    <>
      <SideBar />
      <GraphGroup title="monthy sales" data={sales} />
    </>
  );
}
