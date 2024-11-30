import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Flugzeuge from './components/Flugzeuge';


export default function App() {

  return (
    <Container fluid className="App">
      <Header />
      <Container>
        <Stack direction="horizontal">
          <Sidebar />
          <Container>
            <Flugzeuge />
          </Container>
        </Stack>            
      </Container>
    </Container>
  );
}