import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './Login.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import AdminDashboard from './AdminDashboard.jsx';


function UserDashboard() {
  return <h1>User Dashboard</h1>;
}

/* function AdminDashboard() {
  return <h1>Admin Dashboard</h1>;
 }
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
       

      </Routes>

    </BrowserRouter>
  );
}

export default App;