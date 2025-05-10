import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
}

return (
  <div className="App">
    <h1>Görev Planlayıcı</h1>
    <TaskForm setTasks={setTasks} />
    <TaskList tasks={tasks}/>
  </div>
)