import { useState } from "react";
import "./Home.css";
import { useRef } from "react";
import supabase from "../../../supabase-client";
import { useEffect } from "react";
import useFetch from "../../../useFetch";

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

  useFetch();
  useEffect(() => {
    console.log(toDoList);
    const readTasks = async () => {
      const { data, error } = await supabase.from("ToDoList").select("*");
      data ? setToDoList(data) : console.log("Error into ReadTask", error);
    };
    readTasks();
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
        error ? console.log("Error", error) : toDoList.push(objNewTask);
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
        <div className="result_Box flex justify-around">
          {toDoList.map((i) => {
            return <p key={i.id}>{i.name}</p>;
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
