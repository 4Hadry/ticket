'use client';

import clsx from "clsx";

interface IProps {
  className?: string;
  size?: "md";
  children: React.ReactNode;
}

interface SsProps {
  md: string;
}

const sizeStyles: SsProps = {
  md: "mx-auto px-4 md:max-w-[1540px]",
};

const Container = ({ size = "md", className, ...props }: IProps) => {
  return <div className={clsx(sizeStyles[size], className)} {...props} />;
};

export default Container;
