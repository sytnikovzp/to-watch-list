import WatchItem from '../WatchItem/WatchItem';
import { getMovies } from '../../store/actions/movieActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/movie-service';

function WatchList() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    api.get('/watch').then(({ data }) => dispatch(getMovies(data)));
  }, [dispatch]);

  return (
    <>
      {movies.map((movie) => {
        return <WatchItem key={movie.id} movie={movie} />;
      })}
    </>
  );
}

export default WatchList;
