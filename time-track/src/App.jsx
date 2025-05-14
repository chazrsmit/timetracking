import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import User from './components/user/User';
import json from './data.json';
import json2 from './data2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {

  // Attention, les variables d'état/useState doivent TOUJOURS être appelés au début.

  // Pour importer les données de Jeremy
  const [data] = useState(json)

  // Les données de l'user 2 (Charlotte)
  const [data2] = useState(json2)
  
  // Pour vérifier si l'élément cliqué est "daily", "weekly" ou "monthly", on va devoir créer une variable d'état
  const [period, setPeriod] = useState("daily")
  // on va dire que par défault, on va voir les éléments "daily"

  //Light mode :
  const [isLight, setIsLight] = useState(false)

  // Choix du user :
  const [aUser, setUser] = useState("Jeremy")

  // On vérifie que les données existent 
  if (!data) {
    return <div>Cannot find data...</div>
  }

  if (!data2) {
    return <div>Cannot find data...</div>
  }

  // Fonction pour sélectionner la fréquence des données :
  let handleClick = (e) => {
    const id = e.currentTarget.id;
    // currentTarget pour être sûre de cliquer sur le bon élément
    setPeriod(id)
  }

  // Fonction pour activer le light mode :
  let lightClick = () => {
    if (!isLight) { 
      setIsLight(true)
      document.body.style.backgroundColor = "#EEE1E7"
    }

    else {
      setIsLight(false)
      document.body.style.backgroundColor = "hsl(226, 43%, 10%)"
    }

  }

  // Fonction pour changer de user (dans ce cas-ci on a que 2 users donc ça va être dans un esprit toggle):

  let changeUser = () => {
    if (aUser === "Jeremy") {
      setUser("Charlotte")
      console.log("Charlotte")
    }

    else {
      setUser("Jeremy")
      console.log("Jeremy")
    }
  }

  return (
 
    <>
      <div className="div-mode">
        <div className="toggle-div px-1 py-1" onClick={lightClick}>
          <FontAwesomeIcon className={`icon-toggle1 ${isLight? 'hidden' : ''}`} icon={faSun} />
          <FontAwesomeIcon className={`icon-toggle2 ${isLight? '' : 'hidden'}`} icon={faMoon} />
        </div>
      </div>

      <section className="section-wrapper">

        {aUser === "Jeremy" && (
          <>
            <User name="Jeremy Robson" handleClick={handleClick} period={period} isLight={isLight} changeUser={changeUser} />
            {data.map((item, index) => (
              <Card key={index} item={item} period={period} isLight={isLight}/>
            ))}
          </>
        )}
        {/* <User name="Jeremy Robson" handleClick={handleClick} period={period} isLight={isLight} changeUser={changeUser} /> */}
        {aUser === "Charlotte" && (
          <>
            <User name="Charlotte Smit" handleClick={handleClick} period={period} isLight={isLight} changeUser={changeUser}/>
            {data2.map((item, index) => (
              <Card key={index} item={item} period={period} isLight={isLight}/>
            ))}
          </>
        )}
        {/* <User name="Charlotte Smit" handleClick={handleClick} period={period} isLight={isLight} changeUser={changeUser}/> */}


        {/* Important pour le design: au lieu de mettre <Card /> (ce qui créera un seul component avec toutes les cards), il faut pouvoir les manipuler in individuellement. Du coup, c'est ici qu'il faut faire le map pour avoir 6 components de cards. */}
        {/* On utilise map() pour render et boucler sur chaque élément contenu dans data.json (un peu comme un forEach) */}
        {/* Dans ce cas-ci, on peut mettre l'index comme clé (ne marche pas toujours) */}
      



      </section>
    </>
  
  );
}

export default App;
