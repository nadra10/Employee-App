import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";

export default function App() {
  // state
  const [currentEmployee, setCurrentEmployee] = useState({
    name: "Nothing here",
    title: "Nothing here",
  });

  //function as prop
  function handleUserClick(employeeObject) {
    setCurrentEmployee(employeeObject);
  }
  return (
    <div className='app'>
      {/* <h1>App</h1> */}
      <HomePage handleUserClick={handleUserClick} />
      <EmployeePage employee={currentEmployee} />
    </div>
  );
}