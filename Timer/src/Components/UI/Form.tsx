import {
  Ref,
  forwardRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react";
import {useRef, useImperativeHandle} from "react";

export type formResetType = {
  reset: () => void;
};

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

const Form = ({onSave, ...props}: FormProps, ref: Ref<formResetType>) => {
  const formRef = useRef<HTMLFormElement>(null);
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  };
  const reset = () => {
    formRef.current?.reset();
  };
  useImperativeHandle(ref, () => ({
    reset,
  }));
  return (
    <form {...props} onSubmit={submitHandler} ref={formRef}>
      {props.children}
    </form>
  );
};

export default forwardRef(Form);
