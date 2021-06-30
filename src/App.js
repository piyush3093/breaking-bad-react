import Post from './components/posts';
import './App.css';

function App() {
  document.body.style = "background: lightgreen";
  document.title = "Breaking Bad";
  return (
    <div className="App">
      <h1>Breaking Bad Characters</h1>
      <span>Write a random number between 1 and 57 in the input box!</span>
      <Post />
    </div>
  );
}

export default App;
