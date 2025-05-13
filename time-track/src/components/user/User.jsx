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
                <div>
                    <p>Report for</p>
                    <h1>{props.name}</h1>
                </div>
            </div>
            <div className="user-frequency d-flex flex-column gap-3">
                <div onClick={props.handleClick} id="daily" className={`${props.period === "daily" ? "clicked" : ""}`}>Daily</div>
                <div onClick={props.handleClick} id="weekly" className={`${props.period === "weekly" ? "clicked" : ""}`}>Weekly</div>
                <div onClick={props.handleClick} id="monthly" className={`${props.period === "monthly" ? "clicked" : ""}`}>Monthly</div>
            </div>
        </div>
        </>
    )
}