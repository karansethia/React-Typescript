import {type PropsWithChildren} from "react";

type ButtonFields = {
  type: "button" | "submit" | "reset";
  text: string;
};

type ButtonProps = PropsWithChildren<ButtonFields>;

const Button = ({type, text}: ButtonProps) => {
  return <button type={type}>{text}</button>;
};

export default Button;
