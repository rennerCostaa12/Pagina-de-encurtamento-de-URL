import { useState } from 'react'
import backgroundShorten from '../images/bg-shorten-desktop.svg'
import './ShortenLink.css'

export default function ShortenLink(){

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
            linkNormal.innerHTML = `${retorno.result.original_link}`
            linkCurto.innerHTML = `${retorno.result.short_link2}`

            
            myDiv.appendChild(linkNormal)
            myDiv.appendChild(linkCurto)
            myDiv.appendChild(buttonCopy)
            links.appendChild(myDiv)

        }
    }) 
    }

    return(
        <section>
            <div className="container-shortenlink" style={{backgroundImage:`url(${backgroundShorten})`}}>
                <input type="text" name="shortenLink" placeholder="Shorten a link here..." 
                value={URLInsert} 
                onChange={quandoMudar}/>                
                <button onClick={getLink}>Shorten It!</button>
            </div>

          
            <div id="content-link">

            </div>
            
            
        </section>
    )
}