export default function GraphSideLabel({ label }) {
  return (
    <div className="flex flex-col h-[250px] justify-evenly mr-4 font-bold text-customGreen01">
      {label.map((label) => (
        <p key={label} className="">
          &#x20B1;{label}
        </p>
      ))}
    </div>
  );
}
