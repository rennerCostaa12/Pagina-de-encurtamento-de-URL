import IconFacebook from '../images/icon-facebook.svg'
import IconInstagram from '../images/icon-instagram.svg'
import IconPinterest from '../images/icon-pinterest.svg'
import IconTwitter from '../images/icon-twitter.svg'

import './Footer.css'

export default function Footer (){
    return(
        <>  
            <footer className="footer">
                <div className="container--footer">
                    <h1>Shortly</h1>
                    <div className="features">
                        <h1>Features</h1>
                        <ul>
                            <li>
                                <a href="#">Link Shortening</a>
                            </li>

                            <li>
                                <a href="#">Branded Links</a>
                            </li>

                            <li>
                                <a href="#">Analytics</a>
                            </li>
                        </ul>
                    </div>
                    <div className="resources">
                        <h1>Resources</h1>
                        <ul>
                            <li>
                                <a href="#">Blog</a>
                            </li>

                            <li>
                                <a href="#">Developers</a>
                            </li>

                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="company">
                        <h1>Company</h1>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>

                            <li>
                                <a href="#">Our Team</a>
                            </li>

                            <li>
                                <a href="#">Careers</a>
                            </li>

                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="midias-socials">
                        <a href="https://pt-br.facebook.com/">
                            <img src={IconFacebook} alt="logo-Facebooks" />
                        </a>

                        <a href="https://twitter.com/login?lang=pt">
                            <img src={IconTwitter} alt="logo-Twitter" />
                        </a>

                        <a href="https://br.pinterest.com/">
                            <img src={IconPinterest} alt="logo-Pinterest" />
                        </a>

                        <a href="https://www.instagram.com/">
                            <img src={IconInstagram} alt="logo-Instagram" />
                        </a>   
                    </div>  
                </div>   
            </footer>
        </>
    )
}