import { Component } from 'react';
import WatchItem from '../WatchItem/WatchItem';

export class WatchList extends Component {
  render() {
    return (
      <>
        {this.props.movies.map((movie) => {
          return (
            <WatchItem
              key={movie.id}
              movie={movie}
              onToggle={this.props.onToggle}
            />
          );
        })}
      </>
    );
  }
}

export default WatchList;
