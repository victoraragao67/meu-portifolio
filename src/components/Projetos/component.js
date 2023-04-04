import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './style.css'
import projetos from "../../json/projetos.json"

function ProjetosRealizados() {
    return (
        <div className="ProjetosProfissionais">
            <div>
                {projetos.map((projetos) => (
                    <div className="BoxProjetos" key={projetos.id}>
                        <h2 className="tituloProjetos">{projetos.titulo}</h2>
                        <h3 className="preTituloProjetos">{projetos.subtitulo}</h3>
                        <ReactMarkdown>
                            {projetos.texto}
                        </ReactMarkdown>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default ProjetosRealizados
