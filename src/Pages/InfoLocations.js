import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import Loader from '../Components/Loader';
import "../SCSS/Pages.scss"
import TargetResidents from '../Components/TargetResidents';
import BtnBack from '../Components/Btn_back';

const InfoLocations = () =>{
    const [loader, seLoader] = useState(false);
    const [dataCharacter, setDataCharacter] = useState({});
    const [residents, setResidents] = useState([]);
    let {name} = useParams()

    useEffect(() => {
        seLoader(true)
        const SearchResidents =(residents) =>{
            residents.forEach(element => {
                fetch(element)
                    .then(res=> res.json())
                    .then(data =>{
                        setResidents((resident)=> [...resident, data])
                    })
            });
            seLoader(false)
        }

        fetch(`https://rickandmortyapi.com/api/location/${name}`)
            .then(res=> res.json())
            .then(data =>{
                setDataCharacter(data)
                SearchResidents(data.residents)
            })
    }, []);
    return(
        <div className="Content-Bg center-x flex-wrap">
            {loader 
                ? <Loader message="Buscando Informacion"/>
                :
                <>
                    <div className="Aside-Info center flex-column start">
                        <i className="fas fa-globe-europe fa-8x"></i>
                        <div className="Box-Info">
                            <p className="subtitle aling-start">
                                <strong>Dimension: </strong>
                                {dataCharacter.dimension}
                            </p>
                            <p className="subtitle aling-start">
                                <strong>Tipo: </strong>
                                {dataCharacter.type}
                            </p>
                            <p className="subtitle aling-start">
                                <strong>Nombre: </strong>
                                {dataCharacter.name}
                            </p>
                            <p className="subtitle aling-start">
                                <strong>Creacion: </strong>
                                {new Date(dataCharacter.created).toLocaleDateString()}
                            </p>
                            <BtnBack direction="/Locaciones"/>
                        </div>
                    </div>
                    <div className="Content-Figures-Residents center flex-wrap">
                        {residents.length > 0 
                            ? residents.map(
                                item => 
                                <TargetResidents
                                key={item.id+item.id}
                                id={item.id}
                                name={item.name}
                                img={item.image}
                                />
                                )
                            : <p className="subtitle aling-start">
                                <strong>No se encontro residentes</strong>
                            </p>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default InfoLocations