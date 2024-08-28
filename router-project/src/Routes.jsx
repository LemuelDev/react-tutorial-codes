import { Route, Routes } from "react-router-dom";

//Components
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import ErrorPage from "./components/ErrorPage";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};

export default AppRoutes;