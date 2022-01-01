import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/discover.css";
import NavBar from "./NavBar";
import Footer from "./footer"


const Kids = () => {
  let apiKey = "api_key=f5c6cc27683d67ed37beb061de2bd206";
  let baseURL = "https://api.themoviedb.org/3";
  let fetchedContent = "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&";
  let movieImage = "https://image.tmdb.org/t/p/w500/";
  let dayTrend = "/trending/all/day?";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        let response = await fetch(baseURL + fetchedContent + apiKey);

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        let data = await response.json();
        setMovies(data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

const navigate = useNavigate()


  return (
    <div>
      <NavBar/>
      <div className="container">
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

        {[...movies].slice(0, 18).map((data) => (
            <div className="card" key={data.id} onClick={() => {
              navigate("/info", {state: data})
            }}>
              
              <img className="movieImage" src={movieImage + data.poster_path} />
                <h4>{data.title}</h4>
              <div className="info">
                <p id="date">{data.release_date}</p>
                <p className={Math.floor(data.vote_average) >= 6 ? "green" : "red"}> {data.vote_average} </p>
              </div>
            </div>
          ))
        }
    </div>
    <Footer />
    </div>
  );
};

export default Kids;
