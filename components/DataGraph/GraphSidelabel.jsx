export default function GraphSideLabel({ label }) {
  return (
    <div className="flex flex-col h-[250px] justify-evenly  ">
      {label.map((label) => (
        <p key={label} className="">
          &#x20B1;{label}
        </p>
      ))}
    </div>
  );
}
