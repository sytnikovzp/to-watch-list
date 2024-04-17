import { useState } from 'react';
import PropTypes from 'prop-types';
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

WatchList.propTypes = {
	movies: PropTypes.array,
	onToggle: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
}

WatchList.defaultProps = {
	string: 'Hello',
}

export default WatchList;
