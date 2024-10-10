"use client";

import Button from "./Button";

export default function Form({ title, children, method, action }) {
  return (
    <form
      method={method}
      action={action}
      className="flex h-[450px] w-[400px] flex-col justify-evenly rounded-xl border-[10px] border-customGreen01"
    >
      <h1 className="text-center text-4xl font-extrabold tracking-[10px] text-customGreen01">
        {title}
      </h1>
      {children}
    </form>
  );
}
