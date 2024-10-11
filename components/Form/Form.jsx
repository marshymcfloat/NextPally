"use client";

export default function Form({ title, children, onSubmit }) {
  async function formSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formObject = Object.fromEntries(formData.entries());

    await onSubmit(formObject);
  }

  return (
    <form
      className="flex h-[450px] w-[400px] flex-col justify-evenly rounded-xl border-[10px] border-customGreen01"
      onSubmit={formSubmission}
    >
      <h1 className="text-center text-4xl font-extrabold tracking-[10px] text-customGreen01">
        {title}
      </h1>
      {children}
    </form>
  );
}
