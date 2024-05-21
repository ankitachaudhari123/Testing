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
  const randreAnimal = () =>{
    return <AnimalShow type={animal} />
  }
  return (
<>
<div className='contaner'>
  <button onClick={HandleClick}>Click to Add Animal</button>
  <div className='renderedAnimals-list'>
    {randreAnimal}
  </div>
</div>
</>
  );
}

export default App;
