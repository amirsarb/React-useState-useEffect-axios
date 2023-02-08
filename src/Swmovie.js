import React,{useState,useEffect} from 'react'
import axios from 'axios'

 function Swmovie() {
const [item,setItem] = useState(1)
const [movie,setMovie] = useState("")



 useEffect(()=>{
async function fetchData(){
    const res = await axios.get(`https://swapi.dev/api/films/${item}`)
    setMovie(res.data)
    console.log(res.data)
}
fetchData() 

},[item])



  return (
    <div>
        <h1>Pich a movie number:</h1>
        <select value={item} onChange={(e)=>{setItem(e.target.value)}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        </select>
        
        <div style={{textAlign:"-webkit-center"}}>
           <h3> Your movie is : <span style={{color:'darkgreen'}}>{movie.title }</span>  </h3>
           <h3>Director is : <span style={{color:'darkgreen'}}>{movie.director }</span> </h3>
           <h3>Opning Crawl is :</h3> <p style={{color:'darkgreen',width:"40%"}}>{movie.opening_crawl }</p> 
        </div>
        <div>

        </div>
        </div>
        
  )
}

export default Swmovie
