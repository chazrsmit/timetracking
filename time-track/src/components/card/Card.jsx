import './card.css';

export default function Card({ item }) {

  return (

    <div className="card">
      <h2>{item.title}</h2>
      <p>Daily: {item.timeframes.daily.current}hrs (Prev: {item.timeframes.daily.previous}hrs)</p>
      <p>Weekly: {item.timeframes.weekly.current}hrs (Prev: {item.timeframes.weekly.previous}hrs)</p>
      <p>Monthly: {item.timeframes.monthly.current}hrs (Prev: {item.timeframes.monthly.previous}hrs)</p>
    </div>
    
  );

}
