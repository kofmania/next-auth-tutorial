"use client";

import React from "react";
import { useRouter } from "next/navigation";

type CustomButtonProps = {
  children: React.ReactNode;
  link?: string;
  cb?: () => void;
};

const CustomButton = ({ children, link, cb }: CustomButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    link && router.push(link);
    cb && cb();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default CustomButton;
