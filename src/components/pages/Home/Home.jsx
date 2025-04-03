import { useState } from "react";
import "./Home.css";
import { useRef } from "react";
import supabase from "../../../supabase-client";
import { useEffect } from "react";
import useFetch from "../../../useFetch";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

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

  useFetch(toDoList, supabase, newTask, setToDoList);
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
                <p className="flex flex-row justify-between items-center ">
                  {i.name}
                  <div className="iconsManager flex justify-center items-center w-[30%]">
                    <MdDelete className="cursor-pointer" />{" "}
                    <MdModeEdit className="cursor-pointer" />
                  </div>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
