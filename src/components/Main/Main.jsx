import backgroundMain from '../images/illustration-working.svg'
import backgroundShorten from '../images/bg-shorten-desktop.svg'
import Cards from '../Cards/Cards'
import './Main.css'
import './ShortenLink.css'

import { useState } from 'react'

export default function Main (props){

    const [URLInsert, SetURLInset] = useState('')

    function quandoMudar(e){
        SetURLInset(e.target.value)
    }

    function getLink(){
        alert('funcionou')
        const URL = `https://api.shrtco.de/v2/shorten?url=${URLInsert}.org/very/long/link.html`
        fetch(URL)
        .then(response => response.json())
        .then(retorno => {
        console.log(retorno.result)
            {
                let links = document.getElementById('content-link')
                let myDiv = document.createElement('div')
                let linkNormal = document.createElement('h5')
                let linkCurto = document.createElement('h6')
                let buttonCopy = document.createElement('button')

                buttonCopy.innerHTML = `Copy`
                linkNormal.innerHTML = `${retorno.result.original_link}</a>`
                linkCurto.innerHTML = `<a href="https://${retorno.result.short_link}">https://${retorno.result.short_link}</a>`

                myDiv.appendChild(linkNormal)
                myDiv.appendChild(linkCurto)
                myDiv.appendChild(buttonCopy)
                links.appendChild(myDiv)

            }
        
        }) 
    }

    return(
        <>
            <section className="container--banner">
                <div className="banner">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognation and get detailed insights on how your links are performing</p>

                    <button>Get Started</button>

                </div>

                <img className="img-banner" src={backgroundMain} alt="illustration working" />
            </section>

            <div>
                <div className="container-shortenlink" style={{backgroundImage:`url(${backgroundShorten})`}}>
                    <input type="text" name="shortenLink" placeholder="Shorten a link here..." 
                    value={URLInsert} 
                    onChange={quandoMudar}/>                
                    <button onClick={getLink}>Shorten It!</button>
                </div>

                
            </div>
        
            <section className="container--Advanced-Statistics">
                <div id="content-link">
                </div>

                <div className="banner--advanced-statistics">
                    <h1>Advanced Statistics</h1>
                    <p>
                        Track how your links are performing across the web with our advanced statistics dashboard
                    </p>
                </div>

                <Cards />
            </section>
        </>
    )
}