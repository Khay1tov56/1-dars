import Header from './components/Header/Header'; 
import Form from './components/Form/Form';
import Card from './components/Card/Card';
// import Css from './main.css';
import { useState, useEffect } from 'react'; 

const App = () => {

  let [value, setValue] = useState("")
  let [selecvalue, setSelecValue] = useState("")
  let [loading, setLoading] = useState(true)
  let [isError, setIsError] = useState(false)


  const [data, setData] = useState({
    isLoading: true,
    data: [],
    isError: false,
  })

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${value ? `name/${value}`: selecvalue ? `region/${selecvalue}`: "all"}`)
  .then(response => response.json())
  .then(data => {
    setData({
      isLoading:false,
      data: data,
      isError:false,
    })
 

  })
  .catch((err) => {
    setData ({
      isLoading:false,
      isError :true,
      data: []
    })
    console.log(err);
  })
  }, [value, selecvalue])

  


    // let fakeData = Array(8).fill(1);
  
  const inputValue = (text) => {
    setValue(text);
    setSelecValue("")
  }

  const selectValue = (value) => {
    setSelecValue(value);
    setValue("")
  }

    return  <>
    <Header />
   <Form getValue={inputValue} getSelect={selectValue}/>
   <main>
    <div className="container">
      {data.isLoading && <h1>Loading...</h1>}
      {data.isError && <h1>Error...</h1>}
      {data.data.length !== 0 && (
    <ul className="d-flex flex-wrap justify-content-between">

{
          data.data.map(item => {
            
          return <Card
             img={item.flags.svg}
              population={item.population}
               region={item.region}
                capital={item.capital}
                 name={item.name.common}/>}) 
        }
      
       
        
    </ul>
      )}
    </div>
   </main>
    </>
  }

  export default App;