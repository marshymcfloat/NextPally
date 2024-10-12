"use client";

import { useQuery } from "@tanstack/react-query";

import Spinner from "@/components/Indicators/Spinner";
import ErrorIndicator from "@/components/Indicators/Error";

export default function Dashboard({ params }) {
  const { accountID } = params;

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["role", accountID],
    queryFn: async () => {
      const response = await fetch(`/api/${accountID}/dashboard`);
      if (!response.ok) {
        throw new Error("There is an error occurred.");
      }
      return await response.json();
    },
  });
  console.log(data);

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <ErrorIndicator message={error.message} />;
  } else if (data?.role === "owner") {
    content = <h1>This is the owner page</h1>;
  } else {
    content = <h1>Role not recognized.</h1>; // Handle other roles or cases
  }

  return <main className="flex">{content}</main>;
}
