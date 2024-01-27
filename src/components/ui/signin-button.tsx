"use client";

import { signIn } from "next-auth/react";
import CustomButton from "./custom-button";

interface SigninButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const SigninButton = ({
  children,
  mode = "redirect",
  asChild,
}: SigninButtonProps) => {
  const onClick = () => {
    console.log("onclick button");

    signIn();
  };

  return (
    <CustomButton
      cb={() => {
        signIn();
      }}
    >
      {children}
    </CustomButton>
  );
};
