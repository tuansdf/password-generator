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
        "w-full rounded-full bg-cyan-900 px-8 py-3 text-lg hover:opacity-90",
        className
      )}
    >
      {children}
    </button>
  );
}
