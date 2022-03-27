import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from '../components/Trailer.js'
import styles from './Detail.module.css'


function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie=async()=>{
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    console.log(json.data.movie);
    setMovies(json.data.movie)
    setLoading(false);
  }
  useEffect(()=>{
    getMovie();
  },[]);
  return (
    <div>
      {loading ? ( 
        <h1 className={styles.loader}>
          loading
        </h1>
      ) : (
        <div className={styles.detail}>
          <div className={styles.detail__box}>
            <img src={movies.medium_cover_image} />
            <div className={styles.detail__contents}>
            🍿 TITLE : {movies.title} <br/>
            🍿 YEAR : {movies.year} <br/>
            🍿 GENRES : {movies.genres} <br/>
            🍿 RUNTIME: {movies.runtime} <br/>
            <hr/>
            {movies.description_intro}
            </div>
          </div>
          <>
          <Trailer/>
          </>
        </div>
  
      )}
    </div>
  );
}
export default Detail;