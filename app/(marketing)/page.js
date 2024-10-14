import Link from "next/link";

import GraphGroup from "@/components/DataGraph/GraphGroup";
import Button from "@/components/Form/Button";
import moneyimage from "@/public/images/moneyimage.png";

export default function Home() {
  return (
    <main className="flex h-screen flex-col md:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-screen w-[80%] flex-col items-center justify-center md:ml-16 md:w-[80%]">
          <h1 className="text-center text-4xl font-bold md:w-[80%] md:text-start md:text-6xl">
            <span className="text-customGreen01">Track</span>,
            <span className="text-customGreen01"> Manage</span>, and
            <span className="text-customGreen01"> Grow</span> your Business with
            <span className="text-customGreen01"> Precision.</span>
          </h1>
          <div className="mt-4 flex w-[100%] justify-evenly md:ml-20 md:mr-auto md:w-[30%] md:justify-between">
            <div className="">
              <Button invert={true}>
                <Link href="/rates">See Rates</Link>
              </Button>
            </div>
            <div>
              <Button invert={true}>
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[300px] md:w-[700px]">
          <img src="/images/moneyimage.png" />
        </div>
      </div>
    </main>
  );
}
