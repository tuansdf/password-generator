import { forwardRef, HTMLAttributes } from "preact/compat";
import { UseFormRegister } from "react-hook-form";

interface Props extends HTMLAttributes<HTMLInputElement>, UseFormRegister<any> {
  label?: string;
}

export default forwardRef<HTMLInputElement, Props>(function TextField(
  { label, ...rest }: Props,
  ref
) {
  return (
    <div className="w-full">
      {label ? <label className="mb-2 inline-block">{label}</label> : null}
      <input
        className="w-full rounded-md py-3 px-4 text-black"
        {...rest}
        ref={ref}
      />
    </div>
  );
});
