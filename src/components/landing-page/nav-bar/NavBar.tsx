import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="items-center flex gap-2">
         <img src="/icons/logo.svg" className="w-3 block" alt="" />
         <p>studyIQ</p>
      </div>
      <div>
         <a href="#home">Home</a>
         <a href="#features">Features</a>
         <a href="#faq">Faq</a>
      </div>
      <Link to="/login">
         Login
      </Link>
    </nav>
  )
}
export default NavBar