import { Button } from "@/components/ui/button";
import { SigninButton } from "@/components/ui/signin-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import { SignoutButton } from "@/components/ui/signout-button";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log({ homepage: session });

  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <h1>Auth</h1>
      <div>
        {session?.user && (
          <SignoutButton>
            <Button>Sign out</Button>
          </SignoutButton>
        )}
        {!session?.user && (
          <SigninButton>
            <Button>Sign in</Button>
          </SigninButton>
        )}
      </div>
    </main>
  );
}
