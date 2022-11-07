import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/HomePage/UserForm";
import Questions from "./components/Questions/Questions";

function App() {
  return (

      <Routes>
        <Route index element={<UserForm/>}/>
        <Route path="/questions" element={<Questions/>}/>
      </Routes>

  );
}

export default App;
