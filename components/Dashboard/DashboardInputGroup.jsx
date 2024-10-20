export default function DashboardInputGroup({ label }) {
  return (
    <div className="my-4 flex flex-col">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        className="h-[40px] rounded-md border-[2px] border-customGreen01 px-2"
      />
    </div>
  );
}
