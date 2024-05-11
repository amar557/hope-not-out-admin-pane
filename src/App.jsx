import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Products from "./pages/Products";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import UploadForm from "./pages/UploadForm";
import Dashboard from "./pages/Dashboard";
import Men from "./pages/Men";

import { ContextApi } from "./context/context";
import EditingForm from "./pages/EditingForm";
function App() {
  return (
    <Provider store={store}>
      <ContextApi>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} path="/">
              <Route path="/" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users />} />
              <Route path="form" element={<UploadForm />} />

              <Route path="category/:categoryname" element={<Men />} />
              <Route
                path="category/:categoryname/:id"
                element={<EditingForm />}
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </Provider>
  );
}

export default App;
