import { Component } from 'react';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import { customAlphabet } from 'nanoid';

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

  componentDidMount() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (!movies) {
      this.setState({
        movies: [],
      });
    } else {
      this.setState({
        movies: [...movies],
      });
    }
  }

  toggleToWatch = (id) => {
    this.setState((state) => {
      const movies = state.movies.map((movie) => {
        if (movie.id !== id) {
          return movie;
        }
        return { ...movie, isDone: !movie.isDone };
      });
      this.saveMovies(movies);
      return { movies };
    });
  };

  addMovie = (movie) => {
    const nanoid = customAlphabet('1234567890', 3);
    movie.id = nanoid();
    this.setState((state) => {
      const movies = [...state.movies, movie];
      this.saveMovies(movies);
      return { movies };
    });
  };

  deleteMovie = (id) => {
    this.setState((state) => {
      const movies = state.movies.filter((movie) => movie.id !== id);
      this.saveMovies(movies);
      return { movies };
    });
  };

  saveMovies = (arrMovies) => {
    localStorage.setItem('movies', JSON.stringify(arrMovies));
  };

  render() {
    return (
      <>
        <h1>To watch list</h1>
        <WatchList
          movies={this.state.movies}
          onToggle={this.toggleToWatch}
          onDelete={this.deleteMovie}
        />
        <WatchForm onSubmit={this.addMovie} />
      </>
    );
  }
}

export default App;
