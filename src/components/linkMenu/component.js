import { NavLink } from "react-router-dom";
import style from './LinkMenu.module.css'


function LinkMenu({children, to}) {

    return (

        
        <NavLink className={({ isActive }) => `
        ${isActive ? style.linkDescatado : style.itemMenu}
    `}
        to={to}
        end>
            {children}
        </NavLink>
    )
}

export default LinkMenu
