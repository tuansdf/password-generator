import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useId,
} from "react";
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
  const inputId = useId();

  return (
    <div className="w-full">
      {label ? (
        <label className="mb-2 inline-block" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        {...rest}
        id={inputId}
        className="w-full rounded-md bg-base-700 py-3 px-4 text-base-100 transition-colors hover:bg-base-600"
        ref={ref}
      />
    </div>
  );
});
