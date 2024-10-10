import Form from "@/components/Form/Form";
import InputGroup from "@/components/Form/InputGroup";
import Button from "@/components/Form/Button";
import { loginValidity } from "@/lib/actions";

export default function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="inline-block px-8 py-4">
        <Form title="Pally" action={loginValidity}>
          <InputGroup label={"username"} />
          <InputGroup label={"password"} type={"password"} />
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </main>
  );
}
