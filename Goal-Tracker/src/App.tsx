import GoalsList from "./Components/GoalsList";
import Header from "./Components/Header";
import GoalsImg from "./assets/goals.jpg";
import {useState} from "react";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const addGoalHandler = () => {
    const newGoal: Goal = {
      title: "Auth with Passport",
      description: "Complete the auth system using passport js",
      id: Math.floor(Math.random() * 100),
    };
    setGoals((prev) => [...prev, newGoal]);
  };
  return (
    <main>
      <Header image={{src: GoalsImg, alt: "This is alt image"}}>
        <h1>My Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <GoalsList goals={goals} />
    </main>
  );
};

export default App;
