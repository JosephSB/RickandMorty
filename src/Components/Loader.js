import React from 'react'

const Loader = (props) =>{
    return(
        <div className="center flex-column">
            <div className="preloader"></div>
            <p className="subtitle">{props.message}</p>
        </div>
    )
}

export default Loader