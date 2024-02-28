import {useRef} from "react";

import Button from "./UI/Button.tsx";
import Form, {formResetType} from "./UI/Form.tsx";
import Input from "./UI/Input.tsx";

export default function AddTimer() {
  const form = useRef<formResetType>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as {name: string; duration: string};
    console.log(extractedData);
    form.current?.reset();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button el="button">Add Timer</Button>
      </p>
    </Form>
  );
}
