import {type Goal} from "../App";
import Goals from "./Goals";
type GoalsListProps = {
  goals: Goal[];
};

const GoalsList = ({goals}: GoalsListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goals title={goal.title}>
            <p>{goal.description}</p>
          </Goals>
        </li>
      ))}
    </ul>
  );
};

export default GoalsList;
