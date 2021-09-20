import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import Loader from '../Components/Loader';
import TargetResidents from '../Components/TargetResidents';
import BtnBack from '../Components/Btn_back';
import "../SCSS/Pages.scss"

const InfoEpisode = () =>{
    const [loader, seLoader] = useState(false);
    const [data, setData] = useState({});
    const [characters, setCharacters] = useState([]);
    let {name} = useParams()

    useEffect(() => {
        seLoader(true)
        const SearchCharacters =(character) =>{
            character.forEach(element => {
                fetch(element)
                    .then(res=> res.json())
                    .then(data =>{
                        setCharacters((resident)=> [...resident, data])
                    })
            });
            seLoader(false)
        }
        fetch(`https://rickandmortyapi.com/api/episode/${name}`)
            .then(res=> res.json())
            .then(data =>{
                setData(data)
                SearchCharacters(data.characters)
            })
    }, []);

    return (
        <div className="Content-Bg center flex-column">
            {loader 
                ? <Loader message="Buscando Informacion"/>
                : 
                <>
                    <div className="Header-InfoEpisode center flex-column">
                        <p className="subtitle aling-start size-25">
                            <strong>{data.name}</strong>
                        </p>
                        <p className="subtitle aling-start">
                            {data.episode}
                        </p>
                        <p className="subtitle aling-start">
                            {data.air_date} 
                        </p>
                    </div>
                    <BtnBack direction="/Episodios"/>
                    <p className="subtitle aling-start">Personajes: </p>
                    <div className="Content-Figures-Residents center flex-wrap">
                        {characters.length > 0 
                            ? characters.map(
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
export default InfoEpisode