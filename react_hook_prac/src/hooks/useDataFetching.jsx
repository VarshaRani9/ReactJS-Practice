import { useEffect, useState } from "react";
import axios from "axios"

function useDataFetching(n) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(() => { 
    // to fetch every n sec after first time fetch
    const interval = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos") 
    .then(res => { 
      setTodos(res.data.todos); 
      setLoading(false)
    }) 
    }, n*1000)

    // for first time
    axios.get("https://sum-server.100xdevs.com/todos") 
    .then(res => { 
      setTodos(res.data.todos); 
      setLoading(false)
    }) 

    return (()=>{
      clearInterval(interval)
    })
  }, [n])
  return {todos, loading}
}
export default useDataFetching
