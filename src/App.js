import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Userprofile from "./Components/Userprofile";
import Form from "./Components/Form";
import Namelist from "./Components/Namelist";
import Counter from "./Components/Counter";

const App = () => {
  const name = "rahul";
  const age = 22;
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

  return (
    <div>
      <Navbar />
      <Userprofile name={name} age={age} />
      <Form />
      <Namelist names={names} />
      <Counter/>
    </div>
  );
};

export default App;
