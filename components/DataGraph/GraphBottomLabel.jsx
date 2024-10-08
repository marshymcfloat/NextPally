export default function GraphBottomLabel({ label }) {
  return (
    <div className="  mt-2   flex justify-end font-bold text-customGreen01">
      <div className=" flex w-[500px] justify-evenly px-4">
        {label.map((label) => (
          <p key={label} className="w-[56px] text-center">
            {label}
          </p>
        ))}
      </div>
    </div>
  );
}
