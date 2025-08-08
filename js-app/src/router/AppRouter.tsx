import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../components/Home/Home";
import { ROUTES } from "../constants";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
