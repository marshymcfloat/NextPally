export default function CashierIcon({ isActive = false }) {
  <div
    className={
      isActive ? "flex cursor-pointer flex-col" : "flex cursor-pointer flex-col"
    }
    onClick={handleClick}
  >
    <div id="iconContainer" className="flex items-center justify-center">
      <img src={"/images/dashboard-icons/cashier-white.png"} className="h-6" />
    </div>
    <div
      id="iconLabel"
      className="text-center text-[10px] font-bold uppercase text-customBGColor"
    >
      cashier
    </div>
  </div>;
}
