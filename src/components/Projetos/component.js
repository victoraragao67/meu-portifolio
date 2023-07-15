import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from './Projeto.module.css'
import projetos from "../../json/projetos.json"

function ProjetosRealizados() {
    return (
        <div>
            <div>
                {projetos.map((projetos) => (
                    <div className={styles.boxProjetos} key={projetos.id}>
                        <h2 className={styles.tituloProjetos}>{projetos.titulo}</h2>
                        <h3 className={styles.preTituloProjetos}>{projetos.subtitulo}</h3>
                        <ReactMarkdown className={styles.textoDescricao}>
                            {projetos.texto}
                        </ReactMarkdown>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default ProjetosRealizados
