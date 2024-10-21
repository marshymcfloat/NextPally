export default function CashierSelectInput({ label, options }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{label}</label>
      <select
        name=""
        id=""
        className="min-w-[80px] border-[2px] border-customGreen01"
      >
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
