export default function CashierSelectInput({ label, data, fn }) {
  const name = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-customGreen01">
        {label}
      </label>
      <select
        className="max-w-[100px] overflow-hidden truncate rounded-md border-[3px] border-customGreen01 px-1 py-1"
        name={name}
        id={label}
        onChange={fn}
        required
      >
        <option value="">select {label}</option>
        {data.map((datum) => (
          <option value={datum._id} key={datum._id} id={datum._id}>
            {datum.branchName && datum.branchName}
            {datum.paymentName && datum.paymentName}
          </option>
        ))}
      </select>
    </div>
  );
}
