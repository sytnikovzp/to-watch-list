import { connect } from 'react-redux';
import { toggleMovie, delMovie } from '../../store/actions/movieActions';
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

export const WatchItem = ({ movie, toggleMovie, delMovie }) => {
  const onMovieDelete = (event) => {
    event.stopPropagation();
    delMovie(id);
  };

  const { id, title, director } = movie;

  return (
    <div
      className='watch-item'
      style={toggleBackground(movie)}
      onClick={() => toggleMovie(id)}
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

const mapDispatchToProps = { delMovie, toggleMovie };

export default connect(null, mapDispatchToProps)(WatchItem);
