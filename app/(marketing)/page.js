import Link from "next/link";

import GraphGroup from "@/components/DataGraph/GraphGroup";
import Button from "@/components/Form/Button";
import moneyimage from "@/public/images/moneyimage.png";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="flex flex-1 items-center justify-center">
        <div className="ml-16 w-[80%]">
          <h1 className="w-[80%] text-6xl font-bold">
            <span className="text-customGreen01">Track</span>,
            <span className="text-customGreen01"> Manage</span>, and
            <span className="text-customGreen01"> Grow</span> your Business with
            <span className="text-customGreen01"> Precision.</span>
          </h1>
          <div className="mt-4 flex w-[40%]">
            <div className="mr-8">
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
        <div className="w-[60%]">
          <img src="/images/moneyimage.png" />
        </div>
      </div>
    </main>
  );
}
