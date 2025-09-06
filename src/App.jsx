import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
//import Unauthorized from './pages/Unauthorized';

import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./contexts/PrivateRoute";
import RoleRoute from "./contexts/RoleRoute";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";

import EventForm from "./Pages/EventForm";
import DynamicTable from "./Pages/DynamicTable";
import EditEvents from "./Pages/EditEvents";
import AppHeader from "./contexts/AppHeader";
import SessionWarningDialog from "./component/SessionWarningDialog";
import Eventlistcard from "./component/Eventlistcard";
import Unauthorized from "./Pages/Unauthorized";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AppHeader />
          <SessionWarningDialog />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<PrivateRoute />}>
              <Route path="/event" element={<EventForm />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route element={<RoleRoute allowedRoutes={["admin"]} />} />
              <Route path="/eventscard" element={<Eventlistcard />} />
              <Route path="/editEvent/:id" element={<EditEvents />} />
              <Route path="/dynamicTable" element={<DynamicTable />} />

              <Route path="/unauthorized" element={<Unauthorized />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
