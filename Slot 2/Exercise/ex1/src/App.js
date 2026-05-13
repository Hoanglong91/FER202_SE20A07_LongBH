import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "Hello, My name is Hoang Long. I am a student of Software Engineering at FPT University. I am currently in the 2nd year of my studies, and I am passionate about learning new technologies and improving my programming skills. In my free time, I enjoy playing video games, watching movies, and spending time with my friends and family."
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
