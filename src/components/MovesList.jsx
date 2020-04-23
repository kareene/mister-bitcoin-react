import React from 'react';
import moment from 'moment';

export function MovesList(props) {
    const { moves, toContact } = props;

    if (!moves.length) return false;
 
    // Contact Details Page List
    if (toContact) {
        const title = `Your Moves to ${toContact}:`;
        return (
            <section className="MovesList">
                <h3>{title}</h3>
                <ul>
                    {moves.map(move => (
                        <li key={move.at}>
                            <p>At: {moment(move.at).format('MMM Do YYYY, h:mm:ss a')}</p>
                            <p>Amount: {move.amount} coins</p>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
    
    // Home Page List
    const maxMovesToDisplay = 5;
    const title = `Your Last ${maxMovesToDisplay} Moves:`;
    return (
        <section className="MovesList">
            <h3>{title}</h3>
            <ul>
                {[...moves].slice(0, maxMovesToDisplay).map(move => (
                    <li key={move.at}>
                        <p>To: {move.to}</p>
                        <p>At: {moment(move.at).format('MMM Do YYYY, h:mm:ss a')}</p>
                        <p>Amount: {move.amount} coins</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MovesList;
