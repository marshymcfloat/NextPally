import Form from "@/components/Form/Form";
import InputGroup from "@/components/Form/InputGroup";
import Button from "@/components/Form/Button";

export default function LoginPage() {
  return (
    <main className="flex justify-center items-center h-screen ">
      <div className="inline-block px-8 py-4  ">
        <Form title="Pally" method={"POST"}>
          <InputGroup label={"username"} />
          <InputGroup label={"password"} type={"password"} />

          <Button name="Login" type="submit" />
        </Form>
      </div>
    </main>
  );
}
