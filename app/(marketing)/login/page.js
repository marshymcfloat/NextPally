"use client";

import Form from "@/components/Form/Form";
import InputGroup from "@/components/Form/InputGroup";
import Button from "@/components/Form/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(undefined);

  async function validateLogin(formObject) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formObject),
        headers: { "Content-Type": "application/json" },
      });

      const resData = await response.json();

      if (!response.ok) {
        setError(resData.message);
        return;
      }
      router.push(`/${resData.userID}/dashboard`);
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="inline-block px-8 py-4">
        <Form title="Pally" onSubmit={validateLogin}>
          {error && (
            <h1 className="text-center font-bold text-red-500">{error}</h1>
          )}
          <InputGroup label="username" />
          <InputGroup label="password" type="password" />
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </main>
  );
}
