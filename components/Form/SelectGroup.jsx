export default function SelectGroup({ label }) {
  return (
    <div className="mx-auto my-4 flex w-[80%] flex-col">
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        className="h-14 rounded-md border-[3px] border-customGreen01 bg-customBGColor px-2 py-2 text-lg font-semibold"
      >
        <option value=""></option>
      </select>
    </div>
  );
}