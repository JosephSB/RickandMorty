import React from 'react';

const TargetResidents = (props) =>{

    const redirect = (ruta) =>{
        window.location.href = ruta
    }
    return(
        <div onClick={() => redirect(`/Personajes/${props.id}`)}>
            <figure className="Figure-Residents">
                <img src={props.img} alt={props.name} className="Img-Resident"></img>
            </figure>
        </div>
    )
}

export default TargetResidents