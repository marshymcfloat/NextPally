import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function NavBar() {
  const path = usePathname();

  return (
    <nav className="h-[60px] w-[30%] rounded-bl-full bg-customGreen01">
      <ul className="text-md flex h-full items-center justify-evenly font-medium text-customBGColor">
        <li>
          <NavLink href="/">HOME</NavLink>
        </li>
        <li>
          <NavLink href="/rate">RATE</NavLink>
        </li>
        <li>
          <NavLink href="/login">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
}
