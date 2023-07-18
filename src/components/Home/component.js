import style from './Home.module.css'

export function PagHome() {
    return (
        <>
            <img className={style.fotoPerfil} src='/imagens/fundoPerfil.png' alt={"Victor Aragão"} />
            <div className={style.quemSou}>
                <h2>Product Engineer & Product Designer.
                    <div className={style.subtitulo}>Bora juntos construir um futuro inteligente para a sociedade?</div></h2>
                <p>
                    Sou Victor Aragão, encontrei na Engenharia de Produção e principalmente no mundo WEB uma possibilidade de seguir o que sempre busquei, uma carreira que seja com aplicação vantajosa para a sociedade, além de assegurar o bem-estar de indivíduos e grupos. Sem abrir mão da busca por novidades e desafios</p>
            </div>
            <a
                href='https://www.figma.com/file/Eb6EYNEOGPQ6AtlVXWu16M/Portifolio-Pessoal?type=design&t=6x4vYlhAqUyQQ8Wf-6'
                target="_blank"
                rel="noopener noreferrer"
                className={style.botaoHome}>
                Conheça também o meu Figma
            </a>
        </>
    )
}

 
