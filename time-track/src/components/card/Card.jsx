import './card.css';

export default function Card({ item, period }) {

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
        <div className="card-body">

            <div className="d-flex justify-content-between align-items-center">
                <h6>{item.title}</h6>
                <div className="d-flex align-items-center">
                  <p className="dots">...</p>
                </div>
            </div>

            {period === "daily" && (
              <div className="times">
                <h1>{item.timeframes.daily.current}hrs</h1>
                <p className="last">Last week: {item.timeframes.daily.previous}hrs</p>
              </div>
            )}

            {period === "weekly" && (
              <div className="times">
                <h1>{item.timeframes.weekly.current}hrs</h1>
                <p className="last">Last week: {item.timeframes.weekly.previous}hrs</p>
              </div>
            )}

            {period === "monthly" && (
              <div className="times">
                <h1>{item.timeframes.monthly.current}hrs</h1>
                <p className="last">Last week: {item.timeframes.monthly.previous}hrs</p>
              </div>
            )}

            {/* <p className={`${period === "daily"} ? '' : 'none'`}>{item.timeframes.daily.current}hrs (Prev: {item.timeframes.daily.previous}hrs)</p>
            <p className={`${period === "weekly"} ? '' : 'none'`}>{item.timeframes.weekly.current}hrs (Prev: {item.timeframes.weekly.previous}hrs)</p>
            <p className={`${period === "monthly"} ? '' : 'none'`}>{item.timeframes.monthly.current}hrs (Prev: {item.timeframes.monthly.previous}hrs)</p> */}
        </div>
    </div>

  );

}
