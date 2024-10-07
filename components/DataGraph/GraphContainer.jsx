export default function GraphContainer({ children }) {
  return (
    <div className="flex h-full items-end w-[500px] bg-customBGGraph px-4 rounded-xl overflow-hidden">
      {children}
    </div>
  );
}
