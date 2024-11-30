export default function Flugzeuge() {

    const lfzs = [
        {
        id: 1,
        kennzeichen: 'D-5318',
        modell: 'Ka6CR',
        hersteller: 'Alexander Schleicher'
        },
        {
        id: 2,
        kennzeichen: 'D-7600',
        modell: 'Twin Astir',
        hersteller: 'Grob'
        },
    ];
    return (
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
  );
}