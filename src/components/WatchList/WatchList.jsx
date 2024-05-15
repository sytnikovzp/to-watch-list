import WatchItem from '../WatchItem/WatchItem';
import { getMovies } from '../../store/slices/movieSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function WatchList() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movieList.movies);
  // const actors = useSelector((state) => state.actorsList.actors);
  // console.log(actors);

  useEffect(() => {
    dispatch(getMovies());
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
