import './Buttons.css'

export default function ButtonGetStarted(props){
    return(
        <div className="button">
            <button>{props.nameButton}</button> 
        </div>
    )
}