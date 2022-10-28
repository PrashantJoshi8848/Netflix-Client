import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItems from "../listitems/ListItems";
import "./List.scss";

const List = ({ lists }) => {
  const user = useRef();
  const [state, setstate] = useState(0);
  const [ismoved, setisMoved] = useState(false);
  function handleClick(direction) {
    let distance = user.current.getBoundingClientRect().x - 50;
    if (direction === "left" && state > 0) {
      setstate(state - 1);
      user.current.style.transform = `translateX(${distance + 220}px)`;
    } else if (direction === "right" && state < 6) {
      setisMoved(true);
      setstate(state + 1);
      user.current.style.transform = `translateX(${distance - 220}px)`;
    }
  }
  return (
    <div className="list">
      <span className="listtitle">{lists.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => {
            handleClick("left");
          }}
          style={{ display: !ismoved && "none" }}
        />
        <div className="container" ref={user}>
          {lists.content.map((item, i) => (
            <ListItems index={i} items={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => {
            handleClick("right");
          }}
        />
      </div>
    </div>
  );
};

export default List;
