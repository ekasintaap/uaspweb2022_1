import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Listbrg from "./pages/list/barang/Listbrg";
import Listmbr from "./pages/list/member/Listmbr";
import Listtrs from "./pages/list/transaksi/Listtrs";
import Singlembr from "./pages/single/member/Singlembr";
import Singletrs from "./pages/single/transaksi/Singletrs";
import Singlebrg from "./pages/single/barang/Singlebrg";
import Newbrg from "./pages/new/barang/Newbrg";
import Newmbr from "./pages/new/member/Newmbr";
import Newtrs from "./pages/new/transaksi/Newtrs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Listmbr />} />
              <Route path=":userId" element={<Singlembr />} />
              <Route
                path="new"
                element={<Newmbr inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="barang">
              <Route index element={<Listbrg />} />
              <Route path=":productId" element={<Singlebrg />} />
              <Route
                path="new"
                element={<Newbrg inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="transaksi">
              <Route index element={<Listtrs />} />
              <Route path=":transId" element={<Singletrs />} />
              <Route
                  path="new"
                  element={<Newtrs inputs={productInputs} title="Add New Product" />}
                  />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
