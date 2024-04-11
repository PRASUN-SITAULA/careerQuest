import { Link } from "react-router-dom"

export default function Navbar(){ 
    const navbarItems = [
        {name:"Home", link:"/"},
        {name:"Search Job", link:"/jobs"}
    ]
    return(
        <nav className="w-full h-14 flex justify-center align-center">
            <div className="flex flex-row justify-center items-center ">
                <ul className="flex justify-between gap-10 items-center list-none "> 
                    {navbarItems.map((nav, index) => (
                        <li key={index} className='py-4 font-roboto font-bold cursor-pointer hover:text-blue-900'>
						    <Link>{nav.name}</Link>
						</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}