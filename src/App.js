import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyWord="sunrise" />
        </main>
        <footer className="App-footer">
          {/* Coded by{" "}
          <a href="https://xenodochial-poitras-5501a5.netlify.app">
            {" "}
            Neda Zare
          </a>
        </footer>
        <footer> */}
          This project was coded by{" "}
          <a
            href="https://xenodochial-poitras-5501a5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neda Zare
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/n-e-d-a/dictionary-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dazzling-torvalds-fc5d49.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
