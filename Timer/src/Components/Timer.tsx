import Container from "./UI/Container.tsx";

type TimerProps = {
  name: string;
  duration: number;
};

export default function Timer({name, duration}: TimerProps) {
  console.log(name, duration);

  return (
    <Container as="article">
      <h2>TODO: {name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
