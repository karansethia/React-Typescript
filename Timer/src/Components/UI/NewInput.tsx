import {forwardRef} from "react";
import {ComponentPropsWithoutRef} from "react";

type NewInputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const NewInput = forwardRef<HTMLInputElement, NewInputProps>(
  ({label, id, ...props}, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input {...props} ref={ref} />
      </p>
    );
  }
);

export default NewInput;
