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
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://xenodochial-poitras-5501a5.netlify.app">
            {" "}
            Neda Zare
          </a>
        </footer>
      </div>
    </div>
  );
}
