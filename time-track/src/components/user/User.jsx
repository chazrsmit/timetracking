import './user.css'
import img from '../../time-tracking-dashboard-main/images/image-jeremy.png'

export default function User(props) {

    return(
        <>
        <div className="user">
            <div className="user-infos">
                <div className="div-img">
                    <img src={img} alt={props.name} />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <p className="m-0">Report for</p>
                    <h1 className="m-0">{props.name}</h1>
                </div>
            </div>
            <div className="user-frequency gap-3">
                <div onClick={props.handleClick} id="daily" className={`${props.period === "daily" ? "clicked" : ""}`}>Daily</div>
                <div onClick={props.handleClick} id="weekly" className={`${props.period === "weekly" ? "clicked" : ""}`}>Weekly</div>
                <div onClick={props.handleClick} id="monthly" className={`${props.period === "monthly" ? "clicked" : ""}`}>Monthly</div>
            </div>
        </div>
        </>
    )
}