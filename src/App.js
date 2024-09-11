// import logo from "./logo.svg";
import "./App.css";

// index.js or App.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Contents from "./components/Contents";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <Header />
          </nav>
        </header>
        <body>
          <main>
            <Contents />
          </main>
        </body>
      </div>
    </>
  );
}

export default App;
