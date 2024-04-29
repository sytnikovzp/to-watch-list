import { useContext } from 'react';
import PropTypes from 'prop-types';
import WatchItem from '../WatchItem/WatchItem';
import { MovieContext } from '../../context';

function WatchList({ onToggle, onDelete }) {
  const { arrMovies } = useContext(MovieContext);

  return (
    <>
      {arrMovies.map((movie) => {
        return (
          <WatchItem
            key={movie.id}
            movie={movie}
            // onToggle={onToggle}
            // onDelete={onDelete}
          />
        );
      })}
    </>
  );
}

WatchList.propTypes = {
  movies: PropTypes.array,
  // onToggle: PropTypes.func.isRequired,
  // onDelete: PropTypes.func.isRequired,
};

WatchList.defaultProps = {
  string: 'Hello',
};

export default WatchList;
