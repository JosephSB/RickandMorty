import React from 'react';
import { NavLink } from 'react-router-dom';

const TargetEpisodio = (props) =>{
    return(
        <>
            <NavLink exact to={`/Episodios/${props.id}`}>
                <div className="Target-Episodio">
                    <p className="subtitle aling-start">
                        <strong>Episodio: </strong>
                        {props.episode}
                    </p>
                    <p className="subtitle aling-start">
                        <strong>{props.name}</strong>
                    </p>
                </div>
            </NavLink>
        </>
    )
}

export default TargetEpisodio