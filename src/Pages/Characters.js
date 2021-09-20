import React,{useState,useEffect} from 'react';
import BoxPagina from '../Components/BoxPagina';
import Figure from '../Components/Figure';
import Loader from '../Components/Loader';
import "../SCSS/Pages.scss"

const Characters = () =>{
    const [pagActual, setPagActual] = useState(1);
    const [drawPags, setDrawPags] = useState([]);
    const [figures, setFigures] = useState([]);
    const [loader, seLoader] = useState(false);


    useEffect(() => {
        const drawPaginas = (p) =>{
            let x = []
            for (let i = 0;i<p; i++) {
                x.push(i+1)
            }
            setDrawPags(x)
        }
        seLoader(true)
        fetch(`https://rickandmortyapi.com/api/character?page=${pagActual}`)
            .then(res=> res.json())
            .then(data =>{
                setFigures(data.results)
                let x = data.info.pages
                drawPaginas(x)
                seLoader(false)
            })

    }, [pagActual]);

    const updatePage = (e) =>{
        setPagActual(parseInt(e.target.innerHTML))
    }
    
    return(
        <div className="Content-Bg center-y flex-column">
            <div className="Box-Search">
                <input className="Input-Search" type="text" placeholder="Search Characters: " ></input>
                <button className="Btn-Search"><i className="fas fa-search"></i></button>
            </div>
            <div className="Box-Targets center flex-wrap">
                {loader 
                    ? <Loader message="Cargando Personajes"/>
                    : <>
                        {figures.map(item=> 
                        <Figure 
                        key={item.id} 
                        id={item.id} 
                        name={item.name} 
                        specie={item.species} 
                        img={item.image}
                        location={item.location.name}/>)}
                    </>
                }
            </div>
            <div className="Box-Pagination">
                <span className="subtitle">Paginas</span>
                <div className="Box-paginas center flex-wrap">
                    {
                    drawPags.map(
                        item=> 
                            <BoxPagina
                                key={item} 
                                num={item} 
                                updatePage={updatePage}
                                actual={pagActual}
                            />
                        )
                     }
                </div>
            </div>
        </div>
    )
}

export default Characters