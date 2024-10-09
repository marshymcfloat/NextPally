export default function GraphContainer({ children }) {
  return (
    <div className="flex h-full items-end w-[500px] bg-gradient-to-tr from-customBGGraph to-green-900 px-4 rounded-xl overflow-hidden justify-evenly">
      {children}
    </div>
  );
}
