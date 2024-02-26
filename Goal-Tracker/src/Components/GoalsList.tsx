import {type Goal} from "../App";
import Goals from "./Goals";
import InfoBox from "./InfoBox";
type GoalsListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

const GoalsList = ({goals, onDeleteGoal}: GoalsListProps) => {
  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals added</InfoBox>;
  }
  return (
    <>
      {goals.length > 4 && (
        <InfoBox mode="warning" severity="medium">
          Too many goals added
        </InfoBox>
      )}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goals title={goal.title} onDeleteGoal={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </Goals>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GoalsList;
