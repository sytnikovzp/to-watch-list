import { Component } from 'react';
import './WatchItem.css';

export class WatchItem extends Component {
  render() {
    const { id, title, isDone } = this.props.movie;
    // const onToggle = this.props.onToggle;
    return (
      <div
        className={'watch-item ' + (isDone ? 'done' : '')}
        onClick={() => this.props.onToggle(id)}
      >
        <p className='content'>{title}</p>
        <span className='delete-btn'>X</span>
      </div>
    );
  }
}

export default WatchItem;
