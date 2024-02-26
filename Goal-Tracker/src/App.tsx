import GoalsList from "./Components/GoalsList";
import Header from "./Components/Header";
import NewGoal from "./Components/NewGoal";
import GoalsImg from "./assets/goals.jpg";
import {useState} from "react";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const addGoalHandler = (title: string, description: string) => {
    const newGoal: Goal = {
      title: title,
      description: description,
      id: Math.floor(Math.random() * 100),
    };
    setGoals((prev) => [...prev, newGoal]);
  };
  const deleteGoalHandler = (id: number) => {
    setGoals((prev) => {
      return prev.filter((goal) => {
        return goal.id != id;
      });
    });
  };
  console.log(goals);

  return (
    <main>
      <Header image={{src: GoalsImg, alt: "This is alt image"}}>
        <h1>My Goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler} />
      <GoalsList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
};

export default App;
