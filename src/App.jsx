import { useState } from 'react'
import './css/App.css'
import './css/index.css'
import './css/Dashboard.css'
import './components/navbar.jsx'
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Add";
import History from "./pages/History";

function App() {
  return (
     <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/History" element={<History />} />
    </Routes>
  )
}

export default App;