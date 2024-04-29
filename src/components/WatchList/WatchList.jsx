import { useContext } from 'react';
import PropTypes from 'prop-types';
import WatchItem from '../WatchItem/WatchItem';
import { MovieContext } from '../../context';

function WatchList() {
  const { arrMovies } = useContext(MovieContext);

  return (
    <>
      {arrMovies.map((movie) => {
        return <WatchItem key={movie.id} movie={movie} />;
      })}
    </>
  );
}

WatchList.propTypes = {
  movies: PropTypes.array,
};

WatchList.defaultProps = {
  string: 'Hello',
};

export default WatchList;
