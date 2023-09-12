import React, { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { wait } from "../App";

const Posts = () => {
  let [post, setPost] = useState("");
  let queryClient = useQueryClient();
  let newPostMutation = useMutation({
    mutationFn: (post) => {
      return wait(1000).then(() =>
        fetch(`http://localhost:3000/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Add Posts"
        onChange={(e) => setPost(e.target.value)}
        value={post}
      />
      <button
        onClick={() => newPostMutation.mutate({ id: Date.now(), title: post })}
      >
        Add Post
      </button>
    </div>
  );
};

export default Posts;
