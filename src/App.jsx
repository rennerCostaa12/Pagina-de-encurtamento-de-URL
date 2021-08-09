import Cards from '../src/components/Cards/Cards'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import ShortenLink from './components/ShortenLink/ShortenLink'
import './App.css'


export default function App (){
    return(
        <div>
            <Header />
            <Main />
            <ShortenLink />
        </div>
    )
}