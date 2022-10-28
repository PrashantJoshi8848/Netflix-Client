import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import Axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./ListItems.scss";

const ListItems = ({ index, items }) => {
  const [moviesDetail, setMoviesDetails] = useState({});
  const [isHover, setisHover] = useState(false);

  useEffect(() => {
    const fetchmessage = async () => {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1NGVmNzRkYTFhYjU4ZTlhMzc1Y2UiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjY2ODU3OTA5LCJleHAiOjE2NjcyODk5MDl9.iLV6l6VJnjtciL9QjhS2lEctqJMTMJjDWFWqPdZVZBE`,
        },
      };
      try {
        const { data } = await Axios.get(`/movies/find/` + items, config);
        setMoviesDetails({ ...data.result });
      } catch (error) {
        console.log(error);
      }
    };
    fetchmessage();
  }, [items]);

  return (
    <Link to={{ pathname: "/watch" }} state={{ movie: moviesDetail }}>
      <div
        className="listitems"
        style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => {
          setisHover(false);
        }}
      >
        <img src={moviesDetail.img} alt="videos" />
        {isHover && (
          <>
            <ReactPlayer
              style={{ objectFit: "cover" }}
              url={moviesDetail.trailer}
              className="ReactPlayer"
              autoPlay={true}
              loop={true}
              muted={true}
              playing={true}
              width="100%"
              height={"140px"}
              aspect-ratio={16 / 9}
            />

            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 min</span>
                <span className="limit">+ {moviesDetail.limit}</span>
                <span>{moviesDetail.year}</span>
              </div>
              <div className="desc">{moviesDetail.desc}</div>
              <div className="genre">{moviesDetail.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItems;
