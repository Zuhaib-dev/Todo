import { useState } from "react";
import Create from "./Components/create";
import Read from "./Components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kamm Kar le bhai", isComplete: false },
  ]);

  // const newTodo =

  return (
    <div className=" text-white w-screen h-screen bg-gray-800 flex p-10">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
