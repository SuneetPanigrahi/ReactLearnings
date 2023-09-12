import { useQuery,useMutation } from '@tanstack/react-query'
import './App.css'
import Posts from './components/Posts'

function App() {
let {data,isLoading,isError}=useQuery({
  queryKey:["posts"],
  queryFn:()=>wait(1000).then(async()=>await(await fetch("http://localhost:3000/posts")).json())
}) 

console.log("DATA",data)
if(isLoading){
  return <h1>Loading...</h1>
}

if(isError){
  return <h1>Something is wrong</h1>
}
  return (
    <div>
      <h1>Add Posts</h1>
      <Posts/>
       <h1>Posts</h1>
       {
        data && data?.map((post)=><li key={post.id}>{post.title}</li>)
       }
    </div>
  )
}

export function wait(delay){
  return new Promise(resolve=>setTimeout(resolve,delay))
}
export default App
