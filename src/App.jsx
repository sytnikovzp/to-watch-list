import { Component } from 'react';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'Movie 1',
        isDone: false,
      },
      {
        id: 2,
        title: 'Movie 2',
        isDone: false,
      },
      {
        id: 3,
        title: 'Movie 3',
        isDone: false,
      },
      {
        id: 4,
        title: 'Movie 4',
        isDone: false,
      },
    ],
  };

  toggleToWatch = (id) => {
    this.setState({
      movies: this.state.movies.map((movie) => {
        if (movie.id !== id) {
          return movie;
        }
        return { ...movie, isDone: !movie.isDone };
      }),
    });
  };

  addMovie = (movie) => {
    movie.id = nanoid(3);
    this.setState({
      movies: [...this.state.movies, movie],
    });
  };

  deleteMovie = (id) => {
    this.setState({
      movies: [...this.state.movies.filter((movie) => movie.id !== id)],
    });
  };

  render() {
    return (
      <>
        <WatchList movies={this.state.movies} onToggle={this.toggleToWatch} 
        onDelete={this.deleteMovie}
        />
        <WatchForm onSubmit={this.addMovie} />
      </>
    );
  }
}

export default App;
