import React,{useState} from 'react'
import List from './List/List'
import { data } from '../../StaticData/data'


const Home = () => {
  const [people, setpeople] = useState(data) 
  
  
  return (
    <main>

   <section className='container'> 
    <h1>{people.length} Birthday today</h1> 
    <List people ={people} /> 
   
    <button onClick={()=> setpeople([])}>Clear All</button>


   </section>  

    </main> 
  )
}

export default Home