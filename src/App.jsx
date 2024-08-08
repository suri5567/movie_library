import { Link } from "react-router-dom";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            // justifyContent: "space-between", // 'space-between' is correct for distributing space
            width: "300px",
            gap: "15px",
            alignItems: "center",
            listStyleType: "none",
            padding: "0", // Remove default padding
            margin: "0",
            marginleft: "5px", // Remove default margin
          }}
        >
          <li style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Movie Library
          </li>
          <li style={{ fontSize: "15px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ fontSize: "15px" }}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          height: "100vh", // Full viewport height
        }}
      >
        <SideBar />
        <main
          style={{
            flex: 1, // Take up remaining space
            padding: "20px",
            overflowY: "auto", // Add scroll if content overflows
          }}
        >
          <MainRoutes />
        </main>
      </div>
    </>
  );
}

export default App;
