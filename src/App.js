import Header from './components/Header/Header'; 
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import { Data } from "./data"
import Css from './main.css';
import { useState } from 'react'; 

const App = () => {

  const data = [
    {
      id: 1,
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      img: 'https://flagcdn.com/de.svg',
    },
    {
      id: 2,
      name: 'United States of America',
      population: '323,947,000',
      region: 'Americas',
      capital: 'Washington, D.C.',
      img: 'https://flagcdn.com/us.svg',
    },
    {
      id: 3,
      name: 'Brazil',
      population: '206,135,893',
      region: 'Americas',
      capital: 'Brasília',
      img: 'https://flagcdn.com/br.svg',
    },
    {
      id: 4,
      name: 'Iceland',
      population: '334,300',
      region: ' Europe',
      capital: 'Reykjavík',
      img: 'https://flagcdn.com/is.svg',
    },
    {
      id: 5,
      name: 'Afghanistan',
      population: '27,657,145',
      region: 'Asia',
      capital: 'Kabul',
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
    {
      id: 6,
      name: 'Åland Islands',
      population: '28,875',
      region: 'Europe',
      capital: 'Mariehamn',
      img: 'https://flagcdn.com/ax.svg',
    },
    {
      id: 7,
      name: 'Albania',
      population: '2,886,026',
      region: 'Europe',
      capital: 'Tirana',
      img: 'https://flagcdn.com/al.svg',
    },
    {
      id: 8,
      name: 'Algeria',
      population: '40,400,000',
      region: 'Africa',
      capital: 'Algiers',
      img: 'https://flagcdn.com/dz.svg',
    },
  ];

  let [value, setValue] = useState ("")
  function Input (e) {
     setValue(e.target.value)
  }



  // const [dates, setDates] = useState(Data)

    // let fakeData = Array(8).fill(1);
 
    return  <>
    <Header />
   <Form />
   <main>
    <div className="container">
    <ul className="d-flex flex-wrap justify-content-between">
        {
          data.map(item => (<Card img={item.img} population={item.population} region={item.region} capital={item.capital} name={item.name}/>)) 
        }

      
        <input type="text" name="text" onChange={Input}/>
        <h2>{}value</h2>
       
        
    </ul>
    </div>
   </main>
    </>
  }

  export default App;