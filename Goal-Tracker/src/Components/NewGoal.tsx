import {useRef, type FormEvent} from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, description: string) => void;
};

const NewGoal = ({onAddGoal}: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const formHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const goalTitle = formData.get('goal');
    const goalTitle = goalRef.current!.value; //! exclamation symbol is used to tell that the value must never be null
    const goalDesc = descRef.current!.value;

    onAddGoal(goalTitle, goalDesc);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={formHandler}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" name="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" ref={descRef} />
      </p>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
