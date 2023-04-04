import { ReactComponent as GitHub } from '../assets/icons8-github.svg'
import { ReactComponent as Linkedin } from '../assets/icons8-linkedin.svg'
import { ReactComponent as Instagram } from '../assets/icons8-instagram.svg'
import './style.css'

export default function Rodape() {
    return (
        <footer className='rodape'>
            <div className="icons">
                <Instagram />
                <GitHub />
                <Linkedin />
            </div>
            <p className='direitosReservados'>2023 - Desenvolvido por Victor Aragão</p>
        </footer >
    )
}