import {LinkMenu} from '../linkMenu/component'
import style from './Menu.module.css'

export function MenuPrincipal() {
    return (
        <>
            <div className={style.cabecalho}>
                <nav >
                    <ul className={style.navBar}>
                        <li><LinkMenu  to="/"> Inicio</LinkMenu></li>
                        <li><LinkMenu  to="/sobremim">Sobre</LinkMenu></li>
                        <li><LinkMenu  to="/projetos"> Projetos </LinkMenu></li>
                        <li><LinkMenu  to="/certificados"> Certificações</LinkMenu></li>

                    </ul>
                </nav>
            </div>
        </>
    )
}


