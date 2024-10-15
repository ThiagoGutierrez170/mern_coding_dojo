import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import UserDetailPage from "./pages/UserDetailPage.jsx";
import TarjetaEstado from "./pages/TarjertaEstado.jsx";
import RouteError from "./pages/RouteError.jsx";

const NavigationBar = () => {
  const navigate = useNavigate(); // Hook para la navegación programática

  return (
    <nav className='navegacion'>
      <button onClick={() => navigate('/')}>Inicio</button>
      <button onClick={() => navigate('/estado')}>Estado</button>
    </nav>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" Component={RegisterPage} />
        <Route path="/users" Component={UserPage} />
        <Route path="/users/:id" Component={UserDetailPage} />
        <Route path="/estado" Component={TarjetaEstado} />
        <Route path="*" Component={RouteError} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
