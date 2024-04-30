import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>To watch list</h1>
      <WatchList />
      <WatchForm />
    </div>
  );
}

export default App;
