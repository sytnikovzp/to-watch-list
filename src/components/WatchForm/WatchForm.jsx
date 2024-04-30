import { useField } from '../../hooks';
import { useDispatch } from 'react-redux';
import api from '../../api/movie-service';
import { addMovie } from '../../store/actions/movieActions';
import './WatchForm.css';

function WatchForm() {
  const title = useField('');
  const director = useField('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: title.value,
      director: director.value,
      isDone: false,
    };
    api.post('/watch', newMovie).then(({ data }) => dispatch(addMovie(data)));
    title.onReset();
    director.onReset();
  };

  return (
    <form className='watch-form' onSubmit={onFormSubmit}>
      <input type='text' name='title' {...title} />
      <input type='text' name='director' {...director} />
      <button className='btn'>Add</button>
    </form>
  );
}

export default WatchForm;
