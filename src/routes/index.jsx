import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import NavBar from "../components/navbar/index";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<h1>Post</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
