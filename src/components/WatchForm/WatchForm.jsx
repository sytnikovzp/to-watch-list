import { Component } from 'react';
import './WatchForm.css';

export class WatchForm extends Component {
  state = {
    movieTitle: '',
  };

  onInputChange = (event) => {
    this.setState({
      movieTitle: event.target.value,
    });
  };

  render() {
    return (
      <form className='watch-form'>
        <input
          type='text'
          value={this.state.movieTitle}
          onChange={this.onInputChange}
        />
        <button className='btn'>Add</button>
      </form>
    );
  }
}

export default WatchForm;
