import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  let queryClient = useQueryClient();
  let { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      wait(1000).then(
        async () => await (await fetch("http://localhost:3000/posts")).json()
      ),
  });

  //Delete Data

  let deleteMutation = useMutation({
    mutationFn: (id) => {
      return wait(1000).then(() =>
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
        })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
  console.log("DATA", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something is wrong</h1>;
  }
  return (
    <div>
      <h1>Add Posts</h1>
      <Posts />
      <h1>Posts</h1>
      {data &&
        data?.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => deleteMutation.mutate(post.id)}>
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}

export function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default App;
