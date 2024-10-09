export default function Button({ name, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-customGreen01 border-[3px] border-customGreen01 text-customBGColor rounded-lg uppercase font-bold mx-auto h-12 hover:border-[3px] hover:border-customGreen01 hover:bg-customBGColor hover:text-customGreen01 transition-all duration-100"
    >
      {name}
    </button>
  );
}
