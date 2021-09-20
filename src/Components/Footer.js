import React from 'react';
import "../SCSS/Footer.scss"

const Footer = () =>{
    return(
        <footer className="Footer">
            <section className="linksFooter flex-column center">
                <div>
                    <a className="link" href="https://twitter.com/ChinoxGamerYT" rel="noreferrer noopener" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="link" href="https://www.instagram.com/josep.silvab/" rel="noreferrer noopener" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="link" href="https://www.linkedin.com/in/joseph-silva-bendezu-2882a5211/" rel="noreferrer noopener" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="link" href="https://github.com/JosephSB" rel="noreferrer noopener" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="links2">
                    <a className="link" href="https://website-josephsb.herokuapp.com/" rel="noreferrer noopener" target="_blank">
                        Creado por: <strong>JosephSB</strong>
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer