"use client";
export default function InputGroup({ label, type = "text" }) {
  return (
    <div className="flex flex-col my-4 w-[80%] mx-auto">
      <label
        htmlFor={label}
        className="mb-4 uppercase tracking-widest font-bold"
      >
        {label}:
      </label>
      <input
        type={type}
        id={label}
        name={label}
        className="h-10 px-2 py-2 border border-black font-semibold text-lg rounded-md"
      />
    </div>
  );
}
