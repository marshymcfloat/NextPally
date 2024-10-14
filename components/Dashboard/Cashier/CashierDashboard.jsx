import Form from "@/components/Form/Form";
import SideBar from "../SideBar/SideBar";
import InputGroup from "@/components/Form/InputGroup";
import SelectGroup from "@/components/Form/SelectGroup";

export default function CashierDashBoard() {
  return (
    <>
      <SideBar />
      <form action="">
        <SelectGroup label="branch" />
        <InputGroup label="customer name" />
      </form>
    </>
  );
}
