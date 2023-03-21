import React from "react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {isLoading && <li>Loading...</li>}
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
      {error && <li>Error: {error}</li>}
    </ul>
  );
};

export default GenreList;
