import { Routes, Route } from "react-router-dom"; // Importing Routes and Route components
import Home from "../pages/Home"; // Importing Home component
import About from "../pages/About"; // Importing About component
import Contact from "../pages/Contact"; // Importing Contact component
import Users from "../pages/Users"; // Importing Users component
import Login from "../pages/Login"; // Importing Login component
import UserDetails from "../pages/UserDetails"; // Importing UserDetails component
import Courses from "../pages/Courses"; // Importing Courses component
import Learn from "../pages/Learn"; // Importing Learn component
import Fees from "../pages/Fees"; // Importing Fees component

// AllRoutes component definition
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for Home page */}
      <Route path="/about" element={<About />} /> {/* Route for About page */}
      <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
      <Route path="/users" element={<Users />} /> {/* Route for Users page */}
      <Route path="/login" element={<Login />} /> {/* Route for Login page */}
      <Route path="/users/:user_id" element={<UserDetails />} /> {/* Route for UserDetails page */}
      <Route path="/courses" element={<Courses />} /> {/* Route for Courses page */}
      <Route path="/learn" element={<Learn />} /> {/* Route for Learn page */}
      <Route path="/fees" element={<Fees />} /> {/* Route for Fees page */}
    </Routes>
  );
}
