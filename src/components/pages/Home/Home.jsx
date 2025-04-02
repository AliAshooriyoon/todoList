import { useState } from "react";
import "./Home.css";
import { useRef } from "react";
import supabase from "../../../supabase-client";
import { useEffect } from "react";

const Home = () => {
  //disable_eslint_next_line
  const [usr, setUsr] = useState(true);
  //disable_eslint_next_line
  const [toDoList, setToDoList] = useState([]);
  //disable_eslint_next_line
  const [newTask, setNewTask] = useState("");
  //disable_eslint_next_line
  const [isLoading, setIsLoading] = useState(true);
  const valueItem = useRef();

  const addTaskToHook = () => {
    setNewTask(valueItem.current.value);
  };

  useEffect(() => {
    console.log(toDoList);
    const addTask = async () => {
      console.log(newTask);
      const objNewTask = {
        name: newTask,
        isCompleted: false,
      };
      if (newTask) {
        const { data, error } = await supabase
          .from("ToDoList")
          .insert(objNewTask)
          .single();
        error ? console.log("Error", error) : toDoList.push(data);
      }
    };
    addTask();
  }, [newTask]);

  return (
    <>
      <div className="home">
        <input type="text" name="" ref={valueItem} />
        <button type="button" onClick={addTaskToHook}>
          Befehl erstellen
        </button>
        <div className="result_Box"></div>
      </div>
    </>
  );
};
export default Home;
