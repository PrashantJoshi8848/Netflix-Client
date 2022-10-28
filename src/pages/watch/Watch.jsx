import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

const Watch = () => {
  const { state } = useLocation();
  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video controls className="video" autoPlay loop>
        <source src={state.movie.video} type="video/mp4" progress />
      </video>
    </div>
  );
};

export default Watch;
