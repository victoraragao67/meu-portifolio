import { ReactComponent as GitHub } from '../assets/icons8-github.svg'
import { ReactComponent as Linkedin } from '../assets/icons8-linkedin.svg'
import { ReactComponent as Instagram } from '../assets/icons8-instagram.svg'
import { ReactComponent as Figma } from '../assets/icons8-figma.svg'


import style from './Footer.module.css'

export default function Rodape() {
    return (
        <footer className={style.rodape}>
            <div className={style.icons}>
                <a href={"https://www.instagram.com/victoraragao67"} target="_blank" rel="noopener noreferrer"><Instagram /></a>
                <a href={"https://github.com/victoraragao67"} target="_blank" rel="noopener noreferrer"><GitHub /></a>
                <a href={"https://www.linkedin.com/in/victoraragao67/"} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                <a href={"https://www.figma.com/file/Eb6EYNEOGPQ6AtlVXWu16M/Portifolio-Pessoal?type=design&t=6x4vYlhAqUyQQ8Wf-6"} target="_blank" rel="noopener noreferrer"><Figma /></a>

            </div>
            <p className={style.direitosReservados}>2023 - Desenvolvido por Victor Aragão</p>
        </footer >
    )
}