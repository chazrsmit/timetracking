import './user.css'
import img from '../../time-tracking-dashboard-main/images/image-jeremy.png'

export default function User(props) {

    return(
        <>
        <div className={`user ${props.isLight === true ? "light" : ""}`}>
            <div className="user-infos">
                <div className="div-img">
                    <img src={img} alt={props.name} />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <p className="m-0">Report for</p>
                    <h1 className="m-0">{props.name}</h1>
                </div>
            </div>
            <div className={`user-frequency gap-3 ${props.isLight === true ? "light" : ""}`}>
                <div onClick={props.handleClick} id="daily" className={`
                    ${props.period === "daily" ? "clicked" : ""}
                    ${props.isLight? 'light' : ''}`}>Daily</div>
                <div onClick={props.handleClick} id="weekly" className={`
                    ${props.period === "weekly" ? "clicked" : ""}
                    ${props.isLight? 'light' : ''}`}>Weekly</div>
                <div onClick={props.handleClick} id="monthly" className={`
                    ${props.period === "monthly" ? "clicked" : ""}
                    ${props.isLight? 'light' : ''}`}>Monthly</div>
            </div>
        </div>
        </>
    )
}