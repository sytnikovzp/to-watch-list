import { useState } from 'react';
import WatchItem from '../WatchItem/WatchItem';

function WatchList({ movies, onToggle, onDelete }) {
  const [count, setCount] = useState(0);

  if (movies.length !== count) {
    setCount(movies.length);
  }

  return (
    <>
      {movies.map((movie) => {
        return (
          <WatchItem
            key={movie.id}
            movie={movie}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
}

export default WatchList;
