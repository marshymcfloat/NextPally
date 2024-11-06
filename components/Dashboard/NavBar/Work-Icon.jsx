export default function WorkIcon({ isActive = false }) {
  return (
    <div
      className={
        isActive
          ? "flex cursor-pointer flex-col border-b-2"
          : "flex cursor-pointer flex-col"
      }
    >
      <div id="iconContainer" className="flex items-center justify-center">
        <img src={"/images/dashboard-icons/work-white.png"} className="h-6" />
      </div>
      <div
        id="iconLabel"
        className="text-center text-[10px] font-bold uppercase text-customBGColor"
      >
        work
      </div>
    </div>
  );
}
