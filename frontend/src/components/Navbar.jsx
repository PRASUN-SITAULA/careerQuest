import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'

export default function Navbar(){ 
    const navbarItems = [
        {name:"Home", link:"/"},
        {name:"Search Job", link:"/jobs"}
    ]
    return(
        <nav className="w-full h-14 flex align-center my-4">
            <div className="flex flex-row w-full justify-center items-center mx-4">
                <div>
                    <img src={Logo} alt="logo" className="w-32 h-32"/>
                </div>
                <ul className="flex justify-between gap-10 items-center list-none mr-8"> 
                    {navbarItems.map((nav, index) => (
                        <li key={index} className='py-4 font-roboto font-bold cursor-pointer hover:text-blue-900'>
						    <Link to={nav.link}>{nav.name}</Link>
						</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}