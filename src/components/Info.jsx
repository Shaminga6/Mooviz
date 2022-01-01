import "../style/info.css";
import NavBar from "./NavBar";
import { useLocation, useNavigate } from "react-router-dom";
let movieImage = "https://image.tmdb.org/t/p/w500/";

const Info = () => {
  const { state } = useLocation();
  const { title, overview, poster_path, id, release_date, vote_average } = state;
  const navigate = useNavigate()

  return (
    <div>
      <NavBar />
      <div className="container">
        <img className="image" src={movieImage + poster_path} alt="" />
        <div className="story">
        <h1 style={{ color: "white" }}>{title}</h1>
        <p className="overview">{overview}</p>

        <div className="details">
            <span className="date">{release_date}</span>
            <span className={Math.floor(vote_average) >= 6 ? "toGreen" : "toYellow"} rating >Rating: {vote_average}</span>
            <button className="back" onClick={() => {navigate(-1)}}>BACK</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
