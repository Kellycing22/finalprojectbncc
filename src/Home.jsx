import { Link, Outlet, useLocation } from "react-router-dom"

export default function Home(){
        const loc = useLocation()
    return(
        <>
            <div className="flex gap-2 p-3 rounded-b bg-blue-400">
                <Link to = "Home">
                    <button className={`${loc.pathname === "/Home" ? 'rounded-lg bg-blue-600 text-white px-2 py-1' : ''}`}>Home</button>
                </Link>
                <Link to = "CountrySearch">
                    <button className={`${loc.pathname.startsWith("/CountrySearch") ? 'rounded-lg bg-blue-600 text-white px-2 py-1' : ''}`}>Search Country</button>
                </Link> 
                <Link to = "CountryFilter">
                    <button className={`${loc.pathname === "/CountryFilter" ? 'rounded-lg bg-blue-600 text-white px-2 py-1' : ''}`}>Country Filter</button>
                </Link> 
                <Link to = "About">
                    <button className={`${loc.pathname === "/About" ? 'rounded-lg bg-blue-600 text-white px-2 py-1' : ''}`}>About</button>
                </Link> 
            </div>

            <div className="p-2">
                <Outlet/>
            </div>
        </>
    )
}