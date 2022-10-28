import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import Axios from "axios";
const Home = ({ type }) => {
  const [lists, setList] = useState([]);
  const [genre, setgenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1NGVmNzRkYTFhYjU4ZTlhMzc1Y2UiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjY2ODU3OTA5LCJleHAiOjE2NjcyODk5MDl9.iLV6l6VJnjtciL9QjhS2lEctqJMTMJjDWFWqPdZVZBE`,
        },
      };
      try {
        const { data } = await Axios.get(
          `/movies/list${type ? "?type=" + type : ""}${
            genre ? "&?genre=" + genre : ""
          }`,
          config
        );
        setList([...data.list]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={"series"} types={type} />
      {lists.map((list) => (
        <>
          <List lists={list} />
        </>
      ))}
    </div>
  );
};

export default Home;
