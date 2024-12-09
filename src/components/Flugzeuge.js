import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Flugzeug from './Flugzeug'

// const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
//const BASE_API_URL = 'http://localhost:5000'
const BASE_API_URL = ''

export default function Flugzeuge() {
    const [lfzs, setLfz] = useState();

    useEffect(() => {
        (async () => {
          const response = await fetch(BASE_API_URL + '/api/planes/');
          if (response.ok) {
            const results = await response.json();
            console.log(results);
            setLfz(results);
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
          {lfzs.length === null ?
                    <p>Kann Flugzeuge nicht abrufen</p>
          :
            <>
                {lfzs.length === 0 ?
                    <p>Noch keine Flugzeuge angelegt.</p>
                :
                lfzs.map(
                  lfz => <Flugzeug key={lfz.id} lfz={lfz} />
                )
                }
            </>
          }
        </>
      }
    </>
    );
}