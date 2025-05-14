import './card.css';

export default function Card({ item, period, isLight }) {

  return (

    <div className={`cards
    ${item.title === "Work" ? "work" : ""}
    ${item.title === "Play" ? "play" : ""}
    ${item.title === "Study" ? "study" : ""}
    ${item.title === "Exercise" ? "exercise" : ""}
    ${item.title === "Social" ? "social" : ""}
    ${item.title === "Self Care" ? "self-care" : ""}
    `}>
        <div className={`card-top
        ${item.title === "Work" ? "work" : ""}
        ${item.title === "Play" ? "play" : ""}
        ${item.title === "Study" ? "study" : ""}
        ${item.title === "Exercise" ? "exercise" : ""}
        ${item.title === "Social" ? "social" : ""}
        ${item.title === "Self Care" ? "self-care" : ""}
        `}></div>
        <div className={`card-body ${isLight === true ? "light" : ""}`}>

            <div className="d-flex justify-content-between align-items-center">
                <h6>{item.title}</h6>
                <div className="d-flex align-items-center">
                  <p className="dots">...</p>
                </div>
            </div>

            {/* On met 3 conditions dans la card : en fonction de l'état de la variable "period", c'est une div avec des données spécifiques qui s'affiche. */}

            {period === "daily" && (
              <div className="times">
                <div className="div-hours">
                  <h1>{item.timeframes.daily.current}hrs</h1>
                </div>
                <div className="last">
                  <p>Last week:</p>
                  <p>&nbsp;{item.timeframes.daily.previous}hrs</p>
                </div>
              </div>
            )}

            {period === "weekly" && (
              <div className="times">
                <div className="div-hours">
                  <h1>{item.timeframes.weekly.current}hrs</h1>
                </div>
                <div className="last">
                  <p>Last week:</p>
                  <p>&nbsp;{item.timeframes.weekly.previous}hrs</p>
                </div>
              </div>
            )}

            {period === "monthly" && (
              <div className="times">
                <div className="div-hours">
                  <h1>{item.timeframes.monthly.current}hrs</h1>
                </div>
                <div className="last">
                  <p>Last week:</p>
                  <p>&nbsp;{item.timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            )}

        </div>
    </div>

  );

}
