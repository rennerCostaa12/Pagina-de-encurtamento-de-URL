import backgroundMain from '../images/illustration-working.svg'
import './Main.css'

export default function Main (props){

    return(
        <section className="container-banner">
            <div className="banner">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognation and get detailed insights on how your links are performing</p>

                <button>Get Started</button>

            </div>

            <img src={backgroundMain} alt="illustration working" />
        </section>
    )
}