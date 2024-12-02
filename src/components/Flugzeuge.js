import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

// const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
const BASE_API_URL = 'http://localhost:5000'


export default function Flugzeuge() {
    const [lfzs, setLfz] = useState();

    // const lfzs = [
    //     {
    //     id: 1,
    //     kennzeichen: 'D-5318',
    //     modell: 'Ka6CR',
    //     hersteller: 'Alexander Schleicher'
    //     },
    //     {
    //     id: 2,
    //     kennzeichen: 'D-7600',
    //     modell: 'Twin Astir',
    //     hersteller: 'Grob'
    //     },
    // ];
    useEffect(() => {
        (async () => {
          const response = await fetch(BASE_API_URL + '/api/planes');
          if (response.ok) {
            const results = await response.json();
            setLfz(results.data);
          }
          else {
            setLfz(null);
          }
        })();
      }, []);
    return (
      <>
      {lfzs === undefined ?
        <Spinner animation="border" />
      :
        <>
            {lfzs.length === 0 ?
                <p>Noch keine Flugzeuge angelegt.</p>
            :
            lfzs.map(lfz =>{
                return(
                <p key={lfz.id}>
                    <b>{lfz.kennzeichen}</b> &mdash; {lfz.modell}
                    <br />
                    {lfz.hersteller}
                </p>
                );
            })
            }
        </>
      }
    </>
    );
}