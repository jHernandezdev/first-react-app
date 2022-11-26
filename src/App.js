import Counter from './Counter';
import GitHubUsers from './GitHubUsers';
import './App.css';

function App() {
  return (
    <div className="App">      
      <Counter />
      <GitHubUsers title="The GitHub Cards App" />
    </div>
  );
}

export default App;
