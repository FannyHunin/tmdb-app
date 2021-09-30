import React from "react";
import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";

//hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

//images
import NoImage from "../images/no_image.jpg";

export default function Movie() {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumbs movieTitle={movie.original_title} />
    </>
  );
}
