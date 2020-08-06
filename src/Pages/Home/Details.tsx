import React from "react";
import IMovie from "../../models/entities/IMovie";

const Details: React.FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div>
      <h1>
        {movie.id.videoId} - {movie.snippet.title}
      </h1>
      <p>{movie.snippet.description}</p>
      <img alt="" src={movie.snippet.thumbnails.high.url} />
    </div>
  );
};

export default Details;
