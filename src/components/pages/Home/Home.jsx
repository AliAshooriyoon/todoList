import { useCallback, useState } from "react";
import "./Home.css";
import { useRef } from "react";
import supabase from "../../../supabase-client";
import { useEffect } from "react";
import useFetch from "../../../useFetch";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const Home = () => {
  //disable_eslint_next_line
  const [toDoList, setToDoList] = useState([]);
  //disable_eslint_next_line
  const [newTask, setNewTask] = useState();
  //disable_eslint_next_line
  const valueItem = useRef();
  const [taskWrote, setTaskWrote] = useState();
  useCallback(() => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  }, [newTask, taskWrote]);
  const addTaskToHook = () => {
    setNewTask(valueItem.current.value);
    setTaskWrote("");
  };
  useFetch(toDoList, supabase, newTask, setNewTask, setToDoList);
  // ------------
  const removeItem = (elmID, toDoList) => {
    console.log("willst du das tun ?", elmID);
    const removeIt = async () => {
      const { data, error } = await supabase
        .from("ToDoList")
        .delete()
        .eq("id", elmID);
      if (!error) {
        const elmAdresse = toDoList.filter((i) => i.id == elmID);
        // toDoList.splice(
        //   toDoList.indexOf(toDoList.find((i) => i.id == elmID)),
        //   1,
        // );
        setToDoList(toDoList.filter((i) => i.id !== elmID));
        console.log(toDoList.indexOf(toDoList.find((i) => i.id == elmID)));
        console.log(toDoList);
        console.log(toDoList.filter((i) => i.id == elmID));
      } else {
        console.log("Error", error);
      }
    };
    removeIt();
  };

  return (
    <>
      <div className="home mx-auto text-center ">
        <div className="  text-center mx-auto ">
          <div className="flex flex-col mx-auto justify-center w-[50rem] tex-center items-center">
            <input
              type="text"
              name=""
              ref={valueItem}
              className="bg-amber-50 p-8 w-[45rem]"
              value={taskWrote}
              onChange={(e) => setTaskWrote(e.target.value)}
            />
            <button
              type="button"
              onClick={addTaskToHook}
              className="bg-cyan-500"
            >
              Aufgabe erstellen
            </button>
          </div>
        </div>
        <div className="result_Box flex flex-col gap-4 items-baseline justify-center">
          {toDoList.map((i) => {
            return (
              <div
                key={i.id}
                className="bg-stone-400  min-w-64 px-4 rounded-2xl  mx-auto"
              >
                <div className="flex flex-row justify-between items-center">
                  {i.name}
                  <div className="iconsManager flex justify-center items-center w-[30%]">
                    <MdDelete
                      className="cursor-pointer"
                      onClick={() => removeItem(i.id, toDoList)}
                    />{" "}
                    <MdModeEdit className="cursor-pointer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
