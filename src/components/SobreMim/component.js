import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from './Sobremim.module.css'
import sobremim from "../../json/sobremim.json"

function SobreVictor() {
    return (
        <div className={styles.sobreMim}>
            <div>
                <h3 className={styles.preTitulo}>{sobremim[0].subtitulo}</h3>
                <h2 className={styles.tituloSobreMim}>{sobremim[0].titulo}</h2>
                <ReactMarkdown>
                    {sobremim[0].texto}
                </ReactMarkdown>
              
            </div>
            <img className={styles.fotoSobreMim} src='/imagens/prazerVictorAragao.jpg' alt={"Muito Prazer, Victor Aragão"} />
        </div>

    )
}

export default SobreVictor;
