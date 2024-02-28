import {type ElementType, ReactNode, ComponentPropsWithoutRef} from "react";
/* This approach does not have the flexbility of receiving the Component 
 props that has been used in 'as' property 

type ContainerProps = { 
  as: ElementType;
  children: ReactNode;
};
 */
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};

export default Container;
