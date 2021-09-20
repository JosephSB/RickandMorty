import React from 'react';

const BoxPagina =(props) =>{
    return(
        <div 
            className={props.num === props.actual ? "pagina actual" : "pagina"}
            onClick={props.updatePage}
        >
            {props.num}
        </div>
    )
}

export default BoxPagina