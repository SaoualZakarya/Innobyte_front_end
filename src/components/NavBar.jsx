import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="py-4 container">
        <div className="text-xl">Logo</div>
        <nav className="flex gap-10 ">
            <a src="#home" className="home-link">Home </a>
            <a src="#feature" className="home-link">Features</a>
            <a src="#q&a" className="home-link">Q & A</a>
            <a src="#pricing" className="home-link">Pricing </a>
            <a src="#contact" className="home-link">Contact Us </a>
        </nav>
        <div>
            <Link to="/Login" className="p-3flex gap-3 border-[#E5E7EB] " > 
                <img src="../assets/icons" className="w-5 h-5" />
                <span>Login</span>
            </Link>
            <Link to="/" className="bg-[#2563EB] p-3" >
                Sign Up
            </Link>
        </div>
    </div>
  )
}
