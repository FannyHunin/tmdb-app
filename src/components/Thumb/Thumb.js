import React from "react";
import { Link } from "react-router-dom";

//styles
import { Image } from "./Thumb.styles";

export default function Thumb({ image, movieId, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="Movie thumb" />
        </Link>
      ) : (
        <Image src={image} alt="Movie thumb" />
      )}
    </div>
  );
}
