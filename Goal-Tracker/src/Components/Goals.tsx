import {type ReactNode, useState} from "react";

type GoalsProps = {
  title: string;
  children: ReactNode;
};

const Goals = ({title, children}: GoalsProps) => {
  return (
    <article>
      <h2>{title}</h2>
      {children}
      <button>Delete</button>
    </article>
  );
};

export default Goals;
