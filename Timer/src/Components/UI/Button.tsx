import {type ComponentPropsWithoutRef, type ReactNode} from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...otherProps} = props;
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
}
