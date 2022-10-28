import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";

function App() {
  const user = true;
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            user ? (
              <Home />
            ) : (
              <Navigate to="/register" replace state={{ from: location }} />
            )
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={
            !user ? (
              <Login />
            ) : (
              <Navigate to={"/"} replace state={{ from: location }} />
            )
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={
            !user ? (
              <Register />
            ) : (
              <Navigate to="/" replace state={{ from: location }} />
            )
          }
        />
      </Routes>
      {user && (
        <>
          <Routes>
            <Route path="/movies" element={<Home type="movies" />} />
          </Routes>
          <Routes>
            <Route path="/series" element={<Home type="series" />} />
          </Routes>
          <Routes>
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
