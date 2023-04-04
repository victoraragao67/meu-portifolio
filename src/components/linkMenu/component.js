import { NavLink } from "react-router-dom";
import './style.css'


function LinkMenu({children, to}) {

    return (

        
        <NavLink className={({ isActive }) => `
        ${isActive ? "linkDescatado" : "itemMenu"}
    `}
        to={to}
        end>
            {children}
        </NavLink>
    )
}

export default LinkMenu
