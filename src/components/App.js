
import React,{useState,useEffect} from "react";
import './../styles/App.css';

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {
   let [search, setSearch] = useState("")
   let [filtered, setFiltered] = useState(fruits)

    useEffect(()=>{
      setFiltered(fruits.filter(value=> value.includes(search)))
    },[search])

  return (
    <div>
       <input type="text" placeholder="search..."
          onChange={e => setSearch(e.target.value)}
       />
      <ul>
        {filtered.map(value =>(
             <li>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
