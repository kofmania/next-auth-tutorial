"use client";

import { signOut } from "next-auth/react";
import CustomButton from "./custom-button";

interface SignoutButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const SignoutButton = ({
  children,
  mode = "redirect",
  asChild,
}: SignoutButtonProps) => {
  const onClick = () => {
    console.log("onclick button");
    signOut();
  };

  return (
    <CustomButton
      cb={() => {
        signOut();
      }}
    >
      {children}
    </CustomButton>
  );
};
