import { useField } from '../../hooks';
import './WatchForm.css';

function WatchForm({ onSubmit }) {
  const title = useField('');
  const director = useField('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title: title.value,
      director: director.value,
      isDone: false,
    });
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
