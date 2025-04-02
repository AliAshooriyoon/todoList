import { useState } from "react";
import "./Home.css";
import supabase from "../../../../supabase";
const Home = () => {
  const [usr, setUsr] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const addUser = async () => {
    const { data: user, error } = await supabase.auth.getUser();
    console.log(user, error);
  };
  addUser();
  return (
    <>
      <div className="home">Home</div>
    </>
  );
};
export default Home;
