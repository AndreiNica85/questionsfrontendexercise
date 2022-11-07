import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Wecome</h1>
      <h2>Qestionnaire App Class Exercise</h2>
      <Routes>
        <Route path="/questions"></Route>
      </Routes>
    </div>
  );
}

export default App;
