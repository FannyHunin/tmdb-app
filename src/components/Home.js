import React from "react";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import HeroImage from "./HeroImage/Hero";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./SearchBar/SearchBar";

//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//images
import NoImage from "../images/no_image.jpg";


const Home = () => {
  const { state, loading, error, setSearchTerm } = useHomeFetch();

  console.log(state);

  return (
  <>
    {
    state.results[0] ? 
    <HeroImage 
    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
    title={state.results[0].original_title}
    text={state.results[0].overview}
    /> : null
    } 

    <SearchBar setSearchTerm={setSearchTerm} />

    <Grid header='Popular Movies'>
      {
        state.results.map((movie, i) => (
          <Thumb 
            key={i}
            clickable
            image={
              movie.poster_path ?
              IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
             }
             movieId={movie.id}
            />
        ))
      }
    </Grid>
    <Spinner/>
  </>
  );
};

export default Home;