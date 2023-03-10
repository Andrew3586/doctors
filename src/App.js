import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Appointment from "./pages/Appointment";
import AddAppointmentsForm from "./components/AddAppointmentsForm";
import AddDoctorsForm from "./components/AddDoctorForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/adddoctors" element={<AddDoctorsForm />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/addappointment" element={<AddAppointmentsForm />} />
        <Route path="*" element={<h1>Error Page Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
