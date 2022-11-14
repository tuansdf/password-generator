import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export default function Button({ children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        "w-full rounded-full bg-primary-500 px-8 py-3 text-lg transition-colors hover:bg-primary-600",
        className
      )}
    >
      {children}
    </button>
  );
}
