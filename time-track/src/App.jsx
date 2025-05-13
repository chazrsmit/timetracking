import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import User from './components/user/User';

function App() {

  // Attention, les variables d'état/useState doivent TOUJOURS être appelés au début.

  // Pour importer les données
  const [data, setData] = useState(null);
  
  // Pour vérifier si l'élément cliqué est "daily", "weekly" ou "monthly", on va devoir créer une variable d'état
  const [period, setPeriod] = useState("daily") 
  // on va dire que de base, on va voir les éléments "daily"

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // On vérifie que les données existent 
  if (!data) {
    return <div>Loading...</div>;
  }

  let handleClick = (e) => {
    const id = e.currentTarget.id;
    // currentTarget pour être sûre de cliquer sur le bon élément
    setPeriod(id)
  }

  return (
    <>
    <section className="section-wrapper">
      <User name="Jeremy Robson" handleClick={handleClick} period={period}/>
      {/* Important pour le design: au lieu de mettre <Card /> (ce qui créera un seul component avec toutes les cards), il faut pouvoir les manipuler in individuellement. Du coup, c'est ici qu'il faut faire le map pour avoir 6 components de cards. */}
      {/* On utilise map() pour render et boucler sur chaque élément contenu dans data.json */}
      {/* Dans ce cas-ci, on peut mettre l'index comme clé (ne marche pas toujours) */}
      {data.map((item, index) => (
        <Card key={index} item={item} period={period} />
      ))}
    </section>
    </>
  );
}

export default App;
