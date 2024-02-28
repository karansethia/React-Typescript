import Header from "./Components/Header";
import AddTimer from "./Components/AddTimer";
import Timers from "./Components/Timers";
import TimerContextProvider from "./store/timers-context";

function App() {
  return (
    <TimerContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerContextProvider>
  );
}

export default App;
