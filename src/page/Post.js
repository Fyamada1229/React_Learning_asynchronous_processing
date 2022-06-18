import { useState, useEffect } from "react";

const Post = () => {
  const [posts, setPost] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPost(data);
    };
    getPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post?.id}>
            {post?.title}
            <br />
            {post?.body}
            <br />
            {post?.userId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
