import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from './Projeto.module.css'
import projetos from "../../json/projetos.json"
import { useState } from 'react';

export function ProjetosRealizados() {

    const [mostrarDescricao, setMostrarDescricao] = useState({});

    const handleVerMaisClick = (id) => {
        setMostrarDescricao((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div>
            <div>
                {projetos.map((projetos) => (
                    <div className={styles.boxProjetos} key={projetos.id}>
                        <h2 className={styles.tituloProjetos}>{projetos.titulo}</h2>
                        <h3 className={styles.preTituloProjetos}>{projetos.subtitulo}</h3>
                        {mostrarDescricao[projetos.id] ? (
                            <ReactMarkdown className={styles.textoDescricao}>
                                {projetos.texto}               
                            </ReactMarkdown>) : null}
                        <button className={styles.botaoMaisMenos} onClick={() => handleVerMaisClick(projetos.id)}>
                            {mostrarDescricao[projetos.id] ? "Ver Menos" : "Ver Mais"}
                        </button>
                    </div>
                ))}

            </div>
        </div>

    )
}
