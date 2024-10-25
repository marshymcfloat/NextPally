export default function CashierTextInput({ label }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-customGreen01">
        {label}
      </label>
      <input
        type="text"
        className="max-w-[100px] rounded-md border-[3px] border-customGreen01 px-2 py-1"
      />
    </div>
  );
}
