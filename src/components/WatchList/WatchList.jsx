import WatchItem from '../WatchItem/WatchItem';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/movieActions';
import { useEffect } from 'react';
import api from '../../api/movie-service';

function WatchList({ movies, getMovies }) {
  useEffect(() => {
    api.get('/').then(({ data }) => getMovies(data));
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return <WatchItem key={movie.id} movie={movie} />;
      })}
    </>
  );
}

// function mapStateToProps({ movies }) {
//   return {
//     movies,
//   };
// }

const mapStateToProps = ({ movies }) => ({ movies });

// function mapDispatchToProps(dispatch) {
//   return {
//     getMovies: (movies) => dispatch(getMovies(movies)),
//   };
// }

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
