import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRamdomAnimal(){
  const animal =["Cat","Dog","Cow","Horse","Bird","Aligeator"]
   return animal[Math.floor( Math.random()*animal.length )]
  // console.log(animal[0])
}
console.log(getRamdomAnimal())


function App() {
  const [animal, setAnimal]=useState([])

  const HandleClick = ()=>{
    setAnimal([...animal, getRamdomAnimal()]);
  }
  console.log(animal);

  const getRenderedAnimals = animal.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
      
  return (
<>
<div className='contaner'>
  <button onClick={HandleClick}>Click to Add Animal</button>
  <div className='renderedAnimals-list'>
    {getRenderedAnimals}
  </div>
</div>
</>
  );
}

export default App;
