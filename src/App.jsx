import { useEffect, useState } from 'react';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import { customAlphabet } from 'nanoid';

function App() {
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(getFromStorage, []);

  function getFromStorage() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (!movies) {
      setArrMovies([]);
    } else {
      setArrMovies(movies);
    }
  }

  function toggleToWatch(id) {
    const movies = arrMovies.map((movie) => {
      if (movie.id !== id) {
        return movie;
      }
      return { ...movie, isDone: !movie.isDone };
    });
    setArrMovies(movies);
    saveMovies(movies);
  }

  const addMovie = (movie) => {
    const nanoid = customAlphabet('1234567890', 3);
    movie.id = nanoid();
    const movies = [...arrMovies, movie];
    setArrMovies(movies);
    saveMovies(movies);
  };

  const deleteMovie = (id) => {
    const movies = arrMovies.filter((movie) => movie.id !== id);
    setArrMovies(movies);
    saveMovies(movies);
  };

  const saveMovies = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  return (
    <>
      <h1>To watch list</h1>
      <WatchList
        movies={arrMovies}
        onToggle={toggleToWatch}
        onDelete={deleteMovie}
      />
      <WatchForm onSubmit={addMovie} />
    </>
  );
}

export default App;
