import clsx from "clsx";
import { ComponentChildren } from "preact";
import { HTMLAttributes } from "preact/compat";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ComponentChildren;
}
export default function Button({ children, className, onClick, type }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full rounded-full bg-cyan-900 px-8 py-3 text-lg hover:opacity-90",
        className
      )}
    >
      {children}
    </button>
  );
}
