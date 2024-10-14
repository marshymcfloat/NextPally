import NavLink from "./NavLink";

export default function NavBar({ menuOpen }) {
  return (
    <>
      {/* The mobile menu (shown when menuOpen is true) */}
      <nav
        className={`fixed right-0 top-16 h-screen rounded-tl-xl bg-customGreen01 p-4 transition-transform md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-md flex flex-col space-y-4 font-medium text-customBGColor">
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

      {/* Desktop menu (visible on medium and larger screens) */}
      <nav className="hidden h-[60px] rounded-bl-full bg-customGreen01 md:flex md:w-[500px]">
        <ul className="text-md flex h-full w-[100%] items-center justify-evenly font-medium text-customBGColor">
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
    </>
  );
}
