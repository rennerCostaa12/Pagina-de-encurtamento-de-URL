import Button from '../Button/Button'
import './Header.css'

export default function Header (){
    return(
        <>
            <header className="header">
                <nav>
                    <div className="logo-and-nav">
                        <h1>Shortly</h1>

                        <ul>
                            <li>
                                <a href="#">Features</a>
                            </li>

                            <li>
                                <a href="#">Pricing</a>
                            </li>

                            <li>
                                <a href="#">Resources</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="buttons"> 
                        <button>Login</button>
                        <button style={{background:'#35CDD0', color:'white'}}>Sign Up</button>
                    </div>    
                </nav>
            </header>
        </>
    )
}