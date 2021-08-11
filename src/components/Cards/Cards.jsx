import './Card.css'
import FullyCustomizable from '../images/icon-fully-customizable.svg'
import DetailedRecords from '../images/icon-detailed-records.svg'
import BrandRecognition from '../images/icon-brand-recognition.svg'

export default function Cards (){
    return(
        <div className="container-cards">
            <div className="card" style={{marginBottom: '10.5%'}}>
                <img src={BrandRecognition} alt="Brand-Recognition"/>
                <h1>Brand Recognition</h1>
                <p>
                    Boost your brand recognition with each click. Generic links don't mean a thing. 
                    Branded links help instil confidence in your content.
                </p>
            </div>
            <div className="card" style={{marginBottom: '5.5%'}}>
                <img src={DetailedRecords} alt="Brand-Recognition"/>
                <h1>Detailed Records</h1>
                <p>
                    Gain insights into who is clicking your links. Knowing when and where people engage with
                    your content helps inform better decisions.
                </p>
            </div>
            <div className="card">
                <img src={FullyCustomizable} alt="Brand-Recognition"/>
                <h1>Fully Customizable</h1>
                <p>
                    Improve brand awareness and content discoverability throug customizable links, 
                    supercharging audience engagement
                </p>
            </div>
        </div>
    )
}