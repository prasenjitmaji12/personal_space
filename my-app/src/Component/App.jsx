import logo from './logo.svg';
import '../App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {props.history.push('/about')}}>About</button>
          Learn React
      </header>
    </div>
  );
}

export default App;
