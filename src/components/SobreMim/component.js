import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './style.css'
import sobremim from "../../json/sobremim.json"

function SobreVictor() {
    return (
        <div className="SobreMim">
            <div>
                <h3 className="preTitulo">{sobremim[0].subtitulo}</h3>
                <h2 className="tituloSobreMim">{sobremim[0].titulo}</h2>
                <ReactMarkdown>
                    {sobremim[0].texto}
                </ReactMarkdown>
              
            </div>
            <img className="fotoSobreMim" src='/imagens/prazerVictorAragao.jpg' alt={"Muito Prazer, Victor Aragão"} />
        </div>

    )
}

export default SobreVictor;
