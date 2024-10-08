import NavBar from "./NavBar";

export default function MainHeader() {
  return (
    <header className="flex w-full justify-between items-center absolute">
      <h1 className="text-4xl font-bold ml-2 cursor-pointer text-customGreen01">
        Pally
      </h1>
      <NavBar />
    </header>
  );
}
