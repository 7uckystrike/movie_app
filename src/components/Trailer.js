import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import styles from "./Trailer.module.css";

function Trailer(){
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const getMovie =async() =>{
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )
      ).json();
      console.log(json.data.movie);
      setMovies(json.data.movie)
    }
    useEffect(()=>{
      getMovie();
    },[]);
    const isExist = movies.yt_trailer_code;
    return(
        <div className={styles.trailer}>
            {isExist===""?(<h3>doesn't exist</h3>):(
              <div className={styles.trailer_box}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${movies.yt_trailer_code}`} width="100%" height="100%"/>
              </div>
            )}        
        </div>
    );
}
export default Trailer;