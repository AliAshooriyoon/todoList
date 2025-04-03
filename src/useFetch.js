import { useEffect } from "react";
const useFetch = (toDoList, supabase, newTask, setToDoList) => {
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
};
export default useFetch;
