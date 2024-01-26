"use client";

import { useSession } from "next-auth/react";

const ClientPage = () => {
  const session = useSession();
  console.log({ client: session });

  return (
    <div>
      <h1>Client page</h1>
    </div>
  );
};

export default ClientPage;
