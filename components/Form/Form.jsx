"use client";

export default function Form({ children }) {
  function handleSubmission(event) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmission}
      className="border  w-[400px] h-[450px] rounded-xl border-black flex justify-evenly flex-col"
    >
      {children}
    </form>
  );
}
