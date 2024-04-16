import { Component } from 'react';
import './WatchItem.css';

export class WatchItem extends Component {
  onMovieDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.movie.id);
  };

  render() {
    const { id, title, director, isDone } = this.props.movie;
    const onToggle = this.props.onToggle;
    return (
      <div
        className={'watch-item ' + (isDone ? 'done' : '')}
        onClick={() => onToggle(id)}
      >
        <p className='content'>
          {title} directed by {director}
        </p>
        <span className='delete-btn' onClick={this.onMovieDelete}>
          X
        </span>
      </div>
    );
  }
}

export default WatchItem;
