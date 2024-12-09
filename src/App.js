import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ApiProvider from './contexts/ApiProvider';
import Header from './components/Header';
import LfzListe from './pages/LfzListe';
import LfzDaten from './pages/LfzDaten';
import Ausruestung from './pages/Ausruestung';

export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <ApiProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LfzListe />} />
            <Route path="/lfzdaten/:lfz" element={<LfzDaten />} />
            <Route path="/ausruestung" element={<Ausruestung />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ApiProvider>
      </BrowserRouter>      
    </Container>
  );
}