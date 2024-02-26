import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   const name = "Zikria Chuhan";
   const [bulb, setBulb] = useState(true)

   function offon(){
    setBulb(!bulb)
   }


   const bulbOnsrc = 'https://e7.pngegg.com/pngimages/818/355/png-clipart-yellow-light-bulb-incandescent-light-bulb-lighting-invention-yellow-light-bulb-led-lamp-light.png' 
   const bulbOffsrc = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png'



   const obj = {
    name: "Hello world Object"
   };

   const data  = ['We', 'are', 'united'];

   const list = [{
    name: 'Hello World 1'
   }, {
    name: 'Hello World 2'
  }, {
    name: 'Hello World 3'

  }];

  const complex = [{
    company: 'XYZ', 
    jobs: ['Javascript','React']
  }, {
    company: 'ABC', 
    jobs: ['AngularJS','Ionic']
  }];

  return (
    <div className="App">
      <h1>{name}</h1>
      <p>{obj.name}</p>
      <ul>
        {data.map(function(i){
          return <li>{i}</li>
        })}
      </ul>
      <h2>Object</h2>
      <ul>
        {list.map(function(i){
          return <li>{i.name}</li>
        })}
      </ul>
      <table border='2' > 
          <tr> <th>company</th> <th colspan="2">Job</th> </tr>
          {complex.map(function(i){
          return <tr>
            <td>{i.company}</td>
            <td>{i.jobs[0]}</td>
            <td>{i.jobs[1]}</td>
          </tr>
        })}
      </table>

 
      <img src={bulb ? bulbOnsrc : bulbOffsrc } width='200px' height='200px' /><br />
      <button onClick={offon}>switch</button>
      
      
    </div>      
         );
}

export default App;
