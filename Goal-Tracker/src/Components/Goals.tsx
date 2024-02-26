import {type ReactNode} from "react";

type GoalsProps = {
  id: number;
  title: string;
  onDeleteGoal: (id: number) => void;
  children: ReactNode;
};

const Goals = ({id, title, children, onDeleteGoal}: GoalsProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
};

export default Goals;
