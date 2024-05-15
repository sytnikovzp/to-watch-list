import { useDispatch } from 'react-redux';
import { toggleMovie, delMovie } from '../../store/slices/movieSlice';
import './WatchItem.css';

const divStyles = {
  color: 'white',
};

function toggleBackground(movie) {
  return {
    ...divStyles,
    backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod',
  };
}

export const WatchItem = ({ movie }) => {
  const dispatch = useDispatch();

  const { id, title, director } = movie;

  const onMovieDelete = (event) => {
    event.stopPropagation();
    dispatch(delMovie(id));
  };

  const onMovieToggle = () => {
    dispatch(toggleMovie(id));
  };

  return (
    <div
      className='watch-item'
      style={toggleBackground(movie)}
      onClick={onMovieToggle}
    >
      <p className='content'>
        {title} directed by {director}
      </p>
      <span className='delete-btn' onClick={onMovieDelete}>
        X
      </span>
    </div>
  );
};

export default WatchItem;
