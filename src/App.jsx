import { useEffect, useState } from 'react';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import api from './api/movie-service';

function App() {
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(() => {
    api.get('/').then(({ data }) => {
      if (!data) {
        setArrMovies([]);
      } else {
        setArrMovies(data);
      }
    });
  }, []);

  function toggleToWatch(id) {
    const updatedMovie = arrMovies.find((movie) => movie.id === id);
    updatedMovie.isDone = !updatedMovie.isDone;
    api
      .put(`/${id}`, updatedMovie)
      .then(({ data }) => {
        setArrMovies(
          arrMovies.map((movie) => {
            return movie.id !== id ? movie : data;
          })
        );
      })
      .catch((error) => console.log(error));
  }

  const addMovie = (movie) => {
    api.post('/', movie).then(({ data }) => {
      const newMovies = [...arrMovies, data];
      setArrMovies(newMovies);
    });
  };

  const deleteMovie = (id) => {
    api.delete(`/${id}`).then(({ status }) => console.log(status));
    const newMovies = arrMovies.filter((movie) => movie.id !== id);
    setArrMovies(newMovies);
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
