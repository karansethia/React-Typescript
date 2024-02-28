import {useRef} from "react";

import Button from "./UI/Button.tsx";
import Form, {formResetType} from "./UI/Form.tsx";
import NewInput from "./UI/NewInput.tsx";
import {useTimerContext} from "../store/timers-context.tsx";

export default function AddTimer() {
  const form = useRef<formResetType>(null);

  const {add} = useTimerContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as {name: string; duration: string};
    console.log(extractedData);

    add({name: extractedData.name, duration: +extractedData.duration});
    form.current?.reset();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <NewInput type="text" label="Name" id="name" />
      <NewInput type="number" label="Duration" id="duration" />
      <p>
        <Button el="button">Add Timer</Button>
      </p>
    </Form>
  );
}
