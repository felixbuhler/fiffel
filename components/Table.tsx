import React from 'react'

function Table() {
    return (
        <div className='table grid-cols-3 grid'>
            <div className='column name col-span-1'>
                <div className='tablerow'>&nbsp;</div>
                <div className='tablerow'>
                    <dice className='einser'></dice>
                    <dice className='einser'></dice>
                    <dice className='einser'></dice>
                </div>
                <div className='tablerow'>
                    <dice className='zweier'></dice>
                    <dice className='zweier'></dice>
                    <dice className='zweier'></dice>
                </div>
                <div className='tablerow'>
                    <dice className='dreier'></dice>
                    <dice className='dreier'></dice>
                    <dice className='dreier'></dice>
                </div>
                <div className='tablerow'>
                    <dice className='vierer'></dice>
                    <dice className='vierer'></dice>
                    <dice className='vierer'></dice>
                </div>
                <div className='tablerow'>
                    <dice className='fuenfer'></dice>
                    <dice className='fuenfer'></dice>
                    <dice className='fuenfer'></dice>
                </div>
                <div className='tablerow double-border'>
                    <dice className='sechser'></dice>
                    <dice className='sechser'></dice>
                    <dice className='sechser'></dice>
                </div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>Gesamt</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>Bonus bei 63 oder mehr</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>Gesamter oberer Teil</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow separator'></div>
                <div className='tablerow'>Dreierpasch</div>
                <div className='tablerow'>Viererpasch</div>
                <div className='tablerow'>Full-House</div>
                <div className='tablerow'>Kleine Straße</div>
                <div className='tablerow'>Große Straße</div>
                <div className='tablerow'>Kniffel</div>
                <div className='tablerow double-border'>Chance</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>Gesamter unterer Teil</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>Gesamter oberer Teil</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>Endsumme</div>
                <div className='tablerow separator-small'></div>
            </div>
            <div className='column description col-span-1'>
                <div className='tablerow'>&nbsp;</div>
                <div className='tablerow'>Nur Einser zählen</div>
                <div className='tablerow'>Nur Zweier zählen</div>
                <div className='tablerow'>Nur Dreier zählen</div>
                <div className='tablerow'>Nur Vierer zählen</div>
                <div className='tablerow'>Nur Fünfer zählen</div>
                <div className='tablerow double-border'>Nur Sechser zählen</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>&rarr;</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>Plus 35</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>&rarr;</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow separator'></div>
                <div className='tablerow'>Alle Augen zählen</div>
                <div className='tablerow'>Alle Augen zählen</div>
                <div className='tablerow'>25 Punkte</div>
                <div className='tablerow'>30 Punkte</div>
                <div className='tablerow'>40 Punkte</div>
                <div className='tablerow'>50 Punkte</div>
                <div className='tablerow double-border'>Alle Augen zählen</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>&rarr;</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>&rarr;</div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'>&rarr;</div>
                <div className='tablerow separator-small'></div>
            </div>
            <div className='column player col-span-1'>
                <div className='tablerow'>
                    <input placeholder='Name'></input>
                </div>
                <div className='tablerow'><input placeholder='Einser'></input></div>
                <div className='tablerow'><input placeholder='Zweier'></input></div>
                <div className='tablerow'><input placeholder='Dreier'></input></div>
                <div className='tablerow'><input placeholder='Vierer'></input></div>
                <div className='tablerow'><input placeholder='Fünfer'></input></div>
                <div className='tablerow double-border'><input placeholder='Sechser'></input></div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'><i>Ergebnis Gesamt</i></div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'><i>+ Bonus</i></div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow double-border'><i>Gesamt oben</i></div>
                <div className='tablerow separator-small'></div>
                <div className='tablerow separator'></div>
                <div className='tablerow'><input placeholder='Dreierpasch'></input></div>
                <div className='tablerow'><input placeholder='Viererpasch'></input></div>
                <div className='tablerow'><input placeholder='Full-House'></input></div>
                <div className='tablerow'><input placeholder='Kleine Straße'></input></div>
                <div className='tablerow'><input placeholder='Große Straße'></input></div>
                <div className='tablerow'><input placeholder='Kniffel'></input></div>
                <div className='tablerow double-border'><input placeholder='Chance'></input></div>
                <div className='tablerow separator-small'></div>

                <div className='tablerow double-border'><i>Gesamt unten</i></div>
                <div className='tablerow separator-small'></div>

                <div className='tablerow double-border'><i>+ Gesamt oben</i></div>
                <div className='tablerow separator-small'></div>

                <div className='tablerow double-border'><i>Endsumme</i></div>
                <div className='tablerow separator-small'></div>

            </div>
        </div>
    )
}

export default Table