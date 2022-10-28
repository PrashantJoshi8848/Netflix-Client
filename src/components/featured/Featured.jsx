import "./Featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState, useEffect } from "react";
import Axios from "axios";

const Featured = ({ types }) => {
  const [content, setContent] = useState({});
  console.log(content);
  useEffect(() => {
    const getRandomContent = async () => {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1NGVmNzRkYTFhYjU4ZTlhMzc1Y2UiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjY2ODU3OTA5LCJleHAiOjE2NjcyODk5MDl9.iLV6l6VJnjtciL9QjhS2lEctqJMTMJjDWFWqPdZVZBE`,
        },
      };
      try {
        const { data } = await Axios.get(
          `/movies/random?type=${types}`,
          config
        );
        setContent({ ...data.movies[0] });
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [types]);

  return (
    <div className="featured">
      {types && (
        <div className="category">
          <span>{types === "movies" ? "Movies" : "Series"}</span>
          <select name="genres" id="genre">
            <option>Genres</option>
            <option value="Advanture">Advanture</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="thriller">thriller</option>
            <option value="western">western</option>
            <option value="Animations">Animations</option>
          </select>
        </div>
      )}

      {/* type ends */}
      <img src={content.img} alt="Movies_image" />
      <div className="info">
        <img src={content.imgTitle} alt="video" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="moreinfo">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
