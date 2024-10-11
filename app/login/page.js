"use client";

import Form from "@/components/Form/Form";
import InputGroup from "@/components/Form/InputGroup";
import Button from "@/components/Form/Button";

export default function LoginPage() {
  async function validateLogin(formObject) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formObject),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(
        "We are sorry, but we cannot find any match with the credentials given.",
      );
    }
  }

  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <div className="inline-block px-8 py-4">
          <Form title="Pally" onSubmit={validateLogin}>
            <InputGroup label={"username"} />
            <InputGroup label={"password"} type={"password"} />
            <Button type="submit">Login</Button>
          </Form>
        </div>
      </main>
    </>
  );
}
