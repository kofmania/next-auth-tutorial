import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/ui/login-button";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";
export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log({ homepage: session });

  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <h1>Auth</h1>
      <div>
        <LoginButton link="/api/auth/signin">
          <Button>Sign in</Button>
        </LoginButton>
      </div>
    </main>
  );
}
