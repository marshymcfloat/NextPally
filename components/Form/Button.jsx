export default function Button({ name, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 border rounded-xl border-black uppercase font-bold mx-auto"
    >
      {name}
    </button>
  );
}
