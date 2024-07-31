// import logo from "./logo.svg";
import "./App.css";
// index.js or App.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <div className="App">
        <body>
          Now is the time to test a font!
          <p>Test test test</p>
          <div className="test">Test</div>
        </body>
      </div>
      <div className="container bg-primary">
        <div className="row">
          <div className="col">
            <p>Sebastian</p>
          </div>
        </div>
        <div className="row">
          <div className="col bg-success">Left Column</div>
          <div className="col bg-success">Right Column</div>
        </div>
      </div>
    </>
  );
}

export default App;
