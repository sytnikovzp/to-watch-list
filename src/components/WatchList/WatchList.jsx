import WatchItem from '../WatchItem/WatchItem';
import { getMoviesAction } from '../../store/actions/movieActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function WatchList() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.moviesList.movies);
  
  // const actors = useSelector((state) => state.actorsList.actors);
  // console.log(actors);

  useEffect(() => {
    dispatch(getMoviesAction());
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
