import { useEffect, useState } from "react";
const useFetch = (toDoList, supabase, newTask, setNewTask, setToDoList) => {
  const [isChangedItem, setIsChangedItem] = useState(true);
  useEffect(() => {
    console.log(toDoList);
    const readTasks = async () => {
      const { data, error } = await supabase.from("ToDoList").select("*");
      data
        ? setToDoList(data) & setIsChangedItem(true)
        : console.log("Error into ReadTask", error);
    };
    readTasks();
  }, [newTask, isChangedItem]);
  // ------------------------------------------
  useEffect(() => {
    const addTask = async () => {
      const objNewTask = {
        name: newTask,
        isCompleted: false,
      };
      console.log(newTask);

      if (newTask) {
        const { data, error } = await supabase
          .from("ToDoList")
          .insert([objNewTask])
          .single();
        error ? console.log("Error", error) : setIsChangedItem(false);
      }
    };
    addTask();
  }, [newTask]);
};
export default useFetch;
