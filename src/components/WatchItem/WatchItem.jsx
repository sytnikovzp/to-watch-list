import { useContext } from 'react';
import { MovieContext } from '../../context';
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
  const { onDelete, onToggle } = useContext(MovieContext);

  const onMovieDelete = (event) => {
    event.stopPropagation();
    onDelete(id);
  };

  const { id, title, director } = movie;

  return (
    <div
      className='watch-item'
      style={toggleBackground(movie)}
      onClick={() => onToggle(id)}
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
