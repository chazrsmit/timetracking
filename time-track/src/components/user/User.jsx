import './user.css'
import img from '../../time-tracking-dashboard-main/images/image-jeremy.png'
import img2 from '../../time-tracking-dashboard-main/images/image-random.png'

export default function User(props) {

    return(
        <>
        <div className={`user ${props.isLight === true ? "light" : ""}`}>
            <div className={`user-infos ${props.isLight === true ? "light" : ""}`}>
                <div className="userInfos-div1">
                    <div className="div-img">
                        {props.aUser === "Jeremy" && (
                        <img src={img} alt={props.name} />
                        )}
                        {props.aUser === "Charlotte" && (
                        <img src={img2} alt={props.name} />
                        )}
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className="m-0">Report for</p>
                        <h1 className="m-0">{props.name}</h1>
                    </div>
                </div>
                <div className="userInfos-div2">
                    <div className="div-change">
                        <p onClick={props.changeUser}>Switch user</p>   
                    </div>
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