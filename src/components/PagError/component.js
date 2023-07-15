import styles from './PagError.module.css'

function PaginaComErro() {
    return (
        <div className={styles.boxError}>
        <img className={styles.fotoTriste} src='/imagens/errorImagem.jpg' alt={"Pixar imagem"} />
        <h1 className={styles.titulo404}>ahhhh... Tivemos um erro.</h1>
        <h2 className={styles.subtitulo404}>Talvez essa página não esteja funcionando</h2>
        </div>
       
)}

export default PaginaComErro
