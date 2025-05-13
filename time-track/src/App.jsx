import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import User from './components/user/User';
import json from './data.json'

function App() {

  // Attention, les variables d'état/useState doivent TOUJOURS être appelés au début.

  // Pour importer les données
  const [data] = useState(json);
  
  // Pour vérifier si l'élément cliqué est "daily", "weekly" ou "monthly", on va devoir créer une variable d'état
  const [period, setPeriod] = useState("daily")
  // on va dire que de se, on va voir les éléments "daily"

  //Light mode :
  const [isLight, setIsLight] = useState(false)

  // On vérifie que les données existent 
  if (!data) {
    return <div>Cannot find data...</div>;
  }

  let handleClick = (e) => {
    const id = e.currentTarget.id;
    // currentTarget pour être sûre de cliquer sur le bon élément
    setPeriod(id)
  }

  let lightClick = () => {
    if (!isLight) { 
      setIsLight(true)
      pMode.innerText = "Dark mode"
      pMode.style.color = "black"
      document.body.style.backgroundColor = "#F1F2EB"
    }

    else {
      setIsLight(false)
      pMode.innerText = "Light mode"
      document.body.style.backgroundColor = "hsl(226, 43%, 10%)"
      pMode.style.color = "white"
    }

  }



  return (
 
    <>
      <div className="div-mode">
        <p id="pMode" className="m-0" onClick={lightClick}>Light mode</p>
        {/* <i class="fa-regular fa-sun"></i> */}
      </div>
      <section className="section-wrapper">
        <User name="Jeremy Robson" handleClick={handleClick} period={period} isLight={isLight}/>
        {/* Important pour le design: au lieu de mettre <Card /> (ce qui créera un seul component avec toutes les cards), il faut pouvoir les manipuler in individuellement. Du coup, c'est ici qu'il faut faire le map pour avoir 6 components de cards. */}
        {/* On utilise map() pour render et boucler sur chaque élément contenu dans data.json */}
        {/* Dans ce cas-ci, on peut mettre l'index comme clé (ne marche pas toujours) */}
        {data.map((item, index) => (
          <Card key={index} item={item} period={period} isLight={isLight}/>
        ))}
      </section>
    </>
  
  );
}

export default App;
