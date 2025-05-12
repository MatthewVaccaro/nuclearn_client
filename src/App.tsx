import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router";
import { API } from "./api/axios";

function App() {
  const [count, setCount] = useState(0);
  API.get("/")
    .then((res) => console.log(res.data))
    .catch((e) => console.error(e));

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Link to About!
        </NavLink>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
