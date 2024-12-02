import { useParams } from 'react-router-dom';
import Body from '../components/Body';

export default function LfzDaten() {
  const { lfz } = useParams();

  return (
    <Body sidebar>
      <h1>Lfz Daten {lfz}</h1>
      <p>TODO</p>
    </Body>
  );
}