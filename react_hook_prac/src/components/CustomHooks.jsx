/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import useDataFetching from '../hooks/useDataFetching'

function CustomHooks (){
    const {todos, loading} = useDataFetching(5)
    if(loading){
      return <div>Loading....</div>
    }
  return (
    <>{todos.map(todo => <ToDo todo={todo} />)}</>
  )
}

function ToDo({ todo }) {
  return <div>
    {todo.title}<br />
    {todo.description}
  </div>
}
export default CustomHooks
