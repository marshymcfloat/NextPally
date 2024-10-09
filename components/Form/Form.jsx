"use client";

export default function Form({ title, children, method }) {
  function handleSubmission(event) {
    event.preventDefault();
  }

  return (
    <form
      method={method}
      onSubmit={handleSubmission}
      className="flex h-[450px] w-[400px] flex-col justify-evenly rounded-xl border-[10px] border-customGreen01"
    >
      <h1 className="text-center text-4xl font-extrabold tracking-[10px] text-customGreen01">
        {title}
      </h1>
      {children}
    </form>
  );
}
