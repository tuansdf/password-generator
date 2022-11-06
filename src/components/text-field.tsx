import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    UseFormRegister<any> {
  label?: string;
}

export default forwardRef<HTMLInputElement, Props>(function TextField(
  { label, className, ...rest },
  ref
) {
  return (
    <div className="w-full">
      {label ? <label className="mb-2 inline-block">{label}</label> : null}
      <input
        {...rest}
        className="w-full rounded-md py-3 px-4 text-black"
        ref={ref}
      />
    </div>
  );
});
