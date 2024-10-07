import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-[20%]">
      <ul className="flex  justify-evenly text-xl  font-medium cursor-pointer">
        <li>
          <div className=" w-20 text-center">
            <Link
              href="/"
              className="hover:text-customGreen02 hover:font-bold hover:tracking-widest transition-all duration-150"
            >
              HOME
            </Link>
          </div>
        </li>
        <li>
          <div className=" w-20 text-center">
            <Link
              href="/rate"
              className="hover:text-customGreen02 hover:font-black hover:tracking-widest transition-all duration-150"
            >
              RATE
            </Link>
          </div>
        </li>
        <li>
          <div className=" w-20 text-center">
            <Link
              href="/login"
              className="hover:text-customGreen02 hover:font-bold hover:tracking-widest transition-all duration-150"
            >
              LOGIN
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
