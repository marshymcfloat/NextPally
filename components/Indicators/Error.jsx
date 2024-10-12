export default function ErrorIndicator({
  message = "there is an error occured.",
}) {
  return (
    <div className="mx-auto rounded-xl border-[3px] border-customGreen01 bg-customBGColor px-8 py-4">
      <h1 className="text-2xl font-bold text-red-500">Error</h1>
      <p>{message}</p>
    </div>
  );
}
