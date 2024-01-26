"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  link: string;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
  link,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    console.log("onclick button");
    router.push(link);
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
