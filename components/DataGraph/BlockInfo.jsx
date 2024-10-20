export default function BlockInfo({ count, description, invert }) {
  return (
    <div
      className={
        invert
          ? "mx-4 my-4 inline-block h-[180px] w-[180px] rounded-xl border-[5px] border-customGreen01 bg-customBGColor px-4 py-4 text-customGreen01"
          : "mx-4 my-4 inline-block h-[180px] w-[180px] rounded-xl bg-customGreen01 px-4 py-4 text-customBGColor"
      }
    >
      <div className="flex h-[70%]">
        <h1 className="text-7xl font-bold">{count}</h1>
      </div>

      <p className="ml-2 text-sm">{description}</p>
    </div>
  );
}
