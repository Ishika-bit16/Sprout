import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav id="navbar">
      
      <div id="links">
        <Link to="/">Board</Link>
        <Link to="/snaps">+Add</Link>
        <Link to="/about">History</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
    </nav>
  )
}