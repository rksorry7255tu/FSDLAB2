import { useState } from "react";

import "./App.css";
import VotingApp from "./components/VotingApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <VotingApp />
    </div>
  );
}

export default App;
