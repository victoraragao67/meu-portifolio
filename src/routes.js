import PagHome from './components/Home/component';
import './App.css';
import FooterContato from './components/Footer/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjetosRealizados from './components/Projetos/component';
import MenuPrincipal from './components/Menu/component';
import PaginaComErro from './components/PagError/component';
import SobreVictor from './components/SobreMim/component';
import MeusCertificados from './components/certificados/component';

function AppRoutes() {
  return (
    
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <MenuPrincipal />
            <Routes>
              <Route path="/" element={<PagHome />} />
              <Route path='/sobremim' element={<SobreVictor />} />
              <Route path='/projetos' element={<ProjetosRealizados />} />
              <Route path='/certificados' element={<MeusCertificados />} />
              <Route path='*' element={<PaginaComErro />} />
            </Routes>

          </BrowserRouter>
        </div>
        <footer className="footer"> <FooterContato /></footer>
      </div>
  );
}

export default AppRoutes;
