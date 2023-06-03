import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
// chama o UseStorage pra poder colcoar o contexto em tudo
import { UserStorage } from "./UserContext";
import User from "./Components/User/user";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Photo from './Components/Photo/Photo'
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
