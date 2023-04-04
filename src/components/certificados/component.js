import certificados from "../../json/certificados.json"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './style.css'


function MeusCertificados() {
    return (
        <div className="ProjetosProfissionais">
        <div>
            {certificados.map((certificados) => (
                <div className="BoxProjetos" key={certificados.id}>
                    <h2 className="tituloProjetos">{certificados.titulo}</h2>
                    <h3 className="preTituloProjetos">{certificados.instituicao}</h3>
                    <ReactMarkdown>
                        {certificados.periodo}
                    </ReactMarkdown>
                </div>
            ))}

        </div>
    </div>
       
)}

export default MeusCertificados
