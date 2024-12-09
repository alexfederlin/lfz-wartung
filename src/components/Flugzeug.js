import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default function Flugzeug({ lfz }) {
  return (
    <p key={lfz.id}>
    <b>{lfz.name}</b> &mdash; {lfz.model}
    <br />
    {lfz.manufacturer}
    </p>
  )
}