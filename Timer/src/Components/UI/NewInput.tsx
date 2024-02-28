import React, {type ComponentPropsWithoutRef, forwardRef} from "react";

type NewInputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const NewInput = forwardRef<HTMLInputElement, NewInputProps>(
  ({label, id, ...props}, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input {...props} ref={ref} name={id} />
      </p>
    );
  }
);

export default NewInput;
