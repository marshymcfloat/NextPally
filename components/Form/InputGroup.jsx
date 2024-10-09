"use client";
export default function InputGroup({ label, type = "text" }) {
  return (
    <div className="mx-auto my-4 flex w-[80%] flex-col">
      <label
        htmlFor={label}
        className="text-lg font-bold lowercase tracking-widest text-customGreen01"
      >
        {label}:
      </label>
      <input
        type={type}
        id={label}
        name={label}
        className="h-14 rounded-md border-[3px] border-customGreen01 bg-customBGColor px-2 py-2 text-lg font-semibold"
      />
    </div>
  );
}
