import LinkMenu from '../linkMenu/component'
import './style.css'

function MenuPrincipal() {
    return (
        <>
            <div className="cabecalho">
                <nav >
                    <ul className='navBar'>
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

export default MenuPrincipal
