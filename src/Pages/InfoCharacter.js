import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import BtnBack from '../Components/Btn_back';
import Loader from '../Components/Loader';
import TargetResidents from '../Components/TargetResidents';
import TargetEpisodio from '../Components/Target_Episodio';
import "../SCSS/Pages.scss"

const InfoCharacter =()=>{
    const [loader, seLoader] = useState(false);
    const [dataCharacter, setDataCharacter] = useState({});
    const [location, setLocation] = useState();
    const [episodios, setEpisodios] = useState([]);
    const [similarCharact, setSimilarCharact] = useState([]);
    let {name} = useParams()


    useEffect(() => {
        seLoader(true)
        const getSimilarCharacters = (specie) =>{
            let x = 0
            fetch(`https://rickandmortyapi.com/api/character/?species=${specie}`)
                .then(res=> res.json())
                .then(data =>{
                    if(x <=5) setSimilarCharact(data.results)
                    x++;
                })
        }
        const getEpisodios = (episode) =>{
            episode.forEach(element => {
                fetch(element)
                    .then(res=> res.json())
                    .then(data =>{
                        setEpisodios((ep)=> [...ep, data])
                    })
            });
            seLoader(false)
        }
        fetch(`https://rickandmortyapi.com/api/character/${name}`)
            .then(res=> res.json())
            .then(data =>{
                setDataCharacter(data)
                getEpisodios(data.episode)
                getSimilarCharacters(data.species)
                setLocation(data.location.name)
            })

    },[]);

    return(
        <div className="Content-Bg center flex-wrap">
            {loader 
                ? <Loader message="Buscando Informacion"/>
                :
                <>
                    <div className="Box-BigImg">
                        <img className="Img-InfoCharacter" src={dataCharacter.image} alt={dataCharacter.name}></img>
                    </div>
                    <div className="Box-InfoCharacter">
                        <BtnBack direction="/Personajes"/>
                        <p className="subtitle aling-start">Datos sobre <strong>{dataCharacter.name}</strong></p>
                        <div className="Box-Informacion center flex-wrap">
                            <div className="Box-Info">
                                <p className="subtitle aling-start">
                                    <strong>Name: </strong>
                                    {dataCharacter.name}
                                </p>
                                <p className="subtitle aling-start">
                                    <strong>Specie: </strong>
                                    {dataCharacter.species}
                                </p>
                                <p className="subtitle aling-start">
                                    <strong>Location: </strong>
                                    {location}
                                </p>
                            </div>
                            <div className="Box-Info">
                                <p className="subtitle aling-start">
                                    <strong>Gender: </strong>
                                    {dataCharacter.gender}
                                </p>
                                <p className="subtitle aling-start">
                                    <strong>Status: </strong>
                                    {dataCharacter.status}
                                </p>
                                <p className="subtitle aling-start">
                                    <strong>Created: </strong>
                                    {new Date(dataCharacter.created).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <p className="subtitle aling-start">Episodios en los que aparece</p>
                        <div className="Box-Informacion-episode center flex-wrap">
                        {
                        episodios.map(
                            ep => 
                                <TargetEpisodio 
                                    key={ep.id+ep.id} 
                                    id={ep.id}
                                    episode={ep.episode}
                                    name={ep.name}
                                /> 
                            )
                        }
                        </div>
                    </div>
                </>
            }
            <p className="subtitle aling-start">Algunos personajes de la especie <strong>{dataCharacter.species}</strong></p>
            <div className="Box-Informacion-episode center flex-wrap">
                {similarCharact.length > 0 
                    ? similarCharact.map(
                        item => 
                            <TargetResidents
                                key={item.id+Date.now()}
                                id={item.id}
                                name={item.name}
                                img={item.image}
                            />
                        )
                    : <p className="subtitle aling-start">
                        <strong>No se encontro personajes similares</strong>
                    </p>
                }
            </div>
        </div>
    )
}
/*{episodios.map(ep => )}*/
export default InfoCharacter