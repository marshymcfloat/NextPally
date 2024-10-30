"use client";
import { useSelector } from "react-redux";
export default function customerStreak() {
  const streak = useSelector((state) => state.transaction.streak);
  return (
    <div className="my-2">
      <p className="ml-1 text-customGreen01">Customer Streak: {streak}</p>
      <div className="my-3 flex h-[5px] items-center justify-between bg-customGreen01">
        <div
          className={
            streak === 0
              ? "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customBGColor"
              : "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customCashGreen"
          }
        ></div>
        <div
          className={
            streak <= 1
              ? "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customBGColor"
              : "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customCashGreen"
          }
        >
          <p
            className={
              streak <= 1
                ? "relative left-[-25px] top-5 z-0 flex w-[70px]"
                : "relative left-[-25px] top-5 z-0 flex w-[70px] text-red-600 line-through"
            }
            style={{
              textDecorationThickness: "3px",
            }}
          >
            -P50
          </p>
        </div>
        <div
          className={
            streak <= 2
              ? "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customBGColor"
              : "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customCashGreen"
          }
        >
          <p
            className={
              streak <= 2
                ? "relative left-[-25px] top-5 z-0 flex w-[70px]"
                : "relative left-[-25px] top-5 z-0 flex w-[70px] text-red-600 line-through"
            }
            style={{
              textDecorationThickness: "3px",
            }}
          >
            -P75
          </p>
        </div>
        <div
          className={
            streak <= 3
              ? "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customBGColor"
              : "h-[20px] w-[20px] rounded-full border-[5px] border-customGreen01 bg-customCashGreen"
          }
        >
          <p
            className={
              streak <= 3
                ? "relative left-[-25px] top-5 z-0 flex w-[70px]"
                : "relative left-[-25px] top-5 z-0 flex w-[70px] text-red-600 line-through"
            }
            style={{
              textDecorationThickness: "3px",
            }}
          >
            -P100
          </p>
        </div>
      </div>
    </div>
  );
}
