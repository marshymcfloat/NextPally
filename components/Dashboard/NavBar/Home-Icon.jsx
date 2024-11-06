export default function HomeIcon({ isActive = true }) {
  return (
    <div
      className={
        isActive
          ? "flex cursor-pointer flex-col border-b-2"
          : "flex cursor-pointer flex-col"
      }
    >
      <div id="iconContainer" className="flex items-center justify-center">
        <img src={"/images/dashboard-icons/home-white.png"} className="h-6" />
      </div>
      <div
        id="iconLabel"
        className="text-center text-[10px] font-bold uppercase text-customBGColor"
      >
        HOME
      </div>
    </div>
  );
}
