import React from "react";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import HeroImage from "./HeroImage/Hero";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";

//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//images
import NoImage from "../images/no_image.jpg";


const Home = () => {
  const { state, loading, error, searchTerm,  setSearchTerm, setIsLoadingMore } = useHomeFetch();

  console.log(state);

  if(error) {
    return (
      <div>
        Something went wrong...
      </div>
    )
  }

  return (
  <>
    {
    !searchTerm && state.results[0] ? 
    <HeroImage 
    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
    title={state.results[0].original_title}
    text={state.results[0].overview}
    /> : null
    } 

    <SearchBar setSearchTerm={setSearchTerm} />

    <Grid header={searchTerm ? 'Search result(s)' : 'Popular Movies'}>
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
    {loading && <Spinner/>}
    {state.page < state.total_pages && !loading && (
        <Button text="Load more" callback={() => setIsLoadingMore(true)} />
      )}
  </>
  );
};

export default Home;