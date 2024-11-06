export default function HomePage() {
  const fullname = "Ellaine Canoy".split(" ");

  const firstname = fullname[0];

  const businessName = "BeautyFeel";

  return (
    <main className="flex h-full w-full items-center justify-center bg-customBGColor">
      <div className="text-center">
        <p>Hi, {firstname}! Welcome to</p>
        <h1 className="text-3xl text-customGreen01">
          {businessName} Business System.
        </h1>
      </div>
    </main>
  );
}
