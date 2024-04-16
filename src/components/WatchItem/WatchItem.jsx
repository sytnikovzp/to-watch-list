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

export const WatchItem = ({ movie, onToggle, onDelete }) => {
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
