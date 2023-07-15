import certificados from "../../json/certificados.json"
import style from './Certificado.module.css'
import { ReactComponent as Certificado } from '../assets/la_certificate.svg'
import { useState } from "react"


function MeusCertificados() {
    const [exibirCertificados, setExibirCertificados] = useState(false);
    const qntInicio = 4;
    const certificadosExibidos = exibirCertificados ? certificados : certificados.slice(0, qntInicio);

    const handleVerMais = () => {
        setExibirCertificados(true)

    }
    const handleVerMenos = () => {
        setExibirCertificados(false);
    };

    return (
        <>
            <p className={style.certificadosResumo}>
                Essas são algumas das certificações que adquiri ao longo da minha vida, e cada uma delas contribuiu para o meu crescimento profissional e pessoal. Essas conquistas representam o comprometimento contínuo com a aprendizagem e o aprimoramento das minhas habilidades, demonstrando meu desejo de me manter atualizado e preparado para enfrentar os desafios do mundo em constante evolução.
            </p>
            <div className={style.certificadosPage}>
                {certificadosExibidos.map((certificados) => (
                    <div className={style.boxProjetos} key={certificados.id}>
                        <Certificado />
                        <h2 className={style.tituloProjetos}>{certificados.titulo}</h2>
                        <h3 className={style.preTituloProjetos}>{certificados.instituicao}</h3>
                    </div>
                ))}
            </div>
            <div className={style.botoes}>
                {!exibirCertificados && (
                    <button className={style.botaoMaisMenos} onClick={handleVerMais}>Ver Mais</button>
                )}
                {exibirCertificados && (
                    <button className={style.botaoMaisMenos} onClick={handleVerMenos}>Ver Menos</button>
                )}
            </div>

        </>


    )
}

export default MeusCertificados
